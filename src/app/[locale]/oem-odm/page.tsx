import { ChevronRight, FlaskConical, Factory, Workflow, ShieldCheck, Palette, Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import CaseMarquee from "@/components/CaseMarquee";
import { getTranslations, getLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('oemOdm');
  return { title: t('metaTitle'), description: t('metaDesc') };
}

export default async function OemOdmPage() {
  const t = await getTranslations('oemOdm');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const lp = `/${locale}`;

  const RD_HIGHLIGHTS = [t('rd1'), t('rd2'), t('rd3'), t('rd4')];
  const CAPACITY_METRICS = [
    { num: t('m1Num'), unit: t('m1Unit'), label: t('m1Label') },
    { num: t('m2Num'), unit: t('m2Unit'), label: t('m2Label') },
    { num: t('m3Num'), unit: t('m3Unit'), label: t('m3Label') },
    { num: t('m4Num'), unit: t('m4Unit'), label: t('m4Label') },
  ];
  const SERVICE_FLOW = [
    { step: '01', title: t('flow1Title'), desc: t('flow1Desc') },
    { step: '02', title: t('flow2Title'), desc: t('flow2Desc') },
    { step: '03', title: t('flow3Title'), desc: t('flow3Desc') },
    { step: '04', title: t('flow4Title'), desc: t('flow4Desc') },
    { step: '05', title: t('flow5Title'), desc: t('flow5Desc') },
    { step: '06', title: t('flow6Title'), desc: t('flow6Desc') },
  ];
  const CERTIFICATIONS = [
    { name: 'ISO 9001',    desc: t('cert1') },
    { name: 'ISO 14001',   desc: t('cert2') },
    { name: 'GMPC',        desc: t('cert3') },
    { name: 'SGS',         desc: t('cert4') },
    { name: 'BSCI',        desc: t('cert5') },
    { name: 'SMETA',       desc: t('cert6') },
    { name: 'REACH',       desc: t('cert7') },
    { name: 'MSDS / COA',  desc: t('cert8') },
  ];
  const CUSTOMIZATION = [
    { icon: FlaskConical, title: t('cust1Title'), desc: t('cust1Desc') },
    { icon: Palette,      title: t('cust2Title'), desc: t('cust2Desc') },
    { icon: ShieldCheck,  title: t('cust3Title'), desc: t('cust3Desc') },
    { icon: Trophy,       title: t('cust4Title'), desc: t('cust4Desc') },
  ];
  const PARTNERS = [t('partner1'), t('partner2'), t('partner3'), t('partner4'), t('partner5'), t('partner6')];

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      <section className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat border-b border-gray-200" style={{ backgroundImage: "url('/bj/dp.webp')" }}>
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span>{t('badge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-5 tracking-tight">{t('heroTitle')}</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">{t('heroDesc')}</p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href={lp} className="hover:text-brand-primary transition">{tc('home')}</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-primary">{t('breadcrumb')}</span>
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold rounded-full text-sm mb-6">{t('s1Badge')}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">{t('s1Title1')} <br />{t('s1Title2')}</h2>
            <p className="text-xl text-brand-gray mb-8 font-medium leading-relaxed">{t('s1Desc')}</p>
            <ul className="space-y-4">
              {RD_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-brand-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/factory/rd.jpg" alt="R&D laboratory" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-6 h-6 text-brand-primary" />
                <span className="font-extrabold text-brand-dark">{t('matureFormulas')}</span>
              </div>
              <p className="text-sm text-brand-gray font-medium">{t('matureFormulasDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-secondary relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-white text-brand-primary font-bold rounded-full text-sm mb-6">{t('s2Badge')}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">{t('s2Title')}</h2>
            <p className="text-xl text-brand-gray font-medium leading-relaxed">{t('s2Desc')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CAPACITY_METRICS.map((m) => (
              <div key={m.label} className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-4xl md:text-5xl font-black text-brand-primary mb-1">{m.num}<span className="text-lg ml-1 text-brand-gray font-bold">{m.unit}</span></div>
                <div className="text-brand-gray font-bold uppercase tracking-wider text-xs mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold rounded-full text-sm mb-6">{t('s3Badge')}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">{t('s3Title')}</h2>
            <p className="text-xl text-brand-gray font-medium leading-relaxed">{t('s3Desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_FLOW.map((s) => (
              <div key={s.step} className="bg-white border-2 border-gray-100 hover:border-brand-primary/40 rounded-3xl p-8 transition-all hover:shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black text-xl">{s.step}</div>
                  <Workflow className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark mb-3">{s.title}</h3>
                <p className="text-brand-gray font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-brand-accent font-bold rounded-full text-sm mb-6">{t('s4Badge')}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{t('s4Title')}</h2>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">{t('s4Desc')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
                <div className="w-14 h-14 rounded-full bg-brand-primary/20 text-brand-accent flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-lg mb-1">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold rounded-full text-sm mb-6">{t('s5Badge')}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">{t('s5Title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMIZATION.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-brand-secondary rounded-3xl p-8 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white text-brand-primary flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">{c.title}</h3>
                  <p className="text-brand-gray font-medium leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-secondary">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 bg-white text-brand-primary font-bold rounded-full text-sm mb-6">{t('s6Badge')}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">{t('s6Title')}</h2>
            <p className="text-xl text-brand-gray font-medium leading-relaxed">{t('s6Desc')}</p>
          </div>
          <div className="mb-16"><CaseMarquee /></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {PARTNERS.map((p) => (
              <div key={p} className="bg-white rounded-2xl py-8 px-4 text-center shadow-sm border border-gray-100 flex items-center justify-center">
                <Factory className="w-6 h-6 text-brand-primary/40 mr-2" />
                <span className="text-brand-dark font-bold text-sm">{p}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-3">{t('ctaTitle')}</h3>
              <p className="text-brand-gray font-medium leading-relaxed">{t('ctaDesc')}</p>
            </div>
            <a href={`${lp}/contact`} className="inline-flex items-center bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-primary/90 transition shadow-lg shrink-0">
              {t('ctaButton')} <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
