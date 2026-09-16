import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const selected=JSON.parse(fs.readFileSync('tmp/realestate-batch-2026-09-14/selected-images.json','utf8'));
const titles=selected.map(x=>x.title).join('|');
const url=`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;
let out=execFileSync('curl',['-L','-s',url],{encoding:'utf8'});
if(!out.trim().startsWith('{')) throw new Error(out.slice(0,200));
const j=JSON.parse(out);
const pages=Object.values(j.query.pages||{});
const byTitle=Object.fromEntries(pages.map(p=>[p.title,p]));
const clean=s=>(s||'').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/\s+/g,' ').trim();
const records=[];
for(const item of selected){
 const p=byTitle[item.title];
 if(!p) throw new Error('missing '+item.title);
 const ii=p.imageinfo?.[0]; if(!ii) throw new Error('no imageinfo '+item.title);
 const m=ii.extmetadata||{};
 records.push({...item, width:ii.width, height:ii.height, sourceUrl:ii.descriptionurl, directUrl:ii.url, license:m.LicenseShortName?.value||'', licenseUrl:m.LicenseUrl?.value||'', artist:clean(m.Artist?.value), credit:clean(m.Credit?.value), date:m.DateTimeOriginal?.value||m.DateTime?.value||'', description:clean(m.ImageDescription?.value||m.ObjectName?.value)});
}
fs.writeFileSync('tmp/realestate-batch-2026-09-14/selected-images-metadata.json', JSON.stringify(records,null,2));
console.log(JSON.stringify(records.map(r=>({key:r.key,title:r.title,width:r.width,height:r.height,license:r.license,artist:r.artist,date:r.date})),null,2));
