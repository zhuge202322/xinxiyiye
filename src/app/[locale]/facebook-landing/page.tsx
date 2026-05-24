import { BadgeCheck, CheckCircle2, Factory, FlaskConical, Leaf, Mail, MessageCircle, PackageCheck, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { getTranslations, getLocale } from 'next-intl/server';

export default async function FacebookLandingPage() {
  const t = await getTranslations('landingFb');
  const locale = await getLocale();
  const lp = `/${locale}`;
  const products = [
    { name: t('product1Name'), text: t('product1Desc'), image: '/banner/scent-beads.jpg' },
    { name: t('product2Name'), text: t('product2Desc'), image: '/banner/purple-bubble.jpg' },
    { name: t('product3Name'), text: t('product3Desc'), image: '/banner/coffee-cleaner.jpg' },
  ];
  const steps = [t('step1'), t('step2'), t('step3'), t('step4')];
  return (
    <div className="min-h-screen bg-[#f7fbff] text-brand-dark pb-28 lg:pb-0">
      <main>
        <section className="px-4 pt-5">
          <div className="mx-auto max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <a href={lp} className="rounded-2xl bg-white px-3 py-2 shadow-sm">
                <img src="/bj/logo.png" alt="Myklens" className="h-8 w-auto" />
              </a>
              <a href="https://wa.me/8618022153690" className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-brand-primary shadow-sm">
                <MessageCircle className="h-4 w-4" /> {t('chat')}
              </a>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm sm:grid sm:grid-cols-[1.08fr_0.92fr] sm:items-center sm:gap-6 md:gap-8 md:p-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-3 py-1.5 text-xs font-extrabold text-brand-primary">
                  <Sparkles className="h-3.5 w-3.5" /> {t('badge')}
                </div>
                <h1 className="mb-4 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  {t('heroTitle')}
                </h1>
                <p className="mb-5 text-base font-medium leading-relaxed text-brand-gray">
                  {t('heroDesc')}
                </p>
                <div className="mb-5 grid grid-cols-3 gap-2 text-center sm:max-w-md">
                  <div className="rounded-2xl bg-brand-secondary p-3">
                    <div className="text-xl font-black text-brand-primary">18+</div>
                    <div className="text-[10px] font-extrabold uppercase text-brand-gray">{t('statYears')}</div>
                  </div>
                  <div className="rounded-2xl bg-brand-secondary p-3">
                    <div className="text-xl font-black text-brand-primary">5</div>
                    <div className="text-[10px] font-extrabold uppercase text-brand-gray">{t('statContinents')}</div>
                  </div>
                  <div className="rounded-2xl bg-brand-secondary p-3">
                    <div className="text-xl font-black text-brand-primary">ISSA</div>
                    <div className="text-[10px] font-extrabold uppercase text-brand-gray">{t('statIssa')}</div>
                  </div>
                </div>
                <a href="#lead" className="flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-4 text-base font-black text-white shadow-xl shadow-brand-primary/20 sm:w-max">
                  {t('getFreeSamples')}
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-0">
                <div className="overflow-hidden rounded-3xl bg-brand-secondary">
                  <img src="/banner/scent-beads.jpg" alt="Laundry scent booster beads" className="h-44 w-full object-cover sm:h-full" />
                </div>
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-3xl bg-brand-secondary">
                    <img src="/factory/production.jpg" alt="Production line" className="h-24 w-full object-cover sm:h-32 md:h-40" />
                  </div>
                  <div className="rounded-3xl bg-brand-primary p-4 text-white">
                    <div className="mb-1 flex text-white">
                      {[...Array(5)].map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                    <p className="text-sm font-black leading-tight">{t('trustedText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-7">
          <div className="mx-auto max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            <h2 className="mb-4 text-2xl font-black sm:text-3xl lg:text-4xl">{t('productsTitle')}</h2>
            <div className="flex snap-x gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {products.map((product) => (
                <article key={product.name} className="w-[72vw] shrink-0 snap-start rounded-3xl bg-white p-3 shadow-sm sm:w-auto">
                  <img src={product.image} alt={product.name} className="mb-4 h-36 w-full rounded-2xl object-cover sm:h-32 md:h-44 lg:h-56" />
                  <h3 className="mb-1 text-lg font-black sm:text-base md:text-lg">{product.name}</h3>
                  <p className="text-sm font-medium leading-relaxed text-brand-gray">{product.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-7">
          <div className="mx-auto max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <FlaskConical className="h-7 w-7 shrink-0 text-brand-primary" />
                <div>
                  <h3 className="font-black">{t('perk1Title')}</h3>
                  <p className="text-sm text-brand-gray">{t('perk1Desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <PackageCheck className="h-7 w-7 shrink-0 text-brand-primary" />
                <div>
                  <h3 className="font-black">{t('perk2Title')}</h3>
                  <p className="text-sm text-brand-gray">{t('perk2Desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <Factory className="h-7 w-7 shrink-0 text-brand-primary" />
                <div>
                  <h3 className="font-black">{t('perk3Title')}</h3>
                  <p className="text-sm text-brand-gray">{t('perk3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-7">
          <div className="mx-auto max-w-md rounded-[2rem] bg-white p-5 shadow-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            <h2 className="mb-4 text-2xl font-black sm:text-3xl">{t('stepsTitle')}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl bg-brand-secondary p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-black text-white">{index + 1}</span>
                  <span className="text-sm font-black">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lead" className="px-4 pb-7 scroll-mt-6">
          <div className="mx-auto max-w-md sm:max-w-2xl md:max-w-3xl">
            <div className="rounded-[2rem] bg-brand-dark p-6 text-white shadow-2xl md:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold">
                <CheckCircle2 className="h-4 w-4" /> {t('leadBadge')}
              </div>
              <h2 className="mb-3 text-3xl font-black leading-tight">{t('leadTitle')}</h2>
              <p className="mb-6 text-sm font-medium leading-relaxed text-white/75">
                {t('leadDesc')}
              </p>
              <form className="grid gap-3 sm:grid-cols-2">
                <input type="text" placeholder={t('fieldName')} className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30" />
                <input type="email" placeholder={t('fieldEmail')} className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30" />
                <select className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30">
                  <option>{t('selectBeads')}</option>
                  <option>{t('selectToilet')}</option>
                  <option>{t('selectFreshener')}</option>
                  <option>{t('selectAppliance')}</option>
                  <option>{t('selectOem')}</option>
                </select>
                <textarea rows={3} placeholder={t('messagePh')} className="w-full resize-none rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30 sm:col-span-2" />
                <button type="button" className="w-full rounded-2xl bg-brand-primary py-4 text-base font-black text-white shadow-lg sm:col-span-2">
                  {t('submit')}
                </button>
              </form>
              <div className="mt-5 grid gap-3 text-sm font-medium text-white/75 md:grid-cols-2">
                <a href="mailto:contact@myklens.com" className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-accent" /> contact@myklens.com</a>
                <a href="tel:+8676088220790" className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-accent" /> +86 760-88220790</a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10">
          <div className="mx-auto grid max-w-md grid-cols-3 gap-3 text-center text-xs font-extrabold text-brand-gray sm:max-w-2xl md:max-w-3xl">
            <div className="rounded-2xl bg-white p-3 shadow-sm"><BadgeCheck className="mx-auto mb-1 h-5 w-5 text-brand-primary" /> {t('trustWoolworths')}</div>
            <div className="rounded-2xl bg-white p-3 shadow-sm"><Leaf className="mx-auto mb-1 h-5 w-5 text-brand-primary" /> {t('trustEco')}</div>
            <div className="rounded-2xl bg-white p-3 shadow-sm"><ShieldCheck className="mx-auto mb-1 h-5 w-5 text-brand-primary" /> {t('trustQc')}</div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-3 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md gap-2 pr-16 sm:max-w-2xl md:max-w-3xl">
          <a href="https://wa.me/8618022153690" className="flex min-w-0 flex-1 items-center justify-center rounded-full border border-brand-primary px-3 py-3 text-sm font-black text-brand-primary">
            {t('ctaWhatsApp')}
          </a>
          <a href="#lead" className="flex min-w-0 flex-1 items-center justify-center rounded-full bg-brand-primary px-3 py-3 text-sm font-black text-white">
            {t('ctaSamples')}
          </a>
        </div>
      </div>
    </div>
  );
}
