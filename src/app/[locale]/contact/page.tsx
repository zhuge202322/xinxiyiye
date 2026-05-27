import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import JourneyTimeline from "@/components/JourneyTimeline";
import ContactFormClient from "@/components/ContactFormClient";
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

  // 动态读取全局联络邮箱和电话
  const email = await getMedia('contact-email', 'info@myklens.com');
  const phone = await getMedia('contact-phone', '+86 760-88220790 / 88220791');
  const mobile = await getMedia('contact-mobile', '+86 180 2215 3690');

  // 构造传给客户端表单的多语言翻译
  const formTranslations = {
    fieldName: t('fieldName'),
    fieldNamePh: t('fieldNamePh'),
    fieldCompany: t('fieldCompany'),
    fieldCompanyPh: t('fieldCompanyPh'),
    fieldEmail: t('fieldEmail'),
    fieldEmailPh: t('fieldEmailPh'),
    fieldPhone: t('fieldPhone'),
    fieldPhonePh: t('fieldPhonePh'),
    fieldInquiryType: t('fieldInquiryType'),
    fieldInquirySelect: t('fieldInquirySelect'),
    inquiryOem: t('inquiryOem'),
    inquiryOdm: t('inquiryOdm'),
    inquirySamples: t('inquirySamples'),
    inquiryDistribution: t('inquiryDistribution'),
    inquiryAudit: t('inquiryAudit'),
    fieldProject: t('fieldProject'),
    fieldProjectPh: t('fieldProjectPh'),
    sendInquiry: t('sendInquiry'),
    privacyNote: t('privacyNote'),
    privacyPolicy: t('privacyPolicy'),
    submitTitle: t('submitTitle'),
    submitDesc: t('submitDesc'),
  };

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
                  <div className="text-gray-600 text-sm leading-relaxed font-medium space-y-1">
                    <p><span className="text-slate-400 font-bold mr-1">座机 (Landline):</span> {phone}</p>
                    <p><span className="text-slate-400 font-bold mr-1">手机 (Mobile):</span> {mobile}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{t('email')}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    <a href={`mailto:${email}`} className="text-brand-primary hover:underline">{email}</a>
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
            <ContactFormClient translations={formTranslations} />
          </div>

        </div>
      </main>

      
    </div>
  );
}
