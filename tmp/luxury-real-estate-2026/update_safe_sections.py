from pathlib import Path
p=Path('src/i18n/pages.ts')
s=p.read_text()
insertions = [
("      {\n        heading: 'Ce que S.A.F.E promet et ce que S.A.F.E ne promet pas',",
"""      {
        heading: 'S.A.F.E et immobilier de prestige',
        body: [
          "Dans les transactions de prestige, un prix record ne suffit pas à qualifier un dossier. S.A.F.E permet d'organiser les questions autour du titre, de la confidentialité, du périmètre exact de surface, des travaux, de l'usage autorisé, de la liquidité et de la cohérence du prix avec de vrais comparables.",
          "Cette lecture reste méthodologique : elle ne transforme pas une villa, un hôtel particulier, un château ou un actif rare en placement garanti. Elle aide surtout à distinguer ce qui est documenté, ce qui relève d'une source de presse, ce qui doit être confirmé par les professionnels compétents et ce qui peut changer le coût total de détention.",
        ],
        bullets: [
          "Vérifier si le prix cité provient d'un acte, d'une base spécialisée, d'un agent ou d'une source de presse.",
          "Séparer surface habitable, terrain, annexes, mobilier, droits attachés et travaux futurs.",
          "Lire le prestige avec la liquidité : un actif rare peut être puissant et difficile à revendre.",
          "Documenter les risques juridiques, techniques, fiscaux et patrimoniaux avant toute décision.",
        ],
      },
"""),
("      {\n        heading: 'What S.A.F.E Promises and What It Does Not Promise',",
"""      {
        heading: 'S.A.F.E and Trophy Real Estate',
        body: [
          'In trophy transactions, a record price is not enough to qualify a file. S.A.F.E helps organize questions around title, privacy, exact surface perimeter, works, authorized use, liquidity and price coherence against real comparables.',
          'This reading remains methodological: it does not turn a villa, townhouse, château or rare asset into a guaranteed investment. It mainly separates what is documented, what comes from press reporting, what must be confirmed by qualified professionals and what can change the total cost of ownership.',
        ],
        bullets: [
          'Check whether the quoted price comes from a deed, specialist database, agent or press source.',
          'Separate living area, land, annexes, furniture, attached rights and future works.',
          'Read prestige with liquidity: a rare asset can be powerful and hard to resell.',
          'Document legal, technical, tax and heritage risks before any decision.',
        ],
      },
"""),
("      {\n        heading: 'Qué promete S.A.F.E y qué no promete',",
"""      {
        heading: 'S.A.F.E e inmobiliario de prestigio',
        body: [
          'En las transacciones de prestigio, un precio récord no basta para calificar un expediente. S.A.F.E ayuda a ordenar preguntas sobre título, confidencialidad, perímetro exacto de superficie, obras, uso autorizado, liquidez y coherencia del precio frente a comparables reales.',
          'Esta lectura sigue siendo metodológica: no convierte una villa, un hôtel particulier, un château o un activo raro en inversión garantizada. Sirve sobre todo para separar lo documentado, lo procedente de prensa, lo que debe confirmar un profesional cualificado y lo que puede cambiar el coste total de tenencia.',
        ],
        bullets: [
          'Comprobar si el precio citado procede de una escritura, una base especializada, un agente o una fuente de prensa.',
          'Separar superficie habitable, terreno, anexos, mobiliario, derechos vinculados y obras futuras.',
          'Leer el prestigio con la liquidez: un activo raro puede ser poderoso y difícil de revender.',
          'Documentar riesgos jurídicos, técnicos, fiscales y patrimoniales antes de decidir.',
        ],
      },
"""),
("      {\n        heading: 'Wat S.A.F.E belooft en niet belooft',",
"""      {
        heading: 'S.A.F.E en prestigieus vastgoed',
        body: [
          'Bij prestigetransacties volstaat een recordprijs niet om een dossier te kwalificeren. S.A.F.E helpt vragen ordenen rond titel, privacy, exacte oppervlakteafbakening, werken, toegestaan gebruik, liquiditeit en prijscoherentie tegenover echte vergelijkingen.',
          'Deze lezing blijft methodologisch: zij maakt van een villa, hôtel particulier, kasteel of zeldzaam actief geen gegarandeerde belegging. Ze scheidt vooral wat gedocumenteerd is, wat uit persberichtgeving komt, wat door gekwalificeerde professionals moet worden bevestigd en wat de totale bezitkost kan veranderen.',
        ],
        bullets: [
          'Controleer of de geciteerde prijs uit een akte, gespecialiseerde databank, makelaar of persbron komt.',
          'Scheid woonoppervlakte, grond, bijgebouwen, meubels, gekoppelde rechten en toekomstige werken.',
          'Lees prestige samen met liquiditeit: een zeldzaam actief kan sterk en moeilijk verkoopbaar zijn.',
          'Documenteer juridische, technische, fiscale en erfgoedrisico’s vóór elke beslissing.',
        ],
      },
"""),
]
for marker, insert in insertions:
    if insert.strip() in s:
        continue
    if marker not in s:
        raise SystemExit(f'marker not found: {marker[:80]}')
    s=s.replace(marker, insert+marker, 1)
p.write_text(s)
