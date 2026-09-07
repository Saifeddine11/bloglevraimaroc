# Rapport de livraison éditoriale — 7 septembre 2026

Production cible : **Le Vrai Maroc**.
Corpus livré : **20 sujets × 4 langues = 80 articles localisés**.

## Résultat

- 80 articles publiables intégrés dans `src/content/articles/`.
- 16 pages existantes mises à jour en conservant leurs URLs publiques : carburants, Sebta/Ceuta, canicule, tourisme.
- 64 nouvelles pages créées.
- 80 images WebP locales ajoutées dans `public/images/articles/editorial-2026-09-05/`.
- 20 couvertures uniques, 3 images internes par sujet, 80 chemins image uniques.
- Données SEO ajoutées ou renforcées : `metaTitle`, `metaDescription`, `articleType`, `updatedDate`, Open Graph, Twitter, dimensions image, `max-image-preview:large`.
- JSON-LD article, breadcrumb, FAQ et événements vérifiés sur les pages concernées.
- Pages météo mises à jour au bulletin du **lundi 7 septembre 2026**, avec `forecastValidUntil` au **8 septembre 2026 à 00:00 Africa/Casablanca**.

## Contrôles exécutés

- `npm run format:editorial` : OK.
- `npm run check` : OK, 0 erreur. Il reste 32 hints préexistants ou non bloquants Astro/TypeScript.
- `npm run build` : OK, **429 pages HTML** générées.
- `npm run lint` : OK.
- Audit visuel navigateur CUA : OK, 160 rendus contrôlés sur 80 routes, largeur mobile in-app ~491px et desktop 1280px, 0 issue. Safari WebDriver n’a pas été utilisé car “Allow remote automation” n’est pas activé dans Safari ; aucun contrôle tablette WebDriver n’est donc revendiqué.

Le validateur éditorial confirme :

- 80 articles et 20 sujets complets en `fr`, `en`, `es`, `nl`.
- 80 images WebP locales valides.
- 357 routes existantes préservées.
- 89 images préexistantes inchangées par hash SHA-256.
- Canonicals, hreflang, OG/Twitter, sitemap, RSS, FAQ schema, Event schema et liens internes vérifiés.

## Matrice des sujets

| # | Sujet FR | Routes |
|---|---|---|
| 1 | CNSS Maroc 2026 | `/articles/cnss-maroc-2026`, `/en/articles/cnss-morocco-2026`, `/es/articulos/cnss-marruecos-2026`, `/nl/artikelen/cnss-marokko-2026` |
| 2 | Rentrée scolaire Maroc 2026-2027 | `/articles/rentree-scolaire-maroc-2026-2027`, `/en/articles/morocco-school-calendar-2026-2027`, `/es/articulos/vuelta-colegio-marruecos-2026-2027`, `/nl/artikelen/schooljaar-marokko-2026-2027` |
| 3 | Élections Maroc 2026 | `/articles/elections-maroc-2026`, `/en/articles/morocco-elections-2026`, `/es/articulos/elecciones-marruecos-2026`, `/nl/artikelen/verkiezingen-marokko-2026` |
| 4 | Chômage Maroc 2026 | `/articles/chomage-maroc-2026`, `/en/articles/morocco-unemployment-2026`, `/es/articulos/desempleo-marruecos-2026`, `/nl/artikelen/werkloosheid-marokko-2026` |
| 5 | Prix carburants août 2026 | `/articles/prix-carburants-maroc-aout-2026-hausse`, `/en/articles/morocco-fuel-prices-august-2026-rise`, `/es/articulos/precios-carburantes-marruecos-agosto-2026-subida`, `/nl/artikelen/brandstofprijzen-marokko-augustus-2026-stijging` |
| 6 | Sebta/Ceuta et coopération Maroc-UE | `/articles/sebta-crise-migratoire-maroc-ue-2026`, `/en/articles/ceuta-migration-crisis-morocco-eu-2026`, `/es/articulos/ceuta-crisis-migratoria-marruecos-ue-2026`, `/nl/artikelen/ceuta-migratiecrisis-marokko-eu-2026` |
| 7 | Canicule Maroc | `/articles/canicule-maroc-aout-2026-villes-previsions`, `/en/articles/morocco-heatwave-august-2026-cities-forecast`, `/es/articulos/canicula-marruecos-agosto-2026-ciudades-prevision`, `/nl/artikelen/hittegolf-marokko-augustus-2026-steden-verwachting` |
| 8 | Tourisme Maroc 2030 / ONMT | `/articles/tourisme-maroc-2030-onmt-arrivees-2026`, `/en/articles/morocco-tourism-2030-onmt-arrivals-2026`, `/es/articulos/turismo-marruecos-2030-onmt-llegadas-2026`, `/nl/artikelen/toerisme-marokko-2030-onmt-aankomsten-2026` |
| 9 | Jeux méditerranéens 2026 | `/articles/jeux-mediterraneens-maroc-2026`, `/en/articles/morocco-mediterranean-games-2026`, `/es/articulos/marruecos-juegos-mediterraneos-2026`, `/nl/artikelen/marokko-mediterrane-spelen-2026` |
| 10 | Pouvoir d’achat et programmes | `/articles/programmes-electoraux-pouvoir-achat-2026`, `/en/articles/morocco-election-promises-purchasing-power-2026`, `/es/articulos/programas-electorales-poder-adquisitivo-marruecos-2026`, `/nl/artikelen/verkiezingsbeloften-koopkracht-marokko-2026` |
| 11 | Candidats élections Maroc 2026 | `/articles/candidats-elections-maroc-2026`, `/en/articles/morocco-election-candidates-2026`, `/es/articulos/candidatos-elecciones-marruecos-2026`, `/nl/artikelen/kandidaten-verkiezingen-marokko-2026` |
| 12 | Campagne électorale Maroc 2026 | `/articles/campagne-electorale-maroc-2026`, `/en/articles/morocco-election-campaign-2026`, `/es/articulos/campana-electoral-marruecos-2026`, `/nl/artikelen/verkiezingscampagne-marokko-2026` |
| 13 | SMIG 5000 DH | `/articles/smig-5000-dh-maroc-2026`, `/en/articles/morocco-minimum-wage-5000-dirhams-2026`, `/es/articulos/salario-minimo-marruecos-5000-dirhams-2026`, `/nl/artikelen/minimumloon-marokko-5000-dirham-2026` |
| 14 | Un million d’emplois | `/articles/million-emplois-maroc-programmes-2026`, `/en/articles/million-jobs-morocco-election-promises-2026`, `/es/articulos/millon-empleos-marruecos-programas-2026`, `/nl/artikelen/miljoen-banen-marokko-verkiezingsbeloften-2026` |
| 15 | Nouvelle hausse carburants | `/articles/carburants-maroc-nouvelle-hausse`, `/en/articles/morocco-fuel-prices-next-increase`, `/es/articulos/carburantes-marruecos-proxima-subida`, `/nl/artikelen/brandstof-marokko-volgende-prijsstijging` |
| 16 | Météo Maroc aujourd’hui | `/articles/meteo-maroc-aujourdhui`, `/en/articles/morocco-weather-today`, `/es/articulos/tiempo-marruecos-hoy`, `/nl/artikelen/weer-marokko-vandaag` |
| 17 | CNSS guide pratique | `/articles/cnss-maroc-guide-pratique`, `/en/articles/cnss-morocco-practical-guide`, `/es/articulos/cnss-marruecos-guia-practica`, `/nl/artikelen/cnss-marokko-praktische-gids` |
| 18 | Fado Festival Maroc 2026 | `/articles/fado-festival-maroc-2026`, `/en/articles/fado-festival-morocco-2026`, `/es/articulos/festival-fado-marruecos-2026`, `/nl/artikelen/fado-festival-marokko-2026` |
| 19 | Tanjazz 2026 | `/articles/tanjazz-2026`, `/en/articles/tanjazz-2026-tangier`, `/es/articulos/tanjazz-2026-tanger`, `/nl/artikelen/tanjazz-2026-tanger` |
| 20 | Comparatif programmes élections | `/articles/comparatif-programmes-elections-maroc-2026`, `/en/articles/compare-morocco-election-programmes-2026`, `/es/articulos/comparativa-programas-elecciones-marruecos-2026`, `/nl/artikelen/vergelijking-verkiezingsprogrammas-marokko-2026` |

## Fichiers de preuve

- `docs/editorial-2026-09-05/articles.json` : manifeste des 80 articles.
- `docs/editorial-2026-09-05/images.json` : manifeste des 80 images et licences.
- `docs/editorial-2026-09-05/validation.json` : résultat détaillé du contrôle éditorial.
- `docs/editorial-2026-09-05/visual-qa.json` : audit navigateur réel des 80 routes avec scroll progressif des images lazy-load.
- `IMAGES.md` : section “Corpus éditorial du 7 septembre 2026 — 80 images nouvelles”.

## Notes de livraison

- Les fichiers de recherche bruts et images originales restent dans `tmp/editorial-2026-09-05/`, dossier ignoré par Git.
- Les quatre articles immobiliers préexistants non suivis par Git ont été laissés hors périmètre de staging.
- Les deux pages événementielles ajoutent des schémas `MusicEvent` : Fado Festival à Rabat et Tanjazz à Tanger.
- Les pages météo affichent une validité explicite et un message d’expiration côté client après la fin du bulletin.
