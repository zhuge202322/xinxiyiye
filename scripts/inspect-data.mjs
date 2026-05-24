import { PrismaClient } from '@prisma/client';
const p = new PrismaClient();

const cats = await p.category.findMany({ select: { id: true, name: true, slug: true } });
const prods = await p.product.findMany({
  select: { id: true, name: true, slug: true, shortDescription: true, description: true },
});
const posts = await p.post.findMany({
  select: { id: true, title: true, slug: true, excerpt: true, content: true },
});

console.log('=== CATS ===');
for (const c of cats) console.log(`#${c.id} ${c.slug} :: ${c.name}`);

console.log('\n=== PRODUCTS ===');
for (const x of prods) {
  console.log(`#${x.id} ${x.slug}`);
  console.log(`  name: ${x.name}`);
  console.log(`  short(${x.shortDescription.length}): ${x.shortDescription.slice(0, 100)}...`);
  console.log(`  desc(${x.description.length})`);
}

console.log('\n=== POSTS ===');
for (const x of posts) {
  console.log(`#${x.id} ${x.slug}`);
  console.log(`  title: ${x.title}`);
  console.log(`  excerpt(${x.excerpt.length}) content(${x.content.length})`);
}

const totalProdChars = prods.reduce((a, p) => a + p.shortDescription.length + p.description.length + p.name.length, 0);
const totalPostChars = posts.reduce((a, p) => a + p.title.length + p.excerpt.length + p.content.length, 0);
console.log('\nTotal product text chars:', totalProdChars);
console.log('Total post text chars:', totalPostChars);

await p.$disconnect();
