import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import ProductForm from '@/components/admin/ProductForm';

export const dynamic = 'force-dynamic';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);
  if (Number.isNaN(productId)) notFound();

  const [product, categories] = await Promise.all([
    prisma.product.findUnique({
      where: { id: productId },
      include: {
        images: { orderBy: { sortOrder: 'asc' } },
        categories: true,
      },
    }),
    prisma.category.findMany({
      orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
      select: { id: true, name: true },
    }),
  ]);

  if (!product) notFound();

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-6">Edit Product</h2>
      <ProductForm
        mode="edit"
        productId={product.id}
        categories={categories}
        initial={{
          name: product.name,
          slug: product.slug,
          shortDescription: product.shortDescription,
          description: product.description,
          images: product.images.map((img) => ({ src: img.src, alt: img.alt })),
          categoryIds: product.categories.map((c) => c.id),
          translations: {
            name: { fr: (product as any).nameFr || '', es: (product as any).nameEs || '', ar: (product as any).nameAr || '' },
            shortDescription: { fr: (product as any).shortDescriptionFr || '', es: (product as any).shortDescriptionEs || '', ar: (product as any).shortDescriptionAr || '' },
            description: { fr: (product as any).descriptionFr || '', es: (product as any).descriptionEs || '', ar: (product as any).descriptionAr || '' },
          },
        }}
      />
    </div>
  );
}
