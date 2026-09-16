# The Gentlemen Season 3 Morocco cluster — implementation report

Completed 16 September 2026.

## 1. Repository architecture discovered

Astro 7 static site with a Zod-backed content collection in `src/content/articles`, Markdown articles, locale-specific dynamic article routes, shared `ArticleLayout`/`BaseLayout`, Tailwind typography, Astro sitemap integration and an Astro RSS endpoint. The existing layout owns canonical, hreflang, Open Graph, Twitter, Article/NewsArticle, ImageObject, BreadcrumbList and visible-FAQ extraction. No layout redesign was required.

## 2. Existing locales discovered

French (default), English, Spanish and Dutch. Route roots are `/articles/`, `/en/articles/`, `/es/articulos/` and `/nl/artikelen/`.

## 3–7. Titles, URLs, search intent, word counts and date

All 40 pages use publication and update date **2026-09-16**. Body counts below exclude frontmatter.

### 1. The Gentlemen Season 3 Morocco — authoritative breaking-news hub

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen saison 3 au Maroc : le tournage passe par Rabat et Erfoud | [/articles/the-gentlemen-saison-3-maroc-rabat-erfoud](https://levraimaroc.com/articles/the-gentlemen-saison-3-maroc-rabat-erfoud) | 955 |
| EN | The Gentlemen Season 3 in Morocco: filming reaches Rabat and Erfoud | [/en/articles/the-gentlemen-season-3-morocco-rabat-erfoud](https://levraimaroc.com/en/articles/the-gentlemen-season-3-morocco-rabat-erfoud) | 825 |
| ES | The Gentlemen temporada 3 en Marruecos: rodaje en Rabat y Erfoud | [/es/articulos/the-gentlemen-temporada-3-marruecos-rabat-erfoud](https://levraimaroc.com/es/articulos/the-gentlemen-temporada-3-marruecos-rabat-erfoud) | 901 |
| NL | The Gentlemen seizoen 3 in Marokko: opnames in Rabat en Erfoud | [/nl/artikelen/the-gentlemen-seizoen-3-marokko-rabat-erfoud](https://levraimaroc.com/nl/artikelen/the-gentlemen-seizoen-3-marokko-rabat-erfoud) | 787 |

### 2. The Gentlemen Rabat filming — city-specific news

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen saison 3 à Rabat : ce que l'on sait du tournage | [/articles/the-gentlemen-saison-3-rabat-tournage](https://levraimaroc.com/articles/the-gentlemen-saison-3-rabat-tournage) | 851 |
| EN | The Gentlemen Season 3 in Rabat: what we know about filming | [/en/articles/the-gentlemen-season-3-rabat-filming](https://levraimaroc.com/en/articles/the-gentlemen-season-3-rabat-filming) | 740 |
| ES | The Gentlemen temporada 3 en Rabat: lo que se sabe del rodaje | [/es/articulos/the-gentlemen-temporada-3-rodaje-rabat](https://levraimaroc.com/es/articulos/the-gentlemen-temporada-3-rodaje-rabat) | 796 |
| NL | The Gentlemen seizoen 3 in Rabat: wat we over de opnames weten | [/nl/artikelen/the-gentlemen-seizoen-3-opnames-rabat](https://levraimaroc.com/nl/artikelen/the-gentlemen-seizoen-3-opnames-rabat) | 699 |

### 3. The Gentlemen Erfoud filming — south-east geography and logistics

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen saison 3 à Erfoud : la piste présaharienne du tournage | [/articles/the-gentlemen-saison-3-erfoud-tournage](https://levraimaroc.com/articles/the-gentlemen-saison-3-erfoud-tournage) | 870 |
| EN | The Gentlemen Season 3 in Erfoud: the pre-Saharan filming trail | [/en/articles/the-gentlemen-season-3-erfoud-filming](https://levraimaroc.com/en/articles/the-gentlemen-season-3-erfoud-filming) | 761 |
| ES | The Gentlemen temporada 3 en Erfoud: la pista presahariana | [/es/articulos/the-gentlemen-temporada-3-rodaje-erfoud](https://levraimaroc.com/es/articulos/the-gentlemen-temporada-3-rodaje-erfoud) | 814 |
| NL | The Gentlemen seizoen 3 in Erfoud: het pre-Saharaanse spoor | [/nl/artikelen/the-gentlemen-seizoen-3-opnames-erfoud](https://levraimaroc.com/nl/artikelen/the-gentlemen-seizoen-3-opnames-erfoud) | 710 |

### 4. The Gentlemen Morocco filming locations — confirmation map

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Lieux de tournage de The Gentlemen saison 3 au Maroc : confirmé, rapporté ou inconnu | [/articles/lieux-tournage-the-gentlemen-saison-3-maroc](https://levraimaroc.com/articles/lieux-tournage-the-gentlemen-saison-3-maroc) | 851 |
| EN | The Gentlemen Season 3 Morocco filming locations: confirmed, reported or unknown | [/en/articles/the-gentlemen-season-3-morocco-filming-locations](https://levraimaroc.com/en/articles/the-gentlemen-season-3-morocco-filming-locations) | 728 |
| ES | Localizaciones de The Gentlemen temporada 3 en Marruecos: confirmado o no | [/es/articulos/localizaciones-rodaje-the-gentlemen-temporada-3-marruecos](https://levraimaroc.com/es/articulos/localizaciones-rodaje-the-gentlemen-temporada-3-marruecos) | 794 |
| NL | Opnamelocaties van The Gentlemen seizoen 3 in Marokko: feit of gerucht | [/nl/artikelen/opnamelocaties-the-gentlemen-seizoen-3-marokko](https://levraimaroc.com/nl/artikelen/opnamelocaties-the-gentlemen-seizoen-3-marokko) | 698 |

### 5. International productions in Morocco — national film capacity

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Pourquoi les productions internationales choisissent le Maroc | [/articles/pourquoi-productions-internationales-choisissent-maroc](https://levraimaroc.com/articles/pourquoi-productions-internationales-choisissent-maroc) | 920 |
| EN | Why international productions choose Morocco | [/en/articles/why-international-productions-choose-morocco](https://levraimaroc.com/en/articles/why-international-productions-choose-morocco) | 787 |
| ES | Por qué las producciones internacionales eligen Marruecos | [/es/articulos/por-que-producciones-internacionales-eligen-marruecos](https://levraimaroc.com/es/articulos/por-que-producciones-internacionales-eligen-marruecos) | 861 |
| NL | Waarom internationale producties voor Marokko kiezen | [/nl/artikelen/waarom-internationale-producties-marokko-kiezen](https://levraimaroc.com/nl/artikelen/waarom-internationale-producties-marokko-kiezen) | 746 |

### 6. Accrocar + The Gentlemen Morocco — first-party vehicle operation

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Accrocar et The Gentlemen au Maroc : l'opération véhicules de luxe documentée | [/articles/accrocar-vehicules-luxe-the-gentlemen-maroc](https://levraimaroc.com/articles/accrocar-vehicules-luxe-the-gentlemen-maroc) | 997 |
| EN | Accrocar and The Gentlemen in Morocco: the documented luxury-vehicle operation | [/en/articles/accrocar-luxury-vehicles-the-gentlemen-morocco](https://levraimaroc.com/en/articles/accrocar-luxury-vehicles-the-gentlemen-morocco) | 848 |
| ES | Accrocar y The Gentlemen en Marruecos: operación de vehículos documentada | [/es/articulos/accrocar-vehiculos-lujo-the-gentlemen-marruecos](https://levraimaroc.com/es/articulos/accrocar-vehiculos-lujo-the-gentlemen-marruecos) | 925 |
| NL | Accrocar en The Gentlemen in Marokko: de gedocumenteerde voertuigoperatie | [/nl/artikelen/accrocar-luxe-voertuigen-the-gentlemen-marokko](https://levraimaroc.com/nl/artikelen/accrocar-luxe-voertuigen-the-gentlemen-marokko) | 804 |

### 7. Film-production car logistics Morocco — behind the scenes

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Dans les coulisses de la logistique automobile de The Gentlemen au Maroc | [/articles/coulisses-logistique-automobile-the-gentlemen-maroc](https://levraimaroc.com/articles/coulisses-logistique-automobile-the-gentlemen-maroc) | 936 |
| EN | Behind the car logistics for The Gentlemen in Morocco | [/en/articles/behind-the-scenes-car-logistics-the-gentlemen-morocco](https://levraimaroc.com/en/articles/behind-the-scenes-car-logistics-the-gentlemen-morocco) | 805 |
| ES | La logística de automóviles de The Gentlemen en Marruecos, entre bastidores | [/es/articulos/bastidores-logistica-automovil-the-gentlemen-marruecos](https://levraimaroc.com/es/articulos/bastidores-logistica-automovil-the-gentlemen-marruecos) | 870 |
| NL | Achter de autologistiek van The Gentlemen in Marokko | [/nl/artikelen/achter-de-schermen-autologistiek-the-gentlemen-marokko](https://levraimaroc.com/nl/artikelen/achter-de-schermen-autologistiek-the-gentlemen-marokko) | 749 |

### 8. The Gentlemen luxury cars Morocco — documented models

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Rolls-Royce et Bentley dans le dossier The Gentlemen au Maroc : ce que montrent les images | [/articles/rolls-royce-bentley-the-gentlemen-maroc](https://levraimaroc.com/articles/rolls-royce-bentley-the-gentlemen-maroc) | 969 |
| EN | Rolls-Royce and Bentley in the Morocco Gentlemen material: what the images show | [/en/articles/rolls-royce-bentley-the-gentlemen-morocco](https://levraimaroc.com/en/articles/rolls-royce-bentley-the-gentlemen-morocco) | 852 |
| ES | Rolls-Royce y Bentley en el material de The Gentlemen en Marruecos | [/es/articulos/rolls-royce-bentley-the-gentlemen-marruecos](https://levraimaroc.com/es/articulos/rolls-royce-bentley-the-gentlemen-marruecos) | 923 |
| NL | Rolls-Royce en Bentley in het Marokkaanse Gentlemen-materiaal | [/nl/artikelen/rolls-royce-bentley-the-gentlemen-marokko](https://levraimaroc.com/nl/artikelen/rolls-royce-bentley-the-gentlemen-marokko) | 803 |

### 9. Accrocar luxury mobility Morocco — business case study

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Accrocar, de la location de luxe à la mobilité pour productions internationales | [/articles/accrocar-mobilite-luxe-productions-internationales](https://levraimaroc.com/articles/accrocar-mobilite-luxe-productions-internationales) | 941 |
| EN | Accrocar: from luxury rental to mobility for international productions | [/en/articles/accrocar-luxury-mobility-film-productions-morocco](https://levraimaroc.com/en/articles/accrocar-luxury-mobility-film-productions-morocco) | 820 |
| ES | Accrocar: del alquiler de lujo a la movilidad para producciones internacionales | [/es/articulos/accrocar-movilidad-lujo-producciones-internacionales](https://levraimaroc.com/es/articulos/accrocar-movilidad-lujo-producciones-internacionales) | 897 |
| NL | Accrocar: van luxeverhuur naar mobiliteit voor internationale producties | [/nl/artikelen/accrocar-luxe-mobiliteit-internationale-producties](https://levraimaroc.com/nl/artikelen/accrocar-luxe-mobiliteit-internationale-producties) | 761 |

### 10. Morocco film-production ecosystem — synthesis

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Du repérage au transport : l'écosystème marocain des productions internationales | [/articles/ecosysteme-marocain-productions-internationales](https://levraimaroc.com/articles/ecosysteme-marocain-productions-internationales) | 974 |
| EN | From scouting to transport: Morocco's international-production ecosystem | [/en/articles/morocco-film-production-ecosystem](https://levraimaroc.com/en/articles/morocco-film-production-ecosystem) | 848 |
| ES | De las localizaciones al transporte: el ecosistema de producción marroquí | [/es/articulos/ecosistema-marroqui-producciones-internacionales](https://levraimaroc.com/es/articulos/ecosistema-marroqui-producciones-internacionales) | 917 |
| NL | Van scouting tot vervoer: Marokko's ecosysteem voor internationale producties | [/nl/artikelen/marokkaans-ecosysteem-internationale-producties](https://levraimaroc.com/nl/artikelen/marokkaans-ecosysteem-internationale-producties) | 803 |

## 8. Sources used

- Netflix newsroom and Netflix Tudum for the official Season 3 renewal and Guy Ritchie.
- Le360, published 14 September 2026, for the reported 13 September Rabat start and Erfoud mention.
- UK Companies House for `MOONAGE PICTURES (THE GENTLEMEN) LIMITED`.
- Dune Films' official credits page for its established Morocco production work.
- Centre cinématographique marocain for the conditional support framework and production ecosystem.
- UNESCO for Rabat's urban heritage description.
- Accrocar's public site for its luxury-rental/VIP-service positioning and real fleet/service URLs.
- Nine owner-supplied first-party images for the vehicle-operation audit.

## 9. Official, public and first-party facts

Official: Season 3 exists and Guy Ritchie returns to direct. Publicly reported: Moroccan filming, Rabat and Erfoud. First-party: Accrocar's involvement, its relationship account, and supply of vehicles within its entrusted scope. Visually documented: a Rolls-Royce Cullinan and Bentley Bentayga in the supplied corpus. Unverified and therefore not asserted: exact sets, scenes, actor movements, screen appearances, contract chain, budgets and fees. Full matrix: [CLAIM-AUDIT.md](./CLAIM-AUDIT.md).

## 10. Production-company naming conclusion

The owner-supplied account says **“Montage Pictures.”** Public company records and series credits support **Moonage Pictures**, including the legal entity `Moonage Pictures (The Gentlemen) Limited`. No inspected file connects the two names. Published copy preserves and attributes the supplied wording, separately states the public name, and says the entities are not treated as interchangeable. Accrocar is never called an official Netflix partner and no direct Netflix contract is inferred.

## 11–13. First-party asset inventory, used assets and exclusions

Nine visual files plus `.DS_Store` were inspected. Five originals produced nine article-facing derivatives/variants; three external images produced the remaining heroes. Four first-party files were deliberately withheld because they exposed plates, people, hotel/location identifiers or a sensitive operational environment. Full per-file decision log: [ASSET-INVENTORY.md](./ASSET-INVENTORY.md).

## 14. External images downloaded

Three reusable originals were sourced from their Wikimedia Commons pages: Hassan Tower by Petar Milošević (CC BY-SA 4.0), Merzouga dunes by Joe deSousa (CC0), and Atlas Film Studios by Manuel Heinemann (public domain). All are explicitly captioned as contextual, not evidence of a The Gentlemen set.

## 15. IMAGES.md status

`IMAGES.md` now records all 12 derivatives, original source, creator/publisher, date, location/context, rights, caption, evidence limitation and privacy edits. It also lists the four first-party assets withheld from publication.

## 16. Accrocar links

Articles 6–10 contain normal editorial links to [https://accrocar.com/](https://accrocar.com/) with five varied, localized anchors. Sources also link to the public about, VIP service and verified Rolls-Royce Cullinan pages. No tracking parameters or invented fleet URLs were added.

## 17. Internal links

The prescribed hub-and-spoke relationships are implemented in every locale: article 1 links to 2–6; Rabat/Erfoud link to the hub and location guide; the Morocco authority article links to the hub/ecosystem; Accrocar articles cross-link by logistics, cars, profile and ecosystem intent. The validator resolved every article-body internal link against the static build.

## 18. Canonical and hreflang

All 40 canonicals resolve to their own localized route. Every page exposes FR, EN, ES, NL and x-default alternates; x-default points to the French member of the same translation group. Validation errors: **0**.

## 19. Structured data

All pages contain Article or NewsArticle data with nested ImageObject, author, publisher and dates; BreadcrumbList; and FAQPage generated from visible FAQ content. No schema relationship identifies Accrocar as producer, Netflix partner or `sameAs` target.

## 20. Sitemap and RSS

All 40 routes occur in `dist/sitemap-0.xml`. All 10 French entries occur in `dist/rss.xml`, matching the repository's French-only feed behavior.

## 21. Checks

- `npm run check`: pass, 0 errors (existing repository hints only).
- `npm run lint`: pass.
- `npm run format:check`: pass.
- `git diff --check`: pass.
- `npm run build`: pass, 577 static pages.
- Cluster validator: pass, 40 pages / 10 translation groups / 0 errors.
- Responsive browser QA: 1440×900 and 390×844 viewport checks passed with no horizontal overflow; hero proportions, H1 wrapping, FAQ controls and related cards were present. The only browser warning was the expected blocked/ignored analytics event on localhost.

## 22. Files created

- 40 localized Markdown articles.
- 12 optimized WebP derivatives in `public/images/articles/gentlemen-maroc/`.
- `scripts/build-gentlemen-assets.mjs`, `scripts/publish-gentlemen-cluster.mjs`, and `scripts/validate-gentlemen-cluster.mjs`.
- This report, `ASSET-INVENTORY.md`, `CLAIM-AUDIT.md`, and `validation.json`.

## 23. Files modified

- `IMAGES.md` received the complete image register.
- Astro's generated content cache/schema changed during the normal content sync/build. No unrelated source page was intentionally modified.

## 24. Unresolved factual uncertainty

- “Montage Pictures” versus publicly documented Moonage Pictures remains unresolved.
- Netflix has not published a Morocco location list in the official sources reviewed.
- Erfoud has been reported, but no exact site or local shoot date is public.
- No vehicle's appearance in the finished series is established.
- The direct contractual chain and any fees remain private/unknown.

## Explicit publication-safety confirmation

- No filming location was invented.
- No vehicle was invented.
- No Netflix partnership status was invented.
- No confidential production information was published.
- No existing unrelated page was intentionally modified.
- All original `/coulisse gentlemen/` assets remain untouched.
