import fs from 'node:fs';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const topics = [
 ['kylie-jenner-hidden-hills-sale-2026', {fr:'kylie-jenner-maison-hidden-hills-vendue-15-3-millions', en:'kylie-jenner-hidden-hills-house-sold-15-3-million', es:'kylie-jenner-casa-hidden-hills-vendida-15-3-millones', nl:'kylie-jenner-huis-hidden-hills-verkocht-15-3-miljoen'}],
 ['the-holme-regents-park-190m-2026', {fr:'the-holme-londres-regents-park-190-millions-livres', en:'the-holme-regents-park-london-190-million-pounds', es:'the-holme-regents-park-londres-190-millones-libras', nl:'the-holme-regents-park-londen-190-miljoen-pond'}],
 ['rihanna-aspen-rental-mansion-sale-2026', {fr:'rihanna-villa-aspen-location-vendue-63-5-millions', en:'rihanna-aspen-rental-mansion-sold-63-5-million', es:'rihanna-villa-aspen-alquilada-vendida-63-5-millones', nl:'rihanna-aspen-huurvilla-verkocht-63-5-miljoen'}],
 ['saade-spiegel-paris-hotel-particulier-2026', {fr:'rodolphe-saade-evan-spiegel-hotel-particulier-paris-55-millions', en:'rodolphe-saade-evan-spiegel-paris-townhouse-55-million-euros', es:'rodolphe-saade-evan-spiegel-hotel-particulier-paris-55-millones', nl:'rodolphe-saade-evan-spiegel-hotel-particulier-parijs-55-miljoen'}],
 ['palais-venitien-cannes-sale-2026', {fr:'palais-venitien-cannes-vendu-105-millions', en:'palais-venitien-cannes-sold-105-million-euros', es:'palais-venitien-cannes-vendido-105-millones', nl:'palais-venitien-cannes-verkocht-105-miljoen'}],
 ['gerard-depardieu-paris-hotel-particulier-sale-2026', {fr:'gerard-depardieu-hotel-particulier-paris-vente-baisse-prix', en:'gerard-depardieu-paris-hotel-particulier-reported-sale-price-cut', es:'gerard-depardieu-hotel-particulier-paris-venta-rebaja-precio', nl:'gerard-depardieu-hotel-particulier-parijs-verkoop-prijsdaling'}],
 ['pinault-hayek-paris-duplex-sale-2026', {fr:'pinault-salma-hayek-duplex-paris-saints-peres-18-5-millions', en:'pinault-salma-hayek-paris-duplex-saints-peres-18-5-million', es:'pinault-salma-hayek-duplex-paris-saints-peres-18-5-millones', nl:'pinault-salma-hayek-duplex-parijs-saints-peres-18-5-miljoen'}],
 ['paris-passage-visitation-record-price-2025', {fr:'record-prix-m2-paris-passage-visitation-78750', en:'paris-passage-visitation-record-price-per-square-metre-78750', es:'record-precio-m2-paris-passage-visitation-78750', nl:'record-prijs-m2-parijs-passage-visitation-78750'}],
 ['chateau-ile-barbe-lyon-auction-2026', {fr:'chateau-ile-barbe-lyon-encheres-1-35-million', en:'chateau-ile-barbe-lyon-auction-1-35-million', es:'chateau-ile-barbe-lyon-subasta-1-35-millon', nl:'chateau-ile-barbe-lyon-veiling-1-35-miljoen'}],
 ['chateau-domblans-henri-iv-nightclub-sale-2026', {fr:'chateau-domblans-henri-iv-discotheque-1-3-million', en:'chateau-domblans-henri-iv-nightclub-1-3-million', es:'chateau-domblans-henri-iv-discoteca-1-3-millon', nl:'chateau-domblans-henri-iv-nachtclub-1-3-miljoen'}],
];
const base = {fr:['articles'], en:['en','articles'], es:['es','articulos'], nl:['nl','artikelen']};
const expectedSafeKeys = new Set(['paris-passage-visitation-record-price-2025','chateau-ile-barbe-lyon-auction-2026','chateau-domblans-henri-iv-nightclub-sale-2026']);
let errors=[];
let rows=[];
for (const [key, slugs] of topics) {
 for (const locale of ['fr','en','es','nl']) {
   const htmlPath=path.join('dist', ...base[locale], slugs[locale], 'index.html');
   if (!fs.existsSync(htmlPath)) { errors.push(`missing ${htmlPath}`); continue; }
   const html=fs.readFileSync(htmlPath,'utf8');
   const {document}=parseHTML(html);
   const canonical=document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
   const og=document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
   const img=document.querySelector('main img')?.getAttribute('src') || '';
   const alternates=[...document.querySelectorAll('link[rel="alternate"]')].map(a=>a.getAttribute('hreflang')).filter(Boolean);
   const scripts=[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>s.textContent).join('\n');
   if (!canonical.includes(slugs[locale])) errors.push(`canonical mismatch ${htmlPath}: ${canonical}`);
   for (const hreflang of ['fr','en','es','nl','x-default']) if (!alternates.includes(hreflang)) errors.push(`missing hreflang ${hreflang} in ${htmlPath}`);
   if (!scripts.includes('NewsArticle')) errors.push(`missing NewsArticle schema ${htmlPath}`);
   if (!scripts.includes('BreadcrumbList')) errors.push(`missing BreadcrumbList schema ${htmlPath}`);
   if (!scripts.includes('FAQPage')) errors.push(`missing FAQPage schema ${htmlPath}`);
   if (!img.includes('/images/articles/luxury-real-estate-2026/')) errors.push(`unexpected hero image ${htmlPath}: ${img}`);
   const imagePath=path.join('dist', img.replace(/^\//,''));
   if (!fs.existsSync(imagePath)) errors.push(`missing built image ${imagePath}`);
   const mdPath=locale==='fr' ? path.join('src','content','articles',`${slugs[locale]}.md`) : path.join('src','content','articles',locale,`${slugs[locale]}.md`);
   const md=fs.readFileSync(mdPath,'utf8');
   const articleSafeLink=md.includes('/safe-certification-immobiliere/') || md.includes('/en/safe-real-estate-certification/') || md.includes('/es/certificacion-inmobiliaria-safe/') || md.includes('/nl/safe-vastgoedcertificering/');
   const safeCount=(md.match(/S\.A\.F\.E/g)||[]).length;
   if (expectedSafeKeys.has(key) && !articleSafeLink) errors.push(`expected article-body safe link ${mdPath}`);
   if (!expectedSafeKeys.has(key) && articleSafeLink) errors.push(`unexpected article-body safe link ${mdPath}`);
   if (md.toLowerCase().includes('safeimmobilier') || html.toLowerCase().includes('safeimmobilier')) errors.push(`forbidden safeimmobilier ${htmlPath}`);
   rows.push({key, locale, slug: slugs[locale], safeCount, canonical});
 }
}
console.table(rows.map(r=>({locale:r.locale, slug:r.slug, safeCount:r.safeCount})));
if (errors.length) {
 console.error(errors.join('\n'));
 process.exit(1);
}
console.log(`Audited ${rows.length} new localized pages successfully.`);
