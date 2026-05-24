import { PrismaClient } from '@prisma/client';
const p = new PrismaClient();
const r = await p.product.findMany({
  select: {
    id: true, slug: true, name: true,
    shortDescription: true, description: true,
    nameFr: true, shortDescriptionFr: true, descriptionFr: true,
    nameEs: true, shortDescriptionEs: true, descriptionEs: true,
    nameAr: true, shortDescriptionAr: true, descriptionAr: true,
  },
  orderBy: { id: 'asc' },
});
console.log(JSON.stringify(r, null, 2));
await p.$disconnect();
