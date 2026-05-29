import { ArrowRight, Award, BadgeCheck, CheckCircle2, Factory, FlaskConical, Globe2, Headset, Leaf, Mail, PackageCheck, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { getTranslations, getLocale } from 'next-intl/server';
import { getMedia } from "@/lib/site-media";
import GoogleLandingFormClient from "@/components/GoogleLandingFormClient";

export default async function LandingPage() {
  const t = await getTranslations('landingGoogle');
  const locale = await getLocale();
  const lp = `/${locale}`;

  const logoLight = await getMedia('logo-light', '/logo.png');
  const aboutVideo = await getMedia('about-video', '/bj/about.mp4');
  const line1 = await getMedia('landing-line-1', '/bj/bubble.jpg');
  const line2 = await getMedia('landing-line-2', '/bj/beads.jpg');
  const line3 = await getMedia('landing-line-3', '/bj/coffee.jpg');

  const productLines = [
    { title: t('line1Title'), desc: t('line1Desc'), image: line1 },
    { title: t('line2Title'), desc: t('line2Desc'), image: line2 },
    { title: t('line3Title'), desc: t('line3Desc'), image: line3 },
  ];
  const proofPoints = [
    { value: '18+',  label: t('proof1') },
    { value: '5',    label: t('proof2') },
    { value: 'ISSA', label: t('proof3') },
    { value: 'L3',   label: t('proof4') },
  ];
  const benefits = [
    { icon: FlaskConical, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: PackageCheck, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: Factory,      title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: Globe2,       title: t('benefit4Title'), desc: t('benefit4Desc') },
  ];
  const process = [t('step1'), t('step2'), t('step3'), t('step4'), t('step5')];
  return (
    <div className="bg-white text-brand-dark">
      <section className="relative overflow-hidden bg-brand-secondary/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,91,79,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(100,161,157,0.22),transparent_34%)]" />
        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-16">
            <a href={lp} className="inline-flex items-center bg-white rounded-2xl px-4 py-2 shadow-sm">
              <img src={logoLight} alt="Myklens" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://wa.me/8618022153690" className="hidden sm:inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-3 rounded-full font-extrabold shadow-sm hover:shadow-md transition">
              <Phone className="w-4 h-4" /> {t('whatsapp')}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 text-brand-primary px-4 py-2 rounded-full text-sm font-extrabold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4" /> {t('heroBadge')}
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-7">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-brand-gray font-medium leading-relaxed max-w-2xl mb-9">
                {t('heroDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#quote" className="inline-flex items-center justify-center bg-brand-primary text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-brand-primary/90 transition">
                  {t('ctaSamples')} <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href={`${lp}/oem-odm`} className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-full font-extrabold text-lg shadow-sm hover:shadow-md transition">
                  {t('ctaOem')}
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {proofPoints.map((item) => (
                  <div key={item.label} className="bg-white/85 backdrop-blur rounded-3xl p-5 shadow-sm">
                    <div className="text-3xl font-black text-brand-primary mb-1">{item.value}</div>
                    <div className="text-xs font-extrabold uppercase tracking-wide text-brand-gray">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white bg-white aspect-video">
                <video src={aboutVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <ShieldCheck className="w-4 h-4" /> {t('videoBadge')}
                  </div>
                  <h2 className="text-3xl font-black mb-2">{t('videoTitle')}</h2>
                  <p className="text-white/85 font-medium">{t('videoDesc')}</p>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-4 md:-left-8 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{t('wooBadgeTitle')}</h3>
                    <p className="text-sm text-brand-gray font-medium">{t('wooBadgeDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-sm font-extrabold mb-5">
              <CheckCircle2 className="w-4 h-4" /> {t('linesBadge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">{t('linesTitle')}</h2>
            <p className="text-xl text-brand-gray font-medium">{t('linesDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productLines.map((item) => (
              <div key={item.title} className="group rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-80 overflow-hidden bg-brand-secondary">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                  <p className="text-brand-gray font-medium leading-relaxed mb-6">{item.desc}</p>
                  <a href="#quote" className="inline-flex items-center text-brand-primary font-extrabold hover:underline underline-offset-4">
                    {t('requestSamples')} <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-secondary/45">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">{t('whyTitle')}</h2>
              <p className="text-xl text-brand-gray font-medium leading-relaxed mb-10">
                {t('whyDesc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                      <div className="w-12 h-12 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-black mb-2">{item.title}</h3>
                      <p className="text-sm text-brand-gray font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img src="/factory/rd.jpg" alt="R&D laboratory" className="rounded-[2rem] object-cover h-72 w-full shadow-sm" />
              <img src="/factory/production.jpg" alt="Production workshop" className="rounded-[2rem] object-cover h-72 w-full shadow-sm mt-10" />
              <img src="/factory/equipment.jpg" alt="Automated filling equipment" className="rounded-[2rem] object-cover h-72 w-full shadow-sm -mt-10" />
              <img src="/factory/certificates.png" alt="Certificates" className="rounded-[2rem] object-cover h-72 w-full shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-sm font-extrabold mb-5">
                <Truck className="w-4 h-4" /> {t('processBadge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">{t('processTitle')}</h2>
              <div className="space-y-5">
                {process.map((item, index) => (
                  <div key={item} className="flex items-center gap-5 bg-gray-50 rounded-3xl p-5 border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black shrink-0">{index + 1}</div>
                    <p className="text-lg font-bold text-brand-dark">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <GoogleLandingFormClient t={{
              quoteBadge: t('quoteBadge'),
              quoteTitle: t('quoteTitle'),
              quoteDesc: t('quoteDesc'),
              yourName: t('yourName'),
              company: t('company'),
              email: t('email'),
              selectToilet: t('selectToilet'),
              selectBeads: t('selectBeads'),
              selectFreshener: t('selectFreshener'),
              selectDetergent: t('selectDetergent'),
              selectAppliance: t('selectAppliance'),
              selectOem: t('selectOem'),
              messagePh: t('messagePh'),
              submitInquiry: t('submitInquiry')
            }} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">{t('bottomTitle')}</h2>
            <p className="text-white/80 font-medium text-lg">{t('bottomDesc')}</p>
          </div>
          <a href="#quote" className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-full font-black text-lg hover:bg-brand-secondary transition shrink-0">
            {t('bottomCta')} <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span>{t('footerCopyright', { year: new Date().getFullYear() })}</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1"><BadgeCheck className="w-4 h-4 text-brand-accent" /> {t('fWoolworths')}</span>
            <span className="inline-flex items-center gap-1"><Leaf className="w-4 h-4 text-brand-accent" /> {t('fEco')}</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-accent" /> {t('fQc')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
