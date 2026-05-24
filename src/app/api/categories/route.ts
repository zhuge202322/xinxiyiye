import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { formatCategory } from '@/lib/cms-format';

export const dynamic = 'force-dynamic';

export async function GET() {
  const cats = await prisma.category.findMany({
    orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
    include: { _count: { select: { products: true } } },
  });
  return NextResponse.json(cats.map((c) => formatCategory(c)));
}
