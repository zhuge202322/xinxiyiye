import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, ShieldCheck, Leaf, Microscope, Building2, Phone, Mail } from "lucide-react";
import JourneyTimeline from "@/components/JourneyTimeline";
import { getTranslations, getLocale } from 'next-intl/server';
import { getMedia } from "@/lib/site-media";

import { getCategoriesData } from "@/lib/cms";

const getCategories = getCategoriesData;

export default async function AboutPage() {
  const categories = await getCategories();
  const t = await getTranslations('about');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const lp = `/${locale}`;

  const bgHeader = await getMedia('page-header-bg', '/bj/dp.webp');
  const aboutVideo = await getMedia('about-video', '/bj/about.mp4');

  const imgRd = await getMedia('about-rd-image', '/factory/rd.jpg');
  const imgExhibition = await getMedia('about-exhibition-image', '/factory/exhibition.jpg');
  const imgProduction = await getMedia('about-production-image', '/factory/production.jpg');
  const imgEquipment = await getMedia('about-equipment-image', '/factory/equipment.jpg');

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      

      {/* 面包屑 / 页面标题 */}
      <div 
        className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center border-b border-gray-200"
        style={{ backgroundImage: `url('${bgHeader}')` }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('title')}</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            {t('subtitle')}
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href={lp} className="hover:text-brand-primary transition">{tc('home')}</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">{t('breadcrumb')}</span>
          </p>
        </div>
      </div>

      {/* 企业概况介绍 */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-brand-secondary text-brand-primary font-bold rounded-full text-sm">
                <Building2 className="w-4 h-4 mr-2" />
                {t('sourceFactory')}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
                {t('heroTitle1')}<br/><span className="text-brand-primary">{t('heroTitle2')}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                <strong className="text-brand-dark">{t('storyLabel')}</strong> {t('storyText')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                <strong className="text-brand-dark">{t('teamLabel')}</strong> {t('teamText')}
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-8 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">5</div>
                  <div className="text-gray-500 font-medium">{t('statContinents')}</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">18+</div>
                  <div className="text-gray-500 font-medium">{t('statYears')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border border-gray-100 bg-gray-50">
                <video
                  src={aboutVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-xl">{t('trustQuality')}</h4>
                    <p className="text-gray-500 text-sm font-medium">{t('trustQualityDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop & R&D environment showcase */}
      <section className="py-24 bg-brand-secondary/30">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">{t('modernTitle')}</h2>
            <p className="text-lg text-gray-500 font-medium">{t('modernDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src={imgRd} alt="R&D Laboratory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">{t('labCaption')}</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src={imgExhibition} alt="Industry Exhibitions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">{t('exhibitionCaption')}</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src={imgProduction} alt="Production Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">{t('workshopCaption')}</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src={imgEquipment} alt="Automated Filling Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">{t('fillingCaption')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">{t('journeyTitle')}</h2>
            <p className="text-lg text-gray-500 font-medium">{t('journeyDesc')}</p>
          </div>

          <JourneyTimeline />
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">{t('whyPartnerTitle')}</h2>
            <p className="text-lg text-gray-500 font-medium">{t('whyPartnerDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">{t('rdTitle')}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
{t('rdText')}
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">{t('qcTitle')}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
{t('qcText')}
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">{t('sustainTitle')}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {t('sustainText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
