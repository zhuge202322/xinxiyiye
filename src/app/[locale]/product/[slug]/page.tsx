import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, Check, Phone, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from 'next-intl/server';
import ProductDetailClient from "@/components/ProductDetailClient";
import CollapsibleProductDescription from "@/components/CollapsibleProductDescription";

import { getProductBySlug, getCategoriesData } from "@/lib/cms";

const getProduct = getProductBySlug;
const getCategories = getCategoriesData;

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const [product, categories] = await Promise.all([
    getProduct(slug),
    getCategories()
  ]);

  if (!product) {
    notFound();
  }

  const t = await getTranslations('product');
  const ts = await getTranslations('shop');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const lp = `/${locale}`;

  const category = product.categories?.[0];

  const translations = {
    ratingLabel: t('ratingLabel'),
    variationsTitle: t('variationsTitle') || 'Select Spec / Variation',
    defaultVariation: t('defaultVariation') || 'Standard',
    noShortDesc: t('noShortDesc'),
    supportOem: t('supportOem'),
    worldwide: t('worldwide'),
    dedicatedRd: t('dedicatedRd'),
    tabDetails: t('tabDetails') || 'Product Details',
    tabSpecs: t('tabSpecs') || 'Specs & Packaging',
    tabFormula: t('tabFormula') || 'Formula & MSDS',
    noDetailedDesc: t('noDetailedDesc') || 'No detailed description available.',
    description: product.description || '',
    specs: (product as any).specs || '',
    formula: (product as any).formula || '',
  };

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      

      {/* 面包�?*/}
      <div className="bg-brand-secondary py-6 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <p className="text-brand-gray font-medium flex items-center text-sm">
            <a href={lp} className="hover:text-brand-primary transition">{tc('home')}</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <a href={`${lp}/shop`} className="hover:text-brand-primary transition">{t('breadcrumbProducts')}</a> 
            {category && (
              <>
                <ChevronRight className="w-4 h-4 mx-2" /> 
                <a href={`${lp}/shop?category=${category.slug}`} className="hover:text-brand-primary transition">{category.name}</a>
              </>
            )}
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary font-bold line-clamp-1">{product.name}</span>
          </p>
        </div>
      </div>

      {/* 产品详情主区�?*/}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 w-full">
        
        {category && (
          <a href={`${lp}/shop?category=${category.slug}`} className="inline-block text-brand-primary font-bold text-sm mb-4 hover:underline">
            &larr; {category.name}
          </a>
        )}

        {/* 产品全套详情、多 SKU 联动�?Specs/Formula 三大 Tab 联动管理客户端组�?*/}
        <ProductDetailClient product={product} translations={translations} />
      </main>
    </div>
  );
}
