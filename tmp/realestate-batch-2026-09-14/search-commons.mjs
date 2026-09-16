import { execFileSync } from 'node:child_process';
const queries = [
  'Morocco housing apartment',
  'Rabat apartment buildings Morocco',
  'Parliament of Morocco 2026',
  'Bank Al-Maghrib building Rabat',
  'Marrakech construction site building',
  'Gueliz Marrakech',
  'Hivernage Marrakech',
  'Marrakech riad interior',
  'Marrakech Menara Airport',
  'Marrakech Palmeraie',
  'Casablanca apartment blocks Morocco',
  'Moroccan notary property documents',
];
function enc(s){return encodeURIComponent(s)}
for (const q of queries) {
  console.log('\nQUERY', q);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${enc(q)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;
  const out = execFileSync('curl', ['-L','-s', url], {encoding:'utf8'});
  const j=JSON.parse(out);
  const pages=Object.values(j.query?.pages||{}).sort((a,b)=>(a.index||0)-(b.index||0));
  for (const p of pages) {
    const ii=p.imageinfo?.[0]; if (!ii || !ii.mime?.startsWith('image/')) continue;
    const m=ii.extmetadata||{};
    const artist=(m.Artist?.value||'').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
    const desc=(m.ImageDescription?.value||m.ObjectName?.value||'').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
    console.log(JSON.stringify({title:p.title, size:`${ii.width}x${ii.height}`, license:m.LicenseShortName?.value, artist:artist.slice(0,90), date:m.DateTimeOriginal?.value||m.DateTime?.value, desc:desc.slice(0,120), url:ii.url, page:ii.descriptionurl}));
  }
}
