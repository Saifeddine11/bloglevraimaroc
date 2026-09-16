const topics = [
 {fr:'kylie-jenner-maison-hidden-hills-vendue-15-3-millions', en:'kylie-jenner-hidden-hills-house-sold-15-3-million', es:'kylie-jenner-casa-hidden-hills-vendida-15-3-millones', nl:'kylie-jenner-huis-hidden-hills-verkocht-15-3-miljoen'},
 {fr:'the-holme-londres-regents-park-190-millions-livres', en:'the-holme-regents-park-london-190-million-pounds', es:'the-holme-regents-park-londres-190-millones-libras', nl:'the-holme-regents-park-londen-190-miljoen-pond'},
 {fr:'rihanna-villa-aspen-location-vendue-63-5-millions', en:'rihanna-aspen-rental-mansion-sold-63-5-million', es:'rihanna-villa-aspen-alquilada-vendida-63-5-millones', nl:'rihanna-aspen-huurvilla-verkocht-63-5-miljoen'},
 {fr:'rodolphe-saade-evan-spiegel-hotel-particulier-paris-55-millions', en:'rodolphe-saade-evan-spiegel-paris-townhouse-55-million-euros', es:'rodolphe-saade-evan-spiegel-hotel-particulier-paris-55-millones', nl:'rodolphe-saade-evan-spiegel-hotel-particulier-parijs-55-miljoen'},
 {fr:'palais-venitien-cannes-vendu-105-millions', en:'palais-venitien-cannes-sold-105-million-euros', es:'palais-venitien-cannes-vendido-105-millones', nl:'palais-venitien-cannes-verkocht-105-miljoen'},
 {fr:'gerard-depardieu-hotel-particulier-paris-vente-baisse-prix', en:'gerard-depardieu-paris-hotel-particulier-reported-sale-price-cut', es:'gerard-depardieu-hotel-particulier-paris-venta-rebaja-precio', nl:'gerard-depardieu-hotel-particulier-parijs-verkoop-prijsdaling'},
 {fr:'pinault-salma-hayek-duplex-paris-saints-peres-18-5-millions', en:'pinault-salma-hayek-paris-duplex-saints-peres-18-5-million', es:'pinault-salma-hayek-duplex-paris-saints-peres-18-5-millones', nl:'pinault-salma-hayek-duplex-parijs-saints-peres-18-5-miljoen'},
 {fr:'record-prix-m2-paris-passage-visitation-78750', en:'paris-passage-visitation-record-price-per-square-metre-78750', es:'record-precio-m2-paris-passage-visitation-78750', nl:'record-prijs-m2-parijs-passage-visitation-78750'},
 {fr:'chateau-ile-barbe-lyon-encheres-1-35-million', en:'chateau-ile-barbe-lyon-auction-1-35-million', es:'chateau-ile-barbe-lyon-subasta-1-35-millon', nl:'chateau-ile-barbe-lyon-veiling-1-35-miljoen'},
 {fr:'chateau-domblans-henri-iv-discotheque-1-3-million', en:'chateau-domblans-henri-iv-nightclub-1-3-million', es:'chateau-domblans-henri-iv-discoteca-1-3-millon', nl:'chateau-domblans-henri-iv-nachtclub-1-3-miljoen'},
];
const prefixes={fr:'/articles/',en:'/en/articles/',es:'/es/articulos/',nl:'/nl/artikelen/'};
const imgs=['chateau-domblans.webp','chateau-ile-barbe.webp','depardieu-cherche-midi-context.webp','kylie-hidden-hills-map.webp','palais-venitien-cannes-context.webp','pinault-saints-peres-context.webp','record-passage-visitation.webp','rihanna-aspen-context.webp','saade-rue-andigne-context.webp','the-holme-regents-park.webp'];
let errors=[]; let ok=[];
for (const topic of topics) {
 for (const loc of ['fr','en','es','nl']) {
   const url='https://levraimaroc.com'+prefixes[loc]+topic[loc]+'/';
   const res=await fetch(url, {redirect:'follow'});
   const html=await res.text();
   const checks={status:res.status, canonical:html.includes(`rel="canonical" href="https://levraimaroc.com${prefixes[loc]}${topic[loc]}"`) || html.includes(`rel="canonical" href="https://levraimaroc.com${prefixes[loc]}${topic[loc]}/"`), news:html.includes('NewsArticle'), faq:html.includes('FAQPage'), image:html.includes('/images/articles/luxury-real-estate-2026/')};
   const missing=Object.entries(checks).filter(([k,v])=>k==='status'?v!==200:!v).map(([k])=>k);
   if (missing.length) errors.push(`${url} missing ${missing.join(',')}`); else ok.push(url);
 }
}
for (const img of imgs) {
 const url='https://levraimaroc.com/images/articles/luxury-real-estate-2026/'+img;
 const res=await fetch(url, {method:'HEAD'});
 const type=res.headers.get('content-type') || '';
 if (res.status!==200 || !type.includes('image/webp')) errors.push(`${url} ${res.status} ${type}`);
}
console.log(`Production article URLs OK: ${ok.length}/40`);
console.log(`Production image assets checked: ${imgs.length}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
