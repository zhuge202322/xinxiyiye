import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      images: { orderBy: { sortOrder: 'asc' } },
      categories: true,
    },
  });
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const pid = Number(id);
  const body = await req.json();
  const {
    name, slug, shortDescription, description, images, categoryIds,
    featured, skus,
    nameFr, nameEs, nameAr,
    shortDescriptionFr, shortDescriptionEs, shortDescriptionAr,
    descriptionFr, descriptionEs, descriptionAr,
    specs, specsFr, specsEs, specsAr,
    formula, formulaFr, formulaEs, formulaAr,
  } = body;

  // replace images, categories and skus atomically
  await prisma.productImage.deleteMany({ where: { productId: pid } });
  await prisma.productSku.deleteMany({ where: { productId: pid } });

  const product = await prisma.product.update({
    where: { id: pid },
    data: {
      name,
      slug,
      shortDescription: shortDescription || '',
      description: description || '',
      featured: !!featured,
      nameFr: nameFr || '',
      nameEs: nameEs || '',
      nameAr: nameAr || '',
      shortDescriptionFr: shortDescriptionFr || '',
      shortDescriptionEs: shortDescriptionEs || '',
      shortDescriptionAr: shortDescriptionAr || '',
      descriptionFr: descriptionFr || '',
      descriptionEs: descriptionEs || '',
      descriptionAr: descriptionAr || '',
      specs: specs || '',
      specsFr: specsFr || '',
      specsEs: specsEs || '',
      specsAr: specsAr || '',
      formula: formula || '',
      formulaFr: formulaFr || '',
      formulaEs: formulaEs || '',
      formulaAr: formulaAr || '',
      categories: {
        set: (categoryIds || []).map((cid: number) => ({ id: cid })),
      },
      images: images?.length
        ? {
            create: images.map((img: any, i: number) => ({
              src: img.src,
              alt: img.alt || '',
              sortOrder: i,
            })),
          }
        : undefined,
      skus: skus?.length
        ? {
            create: skus.map((s: any) => ({
              name: s.name,
              nameFr: s.nameFr || '',
              nameEs: s.nameEs || '',
              nameAr: s.nameAr || '',
              image: s.image,
              price: s.price || '',
              size: s.size || '',
            })),
          }
        : undefined,
    },
    include: { images: true, categories: true, skus: true },
  });

  return NextResponse.json(product);
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  await prisma.product.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
