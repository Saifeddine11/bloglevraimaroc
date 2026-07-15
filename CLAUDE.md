# Le Vrai Maroc — Daily Autonomous SEO Publishing System

Production website: https://levraimaroc.com

This document is the standing process for the daily editorial routine on this repository. It was provided by Sif Eddine on 2026-07-15 and should be followed for every future daily run, subject to the environment limitations documented at the bottom (these override the brief where they conflict, until resolved).

## Mission

Research, write, translate, integrate, validate, commit — and push once push access is configured (see Known Environment Limitations) — exactly three new high-quality articles every day.

Editorial pillars: Immobilier, Investissement, Tourisme, Économie, Infrastructure, Aviation, Transport, Urban development, Practical guides, Marrakech news and opportunities.

This routine is fully autonomous. Do not stop to ask for article approval. Do not only propose subjects. Do not leave drafts, placeholders, incomplete translations, temporary files, or TODO comments. Complete the entire process from research to Git commit (and push, once available).

## 1. Required daily editorial distribution

Exactly three articles per successful run:

- **Article 1 — Major Morocco news**: one important national Moroccan topic with strong public interest and SEO potential.
- **Article 2 — Major Morocco news**: a second national topic, distinct sector from Article 1.
- **Article 3 — Marrakech news**: real estate, tourism, hotels, restaurants (when economically/culturally relevant), transportation, aviation, infrastructure, urban planning, investment, new projects, high-value events, or practical developments for residents/visitors/investors.

Never publish three articles about the same sector. Recommended mix: one national economy/investment/infrastructure article, one national tourism/real-estate/transport/aviation article, one Marrakech-specific article.

## 2. Repository inspection (before every run)

1. Pull the latest configured branch.
2. Read this file (CLAUDE.md).
3. Inspect `package.json`.
4. Inspect the content schema (`src/content.config.ts`).
5. Read at least five recent French articles.
6. Inspect at least two existing translations in EN, ES, NL.
7. Inspect the image directory structure (`public/images/articles/`).
8. Inspect `IMAGES.md`.
9. Inspect blog cards, article page, SEO components, sitemap, structured data, categories, tags, internal-linking conventions.
10. Inspect current design tokens and reusable article components.

Preserve the current technical architecture, branding, typography, colors, spacing, routing, and component system. Do not redesign the website. Do not introduce a new content architecture when one already exists.

## 3. Daily research window

Research current Moroccan information published preferably in the previous seven days; expand to thirty days only when no sufficiently strong topic exists within seven days and the information is still relevant and uncovered. Use the real current date. Never present an old announcement as new.

Prioritize primary/authoritative sources: Moroccan government institutions, ministries, official public establishments, Bank Al-Maghrib, HCP, ONDA, ONCF, RAM, AMDIE, Maroc.ma, regional councils, Marrakech municipal/regional sources, official company announcements, project developers' official releases, recognized Moroccan/international media.

Use at least two reliable sources per article whenever possible. For sensitive financial, legal, tax, real-estate, or administrative subjects, require at least one primary/official source. Never rely only on social media, aggregators, copied press releases, or low-quality blogs.

## 4. Existing-content duplication check

Before selecting a topic: search existing article titles, slugs, tags/categories, principal entities/keywords, and recently published articles. Reject topics that substantially duplicate an existing article unless there is a genuinely significant new development — in that case, focus the new article on the new development and link to the older article. Never create near-duplicate pages targeting the same search intent.

## 5. SEO topic scoring

Research at least ten candidate topics before selecting the final three. Score each 0–5 on: freshness, Moroccan public interest, SEO search potential, click potential, usefulness, source reliability, long-term value, relevance to Le Vrai Maroc, internal-linking potential, competitive opportunity.

Weighted selection: SEO/search intent 25%, click potential 20%, freshness 15%, source reliability 15%, usefulness 10%, relevance 10%, internal-linking potential 5%.

Select the three highest-quality subjects respecting: exactly two national + one Marrakech, sector diversity, factual reliability, no duplication. Do not choose a weak story only because it's recent; do not force a high-volume keyword the news doesn't support.

## 6. Search intent and keyword strategy

For every article: one primary keyword, three to six secondary keywords, main search intent (informational / news / commercial investigation / investment research / practical guide / local discovery), likely reader questions, named entities, internal-linking opportunities, unique value vs. existing search results. Answer the search intent fully. No keyword stuffing — use semantic variations. No metadata/headings promising content not in the article.

## 7. Click-through strategy

Produce: editorial title, SEO meta title, meta description, social title, social description, opening hook, featured-image concept, article-card excerpt.

Headline must combine a clear subject, a concrete development, a useful reader consequence, and curiosity without misleading clickbait. Specify what changed, who is affected, include Morocco/Marrakech when relevant, use verified numbers, communicate practical impact, stay natural and credible.

Avoid: sensationalism, fake urgency, invented exclusivity, vague titles, exaggerated promises, excessive punctuation, all-caps, unsupported words ("historic", "revolutionary", "record" unless verified), titles revealing no concrete information.

The introduction must make clear within 80 words: what happened, why it matters, who is affected, what the article explains. Never open with generic filler ("Le Maroc continue de se développer", "Dans un monde en constante évolution", "Il est important de noter que", "Depuis quelques années").

## 8. French source articles

Write French first, in `src/content/articles/`, following the exact existing schema. Generally 900–1,500 useful words (shorter acceptable only when source material doesn't justify more — never pad).

Every article needs: precise title, strong hook, concise intro, clear explanation of the announcement, verified facts/dates/locations/figures, context, consequences for readers, practical implications, limitations/uncertainties, useful conclusion, relevant internal links, source references, disclaimer when appropriate.

Use short paragraphs, descriptive H2s, H3s where useful, factual tables when they help, highlighted info boxes (existing components only), short lists sparingly, genuine FAQ sections only when real search questions support them. No repeated information across sections. No AI-authorship wording.

## 9. Article structure

Adapt structure to the topic. Recommended: Title → opening hook → concise intro → what was officially announced → key verified figures/facts → why this matters → impact on Morocco/Marrakech/residents/travelers/companies/investors → what remains uncertain → practical takeaway → conclusion → sources → disclaimer when relevant.

For project announcements, distinguish clearly: announced / approved / under construction / launched / operational / completed. Never describe a planned project as completed.

## 10. Frontmatter and SEO metadata

Follow the exact schema in `src/content.config.ts`. Current fields: `title`, `slug`, `locale`, `translationKey`, `metaTitle`, `metaDescription`, `category` (enum: immobilier, tourisme, investissement, quartiers, guides, analyses), `tags`, `date`, `updatedDate`, `readingTime`, `excerpt`, `heroImage`, `imageAlt`, `featured`, `sources` (label + url), `disclaimer`.

Note: `BaseLayout.astro` appends `" | Le Vrai Maroc"` (16 chars) to every `<title>` — keep `metaTitle` short enough that the total stays close to 60 characters (in practice, aim ~35–48 chars for metaTitle).

Meta title: unique, concrete, aligned with primary keyword, written for clicks without clickbait.
Meta description: unique, accurate, useful, ~140–160 characters when natural, states the main benefit/consequence, includes Morocco/Marrakech when relevant, no invented urgency.
Slug: concise, descriptive, lowercase, hyphenated, no dates unless central, unique in the repo.

Each article needs a unique local hero image, descriptive alt text, and consistent metadata across languages.

## 11. Translations

For each French article, create complete EN/ES/NL translations — 12 files/day total (3 FR + 3 EN + 3 ES + 3 NL), in `src/content/articles/{en,es,nl}/`. Follow existing directory and frontmatter conventions.

Every translation must: translate fully, preserve all verified facts/names/dates/figures/source URLs, use natural professional language, localize title/metaTitle/metaDescription/excerpt/headings/slug, preserve the same `translationKey` (the FR slug), preserve the disclaimer, preserve or correctly adapt internal links. No word-for-word translation that reads unnaturally. No leftover French headings/metadata in translated files.

## 12. Image research

Every article needs one unique hero image and one unique secondary image when the layout supports it (current convention: hero + 1–3 inline section images for longer articles). Images must be coherent with the exact subject — never generic or misleading (wrong city, wrong airport, wrong project).

Allowed sources: Unsplash, Pexels, Wikimedia Commons (compatible licensing), official media kits with confirmed reuse permission, official institutional images with permitted public reuse, repository-owned images. Never use copyrighted news images without permission, image-search thumbnails as finals, or hotlinked external images.

## 13. Image storage

Final images live in `public/images/articles/`. Descriptive filenames, e.g. `aeroport-marrakech-trafic-2026.webp` — never `image1.webp`, `download.webp`, `unsplash-photo.webp`, or raw hashes.

**Environment note**: this sandbox has no direct network access to Unsplash/Pexels. The only working path is driving the user's real Chrome via the Claude in Chrome extension to browse/download, which necessarily lands files in the user's real `~/Downloads` first. Only the final optimized WebP file is ever committed to the repo — nothing from `~/Downloads` is referenced from article content or left as a permanent dependency. This is a hard environment constraint, not a choice; keep it in mind rather than treating every use of the Downloads folder as a violation.

## 14. Image processing

Standard article format: WebP, 1600×900 (16:9), quality ~82, sharp, correctly cropped (preserve the important visual subject, never stretch, never visibly upscale low-res sources), no watermark, no unnecessary metadata, reasonable file size. Verify every saved image is a real valid image (not an HTML error page, blocked-request response, or thumbnail).

## 15. Image credits

Record in `IMAGES.md` for every image: local repository path, article slug, language usage, photographer/organization, original page URL, license basis, date accessed. Never fabricate photographer names, URLs, or licenses.

## 16. Article visual presentation

Use existing colors, design system, and reusable components only (branded info boxes, key-figure cards, comparison tables, timeline blocks, quote blocks for verified quotations, summaries, FAQ accordions, related-article blocks, internal CTAs, source sections, disclaimer cards — wherever already supported). No new colors, no global CSS changes or component redesigns unless a genuine technical fix is required, no decorative components that hurt speed/readability, no dead-end buttons. Maintain contrast and semantic HTML.

## 17. Internal linking

3–6 useful internal links per article when relevant pages exist, prioritizing related articles, category pages, investment/Marrakech guides, tourism content, real-estate analysis, infrastructure/aviation pages. Descriptive anchor text only (never "cliquez ici" / "en savoir plus" / "voir cet article"). No forced or repeated links to the same page, no links to non-existent routes. Update an older article to link to the new one only when genuinely useful and safe.

## 18. Structured data and social sharing

Ensure `Article`/`NewsArticle`, `BreadcrumbList`, `FAQPage` (only with a real visible FAQ), organization/publisher, author, dates, headline, description, canonical URL, and hero image are all correct per the existing system. No conflicting schemas. OG/Twitter metadata: localized title/description, canonical URL, correct local hero image + alt, article type where supported. Social image must be a local repo file, never a temporary/external URL.

## 19. Content accuracy

Verify every number, date, location, project name, institution, quotation, status claim, and source URL before publishing. Label information as confirmed / officially announced / projected / estimated / planned / reported-but-unconfirmed. No invented investment advice, no guaranteed-return claims. Include the appropriate disclaimer for legal, tax, financial, property, visa, or administrative topics.

## 20. Quality and click audit (before commit)

Check: title understandable without context; title explains what changed; title has a real benefit/consequence; meta description adds information beyond the title; hook creates interest without misleading; article answers the main query quickly; key facts visible near the top; mobile-readable paragraphs; informative headings; relevant internal links; image directly connected to the topic; unique metadata; more useful than a plain news summary; practical impact explained; uncertain facts clearly flagged. Rewrite weak titles/hooks/metadata before publishing.

## 21. Technical validation (before commit)

Validate frontmatter, collection schema, duplicate slugs, translation relationships, internal links, image paths/dimensions/formats, sitemap output, canonical URLs, hreflang, Open Graph metadata, structured data. Run lint, Astro/TypeScript checks, and `npm run build` from `package.json`. Do not commit changes that break the production build.

**See "Known Environment Limitations" below — `npm run build` is not currently reliable from this sandbox.**

## 22. Final repository audit (before staging)

Search the diff for: `TODO`, `PLACEHOLDER`, `example.com`, empty links, fabricated URLs, wrong domain typos, duplicated slugs, missing alt text, missing translation keys, untranslated text, broken image paths, temporary images, files outside approved directories, local absolute paths, `/Users/`, `~/Downloads` references *inside committed content*, API keys/tokens/passwords/secrets, AI-authorship wording. Remove temporary/unrelated files. Review `git diff` carefully. Never alter unrelated human work (e.g. the pre-existing uncommitted design-polish changes some article files may carry — isolate and preserve them, don't fold them into unrelated commits).

## 23. Git workflow

When checks pass: review the final diff, stage only relevant files (never blind `git add -A` / `git add .`), one clean daily commit, then push to the configured remote branch (or open a PR if direct push is blocked by branch protection) — **once push access is configured, see below**.

Commit format: `content(blog): publish 3 SEO articles for YYYY-MM-DD`
PR title (if used): `Daily SEO blog: 3 Morocco articles — YYYY-MM-DD`, with description covering: the two national subjects, the Marrakech subject, primary keywords, files created, images added, sources used, validation results.

Never force-push, never rewrite history, never delete unrelated work.

## 24. Daily completion requirements

A successful run needs: 2 national + 1 Marrakech article, 3 FR + 3 EN + 3 ES + 3 NL files, coherent local images with complete credits, optimized click-oriented metadata, valid OG metadata and structured data, relevant internal links, successful technical checks (subject to current environment limits), one clean commit, and a successful push/PR once that capability exists. Do not report success when a required step is missing or was skipped — say so explicitly instead.

## 25. Final report format

Every run ends with a structured report covering: topic selection (scope, title, primary keyword, search intent, SEO/click scores, reason for selection, duplicate check result), sources (per article, with URLs and verification notes), content (slug, category, tags, title, metaTitle, metaDescription, translation files, word counts, internal links), images (path, source URL, photographer, license, dimensions, format, size), SEO validation results, technical validation results (including anything skipped and why), Git status (branch, commit hash, message, push/PR status), and the full list of changed files. Never claim a command, commit, push, download, optimization, or validation succeeded unless it actually did.

---

## Known environment limitations (as of 2026-07-15)

These are current, verified technical facts about this sandbox/repo — not preferences. Follow them until the underlying blocker is resolved by Sif Eddine.

1. **No git push access.** The remote (`git@github.com:Saifeddine11/bloglevraimaroc.git`) is SSH-only. This sandbox has no SSH key, no `known_hosts` entry for github.com, no `gh` CLI, and no credential helper — `git fetch`/`push` fail with "Host key verification failed." There is also no GitHub OAuth connector available in the MCP registry to bridge this safely. **Handling raw SSH keys or personal access tokens is outside what Claude does on the user's behalf in this environment** (equivalent to handling a password/API key). Until Sif Eddine configures a deploy key or token through a secure channel on his end, every daily run ends at a **local commit only** — he pushes manually. Do not attempt to work around this by requesting secrets in chat.

2. **`npm run build` is not currently reliable from this sandbox.** Two separate issues were found and only the first is fixed:
   - *(Fixed 2026-07-15, commit `d445223`)* `node_modules` (13,469 files, macOS-ARM-only native binaries) and `dist/` were committed to Git with no `.gitignore`. This also made `git status`/`git commit` extremely slow. Both are now untracked; `.gitignore` added.
   - *(Still open)* Even after a fresh `npm install --legacy-peer-deps` (needed because `@astrojs/tailwind@5.1.5` only declares peer support up to `astro@^5`, while the project pins `astro@^7.0.3` — a pre-existing, unrelated version mismatch in `package.json`/lockfile), `astro build` fails with `EPERM: operation not permitted, unlink node_modules/.vite/deps/...` — the FUSE mount used to expose this repo to the sandbox does not support unlinking Vite's cache files reliably, and this reproduces across retries. Full build validation should be treated as **not currently possible from this sandbox**; note this explicitly in the daily report rather than skipping it silently, and defer real build verification to Sif Eddine's own machine or CI once one exists.
   - Side note: running `npm install` inside the sandbox modifies the **real, mounted** `node_modules` on Sif Eddine's Mac (this folder is not an isolated copy). Doing so once already replaced his local dependency tree with Linux-target binaries. If this happens again, tell him to run `npm install` on his own machine afterward to restore a working local `npm run dev`.

3. **Do the rest of the daily routine regardless.** None of the above blocks research, writing, translation, image sourcing/optimization, or committing locally. Only the final push and the `npm run build` validation step are currently unavailable — flag both clearly in the final report every day until resolved.
