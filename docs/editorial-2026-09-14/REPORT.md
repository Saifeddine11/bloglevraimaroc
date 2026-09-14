# Rapport éditorial editorial-2026-09-14

Lot préparé le 14 septembre 2026 pour Le Vrai Maroc.

## Production

- 28 nouveaux articles localisés créés : 7 intentions × 4 langues.
- 20 articles localisés existants mis à jour sans changement d’URL : Tanjazz, élections, rentrée scolaire, SMIG et aéroports.
- 28 images WebP locales ajoutées sous `public/images/articles/editorial-2026-09-14/`, avec crédits et licences dans `docs/editorial-2026-09-14/images.json` et `IMAGES.md`.
- Page pilier S.A.F.E mise à jour avec une mention limitée de `safeimmobilier`, sans insertion dans les sujets festivals, élections, sport ou actualité générale.
- Correctifs de liens internes sur les variantes EN/ES/NL de l’indice immobilier T2 2026 et sur les liens NL programmes électoraux.

## Audit anti-cannibalisation

Mis à jour au lieu de dupliquer : Tanjazz 2026, hub élections Maroc 2026, rentrée scolaire 2026-2027, SMIG 2026, aéroports Maroc été 2026.

Créés comme intentions distinctes : L’Boulevard 2026, comment voter, résultats élections, finale Mondial 2030 Maroc/Espagne, Maroc IA 2030, MOGA Essaouira 2026, Maroc-Gabon.

## Validation

- `npm run format:editorial` : OK.
- `npm run check` : OK, avec avertissements/hints préexistants Astro/TypeScript.
- `npm run build` : OK, 469 pages générées.
- `npm run lint` : OK, validateurs 2026-09-05 et 2026-09-14.

## Fichiers de suivi

- `docs/editorial-2026-09-14/articles.json` : manifeste des 48 créations/mises à jour localisées.
- `docs/editorial-2026-09-14/images.json` : manifeste des 28 images et licences.
- `docs/editorial-2026-09-14/audit-map.md` : audit des intentions et décisions update/create.
- `docs/editorial-2026-09-14/validation.json` : sortie du validateur dédié.
