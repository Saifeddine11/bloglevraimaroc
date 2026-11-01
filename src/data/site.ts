export const SITE = {
  name: "Le Vrai Maroc",
  tagline:
    "Actualités, économie, immobilier, tourisme et culture au Maroc réel",
  description:
    "Le Vrai Maroc est une publication éditoriale indépendante qui couvre l'actualité, l'économie, l'immobilier, l'investissement, le tourisme et la culture au Maroc.",
  url: "https://levraimaroc.com",
  ogImage: "/images/og/default.webp",
  locale: "fr_MA",
  lang: "fr",
  author: "La rédaction Le Vrai Maroc",
  email: "contact@levraimaroc.com",
  twitter: "@LeVraiMaroc",
  contactFormEndpoint: "/send-contact.php",
  nav: [
    { label: "Actualités", href: "/actualites" },
    { label: "Immobilier", href: "/immobilier" },
    { label: "Tourisme", href: "/tourisme" },
    { label: "Investissement", href: "/investissement" },
    { label: "Quartiers", href: "/quartiers" },
    { label: "Guides", href: "/guides" },
    { label: "Analyses", href: "/analyses" },
  ],
  footer: {
    description:
      "Le Vrai Maroc couvre l'actualité, l'économie, l'immobilier, l'investissement, le tourisme et la culture au Maroc.",
    legal: [
      { label: "Politique éditoriale", href: "/politique-editoriale" },
      { label: "Corrections", href: "/politique-de-correction" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;
