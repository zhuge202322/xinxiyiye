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
    nameFr, nameEs, nameAr,
    shortDescriptionFr, shortDescriptionEs, shortDescriptionAr,
    descriptionFr, descriptionEs, descriptionAr,
  } = body;

  // replace images and categories atomically
  await prisma.productImage.deleteMany({ where: { productId: pid } });

  const product = await prisma.product.update({
    where: { id: pid },
    data: {
      name,
      slug,
      shortDescription: shortDescription || '',
      description: description || '',
      nameFr: nameFr || '',
      nameEs: nameEs || '',
      nameAr: nameAr || '',
      shortDescriptionFr: shortDescriptionFr || '',
      shortDescriptionEs: shortDescriptionEs || '',
      shortDescriptionAr: shortDescriptionAr || '',
      descriptionFr: descriptionFr || '',
      descriptionEs: descriptionEs || '',
      descriptionAr: descriptionAr || '',
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
    },
    include: { images: true, categories: true },
  });

  return NextResponse.json(product);
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  await prisma.product.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
