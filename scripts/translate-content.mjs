/**
 * Seed translations (FR / ES / AR) for existing categories, product names and post titles.
 * Long-form HTML descriptions are NOT translated here — they remain empty so the frontend
 * falls back to English. Run the dedicated `translate-product-descriptions` step later.
 *
 * Usage:
 *   node scripts/translate-content.mjs
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CATEGORIES = {
  'appliance-care':       { fr: 'Entretien des appareils',  es: 'Cuidado de electrodomésticos', ar: 'العناية بالأجهزة المنزلية' },
  'bathroom-care':        { fr: 'Salle de bain',            es: 'Cuidado del baño',             ar: 'العناية بالحمام' },
  'kitchen-care':         { fr: 'Cuisine',                  es: 'Cuidado de la cocina',         ar: 'العناية بالمطبخ' },
  'laundry-care':         { fr: 'Soin du linge',            es: 'Cuidado de la ropa',           ar: 'العناية بالغسيل' },
  'toilet-bowl-cleaner':  { fr: 'Nettoyant WC',             es: 'Limpiador de inodoros',        ar: 'منظف المرحاض' },
};

const PRODUCTS = {
  'sink-and-drain-cleaner':                    { fr: 'Nettoyant évier et canalisations',         es: 'Limpiador de fregaderos y desagües',      ar: 'منظّف الأحواض والمصارف' },
  'blue-bubble-cleaner-paper-card-packaging':  { fr: 'Nettoyant bulles bleues (carton papier)', es: 'Limpiador burbujas azules (cartón papel)', ar: 'منظّف الفقاعات الزرقاء (تغليف ورقي)' },
  'double-color-bubble-cleaner':               { fr: 'Nettoyant bulles bicolore',                es: 'Limpiador burbujas bicolor',              ar: 'منظّف الفقاعات ثنائي اللون' },
  'purple-bubble-cleaner':                     { fr: 'Nettoyant bulles violettes',               es: 'Limpiador burbujas moradas',              ar: 'منظّف الفقاعات البنفسجية' },
  'blue-bubble-cleaner':                       { fr: 'Nettoyant bulles bleues',                  es: 'Limpiador burbujas azules',               ar: 'منظّف الفقاعات الزرقاء' },
  'green-bubble-cleaner':                      { fr: 'Nettoyant bulles vertes',                  es: 'Limpiador burbujas verdes',               ar: 'منظّف الفقاعات الخضراء' },
  'blue-hanging-bottle-cleaner':               { fr: 'Nettoyant suspendu bleu',                  es: 'Limpiador colgante azul',                 ar: 'منظّف معلّق أزرق' },
  'multipurpose-cleaner':                      { fr: 'Nettoyant multi-usages',                   es: 'Limpiador multiusos',                     ar: 'منظّف متعدد الاستخدامات' },
  'laundry-scent-booster-beads':               { fr: 'Perles parfumées pour le linge',           es: 'Perlas perfumadas para la ropa',          ar: 'حبيبات معطّرة للغسيل' },
  'laundry-sheets':                            { fr: 'Feuilles de lessive',                      es: 'Hojas de detergente',                     ar: 'صفائح غسيل' },
  'dryer-sheets':                              { fr: 'Feuilles assouplissantes pour sèche-linge', es: 'Hojas suavizantes para secadora',       ar: 'صفائح تنعيم للمجفّف' },
  'coffee-maker-descaler':                     { fr: 'Détartrant pour machine à café',           es: 'Descalcificador para cafetera',           ar: 'مزيل الترسبات لماكينة القهوة' },
  'washing-machine-drum-cleaner':              { fr: 'Nettoyant tambour de machine à laver',     es: 'Limpiador del tambor de lavadora',        ar: 'منظّف حلّة الغسالة' },
  'stainless-steel-cleaner':                   { fr: 'Nettoyant acier inoxydable',               es: 'Limpiador de acero inoxidable',           ar: 'منظّف الستانلس ستيل' },
  'garbage-disposal-cleaner':                  { fr: "Nettoyant pour broyeur d'évier",           es: 'Limpiador de triturador de basura',       ar: 'منظّف مفرمة النفايات' },
  'kitchen-degreaser':                         { fr: 'Dégraissant cuisine',                      es: 'Desengrasante de cocina',                 ar: 'مزيل الدهون للمطبخ' },
  'mould-removal':                             { fr: 'Anti-moisissures',                         es: 'Eliminador de moho',                      ar: 'مزيل العفن' },
};

const POST_TITLES = {
  'difference-between-downy-fabric-softeners-dryer-sheets-and-scent-beads': {
    fr: 'Différence entre adoucissants Downy, feuilles assouplissantes et perles parfumées',
    es: 'Diferencia entre los suavizantes Downy, las hojas para secadora y las perlas perfumadas',
    ar: 'الفرق بين منعّمات Downy وصفائح المجفّف والحبيبات المعطّرة',
  },
  'how-to-use-in-wash-scent-beads': {
    fr: 'Comment utiliser les perles parfumées en machine',
    es: 'Cómo usar las perlas perfumadas en el lavado',
    ar: 'كيفية استخدام الحبيبات المعطّرة أثناء الغسيل',
  },
  'how-to-use-downy-rinse-and-refresh': {
    fr: 'Comment utiliser Downy Rinse & Refresh',
    es: 'Cómo usar Downy Rinse & Refresh',
    ar: 'كيفية استخدام Downy Rinse & Refresh',
  },
};

async function main() {
  let updated = 0;

  for (const [slug, t] of Object.entries(CATEGORIES)) {
    const c = await prisma.category.findUnique({ where: { slug } });
    if (!c) continue;
    await prisma.category.update({
      where: { slug },
      data: { nameFr: t.fr, nameEs: t.es, nameAr: t.ar },
    });
    updated++;
  }
  console.log(`Categories translated: ${updated}`);

  updated = 0;
  for (const [slug, t] of Object.entries(PRODUCTS)) {
    const p = await prisma.product.findUnique({ where: { slug } });
    if (!p) continue;
    await prisma.product.update({
      where: { slug },
      data: { nameFr: t.fr, nameEs: t.es, nameAr: t.ar },
    });
    updated++;
  }
  console.log(`Product names translated: ${updated}`);

  updated = 0;
  for (const [slug, t] of Object.entries(POST_TITLES)) {
    const p = await prisma.post.findUnique({ where: { slug } });
    if (!p) continue;
    await prisma.post.update({
      where: { slug },
      data: { titleFr: t.fr, titleEs: t.es, titleAr: t.ar },
    });
    updated++;
  }
  console.log(`Post titles translated: ${updated}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
