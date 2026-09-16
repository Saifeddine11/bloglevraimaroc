import json
from pathlib import Path
m=json.loads(Path('tmp/luxury-real-estate-2026/image_manifest.json').read_text())
article_titles={
 'kylie-hidden-hills-map':'Kylie Jenner Hidden Hills sale',
 'the-holme-regents-park':'The Holme Regent’s Park sale',
 'rihanna-aspen-context':'Rihanna Aspen rental mansion sale',
 'saade-rue-andigne-context':'Rodolphe Saadé / Evan Spiegel Paris townhouse',
 'palais-venitien-cannes-context':'Palais Vénitien Cannes sale',
 'depardieu-cherche-midi-context':'Gérard Depardieu Hôtel de Chambon report',
 'pinault-saints-peres-context':'Pinault / Salma Hayek Saints-Pères duplex sale',
 'record-passage-visitation':'11B Passage de la Visitation Paris record',
 'chateau-ile-barbe':'Château de l’Île Barbe auction',
 'chateau-domblans':'Château de Domblans listing',
}
status={
 'kylie-hidden-hills-map':'Contextual locator map, not the sold property',
 'the-holme-regents-park':'Exact property image',
 'rihanna-aspen-context':'Contextual Aspen image, not the sold property',
 'saade-rue-andigne-context':'Contextual street image, not interior/private property proof',
 'palais-venitien-cannes-context':'Contextual Cannes image, not the Palais Vénitien',
 'depardieu-cherche-midi-context':'Contextual Cherche-Midi protected building image, not interior proof',
 'pinault-saints-peres-context':'Contextual Saints-Pères street image, not the private duplex',
 'record-passage-visitation':'Direct passage context, not necessarily the 11B house itself',
 'chateau-ile-barbe':'Exact historical property image',
 'chateau-domblans':'Exact property image',
}
alt={
 'kylie-hidden-hills-map':'Carte localisant Hidden Hills dans le comté de Los Angeles.',
 'the-holme-regents-park':'The Holme à Regent’s Park vu depuis sa pelouse.',
 'rihanna-aspen-context':'Vue d’Aspen Mountain utilisée comme contexte pour une vente de villa à Aspen.',
 'saade-rue-andigne-context':'Façades rue d’Andigné à Paris.',
 'palais-venitien-cannes-context':'Vue panoramique de Cannes.',
 'depardieu-cherche-midi-context':'Maison protégée rue du Cherche-Midi à Paris.',
 'pinault-saints-peres-context':'Rue des Saints-Pères à Paris.',
 'record-passage-visitation':'Passage de la Visitation à Paris VII.',
 'chateau-ile-barbe':'Estampe ancienne du château de l’Île Barbe à Lyon.',
 'chateau-domblans':'Château de Domblans dans le Jura.',
}
loc={
 'kylie-hidden-hills-map':'Hidden Hills, Los Angeles County, United States',
 'the-holme-regents-park':'Regent’s Park, London, United Kingdom',
 'rihanna-aspen-context':'Aspen, Colorado, United States',
 'saade-rue-andigne-context':'Rue d’Andigné, Paris 16e, France',
 'palais-venitien-cannes-context':'Cannes, France',
 'depardieu-cherche-midi-context':'Rue du Cherche-Midi, Paris 6e, France',
 'pinault-saints-peres-context':'Rue des Saints-Pères, Paris 6e, France',
 'record-passage-visitation':'Passage de la Visitation, Paris 7e, France',
 'chateau-ile-barbe':'Île Barbe, Lyon, France',
 'chateau-domblans':'Domblans, Jura, France',
}
section='''\n\n## Batch immobilier de luxe / transactions record — 2026-09-15\n\n| Article | Local file | Cover/Inline | Original page | Direct source | Property | Publisher | Photographer | Date | Location | License | Caption | Alt text | Status |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n'''
rows=[]
for it in m:
    slug=it['slug']
    license_text=it['licenseShort'] if not it.get('licenseUrl') else f"[{it['licenseShort']}]({it['licenseUrl']})"
    row=[
      article_titles[slug],
      f"`/{it['file']}`",
      'Cover',
      f"[{it['commonsTitle']}]({it['commonsPage']})",
      f"[Wikimedia upload]({it['sourceUrl']})",
      'Exact property' if 'Exact' in status[slug] else 'Contextual illustration',
      'Wikimedia Commons',
      it['artist'] or 'Unknown',
      it.get('date') or 'Not stated',
      loc[slug],
      license_text,
      status[slug],
      alt[slug],
      'Approved — legally reusable; caption discloses context where not exact',
    ]
    rows.append('| ' + ' | '.join(str(x).replace('|','/') for x in row) + ' |')
block=section+'\n'.join(rows)+'\n'
p=Path('IMAGES.md')
s=p.read_text()
start=s.find('## Batch immobilier de luxe / transactions record — 2026-09-15')
if start!=-1:
    s=s[:start].rstrip()+block
else:
    s=s.rstrip()+block
p.write_text(s)
