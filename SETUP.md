# Guide de déploiement — Le Vrai Maroc

## 1. Installation locale

```bash
# Depuis le dossier du projet
cd "blog marrakech"

# Installer les dépendances (Node.js 18+ requis)
npm install

# Lancer le serveur de développement
npm run dev
# → Site accessible sur http://localhost:4321
```

**Pré-requis** : Node.js 18 ou supérieur. Vérifier avec `node --version`.

---

## 2. Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur local avec rechargement automatique |
| `npm run build` | Génère le site statique dans `/dist` |
| `npm run preview` | Prévisualise le build local avant déploiement |

---

## 3. Avant le déploiement : configuration obligatoire

### 3a. Mettre à jour le domaine

Dans `src/data/site.ts`, remplacer :
```ts
url: 'https://vraimaroc.com',
```
par votre vrai domaine :
```ts
url: 'https://votre-domaine.com',
```

Dans `astro.config.mjs`, faire la même chose :
```js
site: 'https://votre-domaine.com',
```

Dans `public/robots.txt` :
```
Sitemap: https://votre-domaine.com/sitemap-index.xml
```

### 3b. Mettre à jour l'email de contact

Dans `src/data/site.ts` :
```ts
email: 'contact@votre-domaine.com',
```

### 3c. Vérifier les images éditoriales

Voir `IMAGES.md` pour la liste complète. Chaque article doit utiliser une image locale, éditoriale et documentée avant la mise en production.

---

## 4. Déploiement

### Netlify (recommandé, gratuit)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. "New site" → "Import from Git" → connecter votre dépôt GitHub
3. Réglages de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
4. Cliquer "Deploy site"
5. (Optionnel) Connecter votre domaine dans "Domain settings"

### Vercel (alternative)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. "New Project" → importer depuis GitHub
3. Framework : Astro (auto-détecté)
4. Cliquer "Deploy"

### Hébergement classique (FTP/cPanel)

```bash
npm run build
# Uploader le contenu du dossier /dist/ via FTP
# Le fichier dist/index.html est le point d'entrée
```

### Cloudflare Pages

1. Dashboard Cloudflare → Pages → "Create a project"
2. Connecter GitHub → sélectionner le dépôt
3. Build command : `npm run build` | Output : `dist`

---

## 5. Activer les formulaires

### 5a. Formulaire Newsletter — PHP mail() (prêt à l'emploi)

La newsletter utilise un endpoint PHP natif. **Aucune configuration externe n'est requise.**

**Fichier PHP :** `public/send-newsletter.php`
→ Astro copie automatiquement ce fichier dans `dist/send-newsletter.php` lors du build.

**Ce que fait le PHP :**
- Accepte uniquement les requêtes POST
- Vérifie le champ honeypot anti-spam (`website`)
- Valide l'email avec `filter_var`
- Envoie un email à `contact@levraimaroc.com` via `mail()`
- Retourne une réponse JSON `{"ok": true}` ou `{"ok": false}`

**Email de notification reçu :**
```
De : Le Vrai Maroc <contact@levraimaroc.com>
Sujet : Nouvelle inscription newsletter — Le Vrai Maroc

Nouvelle inscription newsletter sur Le Vrai Maroc.

Email inscrit : [adresse saisie]

Source : Le Vrai Maroc — https://levraimaroc.com
User-Agent : [navigateur visiteur]
IP : [IP visiteur]
```

**Déploiement :**
1. Lancer `npm run build`
2. Uploader le contenu complet de `/dist` dans `public_html` sur Hostinger/cPanel
3. Vérifier que `public_html/send-newsletter.php` existe (fichier caché → activer "Show hidden files" si besoin)
4. Tester en soumettant votre email depuis `https://levraimaroc.com`
5. Vérifier `contact@levraimaroc.com` (boîte de réception + spam)

**Si les emails n'arrivent pas :**

Hostinger peut bloquer `mail()` sur certains plans. Dans ce cas, utiliser PHPMailer avec SMTP authentifié :

1. Installer PHPMailer dans `public/` (ou uploader manuellement)
2. Utiliser le serveur SMTP Hostinger :
   - Host : `smtp.hostinger.com`
   - Port : `587` (TLS)
   - Username : `contact@levraimaroc.com`
   - Password : votre mot de passe email Hostinger
3. Remplacer l'appel `mail()` dans `send-newsletter.php` par `$mailer->send()`

---

### 5b. Formulaire Contact — Formspree

> ⚠️ **Action requise** : le formulaire contact nécessite un endpoint Formspree réel.

**Étape 1 — Créer votre compte Formspree**

Allez sur [formspree.io](https://formspree.io) et créez un compte gratuit.

**Étape 2 — Créer le formulaire Contact**

1. Cliquez "+ New Form"
2. Nommez-le : `Contact — Le Vrai Maroc`
3. Recipient : `contact@levraimaroc.com`
4. Copiez l'URL endpoint → ressemble à `https://formspree.io/f/abcd1234`

**Étape 3 — Coller l'endpoint dans la config**

Ouvrez `src/data/site.ts` et remplacez :

```ts
contactFormEndpoint: 'https://formspree.io/f/REPLACE_WITH_CONTACT_FORM_ID',
```

par votre vrai endpoint :

```ts
contactFormEndpoint: 'https://formspree.io/f/abcd1234',
```

**Étape 4 — Rebuilder et redéployer**

```bash
npm run build
# Uploader le contenu de /dist dans public_html
```

---

## 6. Ajouter un article

1. Créer un fichier `.md` dans `src/content/articles/` :
   ```
   src/content/articles/mon-nouvel-article.md
   ```

2. Commencer par le frontmatter :
```yaml
---
title: "Titre de l'article"
metaTitle: "Titre SEO optimisé (60 caractères max)"
metaDescription: "Description pour Google (155 caractères max)"
category: "immobilier"  # immobilier | tourisme | investissement | quartiers | guides | analyses
tags: ["mot-clé 1", "mot-clé 2", "mot-clé 3"]
date: 2026-07-01
readingTime: 8
excerpt: "Résumé affiché dans les cartes article (2-3 phrases)."
heroImage: "/images/articles/mon-article.webp"
imageAlt: "Description de l'image"
featured: false
sources:
  - label: "Source — Titre"
    url: "https://source.com"
disclaimer: false
---
```

3. Écrire le contenu en Markdown après le frontmatter
4. Sauvegarder — l'article apparaît automatiquement dans la liste et la catégorie correspondante
5. Lancer `npm run dev` pour vérifier le rendu avant publication

---

## 7. Changer le domaine après déploiement initial

1. `src/data/site.ts` → `url`
2. `astro.config.mjs` → `site`
3. `public/robots.txt` → `Sitemap:`
4. Relancer `npm run build` et redéployer

---

## 8. Structure des fichiers

```
blog marrakech/
├── src/
│   ├── components/        # Header, Footer, ArticleCard, etc.
│   ├── content/
│   │   └── articles/      # Tous les articles .md
│   ├── data/
│   │   ├── site.ts        # Nom, URL, email, nav
│   │   └── categories.ts  # Définitions des 6 catégories
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Template HTML de base + SEO
│   │   └── ArticleLayout.astro # Template article + ToC + sources
│   ├── pages/             # Une page = un fichier .astro
│   └── styles/
│       └── global.css     # Styles globaux + classes utilitaires
├── public/
│   ├── images/articles/   # Images des articles (à remplir)
│   ├── images/og/         # Images pour partage réseaux sociaux
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs       # Config Astro + intégrations
├── tailwind.config.mjs    # Design system + couleurs
└── IMAGES.md              # Plan de remplacement des images
```

---

## 9. URLs du site en production

| Page | URL |
|------|-----|
| Homepage | `/` |
| Blog (tous les articles) | `/blog` |
| Immobilier | `/immobilier` |
| Tourisme | `/tourisme` |
| Investissement | `/investissement` |
| Quartiers | `/quartiers` |
| Guides pratiques | `/guides` |
| Analyses de marché | `/analyses` |
| À propos | `/a-propos` |
| Contact | `/contact` |
| Mentions légales | `/mentions-legales` |
| Politique de confidentialité | `/confidentialite` |
| Flux RSS | `/rss.xml` |
| Sitemap | `/sitemap-index.xml` |

### Articles (11 au total)

| Slug | Catégorie |
|------|-----------|
| `/articles/immobilier-marrakech-2026` | Immobilier |
| `/articles/pourquoi-investir-marrakech` | Investissement |
| `/articles/gueliz-hivernage-palmeraie-guide` | Immobilier |
| `/articles/marrakech-avant-2030` | Tourisme |
| `/articles/erreurs-acheter-marrakech` | Guides |
| `/articles/riads-marrakech-guide` | Immobilier |
| `/articles/location-courte-duree-marrakech` | Investissement |
| `/articles/zones-periurbaines-marrakech` | Quartiers |
| `/articles/effet-tourisme-prix-immobilier` | Tourisme |
| `/articles/marrakech-accessible-investisseurs` | Investissement |
| `/articles/marrakech-perspectives-marche-2026-2030` | Analyses |

---

## 10. Checklist SEO avant lancement

- [ ] Domaine réel configuré dans `site.ts` et `astro.config.mjs`
- [ ] `public/robots.txt` mis à jour avec le bon domaine
- [ ] Image OG par défaut créée : `public/images/og/default.jpg` (1200×630)
- [ ] Toutes les images articles remplacées (voir `IMAGES.md`)
- [ ] Email de contact fonctionnel dans `site.ts`
- [ ] Formulaire de contact activé (Formspree ou Netlify Forms)
- [ ] Newsletter connectée à Brevo / Mailchimp / ConvertKit
- [ ] Sitemap accessible : `https://votre-domaine.com/sitemap-index.xml`
- [ ] Google Search Console : site soumis et sitemap ajouté
- [ ] Google Analytics ou Plausible installé (optionnel)
- [ ] Test Lighthouse : objectif > 90 sur Performance, SEO, Accessibility
- [ ] Test mobile sur iPhone et Android

---

## 11. Dépannage courant

**Build échoue avec "Cannot find module"**
→ `npm install` puis `npm run build`

**Images qui ne s'affichent pas**
→ Vérifier que le fichier est bien dans `public/` et que le chemin commence par `/`

**Sitemap vide ou manquant**
→ Vérifier que `site:` est bien configuré dans `astro.config.mjs`

**ArticleCard ne montre pas l'article**
→ Vérifier que la `category` dans le frontmatter correspond exactement à l'une des 6 catégories valides

**Erreur TypeScript sur le frontmatter**
→ Vérifier que tous les champs requis sont présents (title, metaDescription, category, tags, date, readingTime, excerpt, heroImage, imageAlt)
