# Le Vrai Maroc - GSC Action Map

Audit date: 2026-08-04

This map is based on the query clusters supplied in the brief and the current repository state. The site currently serves four locales: French (`fr`), English (`en`), Spanish (`es`) and Dutch (`nl`). Editorial articles are generated from `src/content/articles`; article routes are localized as `/articles/`, `/en/articles/`, `/es/articulos/` and `/nl/artikelen/`. Static localized pages are driven by `src/i18n/routes.ts` and `src/components/LocalizedPage.astro`.

| Query cluster | Current ranking page | Existing URL | Search intent | Current language | Current weakness | Recommended action |
|---|---|---|---|---|---|---|
| `marruecos economia 2026`, `economia de marruecos 2026` | `crecimiento-marruecos-2026-hcp-demanda-interna` | `/es/articulos/crecimiento-marruecos-2026-hcp-demanda-interna` | Full Spain/LatAm searcher wants a broad Morocco economy 2026 pillar | Spanish | Thin article, HCP-only angle, title does not contain `economía de Marruecos 2026` | Create Spanish pillar and link supporting HCP article |
| `bbp marokko 2026`, `economie marokko 2026` | `groei-marokko-2026-hcp-binnenlandse-vraag` | `/nl/artikelen/groei-marokko-2026-hcp-binnenlandse-vraag` | Broad Dutch macro overview with GDP, inflation and investment | Dutch | Thin article, no `bbp Marokko 2026` title alignment | Create Dutch pillar and link supporting HCP article |
| `Morocco economy 2026`, `Morocco GDP 2026` | `morocco-growth-2026-hcp-domestic-demand` | `/en/articles/morocco-growth-2026-hcp-domestic-demand` | Broad English macro overview | English | Thin article, HCP-only angle | Create English pillar and link supporting HCP article |
| `économie Maroc 2026`, `croissance Maroc 2026` | `croissance-maroc-2026-hcp-demande-interieure` | `/articles/croissance-maroc-2026-hcp-demande-interieure` | Broad French macro overview | French | Thin article, no full sector coverage | Create French pillar and link supporting HCP article |
| `how many canadair does algeria have`, `combien de Canadair en Algérie` | `incendies-algerie-2026-canadair-maroc` and localized variants | `/articles/incendies-algerie-2026-canadair-maroc` | Direct fleet count and aircraft-type distinction | FR/EN/ES/NL | Existing page is wildfire-news/cooperation intent, not fleet-count intent | Create a separate Canadair fleet pillar, then link from wildfire article |
| `Canadair marocain en Algérie`, `Maroc Canadair Algérie` | `incendies-algerie-2026-canadair-maroc`; draft `canadair-marocains-algerie-viva-algerie` | `/articles/incendies-algerie-2026-canadair-maroc` | Verify reported Morocco-Algeria Canadair claim | French | Potential cannibalization with draft Viva Algérie page | Consolidate into one central verification page; avoid duplicated certainty |
| `safeimmobilier`, `SAFE immobilier`, `méthode SAFE immobilier`, `grille SAFE immobilier` | Static SAFE cluster pages | `/safe-certification-immobiliere/`, `/methode-safe-immobilier/`, `/grille-safe-immobilier/` | Definition, method and grid | French plus localized static pages | Current SAFE work exists but needs ongoing QA for wording and route parity | Improve existing pages only; do not create thin duplicates |
| `document promoteur immobilier Maroc` | `documents-promoteur-immobilier-maroc` and localized variants | `/articles/documents-promoteur-immobilier-maroc` | Practical buyer checklist | FR/EN/ES/NL | French is reasonable; Dutch/Spanish/English are much thinner | Expand existing localized pages; add caution and source section |
| `investir à Marrakech`, `prix immobilier Marrakech 2026`, `location courte durée Marrakech` | Multiple Marrakech property articles | `/articles/investir-marrakech-2026`, `/articles/prix-immobilier-marrakech-2026`, `/articles/location-courte-duree-marrakech` | Investment, prices, rental strategy | FR/EN/ES/NL | Some locale translations are thin and several pages overlap around prices/market outlook | Strengthen existing cluster and internal links; avoid new duplicates |
| `programme Timitar`, `festival Timitar Agadir 2026` | `festival-timitar-agadir-2026-programme` and localized variants | `/articles/festival-timitar-agadir-2026-programme` | Dates/program/venues | FR/EN/ES/NL | Very thin; must not invent line-up | Expand existing page using official organizer info only |
| `Morocco heatwave July 2026`, `weather in Morocco July 2026` | `vague-chaleur-maroc-juillet-2026-voyage`, August heatwave articles | `/articles/vague-chaleur-maroc-juillet-2026-voyage` | Archived alert plus evergreen travel weather | FR/EN/ES/NL | July archive is thin; August page is current-news intent | Create or strengthen evergreen July/weather pages; keep alerts dated |
| `bosbranden Marokko 2026` | Morocco wildfire risk article | `/nl/artikelen/bosbranden-marokko-provincies-extreem-risico-2026` | Wildfire risk and prevention | Dutch | Good intent match; keep dated and linked from heatwave pages | Update existing page when ANEF/DGM data changes |

## Immediate Implementation Slice

Implemented first because it matches the strongest supplied opportunity and avoids cannibalization:

- New economy pillar in French, English, Spanish and Dutch.
- New source-verified local images for the economy cluster.
- The older HCP growth article remains as a supporting freshness article.

Deferred intentionally:

- Algeria Canadair fleet pillar: needs a dedicated source reconciliation pass because fleet counts can confuse ordered, delivered and operational aircraft.
- SAFE cluster expansion: current static SAFE work is already dirty in the tree; it should be handled as a separate controlled pass.
- Timitar/weather/property documents: existing pages are present and should be expanded rather than duplicated.
