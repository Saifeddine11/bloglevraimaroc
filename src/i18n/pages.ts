import type { Locale } from './config';
import type { RouteKey } from './routes';

export interface CategoryCopy {
  key: 'immobilier' | 'tourisme' | 'investissement' | 'quartiers' | 'guides' | 'analyses';
  label: string;
  labelPlural: string;
  title: string;
  accent: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface StaticPageCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  accent?: string;
  intro: string;
  sections?: { heading: string; body: string[]; bullets?: string[] }[];
}

export interface SafePageCopy extends StaticPageCopy {
  introParagraphs?: string[];
  directAnswers: { title: string; answer: string }[];
  checks: { label: string; text: string }[];
  levels: { label: string; text: string }[];
  formulas: { label: string; text: string }[];
  faq: { question: string; answer: string }[];
  downloadHref: string;
  downloadTitle: string;
  downloadLabel: string;
  disambiguation: string;
  legalCaution: string;
}

export interface SafeClusterCopy extends StaticPageCopy {
  routeKey: RouteKey;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  checklistTitle: string;
  checklistItems: string[];
  faq: { question: string; answer: string }[];
  relatedRouteKeys: RouteKey[];
  relatedArticleKeys?: string[];
  disclaimer: string;
}

export const homeCopy: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroAccent: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    editionEyebrow: string;
    editionTitle: string;
    editionAccent: string;
    editionText: string;
    latestEyebrow: string;
    latestTitle: string;
    latestAccent: string;
    viewAll: string;
    rubriquesEyebrow: string;
    rubriquesTitle: string;
    rubriquesAccent: string;
    rubriquesText: string;
    guidesEyebrow: string;
    guidesTitle: string;
    guidesAccent: string;
    neighborhoodsTitle: string;
    neighborhoodsAccent: string;
    statsEyebrow: string;
    statsTitle: string;
    statsAccent: string;
  }
> = {
  fr: {
    metaTitle: 'Le Vrai Maroc — Immobilier, tourisme et investissement à Marrakech',
    metaDescription:
      "Le Vrai Maroc décrypte l'immobilier, le tourisme, l'investissement et les tendances urbaines au Maroc, avec une première édition consacrée à Marrakech.",
    heroEyebrow: 'Média éditorial indépendant',
    heroTitle: 'Comprendre le |vrai Maroc|',
    heroAccent: 'À commencer par Marrakech',
    heroSubtitle:
      "Le Vrai Maroc décrypte l'immobilier, le tourisme, l'investissement et les tendances urbaines, avec une première édition consacrée à Marrakech.",
    ctaPrimary: 'Explorer Marrakech',
    ctaSecondary: 'Lire les analyses',
    editionEyebrow: 'Première verticale éditoriale',
    editionTitle: 'Édition',
    editionAccent: 'Marrakech',
    editionText:
      'Notre première édition locale décrypte Marrakech : quartiers, immobilier, tourisme, investissements, adresses utiles et réalités du terrain.',
    latestEyebrow: 'Éditorial',
    latestTitle: 'Dernières',
    latestAccent: 'analyses',
    viewAll: 'Voir tout',
    rubriquesEyebrow: 'Le Vrai Maroc',
    rubriquesTitle: '6 rubriques,',
    rubriquesAccent: 'une ambition',
    rubriquesText:
      'Immobilier, tourisme, investissement, quartiers, guides pratiques et analyses de marché — Le Vrai Maroc couvre le Maroc réel.',
    guidesEyebrow: 'Guides pratiques',
    guidesTitle: 'Comprendre avant',
    guidesAccent: "d'acheter",
    neighborhoodsTitle: 'Quartiers de',
    neighborhoodsAccent: 'Marrakech',
    statsEyebrow: 'Données clés 2025–2026',
    statsTitle: 'Marrakech',
    statsAccent: 'en chiffres',
  },
  en: {
    metaTitle: 'Le Vrai Maroc — Real Estate, Tourism and Investment in Marrakech',
    metaDescription:
      'Le Vrai Maroc explains real estate, tourism, investment and urban trends in Morocco, starting with Marrakech.',
    heroEyebrow: 'Independent editorial media',
    heroTitle: 'Understand the |real Morocco|',
    heroAccent: 'Starting with Marrakech',
    heroSubtitle:
      'Le Vrai Maroc explains real estate, tourism, investment and urban trends, with a first local edition focused on Marrakech.',
    ctaPrimary: 'Explore Marrakech',
    ctaSecondary: 'Read analysis',
    editionEyebrow: 'First editorial vertical',
    editionTitle: 'Marrakech',
    editionAccent: 'edition',
    editionText:
      'Our first local edition decodes Marrakech: neighborhoods, real estate, tourism, investment, useful addresses and on-the-ground realities.',
    latestEyebrow: 'Editorial',
    latestTitle: 'Latest',
    latestAccent: 'analysis',
    viewAll: 'View all',
    rubriquesEyebrow: 'Le Vrai Maroc',
    rubriquesTitle: '6 sections,',
    rubriquesAccent: 'one ambition',
    rubriquesText:
      'Real estate, tourism, investment, neighborhoods, practical guides and market analysis — Le Vrai Maroc covers the real Morocco.',
    guidesEyebrow: 'Practical guides',
    guidesTitle: 'Understand before',
    guidesAccent: 'you buy',
    neighborhoodsTitle: 'Marrakech',
    neighborhoodsAccent: 'neighborhoods',
    statsEyebrow: 'Key data 2025–2026',
    statsTitle: 'Marrakech',
    statsAccent: 'in numbers',
  },
  es: {
    metaTitle: 'Le Vrai Maroc — Inmobiliario, turismo e inversión en Marrakech',
    metaDescription:
      'Le Vrai Maroc analiza el inmobiliario, el turismo, la inversión y las tendencias urbanas de Marruecos, empezando por Marrakech.',
    heroEyebrow: 'Medio editorial independiente',
    heroTitle: 'Entender el |Marruecos real|',
    heroAccent: 'Empezando por Marrakech',
    heroSubtitle:
      'Le Vrai Maroc analiza el inmobiliario, el turismo, la inversión y las tendencias urbanas, con una primera edición dedicada a Marrakech.',
    ctaPrimary: 'Explorar Marrakech',
    ctaSecondary: 'Leer análisis',
    editionEyebrow: 'Primera vertical editorial',
    editionTitle: 'Edición',
    editionAccent: 'Marrakech',
    editionText:
      'Nuestra primera edición local descifra Marrakech: barrios, inmobiliario, turismo, inversiones, direcciones útiles y realidad del terreno.',
    latestEyebrow: 'Editorial',
    latestTitle: 'Últimos',
    latestAccent: 'análisis',
    viewAll: 'Ver todo',
    rubriquesEyebrow: 'Le Vrai Maroc',
    rubriquesTitle: '6 secciones,',
    rubriquesAccent: 'una ambición',
    rubriquesText:
      'Inmobiliario, turismo, inversión, barrios, guías prácticas y análisis de mercado: Le Vrai Maroc cubre el Marruecos real.',
    guidesEyebrow: 'Guías prácticas',
    guidesTitle: 'Entender antes',
    guidesAccent: 'de comprar',
    neighborhoodsTitle: 'Barrios de',
    neighborhoodsAccent: 'Marrakech',
    statsEyebrow: 'Datos clave 2025–2026',
    statsTitle: 'Marrakech',
    statsAccent: 'en cifras',
  },
  nl: {
    metaTitle: 'Le Vrai Maroc — Vastgoed, toerisme en investeren in Marrakech',
    metaDescription:
      'Le Vrai Maroc duidt vastgoed, toerisme, investeren en stedelijke trends in Marokko, te beginnen met Marrakech.',
    heroEyebrow: 'Onafhankelijk redactioneel medium',
    heroTitle: 'Begrijp het |echte Marokko|',
    heroAccent: 'Te beginnen met Marrakech',
    heroSubtitle:
      'Le Vrai Maroc duidt vastgoed, toerisme, investeren en stedelijke trends, met een eerste lokale editie over Marrakech.',
    ctaPrimary: 'Ontdek Marrakech',
    ctaSecondary: 'Lees analyses',
    editionEyebrow: 'Eerste redactionele vertical',
    editionTitle: 'Editie',
    editionAccent: 'Marrakech',
    editionText:
      'Onze eerste lokale editie duidt Marrakech: wijken, vastgoed, toerisme, investeren, nuttige adressen en realiteit ter plaatse.',
    latestEyebrow: 'Redactie',
    latestTitle: 'Laatste',
    latestAccent: 'analyses',
    viewAll: 'Alles bekijken',
    rubriquesEyebrow: 'Le Vrai Maroc',
    rubriquesTitle: '6 rubrieken,',
    rubriquesAccent: 'één ambitie',
    rubriquesText:
      'Vastgoed, toerisme, investeren, wijken, praktische gidsen en marktanalyses — Le Vrai Maroc behandelt het echte Marokko.',
    guidesEyebrow: 'Praktische gidsen',
    guidesTitle: 'Begrijpen voordat',
    guidesAccent: 'je koopt',
    neighborhoodsTitle: 'Wijken van',
    neighborhoodsAccent: 'Marrakech',
    statsEyebrow: 'Kerncijfers 2025–2026',
    statsTitle: 'Marrakech',
    statsAccent: 'in cijfers',
  },
};

export const categoryCopies: Record<Locale, Record<CategoryCopy['key'], CategoryCopy>> = {
  fr: {
    immobilier: {
      key: 'immobilier',
      label: 'Immobilier',
      labelPlural: 'Immobilier',
      title: 'Immobilier',
      accent: 'à Marrakech',
      description:
        "Prix, tendances, quartiers, guides d'achat et actualité du marché immobilier à Marrakech.",
      metaTitle: "Immobilier à Marrakech — Prix, tendances et guides d'achat",
      metaDescription:
        "Toutes nos analyses sur le marché immobilier à Marrakech : prix au m², tendances 2026, guides d'achat, comparatif quartiers, riads et villas.",
    },
    tourisme: {
      key: 'tourisme',
      label: 'Tourisme',
      labelPlural: 'Tourisme',
      title: 'Tourisme',
      accent: 'à Marrakech',
      description:
        "Tendances touristiques, hôtellerie, événements et impact économique du tourisme à Marrakech.",
      metaTitle: 'Tourisme à Marrakech — Tendances, hôtellerie et impact immobilier',
      metaDescription:
        'Analyses sur le tourisme à Marrakech : fréquentation, hôtellerie, infrastructures, location courte durée et impact immobilier.',
    },
    investissement: {
      key: 'investissement',
      label: 'Investissement',
      labelPlural: 'Investissement',
      title: 'Investir',
      accent: 'à Marrakech',
      description:
        'Rendements, fiscalité, risques et opportunités pour les investisseurs immobiliers à Marrakech.',
      metaTitle: 'Investissement immobilier à Marrakech — Rendements et risques',
      metaDescription:
        'Analyses pour investir à Marrakech : budgets, rendements locatifs, fiscalité, risques et scénarios de marché.',
    },
    quartiers: {
      key: 'quartiers',
      label: 'Quartiers',
      labelPlural: 'Quartiers',
      title: 'Quartiers',
      accent: 'de Marrakech',
      description:
        "Guides détaillés sur les quartiers de Marrakech : ambiance, prix, accessibilité, profil d'acheteur.",
      metaTitle: 'Quartiers de Marrakech — Où acheter et investir',
      metaDescription:
        'Guides sur Guéliz, Hivernage, Palmeraie, Agdal, Targa et les zones à suivre pour acheter ou investir.',
    },
    guides: {
      key: 'guides',
      label: 'Guides pratiques',
      labelPlural: 'Guides pratiques',
      title: 'Guides',
      accent: 'pratiques',
      description:
        "Guides pratiques pour acheter, investir, louer ou s'installer à Marrakech.",
      metaTitle: 'Guides pratiques Marrakech — Achat, investissement, installation',
      metaDescription:
        "Guides pratiques pour acheter, investir, louer ou s'installer à Marrakech. Procédures, pièges à éviter, conseils d'experts.",
    },
    analyses: {
      key: 'analyses',
      label: 'Analyses',
      labelPlural: 'Analyses',
      title: 'Analyses',
      accent: 'de marché',
      description:
        "Analyses de fond et perspectives de marché sur l'immobilier et le tourisme à Marrakech.",
      metaTitle: 'Analyses Marrakech — Marché immobilier, tourisme et investissement',
      metaDescription:
        'Analyses de fond sur Marrakech : immobilier, tourisme, infrastructures, scénarios 2030 et signaux de marché.',
    },
  },
  en: {
    immobilier: {
      key: 'immobilier',
      label: 'Real Estate',
      labelPlural: 'Real Estate',
      title: 'Real estate',
      accent: 'in Marrakech',
      description:
        'Prices, trends, neighborhoods, buying guides and real estate market news in Marrakech.',
      metaTitle: 'Marrakech Real Estate — Prices, Trends and Buying Guides',
      metaDescription:
        'All our analysis on the Marrakech real estate market: price per square meter, 2026 trends, buying guides, neighborhoods, riads and villas.',
    },
    tourisme: {
      key: 'tourisme',
      label: 'Tourism',
      labelPlural: 'Tourism',
      title: 'Tourism',
      accent: 'in Marrakech',
      description:
        'Tourism trends, hospitality, events and the economic impact of tourism in Marrakech.',
      metaTitle: 'Tourism in Marrakech — Trends, Hospitality and Property Impact',
      metaDescription:
        'Analysis of tourism in Marrakech: visitor flows, hospitality, infrastructure, short-term rentals and real estate impact.',
    },
    investissement: {
      key: 'investissement',
      label: 'Investment',
      labelPlural: 'Investment',
      title: 'Investing',
      accent: 'in Marrakech',
      description:
        'Yields, tax considerations, risks and opportunities for real estate investors in Marrakech.',
      metaTitle: 'Marrakech Real Estate Investment — Yields and Risks',
      metaDescription:
        'Analysis for investing in Marrakech: budgets, rental yields, tax issues, risks and market scenarios.',
    },
    quartiers: {
      key: 'quartiers',
      label: 'Neighborhoods',
      labelPlural: 'Neighborhoods',
      title: 'Marrakech',
      accent: 'neighborhoods',
      description:
        'Detailed guides to Marrakech neighborhoods: atmosphere, prices, accessibility and buyer profiles.',
      metaTitle: 'Marrakech Neighborhoods — Where to Buy and Invest',
      metaDescription:
        'Guides to Guéliz, Hivernage, Palmeraie, Agdal, Targa and emerging areas for buyers and investors.',
    },
    guides: {
      key: 'guides',
      label: 'Guides',
      labelPlural: 'Guides',
      title: 'Practical',
      accent: 'guides',
      description:
        'Practical guides for buying, investing, renting or settling in Marrakech.',
      metaTitle: 'Marrakech Practical Guides — Buying, Investment, Relocation',
      metaDescription:
        'Practical guides for buying, investing, renting or settling in Marrakech: processes, risks and expert-style checklists.',
    },
    analyses: {
      key: 'analyses',
      label: 'Analysis',
      labelPlural: 'Analysis',
      title: 'Market',
      accent: 'analysis',
      description:
        'In-depth analysis and market perspectives on real estate and tourism in Marrakech.',
      metaTitle: 'Marrakech Analysis — Real Estate, Tourism and Investment',
      metaDescription:
        'In-depth analysis of Marrakech: real estate, tourism, infrastructure, 2030 scenarios and market signals.',
    },
  },
  es: {
    immobilier: {
      key: 'immobilier',
      label: 'Inmobiliario',
      labelPlural: 'Inmobiliario',
      title: 'Inmobiliario',
      accent: 'en Marrakech',
      description:
        'Precios, tendencias, barrios, guías de compra y actualidad del mercado inmobiliario de Marrakech.',
      metaTitle: 'Inmobiliario en Marrakech — Precios, tendencias y guías',
      metaDescription:
        'Análisis del mercado inmobiliario de Marrakech: precio por m², tendencias 2026, guías de compra, barrios, riads y villas.',
    },
    tourisme: {
      key: 'tourisme',
      label: 'Turismo',
      labelPlural: 'Turismo',
      title: 'Turismo',
      accent: 'en Marrakech',
      description:
        'Tendencias turísticas, hotelería, eventos e impacto económico del turismo en Marrakech.',
      metaTitle: 'Turismo en Marrakech — Tendencias, hotelería e impacto inmobiliario',
      metaDescription:
        'Análisis del turismo en Marrakech: visitantes, hotelería, infraestructuras, alquiler turístico e impacto inmobiliario.',
    },
    investissement: {
      key: 'investissement',
      label: 'Inversión',
      labelPlural: 'Inversión',
      title: 'Invertir',
      accent: 'en Marrakech',
      description:
        'Rentabilidades, fiscalidad, riesgos y oportunidades para inversores inmobiliarios en Marrakech.',
      metaTitle: 'Inversión inmobiliaria en Marrakech — Rentabilidad y riesgos',
      metaDescription:
        'Análisis para invertir en Marrakech: presupuestos, rentabilidad, fiscalidad, riesgos y escenarios de mercado.',
    },
    quartiers: {
      key: 'quartiers',
      label: 'Barrios',
      labelPlural: 'Barrios',
      title: 'Barrios',
      accent: 'de Marrakech',
      description:
        'Guías detalladas de los barrios de Marrakech: ambiente, precios, accesibilidad y perfil comprador.',
      metaTitle: 'Barrios de Marrakech — Dónde comprar e invertir',
      metaDescription:
        'Guías sobre Guéliz, Hivernage, Palmeraie, Agdal, Targa y zonas emergentes para compradores e inversores.',
    },
    guides: {
      key: 'guides',
      label: 'Guías',
      labelPlural: 'Guías',
      title: 'Guías',
      accent: 'prácticas',
      description:
        'Guías prácticas para comprar, invertir, alquilar o instalarse en Marrakech.',
      metaTitle: 'Guías prácticas Marrakech — Compra, inversión, instalación',
      metaDescription:
        'Guías prácticas para comprar, invertir, alquilar o instalarse en Marrakech: procesos, riesgos y listas de verificación.',
    },
    analyses: {
      key: 'analyses',
      label: 'Análisis',
      labelPlural: 'Análisis',
      title: 'Análisis',
      accent: 'de mercado',
      description:
        'Análisis de fondo y perspectivas de mercado sobre inmobiliario y turismo en Marrakech.',
      metaTitle: 'Análisis Marrakech — Inmobiliario, turismo e inversión',
      metaDescription:
        'Análisis de fondo sobre Marrakech: inmobiliario, turismo, infraestructuras, escenarios 2030 y señales de mercado.',
    },
  },
  nl: {
    immobilier: {
      key: 'immobilier',
      label: 'Vastgoed',
      labelPlural: 'Vastgoed',
      title: 'Vastgoed',
      accent: 'in Marrakech',
      description:
        'Prijzen, trends, wijken, koopgidsen en nieuws over de vastgoedmarkt in Marrakech.',
      metaTitle: 'Vastgoed in Marrakech — Prijzen, trends en koopgidsen',
      metaDescription:
        'Analyses van de vastgoedmarkt in Marrakech: m²-prijzen, trends voor 2026, koopgidsen, wijken, riads en villa’s.',
    },
    tourisme: {
      key: 'tourisme',
      label: 'Toerisme',
      labelPlural: 'Toerisme',
      title: 'Toerisme',
      accent: 'in Marrakech',
      description:
        'Toeristische trends, hotellerie, evenementen en economische impact van toerisme in Marrakech.',
      metaTitle: 'Toerisme in Marrakech — Trends, hotellerie en vastgoedimpact',
      metaDescription:
        'Analyses van toerisme in Marrakech: bezoekers, hotellerie, infrastructuur, kortetermijnverhuur en vastgoedimpact.',
    },
    investissement: {
      key: 'investissement',
      label: 'Investeren',
      labelPlural: 'Investeren',
      title: 'Investeren',
      accent: 'in Marrakech',
      description:
        'Rendementen, fiscaliteit, risico’s en kansen voor vastgoedinvesteerders in Marrakech.',
      metaTitle: 'Investeren in vastgoed in Marrakech — Rendement en risico’s',
      metaDescription:
        'Analyses voor investeren in Marrakech: budgetten, huurrendement, fiscale aandachtspunten, risico’s en marktscenario’s.',
    },
    quartiers: {
      key: 'quartiers',
      label: 'Wijken',
      labelPlural: 'Wijken',
      title: 'Wijken',
      accent: 'van Marrakech',
      description:
        'Gedetailleerde gidsen over wijken in Marrakech: sfeer, prijzen, bereikbaarheid en kopersprofielen.',
      metaTitle: 'Wijken van Marrakech — Waar kopen en investeren',
      metaDescription:
        'Gidsen over Guéliz, Hivernage, Palmeraie, Agdal, Targa en opkomende zones voor kopers en investeerders.',
    },
    guides: {
      key: 'guides',
      label: 'Gidsen',
      labelPlural: 'Gidsen',
      title: 'Praktische',
      accent: 'gidsen',
      description:
        'Praktische gidsen voor kopen, investeren, huren of wonen in Marrakech.',
      metaTitle: 'Praktische gidsen Marrakech — Kopen, investeren, vestigen',
      metaDescription:
        'Praktische gidsen voor kopen, investeren, huren of vestigen in Marrakech: stappen, risico’s en checklists.',
    },
    analyses: {
      key: 'analyses',
      label: 'Analyses',
      labelPlural: 'Analyses',
      title: 'Markt',
      accent: 'analyses',
      description:
        'Diepgaande analyses en marktperspectieven over vastgoed en toerisme in Marrakech.',
      metaTitle: 'Analyses Marrakech — Vastgoed, toerisme en investeren',
      metaDescription:
        'Diepgaande analyses over Marrakech: vastgoed, toerisme, infrastructuur, scenario’s richting 2030 en marktsignalen.',
    },
  },
};

export const staticPages: Record<Locale, Record<'blog' | 'about' | 'legal' | 'privacy' | 'notFound', StaticPageCopy>> = {
  fr: {
    blog: {
      metaTitle: 'Blog — Toutes les analyses',
      metaDescription:
        "Toutes nos analyses éditoriales sur l'immobilier, le tourisme et l'investissement à Marrakech. Filtrez par catégorie ou recherchez un sujet.",
      eyebrow: 'Toutes les analyses',
      h1: 'Le blog Le Vrai Maroc',
      intro:
        "Analyses de marché, guides pratiques, décryptages. Tout ce qu'il faut comprendre avant d'acheter, d'investir ou de visiter Marrakech.",
    },
    about: {
      metaTitle: 'À propos',
      metaDescription:
        "Le Vrai Maroc est un média éditorial indépendant dédié à l'analyse objective de l'immobilier, du tourisme et de l'investissement à Marrakech.",
      eyebrow: 'Qui sommes-nous ?',
      h1: 'Un regard indépendant sur Marrakech',
      intro:
        "Le Vrai Maroc est un média éditorial indépendant dédié à l'analyse de l'immobilier, du tourisme et de l'investissement à Marrakech.",
      sections: [
        {
          heading: 'Notre mission',
          body: [
            "Marrakech est fascinante, dynamique et souvent mal comprise. Entre discours commerciaux et réalité du terrain, il manquait un espace éditorial honnête.",
            "Nous analysons les données disponibles, citons nos sources, nuançons nos propos et écrivons pour des lecteurs qui veulent comprendre avant d'agir.",
          ],
        },
        {
          heading: 'Ce que nous faisons',
          body: [
            "Nous publions des analyses de marché, des guides pratiques, des portraits de quartiers, des perspectives 2026–2030 et des éclairages sur les risques.",
          ],
          bullets: [
            'Tendances du marché immobilier à Marrakech.',
            'Dynamiques touristiques et hôtelières.',
            'Guides pour acheteurs, investisseurs et expatriés.',
            'Éclairages sur réglementation, fiscalité et prudence acheteur.',
          ],
        },
        {
          heading: 'Ce que nous ne faisons pas',
          body: [
            "Nous ne vendons pas de biens, ne publions pas de communiqués promotionnels déguisés et ne prétendons pas remplacer les professionnels qualifiés.",
          ],
        },
      ],
    },
    legal: {
      metaTitle: 'Mentions légales',
      metaDescription: 'Mentions légales du site Le Vrai Maroc.',
      eyebrow: 'Informations légales',
      h1: 'Mentions légales',
      intro: 'Le site Le Vrai Maroc est un média éditorial indépendant.',
      sections: [
        { heading: 'Éditeur du site', body: ['Le site Le Vrai Maroc est édité comme média éditorial indépendant. Contact : contact@levraimaroc.com.'] },
        { heading: 'Hébergement', body: ["Ce site est hébergé sur une infrastructure statique. Les informations d'hébergement seront précisées après déploiement."] },
        { heading: 'Propriété intellectuelle', body: ['Le contenu publié sur ce site est la propriété de Le Vrai Maroc, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.'] },
        { heading: 'Avertissement', body: ['Les analyses sont éditoriales et informatives. Elles ne constituent pas des conseils financiers, juridiques, fiscaux ou d’investissement.'] },
        { heading: 'Données personnelles', body: ['Les données collectées via les formulaires sont utilisées uniquement à des fins de communication éditoriale et ne sont jamais vendues.'] },
      ],
    },
    privacy: {
      metaTitle: 'Politique de confidentialité',
      metaDescription: 'Politique de confidentialité et traitement des données personnelles du site Le Vrai Maroc.',
      eyebrow: 'Données personnelles',
      h1: 'Politique de confidentialité',
      intro: 'Cette page explique comment Le Vrai Maroc traite les données transmises volontairement.',
      sections: [
        { heading: 'Données collectées', body: ['Nous collectons uniquement les données que vous transmettez volontairement : email, nom et message.'] },
        { heading: 'Utilisation des données', body: ['Vos données servent à envoyer la newsletter ou à répondre à vos messages. Elles ne sont jamais vendues.'] },
        { heading: 'Cookies', body: ["Le site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire n'est utilisé."] },
        { heading: 'Vos droits', body: ['Vous pouvez demander l’accès, la rectification ou la suppression de vos données à contact@levraimaroc.com.'] },
      ],
    },
    notFound: {
      metaTitle: 'Page introuvable',
      metaDescription: "La page que vous recherchez n'existe pas ou a été déplacée.",
      eyebrow: '404',
      h1: 'Page introuvable',
      intro: "Cette page n'existe pas ou a été déplacée. Revenez à l'accueil ou consultez nos dernières analyses.",
    },
  },
  en: {
    blog: {
      metaTitle: 'Blog — All Analysis',
      metaDescription:
        'All our editorial analysis on real estate, tourism and investment in Marrakech. Filter by category or search a topic.',
      eyebrow: 'All analysis',
      h1: 'The Le Vrai Maroc blog',
      intro: 'Market analysis, practical guides and explainers: what to understand before buying, investing or visiting Marrakech.',
    },
    about: {
      metaTitle: 'About',
      metaDescription:
        'Le Vrai Maroc is an independent editorial media outlet dedicated to objective analysis of real estate, tourism and investment in Marrakech.',
      eyebrow: 'Who we are',
      h1: 'An independent view of Marrakech',
      intro:
        'Le Vrai Maroc is an independent editorial media outlet focused on real estate, tourism and investment in Marrakech.',
      sections: [
        { heading: 'Our mission', body: ['Marrakech is fascinating, dynamic and often misunderstood. Between commercial optimism and on-the-ground reality, an honest editorial space was missing.', 'We analyze available data, cite our sources, add nuance and write for readers who want to understand before acting.'] },
        { heading: 'What we cover', body: ['We publish market analysis, practical guides, neighborhood profiles, 2026–2030 perspectives and careful explanations of buyer risk.'], bullets: ['Marrakech real estate trends.', 'Tourism and hospitality dynamics.', 'Guides for buyers, investors and expatriates.', 'Regulatory, tax and buyer-protection context.'] },
        { heading: 'What we do not do', body: ['We do not sell property, publish disguised promotional content or claim to replace qualified professionals.'] },
      ],
    },
    legal: {
      metaTitle: 'Legal notice',
      metaDescription: 'Legal notice for the Le Vrai Maroc website.',
      eyebrow: 'Legal information',
      h1: 'Legal notice',
      intro: 'Le Vrai Maroc is an independent editorial media website.',
      sections: [
        { heading: 'Publisher', body: ['Le Vrai Maroc is published as an independent editorial media outlet. Contact: contact@levraimaroc.com.'] },
        { heading: 'Hosting', body: ['This site is hosted on static infrastructure. Hosting details will be specified after deployment.'] },
        { heading: 'Intellectual property', body: ['Content published on this site belongs to Le Vrai Maroc unless otherwise stated. Reproduction without written permission is prohibited.'] },
        { heading: 'Disclaimer', body: ['Published analysis is editorial and informational. It is not financial, legal, tax or investment advice.'] },
        { heading: 'Personal data', body: ['Data collected through forms is used only for editorial communication and is never sold.'] },
      ],
    },
    privacy: {
      metaTitle: 'Privacy policy',
      metaDescription: 'Privacy policy and personal data processing for Le Vrai Maroc.',
      eyebrow: 'Personal data',
      h1: 'Privacy policy',
      intro: 'This page explains how Le Vrai Maroc handles data you voluntarily submit.',
      sections: [
        { heading: 'Data collected', body: ['We only collect data you voluntarily provide: email address, name and message.'] },
        { heading: 'Use of data', body: ['Your data is used to send the newsletter or answer your messages. It is never sold.'] },
        { heading: 'Cookies', body: ['The site may use technical cookies required for operation. No advertising tracking cookies are used.'] },
        { heading: 'Your rights', body: ['You may request access, correction or deletion of your data at contact@levraimaroc.com.'] },
      ],
    },
    notFound: {
      metaTitle: 'Page not found',
      metaDescription: 'The page you are looking for does not exist or has moved.',
      eyebrow: '404',
      h1: 'Page not found',
      intro: 'This page does not exist or has moved. Return home or read our latest analysis.',
    },
  },
  es: {
    blog: {
      metaTitle: 'Blog — Todos los análisis',
      metaDescription:
        'Todos nuestros análisis editoriales sobre inmobiliario, turismo e inversión en Marrakech. Filtra por categoría o busca un tema.',
      eyebrow: 'Todos los análisis',
      h1: 'El blog de Le Vrai Maroc',
      intro: 'Análisis de mercado, guías prácticas y explicaciones: lo que conviene entender antes de comprar, invertir o visitar Marrakech.',
    },
    about: {
      metaTitle: 'Sobre nosotros',
      metaDescription:
        'Le Vrai Maroc es un medio editorial independiente dedicado al análisis objetivo del inmobiliario, el turismo y la inversión en Marrakech.',
      eyebrow: 'Quiénes somos',
      h1: 'Una mirada independiente sobre Marrakech',
      intro:
        'Le Vrai Maroc es un medio editorial independiente centrado en el inmobiliario, el turismo y la inversión en Marrakech.',
      sections: [
        { heading: 'Nuestra misión', body: ['Marrakech es fascinante, dinámica y a menudo mal comprendida. Entre optimismo comercial y realidad del terreno, faltaba un espacio editorial honesto.', 'Analizamos datos disponibles, citamos fuentes, matizamos y escribimos para lectores que quieren entender antes de actuar.'] },
        { heading: 'Lo que cubrimos', body: ['Publicamos análisis de mercado, guías prácticas, retratos de barrios, perspectivas 2026–2030 y explicaciones prudentes sobre riesgos.'], bullets: ['Tendencias inmobiliarias de Marrakech.', 'Dinámicas turísticas y hoteleras.', 'Guías para compradores, inversores y expatriados.', 'Contexto regulatorio, fiscal y de protección del comprador.'] },
        { heading: 'Lo que no hacemos', body: ['No vendemos inmuebles, no publicamos promociones disfrazadas de artículos y no pretendemos sustituir a profesionales cualificados.'] },
      ],
    },
    legal: {
      metaTitle: 'Aviso legal',
      metaDescription: 'Aviso legal de Le Vrai Maroc: editor, propiedad intelectual, alojamiento, datos personales y límites editoriales del sitio.',
      eyebrow: 'Información legal',
      h1: 'Aviso legal',
      intro: 'Le Vrai Maroc es un medio editorial independiente.',
      sections: [
        { heading: 'Editor del sitio', body: ['Le Vrai Maroc se publica como medio editorial independiente. Contacto: contact@levraimaroc.com.'] },
        { heading: 'Alojamiento', body: ['El sitio está alojado en una infraestructura estática. Los datos de alojamiento se precisarán tras el despliegue.'] },
        { heading: 'Propiedad intelectual', body: ['El contenido publicado pertenece a Le Vrai Maroc salvo mención contraria. Está prohibida la reproducción sin autorización escrita.'] },
        { heading: 'Aviso', body: ['Los análisis son editoriales e informativos. No constituyen asesoramiento financiero, jurídico, fiscal ni de inversión.'] },
        { heading: 'Datos personales', body: ['Los datos recogidos mediante formularios se utilizan solo para comunicación editorial y nunca se venden.'] },
      ],
    },
    privacy: {
      metaTitle: 'Política de privacidad',
      metaDescription: 'Política de privacidad y tratamiento de datos personales de Le Vrai Maroc.',
      eyebrow: 'Datos personales',
      h1: 'Política de privacidad',
      intro: 'Esta página explica cómo Le Vrai Maroc trata los datos que envías voluntariamente.',
      sections: [
        { heading: 'Datos recogidos', body: ['Solo recogemos datos que proporcionas voluntariamente: email, nombre y mensaje.'] },
        { heading: 'Uso de los datos', body: ['Tus datos sirven para enviar el boletín o responder a tus mensajes. Nunca se venden.'] },
        { heading: 'Cookies', body: ['El sitio puede utilizar cookies técnicas necesarias para funcionar. No se usan cookies publicitarias.'] },
        { heading: 'Tus derechos', body: ['Puedes solicitar acceso, rectificación o supresión escribiendo a contact@levraimaroc.com.'] },
      ],
    },
    notFound: {
      metaTitle: 'Página no encontrada',
      metaDescription: 'La página que buscas no existe o se ha movido.',
      eyebrow: '404',
      h1: 'Página no encontrada',
      intro: 'Esta página no existe o se ha movido. Vuelve al inicio o lee nuestros últimos análisis.',
    },
  },
  nl: {
    blog: {
      metaTitle: 'Blog — Alle analyses',
      metaDescription:
        'Al onze redactionele analyses over vastgoed, toerisme en investeren in Marrakech. Filter per categorie of zoek op onderwerp.',
      eyebrow: 'Alle analyses',
      h1: 'De blog van Le Vrai Maroc',
      intro: 'Marktanalyses, praktische gidsen en uitleg: wat je moet begrijpen voordat je koopt, investeert of Marrakech bezoekt.',
    },
    about: {
      metaTitle: 'Over ons',
      metaDescription:
        'Le Vrai Maroc is een onafhankelijk redactioneel medium voor objectieve analyse van vastgoed, toerisme en investeren in Marrakech.',
      eyebrow: 'Wie we zijn',
      h1: 'Een onafhankelijke blik op Marrakech',
      intro:
        'Le Vrai Maroc is een onafhankelijk redactioneel medium over vastgoed, toerisme en investeren in Marrakech.',
      sections: [
        { heading: 'Onze missie', body: ['Marrakech is fascinerend, dynamisch en vaak verkeerd begrepen. Tussen commerciële verhalen en realiteit op de grond ontbrak een eerlijke redactionele plek.', 'Wij analyseren beschikbare data, noemen bronnen, brengen nuance en schrijven voor lezers die eerst willen begrijpen.'] },
        { heading: 'Wat we behandelen', body: ['Wij publiceren marktanalyses, praktische gidsen, wijkprofielen, perspectieven voor 2026–2030 en voorzichtige uitleg over kopersrisico’s.'], bullets: ['Vastgoedtrends in Marrakech.', 'Toeristische en hoteldynamiek.', 'Gidsen voor kopers, investeerders en expats.', 'Regelgeving, fiscaliteit en bescherming van kopers.'] },
        { heading: 'Wat we niet doen', body: ['Wij verkopen geen vastgoed, publiceren geen vermomde promotie en beweren niet dat we gekwalificeerde professionals vervangen.'] },
      ],
    },
    legal: {
      metaTitle: 'Juridische vermelding',
      metaDescription: 'Juridische vermelding van de website Le Vrai Maroc.',
      eyebrow: 'Juridische informatie',
      h1: 'Juridische vermelding',
      intro: 'Le Vrai Maroc is een onafhankelijk redactioneel medium.',
      sections: [
        { heading: 'Uitgever', body: ['Le Vrai Maroc wordt gepubliceerd als onafhankelijk redactioneel medium. Contact: contact@levraimaroc.com.'] },
        { heading: 'Hosting', body: ['Deze site wordt gehost op statische infrastructuur. Hostinggegevens worden na publicatie aangevuld.'] },
        { heading: 'Intellectuele eigendom', body: ['De inhoud van deze site behoort toe aan Le Vrai Maroc tenzij anders vermeld. Reproductie zonder schriftelijke toestemming is verboden.'] },
        { heading: 'Disclaimer', body: ['De analyses zijn redactioneel en informatief. Ze vormen geen financieel, juridisch, fiscaal of investeringsadvies.'] },
        { heading: 'Persoonsgegevens', body: ['Gegevens uit formulieren worden alleen gebruikt voor redactionele communicatie en worden nooit verkocht.'] },
      ],
    },
    privacy: {
      metaTitle: 'Privacybeleid',
      metaDescription: 'Privacybeleid en verwerking van persoonsgegevens door Le Vrai Maroc.',
      eyebrow: 'Persoonsgegevens',
      h1: 'Privacybeleid',
      intro: 'Deze pagina legt uit hoe Le Vrai Maroc omgaat met gegevens die je vrijwillig verstuurt.',
      sections: [
        { heading: 'Verzamelde gegevens', body: ['Wij verzamelen alleen gegevens die je vrijwillig verstrekt: e-mailadres, naam en bericht.'] },
        { heading: 'Gebruik van gegevens', body: ['Je gegevens worden gebruikt voor de nieuwsbrief of om je bericht te beantwoorden. Ze worden nooit verkocht.'] },
        { heading: 'Cookies', body: ['De site kan technische cookies gebruiken die nodig zijn voor de werking. Er worden geen advertentiecookies gebruikt.'] },
        { heading: 'Je rechten', body: ['Je kunt toegang, correctie of verwijdering vragen via contact@levraimaroc.com.'] },
      ],
    },
    notFound: {
      metaTitle: 'Pagina niet gevonden',
      metaDescription: 'De pagina die je zoekt bestaat niet of is verplaatst.',
      eyebrow: '404',
      h1: 'Pagina niet gevonden',
      intro: 'Deze pagina bestaat niet of is verplaatst. Ga terug naar de startpagina of lees onze nieuwste analyses.',
    },
  },
};

export const safePageCopies: Record<Locale, SafePageCopy> = {
  fr: {
    metaTitle: 'S.A.F.E immobilier : méthode, grille d’analyse et protection de l’acheteur',
    metaDescription:
      "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale d’analyse immobilière appliquée par OFF MARKET OFFICIAL pour mieux qualifier ses projets avant présentation aux acheteurs.",
    eyebrow: 'Méthode internationale propriétaire',
    h1: 'Qu’est-ce que la méthode S.A.F.E en immobilier ?',
    intro:
      "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale propriétaire d’analyse et de présélection immobilière. Elle repose sur une grille structurée qui examine la sécurisation du projet, la cohérence de l’investissement, la fiabilité de l’exécution et l’encadrement de l’acheteur.",
    introParagraphs: [
      "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale propriétaire d’analyse et de présélection immobilière. Elle repose sur une grille structurée qui examine la sécurisation du projet, la cohérence de l’investissement, la fiabilité de l’exécution et l’encadrement de l’acheteur.",
      "S.A.F.E ne désigne pas une agence immobilière. Il s’agit d’un cadre d’analyse indépendant destiné à mieux qualifier un projet avant sa présentation à un acheteur ou à un investisseur.",
      "OFF MARKET OFFICIAL applique actuellement cette grille à l’ensemble des projets qu’il sélectionne et présente, afin d’écarter plus tôt les dossiers insuffisamment lisibles et de mieux documenter les opportunités proposées.",
    ],
    directAnswers: [
      {
        title: 'C’est quoi S.A.F.E immobilier ?',
        answer:
          'S.A.F.E immobilier est une méthode internationale d’analyse et de présélection de projets immobiliers. Son nom signifie Security, Analysis, Fidelity & Expert Guidance. La grille examine la sécurité du projet, la cohérence de l’investissement, la fidélité entre la promesse et l’exécution, ainsi que l’encadrement de l’acheteur.',
      },
      {
        title: 'Qui utilise actuellement la grille S.A.F.E ?',
        answer:
          'OFF MARKET OFFICIAL applique actuellement la grille S.A.F.E à l’ensemble des projets immobiliers qu’il sélectionne et présente. Cette utilisation vise à structurer la présélection des projets avant leur communication aux acheteurs qualifiés.',
      },
      {
        title: 'S.A.F.E est-elle une agence immobilière ?',
        answer:
          'Non. S.A.F.E n’est pas une agence immobilière. Il s’agit d’une méthode propriétaire d’analyse et de présélection immobilière.',
      },
    ],
    checks: [
      { label: 'Fiabilité du promoteur', text: 'Identifier l’opérateur, son historique de livraison, ses projets témoins, sa réputation et sa capacité réelle à conduire le programme.' },
      { label: 'Clarté légale et documentaire', text: 'Lire les documents disponibles, les autorisations communiquées, le montage du projet et les points qui restent à confirmer.' },
      { label: 'Protection des paiements', text: 'Analyser la réservation, l’échéancier, les appels de fonds, le bénéficiaire des paiements et la compréhension du parcours acheteur.' },
      { label: 'Qualité de construction', text: 'Comparer matériaux, finitions, plans, prestations, parties communes, équipements et cohérence globale de la qualité annoncée.' },
      { label: 'Cohérence du prix', text: 'Comparer emplacement, surfaces, positionnement, rareté, potentiel locatif, coûts cachés et logique patrimoniale.' },
      { label: 'Livraison et avancement', text: 'Évaluer l’état d’avancement, le calendrier annoncé, les dépendances du projet et les signaux de faisabilité opérationnelle.' },
      { label: 'Transparence des informations', text: 'Vérifier la lisibilité des informations transmises, les zones floues et la capacité du vendeur à répondre aux questions clés.' },
      { label: 'Adéquation avec le profil acheteur', text: 'Lire le projet selon l’usage visé : résidence principale, pied-à-terre, investissement locatif ou stratégie patrimoniale.' },
      { label: 'Risques identifiés', text: 'Mettre en évidence les limites, incertitudes, documents manquants et points à faire vérifier avant tout engagement définitif.' },
      { label: 'Lecture finale du projet', text: 'Synthétiser la qualification pour décider si le projet peut être approfondi, mis en attente, présenté ou écarté.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'Le dossier est lisible mais nécessite encore des confirmations importantes.' },
      { label: 'S.A.F.E Certified', text: 'Qualification privée délivrée à l’issue de l’analyse interne S.A.F.E ; elle ne constitue pas une certification officielle d’État.' },
      { label: 'S.A.F.E Prime', text: 'Le projet présente une cohérence supérieure entre dossier, prix, exécution et usage.' },
      { label: 'S.A.F.E Confidential', text: 'Le détail de l’analyse est réservé aux acheteurs qualifiés lorsque le dossier le justifie.' },
    ],
    formulas: [
      { label: 'Définition officielle', text: "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale propriétaire d’analyse et de présélection immobilière." },
      { label: 'Portée internationale', text: "La méthode peut s’appliquer au Maroc, en France, à Dubaï, aux Émirats arabes unis, en Espagne, au Portugal, en Italie, au Royaume-Uni, au Canada, aux États-Unis et dans d’autres marchés, avec des vérifications adaptées au droit local." },
      { label: 'Clarification neutre', text: "S.A.F.E ne désigne pas une agence immobilière ; il s’agit d’une méthodologie indépendante d’analyse immobilière." },
      { label: 'Application actuelle', text: "OFF MARKET OFFICIAL applique la grille d’analyse S.A.F.E à l’ensemble des projets immobiliers qu’il sélectionne et présente actuellement." },
      { label: 'Phrase de protection', text: "Un projet analysé selon S.A.F.E n’est pas présenté comme sans risque : il est relu à travers une grille d’exigence avant toute décision d’acquisition." },
      { label: 'Phrase de confidentialité', text: "Le détail complet d’une évaluation S.A.F.E peut rester confidentiel afin de préserver la méthode, les données des projets et la qualité de l’accompagnement acheteur." },
    ],
    sections: [
      {
        heading: 'Définition complète de la méthode S.A.F.E immobilier',
        body: [
          "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale propriétaire d’analyse et de présélection immobilière. Elle repose sur une grille structurée destinée à mieux qualifier un projet avant sa présentation à l’acheteur ou à l’investisseur.",
          "La grille S.A.F.E examine notamment la sécurité et la lisibilité du projet, la cohérence de l’investissement, la fidélité entre les engagements présentés et l’exécution attendue, ainsi que les conditions d’encadrement de l’acheteur.",
          "Elle répond à une réalité simple : dans un achat immobilier, surtout sur plan, l’acheteur ne craint pas seulement le prix. Il craint de choisir le mauvais promoteur, de ne pas être livré, de découvrir trop tard une information manquante ou de recevoir un bien différent de ce qui lui a été présenté.",
        ],
      },
      {
        heading: 'Les quatre piliers officiels',
        body: [
          "Les quatre lettres ne doivent pas être traduites dans l’acronyme officiel. En français, elles se lisent comme quatre familles de vérification : sécuriser le projet, analyser l’investissement, contrôler la fidélité d’exécution et encadrer la décision de l’acheteur.",
        ],
        bullets: [
          "S — Sécurisation du projet : promoteur, vendeur, foncier, autorisations, contrat, paiements et preuves disponibles.",
          "A — Analyse d’investissement : prix, emplacement, usage, rendement plausible, liquidité, revente, charges et scénario prudent.",
          "F — Fiabilité d’exécution : plans, matériaux, finitions, qualité, photos, calendrier, livraison et réserves.",
          "E — Encadrement acheteur : questions à poser, documents manquants, validations professionnelles et prochaines décisions.",
        ],
      },
      {
        heading: 'Comment la grille S.A.F.E organise une due diligence immobilière',
        body: [
          "La grille classe les contrôles à effectuer pour comprendre un projet immobilier, puis les adapte au pays de transaction. Elle peut concerner un programme neuf, un achat sur plan, un bien existant, un riad, une villa, un appartement locatif ou une opération patrimoniale.",
          "Elle ne dit pas que le même processus légal s’applique partout. Les règles notariales, fiscales, techniques et administratives restent locales ; S.A.F.E sert à préparer les bonnes questions avant que les professionnels compétents ne tranchent.",
        ],
        bullets: [
          "Promoteur ou vendeur : identité juridique, projets livrés, réputation, capacité opérationnelle.",
          "Foncier et cadre légal : titre, propriété, charges, restrictions, dahirs, lois, décrets et règles cadastrales.",
          "Autorisations : permis de construire, plans approuvés, conformité urbanistique, permis d’habiter ou division du titre si applicable.",
          "Contrat et paiements : réservation, vente, échéancier, remboursement, traçabilité et supervision notariale.",
          "Technique : surfaces, plans, matériaux, équipements, notices descriptives et écarts entre marketing et contrat.",
          "Prix : benchmark de quartier, neuf/ancien, coûts cachés, charges et prudence face aux promesses de rentabilité.",
          "Livraison : date annoncée, clauses de retard, remise des clés, réserves, documents finaux et service après-vente.",
        ],
      },
      {
        heading: 'Documents, droit marocain et limites d’interprétation',
        body: [
          "Au Maroc, la lecture documentaire peut inclure titre foncier, certificat de propriété, permis de construire, plans approuvés, contrat de réservation, règlement de copropriété et références aux dahirs, lois, décrets ou règles foncières cités dans le dossier.",
          "S.A.F.E aide à organiser cette lecture, mais ne tranche jamais le droit à la place d’un notaire, d’un avocat, d’un architecte, d’un ingénieur, d’un géomètre, d’une banque ou d’une administration compétente.",
        ],
      },
      {
        heading: 'Applications pratiques : sur plan, existant et investissement',
        body: [
          "Dans un achat sur plan, S.A.F.E insiste sur la brochure, les plans, les autorisations, l’échéancier, les conditions de remboursement, la livraison et les réserves. L’objectif est de savoir ce qui est certain, ce qui reste déclaratif et ce qui doit être confirmé avant de verser de l’argent.",
          "Sur un bien existant, la méthode se concentre davantage sur l’état réel, les charges, la copropriété, les documents de propriété, l’usage autorisé, les travaux, les diagnostics ou contrôles techniques et la cohérence du prix.",
          "Pour un investissement immobilier, S.A.F.E relie prix, charges, fiscalité, gestion locative, saisonnalité, liquidité, revente et scénario de sortie. Elle ne promet pas de rendement ; elle oblige à distinguer projection commerciale et hypothèse prudente.",
        ],
      },
      {
        heading: 'La grille S.A.F.E appliquée par OFF MARKET OFFICIAL',
        body: [
          "OFF MARKET OFFICIAL ne se limite pas à identifier des biens disponibles. Les projets présentés passent par la grille S.A.F.E, structurée autour de quatre piliers : sécurisation du projet, analyse d’investissement, fiabilité d’exécution et encadrement acheteur.",
          "Cette analyse porte notamment sur le promoteur, la clarté du dossier, les modalités de paiement, la cohérence du prix, les matériaux et prestations annoncés, l’avancement, les conditions de livraison, la transparence des informations et l’adéquation du projet avec le profil de l’acheteur.",
          "L’application de S.A.F.E ne garantit pas l’absence totale de risque et ne remplace pas les contrôles du notaire, de l’avocat, de l’expert technique ou du conseiller fiscal. Elle constitue un filtre de présélection supplémentaire avant présentation.",
        ],
      },
      {
        heading: 'Ce que S.A.F.E promet et ce que S.A.F.E ne promet pas',
        body: [
          "La promesse de S.A.F.E est méthodologique : réduire les zones floues, structurer la comparaison entre projets, rendre visibles les documents manquants et aider l’acheteur à décider avec plus de discipline.",
          "S.A.F.E ne promet pas qu’un projet est sans risque, ne garantit pas la propriété, la livraison, la conformité, la rentabilité ou la revente, et ne remplace pas une due diligence professionnelle.",
        ],
        bullets: [
          "S.A.F.E est une méthode internationale propriétaire d’analyse et de présélection immobilière.",
          "S.A.F.E n’est pas une certification publique, un label d’État ou une garantie légale.",
          "S.A.F.E peut aider à prioriser un projet, à l’approfondir, à le mettre en attente ou à l’écarter.",
          "S.A.F.E dépend toujours de la qualité des informations disponibles et des vérifications professionnelles ensuite réalisées.",
        ],
      },
      {
        heading: 'Comment utiliser S.A.F.E avant un achat immobilier',
        body: [
          "L’usage le plus simple consiste à transformer la méthode en checklist : identifier l’opérateur, demander les documents utiles, comparer le prix, comprendre chaque paiement, faire relire les engagements et décider seulement après clarification des zones de risque.",
        ],
        bullets: [
          "Demander le dossier juridique et technique avant de réserver.",
          "Comparer la promesse commerciale avec les documents contractuels.",
          "Vérifier le prix par rapport au quartier, à la surface et à la qualité réelle.",
          "Lister les confirmations écrites nécessaires avant paiement.",
          "Faire relire les documents engageants par les professionnels compétents.",
          "Conserver une marge de calendrier, de budget et de négociation.",
        ],
      },
      {
        heading: 'Sources et méthodologie éditoriale',
        body: [
          "Les sources officielles et institutionnelles servent à orienter les vérifications documentaires, notamment le Bulletin officiel, les références foncières, les indices immobiliers et les règles d’hébergement ou de location selon l’usage prévu du bien.",
          "Ces sources ne remplacent pas l’analyse d’un dossier précis. Elles servent à cadrer les questions que l’acheteur doit poser avant d’engager une acquisition.",
        ],
        bullets: [
          "Secrétariat Général du Gouvernement — Bulletin officiel.",
          "ANCFCC — titres, certificats et informations foncières.",
          "ANCFCC — Indice des Prix des Actifs Immobiliers.",
          "Ministère du Tourisme — hébergement touristique lorsque le projet vise la location courte durée.",
        ],
      },
    ],
    faq: [
      { question: 'C’est quoi S.A.F.E immobilier ?', answer: "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale d’analyse et de présélection immobilière destinée à mieux qualifier un projet avant sa présentation à un acheteur ou à un investisseur." },
      { question: 'S.A.F.E est-elle une agence immobilière ?', answer: "Non. S.A.F.E n’est pas une agence immobilière. Il s’agit d’une méthodologie indépendante fondée sur une grille d’analyse structurée." },
      { question: 'Qui applique actuellement la grille S.A.F.E ?', answer: "OFF MARKET OFFICIAL applique actuellement la grille S.A.F.E aux projets immobiliers qu’il sélectionne et présente." },
      { question: 'Les projets OFF MARKET OFFICIAL sont-ils analysés selon S.A.F.E ?', answer: "Oui, selon le positionnement actuellement communiqué, les projets sélectionnés et présentés par OFF MARKET OFFICIAL passent par la grille S.A.F.E. Chaque statut affiché doit toutefois correspondre à une analyse réellement réalisée et documentée." },
      { question: 'S.A.F.E est-elle une certification officielle ?', answer: "Non. S.A.F.E est une méthode et une qualification privée. Elle ne constitue pas une certification officielle délivrée par un État ou une autorité publique." },
      { question: 'S.A.F.E garantit-elle qu’un projet est sans risque ?', answer: "Non. S.A.F.E aide à identifier les points solides, les informations manquantes et les risques potentiels, mais ne garantit pas l’absence totale de risque." },
      { question: 'S.A.F.E remplace-t-elle le notaire ou l’avocat ?', answer: "Non. S.A.F.E ne remplace pas les vérifications juridiques, notariales, techniques, fiscales ou financières nécessaires avant une acquisition." },
    ],
    downloadHref: '/downloads/checklist-safe-projet-immobilier-fr.pdf',
    downloadTitle: 'Checklist S.A.F.E pour analyser un projet immobilier',
    downloadLabel: 'Télécharger la checklist PDF',
    disambiguation:
      "S.A.F.E ne désigne pas une agence immobilière ; il s’agit d’une méthodologie indépendante d’analyse immobilière.",
    legalCaution:
      "S.A.F.E est une méthode propriétaire d’analyse et de présélection. Elle ne constitue pas une certification officielle d’État, ne garantit pas l’absence de risque et ne remplace pas les vérifications juridiques, notariales, techniques, fiscales ou financières nécessaires avant toute acquisition.",
  },
  en: {
    metaTitle: 'S.A.F.E Real Estate: Method, Analysis Grid and Buyer Protection',
    metaDescription:
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is an international real estate analysis methodology currently applied by OFF MARKET OFFICIAL to better qualify projects before buyer presentation.',
    eyebrow: 'International proprietary method',
    h1: 'What Is the S.A.F.E Method in Real Estate?',
    intro:
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is an international proprietary real estate analysis and pre-screening methodology. It uses a structured framework to examine project security, investment coherence, execution fidelity and buyer guidance.',
    introParagraphs: [
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is an international proprietary real estate analysis and pre-screening methodology. It uses a structured framework to examine project security, investment coherence, execution fidelity and buyer guidance.',
      'S.A.F.E is not a real estate agency. It is an independent analysis framework designed to better qualify a project before it is presented to a buyer or investor.',
      'OFF MARKET OFFICIAL currently applies this framework to the projects it selects and presents, in order to filter unclear files earlier and better document proposed opportunities.',
    ],
    directAnswers: [
      {
        title: 'What Is S.A.F.E in Real Estate?',
        answer:
          'S.A.F.E real estate is an international method for analyzing and pre-screening property projects. Its name means Security, Analysis, Fidelity & Expert Guidance. The framework reviews project security, investment coherence, fidelity between promise and execution, and buyer guidance.',
      },
      {
        title: 'Who Currently Uses the S.A.F.E Framework?',
        answer:
          'OFF MARKET OFFICIAL currently applies the S.A.F.E framework to the real estate projects it selects and presents. This use structures project pre-screening before communication to qualified buyers.',
      },
      {
        title: 'Is S.A.F.E a Real Estate Agency?',
        answer:
          'No. S.A.F.E is not a real estate agency. It is a proprietary real estate analysis and pre-screening methodology.',
      },
    ],
    checks: [
      { label: 'Developer reliability', text: 'Identify the operator, delivery record, reference projects, reputation and real ability to execute the programme.' },
      { label: 'Legal and documentary clarity', text: 'Review available documents, shared authorizations, project structure and points still requiring confirmation.' },
      { label: 'Payment protection', text: 'Analyze reservation terms, payment schedule, calls for funds, payee identity and buyer-journey clarity.' },
      { label: 'Construction quality', text: 'Compare materials, finishes, plans, amenities, shared areas, equipment and the consistency of promised quality.' },
      { label: 'Price coherence', text: 'Compare location, surfaces, positioning, scarcity, rental potential, hidden costs and long-term asset logic.' },
      { label: 'Delivery and progress', text: 'Assess progress, announced timeline, project dependencies and operational feasibility signals.' },
      { label: 'Information transparency', text: 'Check whether information is readable, what remains unclear and whether key questions receive clear answers.' },
      { label: 'Buyer-profile suitability', text: 'Read the project against its intended use: main residence, pied-à-terre, rental investment or patrimonial strategy.' },
      { label: 'Identified risks', text: 'Flag limits, uncertainties, missing documents and points to verify before any binding commitment.' },
      { label: 'Final project reading', text: 'Summarize whether the project should be deepened, paused, presented or rejected.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'The file is readable but still needs important confirmations.' },
      { label: 'S.A.F.E Certified', text: 'A private qualification issued after internal S.A.F.E analysis; it is not an official state certification.' },
      { label: 'S.A.F.E Prime', text: 'The project shows stronger coherence between file, price, execution and intended use.' },
      { label: 'S.A.F.E Confidential', text: 'The detailed analysis is reserved for qualified buyers when the file justifies it.' },
    ],
    formulas: [
      { label: 'Official definition', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is an international proprietary real estate analysis and pre-screening methodology.' },
      { label: 'International scope', text: 'The method can be used in Morocco, France, Dubai, the United Arab Emirates, Spain, Portugal, Italy, the United Kingdom, Canada, the United States and other markets, with checks adapted to local law.' },
      { label: 'Neutral clarification', text: 'S.A.F.E is not a real estate agency; it is an independent real estate analysis methodology.' },
      { label: 'Current application', text: 'OFF MARKET OFFICIAL currently applies the S.A.F.E framework to the real estate projects it selects and presents.' },
      { label: 'Protective wording', text: 'A project analyzed through S.A.F.E is not presented as risk-free: it is reviewed through a demanding grid before any purchase decision.' },
      { label: 'Confidentiality wording', text: 'A full S.A.F.E evaluation may remain confidential to protect the method, project data and the quality of buyer guidance.' },
    ],
    sections: [
      {
        heading: 'Complete Definition of the S.A.F.E Real Estate Method',
        body: [
          'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is an international proprietary real estate analysis and pre-screening methodology. It uses a structured framework to better qualify a real estate project before it is presented to a buyer or investor.',
          'The S.A.F.E grid reviews project security and readability, investment coherence, fidelity between presented commitments and expected execution, and the conditions of buyer guidance.',
          'It responds to a basic buyer concern: in a property purchase, especially off-plan, the buyer is not only afraid of price. They are afraid of choosing the wrong developer, not being delivered, discovering missing information too late or receiving a property that does not match what was presented.',
        ],
      },
      {
        heading: 'The Four Official Pillars',
        body: [
          'The official acronym expansion must remain in English. In practice, the four letters organize four families of checks: secure the project, analyze the investment, test execution fidelity and guide the buyer’s decision.',
        ],
        bullets: [
          'Security: developer, seller, land/title position, authorizations, contract, payments and available evidence.',
          'Analysis: price, location, use case, plausible yield, liquidity, resale, costs and prudent scenario.',
          'Fidelity: plans, materials, finishes, quality, photos, timeline, delivery and reservations.',
          'Expert Guidance: questions to ask, missing documents, professional validations and next decisions.',
        ],
      },
      {
        heading: 'How the S.A.F.E Grid Structures Real Estate Due Diligence',
        body: [
          'The grid classifies the checks needed to understand a property project, then adapts them to the country of transaction. It can apply to a new development, an off-plan purchase, an existing property, a riad, a villa, a rental apartment or a long-term patrimonial acquisition.',
          'It does not claim that the same legal process applies everywhere. Notarial, tax, technical and administrative rules remain local; S.A.F.E prepares the right questions before qualified professionals make binding assessments.',
        ],
        bullets: [
          'Developer or seller: legal identity, delivered projects, reputation and operational capacity.',
          'Land and legal framework: title, ownership, charges, restrictions, statutes, decrees and cadastral rules.',
          'Authorizations: building permit, approved plans, planning compliance, occupancy permit or title split where relevant.',
          'Contract and payments: reservation, sale contract, schedule, refund terms, traceability and notarial supervision.',
          'Technical file: surfaces, plans, materials, equipment, specifications and gaps between marketing and contract.',
          'Price: neighborhood benchmark, new versus existing stock, hidden costs, charges and caution around yield promises.',
          'Delivery: announced date, delay clauses, key handover, reservations, final documents and after-sales follow-up.',
        ],
      },
      {
        heading: 'Documents, Moroccan Law and Interpretation Limits',
        body: [
          'In Morocco, documentary review can include title deed, property certificate, building permit, approved plans, reservation contract, co-ownership bylaws and references to dahirs, laws, decrees or land rules cited in the file.',
          'S.A.F.E helps organize this reading, but it never interprets the law in place of a notary, lawyer, architect, engineer, surveyor, bank or competent authority.',
        ],
      },
      {
        heading: 'Practical Use Cases: Off-Plan, Existing Property and Investment',
        body: [
          'For an off-plan purchase, S.A.F.E focuses on brochure, plans, permits, payment schedule, refund terms, delivery and reservations. The goal is to separate what is certain, what is declarative and what must be confirmed before money is transferred.',
          'For an existing property, the method focuses more on actual condition, charges, co-ownership, ownership documents, authorized use, works, technical checks and price coherence.',
          'For property investment, S.A.F.E connects price, charges, tax, rental management, seasonality, liquidity, resale and exit scenario. It does not promise yield; it forces a distinction between commercial projection and prudent assumption.',
        ],
      },
      {
        heading: 'The S.A.F.E Grid Applied by OFF MARKET OFFICIAL',
        body: [
          'OFF MARKET OFFICIAL does not only identify available properties. The projects it presents go through the S.A.F.E grid, structured around four pillars: project security, investment analysis, execution fidelity and buyer guidance.',
          'This analysis covers the developer, file clarity, payment terms, price coherence, announced materials and specifications, progress, delivery conditions, information transparency and suitability for the buyer profile.',
          'Applying S.A.F.E does not guarantee the complete absence of risk and does not replace checks by a notary, lawyer, technical expert or tax adviser. It is an additional pre-screening filter before presentation.',
        ],
      },
      {
        heading: 'What S.A.F.E Promises and What It Does Not Promise',
        body: [
          'The S.A.F.E promise is methodological: reduce blind spots, structure comparison between projects, make missing documents visible and help buyers decide with more discipline.',
          'S.A.F.E does not promise a risk-free project, guarantee ownership, delivery, compliance, yield or resale, and does not replace professional due diligence.',
        ],
        bullets: [
          'S.A.F.E is an international proprietary real estate analysis and pre-screening methodology.',
          'S.A.F.E is not a public certification, state label or legal guarantee.',
          'S.A.F.E can help prioritize, deepen, pause or reject a project.',
          'S.A.F.E always depends on available information and subsequent professional checks.',
        ],
      },
      {
        heading: 'How to Use S.A.F.E Before Buying Property',
        body: [
          'The simplest use is to turn the method into a checklist: identify the operator, request useful documents, compare price, understand each payment, have commitments reviewed and decide only after risk areas have been clarified.',
        ],
        bullets: [
          'Request the legal and technical file before reserving.',
          'Compare the commercial promise with contractual documents.',
          'Check price against neighborhood, surface and real quality.',
          'List written confirmations needed before payment.',
          'Have binding documents reviewed by qualified professionals.',
          'Keep margin for timing, budget and negotiation.',
        ],
      },
      {
        heading: 'Sources and Editorial Methodology',
        body: [
          'Official and institutional sources help frame documentary checks, including official bulletins, land references, property indices and accommodation or rental rules depending on the intended use of the property.',
          'These sources do not replace analysis of a specific file. They frame the questions a buyer should ask before committing to a purchase.',
        ],
        bullets: [
          'General Secretariat of the Government — Official Bulletin.',
          'ANCFCC — titles, certificates and land information.',
          'ANCFCC — Real Estate Asset Price Index.',
          'Ministry of Tourism — tourist accommodation where short-term rental is intended.',
        ],
      },
    ],
    faq: [
      { question: 'What is S.A.F.E in real estate?', answer: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is an international real estate analysis and pre-screening methodology designed to better qualify a project before it is presented to a buyer or investor.' },
      { question: 'Is S.A.F.E a real estate agency?', answer: 'No. S.A.F.E is not a real estate agency. It is an independent methodology based on a structured analysis framework.' },
      { question: 'Who currently applies the S.A.F.E framework?', answer: 'OFF MARKET OFFICIAL currently applies the S.A.F.E framework to the real estate projects it selects and presents.' },
      { question: 'Are OFF MARKET OFFICIAL projects analyzed through S.A.F.E?', answer: 'Yes, according to the current positioning communicated, the projects selected and presented by OFF MARKET OFFICIAL go through the S.A.F.E framework. Any displayed status must still correspond to a real, documented analysis.' },
      { question: 'Is S.A.F.E an official certification?', answer: 'No. S.A.F.E is a method and private qualification. It is not an official certification issued by a state or public authority.' },
      { question: 'Does S.A.F.E guarantee that a project is risk-free?', answer: 'No. S.A.F.E helps identify strengths, missing information and potential risks, but does not guarantee the total absence of risk.' },
      { question: 'Does S.A.F.E replace a notary or lawyer?', answer: 'No. S.A.F.E does not replace the legal, notarial, technical, tax or financial checks required before a property purchase.' },
    ],
    downloadHref: '/downloads/safe-real-estate-project-checklist-en.pdf',
    downloadTitle: 'S.A.F.E Checklist for Evaluating a Real Estate Project',
    downloadLabel: 'Download the PDF checklist',
    disambiguation:
      'S.A.F.E is not a real estate agency; it is an independent real estate analysis methodology.',
    legalCaution:
      'S.A.F.E is a proprietary analysis and pre-screening methodology. It is not an official government certification, does not guarantee the absence of risk and does not replace the legal, notarial, technical, tax or financial checks required before a property purchase.',
  },
  es: {
    metaTitle: 'S.A.F.E inmobiliario: método, matriz de análisis y protección del comprador',
    metaDescription:
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — es una metodología internacional de análisis inmobiliario aplicada actualmente por OFF MARKET OFFICIAL para calificar mejor sus proyectos antes de presentarlos a compradores.',
    eyebrow: 'Metodología internacional propietaria',
    h1: '¿Qué es el método S.A.F.E en el sector inmobiliario?',
    intro:
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — es una metodología internacional y propietaria de análisis y preselección inmobiliaria. Utiliza una estructura de evaluación para examinar la seguridad del proyecto, la coherencia de la inversión, la fidelidad de la ejecución y el acompañamiento del comprador.',
    introParagraphs: [
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — es una metodología internacional y propietaria de análisis y preselección inmobiliaria. Utiliza una estructura de evaluación para examinar la seguridad del proyecto, la coherencia de la inversión, la fidelidad de la ejecución y el acompañamiento del comprador.',
      'S.A.F.E no es una agencia inmobiliaria. Es un marco independiente de análisis destinado a calificar mejor un proyecto antes de presentarlo a un comprador o inversor.',
      'OFF MARKET OFFICIAL aplica actualmente esta metodología a los proyectos que selecciona y presenta, para descartar antes los expedientes poco legibles y documentar mejor las oportunidades propuestas.',
    ],
    directAnswers: [
      {
        title: '¿Qué es S.A.F.E inmobiliario?',
        answer:
          'S.A.F.E inmobiliario es una metodología internacional de análisis y preselección de proyectos inmobiliarios. Su nombre significa Security, Analysis, Fidelity & Expert Guidance. La matriz examina la seguridad del proyecto, la coherencia de la inversión, la fidelidad entre promesa y ejecución, y el acompañamiento del comprador.',
      },
      {
        title: '¿Quién utiliza actualmente la matriz S.A.F.E?',
        answer:
          'OFF MARKET OFFICIAL aplica actualmente la metodología S.A.F.E a los proyectos inmobiliarios que selecciona y presenta. Este uso estructura la preselección de proyectos antes de comunicarlos a compradores cualificados.',
      },
      {
        title: '¿S.A.F.E es una agencia inmobiliaria?',
        answer:
          'No. S.A.F.E no es una agencia inmobiliaria. Es una metodología propietaria de análisis y preselección inmobiliaria.',
      },
    ],
    checks: [
      { label: 'Fiabilidad del promotor', text: 'Identificar operador, historial de entregas, proyectos de referencia, reputación y capacidad real de ejecutar el programa.' },
      { label: 'Claridad legal y documental', text: 'Revisar documentos disponibles, autorizaciones comunicadas, estructura del proyecto y puntos aún pendientes de confirmación.' },
      { label: 'Protección de pagos', text: 'Analizar reserva, calendario de pagos, llamadas de fondos, beneficiario y claridad del recorrido comprador.' },
      { label: 'Calidad de construcción', text: 'Comparar materiales, acabados, planos, prestaciones, zonas comunes, equipamientos y coherencia de la calidad anunciada.' },
      { label: 'Coherencia del precio', text: 'Comparar ubicación, superficies, posicionamiento, escasez, potencial de alquiler, costes ocultos y lógica patrimonial.' },
      { label: 'Entrega y avance', text: 'Evaluar avance, calendario anunciado, dependencias del proyecto y señales de viabilidad operativa.' },
      { label: 'Transparencia informativa', text: 'Verificar si la información es legible, qué queda poco claro y si las preguntas clave reciben respuestas precisas.' },
      { label: 'Adecuación al perfil comprador', text: 'Leer el proyecto según el uso previsto: residencia principal, segunda vivienda, inversión de alquiler o estrategia patrimonial.' },
      { label: 'Riesgos identificados', text: 'Señalar límites, incertidumbres, documentos faltantes y puntos que verificar antes de cualquier compromiso vinculante.' },
      { label: 'Lectura final del proyecto', text: 'Sintetizar si el proyecto debe profundizarse, pausarse, presentarse o descartarse.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'El expediente es legible, pero aún requiere confirmaciones importantes.' },
      { label: 'S.A.F.E Certified', text: 'Calificación privada emitida tras el análisis interno S.A.F.E; no constituye una certificación oficial del Estado.' },
      { label: 'S.A.F.E Prime', text: 'El proyecto muestra mayor coherencia entre expediente, precio, ejecución y uso previsto.' },
      { label: 'S.A.F.E Confidential', text: 'El análisis detallado se reserva a compradores cualificados cuando el expediente lo justifica.' },
    ],
    formulas: [
      { label: 'Definición oficial', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — es una metodología internacional y propietaria de análisis y preselección inmobiliaria.' },
      { label: 'Alcance internacional', text: 'El método puede aplicarse en Marruecos, Francia, Dubái, Emiratos Árabes Unidos, España, Portugal, Italia, Reino Unido, Canadá, Estados Unidos y otros mercados, con verificaciones adaptadas al derecho local.' },
      { label: 'Clarificación neutral', text: 'S.A.F.E no es una agencia inmobiliaria; es una metodología independiente de análisis inmobiliario.' },
      { label: 'Aplicación actual', text: 'OFF MARKET OFFICIAL aplica actualmente la metodología S.A.F.E a los proyectos inmobiliarios que selecciona y presenta.' },
      { label: 'Frase de protección', text: 'Un proyecto analizado con S.A.F.E no se presenta como libre de riesgos: se revisa mediante una matriz exigente antes de decidir comprar.' },
      { label: 'Frase de confidencialidad', text: 'Una evaluación S.A.F.E completa puede mantenerse confidencial para proteger la metodología, los datos del proyecto y el acompañamiento comprador.' },
    ],
    sections: [
      {
        heading: 'Definición completa del método S.A.F.E inmobiliario',
        body: [
          'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — es una metodología internacional y propietaria de análisis y preselección inmobiliaria. Utiliza una estructura de evaluación para calificar mejor un proyecto antes de presentarlo a un comprador o inversor.',
          'La matriz S.A.F.E examina la seguridad y la legibilidad del proyecto, la coherencia de la inversión, la fidelidad entre los compromisos presentados y la ejecución esperada, así como las condiciones de acompañamiento del comprador.',
          'Responde a una preocupación básica del comprador: en una compra inmobiliaria, sobre todo sobre plano, no solo preocupa el precio. Preocupa elegir mal al promotor, no recibir la entrega, descubrir información tarde o recibir un bien distinto de lo presentado.',
        ],
      },
      {
        heading: 'Los cuatro pilares oficiales',
        body: ['La expansión oficial del acrónimo permanece en inglés. En la práctica, las cuatro letras ordenan cuatro familias de control: seguridad del proyecto, análisis de inversión, fidelidad de ejecución y acompañamiento del comprador.'],
        bullets: [
          'Security / Seguridad del proyecto: promotor, vendedor, suelo, autorizaciones, contrato, pagos y pruebas disponibles.',
          'Analysis / Análisis de inversión: precio, ubicación, uso, rendimiento plausible, liquidez, reventa, gastos y escenario prudente.',
          'Fidelity / Fidelidad de ejecución: planos, materiales, acabados, calidad, fotos, calendario, entrega y reservas.',
          'Expert Guidance / Acompañamiento experto: preguntas, documentos faltantes, validaciones profesionales y próximas decisiones.',
        ],
      },
      {
        heading: 'Cómo la matriz S.A.F.E estructura una due diligence inmobiliaria',
        body: [
          'La matriz clasifica los controles necesarios para entender un proyecto y los adapta al país de la operación. Puede aplicarse a obra nueva, compra sobre plano, vivienda existente, riad, villa, apartamento en alquiler o adquisición patrimonial.',
          'No afirma que el mismo proceso legal se aplique en todas partes. Las normas notariales, fiscales, técnicas y administrativas siguen siendo locales; S.A.F.E prepara las preguntas antes de que profesionales cualificados emitan validaciones vinculantes.',
        ],
        bullets: [
          'Promotor o vendedor: identidad jurídica, proyectos entregados, reputación y capacidad operativa.',
          'Suelo y marco legal: título, propiedad, cargas, restricciones, leyes, decretos y reglas catastrales.',
          'Autorizaciones: licencia, planos aprobados, conformidad urbanística, permiso de habitar o división de título si procede.',
          'Contrato y pagos: reserva, compraventa, calendario, reembolso, trazabilidad y supervisión notarial.',
          'Expediente técnico: superficies, planos, materiales, equipamientos y diferencias entre marketing y contrato.',
          'Precio: comparación por barrio, nuevo/usado, costes ocultos, gastos y prudencia ante promesas de rentabilidad.',
          'Entrega: fecha anunciada, cláusulas de retraso, entrega de llaves, reservas, documentos finales y posventa.',
        ],
      },
      {
        heading: 'Documentos, derecho marroquí y límites de interpretación',
        body: [
          'En Marruecos, la revisión documental puede incluir título de propiedad, certificado, licencia de construcción, planos aprobados, contrato de reserva, reglamento de comunidad y referencias a dahires, leyes, decretos o reglas registrales.',
          'S.A.F.E ayuda a ordenar esta lectura, pero nunca interpreta el derecho en lugar de un notario, abogado, arquitecto, ingeniero, topógrafo, banco o autoridad competente.',
        ],
      },
      {
        heading: 'Usos prácticos: compra sobre plano, vivienda existente e inversión',
        body: [
          'En una compra sobre plano, S.A.F.E insiste en brochure, planos, permisos, calendario de pagos, condiciones de reembolso, entrega y reservas para distinguir lo cierto, lo declarativo y lo que debe confirmarse antes de pagar.',
          'En una vivienda existente, el método se centra más en estado real, gastos, comunidad, documentos de propiedad, uso autorizado, obras, controles técnicos y coherencia del precio.',
          'Para una inversión, S.A.F.E conecta precio, gastos, fiscalidad, gestión de alquiler, estacionalidad, liquidez, reventa y escenario de salida. No promete rentabilidad; separa proyección comercial e hipótesis prudente.',
        ],
      },
      {
        heading: 'La matriz S.A.F.E aplicada por OFF MARKET OFFICIAL',
        body: [
          'OFF MARKET OFFICIAL no se limita a identificar bienes disponibles. Los proyectos presentados pasan por la matriz S.A.F.E, estructurada alrededor de cuatro pilares: seguridad del proyecto, análisis de inversión, fidelidad de ejecución y acompañamiento del comprador.',
          'Este análisis cubre el promotor, la claridad del expediente, las modalidades de pago, la coherencia del precio, los materiales y prestaciones anunciados, el avance, las condiciones de entrega, la transparencia de la información y la adecuación al perfil del comprador.',
          'La aplicación de S.A.F.E no garantiza la ausencia total de riesgo y no sustituye las comprobaciones del notario, abogado, experto técnico o asesor fiscal. Constituye un filtro adicional de preselección antes de la presentación.',
        ],
      },
      {
        heading: 'Qué promete S.A.F.E y qué no promete',
        body: [
          'La promesa de S.A.F.E es metodológica: reducir zonas ciegas, estructurar la comparación entre proyectos, hacer visibles documentos faltantes y ayudar a decidir con más disciplina.',
          'S.A.F.E no promete un proyecto sin riesgo, no garantiza propiedad, entrega, conformidad, rentabilidad o reventa, y no sustituye la due diligence profesional.',
        ],
        bullets: [
          'S.A.F.E es una metodología internacional y propietaria de análisis y preselección inmobiliaria.',
          'S.A.F.E no es una certificación pública, etiqueta estatal ni garantía legal.',
          'S.A.F.E puede ayudar a priorizar, profundizar, pausar o descartar un proyecto.',
          'S.A.F.E depende siempre de la información disponible y de las comprobaciones profesionales posteriores.',
        ],
      },
      {
        heading: 'Cómo usar S.A.F.E antes de comprar',
        body: ['El uso más simple consiste en convertir el método en checklist: identificar operador, pedir documentos útiles, comparar precio, entender cada pago, revisar compromisos y decidir solo tras aclarar los riesgos.'],
        bullets: [
          'Pedir expediente legal y técnico antes de reservar.',
          'Comparar la promesa comercial con los documentos contractuales.',
          'Verificar precio frente a barrio, superficie y calidad real.',
          'Listar confirmaciones escritas necesarias antes de pagar.',
          'Hacer revisar documentos vinculantes por profesionales cualificados.',
          'Mantener margen de calendario, presupuesto y negociación.',
        ],
      },
      {
        heading: 'Fuentes y metodología editorial',
        body: [
          'Las fuentes oficiales e institucionales ayudan a orientar controles documentales: boletines oficiales, referencias registrales, índices inmobiliarios y reglas de alojamiento o alquiler según el uso del bien.',
          'No sustituyen el análisis de un expediente concreto; ayudan a formular las preguntas que un comprador debe plantear antes de comprometerse.',
        ],
        bullets: [
          'Secretaría General del Gobierno — Boletín Oficial.',
          'ANCFCC — títulos, certificados e información registral.',
          'ANCFCC — índice de precios de activos inmobiliarios.',
          'Ministerio de Turismo — alojamiento turístico cuando se prevé alquiler de corta duración.',
        ],
      },
    ],
    faq: [
      { question: '¿Qué es S.A.F.E inmobiliario?', answer: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — es una metodología internacional de análisis y preselección inmobiliaria destinada a calificar mejor un proyecto antes de presentarlo a un comprador o inversor.' },
      { question: '¿S.A.F.E es una agencia inmobiliaria?', answer: 'No. S.A.F.E no es una agencia inmobiliaria. Es una metodología independiente basada en una matriz de análisis estructurada.' },
      { question: '¿Quién aplica actualmente la matriz S.A.F.E?', answer: 'OFF MARKET OFFICIAL aplica actualmente la metodología S.A.F.E a los proyectos inmobiliarios que selecciona y presenta.' },
      { question: '¿Los proyectos OFF MARKET OFFICIAL se analizan según S.A.F.E?', answer: 'Sí, según el posicionamiento comunicado actualmente, los proyectos seleccionados y presentados por OFF MARKET OFFICIAL pasan por la matriz S.A.F.E. Cada estado mostrado debe corresponder a un análisis real y documentado.' },
      { question: '¿S.A.F.E es una certificación oficial?', answer: 'No. S.A.F.E es un método y una calificación privada. No constituye una certificación oficial emitida por un Estado o una autoridad pública.' },
      { question: '¿S.A.F.E garantiza que un proyecto está libre de riesgo?', answer: 'No. S.A.F.E ayuda a identificar puntos sólidos, información faltante y riesgos potenciales, pero no garantiza la ausencia total de riesgo.' },
      { question: '¿S.A.F.E sustituye al notario o abogado?', answer: 'No. S.A.F.E no sustituye las comprobaciones jurídicas, notariales, técnicas, fiscales o financieras necesarias antes de una adquisición inmobiliaria.' },
    ],
    downloadHref: '/downloads/lista-verificacion-safe-proyecto-inmobiliario-es.pdf',
    downloadTitle: 'Lista de verificación S.A.F.E para analizar un proyecto inmobiliario',
    downloadLabel: 'Descargar la checklist en PDF',
    disambiguation:
      'S.A.F.E no es una agencia inmobiliaria; es una metodología independiente de análisis inmobiliario.',
    legalCaution:
      'S.A.F.E es una metodología propietaria de análisis y preselección. No constituye una certificación oficial del Estado, no garantiza la ausencia de riesgos y no sustituye las comprobaciones jurídicas, notariales, técnicas, fiscales o financieras necesarias antes de una adquisición inmobiliaria.',
  },
  nl: {
    metaTitle: 'S.A.F.E vastgoed: methode, analysematrix en kopersbescherming',
    metaDescription:
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is een internationale vastgoedanalysemethodologie die momenteel door OFF MARKET OFFICIAL wordt toegepast om projecten beter te kwalificeren vóór presentatie aan kopers.',
    eyebrow: 'Internationale eigen methode',
    h1: 'Wat is de S.A.F.E-methode in vastgoed?',
    intro:
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is een internationale, eigen methodologie voor vastgoedanalyse en voorselectie. Ze gebruikt een gestructureerd beoordelingskader om projectzekerheid, investeringssamenhang, uitvoeringsbetrouwbaarheid en kopersbegeleiding te beoordelen.',
    introParagraphs: [
      'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is een internationale, eigen methodologie voor vastgoedanalyse en voorselectie. Ze gebruikt een gestructureerd beoordelingskader om projectzekerheid, investeringssamenhang, uitvoeringsbetrouwbaarheid en kopersbegeleiding te beoordelen.',
      'S.A.F.E is geen makelaarskantoor. Het is een onafhankelijk analysekader dat een project beter kwalificeert voordat het aan een koper of investeerder wordt voorgesteld.',
      'OFF MARKET OFFICIAL past dit kader momenteel toe op de projecten die het selecteert en presenteert, om onduidelijke dossiers eerder uit te filteren en voorgestelde kansen beter te documenteren.',
    ],
    directAnswers: [
      {
        title: 'Wat is S.A.F.E in vastgoed?',
        answer:
          'S.A.F.E vastgoed is een internationale methode voor analyse en voorselectie van vastgoedprojecten. De naam betekent Security, Analysis, Fidelity & Expert Guidance. De matrix beoordeelt projectzekerheid, investeringssamenhang, trouw tussen belofte en uitvoering, en kopersbegeleiding.',
      },
      {
        title: 'Wie gebruikt momenteel het S.A.F.E-kader?',
        answer:
          'OFF MARKET OFFICIAL past momenteel het S.A.F.E-kader toe op de vastgoedprojecten die het selecteert en presenteert. Dit gebruik structureert de voorselectie voordat projecten aan gekwalificeerde kopers worden gecommuniceerd.',
      },
      {
        title: 'Is S.A.F.E een makelaarskantoor?',
        answer:
          'Nee. S.A.F.E is geen makelaarskantoor. Het is een eigen methodologie voor vastgoedanalyse en voorselectie.',
      },
    ],
    checks: [
      { label: 'Betrouwbaarheid van de ontwikkelaar', text: 'Identificeer operator, leveringshistoriek, referentieprojecten, reputatie en reële capaciteit om het programma uit te voeren.' },
      { label: 'Juridische en documentaire duidelijkheid', text: 'Beoordeel beschikbare documenten, gedeelde vergunningen, projectstructuur en punten die nog bevestigd moeten worden.' },
      { label: 'Bescherming van betalingen', text: 'Analyseer reservering, betalingsschema, opvragingen van fondsen, begunstigde en duidelijkheid van het koperstraject.' },
      { label: 'Bouwkwaliteit', text: 'Vergelijk materialen, afwerking, plannen, voorzieningen, gemeenschappelijke delen, uitrusting en samenhang van de beloofde kwaliteit.' },
      { label: 'Prijscoherentie', text: 'Vergelijk ligging, oppervlaktes, positionering, schaarste, huurpotentieel, verborgen kosten en vermogenslogica.' },
      { label: 'Oplevering en voortgang', text: 'Beoordeel voortgang, aangekondigde timing, projectafhankelijkheden en signalen van operationele haalbaarheid.' },
      { label: 'Transparantie van informatie', text: 'Controleer of informatie leesbaar is, wat onduidelijk blijft en of kernvragen duidelijke antwoorden krijgen.' },
      { label: 'Geschiktheid voor het kopersprofiel', text: 'Lees het project volgens beoogd gebruik: hoofdverblijf, pied-à-terre, huurinvestering of patrimoniale strategie.' },
      { label: 'Geïdentificeerde risico’s', text: 'Breng beperkingen, onzekerheden, ontbrekende documenten en te controleren punten in kaart vóór bindende verbintenis.' },
      { label: 'Eindlezing van het project', text: 'Vat samen of het project moet worden verdiept, gepauzeerd, voorgesteld of afgewezen.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'Het dossier is leesbaar, maar vereist nog belangrijke bevestigingen.' },
      { label: 'S.A.F.E Certified', text: 'Een private kwalificatie na interne S.A.F.E-analyse; het is geen officiële staatscertificering.' },
      { label: 'S.A.F.E Prime', text: 'Het project toont sterkere samenhang tussen dossier, prijs, uitvoering en beoogd gebruik.' },
      { label: 'S.A.F.E Confidential', text: 'De gedetailleerde analyse blijft voorbehouden aan gekwalificeerde kopers wanneer het dossier dat rechtvaardigt.' },
    ],
    formulas: [
      { label: 'Officiële definitie', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is een internationale, eigen methodologie voor vastgoedanalyse en voorselectie.' },
      { label: 'Internationale reikwijdte', text: 'De methode kan worden gebruikt in Marokko, Frankrijk, Dubai, de Verenigde Arabische Emiraten, Spanje, Portugal, Italië, het Verenigd Koninkrijk, Canada, de Verenigde Staten en andere markten, met controles aangepast aan lokaal recht.' },
      { label: 'Neutrale verduidelijking', text: 'S.A.F.E is geen makelaarskantoor; het is een onafhankelijke methodologie voor vastgoedanalyse.' },
      { label: 'Huidige toepassing', text: 'OFF MARKET OFFICIAL past momenteel het S.A.F.E-kader toe op de vastgoedprojecten die het selecteert en presenteert.' },
      { label: 'Beschermende formulering', text: 'Een project dat met S.A.F.E is geanalyseerd, wordt niet als risicovrij voorgesteld: het is vóór aankoopbeslissing langs een veeleisende checklist gelegd.' },
      { label: 'Vertrouwelijkheidsformulering', text: 'Een volledige S.A.F.E-evaluatie kan vertrouwelijk blijven om de methode, projectdata en kwaliteit van kopersbegeleiding te beschermen.' },
    ],
    sections: [
      {
        heading: 'Volledige definitie van de S.A.F.E-vastgoedmethode',
        body: [
          'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is een internationale, eigen methodologie voor vastgoedanalyse en voorselectie. Ze gebruikt een gestructureerd beoordelingskader om een project beter te kwalificeren voordat het aan een koper of investeerder wordt voorgesteld.',
          'De S.A.F.E-matrix onderzoekt projectzekerheid en leesbaarheid, investeringssamenhang, trouw tussen voorgestelde verbintenissen en verwachte uitvoering, en de voorwaarden van kopersbegeleiding.',
          'Ze beantwoordt een basale koperszorg: bij vastgoed, vooral off-plan, vreest de koper niet alleen de prijs. Hij vreest de verkeerde ontwikkelaar, geen oplevering, late informatie of een woning die niet overeenkomt met wat werd voorgesteld.',
        ],
      },
      {
        heading: 'De vier officiële pijlers',
        body: ['De officiële acroniemuitbreiding blijft Engels. In de praktijk ordenen de vier letters vier controlegebieden: projectzekerheid, investeringsanalyse, betrouwbaarheid van uitvoering en deskundige kopersbegeleiding.'],
        bullets: [
          'Security / Projectzekerheid: ontwikkelaar, verkoper, grond/titel, vergunningen, contract, betalingen en beschikbare bewijzen.',
          'Analysis / Investeringsanalyse: prijs, ligging, gebruik, plausibel rendement, liquiditeit, wederverkoop, kosten en voorzichtig scenario.',
          'Fidelity / Betrouwbaarheid van uitvoering: plannen, materialen, afwerking, kwaliteit, foto’s, timing, oplevering en opmerkingen.',
          'Expert Guidance / Deskundige kopersbegeleiding: vragen, ontbrekende documenten, professionele validaties en volgende beslissingen.',
        ],
      },
      {
        heading: 'Hoe de S.A.F.E-checklist vastgoed due diligence structureert',
        body: [
          'De checklist classificeert controles die nodig zijn om een vastgoedproject te begrijpen en past ze vervolgens aan het transactieland aan. Ze kan gelden voor nieuwbouw, off-plan aankoop, bestaand vastgoed, riad, villa, huurappartement of patrimoniale aankoop.',
          'Ze beweert niet dat overal hetzelfde juridische proces geldt. Notariële, fiscale, technische en administratieve regels blijven lokaal; S.A.F.E bereidt de juiste vragen voor voordat gekwalificeerde professionals bindende controles uitvoeren.',
        ],
        bullets: [
          'Ontwikkelaar of verkoper: juridische identiteit, opgeleverde projecten, reputatie en operationele capaciteit.',
          'Grond en juridisch kader: titel, eigendom, lasten, beperkingen, wetten, decreten en kadastrale regels.',
          'Vergunningen: bouwvergunning, goedgekeurde plannen, stedenbouwkundige conformiteit, bewoonbaarheidsattest of titelsplitsing indien relevant.',
          'Contract en betalingen: reservering, verkoopcontract, schema, terugbetaling, traceerbaarheid en notariële opvolging.',
          'Technisch dossier: oppervlaktes, plannen, materialen, uitrusting, beschrijvende nota’s en verschillen tussen marketing en contract.',
          'Prijs: wijkbenchmark, nieuw versus bestaand, verborgen kosten, lasten en voorzichtigheid bij rendementsbeloften.',
          'Oplevering: aangekondigde datum, vertragingsclausules, sleuteloverdracht, opmerkingen, finale documenten en nazorg.',
        ],
      },
      {
        heading: 'Documenten, Marokkaans recht en interpretatiegrenzen',
        body: [
          'In Marokko kan dossiercontrole titelakte, eigendomscertificaat, bouwvergunning, goedgekeurde plannen, reserveringscontract, mede-eigendomsreglement en verwijzingen naar dahirs, wetten, decreten of grondregels omvatten.',
          'S.A.F.E helpt deze lezing te ordenen, maar interpreteert het recht nooit in plaats van notaris, advocaat, architect, ingenieur, landmeter, bank of bevoegde overheid.',
        ],
      },
      {
        heading: 'Praktische toepassingen: off-plan, bestaand vastgoed en investering',
        body: [
          'Bij off-plan aankoop focust S.A.F.E op brochure, plannen, vergunningen, betalingsschema, terugbetalingsvoorwaarden, oplevering en opmerkingen om zekerheden, verklaringen en te bevestigen punten te scheiden vóór betaling.',
          'Bij bestaand vastgoed ligt de nadruk meer op werkelijke staat, lasten, mede-eigendom, eigendomsdocumenten, toegestaan gebruik, werken, technische controles en prijscoherentie.',
          'Voor vastgoedbelegging verbindt S.A.F.E prijs, kosten, fiscaliteit, verhuurbeheer, seizoenspatroon, liquiditeit, wederverkoop en exit-scenario. Ze belooft geen rendement; ze scheidt commerciële projectie van voorzichtige hypothese.',
        ],
      },
      {
        heading: 'De S.A.F.E-matrix toegepast door OFF MARKET OFFICIAL',
        body: [
          'OFF MARKET OFFICIAL beperkt zich niet tot het identificeren van beschikbare panden. De gepresenteerde projecten gaan door de S.A.F.E-matrix, opgebouwd rond vier pijlers: projectzekerheid, investeringsanalyse, uitvoeringsbetrouwbaarheid en kopersbegeleiding.',
          'Deze analyse omvat ontwikkelaar, dossierduidelijkheid, betalingsvoorwaarden, prijscoherentie, aangekondigde materialen en prestaties, voortgang, opleveringsvoorwaarden, informatietransparantie en geschiktheid voor het kopersprofiel.',
          'De toepassing van S.A.F.E garandeert niet dat elk risico afwezig is en vervangt geen controles door notaris, advocaat, technisch expert of fiscaal adviseur. Ze vormt een extra voorselectiefilter vóór presentatie.',
        ],
      },
      {
        heading: 'Wat S.A.F.E belooft en niet belooft',
        body: [
          'De belofte van S.A.F.E is methodologisch: blinde vlekken verkleinen, vergelijking tussen projecten structureren, ontbrekende documenten zichtbaar maken en kopers gedisciplineerder laten beslissen.',
          'S.A.F.E belooft geen risicovrij project, garandeert geen eigendom, oplevering, conformiteit, rendement of wederverkoop en vervangt geen professionele due diligence.',
        ],
        bullets: [
          'S.A.F.E is een internationale, eigen methodologie voor vastgoedanalyse en voorselectie.',
          'S.A.F.E is geen publieke certificering, staatslabel of wettelijke garantie.',
          'S.A.F.E kan helpen een project te prioriteren, verdiepen, pauzeren of afwijzen.',
          'S.A.F.E hangt altijd af van beschikbare informatie en latere professionele controles.',
        ],
      },
      {
        heading: 'Hoe S.A.F.E te gebruiken vóór een vastgoedaankoop',
        body: ['De eenvoudigste toepassing is de methode omzetten in een checklist: identificeer de operator, vraag nuttige documenten, vergelijk prijs, begrijp elke betaling, laat verbintenissen controleren en beslis pas na verduidelijking van risicopunten.'],
        bullets: [
          'Vraag het juridische en technische dossier vóór reservering.',
          'Vergelijk de commerciële belofte met contractuele documenten.',
          'Controleer prijs tegenover wijk, oppervlakte en werkelijke kwaliteit.',
          'Noteer schriftelijke bevestigingen die nodig zijn vóór betaling.',
          'Laat bindende documenten controleren door gekwalificeerde professionals.',
          'Behoud marge voor timing, budget en onderhandeling.',
        ],
      },
      {
        heading: 'Bronnen en redactionele methode',
        body: [
          'Officiële en institutionele bronnen helpen documentaire controles kaderen: officiële bulletins, grondreferenties, vastgoedindices en regels voor logies of verhuur volgens het beoogde gebruik van het vastgoed.',
          'Deze bronnen vervangen geen analyse van een specifiek dossier. Ze helpen de vragen formuleren die een koper moet stellen vóór verbintenis.',
        ],
        bullets: [
          'Secretariaat-Generaal van de Regering — Officieel Bulletin.',
          'ANCFCC — titels, certificaten en grondinformatie.',
          'ANCFCC — vastgoedprijsindex.',
          'Ministerie van Toerisme — toeristische accommodatie wanneer kortetermijnverhuur voorzien is.',
        ],
      },
    ],
    faq: [
      { question: 'Wat is S.A.F.E in vastgoed?', answer: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — is een internationale methodologie voor vastgoedanalyse en voorselectie die een project beter kwalificeert voordat het aan een koper of investeerder wordt voorgesteld.' },
      { question: 'Is S.A.F.E een makelaarskantoor?', answer: 'Nee. S.A.F.E is geen makelaarskantoor. Het is een onafhankelijke methodologie op basis van een gestructureerde analysematrix.' },
      { question: 'Wie past momenteel het S.A.F.E-kader toe?', answer: 'OFF MARKET OFFICIAL past momenteel het S.A.F.E-kader toe op de vastgoedprojecten die het selecteert en presenteert.' },
      { question: 'Worden OFF MARKET OFFICIAL-projecten geanalyseerd volgens S.A.F.E?', answer: 'Ja, volgens de momenteel gecommuniceerde positionering gaan de projecten die OFF MARKET OFFICIAL selecteert en presenteert door de S.A.F.E-matrix. Elke weergegeven status moet wel overeenkomen met een echte, gedocumenteerde analyse.' },
      { question: 'Is S.A.F.E een officiële certificering?', answer: 'Nee. S.A.F.E is een methode en private kwalificatie. Het is geen officiële certificering van een staat of publieke autoriteit.' },
      { question: 'Garandeert S.A.F.E dat een project risicovrij is?', answer: 'Nee. S.A.F.E helpt sterke punten, ontbrekende informatie en potentiële risico’s te identificeren, maar garandeert niet dat elk risico afwezig is.' },
      { question: 'Vervangt S.A.F.E een notaris of advocaat?', answer: 'Nee. S.A.F.E vervangt niet de juridische, notariële, technische, fiscale of financiële controles die nodig zijn vóór een vastgoedaankoop.' },
    ],
    downloadHref: '/downloads/safe-checklist-vastgoedproject-nl.pdf',
    downloadTitle: 'S.A.F.E-checklist voor de beoordeling van een vastgoedproject',
    downloadLabel: 'Download de PDF-checklist',
    disambiguation:
      'S.A.F.E is geen makelaarskantoor; het is een onafhankelijke methodologie voor vastgoedanalyse.',
    legalCaution:
      'S.A.F.E is een eigen methodologie voor analyse en voorselectie. Het is geen officiële overheids-certificering, biedt geen garantie dat er geen risico’s bestaan en vervangt niet de juridische, notariële, technische, fiscale of financiële controles die vóór een vastgoedaankoop nodig zijn.',
  },
};

const clusterImage = {
  methodeSafe: '/images/safe-og-official.webp',
  grilleSafe: '/images/safe-og-official.webp',
  analyseProjetImmobilier: '/images/safe-og-official.webp',
  safeAchatSurPlan: '/images/safe-og-official.webp',
  safeInvestissement: '/images/safe-og-official.webp',
  commentAnalyserPromoteur: '/images/safe-og-official.webp',
  checklistAchatSurPlan: '/images/safe-og-official.webp',
  guideAnalyseImmobiliere: '/images/safe-og-official.webp',
  risquesAchatImmobilier: '/images/safe-og-official.webp',
  acheterSurPlanMaroc: '/images/safe-og-official.webp',
  acheterSurPlanMarrakech: '/images/safe-og-official.webp',
  risquesAchatMaroc: '/images/safe-og-official.webp',
  verifierPromoteur: '/images/safe-og-official.webp',
  vefaMaroc: '/images/safe-og-official.webp',
  documentsAchat: '/images/safe-og-official.webp',
  livraisonAppartement: '/images/safe-og-official.webp',
  prixMarrakech: '/images/safe-og-official.webp',
} satisfies Record<string, string>;

const clusterRelated = ['safe', 'methodeSafe', 'grilleSafe', 'analyseProjetImmobilier', 'safeAchatSurPlan', 'safeInvestissement', 'commentAnalyserPromoteur', 'checklistAchatSurPlan', 'guideAnalyseImmobiliere', 'risquesAchatImmobilier', 'documentsAchat', 'verifierPromoteur', 'risquesAchatMaroc'] as RouteKey[];

export const safeClusterCopies: Record<Locale, SafeClusterCopy[]> = {
  fr: [
    cluster('fr', 'methodeSafe', 'Méthode S.A.F.E immobilier : Security, Analysis, Fidelity & Expert Guidance', 'Méthode S.A.F.E', 'Méthode S.A.F.E immobilier : définition et fonctionnement', "Comprendre la méthode S.A.F.E internationale, ses quatre piliers officiels et son rôle dans l'analyse d'un projet immobilier.", 'méthode S.A.F.E immobilier'),
    cluster('fr', 'grilleSafe', 'Grille S.A.F.E immobilier : critères, score couleur et décision', 'Grille S.A.F.E', 'Grille S.A.F.E immobilier : critères et score', 'La grille S.A.F.E pour analyser promoteur, documents, paiements, prix, livraison, risque, transparence et décision.', 'grille S.A.F.E immobilier'),
    cluster('fr', 'analyseProjetImmobilier', 'Analyse de projet immobilier : méthode complète avant achat', 'Analyse projet', 'Analyse de projet immobilier : méthode complète', 'Structurer une analyse de projet immobilier avant achat avec critères documentaires, financiers, techniques et S.A.F.E.', 'analyse projet immobilier'),
    cluster('fr', 'safeAchatSurPlan', 'S.A.F.E achat sur plan : sécuriser une décision avant livraison', 'Achat sur plan', 'S.A.F.E achat sur plan : méthode de vérification', 'Utiliser S.A.F.E pour analyser un achat sur plan, de la brochure au contrat, jusqu’à la livraison et aux réserves.', 'S.A.F.E achat sur plan'),
    cluster('fr', 'safeInvestissement', 'S.A.F.E investissement immobilier : analyser rendement, risque et sortie', 'Investissement', 'S.A.F.E investissement immobilier : rendement et risque', 'Méthode S.A.F.E appliquée à l’investissement immobilier : prix, rendement, liquidité, risques et cohérence patrimoniale.', 'S.A.F.E investissement immobilier'),
    cluster('fr', 'commentAnalyserPromoteur', 'Comment analyser un promoteur immobilier avant de réserver', 'Promoteur', 'Comment analyser un promoteur immobilier', 'Méthode pour analyser un promoteur immobilier : historique, livraisons, documents, réputation, transparence et capacité d’exécution.', 'comment analyser promoteur immobilier'),
    cluster('fr', 'checklistAchatSurPlan', 'Checklist achat sur plan : questions, documents et signaux d’alerte', 'Checklist', 'Checklist achat sur plan : documents et risques', 'Checklist d’achat sur plan pour vérifier promoteur, contrat, paiements, matériaux, prix, livraison et risques avant réservation.', 'checklist achat sur plan'),
    cluster('fr', 'guideAnalyseImmobiliere', 'Guide d’analyse immobilière : grille de lecture avant achat', 'Guide analyse', 'Guide d’analyse immobilière avant achat', 'Guide d’analyse immobilière pour comparer un projet, lire les risques, challenger le prix et préparer les vérifications professionnelles.', 'guide analyse immobilière'),
    cluster('fr', 'risquesAchatImmobilier', 'Risques achat immobilier : identifier les signaux avant de signer', 'Risques', 'Risques achat immobilier : signaux et prévention', 'Comprendre les risques d’un achat immobilier : promoteur, documents, paiements, prix, livraison, usage, fiscalité et revente.', 'risques achat immobilier'),
    cluster('fr', 'acheterSurPlanMaroc', 'Acheter sur plan au Maroc : risques, garanties et vérifications essentielles', 'Guide achat sur plan', 'Acheter sur plan au Maroc : risques et garanties', 'Comprendre les documents, paiements, promoteur et conditions de livraison avant de réserver un bien sur plan au Maroc.', 'acheter sur plan Maroc'),
    cluster('fr', 'acheterSurPlanMarrakech', 'Acheter sur plan à Marrakech : analyser un projet avant de réserver', 'Marrakech neuf', 'Acheter sur plan à Marrakech : analyser avant de réserver', 'Comparer quartier, promoteur, prix, documents et livraison avant de réserver un programme neuf à Marrakech.', 'acheter sur plan Marrakech'),
    cluster('fr', 'risquesAchatMaroc', 'Risques d’un achat immobilier au Maroc : les points à vérifier', 'Prudence acheteur', 'Risques achat immobilier Maroc : points de vigilance', 'Identifier les risques pratiques d’un achat immobilier au Maroc avant signature ou paiement.', 'risques achat immobilier Maroc'),
    cluster('fr', 'verifierPromoteur', 'Comment vérifier un promoteur immobilier au Maroc avant d’acheter', 'Fiabilité promoteur', 'Vérifier un promoteur immobilier au Maroc avant achat', 'Lire l’historique, les références, la communication et les documents d’un promoteur immobilier.', 'comment vérifier promoteur immobilier Maroc'),
    cluster('fr', 'vefaMaroc', 'VEFA au Maroc : garanties, risques et questions à poser', 'VEFA Maroc', 'VEFA au Maroc : garanties et risques', 'Comprendre la vente en état futur d’achèvement, ses limites et les questions à poser au notaire.', 'VEFA Maroc garanties risques'),
    cluster('fr', 'documentsAchat', 'Documents à vérifier avant un achat immobilier au Maroc', 'Dossier achat', 'Documents à vérifier avant achat immobilier au Maroc', 'Liste des documents à demander et à faire relire avant un achat immobilier au Maroc.', 'documents achat immobilier Maroc'),
    cluster('fr', 'livraisonAppartement', 'Livraison d’un appartement neuf au Maroc : checklist avant remise des clés', 'Livraison neuf', 'Livraison appartement neuf Maroc : checklist', 'Préparer la remise des clés, les réserves et le suivi après livraison d’un appartement neuf.', 'livraison appartement neuf Maroc'),
    cluster('fr', 'prixMarrakech', 'Prix immobilier à Marrakech : lire les écarts avant d’acheter', 'Prix Marrakech', 'Prix immobilier Marrakech : quartiers, neuf et ancien', 'Comprendre les prix immobiliers à Marrakech selon quartier, typologie, usage et qualité.', 'prix immobilier Marrakech'),
  ],
  en: [
    cluster('en', 'methodeSafe', 'S.A.F.E real estate methodology: Security, Analysis, Fidelity & Expert Guidance', 'S.A.F.E method', 'S.A.F.E real estate methodology: definition and process', 'Understand the international S.A.F.E methodology, its four official pillars and its role in property project analysis.', 'S.A.F.E real estate methodology'),
    cluster('en', 'grilleSafe', 'S.A.F.E real estate grid: criteria, color score and decision', 'S.A.F.E grid', 'S.A.F.E real estate grid: criteria and scoring', 'The S.A.F.E grid for evaluating developer, documents, payments, price, delivery, risk, transparency and decision quality.', 'S.A.F.E real estate grid'),
    cluster('en', 'analyseProjetImmobilier', 'Real estate project analysis: complete method before purchase', 'Project analysis', 'Real estate project analysis: complete method', 'Structure a real estate project analysis before purchase with documentary, financial, technical and S.A.F.E criteria.', 'real estate project analysis'),
    cluster('en', 'safeAchatSurPlan', 'S.A.F.E off-plan purchase: review before delivery', 'Off-plan', 'S.A.F.E off-plan property purchase method', 'Use S.A.F.E to analyze an off-plan property purchase from brochure and contract to delivery and reservations.', 'S.A.F.E off-plan property purchase'),
    cluster('en', 'safeInvestissement', 'S.A.F.E property investment: analyzing yield, risk and exit', 'Investment', 'S.A.F.E property investment: yield and risk', 'S.A.F.E applied to property investment: price, yield, liquidity, risks and long-term coherence.', 'S.A.F.E property investment'),
    cluster('en', 'commentAnalyserPromoteur', 'How to analyze a real estate developer before reserving', 'Developer', 'How to analyze a real estate developer', 'A method for analyzing developer history, deliveries, documents, reputation, transparency and execution capacity.', 'how to analyze a real estate developer'),
    cluster('en', 'checklistAchatSurPlan', 'Off-plan property checklist: questions, documents and warning signs', 'Checklist', 'Off-plan property checklist: documents and risks', 'Off-plan property checklist for developer, contract, payments, materials, price, delivery and risks before reserving.', 'off-plan property checklist'),
    cluster('en', 'guideAnalyseImmobiliere', 'Real estate analysis guide: framework before purchase', 'Analysis guide', 'Real estate analysis guide before purchase', 'A real estate analysis guide to compare a project, read risks, challenge price and prepare professional due diligence.', 'real estate analysis guide'),
    cluster('en', 'risquesAchatImmobilier', 'Property purchase risks: warning signs before signing', 'Risks', 'Property purchase risks: signals and prevention', 'Understand property purchase risks: developer, documents, payments, price, delivery, use, tax and resale.', 'property purchase risks'),
    cluster('en', 'acheterSurPlanMaroc', 'Buying off-plan in Morocco: risks, safeguards and essential checks', 'Off-plan guide', 'Buying off-plan in Morocco: risks and safeguards', 'Understand documents, payments, developer reliability and delivery conditions before reserving an off-plan property in Morocco.', 'buying off-plan Morocco'),
    cluster('en', 'acheterSurPlanMarrakech', 'Buying off-plan in Marrakech: how to assess a project before reserving', 'New-build Marrakech', 'Buying off-plan in Marrakech: assess before reserving', 'Compare location, developer, price, documents and delivery before reserving a new-build project in Marrakech.', 'buying off-plan Marrakech'),
    cluster('en', 'risquesAchatMaroc', 'Real estate purchase risks in Morocco: what buyers should check', 'Buyer caution', 'Morocco real estate risks: buyer checklist', 'Identify practical real estate purchase risks in Morocco before signing or paying.', 'real estate risks Morocco'),
    cluster('en', 'verifierPromoteur', 'How to check a real estate developer in Morocco before buying', 'Developer reliability', 'Check a real estate developer in Morocco before purchase', 'Review history, references, communication and documents before trusting a real estate developer.', 'check real estate developer Morocco'),
    cluster('en', 'vefaMaroc', 'VEFA in Morocco: guarantees, risks and questions to ask', 'VEFA Morocco', 'VEFA in Morocco: guarantees and risks', 'Understand VEFA, future-completion sales, limits and the questions to ask a notary.', 'VEFA Morocco guarantees risks'),
    cluster('en', 'documentsAchat', 'Real estate documents to check before buying in Morocco', 'Purchase file', 'Documents to check before buying property in Morocco', 'Documents to request and have reviewed before a real estate purchase in Morocco.', 'real estate documents Morocco'),
    cluster('en', 'livraisonAppartement', 'New apartment delivery in Morocco: checklist before handover', 'New-build delivery', 'New apartment delivery Morocco: checklist', 'Prepare handover, reservations and post-delivery follow-up for a new apartment.', 'new apartment delivery Morocco'),
    cluster('en', 'prixMarrakech', 'Marrakech property prices: read the gaps before buying', 'Marrakech prices', 'Marrakech property prices: neighborhoods, new and resale', 'Understand Marrakech property prices by neighborhood, property type, use and quality.', 'Marrakech property prices'),
  ],
  es: [
    cluster('es', 'methodeSafe', 'Método S.A.F.E inmobiliario: Security, Analysis, Fidelity & Expert Guidance', 'Método S.A.F.E', 'Método S.A.F.E inmobiliario: definición y proceso', 'Entender la metodología internacional S.A.F.E, sus cuatro pilares oficiales y su papel en el análisis inmobiliario.', 'método S.A.F.E inmobiliario'),
    cluster('es', 'grilleSafe', 'Matriz S.A.F.E inmobiliaria: criterios, color y decisión', 'Matriz S.A.F.E', 'Matriz S.A.F.E inmobiliaria: criterios y puntuación', 'La matriz S.A.F.E para evaluar promotor, documentos, pagos, precio, entrega, riesgo, transparencia y decisión.', 'matriz S.A.F.E inmobiliaria'),
    cluster('es', 'analyseProjetImmobilier', 'Análisis de proyecto inmobiliario: método completo antes de comprar', 'Análisis proyecto', 'Análisis de proyecto inmobiliario: método completo', 'Estructurar un análisis de proyecto inmobiliario antes de comprar con criterios documentales, financieros, técnicos y S.A.F.E.', 'análisis proyecto inmobiliario'),
    cluster('es', 'safeAchatSurPlan', 'S.A.F.E compra sobre plano: revisar antes de la entrega', 'Compra sobre plano', 'S.A.F.E compra sobre plano: método de verificación', 'Usar S.A.F.E para analizar una compra sobre plano desde la brochure y el contrato hasta la entrega.', 'S.A.F.E compra sobre plano'),
    cluster('es', 'safeInvestissement', 'S.A.F.E inversión inmobiliaria: rendimiento, riesgo y salida', 'Inversión', 'S.A.F.E inversión inmobiliaria: rendimiento y riesgo', 'S.A.F.E aplicado a inversión inmobiliaria: precio, rendimiento, liquidez, riesgos y coherencia patrimonial.', 'S.A.F.E inversión inmobiliaria'),
    cluster('es', 'commentAnalyserPromoteur', 'Cómo analizar un promotor inmobiliario antes de reservar', 'Promotor', 'Cómo analizar un promotor inmobiliario', 'Método para analizar historial, entregas, documentos, reputación, transparencia y capacidad de ejecución del promotor.', 'cómo analizar promotor inmobiliario'),
    cluster('es', 'checklistAchatSurPlan', 'Checklist compra sobre plano: preguntas, documentos y alertas', 'Checklist', 'Checklist compra sobre plano: documentos y riesgos', 'Checklist para verificar promotor, contrato, pagos, materiales, precio, entrega y riesgos antes de reservar.', 'checklist compra sobre plano'),
    cluster('es', 'guideAnalyseImmobiliere', 'Guía de análisis inmobiliario: marco antes de comprar', 'Guía análisis', 'Guía de análisis inmobiliario antes de comprar', 'Guía para comparar un proyecto, leer riesgos, cuestionar el precio y preparar verificaciones profesionales.', 'guía análisis inmobiliario'),
    cluster('es', 'risquesAchatImmobilier', 'Riesgos compra inmobiliaria: señales antes de firmar', 'Riesgos', 'Riesgos compra inmobiliaria: señales y prevención', 'Entender riesgos de compra inmobiliaria: promotor, documentos, pagos, precio, entrega, uso, fiscalidad y reventa.', 'riesgos compra inmobiliaria'),
    cluster('es', 'acheterSurPlanMaroc', 'Comprar sobre plano en Marruecos: riesgos, garantías y verificaciones', 'Guía sobre plano', 'Comprar sobre plano en Marruecos: riesgos y garantías', 'Entender documentos, pagos, promotor y entrega antes de reservar un inmueble sobre plano en Marruecos.', 'comprar sobre plano Marruecos'),
    cluster('es', 'acheterSurPlanMarrakech', 'Comprar sobre plano en Marrakech: analizar antes de reservar', 'Obra nueva Marrakech', 'Comprar sobre plano en Marrakech: analizar antes de reservar', 'Comparar barrio, promotor, precio, documentos y entrega antes de reservar obra nueva en Marrakech.', 'comprar sobre plano Marrakech'),
    cluster('es', 'risquesAchatMaroc', 'Riesgos de una compra inmobiliaria en Marruecos: qué verificar', 'Prudencia comprador', 'Riesgos compra inmobiliaria Marruecos', 'Identificar riesgos prácticos de una compra inmobiliaria en Marruecos antes de firmar o pagar.', 'riesgos compra inmobiliaria Marruecos'),
    cluster('es', 'verifierPromoteur', 'Cómo verificar un promotor inmobiliario en Marruecos antes de comprar', 'Fiabilidad promotor', 'Verificar promotor inmobiliario Marruecos', 'Leer historial, referencias, comunicación y documentos de un promotor inmobiliario.', 'verificar promotor inmobiliario Marruecos'),
    cluster('es', 'vefaMaroc', 'VEFA en Marruecos: garantías, riesgos y preguntas que hacer', 'VEFA Marruecos', 'VEFA en Marruecos: garantías y riesgos', 'Entender la venta futura, sus límites y las preguntas que conviene hacer al notario.', 'VEFA Marruecos garantías riesgos'),
    cluster('es', 'documentsAchat', 'Documentos que verificar antes de comprar un inmueble en Marruecos', 'Expediente compra', 'Documentos antes de compra inmobiliaria en Marruecos', 'Documentos que pedir y revisar antes de una compra inmobiliaria en Marruecos.', 'documentos compra inmobiliaria Marruecos'),
    cluster('es', 'livraisonAppartement', 'Entrega de un apartamento nuevo en Marruecos: checklist', 'Entrega obra nueva', 'Entrega apartamento nuevo Marruecos: checklist', 'Preparar la entrega, reservas y seguimiento posterior de un apartamento nuevo.', 'entrega apartamento nuevo Marruecos'),
    cluster('es', 'prixMarrakech', 'Precios inmobiliarios en Marrakech: leer las diferencias antes de comprar', 'Precios Marrakech', 'Precios inmobiliarios Marrakech: barrios, obra nueva y usado', 'Entender precios en Marrakech según barrio, tipología, uso y calidad.', 'precios inmobiliarios Marrakech'),
  ],
  nl: [
    cluster('nl', 'methodeSafe', 'S.A.F.E vastgoedmethode: Security, Analysis, Fidelity & Expert Guidance', 'S.A.F.E-methode', 'S.A.F.E vastgoedmethode: definitie en proces', 'Begrijp de internationale S.A.F.E-methodologie, de vier officiële pijlers en de rol in vastgoedanalyse.', 'S.A.F.E vastgoedmethode'),
    cluster('nl', 'grilleSafe', 'S.A.F.E vastgoedmatrix: criteria, kleurenscore en beslissing', 'S.A.F.E-matrix', 'S.A.F.E vastgoedmatrix: criteria en score', 'De S.A.F.E-matrix voor ontwikkelaar, documenten, betalingen, prijs, oplevering, risico, transparantie en beslissing.', 'S.A.F.E vastgoedmatrix'),
    cluster('nl', 'analyseProjetImmobilier', 'Vastgoedprojectanalyse: volledige methode vóór aankoop', 'Projectanalyse', 'Vastgoedprojectanalyse: volledige methode', 'Structureer vastgoedprojectanalyse vóór aankoop met document-, financiële, technische en S.A.F.E-criteria.', 'vastgoedprojectanalyse'),
    cluster('nl', 'safeAchatSurPlan', 'S.A.F.E off-plan kopen: controle vóór oplevering', 'Off-plan', 'S.A.F.E off-plan vastgoedkopen: methode', 'Gebruik S.A.F.E om off-plan vastgoed te analyseren van brochure en contract tot oplevering.', 'S.A.F.E off-plan vastgoedkopen'),
    cluster('nl', 'safeInvestissement', 'S.A.F.E vastgoedinvestering: rendement, risico en exit', 'Investering', 'S.A.F.E vastgoedinvestering: rendement en risico', 'S.A.F.E toegepast op vastgoedinvestering: prijs, rendement, liquiditeit, risico en vermogenslogica.', 'S.A.F.E vastgoedinvestering'),
    cluster('nl', 'commentAnalyserPromoteur', 'Een vastgoedontwikkelaar analyseren vóór reservering', 'Ontwikkelaar', 'Vastgoedontwikkelaar analyseren', 'Methode om historiek, opleveringen, documenten, reputatie, transparantie en uitvoeringscapaciteit te analyseren.', 'vastgoedontwikkelaar analyseren'),
    cluster('nl', 'checklistAchatSurPlan', 'Checklist off-plan kopen: vragen, documenten en signalen', 'Checklist', 'Checklist off-plan kopen: documenten en risico', 'Checklist voor ontwikkelaar, contract, betalingen, materialen, prijs, oplevering en risico vóór reservering.', 'checklist off-plan kopen'),
    cluster('nl', 'guideAnalyseImmobiliere', 'Vastgoedanalyse-gids: kader vóór aankoop', 'Analyse gids', 'Vastgoedanalyse-gids vóór aankoop', 'Gids om een project te vergelijken, risico’s te lezen, prijs te toetsen en professionele controles voor te bereiden.', 'vastgoedanalyse gids'),
    cluster('nl', 'risquesAchatImmobilier', 'Risico’s bij vastgoedaankoop: signalen vóór tekenen', 'Risico’s', 'Risico’s vastgoedaankoop: signalen en preventie', 'Begrijp risico’s bij vastgoedaankoop: ontwikkelaar, documenten, betalingen, prijs, oplevering, gebruik, fiscaliteit en doorverkoop.', 'risico’s vastgoedaankoop'),
    cluster('nl', 'acheterSurPlanMaroc', 'Off-plan kopen in Marokko: risico’s, waarborgen en controles', 'Off-plan gids', 'Off-plan kopen in Marokko: risico’s en waarborgen', 'Begrijp documenten, betalingen, ontwikkelaar en oplevering voordat je off-plan vastgoed in Marokko reserveert.', 'off-plan kopen Marokko'),
    cluster('nl', 'acheterSurPlanMarrakech', 'Off-plan kopen in Marrakech: analyseer voordat je reserveert', 'Nieuwbouw Marrakech', 'Off-plan kopen in Marrakech: eerst analyseren', 'Vergelijk wijk, ontwikkelaar, prijs, documenten en oplevering voordat je nieuwbouw in Marrakech reserveert.', 'off-plan kopen Marrakech'),
    cluster('nl', 'risquesAchatMaroc', 'Risico’s bij vastgoedaankoop in Marokko: wat controleren', 'Voorzichtige koper', 'Vastgoedrisico’s Marokko: checklist koper', 'Herken praktische risico’s bij vastgoedaankoop in Marokko voordat je tekent of betaalt.', 'vastgoedrisico’s Marokko'),
    cluster('nl', 'verifierPromoteur', 'Een vastgoedontwikkelaar in Marokko controleren vóór aankoop', 'Betrouwbaarheid ontwikkelaar', 'Vastgoedontwikkelaar Marokko controleren', 'Bekijk historiek, referenties, communicatie en documenten van een vastgoedontwikkelaar.', 'vastgoedontwikkelaar controleren Marokko'),
    cluster('nl', 'vefaMaroc', 'VEFA in Marokko: garanties, risico’s en vragen', 'VEFA Marokko', 'VEFA in Marokko: garanties en risico’s', 'Begrijp verkoop op toekomstige oplevering, beperkingen en vragen voor de notaris.', 'VEFA Marokko garanties risico’s'),
    cluster('nl', 'documentsAchat', 'Documenten controleren vóór een vastgoedkoop in Marokko', 'Aankoopdossier', 'Documenten vóór vastgoedkoop in Marokko', 'Documenten die je moet vragen en laten controleren vóór een vastgoedkoop in Marokko.', 'documenten vastgoedkoop Marokko'),
    cluster('nl', 'livraisonAppartement', 'Oplevering van een nieuw appartement in Marokko: checklist', 'Oplevering nieuwbouw', 'Oplevering nieuw appartement Marokko: checklist', 'Bereid sleuteloverdracht, opmerkingen en opvolging voor een nieuw appartement voor.', 'oplevering nieuw appartement Marokko'),
    cluster('nl', 'prixMarrakech', 'Vastgoedprijzen in Marrakech: verschillen begrijpen vóór aankoop', 'Prijzen Marrakech', 'Vastgoedprijzen Marrakech: wijken, nieuwbouw en bestaand', 'Begrijp vastgoedprijzen in Marrakech per wijk, type, gebruik en kwaliteit.', 'vastgoedprijzen Marrakech'),
  ],
};

function cluster(
  locale: Locale,
  routeKey: RouteKey,
  h1: string,
  eyebrow: string,
  metaTitle: string,
  metaDescription: string,
  primaryKeyword: string
): SafeClusterCopy {
  const image = clusterImage[routeKey as keyof typeof clusterImage] ?? '/images/articles/immobilier-marrakech-2026.webp';
  const text = clusterText(locale, routeKey);
  return {
    routeKey,
    h1,
    eyebrow,
    metaTitle,
    metaDescription,
    primaryKeyword,
    secondaryKeywords: [primaryKeyword, text.secondary1, text.secondary2],
    image,
    imageAlt: text.imageAlt,
    intro: text.intro,
    sections: text.sections,
    checklistTitle: text.checklistTitle,
    checklistItems: text.checklist,
    faq: text.faq,
    relatedRouteKeys: clusterRelated.filter((key) => key !== routeKey),
    relatedArticleKeys: ['dahir', 'erreurs'],
    disclaimer: text.disclaimer,
  };
}

function clusterText(locale: Locale, routeKey: RouteKey): {
    secondary1: string;
    secondary2: string;
    imageAlt: string;
    intro: string;
    sections: { heading: string; body: string[]; bullets?: string[] }[];
    checklistTitle: string;
    checklist: string[];
    faq: { question: string; answer: string }[];
    disclaimer: string;
  } {
  const internationalRouteKeys = new Set<RouteKey>([
    'methodeSafe',
    'grilleSafe',
    'analyseProjetImmobilier',
    'safeAchatSurPlan',
    'safeInvestissement',
    'commentAnalyserPromoteur',
    'checklistAchatSurPlan',
    'guideAnalyseImmobiliere',
    'risquesAchatImmobilier',
  ]);
  const international = internationalRouteKeys.has(routeKey);

  const localized = ({
  fr: {
    secondary1: international ? 'méthodologie immobilière internationale' : 'achat immobilier Maroc',
    secondary2: 'méthode S.A.F.E',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro:
      international
        ? 'Ce guide aide l’acheteur à structurer l’analyse d’un projet immobilier avant de s’engager, quel que soit le pays concerné. Il ne remplace pas un notaire, un avocat, un expert technique ou un conseil financier.'
        : 'Ce guide aide l’acheteur à structurer les vérifications avant de s’engager. Il ne remplace pas un notaire, un avocat, un expert technique ou un conseil financier.',
    sections: [
      { heading: 'Pourquoi ralentir avant de signer', body: [international ? 'Un projet immobilier peut sembler clair dans une brochure et rester incomplet dans les documents. La décision doit relier prix, dossier, opérateur, paiements, calendrier, cadre local et usage réel du bien.' : 'Un projet immobilier peut sembler clair dans une brochure et rester incomplet dans les documents. La décision doit relier prix, dossier, promoteur, paiements, calendrier et usage réel du bien.'] },
      { heading: 'Les points à vérifier', body: ['La méthode consiste à demander les pièces, comprendre les zones floues et faire relire les engagements par des professionnels compétents lorsque l’achat devient sérieux.'], bullets: ['Identité du vendeur ou promoteur.', 'Titre, plans, surfaces et autorisations communiquées.', 'Échéancier, bénéficiaire des paiements et conditions de sortie.', 'Livraison, garanties, réserves et suivi après signature.'] },
      { heading: 'Le rôle de S.A.F.E', body: ['S.A.F.E aide à organiser le premier niveau d’analyse. La grille ne crée pas de garantie légale et ne remplace jamais les contrôles professionnels.'] },
    ],
    checklistTitle: 'Checklist avant décision',
    checklist: ['Identifier l’opérateur et les interlocuteurs.', 'Comparer le prix au quartier et à la qualité.', 'Demander les documents utiles assez tôt.', 'Comprendre chaque paiement avant de verser.', 'Faire relire les documents engageants.', 'Prévoir une marge de calendrier et de budget.'],
    faq: [
      { question: 'Ce guide est-il un conseil juridique ?', answer: 'Non. Il s’agit d’une analyse éditoriale destinée à aider à poser les bonnes questions.' },
      { question: 'S.A.F.E remplace-t-elle un notaire ?', answer: 'Non. La méthode S.A.F.E ne remplace jamais les vérifications notariales, juridiques, fiscales, financières ou techniques.' },
      { question: 'Que faire si un document manque ?', answer: 'Il faut ralentir, demander une confirmation écrite et consulter un professionnel si l’engagement est important.' },
    ],
    disclaimer: 'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  en: {
    secondary1: international ? 'international real estate methodology' : 'Morocco real estate purchase',
    secondary2: 'S.A.F.E method',
    imageAlt: 'Official S.A.F.E logo — Security, Analysis, Fidelity & Expert Guidance.',
    intro:
      international
        ? 'This guide helps buyers structure a property project review before committing, regardless of the country concerned. It does not replace a notary, lawyer, technical expert or financial adviser.'
        : 'This guide helps buyers structure checks before committing. It does not replace a notary, lawyer, technical expert or financial adviser.',
    sections: [
      { heading: 'Why buyers should slow down before signing', body: [international ? 'A property project can look clear in a brochure while important documents remain incomplete. The decision should connect price, file, operator, payments, timeline, local framework and real intended use.' : 'A property project can look clear in a brochure while important documents remain incomplete. The decision should connect price, file, developer, payments, timeline and real intended use.'] },
      { heading: 'What to verify', body: ['The method is to request documents, understand unclear points and have binding commitments reviewed by qualified professionals when the purchase becomes serious.'], bullets: ['Identity of the seller or developer.', 'Title deed, plans, surfaces and shared authorizations.', 'Payment schedule, recipient and exit conditions.', 'Delivery, guarantees, reservations and post-signature follow-up.'] },
      { heading: 'The role of S.A.F.E', body: ['S.A.F.E helps organize the first layer of analysis. The framework creates no legal guarantee and never replaces professional checks.'] },
    ],
    checklistTitle: 'Checklist before deciding',
    checklist: ['Identify the operator and responsible contacts.', 'Compare price with neighborhood and quality.', 'Request useful documents early.', 'Understand every payment before transferring funds.', 'Have binding documents reviewed.', 'Allow margin for timing and budget changes.'],
    faq: [
      { question: 'Is this guide legal advice?', answer: 'No. It is editorial analysis designed to help buyers ask the right questions.' },
      { question: 'Does S.A.F.E replace a notary?', answer: 'No. S.A.F.E never replaces notarial, legal, tax, financial or technical checks.' },
      { question: 'What if a document is missing?', answer: 'Slow down, request written clarification and consult a professional if the commitment is significant.' },
    ],
    disclaimer: 'This article is editorial analysis and does not constitute legal, tax, financial or notarial advice.',
  },
  es: {
    secondary1: international ? 'metodología inmobiliaria internacional' : 'compra inmobiliaria Marruecos',
    secondary2: 'método S.A.F.E',
    imageAlt: 'Logo oficial S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro:
      international
        ? 'Esta guía ayuda al comprador a estructurar el análisis de un proyecto inmobiliario antes de comprometerse, sea cual sea el país. No sustituye a un notario, abogado, experto técnico ni asesor financiero.'
        : 'Esta guía ayuda al comprador a estructurar verificaciones antes de comprometerse. No sustituye a un notario, abogado, experto técnico ni asesor financiero.',
    sections: [
      { heading: 'Por qué conviene frenar antes de firmar', body: [international ? 'Un proyecto inmobiliario puede parecer claro en un dosier comercial y seguir incompleto en los documentos. La decisión debe conectar precio, expediente, operador, pagos, calendario, marco local y uso real del bien.' : 'Un proyecto inmobiliario puede parecer claro en un dosier comercial y seguir incompleto en los documentos. La decisión debe conectar precio, expediente, promotor, pagos, calendario y uso real del bien.'] },
      { heading: 'Qué verificar', body: ['El método consiste en pedir documentos, entender zonas poco claras y hacer revisar compromisos vinculantes por profesionales cualificados cuando la compra se vuelve seria.'], bullets: ['Identidad del vendedor o promotor.', 'Título, planos, superficies y autorizaciones comunicadas.', 'Calendario de pagos, beneficiario y condiciones de salida.', 'Entrega, garantías, reservas y seguimiento tras la firma.'] },
      { heading: 'El papel de S.A.F.E', body: ['S.A.F.E ayuda a organizar el primer nivel de análisis. La matriz no crea garantía legal y nunca sustituye controles profesionales.'] },
    ],
    checklistTitle: 'Checklist antes de decidir',
    checklist: ['Identificar operador e interlocutores.', 'Comparar precio con barrio y calidad.', 'Pedir documentos útiles pronto.', 'Entender cada pago antes de transferir.', 'Hacer revisar documentos vinculantes.', 'Prever margen de calendario y presupuesto.'],
    faq: [
      { question: '¿Esta guía es asesoramiento jurídico?', answer: 'No. Es un análisis editorial para ayudar a formular las buenas preguntas.' },
      { question: '¿S.A.F.E sustituye al notario?', answer: 'No. S.A.F.E nunca sustituye verificaciones notariales, jurídicas, fiscales, financieras o técnicas.' },
      { question: '¿Qué hacer si falta un documento?', answer: 'Frenar, pedir aclaración por escrito y consultar a un profesional si el compromiso es importante.' },
    ],
    disclaimer: 'Este artículo es un análisis editorial y no constituye asesoramiento jurídico, fiscal, financiero ni notarial.',
  },
  nl: {
    secondary1: international ? 'internationale vastgoedmethodologie' : 'vastgoed kopen Marokko',
    secondary2: 'S.A.F.E-methode',
    imageAlt: 'Officieel S.A.F.E-logo — Security, Analysis, Fidelity & Expert Guidance.',
    intro:
      international
        ? 'Deze gids helpt kopers een vastgoedproject gestructureerd te beoordelen voordat zij zich verbinden, ongeacht het land. Hij vervangt geen notaris, advocaat, technisch expert of financieel adviseur.'
        : 'Deze gids helpt kopers controles te structureren voordat zij zich verbinden. Hij vervangt geen notaris, advocaat, technisch expert of financieel adviseur.',
    sections: [
      { heading: 'Waarom vertragen vóór ondertekening verstandig is', body: [international ? 'Een vastgoedproject kan helder lijken in een verkoopdossier terwijl belangrijke documenten ontbreken. De beslissing moet prijs, dossier, operator, betalingen, timing, lokale regels en werkelijk gebruik verbinden.' : 'Een vastgoedproject kan helder lijken in een verkoopdossier terwijl belangrijke documenten ontbreken. De beslissing moet prijs, dossier, ontwikkelaar, betalingen, timing en werkelijk gebruik verbinden.'] },
      { heading: 'Wat controleren', body: ['De methode is documenten vragen, onduidelijke punten begrijpen en bindende afspraken laten controleren door gekwalificeerde professionals wanneer de aankoop concreet wordt.'], bullets: ['Identiteit van verkoper of ontwikkelaar.', 'Titel, plannen, oppervlaktes en gedeelde vergunningen.', 'Betalingsschema, begunstigde en uitstapvoorwaarden.', 'Oplevering, garanties, opmerkingen en opvolging na ondertekening.'] },
      { heading: 'De rol van S.A.F.E', body: ['S.A.F.E helpt de eerste analyselaag te ordenen. Het kader creëert geen juridische garantie en vervangt nooit professionele controles.'] },
    ],
    checklistTitle: 'Checklist vóór beslissing',
    checklist: ['Identificeer operator en aanspreekpunten.', 'Vergelijk prijs met wijk en kwaliteit.', 'Vraag documenten vroeg op.', 'Begrijp elke betaling vóór overschrijving.', 'Laat bindende documenten controleren.', 'Voorzie marge in timing en budget.'],
    faq: [
      { question: 'Is deze gids juridisch advies?', answer: 'Nee. Het is redactionele analyse die helpt de juiste vragen te stellen.' },
      { question: 'Vervangt S.A.F.E een notaris?', answer: 'Nee. S.A.F.E vervangt nooit notariële, juridische, fiscale, financiële of technische controles.' },
      { question: 'Wat als een document ontbreekt?', answer: 'Vertraag, vraag schriftelijke verduidelijking en raadpleeg een professional als de verbintenis belangrijk is.' },
    ],
    disclaimer: 'Dit artikel is redactionele analyse en vormt geen juridisch, fiscaal, financieel of notarieel advies.',
  },
  })[locale];

  return localized;
}
