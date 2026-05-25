import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();

const SLOTS = [
  // Branding
  { key: 'logo',                  label: '网站 Logo（顶部/底部/Facebook landing）', url: '/bj/logo.png',               kind: 'image' },
  { key: 'logo-light',            label: 'Landing 页 Logo',                          url: '/logo.png',                  kind: 'image' },

  // 通用页面 banner（about / contact / shop / news / oem-odm 头部）
  { key: 'page-header-bg',        label: '内页头部背景（About/Contact/Shop/News/OEM）', url: '/bj/dp.webp',             kind: 'image' },

  // 首页 Hero 三张轮播
  { key: 'hero-slide-1',          label: '首页 Hero 轮播 1',                          url: '/banner/scent-beads.jpg',    kind: 'image' },
  { key: 'hero-slide-2',          label: '首页 Hero 轮播 2',                          url: '/banner/coffee-cleaner.jpg', kind: 'image' },
  { key: 'hero-slide-3',          label: '首页 Hero 轮播 3',                          url: '/banner/purple-bubble.jpg',  kind: 'image' },

  // About / Landing 公司视频
  { key: 'about-video',           label: 'About / Landing 公司介绍视频',              url: '/bj/about.mp4',              kind: 'video' },

  // Landing 页产品展示 3 张
  { key: 'landing-line-1',        label: 'Google Landing 产品图 1',                  url: '/bj/bubble.jpg',             kind: 'image' },
  { key: 'landing-line-2',        label: 'Google Landing 产品图 2',                  url: '/bj/beads.jpg',              kind: 'image' },
  { key: 'landing-line-3',        label: 'Google Landing 产品图 3',                  url: '/bj/coffee.jpg',             kind: 'image' },

  // 全局联系方式与社交媒体设置 (类型为 text)
  { key: 'contact-email',         label: '官方联络邮箱',                              url: 'info@myklens.com',           kind: 'text' },
  { key: 'contact-phone',         label: '官方联络电话（页脚/联络页显示）',           url: '+86 180 2215 3690',          kind: 'text' },
  { key: 'whatsapp-num',          label: 'WhatsApp 手机号（全站跳转调用，必须带国家区号不要有+和-，如 8618022153690）', url: '8618022153690', kind: 'text' },
  { key: 'social-facebook',       label: 'Facebook 社交媒体链接',                    url: 'https://facebook.com/myklens', kind: 'text' },
  { key: 'social-twitter',        label: 'Twitter (X) 社交媒体链接',                  url: 'https://twitter.com',        kind: 'text' },
  { key: 'social-instagram',      label: 'Instagram 社交媒体链接',                    url: 'https://instagram.com',      kind: 'text' },
  { key: 'social-linkedin',       label: 'LinkedIn 社交媒体链接',                     url: 'https://linkedin.com',       kind: 'text' },
];

let created = 0;
let kept = 0;

for (const slot of SLOTS) {
  const existing = await p.siteMedia.findUnique({ where: { key: slot.key } });
  if (existing) {
    // Only refresh label/kind, never overwrite a custom URL the admin already set
    await p.siteMedia.update({
      where: { key: slot.key },
      data: { label: slot.label, kind: slot.kind },
    });
    kept++;
    console.log(`= ${slot.key.padEnd(22)} (kept current url: ${existing.url})`);
  } else {
    await p.siteMedia.create({ data: slot });
    created++;
    console.log(`+ ${slot.key.padEnd(22)} -> ${slot.url}`);
  }
}

console.log(`\nDone. Created: ${created}, kept: ${kept}, total: ${SLOTS.length}`);
await p.$disconnect();
