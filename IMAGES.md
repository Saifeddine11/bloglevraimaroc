# Images — Le Vrai Maroc

Toutes les images de production sont des fichiers WebP locaux, optimisés et placés dans `public/images/`. Les sources retenues proviennent de Wikimedia Commons avec une page source et une licence vérifiable.

## Standards

- Articles : `1600 x 900`, WebP, qualité 82.
- Hero homepage : `1920 x 1080`, WebP, qualité 84.
- Open Graph : `1200 x 630`, WebP, qualité 82.
- Les chemins utilisés dans le code sont relatifs à `public/`, par exemple `/images/articles/immobilier-marrakech-2026.webp`.

## Articles

| Article | Fichier local | Source | Licence / auteur | Alt text | Statut |
|---|---|---|---|---|---|
| Marrakech est-elle encore accessible pour les nouveaux investisseurs ? | `public/images/articles/marrakech-accessible-investisseurs.webp` | [M Avenue Marrakech](https://commons.wikimedia.org/wiki/File:M_Avenue_Marrakech.jpg) | CC BY-SA 4.0 / YasmeenEly | Immeubles modernes à Guéliz Marrakech pour illustrer l’investissement immobilier. | Installé |
| L'effet tourisme sur les prix immobiliers à Marrakech | `public/images/articles/tourisme-prix-immobiliers-marrakech.webp` | [Jemaa El Fna Square Marrakech Morocco 173933](https://commons.wikimedia.org/wiki/File:Jemaa_El_Fna_Square_Marrakech_Morocco_173933_(49701985992).jpg) | CC BY 2.0 / bobistraveling | Vue touristique de Marrakech illustrant l’impact du tourisme sur les prix immobiliers. | Installé |
| Route d'Amizmiz, Agdal, Targa : les zones à suivre hors centre-ville | `public/images/articles/zones-amizmiz-agdal-targa.webp` | [Marrakech 203](https://commons.wikimedia.org/wiki/File:Marrakech_203.JPG) | CC BY-SA 2.5 / gildemax | Zone résidentielle en développement à Marrakech entre Agdal, Targa et Route d’Amizmiz. | Installé |
| Immobilier à Marrakech en 2026 : ce qui change vraiment | `public/images/articles/immobilier-marrakech-2026.webp` | [The conflict between modern and past](https://commons.wikimedia.org/wiki/File:The_conflict_between_modern_and_past.jpg) | CC BY-SA 4.0 / Yassine EL MORABETHI | Architecture moderne à Marrakech illustrant l’évolution du marché immobilier en 2026. | Installé |
| Pourquoi Marrakech attire encore les investisseurs immobiliers | `public/images/articles/marrakech-investisseurs-immobiliers.webp` | [La villa Majorelle](https://commons.wikimedia.org/wiki/File:La_villa_Majorelle_(Marrakech)_(7164541416).jpg) | CC BY 2.0 / Jean-Pierre Dalbéra | Villa et environnement premium à Marrakech illustrant l’attractivité immobilière de la ville. | Installé |
| Guéliz, Hivernage, Palmeraie : où investir selon votre profil ? | `public/images/articles/gueliz-hivernage-palmeraie-investissement.webp` | [Avenue Mohammed VI, Marrakech](https://commons.wikimedia.org/wiki/File:Avenue_Mohammed_VI,_Marrakech_-_panoramio.jpg) | CC BY-SA 3.0 / Hilverd Reker | Quartiers premium de Marrakech entre Guéliz, Hivernage et Palmeraie. | Installé |
| Acheter un bien à Marrakech : les erreurs à éviter absolument | `public/images/articles/acheter-bien-marrakech-erreurs.webp` | [Marrakesh White Door](https://commons.wikimedia.org/wiki/File:Marrakesh_White_DOOR_(5100327811).jpg) | CC BY 2.0 / Khalid Albaih | Visite immobilière à Marrakech pour illustrer les erreurs à éviter avant un achat. | Installé |
| Riads à Marrakech : charme, rendement et pièges à connaître | `public/images/articles/riads-marrakech-rendement-pieges.webp` | [Riad Leila - Marrakech](https://commons.wikimedia.org/wiki/File:Riad_Leila_-_Marrakech_-_Maroc_-_Mai_2005.jpg) | CC BY 2.0 / sdbj | Patio de riad traditionnel à Marrakech illustrant le charme et les risques d’investissement. | Installé |
| Location courte durée à Marrakech : opportunité réelle ou marché sous pression ? | `public/images/articles/location-courte-duree-marrakech.webp` | [El Fenn Marrakech](https://commons.wikimedia.org/wiki/File:(c)_Cecile_Treal_-_El_Fenn_9566_2.jpg) | CC BY-SA 4.0 / Laurendorman1 | Appartement meublé ou terrasse à Marrakech pour illustrer la location courte durée. | Installé |
| Marrakech avant 2030 : tourisme, infrastructures et nouvelles opportunités | `public/images/articles/marrakech-2030-infrastructures-tourisme.webp` | [Entrance of the Airport of Marrakech](https://commons.wikimedia.org/wiki/File:Entrance_of_the_Airport_of_Marrakech.jpg) | CC BY-SA 4.0 / Reda Kerbush | Infrastructures de Marrakech illustrant les opportunités liées au tourisme et à l’horizon 2030. | Installé |
| Marrakech 2026-2030 : perspectives de marché et scénarios pour l'immobilier | `public/images/articles/marrakech-perspectives-marche-2026-2030.webp` | [Gare de Marrakech](https://commons.wikimedia.org/wiki/File:Gare_de_Marrakech.jpg) | CC BY-SA 4.0 / Maarten Wasmoeth | Gare de Marrakech illustrant les perspectives du marché immobilier entre 2026 et 2030. | Installé |

## Images globales

| Usage | Fichier local | Source | Licence / auteur | Statut |
|---|---|---|---|---|
| Hero homepage | `public/images/hero-marrakech.webp` | [Marrakech](https://commons.wikimedia.org/wiki/File:Marrakech_(25561912075).jpg) | CC BY 2.0 / Ty Terrasso | Installé |
| Open Graph par défaut | `public/images/og/default.webp` | [Marrakech](https://commons.wikimedia.org/wiki/File:Marrakech_(25561912075).jpg) | CC BY 2.0 / Ty Terrasso | Installé |

## Fichiers mis à jour

- `src/content/articles/*.md` : frontmatter `heroImage` et `imageAlt`.
- `src/pages/index.astro` : image hero homepage.
- `src/components/Hero.astro` : image hero par défaut.
- `src/data/site.ts` : image Open Graph par défaut.
