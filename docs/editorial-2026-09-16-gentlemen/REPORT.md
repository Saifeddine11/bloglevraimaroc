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
| EN | The Gentlemen Season 3 in Morocco: filming reaches Rabat and Erfoud | [/en/articles/the-gentlemen-season-3-morocco-rabat-erfoud](https://levraimaroc.com/en/articles/the-gentlemen-season-3-morocco-rabat-erfoud) | 833 |
| ES | The Gentlemen temporada 3 en Marruecos: rodaje en Rabat y Erfoud | [/es/articulos/the-gentlemen-temporada-3-marruecos-rabat-erfoud](https://levraimaroc.com/es/articulos/the-gentlemen-temporada-3-marruecos-rabat-erfoud) | 910 |
| NL | The Gentlemen seizoen 3 in Marokko: opnames in Rabat en Erfoud | [/nl/artikelen/the-gentlemen-seizoen-3-marokko-rabat-erfoud](https://levraimaroc.com/nl/artikelen/the-gentlemen-seizoen-3-marokko-rabat-erfoud) | 801 |

### 2. The Gentlemen Rabat filming — city-specific news

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen saison 3 à Rabat : ce que l'on sait du tournage | [/articles/the-gentlemen-saison-3-rabat-tournage](https://levraimaroc.com/articles/the-gentlemen-saison-3-rabat-tournage) | 856 |
| EN | The Gentlemen Season 3 in Rabat: what we know about filming | [/en/articles/the-gentlemen-season-3-rabat-filming](https://levraimaroc.com/en/articles/the-gentlemen-season-3-rabat-filming) | 753 |
| ES | The Gentlemen temporada 3 en Rabat: lo que se sabe del rodaje | [/es/articulos/the-gentlemen-temporada-3-rodaje-rabat](https://levraimaroc.com/es/articulos/the-gentlemen-temporada-3-rodaje-rabat) | 809 |
| NL | The Gentlemen seizoen 3 in Rabat: wat we over de opnames weten | [/nl/artikelen/the-gentlemen-seizoen-3-opnames-rabat](https://levraimaroc.com/nl/artikelen/the-gentlemen-seizoen-3-opnames-rabat) | 714 |

### 3. The Gentlemen Erfoud filming — south-east geography and logistics

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen saison 3 à Erfoud : la piste présaharienne du tournage | [/articles/the-gentlemen-saison-3-erfoud-tournage](https://levraimaroc.com/articles/the-gentlemen-saison-3-erfoud-tournage) | 875 |
| EN | The Gentlemen Season 3 in Erfoud: the pre-Saharan filming trail | [/en/articles/the-gentlemen-season-3-erfoud-filming](https://levraimaroc.com/en/articles/the-gentlemen-season-3-erfoud-filming) | 774 |
| ES | The Gentlemen temporada 3 en Erfoud: la pista presahariana | [/es/articulos/the-gentlemen-temporada-3-rodaje-erfoud](https://levraimaroc.com/es/articulos/the-gentlemen-temporada-3-rodaje-erfoud) | 827 |
| NL | The Gentlemen seizoen 3 in Erfoud: het pre-Saharaanse spoor | [/nl/artikelen/the-gentlemen-seizoen-3-opnames-erfoud](https://levraimaroc.com/nl/artikelen/the-gentlemen-seizoen-3-opnames-erfoud) | 725 |

### 4. The Gentlemen Morocco filming locations — confirmation map

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Lieux de tournage de The Gentlemen saison 3 au Maroc : confirmé, rapporté ou inconnu | [/articles/lieux-tournage-the-gentlemen-saison-3-maroc](https://levraimaroc.com/articles/lieux-tournage-the-gentlemen-saison-3-maroc) | 856 |
| EN | The Gentlemen Season 3 Morocco filming locations: confirmed, reported or unknown | [/en/articles/the-gentlemen-season-3-morocco-filming-locations](https://levraimaroc.com/en/articles/the-gentlemen-season-3-morocco-filming-locations) | 741 |
| ES | Localizaciones de The Gentlemen temporada 3 en Marruecos: confirmado o no | [/es/articulos/localizaciones-rodaje-the-gentlemen-temporada-3-marruecos](https://levraimaroc.com/es/articulos/localizaciones-rodaje-the-gentlemen-temporada-3-marruecos) | 807 |
| NL | Opnamelocaties van The Gentlemen seizoen 3 in Marokko: feit of gerucht | [/nl/artikelen/opnamelocaties-the-gentlemen-seizoen-3-marokko](https://levraimaroc.com/nl/artikelen/opnamelocaties-the-gentlemen-seizoen-3-marokko) | 713 |

### 5. International productions in Morocco — national film capacity

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Pourquoi les productions internationales choisissent le Maroc | [/articles/pourquoi-productions-internationales-choisissent-maroc](https://levraimaroc.com/articles/pourquoi-productions-internationales-choisissent-maroc) | 1020 |
| EN | Why international productions choose Morocco | [/en/articles/why-international-productions-choose-morocco](https://levraimaroc.com/en/articles/why-international-productions-choose-morocco) | 884 |
| ES | Por qué las producciones internacionales eligen Marruecos | [/es/articulos/por-que-producciones-internacionales-eligen-marruecos](https://levraimaroc.com/es/articulos/por-que-producciones-internacionales-eligen-marruecos) | 957 |
| NL | Waarom internationale producties voor Marokko kiezen | [/nl/artikelen/waarom-internationale-producties-marokko-kiezen](https://levraimaroc.com/nl/artikelen/waarom-internationale-producties-marokko-kiezen) | 842 |

### 6. Accrocar + The Gentlemen Morocco — first-party vehicle operation

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen au Maroc : Accrocar confirme sa collaboration avec Dune Films et Moonage Pictures | [/articles/accrocar-vehicules-luxe-the-gentlemen-maroc](https://levraimaroc.com/articles/accrocar-vehicules-luxe-the-gentlemen-maroc) | 994 |
| EN | The Gentlemen in Morocco: Accrocar confirms work with Dune Films and Moonage Pictures | [/en/articles/accrocar-luxury-vehicles-the-gentlemen-morocco](https://levraimaroc.com/en/articles/accrocar-luxury-vehicles-the-gentlemen-morocco) | 863 |
| ES | The Gentlemen en Marruecos: Accrocar confirma su colaboración con Dune Films y Moonage Pictures | [/es/articulos/accrocar-vehiculos-lujo-the-gentlemen-marruecos](https://levraimaroc.com/es/articulos/accrocar-vehiculos-lujo-the-gentlemen-marruecos) | 934 |
| NL | The Gentlemen in Marokko: Accrocar bevestigt samenwerking met Dune Films en Moonage Pictures | [/nl/artikelen/accrocar-luxe-voertuigen-the-gentlemen-marokko](https://levraimaroc.com/nl/artikelen/accrocar-luxe-voertuigen-the-gentlemen-marokko) | 825 |

### 7. Film-production car logistics Morocco — behind the scenes

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Dans les coulisses de The Gentlemen : comment Accrocar a géré les voitures de luxe au Maroc | [/articles/coulisses-logistique-automobile-the-gentlemen-maroc](https://levraimaroc.com/articles/coulisses-logistique-automobile-the-gentlemen-maroc) | 1002 |
| EN | Behind the scenes of The Gentlemen: how Accrocar handled the luxury cars in Morocco | [/en/articles/behind-the-scenes-car-logistics-the-gentlemen-morocco](https://levraimaroc.com/en/articles/behind-the-scenes-car-logistics-the-gentlemen-morocco) | 883 |
| ES | Entre bastidores de The Gentlemen: cómo Accrocar gestionó los coches de lujo en Marruecos | [/es/articulos/bastidores-logistica-automovil-the-gentlemen-marruecos](https://levraimaroc.com/es/articulos/bastidores-logistica-automovil-the-gentlemen-marruecos) | 948 |
| NL | Achter de schermen van The Gentlemen: hoe Accrocar de luxeauto’s in Marokko heeft beheerd | [/nl/artikelen/achter-de-schermen-autologistiek-the-gentlemen-marokko](https://levraimaroc.com/nl/artikelen/achter-de-schermen-autologistiek-the-gentlemen-marokko) | 829 |

### 8. The Gentlemen luxury cars Morocco — documented models

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Rolls-Royce Cullinan et Bentley Bentayga : les voitures fournies pour The Gentlemen au Maroc | [/articles/rolls-royce-bentley-the-gentlemen-maroc](https://levraimaroc.com/articles/rolls-royce-bentley-the-gentlemen-maroc) | 1031 |
| EN | Rolls-Royce Cullinan and Bentley Bentayga: cars supplied for The Gentlemen in Morocco | [/en/articles/rolls-royce-bentley-the-gentlemen-morocco](https://levraimaroc.com/en/articles/rolls-royce-bentley-the-gentlemen-morocco) | 927 |
| ES | Rolls-Royce Cullinan y Bentley Bentayga: los coches suministrados para The Gentlemen en Marruecos | [/es/articulos/rolls-royce-bentley-the-gentlemen-marruecos](https://levraimaroc.com/es/articulos/rolls-royce-bentley-the-gentlemen-marruecos) | 1021 |
| NL | Rolls-Royce Cullinan en Bentley Bentayga: de auto’s geleverd voor The Gentlemen in Marokko | [/nl/artikelen/rolls-royce-bentley-the-gentlemen-marokko](https://levraimaroc.com/nl/artikelen/rolls-royce-bentley-the-gentlemen-marokko) | 897 |

### 9. Dune Films, Moonage Pictures and Accrocar — entity explainer

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | Dune Films, Moonage Pictures et Accrocar : les entreprises autour de The Gentlemen au Maroc | [/articles/accrocar-mobilite-luxe-productions-internationales](https://levraimaroc.com/articles/accrocar-mobilite-luxe-productions-internationales) | 1305 |
| EN | Dune Films, Moonage Pictures and Accrocar: the companies around The Gentlemen in Morocco | [/en/articles/accrocar-luxury-mobility-film-productions-morocco](https://levraimaroc.com/en/articles/accrocar-luxury-mobility-film-productions-morocco) | 1182 |
| ES | Dune Films, Moonage Pictures y Accrocar: las empresas en torno a The Gentlemen en Marruecos | [/es/articulos/accrocar-movilidad-lujo-producciones-internacionales](https://levraimaroc.com/es/articulos/accrocar-movilidad-lujo-producciones-internacionales) | 1267 |
| NL | Dune Films, Moonage Pictures en Accrocar: de bedrijven rond The Gentlemen in Marokko | [/nl/artikelen/accrocar-luxe-mobiliteit-internationale-producties](https://levraimaroc.com/nl/artikelen/accrocar-luxe-mobiliteit-internationale-producties) | 1094 |

### 10. Morocco film-production ecosystem — Moroccan know-how

| Locale | Title | Final URL | Body words |
|---|---|---|---:|
| FR | The Gentlemen au Maroc : derrière les caméras, tout un écosystème marocain accompagne les grandes productions | [/articles/ecosysteme-marocain-productions-internationales](https://levraimaroc.com/articles/ecosysteme-marocain-productions-internationales) | 1081 |
| EN | The Gentlemen in Morocco: behind the cameras, a Moroccan ecosystem supports major productions | [/en/articles/morocco-film-production-ecosystem](https://levraimaroc.com/en/articles/morocco-film-production-ecosystem) | 977 |
| ES | The Gentlemen en Marruecos: detrás de las cámaras, un ecosistema marroquí acompaña las grandes producciones | [/es/articulos/ecosistema-marroqui-producciones-internacionales](https://levraimaroc.com/es/articulos/ecosistema-marroqui-producciones-internacionales) | 1047 |
| NL | The Gentlemen in Marokko: achter de camera’s ondersteunt een Marokkaans ecosysteem grote producties | [/nl/artikelen/marokkaans-ecosysteem-internationale-producties](https://levraimaroc.com/nl/artikelen/marokkaans-ecosysteem-internationale-producties) | 930 |

## 8. Sources used

- Variety (24 August 2026) and Netflix Tudum for Season 3 and Guy Ritchie.
- Accrocar public blog (16 September 2026) for Accrocar’s own claims about Dune Films, MOONAGE PICTURES (THE GENTLEMEN) LIMITED, vehicles and the absence of a Netflix contract.
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

Published copy uses **Moonage Pictures** for the production banner (Variety; ITV Studios majority stake, 1 April 2025) and **MOONAGE PICTURES (THE GENTLEMEN) LIMITED** (Companies House 14115797) for the legal entity Accrocar names as a counterpart. Accrocar’s public blog of 16 September 2026 first-party confirms direct collaboration with both that entity and [Dune Films](https://dunefilms.com/). Accrocar states it has no direct Netflix contract. Accrocar is never called an official Netflix partner. “Montage Pictures” is not used.

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

- Netflix has not published a Morocco location list in the official sources reviewed. The Netflix newsroom URL previously cited now returns 404; Season 3 is sourced from Variety (24 August 2026) and Netflix Tudum (10 September 2026).
- Accrocar’s named relationship with MOONAGE PICTURES (THE GENTLEMEN) LIMITED is first-party Accrocar reporting, independently corroborated only as to the company’s existence at Companies House (14115797), not by a Moonage or Netflix statement.
- Dune Films’ official site does not independently confirm its role on The Gentlemen; Accrocar’s direct collaboration with Dune Films is first-party Accrocar reporting.
- Erfoud has been reported by Le360, but no exact site or local shoot date is public.
- No vehicle’s appearance in the finished series is established.
- Additional vehicles visible in unpublished first-party files were not named as supplied models.
- Fees, call sheets, hotels and the internal contractual hierarchy remain unpublished.

## Explicit publication-safety confirmation

- No filming location was invented.
- No vehicle was invented as supplied beyond the Cullinan and Bentayga Accrocar names.
- No on-screen appearance was invented.
- No Netflix–Accrocar partnership was invented.
- “Montage Pictures” was not used for Moonage.
- The exact relevant Moonage legal entity was verified at Companies House before publication.
- Dune Films was cited and linked via https://dunefilms.com/ where relevant.
- Accrocar’s public blog was treated as a primary source for Accrocar’s own claims.
- Original `/coulisse gentlemen/` assets were not modified.
- No confidential production information was published.
- Existing unrelated website functionality was preserved.
