// Product description translations (FR / ES / AR)
// Keys are product slugs. Each value is an object { fr, es, ar } with full HTML.

const T = {};

// ============================================================
// 1. Sink and Drain Cleaner
// ============================================================
T['sink-and-drain-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Nos pastilles nettoyantes pour évier et canalisations éliminent puissamment les bouchons et offrent une fraîcheur durable à chaque utilisation. Déposez simplement une pastille dans la canalisation, laissez agir 15 à 30 minutes, puis rincez à l'eau chaude — la pastille se dissout entièrement et libère des principes actifs qui pénètrent en profondeur dans les tuyaux pour décomposer la graisse, les résidus de savon, les cheveux et les dépôts organiques.</p>

<h3>Caractéristiques</h3>
<ul>
<li><strong>Élimination puissante des bouchons</strong> – Formule avancée à base d'enzymes et de tensioactifs qui dissout graisses, résidus de savon, cheveux et matières organiques accumulés dans les tuyaux.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les mauvaises odeurs à la source en décomposant les dépôts organiques au fond des canalisations.</li>
<li><strong>Prévient les bouchons futurs</strong> – Une utilisation régulière (une fois par semaine) maintient des canalisations dégagées.</li>
<li><strong>Sûr pour toutes les canalisations</strong> – Formule non corrosive à pH contrôlé (7-9), compatible PVC, métal et fosses septiques. Sans acide ni produit caustique.</li>
<li><strong>Facile à utiliser</strong> – Application simple : déposer et attendre. Une pastille par traitement, sans frottage ni démontage.</li>
<li><strong>Multi-usages</strong> – Efficace pour éviers de cuisine, lavabos, douches, broyeurs et même WC.</li>
</ul>

<h3>Spécifications</h3>
<table>
<tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>SDC-250</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs, enzymes, acide citrique (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Parfums</th><td>Citron / Frais / Sans parfum</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Poids net</th><td>250 g (25 pastilles)</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody>
</table>

<h3>Informations produit</h3>
<p>Le nettoyant Myklens pour évier et canalisations est une solution innovante pour maintenir des évacuations fluides et des éviers parfaitement frais. Sa formule concentrée pénètre profondément dans les tuyaux pour dissoudre graisse, savon, cheveux et résidus organiques responsables des écoulements lents et des mauvaises odeurs.</p>
<p>Fabriqué avec des ingrédients de qualité cosmétique et un pH maîtrisé entre 7 et 9, notre nettoyant est efficace contre les bouchons mais respectueux de votre plomberie : ni acide agressif, ni produit caustique.</p>

<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium et contrôle qualité strict à chaque étape de production.</li>
<li><strong>Centre de R&D professionnel</strong> — Une équipe de chimistes et designers cumulant plus de 15 ans d'expérience. Nouvelles séries chaque mois. Collaborations OEM & ODM bienvenues.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestras pastillas limpiadoras para fregaderos y desagües eliminan obstrucciones de forma potente y aportan frescura duradera con cada uso. Coloque una pastilla directamente en el desagüe, deje actuar 15-30 minutos y enjuague con agua caliente — la pastilla se disuelve por completo y libera ingredientes activos que penetran en las tuberías para descomponer grasa, jabón, cabellos y residuos orgánicos.</p>

<h3>Características</h3>
<ul>
<li><strong>Desatasco potente</strong> – Fórmula avanzada con enzimas y tensioactivos que disuelve grasa, jabón, cabellos y materia orgánica acumulada en tuberías.</li>
<li><strong>Elimina olores del desagüe</strong> – Neutraliza los malos olores en la fuente al descomponer los residuos orgánicos.</li>
<li><strong>Previene futuros atascos</strong> – El uso regular (una vez por semana) mantiene los desagües limpios y libres.</li>
<li><strong>Seguro para todas las tuberías</strong> – Fórmula no corrosiva con pH controlado (7-9), apta para PVC, metal y fosas sépticas. Sin ácidos ni cáusticos.</li>
<li><strong>Fácil de usar</strong> – Solo aplicar y esperar. Una pastilla por tratamiento, sin frotar ni desmontar.</li>
<li><strong>Multisuperficie</strong> – Eficaz en fregaderos, lavabos, duchas, trituradores y desagües de inodoro.</li>
</ul>

<h3>Especificaciones</h3>
<table>
<tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>SDC-250</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos, enzimas, ácido cítrico (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Aromas</th><td>Limón / Fresco / Sin aroma</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Peso neto</th><td>250 g (25 pastillas)</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody>
</table>

<h3>Información del producto</h3>
<p>El limpiador de fregaderos y desagües Myklens es una solución innovadora para mantener desagües libres y fregaderos sin malos olores. Su fórmula concentrada penetra profundamente en las tuberías para disolver grasa, jabón, cabellos y residuos orgánicos que provocan lentitud y malos olores.</p>
<p>Elaborado con ingredientes de grado cosmético y pH equilibrado entre 7 y 9, es eficaz contra obstrucciones pero respetuoso con la fontanería: sin ácidos agresivos ni cáusticos.</p>

<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control de calidad estricto en cada etapa.</li>
<li><strong>Centro de I+D profesional</strong> — Equipo de químicos y diseñadores con más de 15 años de experiencia. Nuevas series cada mes. Colaboraciones OEM & ODM bienvenidas.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>تقدم أقراص منظف الأحواض والمصارف من Myklens إزالة قوية للانسدادات ونضارة طويلة الأمد مع كل استخدام. ضع قرصاً واحداً مباشرة في المصرف، واتركه يعمل لمدة 15-30 دقيقة، ثم اشطف بالماء الساخن — يذوب القرص تماماً مطلقاً مكونات نشطة تتغلغل بعمق داخل الأنابيب لتفتيت الدهون وبقايا الصابون والشعر والترسبات العضوية.</p>

<h3>المزايا</h3>
<ul>
<li><strong>إزالة قوية للانسدادات</strong> – تركيبة متطورة بالإنزيمات والمواد الفعّالة تذيب الدهون والصابون والشعر والمواد العضوية المتراكمة.</li>
<li><strong>القضاء على الروائح</strong> – يحيّد الروائح الكريهة من المصدر بتفكيك الترسبات العضوية المسبّبة لها.</li>
<li><strong>الوقاية من الانسدادات المستقبلية</strong> – الاستخدام المنتظم (مرة أسبوعياً) يحافظ على مصارف نظيفة.</li>
<li><strong>آمن لجميع الأنابيب</strong> – تركيبة غير مسببة للتآكل بحموضة مضبوطة (7-9)، آمنة لأنابيب PVC والمعدن وأنظمة الصرف الصحي. بدون أحماض كاوية.</li>
<li><strong>سهل الاستخدام</strong> – ضع وانتظر. قرص واحد لكل استخدام، دون فرك أو تفكيك.</li>
<li><strong>استخدامات متعددة</strong> – فعّال لأحواض المطبخ والحمام والدش ومفارم النفايات وحتى مصارف المرحاض.</li>
</ul>

<h3>المواصفات</h3>
<table>
<tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>SDC-250</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة وإنزيمات وحمض الستريك (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>الروائح</th><td>ليمون / منعش / بدون رائحة</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>الوزن الصافي</th><td>250 جم (25 قرصاً)</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody>
</table>

<h3>معلومات المنتج</h3>
<p>منظف الأحواض والمصارف من Myklens حل مبتكر للحفاظ على تدفق المصارف ونضارة الأحواض. تركيبته المركّزة تخترق الأنابيب بعمق لتذيب الدهون والصابون والشعر والترسبات العضوية المسبّبة للبطء والروائح.</p>
<p>مصنوع بمكونات بدرجة تجميلية وبحموضة مضبوطة بين 7 و 9، فعّال على الانسدادات ولطيف على السباكة. بدون أحماض قاسية أو مواد كاوية.</p>

<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ونظام صارم لمراقبة الجودة في كل مرحلة من مراحل الإنتاج.</li>
<li><strong>مركز بحث وتطوير محترف</strong> — فريق من الكيميائيين والمصممين بخبرة تتجاوز 15 عاماً. إطلاق سلاسل جديدة شهرياً. نرحب بشراكات OEM وODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 5. Blue Bubble Cleaner (toilet tablets)
// ============================================================
T['blue-bubble-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Pastilles nettoyantes automatiques pour cuvette de WC 2×50 g, sûres pour fosses septiques, sans javel. Une nouvelle formule au pouvoir nettoyant longue durée, à base d'ingrédients de qualité cosmétique, doux et sûrs. pH maîtrisé entre 7 et 9, compatible avec WC et fosses septiques.</p>

<h3>Caractéristiques</h3>
<ul>
<li><strong>Cuvettes éclatantes</strong> – Maintient les cuvettes propres et brillantes à chaque chasse.</li>
<li><strong>Parfum frais</strong> – Diffuse une fragrance agréable et neutralise les mauvaises odeurs.</li>
<li><strong>Nouvelle formule douce</strong> – Composition équilibrée, non agressive.</li>
<li><strong>Qualité cosmétique</strong> – Ingrédients sélectionnés respectueux des surfaces.</li>
<li><strong>Compatible fosse septique</strong> – Formule non corrosive, sans javel ni acide agressif.</li>
<li><strong>Couleur eau bleue</strong> – Indicateur visuel garantissant la libération de l'agent nettoyant.</li>
</ul>

<h3>Spécifications</h3>
<table>
<tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>T-8-3P</td></tr>
<tr><th>Principe actif</th><td>20-40%</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleurs</th><td>Bleu / Vert / Violet (personnalisable)</td></tr>
<tr><th>Parfums</th><td>Océan, Pin, Lavande (personnalisable)</td></tr>
<tr><th>Certification</th><td>ISO</td></tr>
<tr><th>Poids net</th><td>6 × 50 g</td></tr>
<tr><th>Durée de conservation</th><td>2 ans</td></tr>
</tbody>
</table>

<h3>Informations produit</h3>
<p>Les pastilles automatiques pour cuvette Myklens simplifient l'hygiène des toilettes. Formulées avec des principes actifs concentrés, chaque pastille agit jusqu'à 30 jours : il suffit de la déposer dans le réservoir pour rafraîchir à chaque chasse.</p>
<p>À base d'ingrédients de qualité cosmétique avec un pH entre 7 et 9, ces pastilles sont sûres pour la cuvette et les éléments en céramique ou plastique. Sans acide ni javel : une hygiène durable et confortable.</p>

<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières de premier ordre et contrôle qualité strict à chaque étape.</li>
<li><strong>Centre de R&D professionnel</strong> — Équipe forte de plus de 15 ans d'expérience. Nouvelles gammes chaque mois. Partenariats OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, UPC, CE, SMETA, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Pastillas limpiadoras automáticas para inodoro 2×50 g, seguras para fosa séptica, sin lejía. Nueva fórmula con potencia limpiadora duradera, ingredientes de grado cosmético, suaves y seguros. pH controlado entre 7 y 9, compatible con inodoros y tanques sépticos.</p>

<h3>Características</h3>
<ul>
<li><strong>Inodoros relucientes</strong> – Mantiene la taza brillante con cada descarga.</li>
<li><strong>Fragancia fresca</strong> – Aporta aroma agradable y elimina malos olores.</li>
<li><strong>Nueva fórmula suave</strong> – Composición equilibrada, no agresiva.</li>
<li><strong>Grado cosmético</strong> – Ingredientes seleccionados, respetuosos con las superficies.</li>
<li><strong>Apta para fosa séptica</strong> – No corrosiva, sin lejía ni ácidos fuertes.</li>
<li><strong>Agua de color</strong> – Indicador visual de la acción limpiadora.</li>
</ul>

<h3>Especificaciones</h3>
<table>
<tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>T-8-3P</td></tr>
<tr><th>Principio activo</th><td>20-40%</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Colores</th><td>Azul / Verde / Morado (personalizable)</td></tr>
<tr><th>Aromas</th><td>Océano, Pino, Lavanda (personalizable)</td></tr>
<tr><th>Certificación</th><td>ISO</td></tr>
<tr><th>Peso neto</th><td>6 × 50 g</td></tr>
<tr><th>Vida útil</th><td>2 años</td></tr>
</tbody>
</table>

<h3>Información del producto</h3>
<p>Las pastillas automáticas para inodoro Myklens simplifican la higiene del baño. Con ingredientes activos concentrados, cada pastilla dura hasta 30 días: basta con dejarla en la cisterna para refrescar con cada descarga.</p>
<p>Con ingredientes de grado cosmético y pH entre 7 y 9, son seguras para la taza y sus accesorios. Sin ácidos ni lejía: una higiene duradera y confortable.</p>

<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control de calidad estricto.</li>
<li><strong>I+D profesional</strong> — Equipo con más de 15 años de experiencia. Nuevas líneas cada mes. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, UPC, CE, SMETA, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>أقراص تنظيف أوتوماتيكية لحوض المرحاض 2×50 جم، آمنة للخزانات الصحية وخالية من الكلور. تركيبة جديدة بقوة تنظيف طويلة الأمد ومكونات بدرجة تجميلية لطيفة وآمنة. حموضة مضبوطة بين 7 و 9 آمنة للمرحاض والخزانات الصحية.</p>

<h3>المزايا</h3>
<ul>
<li><strong>أحواض لامعة</strong> – تحافظ على بريق المرحاض مع كل سحبة مياه.</li>
<li><strong>عطر منعش</strong> – يضفي رائحة لطيفة ويزيل الروائح الكريهة.</li>
<li><strong>تركيبة جديدة لطيفة</strong> – تركيب متوازن غير قاسٍ.</li>
<li><strong>درجة تجميلية</strong> – مكونات منتقاة لطيفة على الأسطح.</li>
<li><strong>آمنة للخزان الصحي</strong> – غير مسببة للتآكل، بدون كلور أو أحماض قوية.</li>
<li><strong>ماء ملوّن</strong> – مؤشر بصري لعمل المنظف.</li>
</ul>

<h3>المواصفات</h3>
<table>
<tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>T-8-3P</td></tr>
<tr><th>المادة الفعّالة</th><td>20-40%</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>الألوان</th><td>أزرق / أخضر / بنفسجي (قابلة للتخصيص)</td></tr>
<tr><th>الروائح</th><td>محيط، صنوبر، لافندر (قابلة للتخصيص)</td></tr>
<tr><th>الشهادات</th><td>ISO</td></tr>
<tr><th>الوزن الصافي</th><td>6 × 50 جم</td></tr>
<tr><th>الصلاحية</th><td>سنتان</td></tr>
</tbody>
</table>

<h3>معلومات المنتج</h3>
<p>أقراص المرحاض الأوتوماتيكية من Myklens تبسّط نظافة المرحاض. بمكونات فعّالة مركّزة يدوم القرص حتى 30 يوماً: ضعه في الخزان ليُنعش الحوض مع كل سحبة مياه.</p>
<p>بمكونات بدرجة تجميلية وحموضة بين 7 و 9 آمنة على الحوض وقطعه. بدون أحماض أو كلور — نظافة وراحة دائمتان.</p>

<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ونظام صارم لمراقبة الجودة.</li>
<li><strong>بحث وتطوير محترف</strong> — فريق بخبرة تتجاوز 15 عاماً. إطلاقات جديدة شهرياً. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001، UPC، CE، SMETA وغيرها.</li>
</ol>`,
};

// ============================================================
// 7. Blue Hanging Bottle Cleaner
// ============================================================
T['blue-hanging-bottle-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Notre nettoyant suspendu pour cuvette assure un nettoyage automatique à chaque chasse. Suspendez simplement la bouteille bleue à l'intérieur du réservoir : la formule avancée libère à chaque cycle une dose précise d'agents nettoyants, prévenant calcaire, taches de rouille et dépôts de saleté. Cuvettes propres et fraîches sans frottage quotidien.</p>

<h3>Caractéristiques</h3>
<ul>
<li><strong>Nettoyage automatique</strong> – Suspendu dans le réservoir, s'active à chaque chasse pour un nettoyage continu.</li>
<li><strong>Anti-taches puissant</strong> – Empêche la formation de calcaire, de dépôts de tartre et de taches d'urine.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les odeurs désagréables, laissant un parfum frais dans la salle de bains.</li>
<li><strong>Longue durée</strong> – Chaque bouteille bleue offre 4 à 6 semaines de nettoyage continu.</li>
<li><strong>Facile à accrocher</strong> – Crochet sécurisé sur le rebord du réservoir, aucun outil requis.</li>
<li><strong>Sûr pour la cuvette</strong> – Formule non corrosive compatible porcelaine, céramique et fosses septiques.</li>
</ul>

<h3>Spécifications</h3>
<table>
<tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>H-180-B</td></tr>
<tr><th>Principe actif</th><td>20-40%</td></tr>
<tr><th>Forme</th><td>Liquide bleu</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Bleu (personnalisable)</td></tr>
<tr><th>Parfum</th><td>Citron / Frais / Lavande</td></tr>
<tr><th>Certification</th><td>ISO</td></tr>
<tr><th>Poids net</th><td>2 × 180 g (360 g/boîte)</td></tr>
<tr><th>Durée de conservation</th><td>2 ans</td></tr>
</tbody>
</table>

<h3>Informations produit</h3>
<p>Le nettoyant suspendu liquide bleu Myklens est une solution simple pour une hygiène sans effort. Chaque boîte contient 2 × 180 g de liquide bleu concentré. Suspendez la bouteille sous le rebord et la formule s'active à chaque chasse.</p>
<p>À base d'ingrédients de qualité cosmétique avec un pH entre 7 et 9, sûr pour cuvette, accessoires et fosses septiques. Sans acide ni javel — une cuvette éclatante au parfum citron à chaque utilisation.</p>

<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict à chaque étape.</li>
<li><strong>Centre de R&D professionnel</strong> — Designers cumulant plus de 15 ans d'expérience. Nouvelles gammes mensuelles. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, UPC, CE, SMETA, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestro limpiador colgante para inodoro garantiza una limpieza automática con cada descarga. Cuelgue simplemente la botella azul en el interior del tanque: la fórmula avanzada libera con cada ciclo una dosis precisa de agentes limpiadores que evitan cal, manchas de óxido y suciedad. Inodoros limpios y frescos sin frotar a diario.</p>

<h3>Características</h3>
<ul>
<li><strong>Limpieza automática</strong> – Colgado en el tanque, se activa con cada descarga.</li>
<li><strong>Antimanchas potente</strong> – Previene la cal, los depósitos minerales y las manchas de orina.</li>
<li><strong>Elimina olores</strong> – Neutraliza los malos olores y deja una fragancia fresca en el baño.</li>
<li><strong>Larga duración</strong> – Cada botella azul ofrece 4-6 semanas de limpieza continua.</li>
<li><strong>Fácil de colgar</strong> – Gancho seguro en el borde del tanque, sin herramientas.</li>
<li><strong>Seguro para inodoros</strong> – Fórmula no corrosiva apta para porcelana, cerámica y fosas sépticas.</li>
</ul>

<h3>Especificaciones</h3>
<table>
<tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>H-180-B</td></tr>
<tr><th>Principio activo</th><td>20-40%</td></tr>
<tr><th>Forma</th><td>Líquido azul</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Azul (personalizable)</td></tr>
<tr><th>Aroma</th><td>Limón / Fresco / Lavanda</td></tr>
<tr><th>Certificación</th><td>ISO</td></tr>
<tr><th>Peso neto</th><td>2 × 180 g (360 g/caja)</td></tr>
<tr><th>Vida útil</th><td>2 años</td></tr>
</tbody>
</table>

<h3>Información del producto</h3>
<p>El limpiador colgante líquido azul Myklens es una solución sencilla para una higiene sin esfuerzo. Cada caja contiene 2 × 180 g de líquido azul concentrado. Cuelgue la botella bajo el borde y la fórmula se activa con cada descarga.</p>
<p>Con ingredientes de grado cosmético y pH entre 7 y 9, seguro para taza, accesorios y fosas sépticas. Sin ácidos ni lejía: inodoro reluciente y aroma a limón con cada uso.</p>

<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control estricto.</li>
<li><strong>I+D profesional</strong> — Diseñadores con más de 15 años de experiencia. Nuevas líneas cada mes. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, UPC, CE, SMETA, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>منظف المرحاض المعلّق من Myklens يوفر تنظيفاً تلقائياً مع كل سحبة مياه. علّق الزجاجة الزرقاء داخل خزان المرحاض، فتطلق التركيبة المتقدمة مع كل دورة جرعة دقيقة من المنظفات لتمنع الكلس وبقع الصدأ والأوساخ. مرحاض لامع ومنعش دون فرك يومي.</p>

<h3>المزايا</h3>
<ul>
<li><strong>تنظيف تلقائي</strong> – يُعلَّق داخل الخزان وينشط مع كل سحبة مياه.</li>
<li><strong>منع قوي للبقع</strong> – يمنع تكوّن الكلس والترسبات المعدنية وبقع البول.</li>
<li><strong>القضاء على الروائح</strong> – يحيّد الروائح الكريهة ويترك عطراً منعشاً في الحمام.</li>
<li><strong>مفعول طويل</strong> – كل زجاجة زرقاء تنظف باستمرار من 4 إلى 6 أسابيع.</li>
<li><strong>سهل التعليق</strong> – خطّاف مُحكم على حافة الخزان، لا تحتاج لأدوات.</li>
<li><strong>آمن للمرحاض</strong> – تركيبة غير مسببة للتآكل، آمنة للبورسلين والسيراميك والخزانات الصحية.</li>
</ul>

<h3>المواصفات</h3>
<table>
<tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>H-180-B</td></tr>
<tr><th>المادة الفعّالة</th><td>20-40%</td></tr>
<tr><th>الشكل</th><td>سائل أزرق</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>أزرق (قابل للتخصيص)</td></tr>
<tr><th>الرائحة</th><td>ليمون / منعش / لافندر</td></tr>
<tr><th>الشهادات</th><td>ISO</td></tr>
<tr><th>الوزن الصافي</th><td>2 × 180 جم (360 جم/علبة)</td></tr>
<tr><th>الصلاحية</th><td>سنتان</td></tr>
</tbody>
</table>

<h3>معلومات المنتج</h3>
<p>منظف المرحاض المعلّق السائل الأزرق من Myklens حل بسيط لنظافة مريحة. تحتوي العلبة على 2 × 180 جم من السائل الأزرق المركّز. علّق الزجاجة أسفل الحافة وتنشط التركيبة مع كل سحبة مياه.</p>
<p>بمكونات بدرجة تجميلية وبحموضة 7-9 آمنة على الحوض وقطعه والخزانات الصحية. بدون أحماض أو كلور — لمعان مع كل استخدام برائحة الليمون المنعشة.</p>

<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة جودة صارمة.</li>
<li><strong>بحث وتطوير محترف</strong> — مصممون بخبرة تتجاوز 15 عاماً. إطلاقات شهرية. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وUPC وCE وSMETA وغيرها.</li>
</ol>`,
};

// ============================================================
// 8. Multipurpose Cleaner
// ============================================================
T['multipurpose-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Notre nettoyant multi-surfaces pour salle de bains offre une action puissante à chaque pulvérisation. Vaporisez directement sur la surface, laissez agir 1 à 2 minutes puis essuyez avec un chiffon humide ou rincez à l'eau — la formule avancée pénètre en profondeur pour dissoudre savon, calcaire, graisse et saletés. Surfaces impeccables sans résidu chimique agressif.</p>

<h3>Caractéristiques</h3>
<ul>
<li><strong>Élimination puissante des taches</strong> – Tensioactifs et acide citrique dissolvent savon, calcaire, rouille et graisses corporelles.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les mauvaises odeurs en décomposant les matières organiques, parfum citron frais.</li>
<li><strong>Empêche les dépôts</strong> – Une utilisation régulière maintient des surfaces étincelantes.</li>
<li><strong>Sûr pour toutes surfaces</strong> – Formule non corrosive, pH 7-9, compatible carrelage, verre, miroirs, baignoires, lavabos, parois de douche et chrome.</li>
<li><strong>Facile à utiliser</strong> – Vaporiser et essuyer, sans frottage intensif.</li>
<li><strong>Multi-usages</strong> – Efficace sur murs de douche, baignoires, lavabos, plans de travail, extérieur de WC, miroirs et carrelage.</li>
</ul>

<h3>Spécifications</h3>
<table>
<tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>MSC-500</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs, agents nettoyants (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Liquide transparent</td></tr>
<tr><th>Parfum</th><td>Citron / Sans parfum (personnalisable)</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Contenance</th><td>450 ml</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody>
</table>

<h3>Informations produit</h3>
<p>Le nettoyant multi-surfaces Myklens simplifie le ménage. Sa formule concentrée élimine sans effort graisse, saletés et traces du quotidien sur une grande variété de surfaces. Vaporisez, essuyez et profitez d'un intérieur propre et frais.</p>
<p>Avec des ingrédients de qualité cosmétique et un pH entre 7 et 9, il reste doux pour les surfaces et sûr pour la famille. Sans acide ni produit agressif — juste un foyer propre, de la cuisine à la salle de bains.</p>

<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>Centre de R&D</strong> — Plus de 15 ans d'expérience. Nouvelles gammes mensuelles. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestro limpiador multisuperficies para baño ofrece una acción potente con cada aplicación. Pulverice sobre la superficie, deje actuar 1-2 minutos y limpie con un paño húmedo o enjuague — la fórmula avanzada penetra en profundidad para disolver jabón, cal, grasa y suciedad. Superficies impecables sin residuos químicos agresivos.</p>

<h3>Características</h3>
<ul>
<li><strong>Eliminación potente de manchas</strong> – Tensioactivos y ácido cítrico que disuelven jabón, cal, óxido y grasas corporales.</li>
<li><strong>Elimina olores</strong> – Neutraliza los malos olores al descomponer la materia orgánica, con aroma a limón.</li>
<li><strong>Evita acumulaciones</strong> – El uso regular mantiene superficies relucientes.</li>
<li><strong>Seguro en todas las superficies</strong> – No corrosivo, pH 7-9, apto para azulejos, vidrio, espejos, bañeras, lavabos, mamparas y cromo.</li>
<li><strong>Fácil de usar</strong> – Pulverizar y limpiar, sin frotar intensamente.</li>
<li><strong>Multisuperficie</strong> – Eficaz en duchas, bañeras, lavabos, encimeras, exterior del inodoro, espejos y suelos de gres.</li>
</ul>

<h3>Especificaciones</h3>
<table>
<tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>MSC-500</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos, agentes limpiadores (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Líquido transparente</td></tr>
<tr><th>Aroma</th><td>Limón / Sin aroma (personalizable)</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Contenido</th><td>450 ml</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody>
</table>

<h3>Información del producto</h3>
<p>El limpiador multisuperficies Myklens simplifica la limpieza del hogar. Su fórmula concentrada elimina sin esfuerzo grasa, suciedad y marcas del día a día en una gran variedad de superficies. Rocíe, limpie y disfrute de un hogar fresco y reluciente.</p>
<p>Con ingredientes de grado cosmético y pH entre 7 y 9, es suave con las superficies y seguro para la familia. Sin ácidos ni químicos agresivos — un hogar limpio, de la cocina al baño.</p>

<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium, control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. Nuevas líneas cada mes. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>منظف الحمام متعدد الأسطح من Myklens يقدم تنظيفاً قوياً مع كل رشة. رشّ مباشرة على السطح، اترك المنتج لمدة 1-2 دقيقة ثم امسح بقطعة قماش رطبة أو اشطف بالماء — تتغلغل التركيبة المتقدمة بعمق لتذيب الصابون والتكلسات والدهون والأوساخ. أسطح ناصعة بلا بقايا كيميائية قاسية.</p>

<h3>المزايا</h3>
<ul>
<li><strong>إزالة قوية للبقع</strong> – مواد فعّالة وحمض الستريك تذيب الصابون والكلس وبقع الصدأ والزيوت.</li>
<li><strong>القضاء على الروائح</strong> – يحيّد الروائح بتفكيك المواد العضوية، برائحة الليمون المنعشة.</li>
<li><strong>منع التراكم</strong> – الاستخدام المنتظم يبقي الأسطح لامعة.</li>
<li><strong>آمن لجميع الأسطح</strong> – غير مسبب للتآكل، حموضة 7-9، آمن للسيراميك والزجاج والمرايا وأحواض الاستحمام والمغاسل وأبواب الدش والكروم.</li>
<li><strong>سهل الاستخدام</strong> – رشّ وامسح، دون فرك قوي.</li>
<li><strong>متعدد الأسطح</strong> – فعّال على جدران الدش وأحواض الاستحمام والمغاسل والأسطح وخارج المرحاض والمرايا والبلاط.</li>
</ul>

<h3>المواصفات</h3>
<table>
<tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>MSC-500</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة، عوامل تنظيف (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>سائل شفاف</td></tr>
<tr><th>الرائحة</th><td>ليمون / بدون رائحة (قابل للتخصيص)</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>المحتوى</th><td>450 مل</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody>
</table>

<h3>معلومات المنتج</h3>
<p>منظف الأسطح المتعدد من Myklens يبسّط مهمة التنظيف المنزلي. تركيبته المركّزة تزيل الدهون والأوساخ والبقع اليومية بسهولة من أنواع كثيرة من الأسطح. رشّ وامسح واستمتع بمنزل مشرق ومنعش.</p>
<p>بمكونات بدرجة تجميلية وبحموضة 7-9، لطيف على الأسطح وآمن للعائلة. بدون أحماض أو مواد كيميائية قاسية — منزل نظيف من المطبخ إلى الحمام.</p>

<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. سلاسل جديدة شهرياً. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 9. Laundry Scent Booster Beads
// ============================================================
T['laundry-scent-booster-beads'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Transformez votre linge avec nos perles de parfum premium. Cette formule innovante libère une fragrance longue durée qui résiste à tout le cycle de lavage. La technologie de microcapsules parfumées garantit un linge frais pendant des semaines. pH maîtrisé entre 7 et 9, sans danger pour tous tissus et machines.</p>

<h3>Caractéristiques</h3>
<ul>
<li><strong>Fraîcheur longue durée</strong> – Microcapsules adhérant aux fibres pour parfumer le linge jusqu'à 12 semaines en armoire.</li>
<li><strong>Parfum intense</strong> – Concentré 2 à 3 fois plus que les assouplissants classiques.</li>
<li><strong>Plusieurs senteurs</strong> – Vibrant Ocean, Sakura Rose ou Quiet Lotus Whisper. Personnalisation possible.</li>
<li><strong>Compatible avec toute lessive</strong> – À ajouter avec poudre, liquide ou capsules.</li>
<li><strong>Combat les odeurs</strong> – Neutralise sueur, fumée, odeurs animales pour un linge réellement propre.</li>
<li><strong>Sûr pour toutes machines</strong> – Se dissout intégralement à toute température, machines standard et HE.</li>
</ul>

<h3>Spécifications</h3>
<table>
<tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>SB-500</td></tr>
<tr><th>Ingrédient actif</th><td>Parfum micro-encapsulé, base minérale</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleurs</th><td>Rose / Violet / Bleu clair (personnalisable)</td></tr>
<tr><th>Parfums</th><td>Ocean Breeze / Lavande / Mountain Spring</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Poids net</th><td>200 g / 500 g</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody>
</table>

<h3>Informations produit</h3>
<p>Les perles parfumées Myklens transforment votre routine de lavage. Grâce à la technologie micro-encapsulée, chaque perle libère des bouffées de fraîcheur pendant que vous bougez. Versez une dose dans le tambour avant le linge et profitez d'une fragrance que les lessives classiques ne peuvent offrir.</p>
<p>Avec des huiles parfumées premium et une formule scientifiquement équilibrée, ces perles sont douces pour les fibres tout en offrant une fraîcheur durable. Aucun produit agressif — juste un parfum pur et long-lasting du sèche-linge à la garde-robe.</p>

<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium et contrôle qualité strict.</li>
<li><strong>Centre de R&D</strong> — Chimistes et parfumeurs avec plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Transforme su colada con nuestras perlas perfumadas premium. Esta fórmula innovadora libera una fragancia duradera que resiste todo el ciclo de lavado. La tecnología de microcápsulas garantiza ropa fresca durante semanas. pH controlado entre 7 y 9, segura para todos los tejidos y lavadoras.</p>

<h3>Características</h3>
<ul>
<li><strong>Frescor duradero</strong> – Microcápsulas adheridas a las fibras que mantienen la ropa fresca hasta 12 semanas en el armario.</li>
<li><strong>Aroma intenso</strong> – 2-3 veces más concentrada que los suavizantes tradicionales.</li>
<li><strong>Varios aromas</strong> – Vibrant Ocean, Sakura Rose o Quiet Lotus Whisper. Personalizable.</li>
<li><strong>Compatible con cualquier detergente</strong> – Añadir con polvo, líquido o cápsulas.</li>
<li><strong>Combate olores</strong> – Neutraliza sudor, humo y olores de mascotas, dejando ropa realmente limpia.</li>
<li><strong>Apta para toda lavadora</strong> – Se disuelve por completo en cualquier temperatura, estándar y HE.</li>
</ul>

<h3>Especificaciones</h3>
<table>
<tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>SB-500</td></tr>
<tr><th>Ingrediente activo</th><td>Fragancia microencapsulada, base mineral</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Colores</th><td>Rosa / Morado / Azul claro (personalizable)</td></tr>
<tr><th>Aromas</th><td>Brisa Marina / Lavanda / Mountain Spring</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Peso neto</th><td>200 g / 500 g</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody>
</table>

<h3>Información del producto</h3>
<p>Las perlas perfumadas Myklens transforman su rutina de lavado. Gracias a la tecnología microencapsulada, cada perla libera ráfagas de frescor mientras se mueve. Vierta una dosis en el tambor antes de la ropa y disfrute de una fragancia que los detergentes habituales no pueden ofrecer.</p>
<p>Con aceites perfumados premium y una fórmula científicamente equilibrada, estas perlas son suaves con las fibras y ofrecen frescor duradero. Sin químicos agresivos — solo aroma puro y duradero, de la secadora al cajón.</p>

<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control estricto.</li>
<li><strong>I+D</strong> — Químicos y perfumistas con más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>غيّر تجربة غسيلك مع حبيبات العطر الفاخرة من Myklens. تركيبة مبتكرة تطلق عطراً يدوم طويلاً ويصمد طوال دورة الغسيل. تقنية الكبسولات الدقيقة تضمن نضارة الملابس لأسابيع. حموضة مضبوطة بين 7 و 9، آمنة لجميع الأقمشة والغسالات.</p>

<h3>المزايا</h3>
<ul>
<li><strong>نضارة طويلة الأمد</strong> – كبسولات عطرية تلتصق بالألياف وتُبقي الرائحة في الخزانة حتى 12 أسبوعاً.</li>
<li><strong>عطر مكثّف</strong> – أقوى من المنعّمات التقليدية بـ 2-3 أضعاف.</li>
<li><strong>عدة روائح</strong> – Vibrant Ocean و Sakura Rose و Quiet Lotus Whisper. قابل للتخصيص.</li>
<li><strong>متوافق مع كل مسحوق</strong> – يضاف مع البودرة أو السائل أو الكبسولات.</li>
<li><strong>يحارب الروائح</strong> – يحيّد رائحة العرق والدخان والحيوانات الأليفة لملابس نظيفة فعلاً.</li>
<li><strong>آمن لكل الغسالات</strong> – يذوب تماماً في كل درجات الحرارة، يصلح للغسالات العادية وعالية الكفاءة.</li>
</ul>

<h3>المواصفات</h3>
<table>
<tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>SB-500</td></tr>
<tr><th>المادة الفعّالة</th><td>عطر مغلّف بكبسولات، أساس معدني</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>الألوان</th><td>وردي / بنفسجي / أزرق فاتح (قابل للتخصيص)</td></tr>
<tr><th>الروائح</th><td>نسيم البحر / لافندر / Mountain Spring</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>الوزن الصافي</th><td>200 جم / 500 جم</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody>
</table>

<h3>معلومات المنتج</h3>
<p>تُحدث حبيبات العطر من Myklens فارقاً في روتين غسيلك. بفضل تقنية الكبسولات الدقيقة، تطلق كل حبة دفقات من النضارة مع كل حركة. ضع جرعة في حلّة الغسالة قبل الملابس واستمتع بعطر لا توفّره المنظفات العادية.</p>
<p>بزيوت عطرية فاخرة وتركيبة متوازنة علمياً، الحبيبات لطيفة على الألياف وتمنح نضارة دائمة. بدون مواد قاسية — فقط رائحة نقية تدوم من المجفّف إلى الخزانة.</p>

<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — كيميائيون وعطّارون بخبرة تتجاوز 15 عاماً. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 10. Laundry Sheets
// ============================================================
T['laundry-sheets'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Révolutionnez votre routine de lavage avec nos feuilles de lessive innovantes. Cette formule pré-dosée et ultra-concentrée se dissout instantanément dans l'eau pour un nettoyage puissant. Ingrédients de qualité cosmétique, doux pour la peau et puissants contre la saleté. pH 7-9, sûres pour tous les tissus et machines.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Pré-dosées et pratiques</strong> – Une feuille suffit pour une charge moyenne à grande, sans mesure ni gaspillage.</li>
<li><strong>Ultra-concentrées</strong> – Enzymes et tensioactifs concentrés pour un nettoyage en profondeur en douceur.</li>
<li><strong>Dissolution instantanée</strong> – Compatible eau froide ou chaude, machines HE et frontales, aucun résidu.</li>
<li><strong>Douces pour la peau</strong> – pH neutre, idéales pour peaux sensibles et vêtements de bébé.</li>
<li><strong>Gain de place</strong> – Emballage plat, parfait pour le voyage ou les petits espaces.</li>
<li><strong>Éco-responsables</strong> – Sans plastique, biodégradables, sans phosphates ni parabènes.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>LS-60</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Blanc (personnalisable)</td></tr>
<tr><th>Parfums</th><td>Sans parfum / Linge frais / Lavande</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Conditionnement</th><td>30 ou 50 feuilles</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Les feuilles de lessive Myklens simplifient le jour de lessive. Placez une feuille dans le tambour, ajoutez le linge et lancez le cycle — sans mesure, sans liquide, sans éclaboussure. Composition de qualité cosmétique, pH 7-9, sûres pour tous tissus, machines HE et fosses septiques.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>Centre de R&D</strong> — Chimistes avec plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Revolucione su rutina de colada con nuestras innovadoras hojas de detergente. Esta fórmula predosificada y ultraconcentrada se disuelve al instante en el agua para una limpieza potente. Ingredientes de grado cosmético, suaves con la piel pero contundentes con la suciedad. pH 7-9, seguras para todos los tejidos y lavadoras.</p>
<h3>Características</h3>
<ul>
<li><strong>Predosificadas</strong> – Una hoja por carga media-grande, sin medir ni desperdiciar.</li>
<li><strong>Ultraconcentradas</strong> – Enzimas y tensioactivos para un lavado profundo y suave.</li>
<li><strong>Disolución instantánea</strong> – Compatible con agua fría o caliente, lavadoras HE y de carga frontal, sin residuos.</li>
<li><strong>Suaves con la piel</strong> – pH neutro, ideales para pieles sensibles y ropa de bebé.</li>
<li><strong>Ahorran espacio</strong> – Empaquetado plano, perfecto para viaje o espacios pequeños.</li>
<li><strong>Ecológicas</strong> – Sin plástico, biodegradables, sin fosfatos ni parabenos.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>LS-60</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Blanco (personalizable)</td></tr>
<tr><th>Aromas</th><td>Sin aroma / Ropa fresca / Lavanda</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Formatos</th><td>30 o 50 hojas</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>Las hojas de detergente Myklens simplifican el día de la colada. Coloque una hoja en el tambor, añada la ropa y arranque el ciclo — sin medir, sin líquidos, sin derrames. Ingredientes de grado cosmético, pH 7-9, aptas para todos los tejidos, lavadoras HE y fosas sépticas.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control estricto.</li>
<li><strong>I+D</strong> — Químicos con más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>غيّر روتين غسيلك مع صفائح المنظف المبتكرة من Myklens. تركيبة بجرعات محددة مسبقاً وفائقة التركيز تذوب فوراً في الماء لتنظيف قوي. مكونات بدرجة تجميلية لطيفة على البشرة وقاسية على الأوساخ. حموضة 7-9 آمنة لجميع الأقمشة والغسالات.</p>
<h3>المزايا</h3>
<ul>
<li><strong>جرعات محددة</strong> – صفيحة واحدة لكل حِملة متوسطة-كبيرة، دون قياس أو هدر.</li>
<li><strong>فائقة التركيز</strong> – إنزيمات ومواد فعّالة للتنظيف العميق بلطف.</li>
<li><strong>ذوبان فوري</strong> – تعمل في الماء البارد والساخن، تتوافق مع الغسالات الأمامية والعالية الكفاءة، بلا بقايا.</li>
<li><strong>لطيفة على البشرة</strong> – حموضة محايدة، مثالية للبشرة الحساسة وملابس الأطفال.</li>
<li><strong>توفّر المساحة</strong> – عبوة مسطحة، رائعة للسفر والمساحات الصغيرة.</li>
<li><strong>صديقة للبيئة</strong> – بدون بلاستيك، قابلة للتحلل الحيوي، خالية من الفوسفات والبارابين.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>LS-60</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>أبيض (قابل للتخصيص)</td></tr>
<tr><th>الروائح</th><td>بدون رائحة / Fresh Linen / لافندر</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>التعبئة</th><td>30 أو 50 صفيحة</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>صفائح المنظف من Myklens تبسّط يوم الغسيل. ضع صفيحة في حلّة الغسالة، أضف الملابس وابدأ الدورة — دون قياس أو سكب أو انسكاب. مكونات بدرجة تجميلية وحموضة 7-9 آمنة لجميع الأقمشة والغسالات عالية الكفاءة وأنظمة الصرف الصحي.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — كيميائيون بخبرة تتجاوز 15 عاماً. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 11. Dryer Sheets
// ============================================================
T['dryer-sheets'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Donnez à votre linge la touche finale parfaite avec nos feuilles assouplissantes premium. Formulées avec une triple action adoucissante, elles réduisent l'électricité statique, préviennent les plis et laissent les vêtements incroyablement doux. Le parfum naturel longue durée vous accompagne du sèche-linge à l'armoire.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Douceur ultime</strong> – Agents adoucissants qui pénètrent les fibres pour des serviettes moelleuses et des vêtements luxueusement doux.</li>
<li><strong>Anti-statique</strong> – Élimine l'électricité statique pour des vêtements qui ne collent plus.</li>
<li><strong>Anti-plis</strong> – Détend les fibres pendant le séchage, réduisant le repassage.</li>
<li><strong>Fraîcheur durable</strong> – Parfum premium qui reste sur les vêtements jusqu'au port.</li>
<li><strong>Repousse peluches et poils</strong> – Réduit l'accumulation de peluches et poils d'animaux.</li>
<li><strong>Une feuille par cycle</strong> – Économique et facile à utiliser.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>DS-80</td></tr>
<tr><th>Ingrédients actifs</th><td>Adoucissants cationiques, acides gras</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Blanc (personnalisable)</td></tr>
<tr><th>Parfum</th><td>Naturel (personnalisable)</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Quantité</th><td>160 feuilles</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Les feuilles assouplissantes Myklens simplifient votre routine de lavage avec leurs 5 bénéfices : adoucissent les tissus, réduisent l'électricité statique, préviennent les plis, parfument et repoussent peluches et poils. Une feuille suffit, à activer à la chaleur du sèche-linge.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Dé a su colada el toque final perfecto con nuestras hojas suavizantes premium. Formuladas con triple acción suavizante, reducen la electricidad estática, previenen las arrugas y dejan la ropa increíblemente suave. El aroma natural duradero acompaña su ropa de la secadora al armario.</p>
<h3>Características</h3>
<ul>
<li><strong>Máxima suavidad</strong> – Agentes suavizantes que penetran las fibras para toallas mullidas y ropa lujosamente suave.</li>
<li><strong>Antiestáticas</strong> – Elimina la electricidad estática, ropa que no se pega.</li>
<li><strong>Antiarrugas</strong> – Relaja las fibras durante el secado, reduciendo el planchado.</li>
<li><strong>Frescor duradero</strong> – Fragancia premium que permanece en la ropa hasta usarla.</li>
<li><strong>Repele pelusas y pelos</strong> – Reduce pelusas y pelos de mascota en la ropa.</li>
<li><strong>Una hoja por ciclo</strong> – Económicas y fáciles de usar.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>DS-80</td></tr>
<tr><th>Ingredientes activos</th><td>Suavizantes catiónicos, ácidos grasos</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Blanco (personalizable)</td></tr>
<tr><th>Aroma</th><td>Natural (personalizable)</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Cantidad</th><td>160 hojas</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>Las hojas suavizantes Myklens simplifican su rutina con cinco beneficios: suavizan, reducen la electricidad estática, previenen arrugas, perfuman y repelen pelusa y pelos. Una hoja basta y se activa con el calor de la secadora.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium, control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>امنح غسيلك اللمسة النهائية المثالية مع صفائح التنعيم الفاخرة من Myklens. تركيبة ثلاثية الفعل تقلّل الكهرباء الساكنة وتمنع التجعّد وتترك الملابس فائقة النعومة. عطر طبيعي يدوم يرافق ملابسك من المجفّف إلى الخزانة.</p>
<h3>المزايا</h3>
<ul>
<li><strong>نعومة قصوى</strong> – عوامل تنعيم تخترق الألياف لمناشف فضفاضة وملابس ناعمة فاخرة.</li>
<li><strong>مضادة للكهرباء الساكنة</strong> – تزيل الالتصاق المزعج تماماً.</li>
<li><strong>مضادة للتجعّد</strong> – تُرخي الألياف أثناء التجفيف، فتقلّل الكي.</li>
<li><strong>نضارة دائمة</strong> – عطر فاخر يبقى على الملابس حتى ارتدائها.</li>
<li><strong>تطرد الوبر والشعر</strong> – تقلّل تراكم الوبر وشعر الحيوانات.</li>
<li><strong>صفيحة لكل دورة</strong> – اقتصادية وسهلة الاستخدام.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>DS-80</td></tr>
<tr><th>المكونات الفعّالة</th><td>منعّمات كاتيونية، أحماض دهنية</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>أبيض (قابل للتخصيص)</td></tr>
<tr><th>الرائحة</th><td>طبيعية (قابلة للتخصيص)</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>الكمية</th><td>160 صفيحة</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>صفائح التنعيم من Myklens تبسّط روتينك بخمس فوائد: تنعّم الأقمشة وتقلّل الكهرباء الساكنة وتمنع التجعّد وتُعطّر وتطرد الوبر والشعر. صفيحة واحدة تكفي، تنشط بحرارة المجفّف.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 12. Coffee Maker Descaler
// ============================================================
T['coffee-maker-descaler'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Nos pastilles détartrantes pour machines à café offrent une action de détartrage et de nettoyage puissante à chaque utilisation. Déposez une pastille dans le réservoir d'eau ou le porte-filtre (selon votre machine), lancez un cycle de rinçage sans café, puis rincez à l'eau claire. La formule effervescente avancée libère des principes actifs qui éliminent les huiles de café, les dépôts minéraux et le tartre.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Détartrage puissant</strong> – Élimine tartre, dépôts minéraux et calcaire qui affectent la performance.</li>
<li><strong>Élimine les huiles de café</strong> – Dissout efficacement les huiles rances et les résidus dans les chambres et buses.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les odeurs de café rance, parfum citron frais.</li>
<li><strong>Prolonge la vie de la machine</strong> – Une utilisation tous les 1 à 2 mois maintient une performance optimale.</li>
<li><strong>Compatible toutes machines</strong> – Cafetières filtre, expresso, à capsules et super-automatiques.</li>
<li><strong>Facile à utiliser</strong> – Une pastille par cycle, sans mesure ni démontage.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>CMC-24L</td></tr>
<tr><th>Forme</th><td>Pastille effervescente</td></tr>
<tr><th>Couleur</th><td>Blanc</td></tr>
<tr><th>Parfum</th><td>Citron</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs, acide citrique, agents détartrants (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Poids net</th><td>120 g (24 × 5 g)</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Les pastilles Myklens offrent une solution innovante pour entretenir votre machine et préserver le goût du café. Chaque pastille effervescente libère des bulles de nettoyage qui pénètrent dans les conduites internes, valves et chambres d'infusion pour éliminer huiles de café, calcaire et dépôts minéraux. Au parfum citron frais, sans laisser d'arrière-goût.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestras pastillas descalcificadoras para cafeteras ofrecen una acción potente de descalcificación y limpieza con cada uso. Coloque una pastilla en el depósito de agua o portafiltro (según la máquina), realice un ciclo de enjuague sin café y enjuague con agua limpia. La fórmula efervescente avanzada libera ingredientes activos que eliminan aceites de café, depósitos minerales y cal.</p>
<h3>Características</h3>
<ul>
<li><strong>Descalcificación potente</strong> – Elimina cal, depósitos minerales y residuos que afectan el rendimiento.</li>
<li><strong>Elimina aceites de café</strong> – Disuelve aceites rancios y residuos en cámaras de infusión y boquillas.</li>
<li><strong>Elimina olores</strong> – Neutraliza el café rancio, dejando aroma fresco a limón.</li>
<li><strong>Prolonga la vida de la máquina</strong> – Uso cada 1-2 meses mantiene el rendimiento óptimo.</li>
<li><strong>Compatible con todas las máquinas</strong> – Goteo, espresso, cápsulas y superautomáticas.</li>
<li><strong>Fácil de usar</strong> – Una pastilla por ciclo, sin medir ni desmontar.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>CMC-24L</td></tr>
<tr><th>Forma</th><td>Pastilla efervescente</td></tr>
<tr><th>Color</th><td>Blanco</td></tr>
<tr><th>Aroma</th><td>Limón</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos, ácido cítrico, agentes descalcificadores (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Peso neto</th><td>120 g (24 × 5 g)</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>Las pastillas Myklens son una solución innovadora para mantener la cafetera y preservar el sabor del café. Cada pastilla efervescente libera burbujas de limpieza que penetran en tuberías internas, válvulas y cámaras de infusión para eliminar aceites, cal y depósitos minerales. Aroma fresco a limón sin dejar regusto.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium, control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>أقراص إزالة الترسبات لماكينات القهوة من Myklens توفر إزالة قوية للتكلسات وتنظيفاً عميقاً مع كل استخدام. أسقط قرصاً واحداً في خزان الماء أو حامل الفلتر (حسب نوع الماكينة)، شغّل دورة شطف بدون قهوة ثم اشطف بالماء النقي. التركيبة الفوّارة المتقدمة تذيب بسرعة وتطلق مكونات نشطة تزيل زيوت القهوة والترسبات المعدنية والكلس.</p>
<h3>المزايا</h3>
<ul>
<li><strong>إزالة قوية للترسبات</strong> – تزيل الكلس والترسبات المعدنية التي تؤثر على الأداء.</li>
<li><strong>إزالة زيوت القهوة</strong> – تذيب الزيوت الفاسدة والبقايا في غرف التحضير والفوهات.</li>
<li><strong>القضاء على الروائح</strong> – تحيّد روائح القهوة الفاسدة وتترك عطر الليمون المنعش.</li>
<li><strong>تطيل عمر الماكينة</strong> – الاستخدام كل 1-2 شهر يحافظ على الأداء الأمثل.</li>
<li><strong>متوافقة مع كل الماكينات</strong> – ماكينات التنقيط والإسبريسو والكبسولات والأوتوماتيكية.</li>
<li><strong>سهلة الاستخدام</strong> – قرص واحد لكل دورة دون قياس أو تفكيك.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>CMC-24L</td></tr>
<tr><th>الشكل</th><td>قرص فوّار</td></tr>
<tr><th>اللون</th><td>أبيض</td></tr>
<tr><th>الرائحة</th><td>ليمون</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة، حمض الستريك، عوامل إزالة الترسبات (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>الوزن الصافي</th><td>120 جم (24 × 5 جم)</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>أقراص Myklens حلّ مبتكر للحفاظ على ماكينة القهوة وعلى مذاق القهوة. تطلق كل قرص فقاعات تنظيف تخترق الأنابيب الداخلية والصمامات وغرف التحضير لإزالة الزيوت والكلس والترسبات. برائحة الليمون المنعشة دون أن تترك أي طعم بعدها.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 13. Washing Machine Drum Cleaner
// ============================================================
T['washing-machine-drum-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Nos pastilles nettoyantes pour lave-linge offrent un nettoyage en profondeur et une élimination des odeurs à chaque utilisation. Déposez une ou deux pastilles dans le tambour vide, lancez un cycle normal à l'eau chaude (sans linge), et laissez agir. La formule effervescente avancée libère des principes actifs qui pénètrent en profondeur dans le tambour, les durites et les zones difficiles d'accès.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Nettoyage en profondeur</strong> – La formule effervescente atteint le tambour, le bac, le joint, les durites et le système d'évacuation.</li>
<li><strong>Élimine calcaire et résidus</strong> – Dissout calcaire, dépôts minéraux, résidus de lessive et de savon.</li>
<li><strong>Élimine les odeurs</strong> – Détruit moisissures et bactéries responsables des odeurs, parfum citron frais.</li>
<li><strong>Prolonge la vie de la machine</strong> – Une utilisation mensuelle préserve la performance.</li>
<li><strong>Compatible toutes machines</strong> – Hublot, top, et machines haute efficacité (HE).</li>
<li><strong>Facile à utiliser</strong> – Déposer et lancer un cycle, sans mesure ni démontage.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>WMC-4</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs, acide citrique, percarbonate (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Pastilles effervescentes blanches</td></tr>
<tr><th>Parfum</th><td>Frais / Sans parfum</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Poids net</th><td>4 pastilles (200 g) / 50 g par pastille</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Les pastilles Myklens maintiennent un lave-linge frais et hygiénique. Leur formule effervescente concentrée libère des bulles d'oxygène actives qui atteignent toutes les zones cachées, éliminant moisissures, savon et dépôts minéraux. Pour un appareil propre, sans odeur, prêt pour la prochaine lessive.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestras pastillas limpiadoras de lavadora ofrecen limpieza profunda y eliminación de olores con cada uso. Coloque una o dos pastillas en el tambor vacío, ejecute un ciclo normal con agua caliente (sin ropa) y deje actuar. La fórmula efervescente avanzada libera ingredientes activos que penetran en el tambor, mangueras y zonas de difícil acceso.</p>
<h3>Características</h3>
<ul>
<li><strong>Limpieza profunda</strong> – Llega a tambor, cajetín de detergente, junta, mangueras y sistema de drenaje.</li>
<li><strong>Elimina cal y residuos</strong> – Disuelve cal, depósitos minerales y restos de detergente.</li>
<li><strong>Elimina olores</strong> – Mata moho y bacterias que causan malos olores, dejando aroma a limón.</li>
<li><strong>Alarga la vida del aparato</strong> – Uso mensual mantiene el rendimiento óptimo.</li>
<li><strong>Compatible con todas las lavadoras</strong> – Carga frontal, superior y HE.</li>
<li><strong>Fácil de usar</strong> – Soltar y arrancar el ciclo, sin medir ni desmontar.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>WMC-4</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos, ácido cítrico, percarbonato (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Pastillas efervescentes blancas</td></tr>
<tr><th>Aroma</th><td>Fresco / Sin aroma</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Peso neto</th><td>4 pastillas (200 g) / 50 g cada una</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>Las pastillas Myklens mantienen su lavadora fresca e higiénica. Su fórmula efervescente concentrada libera burbujas de oxígeno activas que llegan a todas las zonas ocultas eliminando moho, jabón y depósitos minerales. Para un aparato limpio, sin olores, listo para la próxima colada.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium, control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>أقراص تنظيف الغسالة من Myklens توفر تنظيفاً عميقاً وإزالة قوية للروائح مع كل استخدام. أسقط قرصاً أو قرصين في حلّة الغسالة الفارغة وشغّل دورة عادية بالماء الساخن (بدون ملابس). التركيبة الفوّارة المتقدمة تذوب بسرعة وتطلق مكونات نشطة تتغلغل في الحلّة والخراطيم والمناطق صعبة الوصول.</p>
<h3>المزايا</h3>
<ul>
<li><strong>تنظيف عميق</strong> – تصل التركيبة إلى الحلّة ودرج المنظف والحشية والخراطيم ونظام التصريف.</li>
<li><strong>إزالة الكلس والبقايا</strong> – تذيب الكلس والترسبات المعدنية وبقايا المنظفات.</li>
<li><strong>القضاء على الروائح</strong> – تقتل العفن والبكتيريا المسببة للروائح وتترك عطر الليمون المنعش.</li>
<li><strong>إطالة عمر الغسالة</strong> – استخدام شهري يحافظ على الأداء الأمثل.</li>
<li><strong>متوافقة مع كل الغسالات</strong> – أمامية وعلوية وعالية الكفاءة (HE).</li>
<li><strong>سهلة الاستخدام</strong> – أسقط وشغّل، دون قياس أو تفكيك.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>WMC-4</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة، حمض الستريك، أوكسجين فعّال (20-40%)</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>أقراص فوّارة بيضاء</td></tr>
<tr><th>الرائحة</th><td>منعش / بدون رائحة</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>الوزن الصافي</th><td>4 أقراص (200 جم) / 50 جم لكل قرص</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>أقراص Myklens تحافظ على غسالتك نظيفة وصحية. تركيبتها الفوّارة المركّزة تطلق فقاعات أوكسجين نشطة تصل إلى جميع المناطق المخفية لإزالة العفن وبقايا الصابون والترسبات المعدنية. لجهاز نظيف خالٍ من الروائح وجاهز لحِملة الغسيل التالية.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 14. Stainless Steel Cleaner
// ============================================================
T['stainless-steel-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Notre nettoyant pour acier inoxydable offre une action puissante de nettoyage et de polissage à chaque application. Pressez une petite quantité sur un chiffon doux, appliquez uniformément puis essuyez avec un chiffon propre et sec — la formule semi-pâteuse avancée pénètre en profondeur pour éliminer empreintes, graisse, traces d'eau et résidus tenaces, sans rayer ni ternir.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Action nettoyante puissante</strong> – Élimine instantanément empreintes, graisse, traces d'eau et résidus collants.</li>
<li><strong>Restaure la brillance</strong> – Agents polissants pour un fini brillant sans traces ni rayures.</li>
<li><strong>Protège contre les marques</strong> – Couche protectrice invisible repoussant empreintes et taches.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les odeurs de graisse et d'aliments.</li>
<li><strong>Sûr pour tout l'acier inoxydable</strong> – Formule non abrasive pour électroménager, éviers, frigos, fours et hottes.</li>
<li><strong>Facile à utiliser</strong> – Presser et essuyer, sans rinçage ni frottage intensif.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>SSC-500</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs, émulsion d'huile minérale</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Vert clair</td></tr>
<tr><th>Parfum</th><td>Sans parfum (personnalisable)</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Contenance</th><td>250 ml</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Le nettoyant pour acier inoxydable Myklens préserve la beauté de vos appareils. Sa formule avancée enlève sans effort empreintes, traces et graisse des frigos, fours, lave-vaisselle et hottes. Vaporisez sur la surface et essuyez pour une brillance éclatante immédiate.</p>
<p>Il laisse une fine couche protectrice qui repousse poussière et empreintes. Sans abrasif ni acide — un éclat comme neuf à chaque utilisation.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestro limpiador para acero inoxidable ofrece una potente acción limpiadora y abrillantadora con cada aplicación. Aplique un poco sobre un paño suave, extienda uniformemente y seque con un paño limpio y seco — la fórmula semipasta penetra para eliminar huellas, grasa, marcas de agua y residuos persistentes sin rayar ni opacar.</p>
<h3>Características</h3>
<ul>
<li><strong>Acción limpiadora potente</strong> – Elimina al instante huellas, grasa, marcas de agua y residuos pegajosos.</li>
<li><strong>Restaura el brillo</strong> – Agentes pulidores para acabado brillante sin marcas ni rayas.</li>
<li><strong>Protege frente a nuevas marcas</strong> – Capa protectora invisible que repele huellas y manchas.</li>
<li><strong>Elimina olores</strong> – Neutraliza olores a grasa y comida.</li>
<li><strong>Seguro en todo acero inoxidable</strong> – No abrasivo, apto para electrodomésticos, fregaderos, neveras, hornos y campanas.</li>
<li><strong>Fácil de usar</strong> – Aplicar y limpiar, sin enjuagar ni frotar intensamente.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>SSC-500</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos, emulsión de aceite mineral</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Verde claro</td></tr>
<tr><th>Aroma</th><td>Sin aroma (personalizable)</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Contenido</th><td>250 ml</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>El limpiador de acero inoxidable Myklens conserva la belleza de sus electrodomésticos. Su fórmula avanzada elimina sin esfuerzo huellas, marcas y grasa de neveras, hornos, lavavajillas y campanas. Pulverice y limpie para un brillo inmediato sin marcas.</p>
<p>Deja una fina capa protectora que repele polvo y huellas. Sin abrasivos ni ácidos — un brillo como nuevo cada vez.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium, control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>منظف الستانلس ستيل من Myklens يوفر تنظيفاً وتلميعاً قويين مع كل استخدام. اعصر كمية صغيرة على قطعة قماش ناعمة، طبّقها بانتظام ثم امسح بقطعة قماش نظيفة وجافة — التركيبة شبه العجينية المتقدمة تتغلغل بعمق لإزالة بصمات الأصابع والدهون وبقع الماء والبقايا العنيدة دون خدش أو إفقاد للمعان.</p>
<h3>المزايا</h3>
<ul>
<li><strong>تنظيف قوي</strong> – تزيل فوراً بصمات الأصابع والدهون والزيوت وبقع الماء والبقايا اللاصقة.</li>
<li><strong>تستعيد اللمعان</strong> – عوامل تلميع لإنهاء براق دون آثار أو خدوش.</li>
<li><strong>حماية من العلامات</strong> – طبقة حماية غير مرئية تطرد بصمات الأصابع والبقع.</li>
<li><strong>القضاء على الروائح</strong> – تحيّد روائح الدهون والطعام.</li>
<li><strong>آمن لكل الستانلس ستيل</strong> – تركيبة غير كاشطة وغير مسببة للتآكل، آمنة للأجهزة والأحواض والثلاجات والأفران والشفاطات.</li>
<li><strong>سهل الاستخدام</strong> – اعصر وامسح، دون شطف أو فرك قوي.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>SSC-500</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة، مستحلب الزيت المعدني</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>أخضر فاتح</td></tr>
<tr><th>الرائحة</th><td>بدون رائحة (قابل للتخصيص)</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>المحتوى</th><td>250 مل</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>منظف الستانلس ستيل من Myklens يحافظ على جمال أجهزتك. تركيبته المتقدمة تزيل بسهولة بصمات الأصابع والبقع والدهون من الثلاجات والأفران وغسالات الصحون والشفاطات. رشّ وامسح للمعان فوري دون آثار.</p>
<p>يترك طبقة حماية رقيقة تطرد الغبار وبصمات الأصابع. بدون مواد كاشطة أو أحماض — لمعان كالجديد في كل مرة.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 15. Garbage Disposal Cleaner
// ============================================================
T['garbage-disposal-cleaner'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Nos pastilles nettoyantes pour broyeur d'évier offrent un nettoyage et une désodorisation puissants à chaque utilisation. Déposez une pastille dans le broyeur, faites couler de l'eau froide et activez le broyeur pendant 30 à 60 secondes — la formule effervescente avancée libère des principes actifs qui nettoient la chambre de broyage, les lames et les conduites.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Action nettoyante puissante</strong> – La mousse effervescente atteint chambre, lames et conduites pour éliminer résidus alimentaires, graisse et dépôts.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les odeurs en décomposant les particules organiques, sans parfum artificiel.</li>
<li><strong>Affûte les lames</strong> – Action abrasive douce qui aide à entretenir les lames.</li>
<li><strong>Empêche l'accumulation</strong> – Une utilisation hebdomadaire prévient bouchons et odeurs.</li>
<li><strong>Sûr pour tous les broyeurs</strong> – Formule non corrosive et non moussante, compatible toutes marques et fosses septiques.</li>
<li><strong>Facile à utiliser</strong> – Déposer et activer, sans mesure ni démontage.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>GDC-24U</td></tr>
<tr><th>Forme</th><td>Pastille effervescente</td></tr>
<tr><th>Couleur</th><td>Blanc</td></tr>
<tr><th>Parfum</th><td>Sans parfum</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs, acide citrique, bicarbonate de sodium</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Poids net</th><td>120 g (24 × 5 g)</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Les pastilles Myklens entretiennent un broyeur frais et hygiénique. La formule effervescente libère une mousse épaisse qui atteint chaque surface interne — composants de broyage, déflecteurs et zones difficiles d'accès. Sans acide, sans javel, sans parfum artificiel : un nettoyage simple et efficace.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium et contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestras pastillas limpiadoras para triturador de basura ofrecen limpieza y desodorización potentes con cada uso. Coloque una pastilla en el triturador, abra agua fría y active el triturador durante 30-60 segundos — la fórmula efervescente avanzada libera ingredientes activos que limpian cámara de molienda, cuchillas y conductos.</p>
<h3>Características</h3>
<ul>
<li><strong>Acción limpiadora potente</strong> – La espuma efervescente llega a cámara, cuchillas y conductos eliminando restos de comida, grasa y depósitos.</li>
<li><strong>Elimina olores</strong> – Neutraliza los olores al descomponer partículas orgánicas, sin fragancia artificial.</li>
<li><strong>Afila las cuchillas</strong> – Acción abrasiva suave que ayuda a mantener las cuchillas.</li>
<li><strong>Previene acumulaciones</strong> – Uso semanal previene atascos y malos olores.</li>
<li><strong>Seguro para todo triturador</strong> – Fórmula no corrosiva y sin espuma excesiva, apta para todas las marcas y fosas sépticas.</li>
<li><strong>Fácil de usar</strong> – Soltar y activar, sin medir ni desmontar.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>GDC-24U</td></tr>
<tr><th>Forma</th><td>Pastilla efervescente</td></tr>
<tr><th>Color</th><td>Blanco</td></tr>
<tr><th>Aroma</th><td>Sin aroma</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos, ácido cítrico, bicarbonato sódico</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Peso neto</th><td>120 g (24 × 5 g)</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>Las pastillas Myklens mantienen el triturador limpio e higiénico. La fórmula efervescente libera espuma densa que llega a cada superficie interna — componentes de molienda, deflectores y zonas de difícil acceso. Sin ácidos, sin lejía, sin fragancia artificial: una limpieza sencilla y eficaz.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>أقراص تنظيف مفرمة النفايات من Myklens توفر تنظيفاً قوياً وإزالة للروائح مع كل استخدام. أسقط قرصاً في المفرمة، شغّل الماء البارد ثم شغّل المفرمة لمدة 30-60 ثانية — التركيبة الفوّارة المتقدمة تطلق مكونات نشطة تنظّف غرفة الطحن والشفرات وأنابيب التصريف.</p>
<h3>المزايا</h3>
<ul>
<li><strong>تنظيف قوي</strong> – الرغوة الفوّارة تصل إلى الغرفة والشفرات والأنابيب لإزالة بقايا الطعام والدهون والترسبات.</li>
<li><strong>القضاء على الروائح</strong> – تحيّد الروائح بتفكيك الجزيئات العضوية، بدون عطر صناعي.</li>
<li><strong>تحديد الشفرات</strong> – عمل احتكاكي لطيف يساعد على صيانة الشفرات.</li>
<li><strong>منع التراكم</strong> – الاستخدام الأسبوعي يمنع الانسداد والروائح.</li>
<li><strong>آمنة لكل المفارم</strong> – غير مسببة للتآكل وبدون رغاوي زائدة، تناسب جميع العلامات وأنظمة الصرف الصحي.</li>
<li><strong>سهلة الاستخدام</strong> – أسقط وشغّل، دون قياس أو تفكيك.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>GDC-24U</td></tr>
<tr><th>الشكل</th><td>قرص فوّار</td></tr>
<tr><th>اللون</th><td>أبيض</td></tr>
<tr><th>الرائحة</th><td>بدون رائحة</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة، حمض الستريك، بيكربونات الصوديوم</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>الوزن الصافي</th><td>120 جم (24 × 5 جم)</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>أقراص Myklens تحافظ على نظافة وصحة المفرمة. تركيبتها الفوّارة تطلق رغوة كثيفة تصل إلى كل سطح داخلي — مكونات الطحن والحواجز والمناطق صعبة الوصول. بدون أحماض أو كلور أو عطور صناعية: تنظيف بسيط وفعّال.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 16. Kitchen Degreaser
// ============================================================
T['kitchen-degreaser'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Notre dégraissant cuisine offre une élimination puissante des huiles et graisses à chaque pulvérisation. Vaporisez directement sur les surfaces grasses, laissez agir 1 à 2 minutes puis essuyez avec un chiffon humide ou une éponge — la formule avancée pénètre en profondeur pour dissoudre huile de cuisson, graisse cuite et résidus alimentaires. Surfaces propres et fraîches sans résidu chimique.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Élimination puissante des graisses</strong> – Tensioactifs avancés qui dissolvent instantanément huile de cuisson, graisse cuite et résidus collants.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les odeurs de cuisine, parfum citron frais.</li>
<li><strong>Empêche les dépôts</strong> – Une utilisation régulière maintient des surfaces de cuisine propres.</li>
<li><strong>Sûr pour toutes surfaces</strong> – Formule pH 7-9, compatible plaques de cuisson, hottes, plans de travail, micro-ondes, fours et inox.</li>
<li><strong>Facile à utiliser</strong> – Vaporiser et essuyer, sans frottage intensif.</li>
<li><strong>Multi-surfaces</strong> – Efficace sur plaques, hottes, plans de travail, micro-ondes, fours, éviers, crédences et placards.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>KDC-500</td></tr>
<tr><th>Ingrédients actifs</th><td>Tensioactifs (20-40%), agents dégraissants</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Parfum</th><td>Citron / Sans parfum (personnalisable)</td></tr>
<tr><th>Certifications</th><td>ISO, SGS</td></tr>
<tr><th>Contenance</th><td>450 ml</td></tr>
<tr><th>Durée de conservation</th><td>3 ans</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Le dégraissant cuisine Myklens simplifie le ménage en cuisine. Sa formule concentrée dissout instantanément graisse, huile et résidus alimentaires cuits sur plaques, hottes, plans de travail et crédences. Vaporisez, laissez agir et essuyez avec aisance.</p>
<p>À base d'ingrédients de qualité cosmétique avec un pH entre 7 et 9, il est efficace mais doux pour les surfaces. Sans acide ni produit caustique — une cuisine propre et fraîche à chaque utilisation.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium, contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestro desengrasante de cocina ofrece una eliminación potente de aceite y grasa con cada pulverización. Pulverice sobre las superficies grasas, deje actuar 1-2 minutos y limpie con un paño húmedo o esponja — la fórmula avanzada penetra en profundidad para disolver aceite de cocina, grasa cocida y residuos alimentarios. Superficies limpias y frescas sin residuos.</p>
<h3>Características</h3>
<ul>
<li><strong>Desengrase potente</strong> – Tensioactivos avanzados que disuelven al instante aceite de cocina, grasa cocida y residuos pegajosos.</li>
<li><strong>Elimina olores</strong> – Neutraliza los olores de cocina, con aroma fresco a limón.</li>
<li><strong>Evita acumulaciones</strong> – El uso regular mantiene superficies de cocina limpias.</li>
<li><strong>Seguro en todas las superficies</strong> – Fórmula pH 7-9, apta para placas, campanas, encimeras, microondas, hornos e inox.</li>
<li><strong>Fácil de usar</strong> – Pulverizar y limpiar, sin frotar intensamente.</li>
<li><strong>Multisuperficie</strong> – Eficaz en placas, campanas, encimeras, microondas, hornos, fregaderos, salpicaderos y armarios.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>KDC-500</td></tr>
<tr><th>Ingredientes activos</th><td>Tensioactivos (20-40%), desengrasantes</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Aroma</th><td>Limón / Sin aroma (personalizable)</td></tr>
<tr><th>Certificaciones</th><td>ISO, SGS</td></tr>
<tr><th>Contenido</th><td>450 ml</td></tr>
<tr><th>Vida útil</th><td>3 años</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>El desengrasante de cocina Myklens simplifica la limpieza. Su fórmula concentrada disuelve al instante grasa, aceite y residuos cocidos en placas, campanas, encimeras y salpicaderos. Pulverice, deje actuar y limpie con facilidad.</p>
<p>Con ingredientes de grado cosmético y pH entre 7 y 9, es eficaz pero suave con las superficies. Sin ácidos ni cáusticos — una cocina limpia y fresca cada vez.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>مزيل دهون المطبخ من Myklens يوفر إزالة قوية للزيوت والدهون مع كل رشة. رشّ مباشرة على الأسطح الدهنية، اترك المنتج لمدة 1-2 دقيقة ثم امسح بقطعة قماش رطبة أو إسفنجة — التركيبة المتقدمة تتغلغل بعمق لتذيب زيت الطهي والدهون المحروقة وبقايا الطعام. أسطح نظيفة ومنعشة دون بقايا كيميائية.</p>
<h3>المزايا</h3>
<ul>
<li><strong>إزالة قوية للدهون</strong> – مواد فعّالة متقدمة تذيب فوراً زيت الطهي والدهون المحروقة والبقايا اللاصقة.</li>
<li><strong>القضاء على الروائح</strong> – يحيّد روائح المطبخ بعطر الليمون المنعش.</li>
<li><strong>منع التراكم</strong> – الاستخدام المنتظم يحافظ على نظافة أسطح المطبخ.</li>
<li><strong>آمن لجميع الأسطح</strong> – حموضة 7-9، آمن للمواقد والشفاطات والأسطح والميكروويف والأفران والستانلس ستيل.</li>
<li><strong>سهل الاستخدام</strong> – رشّ وامسح، دون فرك قوي.</li>
<li><strong>متعدد الأسطح</strong> – فعّال للمواقد والشفاطات والأسطح والميكروويف والأفران والمغاسل والخزائن.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>KDC-500</td></tr>
<tr><th>المكونات الفعّالة</th><td>مواد فعّالة (20-40%)، عوامل مزيلة للدهون</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>الرائحة</th><td>ليمون / بدون رائحة (قابل للتخصيص)</td></tr>
<tr><th>الشهادات</th><td>ISO, SGS</td></tr>
<tr><th>المحتوى</th><td>450 مل</td></tr>
<tr><th>الصلاحية</th><td>3 سنوات</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>مزيل دهون المطبخ من Myklens يبسّط تنظيف المطبخ. تركيبته المركّزة تذيب فوراً الدهون والزيوت وبقايا الطعام المحروقة على المواقد والشفاطات والأسطح. رشّ واترك ثم امسح بسهولة.</p>
<p>بمكونات بدرجة تجميلية وحموضة 7-9، فعّال لكنه لطيف على الأسطح. بدون أحماض أو مواد كاوية — مطبخ نظيف ومنعش في كل مرة.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001 وSGS وغيرها.</li>
</ol>`,
};

// ============================================================
// 17. Mould Removal
// ============================================================
T['mould-removal'] = {
  fr: `
<h3>Présentation du produit</h3>
<p>Notre gel anti-moisissures offre une élimination puissante des moisissures et du mildiou à chaque application. Pressez le gel directement sur les surfaces moisies, laissez agir 2-3 heures (ou toute la nuit pour les taches tenaces) puis essuyez avec un chiffon humide ou rincez à l'eau — la formule en gel avancée pénètre en profondeur pour dissoudre moisissures, mildiou et taches sombres à la racine.</p>
<h3>Caractéristiques</h3>
<ul>
<li><strong>Anti-moisissures puissant</strong> – Le gel pénètre profondément dans les surfaces poreuses pour dissoudre moisissures, mildiou et taches sombres à la racine.</li>
<li><strong>Élimine les odeurs</strong> – Neutralise les odeurs de moisi en tuant les spores, sans parfum artificiel.</li>
<li><strong>Empêche la repousse</strong> – Agents antimicrobiens pour une protection durable.</li>
<li><strong>Sûr pour la plupart des surfaces</strong> – Formule sans javel, non corrosive, compatible joints carrelage, silicone, baignoires, lavabos, fenêtres et joints de frigo. Sans vapeurs irritantes.</li>
<li><strong>Application précise</strong> – Embout précis pour cibler sans coulures. Sans dilution.</li>
<li><strong>Reste en place</strong> – Gel épais qui adhère aux surfaces verticales sans couler.</li>
</ul>
<h3>Spécifications</h3>
<table><tbody>
<tr><th>Marque</th><td>Myklens</td></tr>
<tr><th>Référence</th><td>MR-500G</td></tr>
<tr><th>Ingrédient actif</th><td>Hypochlorite de sodium (eau de Javel)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Couleur</th><td>Gel transparent / blanc (personnalisable)</td></tr>
<tr><th>Parfum</th><td>Faible chloré / Désodorisé (personnalisable)</td></tr>
<tr><th>Certifications</th><td>ISO, CE, SGS</td></tr>
<tr><th>Contenance</th><td>200 ml</td></tr>
<tr><th>Durée de conservation</th><td>2 ans</td></tr>
</tbody></table>
<h3>Informations produit</h3>
<p>Le gel anti-moisissures Myklens facilite le nettoyage de la salle de bains. Sa formule concentrée à base d'agent blanchissant élimine sans effort moisissures noires, mildiou et taches d'algues sur joints, silicone et rideaux de douche. Le gel épais reste en place sur les surfaces verticales — appliquez, laissez agir quelques minutes et rincez. Surfaces étincelantes garanties.</p>
<h3>Qualité et certifications</h3>
<ol>
<li><strong>Haute qualité</strong> — Matières premières premium et contrôle qualité strict.</li>
<li><strong>R&D</strong> — Plus de 15 ans d'expérience. OEM/ODM bienvenus.</li>
<li><strong>Certifications</strong> — ISO 9001, CE, SGS, etc.</li>
</ol>`,
  es: `
<h3>Presentación del producto</h3>
<p>Nuestro gel antimoho ofrece una eliminación potente de moho y mildiu con cada aplicación. Aplique el gel directamente sobre las superficies con moho, deje actuar 2-3 horas (o toda la noche para manchas resistentes) y limpie con un paño húmedo o enjuague — la fórmula en gel avanzada penetra en profundidad para disolver moho, mildiu y manchas oscuras desde la raíz.</p>
<h3>Características</h3>
<ul>
<li><strong>Antimoho potente</strong> – El gel penetra en superficies porosas para disolver moho, mildiu y manchas oscuras de raíz.</li>
<li><strong>Elimina olores</strong> – Neutraliza el olor a humedad eliminando esporas, sin fragancia artificial.</li>
<li><strong>Previene la reaparición</strong> – Agentes antimicrobianos para protección duradera.</li>
<li><strong>Seguro en la mayoría de superficies</strong> – Sin lejía, no corrosivo, apto para juntas de azulejos, silicona, bañeras, lavabos, ventanas y juntas de nevera. Sin vapores irritantes.</li>
<li><strong>Aplicación precisa</strong> – Boquilla de precisión para aplicar sin chorrear. Sin diluir.</li>
<li><strong>Permanece en su sitio</strong> – Gel espeso que se adhiere a superficies verticales sin escurrir.</li>
</ul>
<h3>Especificaciones</h3>
<table><tbody>
<tr><th>Marca</th><td>Myklens</td></tr>
<tr><th>Modelo</th><td>MR-500G</td></tr>
<tr><th>Ingrediente activo</th><td>Hipoclorito de sodio (lejía)</td></tr>
<tr><th>OEM/ODM</th><td>Disponible</td></tr>
<tr><th>Color</th><td>Gel transparente / blanco (personalizable)</td></tr>
<tr><th>Aroma</th><td>Bajo en cloro / Desodorizado (personalizable)</td></tr>
<tr><th>Certificaciones</th><td>ISO, CE, SGS</td></tr>
<tr><th>Contenido</th><td>200 ml</td></tr>
<tr><th>Vida útil</th><td>2 años</td></tr>
</tbody></table>
<h3>Información del producto</h3>
<p>El gel antimoho Myklens facilita la limpieza del baño. Su fórmula concentrada con agente blanqueador elimina sin esfuerzo moho negro, mildiu y manchas de algas en juntas, silicona y cortinas de ducha. El gel espeso permanece en su sitio sobre superficies verticales — aplique, deje actuar unos minutos y enjuague. Superficies relucientes garantizadas.</p>
<h3>Calidad y certificaciones</h3>
<ol>
<li><strong>Alta calidad</strong> — Materias primas premium y control estricto.</li>
<li><strong>I+D</strong> — Más de 15 años de experiencia. OEM/ODM bienvenidos.</li>
<li><strong>Certificaciones</strong> — ISO 9001, CE, SGS, etc.</li>
</ol>`,
  ar: `
<h3>نبذة عن المنتج</h3>
<p>جل مزيل العفن من Myklens يوفر إزالة قوية للعفن والفطريات مع كل استخدام. اعصر الجل مباشرة على الأسطح المتعفنة، اترك المنتج لمدة 2-3 ساعات (أو طوال الليل للبقع العنيدة) ثم امسح بقطعة قماش رطبة أو اشطف بالماء — تركيبة الجل المتقدمة تتغلغل بعمق لتذيب العفن والفطريات والبقع الداكنة من الجذور.</p>
<h3>المزايا</h3>
<ul>
<li><strong>إزالة قوية للعفن</strong> – يخترق الجل الأسطح المسامية ليذيب العفن والفطريات والبقع الداكنة من الجذور.</li>
<li><strong>القضاء على الروائح</strong> – يحيّد روائح العفونة بقتل الجراثيم، بدون عطر صناعي.</li>
<li><strong>منع عودة العفن</strong> – عوامل مضادة للميكروبات لحماية طويلة الأمد.</li>
<li><strong>آمن لمعظم الأسطح</strong> – بدون كلور تقليدي وغير مسبب للتآكل، آمن لفواصل البلاط والسيليكون وأحواض الاستحمام والمغاسل وإطارات النوافذ وحشيات الثلاجة. بدون أبخرة قاسية.</li>
<li><strong>تطبيق دقيق</strong> – فوهة دقيقة للتطبيق دون تنقيط. بدون تخفيف.</li>
<li><strong>يثبت في مكانه</strong> – جل سميك يلتصق بالأسطح الرأسية دون أن يسيل.</li>
</ul>
<h3>المواصفات</h3>
<table><tbody>
<tr><th>العلامة التجارية</th><td>Myklens</td></tr>
<tr><th>الموديل</th><td>MR-500G</td></tr>
<tr><th>المادة الفعّالة</th><td>هيبوكلوريت الصوديوم (مبيّض)</td></tr>
<tr><th>OEM/ODM</th><td>متاح</td></tr>
<tr><th>اللون</th><td>جل شفاف / أبيض (قابل للتخصيص)</td></tr>
<tr><th>الرائحة</th><td>كلور خفيف / منزوع الرائحة (قابل للتخصيص)</td></tr>
<tr><th>الشهادات</th><td>ISO, CE, SGS</td></tr>
<tr><th>المحتوى</th><td>200 مل</td></tr>
<tr><th>الصلاحية</th><td>سنتان</td></tr>
</tbody></table>
<h3>معلومات المنتج</h3>
<p>جل مزيل العفن من Myklens يسهّل تنظيف الحمام. تركيبته المركّزة بعامل تبييض تزيل بسهولة العفن الأسود والفطريات وبقع الطحالب على الفواصل والسيليكون وستائر الدش. الجل السميك يبقى في مكانه على الأسطح الرأسية — طبّق واترك بضع دقائق ثم اشطف. أسطح لامعة مضمونة.</p>
<h3>الجودة والشهادات</h3>
<ol>
<li><strong>جودة عالية</strong> — مواد خام ممتازة ومراقبة صارمة.</li>
<li><strong>بحث وتطوير</strong> — أكثر من 15 عاماً من الخبرة. نرحب بـ OEM/ODM.</li>
<li><strong>الشهادات</strong> — ISO 9001، CE، SGS وغيرها.</li>
</ol>`,
};

export default T;
