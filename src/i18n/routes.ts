import { SITE } from '@/data/site';
import { defaultLocale, localePrefix, locales, type Locale } from './config';

export type RouteKey =
  | 'home'
  | 'blog'
  | 'immobilier'
  | 'tourisme'
  | 'investissement'
  | 'quartiers'
  | 'guides'
  | 'analyses'
  | 'safe'
  | 'methodeSafe'
  | 'grilleSafe'
  | 'analyseProjetImmobilier'
  | 'safeAchatSurPlan'
  | 'safeInvestissement'
  | 'commentAnalyserPromoteur'
  | 'checklistAchatSurPlan'
  | 'guideAnalyseImmobiliere'
  | 'risquesAchatImmobilier'
  | 'acheterSurPlanMaroc'
  | 'acheterSurPlanMarrakech'
  | 'risquesAchatMaroc'
  | 'verifierPromoteur'
  | 'vefaMaroc'
  | 'documentsAchat'
  | 'livraisonAppartement'
  | 'prixMarrakech'
  | 'contact'
  | 'about'
  | 'legal'
  | 'privacy'
  | 'notFound';

export const articleRootByLocale: Record<Locale, string> = {
  fr: 'articles',
  en: 'articles',
  es: 'articulos',
  nl: 'artikelen',
};

export const routeSlugs: Record<Locale, Record<RouteKey, string>> = {
  fr: {
    home: '',
    blog: 'blog',
    immobilier: 'immobilier',
    tourisme: 'tourisme',
    investissement: 'investissement',
    quartiers: 'quartiers',
    guides: 'guides',
    analyses: 'analyses',
    safe: 'safe-certification-immobiliere',
    methodeSafe: 'methode-safe-immobilier',
    grilleSafe: 'grille-safe-immobilier',
    analyseProjetImmobilier: 'analyse-projet-immobilier',
    safeAchatSurPlan: 'safe-achat-sur-plan',
    safeInvestissement: 'safe-investissement-immobilier',
    commentAnalyserPromoteur: 'comment-analyser-promoteur',
    checklistAchatSurPlan: 'checklist-achat-sur-plan',
    guideAnalyseImmobiliere: 'guide-analyse-immobiliere',
    risquesAchatImmobilier: 'risques-achat-immobilier',
    acheterSurPlanMaroc: 'acheter-sur-plan-maroc',
    acheterSurPlanMarrakech: 'acheter-sur-plan-marrakech',
    risquesAchatMaroc: 'risques-achat-immobilier-maroc',
    verifierPromoteur: 'comment-verifier-promoteur-immobilier-maroc',
    vefaMaroc: 'vefa-maroc-garanties-risques',
    documentsAchat: 'documents-achat-immobilier-maroc',
    livraisonAppartement: 'livraison-appartement-neuf-maroc',
    prixMarrakech: 'prix-immobilier-marrakech',
    contact: 'contact',
    about: 'a-propos',
    legal: 'mentions-legales',
    privacy: 'confidentialite',
    notFound: '404',
  },
  en: {
    home: '',
    blog: 'blog',
    immobilier: 'real-estate',
    tourisme: 'tourism',
    investissement: 'investment',
    quartiers: 'neighborhoods',
    guides: 'guides',
    analyses: 'analysis',
    safe: 'safe-real-estate-certification',
    methodeSafe: 'safe-real-estate-methodology',
    grilleSafe: 'safe-real-estate-grid',
    analyseProjetImmobilier: 'real-estate-project-analysis',
    safeAchatSurPlan: 'safe-off-plan-property-purchase',
    safeInvestissement: 'safe-property-investment',
    commentAnalyserPromoteur: 'how-to-analyze-a-real-estate-developer',
    checklistAchatSurPlan: 'off-plan-property-checklist',
    guideAnalyseImmobiliere: 'real-estate-analysis-guide',
    risquesAchatImmobilier: 'property-purchase-risks',
    acheterSurPlanMaroc: 'buying-off-plan-morocco',
    acheterSurPlanMarrakech: 'buying-off-plan-marrakech',
    risquesAchatMaroc: 'real-estate-risks-morocco',
    verifierPromoteur: 'how-to-check-real-estate-developer-morocco',
    vefaMaroc: 'vefa-morocco-guarantees-risks',
    documentsAchat: 'real-estate-documents-morocco',
    livraisonAppartement: 'new-apartment-delivery-morocco',
    prixMarrakech: 'marrakech-property-prices',
    contact: 'contact',
    about: 'about',
    legal: 'legal-notice',
    privacy: 'privacy-policy',
    notFound: '404',
  },
  es: {
    home: '',
    blog: 'blog',
    immobilier: 'inmobiliario',
    tourisme: 'turismo',
    investissement: 'inversion',
    quartiers: 'barrios',
    guides: 'guias',
    analyses: 'analisis',
    safe: 'certificacion-inmobiliaria-safe',
    methodeSafe: 'metodo-safe-inmobiliario',
    grilleSafe: 'matriz-safe-inmobiliaria',
    analyseProjetImmobilier: 'analisis-proyecto-inmobiliario',
    safeAchatSurPlan: 'safe-compra-sobre-plano',
    safeInvestissement: 'safe-inversion-inmobiliaria',
    commentAnalyserPromoteur: 'como-analizar-promotor-inmobiliario',
    checklistAchatSurPlan: 'checklist-compra-sobre-plano',
    guideAnalyseImmobiliere: 'guia-analisis-inmobiliario',
    risquesAchatImmobilier: 'riesgos-compra-inmobiliaria',
    acheterSurPlanMaroc: 'comprar-sobre-plano-marruecos',
    acheterSurPlanMarrakech: 'comprar-sobre-plano-marrakech',
    risquesAchatMaroc: 'riesgos-compra-inmobiliaria-marruecos',
    verifierPromoteur: 'como-verificar-promotor-inmobiliario-marruecos',
    vefaMaroc: 'vefa-marruecos-garantias-riesgos',
    documentsAchat: 'documentos-compra-inmobiliaria-marruecos',
    livraisonAppartement: 'entrega-apartamento-nuevo-marruecos',
    prixMarrakech: 'precios-inmobiliarios-marrakech',
    contact: 'contacto',
    about: 'sobre-nosotros',
    legal: 'aviso-legal',
    privacy: 'politica-privacidad',
    notFound: '404',
  },
  nl: {
    home: '',
    blog: 'blog',
    immobilier: 'vastgoed',
    tourisme: 'toerisme',
    investissement: 'investeren',
    quartiers: 'wijken',
    guides: 'gidsen',
    analyses: 'analyses',
    safe: 'safe-vastgoedcertificering',
    methodeSafe: 'safe-vastgoedmethode',
    grilleSafe: 'safe-vastgoedmatrix',
    analyseProjetImmobilier: 'vastgoedprojectanalyse',
    safeAchatSurPlan: 'safe-off-plan-vastgoedkopen',
    safeInvestissement: 'safe-vastgoedinvestering',
    commentAnalyserPromoteur: 'vastgoedontwikkelaar-analyseren',
    checklistAchatSurPlan: 'checklist-off-plan-kopen',
    guideAnalyseImmobiliere: 'vastgoedanalyse-gids',
    risquesAchatImmobilier: 'risicos-vastgoedaankoop',
    acheterSurPlanMaroc: 'off-plan-kopen-marokko',
    acheterSurPlanMarrakech: 'off-plan-kopen-marrakech',
    risquesAchatMaroc: 'vastgoedrisicos-marokko',
    verifierPromoteur: 'vastgoedontwikkelaar-controleren-marokko',
    vefaMaroc: 'vefa-marokko-garanties-risicos',
    documentsAchat: 'documenten-vastgoedkoop-marokko',
    livraisonAppartement: 'oplevering-nieuw-appartement-marokko',
    prixMarrakech: 'vastgoedprijzen-marrakech',
    contact: 'contact',
    about: 'over-ons',
    legal: 'juridische-vermelding',
    privacy: 'privacybeleid',
    notFound: '404',
  },
};

export const categoryRouteKeys = {
  immobilier: 'immobilier',
  tourisme: 'tourisme',
  investissement: 'investissement',
  quartiers: 'quartiers',
  guides: 'guides',
  analyses: 'analyses',
} as const satisfies Record<string, RouteKey>;

export const safeRouteKeys = [
  'methodeSafe',
  'grilleSafe',
  'analyseProjetImmobilier',
  'safeAchatSurPlan',
  'safeInvestissement',
  'commentAnalyserPromoteur',
  'checklistAchatSurPlan',
  'guideAnalyseImmobiliere',
  'risquesAchatImmobilier',
  'acheterSurPlanMaroc',
  'acheterSurPlanMarrakech',
  'risquesAchatMaroc',
  'verifierPromoteur',
  'vefaMaroc',
  'documentsAchat',
  'livraisonAppartement',
  'prixMarrakech',
] as const;

export function localizedPath(locale: Locale, key: RouteKey): string {
  const slug = routeSlugs[locale][key];
  const prefix = localePrefix(locale);
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

export function absoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url.replace(/\/$/, '')}${cleanPath}`;
}

export function articlePath(locale: Locale, slug: string): string {
  return `${localePrefix(locale)}/${articleRootByLocale[locale]}/${slug}`;
}

export function staticAlternates(key: RouteKey): Record<Locale, string> {
  return Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localizedPath(locale, key))])) as Record<
    Locale,
    string
  >;
}

export function withXDefault(alternates: Record<Locale, string>): Record<Locale | 'x-default', string> {
  return { ...alternates, 'x-default': alternates[defaultLocale] };
}

export function routeKeyFromPathname(pathname: string): RouteKey | undefined {
  const normalized = pathname.replace(/\/$/, '') || '/';
  for (const locale of locales) {
    for (const [key, slug] of Object.entries(routeSlugs[locale]) as [RouteKey, string][]) {
      const path = localizedPath(locale, key).replace(/\/$/, '') || '/';
      if (normalized === path) return key;
    }
  }
  return undefined;
}

export function alternatesForPath(pathname: string): Record<Locale | 'x-default', string> | undefined {
  const key = routeKeyFromPathname(pathname);
  return key ? withXDefault(staticAlternates(key)) : undefined;
}

export function localizedInternalHref(href: string, locale: Locale): string {
  if (locale === defaultLocale || !href.startsWith('/')) return href;
  if (href.startsWith(`/${locale}/`)) return href;
  const [path, hash = ''] = href.split('#');
  const key = routeKeyFromPathname(path);
  if (key) return `${localizedPath(locale, key)}${hash ? `#${hash}` : ''}`;
  return `${localePrefix(locale)}${href}`;
}

export function localeFromRouteParam(locale: string | undefined): Locale {
  return locales.includes(locale as Locale) && locale !== defaultLocale ? (locale as Locale) : defaultLocale;
}
