'use client';

import { useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS, type Locale } from '@/i18n/routing';

export default function LanguageSwitcher({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile';
}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  function switchTo(locale: Locale) {
    if (locale === currentLocale) {
      setOpen(false);
      return;
    }
    // Replace the first /xx segment with the new locale
    const segments = pathname.split('/').filter(Boolean);
    if (LOCALES.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    const newPath = '/' + segments.join('/');
    setOpen(false);
    startTransition(() => {
      router.replace(newPath);
      router.refresh();
    });
  }

  if (variant === 'mobile') {
    return (
      <div className="border-b border-gray-50 py-3">
        <div className="flex items-center gap-2 px-3 mb-2 text-xs uppercase tracking-wide text-gray-400 font-bold">
          <Globe className="w-3.5 h-3.5" /> Language
        </div>
        <div className="grid grid-cols-2 gap-2 px-3">
          {LOCALES.map((l) => {
            const active = l === currentLocale;
            return (
              <button
                key={l}
                onClick={() => switchTo(l as Locale)}
                disabled={isPending}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold border transition ${
                  active
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                <span>{LOCALE_FLAGS[l as Locale]}</span>
                <span>{LOCALE_LABELS[l as Locale]}</span>
                {active && <Check className="w-3.5 h-3.5 ml-auto" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-brand-dark hover:text-brand-primary transition text-sm font-bold"
        aria-label="Language"
      >
        <Globe className="w-5 h-5" />
        <span className="hidden xl:inline">{LOCALE_LABELS[currentLocale]}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40"
            aria-label="Close"
          />
          <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 z-50 py-1.5">
            {LOCALES.map((l) => {
              const active = l === currentLocale;
              return (
                <button
                  key={l}
                  onClick={() => switchTo(l as Locale)}
                  disabled={isPending}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-bold transition ${
                    active ? 'text-brand-primary bg-brand-primary/5' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base">{LOCALE_FLAGS[l as Locale]}</span>
                  <span>{LOCALE_LABELS[l as Locale]}</span>
                  {active && <Check className="w-3.5 h-3.5 ml-auto" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
