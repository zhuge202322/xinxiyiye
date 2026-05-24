'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const COOKIE_NAME = 'myklens_visitor';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getOrCreateVisitorId(): string {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`));
  if (match) return decodeURIComponent(match[1]);
  const id = (crypto as any).randomUUID
    ? (crypto as any).randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
  document.cookie = `${COOKIE_NAME}=${id}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
  return id;
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastPathRef = useRef<string>('');

  useEffect(() => {
    if (!pathname) return;
    if (pathname.startsWith('/admin')) return;

    const fullPath = pathname + (typeof window !== 'undefined' ? window.location.search : '');
    if (lastPathRef.current === fullPath) return;
    lastPathRef.current = fullPath;

    const visitorId = getOrCreateVisitorId();
    const url = window.location.href;
    const referrer = document.referrer || '';

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname, url, referrer, visitorId }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);

  return null;
}
