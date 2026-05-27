'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, X, CheckCircle, Loader2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

type Slide =
  | { type: 'image'; src: string; alt: string; title?: string; subtitle?: string }
  | { type: 'video'; src: string; poster?: string; alt: string; title?: string; subtitle?: string };

export default function HeroCarousel({ mediaSlides = [] }: { mediaSlides?: string[] }) {
  const t = useTranslations('hero');
  const locale = useLocale();
  const slides: Slide[] = [
    { type: 'image', src: mediaSlides[0] || '/banner/scent-beads.jpg',   alt: 'Laundry Scent Beads',    title: t('slide1Title'), subtitle: t('slide1Subtitle') },
    { type: 'image', src: mediaSlides[1] || '/banner/coffee-cleaner.jpg', alt: 'Coffee Maker Descaler', title: t('slide2Title'), subtitle: t('slide2Subtitle') },
    { type: 'image', src: mediaSlides[2] || '/banner/purple-bubble.jpg', alt: 'Multi-purpose Cleaner',  title: t('slide3Title'), subtitle: t('slide3Subtitle') },
  ];
  const [current, setCurrent] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  // 询盘表单 states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectInquiryType, setSelectInquiryType] = useState('Bulk Purchasing / Wholesales');
  const [projectDetails, setProjectDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 辅助打开弹窗，清空历史数据
  function openQuoteModal() {
    setShowQuote(true);
    setIsSuccess(false);
    setErrorMessage('');
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setSelectInquiryType('Bulk Purchasing / Wholesales');
    setProjectDetails('');
  }

  async function handleQuoteSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          inquiryType: selectInquiryType,
          projectDetails,
          productName: 'Homepage General Request', // 标注询盘来自首页
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative w-full h-[85vh] bg-brand-secondary flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
          </div>
        ))}

        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 pointer-events-none">
          <div className="space-y-8 max-w-xl pointer-events-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              <span>{t('badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-[1.05] tracking-tight">
              {slides[current].title || (
                <>
                  {t('defaultTitle1')}<br />
                  <span className="text-brand-primary">{t('defaultTitle2')}</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-medium">
              {slides[current].subtitle || t('defaultSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`/${locale}/shop`}
                className="bg-brand-primary text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg flex items-center justify-center"
              >
                {t('viewProducts')} <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="bg-white text-brand-primary px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-gray-50 transition-all shadow-md flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" /> {t('getAQuote')}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-10 h-1.5 rounded-full transition ${
                index === current ? 'bg-brand-primary' : 'bg-black/20 hover:bg-black/40'
              }`}
              aria-label={t('goToSlide', { n: index + 1 })}
            ></button>
          ))}
        </div>
      </section>

      {/* Get A Quote Modal */}
      {showQuote && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowQuote(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuote(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              aria-label={t('close')}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
                {t('quoteTitle')}
              </h3>
              <p className="text-brand-gray mb-6 text-sm">
                {t('quoteSubtitle')}
              </p>

              {isSuccess ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-dark mb-2">Inquiry Submitted!</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                      We have successfully received your quote request and securely routed it to our enterprise mailbox. Our regional manager will send pricing details to your email within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowQuote(false)}
                    className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:opacity-90 transition"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">{t('yourName')}</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">{t('company')}</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">
                        {t('email')} <span className="text-rose-500 font-extrabold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">
                        Phone <span className="text-rose-500 font-extrabold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +86 180..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">{t('inquiryType')}</label>
                    <div className="relative">
                      <select 
                        value={selectInquiryType}
                        onChange={(e) => setSelectInquiryType(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition appearance-none text-brand-dark font-medium"
                      >
                        <option>{t('inquiryOemPrivate')}</option>
                        <option>{t('inquiryOdmCustom')}</option>
                        <option>{t('inquirySamples')}</option>
                        <option>{t('inquiryBulk')}</option>
                        <option>{t('inquiryOther')}</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">{t('message')}</label>
                    <textarea
                      rows={4}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none text-brand-dark"
                      placeholder={t('messagePlaceholder')}
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <p className="text-xs font-bold text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-100">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary text-white py-3.5 rounded-xl font-bold text-base hover:bg-brand-primary/90 transition shadow-lg flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                      </>
                    ) : (
                      t('submitInquiry')
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center">
                    By submitting, you agree to secure transmission of details to our business mailbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
