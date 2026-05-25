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
  };

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      

      {/* 面包屑 */}
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

      {/* 产品详情主区域 */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 w-full">
        
        {category && (
          <a href={`${lp}/shop?category=${category.slug}`} className="inline-block text-brand-primary font-bold text-sm mb-4 hover:underline">
            &larr; {category.name}
          </a>
        )}

        {/* 产品信息首屏与多 SKU 选择（客户端联动组件） */}
        <ProductDetailClient product={product} translations={translations} />

        {/* 产品详细描述 Tab / 内容区 */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100 bg-gray-50 px-8 pt-8 gap-8">
            <button className="pb-4 font-bold text-brand-primary border-b-4 border-brand-primary text-lg">
              {t('tabDetails')}
            </button>
            <button className="pb-4 font-medium text-gray-400 hover:text-brand-dark transition text-lg border-b-4 border-transparent">
              {t('tabSpecs')}
            </button>
            <button className="pb-4 font-medium text-gray-400 hover:text-brand-dark transition text-lg border-b-4 border-transparent">
              {t('tabFormula')}
            </button>
          </div>
          <div className="p-8 md:p-16">
            <div 
              className="
                prose prose-lg prose-brand max-w-none text-gray-600 
                prose-headings:text-brand-dark prose-headings:font-bold
                prose-a:text-brand-primary
                
                /* 表格样式定制 - 实现截图中的虚线表格效果 */
                prose-table:w-full prose-table:border-collapse
                prose-td:border prose-td:border-dashed prose-td:border-gray-300 prose-td:p-3 prose-td:text-base
                prose-th:border prose-th:border-dashed prose-th:border-gray-300 prose-th:p-3 prose-th:text-left prose-th:bg-gray-50 prose-th:text-brand-dark
                
                /* 图片样式定制 - 保持图片原始大小，不要强制拉伸导致模糊 */
                prose-img:rounded-2xl prose-img:shadow-sm prose-img:mx-auto prose-img:my-8 prose-img:max-w-full
                
                /* 段落样式定制 */
                prose-p:leading-relaxed prose-p:mb-6
                
                /* 加粗文字 */
                prose-strong:text-brand-dark prose-strong:font-extrabold
              "
              dangerouslySetInnerHTML={{ __html: product.description || `<p>${t('noDetailedDesc')}</p>` }}
            />
          </div>
        </div>

      </main>

      
    </div>
  );
}
