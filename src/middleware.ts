import { NextResponse, NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { getSessionFromToken, ADMIN_COOKIE } from '@/lib/auth';
import { routing } from '@/i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

function attachPathHeader(res: NextResponse, path: string) {
  res.headers.set('x-pathname', path);
  return res;
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // 1) Admin & admin-api: bypass i18n, guard auth
  if (path.startsWith('/admin') || path.startsWith('/api/admin')) {
    const isAdminLogin = path === '/admin/login' || path === '/api/admin/login';
    if (!isAdminLogin) {
      const token = req.cookies.get(ADMIN_COOKIE)?.value;
      const session = await getSessionFromToken(token);
      if (!session) {
        if (path.startsWith('/api/')) {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const url = req.nextUrl.clone();
        url.pathname = '/admin/login';
        return NextResponse.redirect(url);
      }
    }
    return attachPathHeader(NextResponse.next(), path);
  }

  // 2) Public API (e.g. /api/track, /api/products): no locale routing
  if (path.startsWith('/api/')) {
    return attachPathHeader(NextResponse.next(), path);
  }

  // 3) All other pages: pass through next-intl for locale handling
  const res = intlMiddleware(req);
  return attachPathHeader(res, path);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|uploads|.*\\..*).*)'],
};
