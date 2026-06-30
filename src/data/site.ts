export const SITE = {
  name: 'Le Vrai Maroc',
  tagline: 'Immobilier, tourisme et investissement à Marrakech',
  description:
    'Le Vrai Maroc décrypte l\'immobilier, le tourisme, les quartiers et les opportunités d\'investissement à Marrakech.',
  url: 'https://levraimaroc.com',
  ogImage: '/images/og/default.webp',
  locale: 'fr_MA',
  lang: 'fr',
  author: 'Rédaction Le Vrai Maroc',
  email: 'contact@levraimaroc.com',
  twitter: '@LeVraiMaroc',
  // ── Contact form endpoint (Formspree) ────────────────────────────────
  // Newsletter uses PHP: public/send-newsletter.php (no config needed)
  // Contact form uses Formspree:
  //   1. Go to https://formspree.io and create a free account
  //   2. Create a new form → set recipient to contact@levraimaroc.com
  //   3. Copy the endpoint (e.g. https://formspree.io/f/xabcdefg)
  //   4. Replace the placeholder below, then run `npm run build`
  contactFormEndpoint: 'https://formspree.io/f/REPLACE_WITH_CONTACT_FORM_ID',
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
