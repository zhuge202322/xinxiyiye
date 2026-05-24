import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const p = new PrismaClient();
const outDir = path.join(process.cwd(), 'tmp-product-desc');
fs.mkdirSync(outDir, { recursive: true });

const products = await p.product.findMany({
  select: { id: true, slug: true, name: true, shortDescription: true, description: true },
  orderBy: { id: 'asc' },
});

for (const pd of products) {
  fs.writeFileSync(
    path.join(outDir, `${pd.id}-${pd.slug}.json`),
    JSON.stringify({ id: pd.id, slug: pd.slug, name: pd.name, shortDescription: pd.shortDescription, description: pd.description }, null, 2),
    'utf8',
  );
}
console.log(`Exported ${products.length} products to ${outDir}`);
await p.$disconnect();
