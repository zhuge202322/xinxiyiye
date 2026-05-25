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
  };
};

export default function ProductDetailClient({ product, translations }: Props) {
  const [selectedSku, setSelectedSku] = useState<SkuItem | null>(null);

  // 如果选定了变体，主图优先展示变体图，否则展示产品大图库
  const mainImages = selectedSku 
    ? [{ id: -1, src: selectedSku.image, alt: selectedSku.name }, ...product.images]
    : product.images;

  // 联动后的显示名字
  const displayName = selectedSku 
    ? `${product.name} - ${selectedSku.name}`
    : product.name;

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-16 mb-16">
      
      {/* 左侧：画廊展示（传入整合变体后的主图列表） */}
      <ProductGallery 
        key={selectedSku?.id ?? 'default'} 
        images={mainImages} 
        productName={displayName} 
      />

      {/* 右侧：规格和变体选择 */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 leading-tight">
          {product.name}
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
      </div>
    </div>
  );
}
