import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { formatProduct } from '@/lib/cms-format';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  const categorySlug = req.nextUrl.searchParams.get('category');

  const where: any = {};
  if (slug) where.slug = slug;
  if (categorySlug) where.categories = { some: { slug: categorySlug } };

  const products = await prisma.product.findMany({
    where,
    orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
    include: {
      images: { orderBy: { sortOrder: 'asc' } },
      categories: true,
    },
  });

  return NextResponse.json(products.map((p) => formatProduct(p)));
}
