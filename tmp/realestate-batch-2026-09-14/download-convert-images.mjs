import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';
const records=JSON.parse(fs.readFileSync('tmp/realestate-batch-2026-09-14/selected-images-metadata.json','utf8'));
fs.mkdirSync('tmp/realestate-batch-2026-09-14/originals',{recursive:true});
fs.mkdirSync('public/images/articles/realestate-2026-09-14',{recursive:true});
for (const r of records) {
  const ext = r.directUrl.split('?')[0].split('.').pop().replace(/[^a-z0-9]/gi,'').slice(0,5) || 'jpg';
  const original = `tmp/realestate-batch-2026-09-14/originals/${r.key}.${ext}`;
  const webp = `public/images/articles/realestate-2026-09-14/${r.key}.webp`;
  if (!fs.existsSync(original)) execFileSync('curl',['-L','-s','-o',original,r.directUrl],{stdio:'inherit'});
  await sharp(original).rotate().resize(1600,900,{fit:'cover',position:'attention'}).webp({quality:82}).toFile(webp);
  r.localPath = `/images/articles/realestate-2026-09-14/${r.key}.webp`;
  r.outputWidth = 1600;
  r.outputHeight = 900;
}
fs.writeFileSync('tmp/realestate-batch-2026-09-14/selected-images-final.json', JSON.stringify(records,null,2));
console.log(records.map(r=>`${r.localPath}\t${r.license}\t${r.sourceUrl}`).join('\n'));
