import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const p = new PrismaClient();
const products = await p.product.findMany({
  select: { id: true, slug: true, name: true, description: true },
  orderBy: { id: 'asc' },
});

function clean(html) {
  if (!html) return '';
  // strip html tags, decode common entities, collapse whitespace
  let t = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return t;
}

let out = '';
for (const pd of products) {
  out += `\n\n======== #${pd.id} ${pd.slug} | ${pd.name} ========\n`;
  out += clean(pd.description) + '\n';
}
fs.writeFileSync('tmp-product-desc/_all-clean.txt', out, 'utf8');
console.log('len=', out.length);
await p.$disconnect();
