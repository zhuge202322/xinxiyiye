import { PrismaClient } from '@prisma/client';
import T from './product-translations.mjs';

const p = new PrismaClient();

let updated = 0;
for (const [slug, langs] of Object.entries(T)) {
  const product = await p.product.findUnique({ where: { slug }, select: { id: true } });
  if (!product) {
    console.warn(`! product not found: ${slug}`);
    continue;
  }
  await p.product.update({
    where: { id: product.id },
    data: {
      descriptionFr: langs.fr.trim(),
      descriptionEs: langs.es.trim(),
      descriptionAr: langs.ar.trim(),
    },
  });
  console.log(`✓ ${slug}`);
  updated++;
}

console.log(`\nTotal updated: ${updated}/${Object.keys(T).length}`);
await p.$disconnect();
