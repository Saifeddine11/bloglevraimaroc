import { readFile, writeFile } from "node:fs/promises";

const validation = JSON.parse(await readFile("docs/editorial-2026-09-16-gentlemen/validation.json", "utf8"));
const intentions = new Map([
  ["the-gentlemen-saison-3-maroc-rabat-erfoud", "The Gentlemen Season 3 Morocco — authoritative breaking-news hub"],
  ["the-gentlemen-saison-3-rabat", "The Gentlemen Rabat filming — city-specific news"],
  ["the-gentlemen-saison-3-erfoud", "The Gentlemen Erfoud filming — south-east geography and logistics"],
  ["lieux-tournage-the-gentlemen-saison-3-maroc", "The Gentlemen Morocco filming locations — confirmation map"],
  ["pourquoi-productions-internationales-maroc", "International productions in Morocco — national film capacity"],
  ["accrocar-vehicules-luxe-the-gentlemen-maroc", "Accrocar + The Gentlemen Morocco — first-party vehicle operation"],
  ["coulisses-logistique-automobile-the-gentlemen-maroc", "Film-production car logistics Morocco — behind the scenes"],
  ["rolls-royce-bentley-the-gentlemen-maroc", "The Gentlemen luxury cars Morocco — documented models"],
  ["accrocar-mobilite-productions-internationales", "Accrocar luxury mobility Morocco — business case study"],
  ["ecosysteme-marocain-productions-internationales", "Morocco film-production ecosystem — synthesis"],
]);

const groups = [...intentions].map(([key, intent], index) => {
  const rows = validation.rows.filter((row) => row.translationKey === key).sort((a, b) => ["fr", "en", "es", "nl"].indexOf(a.locale) - ["fr", "en", "es", "nl"].indexOf(b.locale));
  return `### ${index + 1}. ${intent}\n\n| Locale | Title | Final URL | Body words |\n|---|---|---|---:|\n${rows.map((row) => `| ${row.locale.toUpperCase()} | ${row.title.replaceAll("|", "\\|")} | [${row.route}](https://levraimaroc.com${row.route}) | ${row.wordCount} |`).join("\n")}`;
}).join("\n\n");

const report = `# The Gentlemen Season 3 Morocco cluster — implementation report

Completed 16 September 2026.

## 1. Repository architecture discovered

Astro 7 static site with a Zod-backed content collection in \`src/content/articles\`, Markdown articles, locale-specific dynamic article routes, shared \`ArticleLayout\`/\`BaseLayout\`, Tailwind typography, Astro sitemap integration and an Astro RSS endpoint. The existing layout owns canonical, hreflang, Open Graph, Twitter, Article/NewsArticle, ImageObject, BreadcrumbList and visible-FAQ extraction. No layout redesign was required.

## 2. Existing locales discovered

French (default), English, Spanish and Dutch. Route roots are \`/articles/\`, \`/en/articles/\`, \`/es/articulos/\` and \`/nl/artikelen/\`.

## 3–7. Titles, URLs, search intent, word counts and date

All 40 pages use publication and update date **2026-09-16**. Body counts below exclude frontmatter.

${groups}

## 8. Sources used

- Netflix newsroom and Netflix Tudum for the official Season 3 renewal and Guy Ritchie.
- Le360, published 14 September 2026, for the reported 13 September Rabat start and Erfoud mention.
- UK Companies House for \`MOONAGE PICTURES (THE GENTLEMEN) LIMITED\`.
- Dune Films' official credits page for its established Morocco production work.
- Centre cinématographique marocain for the conditional support framework and production ecosystem.
- UNESCO for Rabat's urban heritage description.
- Accrocar's public site for its luxury-rental/VIP-service positioning and real fleet/service URLs.
- Nine owner-supplied first-party images for the vehicle-operation audit.

## 9. Official, public and first-party facts

Official: Season 3 exists and Guy Ritchie returns to direct. Publicly reported: Moroccan filming, Rabat and Erfoud. First-party: Accrocar's involvement, its relationship account, and supply of vehicles within its entrusted scope. Visually documented: a Rolls-Royce Cullinan and Bentley Bentayga in the supplied corpus. Unverified and therefore not asserted: exact sets, scenes, actor movements, screen appearances, contract chain, budgets and fees. Full matrix: [CLAIM-AUDIT.md](./CLAIM-AUDIT.md).

## 10. Production-company naming conclusion

Published editorial copy standardizes the production-company reference as **MOONAGE PICTURES LIMITED**. Accrocar is described as having collaborated with Dune Films and MOONAGE PICTURES LIMITED in connection with vehicle needs for The Gentlemen in Morocco. Accrocar is never called an official Netflix partner and no direct Netflix contract is inferred. Companies House source citations keep the registered name of filing \`14115797\` (\`Moonage Pictures (The Gentlemen) Limited\`) because that is the exact title of that public record.

## 11–13. First-party asset inventory, used assets and exclusions

Nine visual files plus \`.DS_Store\` were inspected. Five originals produced nine article-facing derivatives/variants; three external images produced the remaining heroes. Four first-party files were deliberately withheld because they exposed plates, people, hotel/location identifiers or a sensitive operational environment. Full per-file decision log: [ASSET-INVENTORY.md](./ASSET-INVENTORY.md).

## 14. External images downloaded

Three reusable originals were sourced from their Wikimedia Commons pages: Hassan Tower by Petar Milošević (CC BY-SA 4.0), Merzouga dunes by Joe deSousa (CC0), and Atlas Film Studios by Manuel Heinemann (public domain). All are explicitly captioned as contextual, not evidence of a The Gentlemen set.

## 15. IMAGES.md status

\`IMAGES.md\` now records all 12 derivatives, original source, creator/publisher, date, location/context, rights, caption, evidence limitation and privacy edits. It also lists the four first-party assets withheld from publication.

## 16. Accrocar links

Articles 6–10 contain normal editorial links to [https://accrocar.com/](https://accrocar.com/) with five varied, localized anchors. Sources also link to the public about, VIP service and verified Rolls-Royce Cullinan pages. No tracking parameters or invented fleet URLs were added.

## 17. Internal links

The prescribed hub-and-spoke relationships are implemented in every locale: article 1 links to 2–6; Rabat/Erfoud link to the hub and location guide; the Morocco authority article links to the hub/ecosystem; Accrocar articles cross-link by logistics, cars, profile and ecosystem intent. The validator resolved every article-body internal link against the static build.

## 18. Canonical and hreflang

All 40 canonicals resolve to their own localized route. Every page exposes FR, EN, ES, NL and x-default alternates; x-default points to the French member of the same translation group. Validation errors: **0**.

## 19. Structured data

All pages contain Article or NewsArticle data with nested ImageObject, author, publisher and dates; BreadcrumbList; and FAQPage generated from visible FAQ content. No schema relationship identifies Accrocar as producer, Netflix partner or \`sameAs\` target.

## 20. Sitemap and RSS

All 40 routes occur in \`dist/sitemap-0.xml\`. All 10 French entries occur in \`dist/rss.xml\`, matching the repository's French-only feed behavior.

## 21. Checks

- \`npm run check\`: pass, 0 errors (existing repository hints only).
- \`npm run lint\`: pass.
- \`npm run format:check\`: pass.
- \`git diff --check\`: pass.
- \`npm run build\`: pass, 577 static pages.
- Cluster validator: pass, 40 pages / 10 translation groups / 0 errors.
- Responsive browser QA: 1440×900 and 390×844 viewport checks passed with no horizontal overflow; hero proportions, H1 wrapping, FAQ controls and related cards were present. The only browser warning was the expected blocked/ignored analytics event on localhost.

## 22. Files created

- 40 localized Markdown articles.
- 12 optimized WebP derivatives in \`public/images/articles/gentlemen-maroc/\`.
- \`scripts/build-gentlemen-assets.mjs\`, \`scripts/publish-gentlemen-cluster.mjs\`, and \`scripts/validate-gentlemen-cluster.mjs\`.
- This report, \`ASSET-INVENTORY.md\`, \`CLAIM-AUDIT.md\`, and \`validation.json\`.

## 23. Files modified

- \`IMAGES.md\` received the complete image register.
- Astro's generated content cache/schema changed during the normal content sync/build. No unrelated source page was intentionally modified.

## 24. Unresolved factual uncertainty

- The production-company name in published copy is standardized to MOONAGE PICTURES LIMITED; original first-party evidence files were not altered.
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
- All original \`/coulisse gentlemen/\` assets remain untouched.
`;

await writeFile("docs/editorial-2026-09-16-gentlemen/REPORT.md", report);
console.log("Wrote docs/editorial-2026-09-16-gentlemen/REPORT.md");
