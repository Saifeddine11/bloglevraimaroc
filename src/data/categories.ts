export interface Category {
  slug: string;
  label: string;
  labelPlural: string;
  description: string;
  color: string;
  bgColor: string;
  icon: 'building-2' | 'plane' | 'trending-up' | 'map-pin' | 'clipboard-list' | 'search' | 'file-text';
}

export const CATEGORIES: Record<string, Category> = {
  immobilier: {
    slug: 'immobilier',
    label: 'Immobilier',
    labelPlural: 'Immobilier',
    description:
      'Prix, tendances, quartiers, guides d\'achat et actualité du marché immobilier à Marrakech.',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    icon: 'building-2',
  },
  tourisme: {
    slug: 'tourisme',
    label: 'Tourisme',
    labelPlural: 'Tourisme',
    description:
      'Tendances touristiques, hôtellerie, événements et impact économique du tourisme à Marrakech.',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    icon: 'plane',
  },
  investissement: {
    slug: 'investissement',
    label: 'Investissement',
    labelPlural: 'Investissement',
    description:
      'Rendements, fiscalité, risques et opportunités pour les investisseurs immobiliers à Marrakech.',
    color: 'text-rdm-orange',
    bgColor: 'bg-rdm-orange-soft',
    icon: 'trending-up',
  },
  quartiers: {
    slug: 'quartiers',
    label: 'Quartiers',
    labelPlural: 'Quartiers',
    description:
      'Guides détaillés sur les quartiers de Marrakech : ambiance, prix, accessibilité, profil d\'acheteur.',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    icon: 'map-pin',
  },
  guides: {
    slug: 'guides',
    label: 'Guides pratiques',
    labelPlural: 'Guides pratiques',
    description:
      'Guides pratiques pour acheter, investir, louer ou s\'installer à Marrakech.',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    icon: 'clipboard-list',
  },
  analyses: {
    slug: 'analyses',
    label: 'Analyses',
    labelPlural: 'Analyses',
    description:
      'Analyses de fond et perspectives de marché sur l\'immobilier et le tourisme à Marrakech.',
    color: 'text-slate-700',
    bgColor: 'bg-slate-50',
    icon: 'search',
  },
};

export const getCategoryInfo = (slug: string): Category => {
  return (
    CATEGORIES[slug] ?? {
      slug,
      label: slug.charAt(0).toUpperCase() + slug.slice(1),
      labelPlural: slug,
      description: '',
      color: 'text-rdm-gray',
      bgColor: 'bg-rdm-bg',
      icon: 'file-text',
    }
  );
};
