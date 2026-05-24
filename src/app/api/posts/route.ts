import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { formatPost } from '@/lib/cms-format';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  const limitParam = req.nextUrl.searchParams.get('per_page');
  const limit = limitParam ? Math.min(parseInt(limitParam, 10) || 0, 100) : undefined;

  const where: any = {};
  if (slug) where.slug = slug;

  const posts = await prisma.post.findMany({
    where,
    orderBy: { date: 'desc' },
    take: limit,
  });

  return NextResponse.json(posts.map((p) => formatPost(p)));
}
