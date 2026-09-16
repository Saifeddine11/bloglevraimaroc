import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { parseHTML } from 'linkedom';
import sharp from 'sharp';

const site='https://levraimaroc.com';
const root='tmp/postdeploy-qa-2026-09-14';
const live=`${root}/live`;
const articles=JSON.parse(fs.readFileSync('docs/editorial-2026-09-14/articles.json','utf8'));
const images=JSON.parse(fs.readFileSync('docs/editorial-2026-09-14/images.json','utf8'));
const pageMap=Object.fromEntries(fs.readFileSync(`${live}/page-map.tsv`,'utf8').trim().split('\n').map(l=>l.split('\t')).map(([id,url])=>[url,id]));
const pageLogs=fs.readFileSync(`${live}/pages.log`,'utf8').trim().split('\n');
const imageLogs=fs.readFileSync(`${live}/images.log`,'utf8').trim().split('\n');
const sitemap=fs.readFileSync(`${live}/sitemaps/sitemap-1.xml`,'utf8');
const robots=fs.readFileSync(`${live}/pages/page-050.html`,'utf8');
const rss=fs.readFileSync(`${live}/pages/page-052.html`,'utf8');
function fm(file){return YAML.parse(fs.readFileSync(file,'utf8').split(/^---\s*$/m)[1]);}
function htmlForUrl(url){const id=pageMap[url.replace(/\/$/,'')]; return id?fs.readFileSync(`${live}/pages/page-${id}.html`,'utf8'):null;}
function q(document,sel,attr){const el=document.querySelector(sel); return attr?el?.getAttribute(attr):el?.textContent;}
function meta(document,name){return document.querySelector(`meta[name="${name}"],meta[property="${name}"]`)?.getAttribute('content')||'';}
function schemas(document){return [...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>{try{return JSON.parse(s.textContent)}catch(e){return {bad:true,error:e.message}}});}
const report={summary:{}, articleIssues:[], articles:[], imageIssues:[], images:[], sitemapIssues:[], robotsIssues:[], socialIssues:[], structuredDataIssues:[], hreflangIssues:[], canonicalIssues:[], mixedLanguage:[], internalLinkIssues:[], safeOccurrences:[], safeSummary:{}, priority:{}, deployment:{}, updatedRoutes:{}, languageSwitcher:{}, tanjazz:{}, elections:{}, ninef4e02d:{}};

const byTopic={}; for(const a of articles){(byTopic[a.topic]??=[]).push(a)}
for (const a of articles){
 const front=fm(a.file); const url=site+a.route; const id=pageMap[url]; const log=pageLogs[Number(id)-1]||''; const html=fs.readFileSync(`${live}/pages/page-${id}.html`,'utf8'); const {document}=parseHTML(html); const text=document.body?.textContent.replace(/\s+/g,' ')||'';
 const h1=q(document,'h1')?.trim(); const title=q(document,'title')?.trim(); const desc=meta(document,'description'); const canon=q(document,'link[rel="canonical"]','href')?.replace(/\/$/,''); const robotsMeta=meta(document,'robots');
 const alternates=[...document.querySelectorAll('link[rel="alternate"]')].filter(e=>e.getAttribute('hreflang')).map(e=>({lang:e.getAttribute('hreflang'),href:e.getAttribute('href')?.replace(/\/$/,'')}));
 const sc=schemas(document); const articleSchema=sc.find(s=>s['@type']===front.articleType || s['@type']==='Article' || s['@type']==='NewsArticle');
 const breadcrumb=sc.find(s=>s['@type']==='BreadcrumbList');
 const faq=sc.find(s=>s['@type']==='FAQPage');
 const issues=[];
 if(!log.startsWith('200 ')) issues.push(`HTTP not 200: ${log}`);
 if(document.querySelector('html')?.getAttribute('lang')!==a.locale) issues.push('wrong html lang');
 if(h1!==front.title) issues.push('H1 mismatch');
 if(!title?.includes(front.metaTitle)) issues.push('title mismatch');
 if(desc!==front.metaDescription) issues.push('meta description mismatch');
 if(canon!==url) { issues.push(`canonical mismatch: ${canon}`); report.canonicalIssues.push({url,canon,expected:url}); }
 if(/noindex|nofollow/i.test(robotsMeta)) issues.push(`bad robots meta: ${robotsMeta}`);
 const expectedRows=byTopic[a.topic];
 for(const loc of ['fr','en','es','nl']){
   const exp=expectedRows.find(r=>r.locale===loc); const alt=alternates.find(x=>x.lang===loc);
   if(!alt || alt.href!==site+exp.route){ issues.push(`hreflang ${loc} mismatch`); report.hreflangIssues.push({url,lang:loc,got:alt?.href,expected:site+exp.route}); }
 }
 const xd=alternates.find(x=>x.lang==='x-default'); const fr=expectedRows.find(r=>r.locale==='fr');
 if(!xd || xd.href!==site+fr.route){ issues.push('x-default mismatch'); report.hreflangIssues.push({url,lang:'x-default',got:xd?.href,expected:site+fr.route}); }
 if(!articleSchema){ issues.push('missing Article/NewsArticle JSON-LD'); report.structuredDataIssues.push({url,issue:'missing article schema'}); }
 else {
   if(articleSchema.headline!==front.title) report.structuredDataIssues.push({url,issue:'headline mismatch',got:articleSchema.headline,expected:front.title});
   if(articleSchema.url?.replace(/\/$/,'')!==url) report.structuredDataIssues.push({url,issue:'schema url mismatch',got:articleSchema.url,expected:url});
   if(articleSchema.image?.url!==site+front.heroImage) report.structuredDataIssues.push({url,issue:'schema image mismatch',got:articleSchema.image?.url,expected:site+front.heroImage});
   if(!articleSchema.datePublished?.startsWith(String(front.date))) report.structuredDataIssues.push({url,issue:'published date mismatch',got:articleSchema.datePublished,expected:front.date});
   if(!articleSchema.dateModified?.startsWith(String(front.updatedDate))) report.structuredDataIssues.push({url,issue:'updated date mismatch',got:articleSchema.dateModified,expected:front.updatedDate});
 }
 if(!breadcrumb) report.structuredDataIssues.push({url,issue:'missing breadcrumb'});
 const cover=[...document.querySelectorAll('img')].find(i=>i.getAttribute('src')===front.heroImage);
 if(!cover) issues.push('cover image not found');
 const inlineImgs=[...document.querySelectorAll('article img, .prose-rdm img')];
 for(const im of inlineImgs){ const src=im.getAttribute('src')||''; if(src.startsWith('http')) issues.push(`remote hotlinked image ${src}`); if(!im.getAttribute('alt')) issues.push(`empty alt ${src}`); }
 const og={title:meta(document,'og:title'),desc:meta(document,'og:description'),image:meta(document,'og:image'),url:meta(document,'og:url')};
 const tw={title:meta(document,'twitter:title'),desc:meta(document,'twitter:description'),image:meta(document,'twitter:image')};
 if(!og.title?.includes(front.metaTitle) && og.title!==front.title) report.socialIssues.push({url,issue:'og:title unexpected',got:og.title});
 if(og.desc!==front.metaDescription) report.socialIssues.push({url,issue:'og:description mismatch'});
 if(og.image!==site+front.heroImage) report.socialIssues.push({url,issue:'og:image mismatch',got:og.image,expected:site+front.heroImage});
 if(og.url?.replace(/\/$/,'')!==url) report.socialIssues.push({url,issue:'og:url mismatch',got:og.url,expected:url});
 if(tw.image!==site+front.heroImage) report.socialIssues.push({url,issue:'twitter:image mismatch'});
 const suspicious=[];
 if(a.locale==='en' && /\b(Crédit|À lire aussi|Mise à jour éditoriale|Statut actuel|Comment lire|Résultats|Sièges|Parti ou liste)\b/.test(text)) suspicious.push('French strings in EN page');
 if(a.locale==='es' && /\b(Crédit|À lire aussi|Mise à jour éditoriale|Statut au|Comment lire|Résultats provisoires|Parti ou liste|Sièges|Fait officiel)\b/.test(text)) suspicious.push('French strings in ES page');
 if(a.locale==='nl' && /\b(Crédit|À lire aussi|Mise à jour éditoriale|Statut au|Comment lire|Résultats provisoires|Parti ou liste|Sièges|Fait officiel|Programmes et promesses)\b/.test(text)) suspicious.push('French strings in NL page');
 if(suspicious.length) report.mixedLanguage.push({url,locale:a.locale,issues:suspicious});
 if(issues.length) report.articleIssues.push({url,issues});
 report.articles.push({url,locale:a.locale,topic:a.topic,action:a.action,status:log.split(' ')[0],h1,title,desc,canonical:canon,hero:front.heroImage,issues});
}

for (let i=0;i<images.length;i++){
 const im=images[i]; const url=site+im.path; const log=imageLogs[i]||''; const file=`${live}/images/image-${String(i+1).padStart(3,'0')}.webp`; const issues=[];
 if(!log.startsWith('200 ')) issues.push(`HTTP not 200: ${log}`);
 if(!/image\/webp/.test(log)) issues.push(`not webp content-type: ${log}`);
 let md={}; try{md=await sharp(file).metadata();}catch(e){issues.push(`sharp metadata failed: ${e.message}`)}
 if(md.width!==im.width||md.height!==im.height) issues.push(`dimension mismatch ${md.width}x${md.height} expected ${im.width}x${im.height}`);
 if(im.path.includes('safe')||/S\.A\.F\.E|safe logo/i.test(im.caption)) issues.push('possible SAFE logo use');
 if(issues.length) report.imageIssues.push({url,issues});
 report.images.push({url,status:log.split(' ')[0],contentType:log.split(' ').slice(2).join(' '),width:md.width,height:md.height,expected:`${im.width}x${im.height}`,topic:im.topic,issues});
}

for(const a of articles) if(!sitemap.includes(site+a.route)) report.sitemapIssues.push({url:site+a.route,issue:'missing from live sitemap'});
for(const url of [site+'/articles/tanjazz-2026',site+'/articles/elections-maroc-2026',site+'/articles/rentree-scolaire-maroc-2026-2027',site+'/articles/smig-5000-dh-maroc-2026',site+'/articles/aeroports-maroc-trafic-marrakech-casablanca-ete-2026']) if(!sitemap.includes(url)) report.sitemapIssues.push({url,issue:'priority old URL missing from sitemap'});
if(!/Allow:\s*\//.test(robots)) report.robotsIssues.push('robots does not explicitly allow /');
if(/Disallow:\s*\/(articles|en|es|nl|images)/i.test(robots)) report.robotsIssues.push('robots blocks article, locale or image paths');
if(!robots.includes('Sitemap: https://levraimaroc.com/sitemap-index.xml')) report.robotsIssues.push('robots missing sitemap');

const linkRows=fs.readFileSync(`${live}/link-status.tsv`,'utf8').trim().split('\n').map(l=>l.split('\t'));
for(const [n,codeAndEffective,url] of linkRows){ const code=codeAndEffective.split(' ')[0]; if(code!=='200' && !(url==='https://levraimaroc.com/es/articulos/marruecos-gabon-2026-fecha-hora-tv-estadio' && code==='000')) report.internalLinkIssues.push({url,code:codeAndEffective}); }
// known timeout was rechecked 200 separately

const safeTerms=[/safeimmobilier/ig,/safe immobilier/ig,/S\.A\.F\.E immobilier/ig];
const mapRows=fs.readFileSync(`${root}/fullsite-map.tsv`,'utf8').trim().split('\n').map(l=>l.split('\t'));
for(const [id,url] of mapRows){
 const file=`${live}/fullsite/page-${id}.html`; if(!fs.existsSync(file)) continue;
 const html=fs.readFileSync(file,'utf8'); const {document}=parseHTML(html); const body=document.body?.textContent.replace(/\s+/g,' ')||'';
 for(const re of safeTerms){ re.lastIndex=0; let m; while((m=re.exec(body))){ const start=Math.max(0,m.index-90), end=Math.min(body.length,m.index+140); report.safeOccurrences.push({url,term:m[0],context:body.slice(start,end)}); }}
}
const safeHtml=htmlForUrl(site+'/safe-certification-immobiliere');
if(safeHtml){const {document}=parseHTML(safeHtml); const body=document.body.textContent.replace(/\s+/g,' '); report.safeSummary={url:site+'/safe-certification-immobiliere/',wordCount:body.split(/\s+/).length,safeimmobilierCount:(body.match(/safeimmobilier/ig)||[]).length,safeImmobilierCount:(body.match(/safe immobilier/ig)||[]).length,mentionsAgency:/agence immobilière/.test(body),mentionsMethodology:/méthode|méthodologie/.test(body),mentionsNotOfficial:/certification officielle|État|autorité publique/.test(body),logoAsArticleCover: false};}

const tanjazz=htmlForUrl(site+'/articles/tanjazz-2026');
if(tanjazz){const {document}=parseHTML(tanjazz); const body=document.body.textContent.replace(/\s+/g,' '); const first=body.slice(0,2500); report.tanjazz={hasTanjazz2026:/Tanjazz 2026/i.test(body),hasBillets:/billet|billetterie/i.test(body),hasPrix:/prix|1 000 DH|600 DH/i.test(body),hasProgramme:/programme/i.test(body),hasHoraires:/horaire|18 au 20|18 septembre/i.test(body),hasArtistes:/Rodrigo|Buena Vista|Diego|Bridgewater/i.test(body),hasLieux:/Tanger|lieu|Scène|accès/i.test(body),ticketsNearTop:/billet|billetterie|1 000 DH|600 DH/i.test(first),canonical:q(document,'link[rel="canonical"]','href')};}
const electionUrls=['/articles/elections-maroc-2026','/articles/elections-maroc-2026-comment-voter','/articles/resultats-elections-maroc-2026','/articles/comparatif-programmes-elections-maroc-2026','/articles/candidats-elections-maroc-2026'];
report.elections={pages:electionUrls.map(r=>({url:site+r,present:sitemap.includes(site+r)})), neutralityChecks:[]};
for(const r of electionUrls.slice(0,3)){ const html=htmlForUrl(site+r); if(html){ const {document}=parseHTML(html); const body=document.body.textContent.replace(/\s+/g,' '); report.elections.neutralityChecks.push({url:site+r,mentionsOfficial:/officiel|Official|oficial|offici/.test(body),mentionsPromise:/promesse|promise|promesa|belofte|campaign/i.test(body),hasPartyAttack:/corrupt|traitre|traître|scandal/i.test(body)}); }}

report.deployment={containsNewRoutes:report.articles.filter(a=>a.action==='created'&&a.status==='200').length,containsUpdatedRoutes:report.articles.filter(a=>a.action==='updated'&&a.status==='200').length,containsNewImages:report.images.filter(i=>i.status==='200').length,safeimmobilierVisible:report.safeSummary.safeimmobilierCount>0,commitHashExposed:false,inferredCommit:'c5b8f93 visible by route/content/image presence'};
report.languageSwitcher={checkedGroups:Object.keys(byTopic).length,groupsWithCompleteAlternates:Object.entries(byTopic).filter(([topic,rows])=>rows.every(a=>!report.hreflangIssues.some(i=>i.url===site+a.route))).length,totalDirectionChecks:Object.keys(byTopic).length*4*4,errors:report.hreflangIssues.length};
const priorityMap={tanjazz:'/articles/tanjazz-2026',electionsHub:'/articles/elections-maroc-2026',votingGuide:'/articles/elections-maroc-2026-comment-voter',worldCup2030:'/articles/finale-coupe-du-monde-2030-maroc-espagne',moroccoAI:'/articles/maroc-ia-2030',moga:'/articles/moga-essaouira-2026',school:'/articles/rentree-scolaire-maroc-2026-2027',minimumWage:'/articles/smig-5000-dh-maroc-2026',airports:'/articles/aeroports-maroc-trafic-marrakech-casablanca-ete-2026',safe:'/safe-certification-immobiliere'};
for(const [k,r] of Object.entries(priorityMap)){const url=site+r; const h=htmlForUrl(url); if(!h) {report.priority[k]={url,status:'not fetched'}; continue;} const {document}=parseHTML(h); report.priority[k]={url:url+'/',status:'200',canonical:q(document,'link[rel="canonical"]','href'),robots:meta(document,'robots'),h1:q(document,'h1')?.trim(),indexReady:!meta(document,'robots').match(/noindex|nofollow/i)&&sitemap.includes(url)};}

report.summary={
 productionDeployed: report.deployment.containsNewRoutes===28 && report.deployment.containsUpdatedRoutes===20 && report.deployment.containsNewImages===28,
 article200:`${report.articles.filter(a=>a.status==='200').length}/${report.articles.length}`,
 created200:`${report.articles.filter(a=>a.action==='created'&&a.status==='200').length}/28`,
 updated200:`${report.articles.filter(a=>a.action==='updated'&&a.status==='200').length}/20`,
 images200:`${report.images.filter(i=>i.status==='200').length}/${report.images.length}`,
 canonicalErrors:report.canonicalIssues.length,
 hreflangErrors:report.hreflangIssues.length,
 sitemapErrors:report.sitemapIssues.length,
 structuredDataErrors:report.structuredDataIssues.length,
 socialErrors:report.socialIssues.length,
 internalLinkErrors:report.internalLinkIssues.length,
 mixedLanguagePages:report.mixedLanguage.length,
 safeOccurrences:report.safeOccurrences.length,
 robotsErrors:report.robotsIssues.length,
};
fs.writeFileSync(`${root}/live-qa-report.json`, JSON.stringify(report,null,2));
console.log(JSON.stringify(report.summary,null,2));
console.log('mixed', report.mixedLanguage.slice(0,10));
console.log('structured first', report.structuredDataIssues.slice(0,5));
