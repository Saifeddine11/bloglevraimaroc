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
  checks: { label: string; text: string }[];
  levels: { label: string; text: string }[];
  formulas: { label: string; text: string }[];
  faq: { question: string; answer: string }[];
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
      metaDescription: 'Aviso legal del sitio Le Vrai Maroc.',
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
        { heading: 'Uso de los datos', body: ['Tus datos sirven para enviar la newsletter o responder a tus mensajes. Nunca se venden.'] },
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
      intro: 'Deze pagina bestaat niet of is verplaatst. Ga terug naar home of lees onze nieuwste analyses.',
    },
  },
};

export const safePageCopies: Record<Locale, SafePageCopy> = {
  fr: {
    metaTitle: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    metaDescription:
      'S.A.F.E est une méthode propriétaire d’analyse et de présélection immobilière fondée sur quatre piliers : sécurisation du projet, analyse d’investissement, fiabilité d’exécution et encadrement acheteur.',
    eyebrow: 'Méthode propriétaire d’analyse',
    h1: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    intro:
      "S.A.F.E est une méthode propriétaire d’analyse et de présélection immobilière. En français, elle repose sur quatre piliers : Sécurisation du projet, Analyse d’investissement, Fiabilité d’exécution et Encadrement acheteur.",
    checks: [
      { label: 'Fiabilité du promoteur', text: 'Identification de l’opérateur, historique de livraison, réputation et capacité réelle à conduire le programme.' },
      { label: 'Clarté du dossier', text: 'Lecture des documents disponibles, autorisations communiquées, montage du projet et points à confirmer.' },
      { label: 'Protection des paiements', text: 'Analyse de la réservation, de l’échéancier et de la compréhension du parcours acheteur.' },
      { label: 'Qualité de construction', text: 'Étude des matériaux, finitions, plans, parties communes et cohérence de la qualité annoncée.' },
      { label: 'Cohérence du prix', text: 'Comparaison avec l’emplacement, les surfaces, la rareté, le potentiel locatif et la logique patrimoniale.' },
      { label: 'Livraison et avancement', text: 'Évaluation de l’avancement, du calendrier annoncé et des signaux de faisabilité opérationnelle.' },
      { label: 'Transparence', text: 'Vérification de la lisibilité des informations transmises et de la capacité à répondre aux questions clés.' },
      { label: 'Profil acheteur', text: 'Lecture selon l’usage visé : résidence, pied-à-terre, investissement locatif ou stratégie patrimoniale.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'Le projet est en cours d’analyse et nécessite encore certaines confirmations.' },
      { label: 'S.A.F.E Checked', text: 'Le projet a été relu selon les critères essentiels de la grille propriétaire.' },
      { label: 'S.A.F.E Prime', text: 'Le projet présente un niveau supérieur de cohérence, de lisibilité et de potentiel.' },
      { label: 'S.A.F.E Confidential', text: 'Le dossier détaillé n’est transmis qu’à des acheteurs qualifiés.' },
    ],
    formulas: [
      { label: 'Définition officielle', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance est une méthode propriétaire d’analyse et de présélection immobilière.' },
      { label: 'Clarification', text: 'S.A.F.E ne constitue pas une certification officielle d’État, ne garantit pas l’absence de risque et ne remplace pas les vérifications professionnelles nécessaires avant acquisition.' },
    ],
    faq: [
      { question: 'Que signifie S.A.F.E ?', answer: 'S.A.F.E signifie Security, Analysis, Fidelity & Expert Guidance. En français, la méthode repose sur quatre piliers : Sécurisation du projet, Analyse d’investissement, Fiabilité d’exécution et Encadrement acheteur.' },
      { question: 'S.A.F.E est-elle une certification officielle ?', answer: 'Non. S.A.F.E est une méthode propriétaire d’analyse et de présélection immobilière. Elle ne constitue pas une certification officielle d’État.' },
      { question: 'S.A.F.E garantit-elle qu’un projet est sans risque ?', answer: 'Non. S.A.F.E ne garantit pas l’absence de risque. Elle aide à structurer l’analyse d’un projet avant sa présentation à l’acheteur.' },
      { question: 'S.A.F.E remplace-t-elle le notaire ou les vérifications juridiques ?', answer: 'Non. S.A.F.E ne remplace pas les vérifications juridiques, notariales, techniques, fiscales ou financières nécessaires avant toute acquisition.' },
      { question: 'Que signifie Fidelity dans S.A.F.E ?', answer: 'Fidelity désigne la fidélité entre ce qui est annoncé et ce qui est réellement livré : plans, matériaux, finitions, délais, équipements et qualité d’exécution.' },
      { question: 'Que signifie Expert Guidance ?', answer: 'Expert Guidance désigne l’encadrement de l’acheteur : compréhension du dossier, documents à demander, échéancier de paiement, réservation, étapes notariales, livraison et aide à la décision.' },
    ],
  },
  en: {
    metaTitle: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    metaDescription:
      'S.A.F.E is a proprietary real-estate analysis and pre-selection method based on Security, Analysis, Fidelity and Expert Guidance.',
    eyebrow: 'Proprietary analysis method',
    h1: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    intro:
      'S.A.F.E is a proprietary analysis and pre-selection method: Security for project security, Analysis for investment coherence, Fidelity for consistency between what is promised and delivered, and Expert Guidance for buyer support through documents, payments, notarial steps and delivery.',
    checks: [
      { label: 'Developer reliability', text: 'Identification of the operator, delivery history, reputation and real ability to execute the project.' },
      { label: 'File clarity', text: 'Review of available documents, shared authorizations, project structure and points still to confirm.' },
      { label: 'Payment protection', text: 'Analysis of reservation terms, payment schedule and buyer journey clarity.' },
      { label: 'Construction quality', text: 'Review of materials, finishes, plans, common areas and consistency of announced quality.' },
      { label: 'Price coherence', text: 'Comparison with location, surfaces, rarity, rental potential and long-term patrimonial logic.' },
      { label: 'Delivery and progress', text: 'Assessment of progress, announced timing and operational feasibility signals.' },
      { label: 'Transparency', text: 'Verification that information is readable and key questions can be answered clearly.' },
      { label: 'Buyer fit', text: 'Assessment according to intended use: residence, pied-à-terre, rental investment or patrimonial strategy.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'The project is under review and still requires confirmations.' },
      { label: 'S.A.F.E Checked', text: 'The project has been reviewed against the essential criteria of the proprietary grid.' },
      { label: 'S.A.F.E Prime', text: 'The project shows a stronger level of coherence, readability and potential.' },
      { label: 'S.A.F.E Confidential', text: 'The detailed file is shared only with qualified buyers.' },
    ],
    formulas: [
      { label: 'Official wording', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance is a proprietary real-estate analysis and pre-selection method.' },
      { label: 'Clarification', text: 'S.A.F.E is not an official state certification, does not guarantee a risk-free project and does not replace professional due diligence before acquisition.' },
    ],
    faq: [
      { question: 'What does S.A.F.E mean?', answer: 'S.A.F.E means Security, Analysis, Fidelity & Expert Guidance: project security, investment analysis and economic coherence, consistency between what is promised and delivered, and buyer guidance through documents, payments, notarial steps and delivery.' },
      { question: 'Is S.A.F.E an official certification?', answer: 'No. S.A.F.E is a proprietary real-estate analysis and pre-selection method. It is not an official state certification.' },
      { question: 'Does S.A.F.E guarantee a risk-free project?', answer: 'No. S.A.F.E does not guarantee the absence of risk. It helps structure a project review before presentation to the buyer.' },
      { question: 'Does S.A.F.E replace the notary or legal checks?', answer: 'No. S.A.F.E does not replace the legal, notarial, technical, tax or financial checks required before any acquisition.' },
      { question: 'What does Fidelity mean in S.A.F.E?', answer: 'Fidelity means consistency between what is promised and what is actually delivered: plans, materials, finishes, timelines, equipment and execution quality.' },
      { question: 'What does Expert Guidance mean?', answer: 'Expert Guidance means buyer guidance: understanding the file, documents to request, payment schedule, reservation, notarial steps, delivery and decision support.' },
    ],
  },
  es: {
    metaTitle: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    metaDescription:
      'S.A.F.E es un método propietario de análisis y preselección inmobiliaria basado en seguridad, análisis, fidelidad y acompañamiento experto.',
    eyebrow: 'Método propietario de análisis',
    h1: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    intro:
      'S.A.F.E es un método propietario de análisis y preselección inmobiliaria. Sus pilares se explican como seguridad del proyecto, análisis de inversión, fidelidad entre la promesa y la entrega, y acompañamiento experto del comprador.',
    checks: [
      { label: 'Fiabilidad del promotor', text: 'Identificación del operador, historial de entregas, reputación y capacidad real de ejecutar el proyecto.' },
      { label: 'Claridad del expediente', text: 'Revisión de documentos disponibles, autorizaciones comunicadas, estructura del proyecto y puntos por confirmar.' },
      { label: 'Protección de pagos', text: 'Análisis de reserva, calendario de pagos y claridad del recorrido comprador.' },
      { label: 'Calidad de construcción', text: 'Revisión de materiales, acabados, planos, zonas comunes y coherencia de la calidad anunciada.' },
      { label: 'Coherencia del precio', text: 'Comparación con ubicación, superficies, rareza, potencial de alquiler y lógica patrimonial.' },
      { label: 'Entrega y avance', text: 'Evaluación del avance, calendario anunciado y señales de viabilidad operativa.' },
      { label: 'Transparencia', text: 'Verificación de la claridad de la información y de la capacidad de responder preguntas clave.' },
      { label: 'Perfil comprador', text: 'Lectura según el uso: residencia, segunda vivienda, inversión de alquiler o estrategia patrimonial.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'El proyecto está en análisis y requiere confirmaciones.' },
      { label: 'S.A.F.E Checked', text: 'El proyecto fue revisado según los criterios esenciales de la matriz propietaria.' },
      { label: 'S.A.F.E Prime', text: 'El proyecto muestra mayor coherencia, legibilidad y potencial.' },
      { label: 'S.A.F.E Confidential', text: 'El expediente detallado se comparte solo con compradores cualificados.' },
    ],
    formulas: [
      { label: 'Definición oficial', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance es un método propietario de análisis y preselección inmobiliaria.' },
      { label: 'Clarificación', text: 'S.A.F.E no es una certificación oficial del Estado, no garantiza ausencia de riesgo y no sustituye las verificaciones profesionales antes de comprar.' },
    ],
    faq: [
      { question: '¿Qué significa S.A.F.E?', answer: 'S.A.F.E significa Security, Analysis, Fidelity & Expert Guidance. En español, sus pilares se explican como seguridad del proyecto, análisis de inversión, fidelidad entre la promesa y la entrega, y acompañamiento experto del comprador.' },
      { question: '¿S.A.F.E es una certificación oficial?', answer: 'No. S.A.F.E es un método propietario de análisis y preselección inmobiliaria. No constituye una certificación oficial del Estado.' },
      { question: '¿S.A.F.E garantiza que un proyecto no tenga riesgo?', answer: 'No. S.A.F.E no garantiza la ausencia de riesgo. Ayuda a estructurar el análisis de un proyecto antes de presentarlo al comprador.' },
      { question: '¿S.A.F.E sustituye al notario o las verificaciones jurídicas?', answer: 'No. S.A.F.E no sustituye las verificaciones jurídicas, notariales, técnicas, fiscales o financieras necesarias antes de cualquier adquisición.' },
      { question: '¿Qué significa Fidelity en S.A.F.E?', answer: 'Fidelity designa la fidelidad entre lo anunciado y lo realmente entregado: planos, materiales, acabados, plazos, equipamientos y calidad de ejecución.' },
      { question: '¿Qué significa Expert Guidance?', answer: 'Expert Guidance designa el acompañamiento del comprador: comprensión del expediente, documentos que pedir, calendario de pagos, reserva, etapas notariales, entrega y ayuda a la decisión.' },
    ],
  },
  nl: {
    metaTitle: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    metaDescription:
      'S.A.F.E is een eigen methode voor vastgoedanalyse en voorselectie op basis van Security, Analysis, Fidelity en Expert Guidance.',
    eyebrow: 'Eigen analysemethode',
    h1: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance',
    intro:
      'S.A.F.E is een eigen methode voor analyse en voorselectie. De pijlers worden uitgelegd als projectzekerheid, investeringsanalyse, betrouwbaarheid tussen belofte en oplevering, en deskundige begeleiding van de koper.',
    checks: [
      { label: 'Betrouwbaarheid ontwikkelaar', text: 'Identificatie van de operator, opleverhistoriek, reputatie en reële uitvoeringscapaciteit.' },
      { label: 'Duidelijkheid dossier', text: 'Controle van beschikbare documenten, gedeelde vergunningen, projectstructuur en open punten.' },
      { label: 'Betalingsbescherming', text: 'Analyse van reservering, betalingsschema en helderheid van het koperstraject.' },
      { label: 'Bouwkwaliteit', text: 'Beoordeling van materialen, afwerking, plannen, gemeenschappelijke delen en beloofde kwaliteit.' },
      { label: 'Prijscoherentie', text: 'Vergelijking met locatie, oppervlaktes, schaarste, verhuurpotentieel en patrimoniale logica.' },
      { label: 'Oplevering en voortgang', text: 'Beoordeling van voortgang, planning en operationele haalbaarheid.' },
      { label: 'Transparantie', text: 'Controle of informatie begrijpelijk is en kernvragen duidelijk beantwoord worden.' },
      { label: 'Kopersprofiel', text: 'Analyse volgens gebruik: woning, pied-à-terre, verhuurinvestering of vermogensstrategie.' },
    ],
    levels: [
      { label: 'S.A.F.E Review', text: 'Het project wordt onderzocht en vereist nog bevestigingen.' },
      { label: 'S.A.F.E Checked', text: 'Het project is beoordeeld volgens de essentiële criteria van het eigen kader.' },
      { label: 'S.A.F.E Prime', text: 'Het project toont extra coherentie, leesbaarheid en potentieel.' },
      { label: 'S.A.F.E Confidential', text: 'Het gedetailleerde dossier wordt alleen gedeeld met gekwalificeerde kopers.' },
    ],
    formulas: [
      { label: 'Officiële definitie', text: 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance is een eigen methode voor vastgoedanalyse en voorselectie.' },
      { label: 'Verduidelijking', text: 'S.A.F.E is geen officiële staatscertificering, garandeert geen risicoloos project en vervangt geen professionele due diligence vóór aankoop.' },
    ],
    faq: [
      { question: 'Wat betekent S.A.F.E?', answer: 'S.A.F.E betekent Security, Analysis, Fidelity & Expert Guidance. In het Nederlands gaat het om projectzekerheid, investeringsanalyse, betrouwbaarheid tussen belofte en oplevering, en deskundige begeleiding van de koper.' },
      { question: 'Is S.A.F.E een officiële certificering?', answer: 'Nee. S.A.F.E is een eigen methode voor vastgoedanalyse en voorselectie. Het is geen officiële staatscertificering.' },
      { question: 'Garandeert S.A.F.E dat een project zonder risico is?', answer: 'Nee. S.A.F.E garandeert geen afwezigheid van risico. Het helpt de analyse van een project te structureren voordat het aan de koper wordt gepresenteerd.' },
      { question: 'Vervangt S.A.F.E de notaris of juridische controles?', answer: 'Nee. S.A.F.E vervangt geen juridische, notariële, technische, fiscale of financiële controles die vóór aankoop nodig zijn.' },
      { question: 'Wat betekent Fidelity in S.A.F.E?', answer: 'Fidelity verwijst naar betrouwbaarheid tussen wat wordt beloofd en wat werkelijk wordt opgeleverd: plannen, materialen, afwerking, termijnen, voorzieningen en uitvoeringskwaliteit.' },
      { question: 'Wat betekent Expert Guidance?', answer: 'Expert Guidance betekent begeleiding van de koper: dossier begrijpen, documenten opvragen, betalingsschema, reservering, notariële stappen, oplevering en hulp bij de beslissing.' },
    ],
  },
};

const clusterImage = {
  acheterSurPlanMaroc: '/images/articles/immobilier-marrakech-2026.webp',
  acheterSurPlanMarrakech: '/images/articles/marrakech-accessible-investisseurs.webp',
  risquesAchatMaroc: '/images/articles/acheter-bien-marrakech-erreurs.webp',
  verifierPromoteur: '/images/articles/gueliz-hivernage-palmeraie-investissement.webp',
  vefaMaroc: '/images/articles/zones-amizmiz-agdal-targa.webp',
  documentsAchat: '/images/articles/riads-marrakech-rendement-pieges.webp',
  livraisonAppartement: '/images/articles/immobilier-marrakech-2026.webp',
  prixMarrakech: '/images/articles/marrakech-investisseurs-immobiliers.webp',
} satisfies Record<string, string>;

const clusterRelated = ['safe', 'documentsAchat', 'verifierPromoteur', 'risquesAchatMaroc'] as RouteKey[];

export const safeClusterCopies: Record<Locale, SafeClusterCopy[]> = {
  fr: [
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
  const text = clusterText(locale);
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

function clusterText(locale: Locale): {
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
  return ({
  fr: {
    secondary1: 'achat immobilier Maroc',
    secondary2: 'méthode S.A.F.E',
    imageAlt: 'Projet immobilier au Maroc analysé selon une grille de vérification.',
    intro:
      'Ce guide aide l’acheteur à structurer les vérifications avant de s’engager. Il ne remplace pas un notaire, un avocat, un expert technique ou un conseil financier.',
    sections: [
      { heading: 'Pourquoi ralentir avant de signer', body: ['Un projet immobilier peut sembler clair dans une brochure et rester incomplet dans les documents. La décision doit relier prix, dossier, promoteur, paiements, calendrier et usage réel du bien.'] },
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
    secondary1: 'Morocco real estate purchase',
    secondary2: 'S.A.F.E method',
    imageAlt: 'Real estate project in Morocco reviewed through a verification framework.',
    intro:
      'This guide helps buyers structure checks before committing. It does not replace a notary, lawyer, technical expert or financial adviser.',
    sections: [
      { heading: 'Why buyers should slow down before signing', body: ['A property project can look clear in a brochure while important documents remain incomplete. The decision should connect price, file, developer, payments, timeline and real intended use.'] },
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
    secondary1: 'compra inmobiliaria Marruecos',
    secondary2: 'método S.A.F.E',
    imageAlt: 'Proyecto inmobiliario en Marruecos analizado mediante una matriz de verificación.',
    intro:
      'Esta guía ayuda al comprador a estructurar verificaciones antes de comprometerse. No sustituye a un notario, abogado, experto técnico ni asesor financiero.',
    sections: [
      { heading: 'Por qué conviene frenar antes de firmar', body: ['Un proyecto inmobiliario puede parecer claro en una brochure y seguir incompleto en los documentos. La decisión debe conectar precio, expediente, promotor, pagos, calendario y uso real del bien.'] },
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
    secondary1: 'vastgoed kopen Marokko',
    secondary2: 'S.A.F.E-methode',
    imageAlt: 'Vastgoedproject in Marokko beoordeeld met een verificatiekader.',
    intro:
      'Deze gids helpt kopers controles te structureren voordat zij zich verbinden. Hij vervangt geen notaris, advocaat, technisch expert of financieel adviseur.',
    sections: [
      { heading: 'Waarom vertragen vóór ondertekening verstandig is', body: ['Een vastgoedproject kan helder lijken in een brochure terwijl belangrijke documenten ontbreken. De beslissing moet prijs, dossier, ontwikkelaar, betalingen, timing en werkelijk gebruik verbinden.'] },
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
}
