import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_SC } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import AnalyticsTracker from "@/components/AnalyticsTracker";

import { routing, isRtl } from "@/i18n/routing";
import { getMedia } from "@/lib/site-media";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "myklens — Premium Home Cleaning Products & OEM/ODM Manufacturer",
  description:
    "Global supplier of laundry care, bathroom care, kitchen care and appliance care products. One-stop OEM/ODM service for premium home-cleaning brands.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = isRtl(locale) ? "rtl" : "ltr";
  const logoUrl = await getMedia("logo", "/bj/logo.png");

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakartaSans.variable} ${notoSansSC.variable} font-sans antialiased overflow-x-hidden`}
    >
      <body className="text-brand-dark min-h-screen flex flex-col relative">
        <NextIntlClientProvider>
          <Header logoUrl={logoUrl} />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <WhatsAppBtn />
          <ThemeCustomizer />
          <AnalyticsTracker />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
