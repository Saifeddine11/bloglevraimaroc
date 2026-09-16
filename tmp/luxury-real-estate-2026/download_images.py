import html, json, re, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image, ImageOps

OUT = Path('public/images/articles/luxury-real-estate-2026')
RAW = Path('tmp/luxury-real-estate-2026/raw')
OUT.mkdir(parents=True, exist_ok=True)
RAW.mkdir(parents=True, exist_ok=True)
HEADERS = {'User-Agent':'LeVraiMarocEditorialQA/1.0 (contact@levraimaroc.com)'}
FILES = [
  ('kylie-hidden-hills-map', 'File:LA County Incorporated Areas Hidden Hills highlighted.svg'),
  ('the-holme-regents-park', 'File:The Holme from its lawn - geograph.org.uk - 5488765.jpg'),
  ('rihanna-aspen-context', 'File:Aspen Mountain, United States (Unsplash).jpg'),
  ('saade-rue-andigne-context', "File:3-5 rue d'Andigné Paris.jpg"),
  ('palais-venitien-cannes-context', 'File:Cannes from Suquet Tower 02.jpg'),
  ('depardieu-cherche-midi-context', 'File:MH 75006 PA00088569 Maison 87 rue du Cherche-Midi.JPG'),
  ('pinault-saints-peres-context', 'File:1 rue des Saints-Pères Paris.jpg'),
  ('record-passage-visitation', 'File:Passage Visitation - Paris VII (FR75) - 2021-08-07 - 1.jpg'),
  ('chateau-ile-barbe', "File:Le Château de l'Ile Barbe - estampe - JB 1836 - btv1b10463201v.jpg"),
  ('chateau-domblans', 'File:Château de Domblans 006.JPG'),
]

def strip_tags(value):
    if not value:
        return ''
    value = html.unescape(value)
    value = re.sub(r'<[^>]+>', '', value)
    value = re.sub(r'\s+', ' ', value).strip()
    return value

def api(title):
    params={
      'action':'query','format':'json','titles':title,'prop':'imageinfo',
      'iiprop':'url|extmetadata','iiurlwidth':'2400'
    }
    url='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(params)
    req=urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        data=json.load(r)
    page=next(iter(data['query']['pages'].values()))
    if 'missing' in page:
        raise RuntimeError(f'missing {title}')
    return (page.get('imageinfo') or [])[0]

def download(url, path):
    req=urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as r:
        path.write_bytes(r.read())

def make_webp(raw_path, out_path):
    im = Image.open(raw_path)
    im = ImageOps.exif_transpose(im).convert('RGB')
    target_ratio = 16/9
    w,h=im.size
    current=w/h
    if current > target_ratio:
        new_w=int(h*target_ratio)
        left=(w-new_w)//2
        im=im.crop((left,0,left+new_w,h))
    elif current < target_ratio:
        new_h=int(w/target_ratio)
        top=(h-new_h)//2
        im=im.crop((0,top,w,top+new_h))
    im=im.resize((1600,900), Image.Resampling.LANCZOS)
    im.save(out_path, 'WEBP', quality=82, method=6)

manifest=[]
for slug,title in FILES:
    ii=api(title)
    meta=ii.get('extmetadata') or {}
    url=ii.get('thumburl') or ii.get('url')
    ext = '.png' if title.lower().endswith('.svg') else Path(urllib.parse.urlparse(url).path).suffix or '.jpg'
    raw = RAW / f'{slug}{ext}'
    out = OUT / f'{slug}.webp'
    download(url, raw)
    make_webp(raw, out)
    manifest.append({
      'slug': slug,
      'file': str(out),
      'commonsTitle': title,
      'commonsPage': 'https://commons.wikimedia.org/wiki/' + title.replace(' ', '_'),
      'sourceUrl': ii.get('url'),
      'thumbUrl': url,
      'licenseShort': strip_tags(meta.get('LicenseShortName',{}).get('value')),
      'licenseUrl': meta.get('LicenseUrl',{}).get('value'),
      'artist': strip_tags(meta.get('Artist',{}).get('value')),
      'credit': strip_tags(meta.get('Credit',{}).get('value')),
      'date': strip_tags(meta.get('DateTimeOriginal',{}).get('value') or meta.get('DateTime',{}).get('value')),
      'objectName': strip_tags(meta.get('ObjectName',{}).get('value')),
      'width': 1600,
      'height': 900,
    })
    print(slug, '->', out, manifest[-1]['licenseShort'], manifest[-1]['artist'][:80])
Path('tmp/luxury-real-estate-2026/image_manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
