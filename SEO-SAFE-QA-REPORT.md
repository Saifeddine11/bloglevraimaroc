# S.A.F.E Multilingual SEO/GEO QA Report

Date: 2026-08-05

## Supported Languages Detected

- French (`fr`)
- English (`en`)
- Spanish (`es`)
- Dutch (`nl`)

No new language was created.

## Implementation Summary

- S.A.F.E pages audited per language: 18.
- Total S.A.F.E pages audited: 72.
- Pages created per language: 0 new route families; existing localized route conventions were preserved.
- Pages updated per language: 18 through shared localized S.A.F.E copy, schema and route rendering.
- Localized PDF resources created: 4.
- Missing translations found in final generated SAFE audit: 0.
- Untranslated strings corrected in this pass: shared S.A.F.E definitions, cautions, disambiguation blocks, CTAs and PDF resource text across 4 languages.
- Literal or awkward translations rewritten: principal S.A.F.E page copy, pillar labels, FAQ answers, CTA labels and legal cautions for EN, ES and NL.
- Localized metadata fields corrected: 4 main S.A.F.E title/meta-description sets plus generated localized schema descriptions.
- Image alt texts translated/confirmed: 68 generated SAFE image references resolved with localized alt text from page copy.
- Image captions translated/confirmed: no separate visible captions were present in the audited SAFE templates.
- Tables translated/confirmed: S.A.F.E pillar/checklist blocks and PDF criteria tables localized in all 4 languages.
- FAQs translated/confirmed: 72 FAQPage schemas parsed and matched to visible localized FAQ content.
- Broken localized links corrected/found remaining: 0 remaining after internal-link scan.
- Incorrect canonicals corrected/found remaining: 0 remaining; every SAFE page has a self-referencing canonical.
- Hreflang issues corrected/found remaining: 0 remaining; every SAFE page has `fr`, `en`, `es`, `nl` and `x-default`.
- Language-switcher targets corrected/found remaining: 0 remaining; language-switcher hrefs resolve to equivalent localized routes.

## Exact Localized URL Matrix

| Page | FR | EN | ES | NL | Status |
| --- | --- | --- | --- | --- | --- |
| Main S.A.F.E | `/safe-certification-immobiliere/` | `/en/safe-real-estate-certification/` | `/es/certificacion-inmobiliaria-safe/` | `/nl/safe-vastgoedcertificering/` | Ready |
| Methodology | `/methode-safe-immobilier/` | `/en/safe-real-estate-methodology/` | `/es/metodo-safe-inmobiliario/` | `/nl/safe-vastgoedmethode/` | Ready |
| Grid | `/grille-safe-immobilier/` | `/en/safe-real-estate-grid/` | `/es/matriz-safe-inmobiliaria/` | `/nl/safe-vastgoedmatrix/` | Ready |
| Project analysis | `/analyse-projet-immobilier/` | `/en/real-estate-project-analysis/` | `/es/analisis-proyecto-inmobiliario/` | `/nl/vastgoedprojectanalyse/` | Ready |
| Off-plan S.A.F.E | `/safe-achat-sur-plan/` | `/en/safe-off-plan-property-purchase/` | `/es/safe-compra-sobre-plano/` | `/nl/safe-off-plan-vastgoedkopen/` | Ready |
| S.A.F.E investment | `/safe-investissement-immobilier/` | `/en/safe-property-investment/` | `/es/safe-inversion-inmobiliaria/` | `/nl/safe-vastgoedinvestering/` | Ready |
| Developer analysis | `/comment-analyser-promoteur/` | `/en/how-to-analyze-a-real-estate-developer/` | `/es/como-analizar-promotor-inmobiliario/` | `/nl/vastgoedontwikkelaar-analyseren/` | Ready |
| Off-plan checklist | `/checklist-achat-sur-plan/` | `/en/off-plan-property-checklist/` | `/es/checklist-compra-sobre-plano/` | `/nl/checklist-off-plan-kopen/` | Ready |
| Analysis guide | `/guide-analyse-immobiliere/` | `/en/real-estate-analysis-guide/` | `/es/guia-analisis-inmobiliario/` | `/nl/vastgoedanalyse-gids/` | Ready |
| Purchase risks | `/risques-achat-immobilier/` | `/en/property-purchase-risks/` | `/es/riesgos-compra-inmobiliaria/` | `/nl/risicos-vastgoedaankoop/` | Ready |
| Buy off-plan Morocco | `/acheter-sur-plan-maroc/` | `/en/buying-off-plan-morocco/` | `/es/comprar-sobre-plano-marruecos/` | `/nl/off-plan-kopen-marokko/` | Ready |
| Buy off-plan Marrakech | `/acheter-sur-plan-marrakech/` | `/en/buying-off-plan-marrakech/` | `/es/comprar-sobre-plano-marrakech/` | `/nl/off-plan-kopen-marrakech/` | Ready |
| Morocco purchase risks | `/risques-achat-immobilier-maroc/` | `/en/real-estate-risks-morocco/` | `/es/riesgos-compra-inmobiliaria-marruecos/` | `/nl/vastgoedrisicos-marokko/` | Ready |
| Check developer Morocco | `/comment-verifier-promoteur-immobilier-maroc/` | `/en/how-to-check-real-estate-developer-morocco/` | `/es/como-verificar-promotor-inmobiliario-marruecos/` | `/nl/vastgoedontwikkelaar-controleren-marokko/` | Ready |
| VEFA Morocco | `/vefa-maroc-garanties-risques/` | `/en/vefa-morocco-guarantees-risks/` | `/es/vefa-marruecos-garantias-riesgos/` | `/nl/vefa-marokko-garanties-risicos/` | Ready |
| Purchase documents | `/documents-achat-immobilier-maroc/` | `/en/real-estate-documents-morocco/` | `/es/documentos-compra-inmobiliaria-marruecos/` | `/nl/documenten-vastgoedkoop-marokko/` | Ready |
| New apartment delivery | `/livraison-appartement-neuf-maroc/` | `/en/new-apartment-delivery-morocco/` | `/es/entrega-apartamento-nuevo-marruecos/` | `/nl/oplevering-nieuw-appartement-marokko/` | Ready |
| Marrakech prices | `/prix-immobilier-marrakech/` | `/en/marrakech-property-prices/` | `/es/precios-inmobiliarios-marrakech/` | `/nl/vastgoedprijzen-marrakech/` | Ready |

## Localized PDF Resources

- French: `/downloads/checklist-safe-projet-immobilier-fr.pdf`
- English: `/downloads/safe-real-estate-project-checklist-en.pdf`
- Spanish: `/downloads/lista-verificacion-safe-proyecto-inmobiliario-es.pdf`
- Dutch: `/downloads/safe-checklist-vastgoedproject-nl.pdf`

Each PDF includes a localized title, criteria, warning, explanation, legal caution and the official definition `S.A.F.E — Security, Analysis, Fidelity & Expert Guidance`.

## Validation Results

| Check | Result |
| --- | --- |
| Production build | Passed |
| Generated page count | 318 static pages |
| `git diff --check` | Passed |
| Type check | Not completed: `astro check` requires installing `@astrojs/check` |
| Lint | No lint script exists in `package.json` |
| SAFE route scan | 72 of 72 static `index.html` files present |
| HTTP/static existence proxy | 72 of 72 generated files present; no local 404 targets |
| Indexability | 72 of 72 SAFE pages are not marked `noindex` |
| Canonical validation | 72 of 72 self-referencing canonicals valid |
| Hreflang validation | 72 of 72 reciprocal hreflang sets valid |
| HTML `lang` validation | 72 of 72 match the project locale config |
| Language-switcher targets | 72 of 72 equivalent routes resolve |
| JSON-LD syntax | 568 JSON-LD blocks parsed successfully |
| FAQ/schema parity | 72 FAQPage schemas matched visible localized FAQ text |
| Internal-link scan | 4,211 local href references resolved |
| Image-path scan | 68 image references resolved |
| Download-path scan | 4 of 4 PDFs copied to `dist/downloads/` |
| Old S.A.F.E acronym scan | 0 old/incorrect acronym expansions found |
| Wrong-language fragment scan | 0 targeted French/English fragments found in the wrong SAFE locale |

## Final Verdict

French, English, Spanish and Dutch S.A.F.E pages are production-ready. The official S.A.F.E meaning is consistent in every language, S.A.F.E is presented as a methodology rather than an agency or official certification, legal limits remain accurate, localized URLs build as static pages, and no old acronym wording remains.
