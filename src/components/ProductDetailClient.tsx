'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import ProductGallery from './ProductGallery';
import ProductInquiryActions from './ProductInquiryActions';
import CollapsibleProductDescription from './CollapsibleProductDescription';

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

type SkuItem = {
  id: number;
  name: string;
  image: string;
  images?: ImageItem[];
  price?: string;
  size?: string;
};

type Product = {
  id: number;
  name: string;
  short_description: string;
  images: ImageItem[];
  skus: SkuItem[];
};

type Props = {
  product: Product;
  translations: {
    ratingLabel: string;
    variationsTitle: string;
    defaultVariation: string;
    noShortDesc: string;
    supportOem: string;
    worldwide: string;
    dedicatedRd: string;
    tabDetails: string;
    tabSpecs: string;
    tabFormula: string;
    noDetailedDesc: string;
    description: string;
    specs: string;
    formula: string;
  };
};

export default function ProductDetailClient({ product, translations }: Props) {
  const [selectedSku, setSelectedSku] = useState<SkuItem | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'formula'>('details');

  // 当点击不同的 SKU 时，切换对应 SKU 的主图和轮播图画廊
  const mainImages = selectedSku 
    ? (selectedSku.images && selectedSku.images.length > 0
        ? selectedSku.images
        : [{ id: -1, src: selectedSku.image, alt: selectedSku.name }, ...product.images])
    : product.images;

  // 联动显示选中 SKU 的具体名称
  const displayName = selectedSku 
    ? `${product.name} - ${selectedSku.name}`
    : product.name;

  return (
    <div className="space-y-16 w-full">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-16 w-full">
      
      {/* 左侧：画廊展示（传入整合变体后的主图列表） */}
      <ProductGallery 
        key={selectedSku?.id ?? 'default'} 
        images={mainImages} 
        productName={displayName} 
      />

      {/* 右侧：规格和变体选择 */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 leading-tight">
          {displayName}
        </h1>

        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-brand-primary fill-current" />
            ))}
          </div>
          <span className="text-brand-gray text-xs font-medium">{translations.ratingLabel}</span>
        </div>

        {/* 1. 多 SKU / Variations 选择区域 (根据截图的实装效果) */}
        {product.skus && product.skus.length > 0 && (
          <div className="mb-8 bg-slate-50/50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-sm font-bold text-brand-dark mb-4 uppercase tracking-wider">
              {translations.variationsTitle}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* "默认全部 / Default" 项 */}
              <button
                type="button"
                onClick={() => setSelectedSku(null)}
                className={`flex flex-col items-center justify-between p-3 rounded-xl border-2 transition text-center ${
                  selectedSku === null
                    ? 'border-brand-primary bg-white ring-2 ring-brand-primary/10 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-brand-primary'
                }`}
              >
                <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center p-1.5 overflow-hidden mb-2">
                  <img
                    src={product.images[0]?.src || '/logo.png'}
                    alt="Default"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-dark block truncate max-w-[120px]">
                    {translations.defaultVariation}
                  </span>
                  <span className="text-[10px] text-brand-gray font-medium mt-0.5 block">
                    {product.skus[0]?.size || ''}
                  </span>
                </div>
              </button>

              {/* 循环渲染多 SKU */}
              {product.skus.map((sku) => {
                const active = selectedSku?.id === sku.id;
                return (
                  <button
                    key={sku.id}
                    type="button"
                    onClick={() => setSelectedSku(sku)}
                    className={`flex flex-col items-center justify-between p-3 rounded-xl border-2 transition text-center ${
                      active
                        ? 'border-brand-primary bg-white ring-2 ring-brand-primary/10 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-brand-primary'
                    }`}
                  >
                    {/* SKU 主图 */}
                    <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center p-1.5 overflow-hidden mb-2">
                      <img
                        src={sku.image || product.images[0]?.src || '/logo.png'}
                        alt={sku.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      {/* SKU 规格名 */}
                      <span className="text-xs font-extrabold text-brand-dark block truncate max-w-[120px]">
                        {sku.name}
                      </span>
                      {/* SKU 可选的价格或规格尺寸 */}
                      <span className="text-[10px] text-brand-primary font-bold mt-0.5 block">
                        {sku.price || sku.size || ''}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <CollapsibleProductDescription html={product.short_description || `<p>${translations.noShortDesc}</p>`} />

        {/* 2. 联动后的询盘 Action 动作，点击后会将具体的 SkuName 传入弹窗 */}
        <ProductInquiryActions productName={displayName} />

        <ul className="mt-8 space-y-3.5 border-t border-gray-100 pt-6 text-sm text-gray-500 font-medium">
          <li className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-3" />
            {translations.supportOem}
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-3" />
            {translations.worldwide}
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-3" />
            {translations.dedicatedRd}
          </li>
        </ul>
      </div></div>

      {/* 模块二：产品详细描述三大 Tab / 内容区 */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden w-full">
        <div className="flex border-b border-gray-100 bg-gray-50 px-8 pt-8 gap-8 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`pb-4 font-bold text-lg border-b-4 transition ${
              activeTab === 'details'
                ? 'text-brand-primary border-brand-primary'
                : 'text-gray-400 border-transparent hover:text-brand-dark'
            }`}
          >
            {translations.tabDetails}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`pb-4 font-bold text-lg border-b-4 transition ${
              activeTab === 'specs'
                ? 'text-brand-primary border-brand-primary'
                : 'text-gray-400 border-transparent hover:text-brand-dark'
            }`}
          >
            {translations.tabSpecs}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('formula')}
            className={`pb-4 font-bold text-lg border-b-4 transition ${
              activeTab === 'formula'
                ? 'text-brand-primary border-brand-primary'
                : 'text-gray-400 border-transparent hover:text-brand-dark'
            }`}
          >
            {translations.tabFormula}
          </button>
        </div>

        <div className="p-8 md:p-16">
          <div
            className="
              prose prose-lg prose-brand max-w-none text-gray-600 
              prose-headings:text-brand-dark prose-headings:font-bold
              prose-a:text-brand-primary
              
              /* 表格样式定制 - 实现截图中的虚线表格效果 */
              prose-table:w-full prose-table:border-collapse prose-table:my-6
              prose-td:border prose-td:border-dashed prose-td:border-gray-300 prose-td:p-3.5 prose-td:text-base
              prose-th:border prose-th:border-dashed prose-th:border-gray-300 prose-th:p-3.5 prose-th:text-left prose-th:bg-gray-50 prose-th:text-brand-dark prose-th:font-extrabold
              
              /* 图片样式定制 - 保持图片原始大小，不要强制拉伸导致模糊 */
              prose-img:rounded-2xl prose-img:shadow-sm prose-img:mx-auto prose-img:my-8 prose-img:max-w-full
              
              /* 段落样式定制 */
              prose-p:leading-relaxed prose-p:mb-6
              
              /* 加粗文字 */
              prose-strong:text-brand-dark prose-strong:font-extrabold
            "
            dangerouslySetInnerHTML={{
              __html:
                activeTab === 'details'
                  ? translations.description || `<p>${translations.noDetailedDesc}</p>`
                  : activeTab === 'specs'
                  ? translations.specs || `<p>No specifications and packaging information available.</p>`
                  : translations.formula || `<p>No chemical formula and safety MSDS information available.</p>`
            }}
          />
        </div>
      </div>
    </div>
  );
}
