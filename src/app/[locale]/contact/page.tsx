import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import JourneyTimeline from "@/components/JourneyTimeline";
import { getTranslations, getLocale } from 'next-intl/server';
import { getMedia } from "@/lib/site-media";

import { getCategoriesData } from "@/lib/cms";

const getCategories = getCategoriesData;

export default async function ContactPage() {
  const categories = await getCategories();
  const t = await getTranslations('contact');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const lp = `/${locale}`;
  const bgHeader = await getMedia('page-header-bg', '/bj/dp.webp');

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

      {/* Contact main */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-6">{t('globalSupport')}</h2>
              <p className="text-brand-gray font-medium text-lg leading-relaxed">
                {t('globalSupportDesc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{t('headquarters')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium whitespace-pre-line">{t('headquartersAddress')}</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{t('hotline')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium whitespace-pre-line">{t('hotlineLines')}</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{t('email')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    <a href="mailto:contact@myklens.com" className="text-brand-primary hover:underline">contact@myklens.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{t('businessHours')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium whitespace-pre-line">{t('businessHoursLines')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 relative z-10">{t('submitTitle')}</h3>
              <p className="text-gray-500 font-medium mb-10 relative z-10 text-lg">{t('submitDesc')}</p>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">{t('fieldName')}</label>
                    <input type="text" placeholder={t('fieldNamePh')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">{t('fieldCompany')}</label>
                    <input type="text" placeholder={t('fieldCompanyPh')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">{t('fieldEmail')}</label>
                    <input type="email" placeholder={t('fieldEmailPh')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">{t('fieldPhone')}</label>
                    <input type="tel" placeholder={t('fieldPhonePh')} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">{t('fieldInquiryType')}</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 pr-12 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition appearance-none text-brand-dark font-medium">
                      <option value="">{t('fieldInquirySelect')}</option>
                      <option>{t('inquiryOem')}</option>
                      <option>{t('inquiryOdm')}</option>
                      <option>{t('inquirySamples')}</option>
                      <option>{t('inquiryDistribution')}</option>
                      <option>{t('inquiryAudit')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-500">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">{t('fieldProject')}</label>
                  <textarea 
                    rows={5} 
                    placeholder={t('fieldProjectPh')} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none text-brand-dark"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-primary/90 hover:-translate-y-1 transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center">
                    {t('sendInquiry')} <Send className="w-5 h-5 ml-3" />
                  </button>
                  <p className="text-sm text-gray-400 text-center mt-6">
                    {t('privacyNote')} <a href="#" className="underline hover:text-brand-primary">{t('privacyPolicy')}</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      
    </div>
  );
}
