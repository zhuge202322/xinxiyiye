/**
 * One-time import script: pull all WP/WC data from remote backend
 * and store into local SQLite + public/uploads/.
 *
 * Usage:  node scripts/import-from-wp.mjs
 */

import { PrismaClient } from '@prisma/client';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const UPLOAD_DIR = path.join(ROOT, 'public', 'uploads');

const WP_BASE = 'http://45.145.229.20:6411';

const prisma = new PrismaClient();

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

/**
 * Download an image and save under public/uploads/. Returns local URL like /uploads/abc.jpg
 * Falls back to original URL if download fails.
 */
async function downloadImage(remoteUrl) {
  if (!remoteUrl) return null;
  try {
    const res = await fetch(remoteUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = (path.extname(new URL(remoteUrl).pathname) || '.jpg').split('?')[0];
    const hash = crypto.createHash('md5').update(remoteUrl).digest('hex').slice(0, 16);
    const filename = `${hash}${ext}`;
    const localPath = path.join(UPLOAD_DIR, filename);
    fs.writeFileSync(localPath, buf);
    return `/uploads/${filename}`;
  } catch (err) {
    console.warn(`  ! Failed to download ${remoteUrl}: ${err.message}`);
    return remoteUrl; // fall back to original URL
  }
}

/**
 * Walk HTML body and download every <img src="..."> from the WP host.
 * Returns the rewritten HTML and stats.
 */
async function rewriteHtmlImages(html) {
  if (!html) return html;
  const regex = /<img\b[^>]*\bsrc=["']([^"']+)["']/gi;
  const matches = [...html.matchAll(regex)];
  let out = html;
  for (const m of matches) {
    const src = m[1];
    if (!src.startsWith('http')) continue;
    const local = await downloadImage(src);
    if (local && local !== src) {
      out = out.split(src).join(local);
    }
  }
  return out;
}

async function importCategories() {
  console.log('Importing categories...');
  const cats = await fetchJson(`${WP_BASE}/?rest_route=/wc/store/v1/products/categories&per_page=100`);
  for (const c of cats) {
    const imageUrl = c.image?.src ? await downloadImage(c.image.src) : null;
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name, imageUrl },
      create: { name: c.name, slug: c.slug, imageUrl },
    });
    console.log(`  + ${c.name}`);
  }
}

async function importProducts() {
  console.log('Importing products...');
  const products = await fetchJson(`${WP_BASE}/?rest_route=/wc/store/v1/products&per_page=100`);
  for (const p of products) {
    const desc = await rewriteHtmlImages(p.description || '');
    const shortDesc = await rewriteHtmlImages(p.short_description || '');

    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        shortDescription: shortDesc,
        description: desc,
      },
      create: {
        name: p.name,
        slug: p.slug,
        shortDescription: shortDesc,
        description: desc,
      },
    });

    // clear and rebuild image list
    await prisma.productImage.deleteMany({ where: { productId: product.id } });
    if (Array.isArray(p.images)) {
      for (let i = 0; i < p.images.length; i++) {
        const img = p.images[i];
        const localSrc = await downloadImage(img.src);
        if (!localSrc) continue;
        await prisma.productImage.create({
          data: {
            productId: product.id,
            src: localSrc,
            alt: img.alt || '',
            sortOrder: i,
          },
        });
      }
    }

    // link categories
    if (Array.isArray(p.categories)) {
      const catRecords = await prisma.category.findMany({
        where: { slug: { in: p.categories.map((c) => c.slug) } },
      });
      await prisma.product.update({
        where: { id: product.id },
        data: {
          categories: {
            set: catRecords.map((c) => ({ id: c.id })),
          },
        },
      });
    }

    console.log(`  + ${p.name}`);
  }
}

async function importPosts() {
  console.log('Importing posts...');
  const posts = await fetchJson(`${WP_BASE}/?rest_route=/wp/v2/posts&_embed=1&per_page=100`);
  for (const p of posts) {
    const featRemote = p._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
    const featLocal = featRemote ? await downloadImage(featRemote) : null;
    const author = p._embedded?.author?.[0]?.name || 'Myklens Team';
    const content = await rewriteHtmlImages(p.content?.rendered || '');
    const excerpt = await rewriteHtmlImages(p.excerpt?.rendered || '');

    await prisma.post.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title?.rendered || '',
        excerpt,
        content,
        featuredImage: featLocal,
        authorName: author,
        date: new Date(p.date),
      },
      create: {
        slug: p.slug,
        title: p.title?.rendered || '',
        excerpt,
        content,
        featuredImage: featLocal,
        authorName: author,
        date: new Date(p.date),
      },
    });
    console.log(`  + ${p.title?.rendered}`);
  }
}

async function main() {
  console.log(`Importing from ${WP_BASE} ...`);
  await importCategories();
  await importProducts();
  await importPosts();
  console.log('Done.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
