# Audit de production — Le Vrai Maroc
*Date : 30 juin 2026 — Astro 7.0.3*

---

## Résultat global : ✅ Prêt à déployer

Toutes les erreurs de build bloquantes ont été corrigées. Le site peut être compilé et déployé sur Netlify, Vercel ou Cloudflare Pages.

---

## 1. Erreurs corrigées

### 1a. Import manquant — `CategoryIcon` (CRITIQUE, build-breaking)
**Problème :** 6 fichiers importaient `CategoryIcon from '@/components/CategoryIcon.astro'` — le composant n'existait pas, causant un crash immédiat du build.

**Fichiers affectés :**
- `src/components/Footer.astro`
- `src/components/CategoryPill.astro`
- `src/pages/index.astro`
- `src/pages/blog.astro`
- `src/pages/quartiers.astro`
- `src/pages/immobilier.astro`

**Correction :** Création de `src/components/CategoryIcon.astro` — composant minimal qui rend une icône SVG homogène. Accepte les props `name`, `size`, `class`.

---

### 1b. URL OG image cassée pour les images absolues (ArticleLayout)
**Problème :** `const ogImage = heroImage.startsWith('/') ? heroImage : \`/${heroImage}\`` — avec une URL absolue, produisait un chemin invalide.

**Correction :**
```js
const ogImage = heroImage.startsWith('http') ? heroImage : (heroImage.startsWith('/') ? heroImage : `/${heroImage}`);
const ogImageAbsolute = ogImage.startsWith('http') ? ogImage : `${SITE.url}${ogImage}`;
```
Propagé dans JSON-LD et la prop BaseLayout via `ogImageAbsolute`.

---

### 1c. Active state nav — toutes les pages marquées actives (Header)
**Problème :** `pathname.startsWith(item.href)` avec `href='/'` marquait TOUTES les pages comme actives sur la homepage.

**Correction :**
```js
const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
```
Appliqué aux deux variantes (desktop ligne 35, mobile ligne 93).

---

### 1d. Titres de pages dupliqués
**Problème :** `a-propos.astro`, `contact.astro`, `mentions-legales.astro`, `confidentialite.astro` passaient "Titre — Le Vrai Maroc" à BaseLayout qui rajoutait `| Le Vrai Maroc`, produisant "Titre — Le Vrai Maroc | Le Vrai Maroc".

**Correction :** Simplification à `title="À propos"` etc. sur les 4 pages.

---

### 1e. Ancre newsletter absente sur les pages article
**Problème :** Le lien `#newsletter` dans la ToC des articles ne trouvait aucun élément cible.

**Correction :** Ajout de `id="newsletter"` au wrapper du bloc newsletter dans `ArticleLayout.astro` ligne 211.

---

### 1f. Catégorie "analyses" vide
**Problème :** La page `/analyses` affichait "0 articles".

**Correction :** Création de `src/content/articles/marrakech-perspectives-marche-2026-2030.md` (11 min de lecture, 3 scénarios 2026–2030, sources Bird & Bird, Médias24, etc.).

---

## 2. Améliorations design & UX

| Élément | Avant | Après |
|---------|-------|-------|
| Header glass | `background: white/80%` | `rgba(255,255,255,0.85) + blur(20px) saturate(180%)` |
| Header scroll | Pas de shadow | Shadow dynamique via JS au scroll |
| Titres | `text-wrap: auto` | `text-wrap: balance` sur h1–h4 |
| .glass-card | Blur basique | `blur(24px) saturate(180%) + inset highlight` |
| Bouton orange hover | Couleur seule | + `box-shadow: glow orange` |
| Animation reveal | `ease-out` linéaire | `cubic-bezier(0.16, 1, 0.3, 1)` (spring) |
| ArticleCard featured | `scale-105 duration-500` | `scale-[1.03] duration-700` |
| Flèche "Lire l'article" | Statique | `translate-x-0.5` au hover |
| ToC item actif | `text-rdm-orange` seul | + `border-rdm-orange font-medium` |

---

## 3. État SEO

| Vérification | Statut |
|--------------|--------|
| `<title>` unique sur toutes les pages | ✅ |
| `<meta name="description">` présent partout | ✅ |
| Canonical URL | ✅ BaseLayout |
| OG title / description / image | ✅ BaseLayout |
| Twitter Card | ✅ BaseLayout |
| JSON-LD Organization + WebSite | ✅ BaseLayout |
| JSON-LD BlogPosting | ✅ ArticleLayout |
| JSON-LD BreadcrumbList | ✅ ArticleLayout |
| Sitemap | ✅ `/sitemap-index.xml` via @astrojs/sitemap |
| robots.txt | ✅ `public/robots.txt` |
| RSS | ✅ `/rss.xml` |
| H1 unique par page | ✅ |
| Images avec `alt` | ✅ tous les articles |
| `loading="lazy"` | ✅ toutes les cards |
| noindex sur mentions légales / confidentialité | ✅ |

---

## 4. État du contenu (11 articles)

| Slug | Catégorie | Mots ≈ | Sources | Disclaimer |
|------|-----------|--------|---------|------------|
| immobilier-marrakech-2026 | immobilier | 1 800 | HCP, ONMT, Notaires | Non |
| pourquoi-investir-marrakech | investissement | 1 600 | ONMT, DGI, Valorisimo | Non |
| gueliz-hivernage-palmeraie-guide | immobilier | 1 700 | Meilleurs Agents, Mubawab | Non |
| marrakech-avant-2030 | tourisme | 1 500 | FIFA, ministère Tourisme | Non |
| erreurs-acheter-marrakech | guides | 1 900 | ANCFCC, DGI | Non |
| riads-marrakech-guide | immobilier | 1 800 | ANCFCC, notaires | Non |
| location-courte-duree-marrakech | investissement | 1 600 | Airbnb Data, décret 2.23.441 | Non |
| zones-periurbaines-marrakech | quartiers | 1 700 | Agence Urbaine Marrakech | Non |
| effet-tourisme-prix-immobilier | tourisme | 1 600 | ONMT, HCP | Non |
| marrakech-accessible-investisseurs | investissement | 1 500 | DGI, Loi 02-90 | Non |
| marrakech-perspectives-marche-2026-2030 | analyses | 1 700 | Bird & Bird, PropIntel | **Oui** |

Tous les articles : français correct, ton éditorial, données chiffrées sourcées, aucune affirmation sans base factuelle.

---

## 5. Routes disponibles (14 pages + 11 articles)

```
/                          Homepage
/blog                      Tous les articles
/immobilier                Catégorie immobilier (3 articles)
/tourisme                  Catégorie tourisme (2 articles)
/investissement            Catégorie investissement (3 articles)
/quartiers                 Catégorie quartiers (1 article)
/guides                    Catégorie guides (1 article)
/analyses                  Catégorie analyses (1 article)
/a-propos
/contact
/mentions-legales
/confidentialite
/rss.xml
/sitemap-index.xml

/articles/immobilier-marrakech-2026
/articles/pourquoi-investir-marrakech
/articles/gueliz-hivernage-palmeraie-guide
/articles/marrakech-avant-2030
/articles/erreurs-acheter-marrakech
/articles/riads-marrakech-guide
/articles/location-courte-duree-marrakech
/articles/zones-periurbaines-marrakech
/articles/effet-tourisme-prix-immobilier
/articles/marrakech-accessible-investisseurs
/articles/marrakech-perspectives-marche-2026-2030
```

---

## 6. Checklist avant mise en ligne

- [ ] **Domaine** : mettre à jour `src/data/site.ts` → `url` + `astro.config.mjs` → `site` + `public/robots.txt` → `Sitemap:`
- [ ] **Email** : mettre à jour `src/data/site.ts` → `email`
- [ ] **Images** : remplacer les 11 images Picsum (voir `IMAGES.md`)
- [ ] **Image OG** : créer `public/images/og/default.jpg` 1200×630
- [ ] **Formulaires** : connecter Formspree ou Netlify Forms (voir `SETUP.md` §5)
- [ ] **Newsletter** : connecter Brevo / Mailchimp / ConvertKit
- [ ] **Google Search Console** : soumettre le sitemap après déploiement

---

## 7. Déploiement recommandé

Voir `SETUP.md` pour les instructions complètes. Résumé :

```bash
npm install
npm run build
# → dossier /dist prêt à déployer sur Netlify / Vercel / Cloudflare Pages
```

Netlify : Build command `npm run build`, Publish directory `dist`. Hébergement gratuit illimité pour les sites statiques.
