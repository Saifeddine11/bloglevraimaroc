export const SITE = {
  name: 'Le Vrai Maroc',
  tagline: 'Immobilier, tourisme, investissement et tendances urbaines au Maroc réel',
  description:
    'Le Vrai Maroc décrypte l\'immobilier, le tourisme, l\'investissement et les tendances urbaines au Maroc, avec une première édition consacrée à Marrakech.',
  url: 'https://levraimaroc.com',
  ogImage: '/images/og/default.webp',
  locale: 'fr_MA',
  lang: 'fr',
  author: 'Rédaction Le Vrai Maroc',
  email: 'contact@levraimaroc.com',
  twitter: '@LeVraiMaroc',
  contactFormEndpoint: '/send-contact.php',
  nav: [
    { label: 'Immobilier', href: '/immobilier' },
    { label: 'Tourisme', href: '/tourisme' },
    { label: 'Investissement', href: '/investissement' },
    { label: 'Quartiers', href: '/quartiers' },
    { label: 'Guides', href: '/guides' },
    { label: 'Analyses', href: '/analyses' },
  ],
  footer: {
    description:
      'Le Vrai Maroc décrypte la réalité de Marrakech, de l\'immobilier et de l\'investissement.',
    legal: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
