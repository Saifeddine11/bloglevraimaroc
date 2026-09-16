import fs from 'node:fs';
import { parseHTML } from 'linkedom';
const site='https://levraimaroc.com';
const rows=fs.readFileSync('tmp/postdeploy-qa-2026-09-14/live/page-map.tsv','utf8').trim().split('\n').map(l=>l.split('\t'));
const links=new Set();
for (const [id,url] of rows.slice(0,49)) { // article pages + safe
 const html=fs.readFileSync(`tmp/postdeploy-qa-2026-09-14/live/pages/page-${id}.html`,'utf8');
 const {document}=parseHTML(html);
 for (const a of document.querySelectorAll('article a[href], main a[href], nav a[href], footer a[href]')) {
   const href=a.getAttribute('href');
   if (!href || /^(mailto:|tel:|#|javascript:)/.test(href)) continue;
   let u; try { u=new URL(href, url); } catch { continue; }
   if (u.origin===site) { u.hash=''; links.add(u.href); }
 }
}
fs.writeFileSync('tmp/postdeploy-qa-2026-09-14/internal-links.txt',[...links].sort().join('\n')+'\n');
console.log('links', links.size);
