import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  detectSource, detectDevice, isBot, hashIp, clientIpFromHeaders,
} from '@/lib/analytics';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path, url, referrer, visitorId } = body as {
      path?: string; url?: string; referrer?: string; visitorId?: string;
    };

    if (!path || !url) return NextResponse.json({ ok: false }, { status: 400 });

    // ignore admin routes and api
    if (path.startsWith('/admin') || path.startsWith('/api/')) {
      return NextResponse.json({ ok: true, ignored: true });
    }

    const userAgent = req.headers.get('user-agent') || '';
    const ip = clientIpFromHeaders(req.headers);

    const u = (() => { try { return new URL(url); } catch { return null; } })();
    const utm = {
      source:   u?.searchParams.get('utm_source')   || '',
      medium:   u?.searchParams.get('utm_medium')   || '',
      campaign: u?.searchParams.get('utm_campaign') || '',
    };

    const source = detectSource({ url, referrer, utm });

    await prisma.pageView.create({
      data: {
        path,
        referrer: referrer || '',
        source,
        utmSource: utm.source,
        utmMedium: utm.medium,
        utmCampaign: utm.campaign,
        device: detectDevice(userAgent),
        ipHash: hashIp(ip),
        visitorId: visitorId || '',
        userAgent: userAgent.slice(0, 300),
        isBot: isBot(userAgent),
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('track error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
