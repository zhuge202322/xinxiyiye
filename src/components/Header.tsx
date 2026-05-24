'use client';

import { useState } from 'react';
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const PRODUCT_NAV = [
  {
    slug: 'laundry-care',
    children: [
      { name: { en: 'Laundry Scent Booster Beads', fr: 'Perles parfumées pour le linge',          es: 'Perlas perfumadas para la ropa',          ar: 'حبيبات معطّرة للغسيل' },               slug: 'laundry-scent-booster-beads' },
      { name: { en: 'Laundry Sheets',              fr: 'Feuilles de lessive',                     es: 'Hojas de detergente',                     ar: 'صفائح غسيل' },                          slug: 'laundry-sheets' },
      { name: { en: 'Dryer Sheets',                fr: 'Feuilles assouplissantes',                es: 'Hojas suavizantes',                       ar: 'صفائح تنعيم للمجفّف' },                slug: 'dryer-sheets' },
    ],
  },
  {
    slug: 'bathroom-care',
    children: [
      { name: { en: 'Multipurpose Cleaner',        fr: 'Nettoyant multi-usages',                  es: 'Limpiador multiusos',                     ar: 'منظّف متعدد الاستخدامات' },           slug: 'multipurpose-cleaner' },
      { name: { en: 'Sink and Drain Cleaner',      fr: 'Nettoyant évier et canalisations',        es: 'Limpiador de fregaderos y desagües',      ar: 'منظّف الأحواض والمصارف' },             slug: 'sink-and-drain-cleaner' },
    ],
  },
  {
    slug: 'kitchen-care',
    children: [
      { name: { en: 'Kitchen Degreaser',           fr: 'Dégraissant cuisine',                     es: 'Desengrasante de cocina',                 ar: 'مزيل الدهون للمطبخ' },                 slug: 'kitchen-degreaser' },
      { name: { en: 'Mould Removal',               fr: 'Anti-moisissures',                        es: 'Eliminador de moho',                      ar: 'مزيل العفن' },                          slug: 'mould-removal' },
      { name: { en: 'Garbage Disposal Cleaner',    fr: "Nettoyant pour broyeur d'évier",          es: 'Limpiador de triturador de basura',       ar: 'منظّف مفرمة النفايات' },               slug: 'garbage-disposal-cleaner' },
      { name: { en: 'Stainless Steel Cleaner',     fr: 'Nettoyant acier inoxydable',              es: 'Limpiador de acero inoxidable',           ar: 'منظّف الستانلس ستيل' },                slug: 'stainless-steel-cleaner' },
    ],
  },
  {
    slug: 'appliance-care',
    children: [
      { name: { en: 'Washing Machine Drum Cleaner', fr: 'Nettoyant tambour de machine à laver',   es: 'Limpiador del tambor de lavadora',        ar: 'منظّف حلّة الغسالة' },                  slug: 'washing-machine-drum-cleaner' },
      { name: { en: 'Coffee Maker Descaler',        fr: 'Détartrant pour machine à café',          es: 'Descalcificador para cafetera',           ar: 'مزيل الترسبات لماكينة القهوة' },        slug: 'coffee-maker-descaler' },
    ],
  },
] as const;

type LocaleKey = 'en' | 'fr' | 'es' | 'ar';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale() as LocaleKey;
  const lp = `/${locale}`;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo only - no company name */}
        <a href={lp || '/'} className="flex items-center gap-2">
          <img src="/bj/logo.png" alt="Myklens" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex h-full">
          <div className="flex h-full">
            <a
              href={lp}
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              {t('nav.home')}
            </a>

            <a
              href={`${lp}/about`}
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              {t('nav.about')}
            </a>

            {/* Products mega menu */}
            <div className="group h-full">
              <a
                href={`${lp}/shop`}
                className="px-5 h-full flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-primary border-b-2 border-transparent group-hover:border-brand-primary transition"
              >
                {t('nav.products')} <ChevronDown className="w-4 h-4 ml-1" />
              </a>

              <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-10 grid grid-cols-4 gap-8">
                  {PRODUCT_NAV.map((cat) => (
                    <div key={cat.slug} className="flex flex-col">
                      <a
                        href={`${lp}/shop?category=${cat.slug}`}
                        className="text-brand-dark font-extrabold text-base mb-4 pb-2 border-b border-gray-100 hover:text-brand-primary transition"
                      >
                        {t(`categories.${cat.slug}` as any)}
                      </a>
                      <ul className="space-y-3">
                        {cat.children.map((sub) => (
                          <li key={sub.slug}>
                            <a
                              href={`${lp}/product/${sub.slug}`}
                              className="text-gray-600 hover:text-brand-primary text-sm font-medium transition"
                            >
                              {sub.name[locale]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`${lp}/oem-odm`}
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              {t('nav.oemOdm')}
            </a>
            <a
              href={`${lp}/news`}
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              {t('nav.blog')}
            </a>
            <a
              href={`${lp}/contact`}
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              {t('nav.contact')}
            </a>
          </div>
        </nav>

        <div className="hidden lg:flex items-center space-x-5">
          <LanguageSwitcher />
          <button className="text-brand-dark hover:text-brand-primary transition" aria-label={t('nav.search')}>
            <Search className="w-5 h-5" />
          </button>
          <a
            href={`${lp}/contact`}
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md"
          >
            {t('nav.getQuote')}
          </a>
        </div>

        <button
          className="lg:hidden text-brand-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            <a href={lp} className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              {t('nav.home')}
            </a>
            <a href={`${lp}/about`} className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              {t('nav.about')}
            </a>

            <div className="border-b border-gray-50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex justify-between items-center px-3 py-3 text-brand-dark font-bold"
              >
                {t('nav.products')}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 pb-3 space-y-3">
                  {PRODUCT_NAV.map((cat) => (
                    <div key={cat.slug}>
                      <a
                        href={`${lp}/shop?category=${cat.slug}`}
                        className="block py-2 font-bold text-brand-primary text-sm"
                      >
                        {t(`categories.${cat.slug}` as any)}
                      </a>
                      <ul className="pl-3 space-y-1">
                        {cat.children.map((sub) => (
                          <li key={sub.slug}>
                            <a
                              href={`${lp}/product/${sub.slug}`}
                              className="block py-1.5 text-gray-600 text-sm"
                            >
                              {sub.name[locale]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href={`${lp}/oem-odm`} className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              {t('nav.oemOdm')}
            </a>
            <a href={`${lp}/news`} className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              {t('nav.blog')}
            </a>
            <a href={`${lp}/contact`} className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              {t('nav.contact')}
            </a>

            <LanguageSwitcher variant="mobile" />

            <a
              href={`${lp}/contact`}
              className="mt-4 bg-brand-primary text-white text-center px-6 py-3 rounded-full text-sm font-bold"
            >
              {t('nav.getQuote')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
