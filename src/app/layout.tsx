/**
 * Root layout is intentionally minimal.
 * - For public pages, the real <html>/<body> + site shell is rendered by `[locale]/layout.tsx`.
 * - For admin pages, `admin/layout.tsx` renders its own shell inside this root.
 * We can't render <html>/<body> here AND in [locale] (Next.js disallows nested <html>),
 * so the locale layout owns those tags and this file just passes through.
 */
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
