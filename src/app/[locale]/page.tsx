import { ShieldCheck, FlaskConical, Factory, Award, Globe, Headset, Ship, Plane, Recycle, PencilRuler } from "lucide-react";
import { getTranslations } from 'next-intl/server';
import HeroCarousel from "@/components/HeroCarousel";
import CategoryMatrix from "@/components/CategoryMatrix";
import ProductGrid from "@/components/ProductGrid";
import ArticleShowcase from "@/components/ArticleShowcase";

import { getCategoriesData, getFeaturedProductsData, getPostsData } from "@/lib/cms";
import { getMedia } from "@/lib/site-media";

const getCategories = getCategoriesData;
const getProducts = getFeaturedProductsData;
const getPosts = () => getPostsData(3);

export default async function Home() {
  const t = await getTranslations('home');
  const reasons = [
    { icon: FlaskConical, title: t('reason1Title'), desc: t('reason1Desc') },
    { icon: Factory,      title: t('reason2Title'), desc: t('reason2Desc') },
    { icon: Award,        title: t('reason3Title'), desc: t('reason3Desc') },
    { icon: ShieldCheck,  title: t('reason4Title'), desc: t('reason4Desc') },
    { icon: Globe,        title: t('reason5Title'), desc: t('reason5Desc') },
    { icon: Headset,      title: t('reason6Title'), desc: t('reason6Desc') },
  ];
  const services = [
    { icon: Ship,        title: t('service1Title'), desc: t('service1Desc') },
    { icon: Plane,       title: t('service2Title'), desc: t('service2Desc') },
    { icon: ShieldCheck, title: t('service3Title'), desc: t('service3Desc') },
    { icon: Recycle,     title: t('service4Title'), desc: t('service4Desc') },
    { icon: PencilRuler, title: t('service5Title'), desc: t('service5Desc') },
    { icon: Globe,       title: t('service6Title'), desc: t('service6Desc') },
  ];
  const [categories, products, posts, slide1, slide2, slide3] = await Promise.all([
    getCategories(),
    getProducts(),
    getPosts(),
    getMedia('hero-slide-1', '/banner/scent-beads.jpg'),
    getMedia('hero-slide-2', '/banner/coffee-cleaner.jpg'),
    getMedia('hero-slide-3', '/banner/purple-bubble.jpg'),
  ]);

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      {/* 1. Hero Carousel */}
      <HeroCarousel mediaSlides={[slide1, slide2, slide3]} />

      {/* 2. Category Matrix (Dynamic from WooCommerce) */}
      <CategoryMatrix categories={categories} />

      {/* 3. Hot Products Grid (Dynamic from WooCommerce) */}
      <ProductGrid products={products} />

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
              <span>{t('whyBadge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              {t('whyTitle')}
            </h2>
            <p className="text-xl text-brand-gray">
              {t('whyDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">{r.title}</h3>
                  <p className="text-brand-gray font-medium leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-brand-secondary rounded-3xl p-10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">18+</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">{t('statYears')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">5</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">{t('statContinents')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">L3</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">{t('statSafety')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">ISSA</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">{t('statMember')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Article Showcase */}
      <ArticleShowcase posts={posts} />

      {/* 6. Our Services Always Go The Extra Mile */}
      <section className="py-24 bg-brand-secondary/40 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-5 leading-tight">
              {t('servicesTitle')}
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full border-2 border-brand-primary text-brand-primary flex items-center justify-center shrink-0 bg-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-dark mb-2">{s.title}</h3>
                    <p className="text-brand-gray font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
