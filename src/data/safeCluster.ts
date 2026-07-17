export const SAFE_BRAND = 'S.A.F.E — Security, Analysis, Fidelity & Expert Guidance';

export interface SafeFaqItem {
  question: string;
  answer: string;
}

export interface SafeRelatedLink {
  href: string;
  title: string;
  text: string;
}

export interface SafeSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface SafeClusterPage {
  slug: string;
  h1: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  image: string;
  imageAlt: string;
  intro: string[];
  sections: SafeSection[];
  checklistTitle: string;
  checklistItems: string[];
  faq: SafeFaqItem[];
  relatedLinks: SafeRelatedLink[];
  disclaimer?: string;
}

export const SAFE_CLUSTER_PAGES: SafeClusterPage[] = [
  {
    slug: 'acheter-sur-plan-maroc',
    h1: 'Acheter sur plan au Maroc : risques, garanties et vérifications essentielles',
    eyebrow: 'Guide achat sur plan',
    metaTitle: 'Acheter sur plan au Maroc : risques et garanties',
    metaDescription:
      'Guide pour acheter sur plan au Maroc : vérifier le promoteur, comprendre les paiements, lire les documents, anticiper la livraison et utiliser la méthode S.A.F.E comme grille de confiance.',
    primaryKeyword: 'acheter sur plan Maroc',
    secondaryKeywords: [
      'achat sur plan Maroc',
      'risques achat sur plan Maroc',
      'garanties achat immobilier Maroc',
      'méthode S.A.F.E immobilier',
    ],
    image: '/images/articles/immobilier-marrakech-2026.webp',
    imageAlt: 'Architecture moderne à Marrakech pour illustrer un achat immobilier sur plan au Maroc.',
    intro: [
      `Acheter sur plan au Maroc peut permettre d’accéder à un bien neuf, mieux situé ou mieux calibré qu’un logement déjà livré. Mais l’acheteur s’engage avant de voir le résultat final, ce qui rend la méthode d’analyse plus importante que l’enthousiasme commercial.`,
      `La bonne question n’est pas seulement de savoir si le projet est séduisant. Il faut comprendre qui construit, quels documents existent, comment les paiements sont encadrés, ce qui est réellement inclus et comment la livraison sera suivie.`,
    ],
    sections: [
      {
        heading: 'Pourquoi un achat sur plan demande plus de méthode',
        body: [
          `Dans un achat sur plan, une partie de la décision repose sur des plans, une brochure, un showroom, une promesse de livraison et un discours de vente. Cette distance entre le projet présenté et le bien livré crée des zones d’incertitude.`,
          `La méthode S.A.F.E aide à structurer ces incertitudes : fiabilité du promoteur, clarté du dossier, cohérence du prix, calendrier, matériaux, modalités de paiement et transparence des informations.`,
        ],
        bullets: [
          'Le promoteur a-t-il déjà livré des projets comparables ?',
          'Les plans, surfaces, finitions et parties communes sont-ils clairement décrits ?',
          'Le calendrier annoncé est-il cohérent avec l’avancement réel ?',
          'Les paiements sont-ils compréhensibles et rattachés à des étapes précises ?',
        ],
      },
      {
        heading: 'Les vérifications à faire avant de réserver',
        body: [
          `Avant une réservation, l’acheteur doit demander les éléments qui permettent de comprendre le projet au-delà de l’image commerciale. Un dossier incomplet n’est pas forcément un signal de blocage, mais il impose de ralentir la décision.`,
          `Les documents transmis doivent être lus avec un professionnel compétent lorsque l’engagement devient sérieux. Un guide éditorial peut aider à poser les bonnes questions, mais il ne remplace jamais un notaire, un juriste ou un expert technique.`,
        ],
        bullets: [
          'Identité du promoteur, société porteuse et interlocuteurs responsables.',
          'Plan, notice descriptive, surfaces, prix, échéancier et frais annexes.',
          'État d’avancement, date de livraison prévisionnelle et conditions de remise.',
          'Modalités de remboursement, pénalités ou limites en cas de retard ou de changement.',
        ],
      },
      {
        heading: 'Comment utiliser la méthode S.A.F.E dans la décision',
        body: [
          `La méthode éditoriale S.A.F.E ne rend pas un projet sans risque. Elle indique qu’un projet a été étudié selon une grille de critères avant d’être présenté. Cette grille sert surtout à éviter une décision fondée uniquement sur le prix, l’urgence ou une promesse orale.`,
          `Pour un achat sur plan au Maroc, la grille S.A.F.E permet de classer les questions : ce qui est clair, ce qui reste à confirmer, ce qui doit être vérifié par un professionnel et ce qui peut justifier de ne pas avancer.`,
        ],
      },
      {
        heading: 'Les signaux qui doivent faire ralentir',
        body: [
          `Un projet peut être attractif tout en nécessitant une grande prudence. Les signaux les plus sensibles concernent l’absence de documents, les changements fréquents de discours, les remises conditionnées à une décision immédiate ou l’impossibilité de vérifier l’historique du promoteur.`,
          `L’objectif n’est pas de rejeter systématiquement les projets neufs, mais d’acheter avec une lecture complète du risque, du calendrier et des obligations de chaque partie.`,
        ],
      },
    ],
    checklistTitle: 'Checklist avant un achat sur plan au Maroc',
    checklistItems: [
      'Identifier clairement le promoteur, la société porteuse et le commercial mandaté.',
      'Comparer le prix au mètre carré avec le quartier, la qualité annoncée et la rareté du projet.',
      'Lire les plans, surfaces, prestations, finitions et équipements communs.',
      'Demander l’échéancier de paiement et les conditions exactes de réservation.',
      'Faire relire les documents engageants par un professionnel indépendant.',
      'Prévoir une marge de calendrier et de budget pour les frais, retards ou ajustements.',
    ],
    faq: [
      {
        question: 'Acheter sur plan au Maroc est-il risqué ?',
        answer:
          'Tout achat immobilier comporte des risques. L’achat sur plan ajoute des incertitudes liées à la livraison future, aux finitions, aux délais et aux documents disponibles. La bonne approche consiste à vérifier le promoteur, le dossier, les paiements et les conditions de livraison avant de s’engager.',
      },
      {
        question: 'Quels documents demander avant de réserver un bien sur plan ?',
        answer:
          'Il faut demander au minimum les plans, surfaces, notice descriptive, prix, échéancier, conditions de réservation, informations sur le promoteur et calendrier prévisionnel. Les documents engageants doivent être relus par un professionnel.',
      },
      {
        question: 'La méthode S.A.F.E remplace-t-elle un notaire ?',
        answer:
          'Non. S.A.F.E est une grille propriétaire de présélection et d’analyse. Elle ne remplace pas les vérifications notariales, juridiques, techniques, fiscales ou financières.',
      },
      {
        question: 'Comment vérifier le prix d’un achat sur plan ?',
        answer:
          'Le prix doit être comparé au quartier, à la qualité de construction, aux surfaces réelles, aux prestations, à la rareté du projet et aux prix de biens similaires déjà livrés.',
      },
      {
        question: 'Faut-il acheter vite si le promoteur annonce une forte demande ?',
        answer:
          'L’urgence commerciale ne doit pas remplacer l’analyse. Un projet intéressant doit pouvoir être expliqué clairement, documenté et vérifié avant un engagement important.',
      },
      {
        question: 'Que signifie un projet analysé selon S.A.F.E ?',
        answer:
          'Cela signifie que le projet a été étudié selon une grille propriétaire portant sur le promoteur, le dossier, les paiements, les matériaux, le prix, la livraison, la transparence et le profil acheteur.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Méthode S.A.F.E',
        text: 'Comprendre la méthode éditoriale S.A.F.E appliquée aux projets immobiliers.',
      },
      {
        href: '/comment-verifier-promoteur-immobilier-maroc',
        title: 'Vérifier un promoteur immobilier',
        text: 'Lire les signaux de fiabilité avant de réserver un logement neuf.',
      },
      {
        href: '/documents-achat-immobilier-maroc',
        title: 'Documents à vérifier avant achat',
        text: 'Lister les pièces à demander et les points à faire relire.',
      },
      {
        href: '/articles/dahir-maroc-immobilier-acheteur',
        title: 'Dahir au Maroc',
        text: 'Comprendre pourquoi le cadre légal compte avant un achat immobilier.',
      },
      {
        href: '/articles/erreurs-acheter-marrakech',
        title: 'Erreurs à éviter à Marrakech',
        text: 'Éviter les décisions prises trop vite avant une acquisition.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'acheter-sur-plan-marrakech',
    h1: 'Acheter sur plan à Marrakech : comment analyser un projet avant de réserver',
    eyebrow: 'Marrakech neuf',
    metaTitle: 'Acheter sur plan à Marrakech : analyser avant de réserver',
    metaDescription:
      'Acheter sur plan à Marrakech : quartiers, promoteur, prix, documents, livraison et critères S.A.F.E pour analyser un projet neuf avant de réserver.',
    primaryKeyword: 'acheter sur plan Marrakech',
    secondaryKeywords: [
      'achat sur plan Marrakech',
      'programme neuf Marrakech',
      'projet immobilier Marrakech',
      'S.A.F.E Review Marrakech',
    ],
    image: '/images/articles/marrakech-accessible-investisseurs.webp',
    imageAlt: 'Immeubles modernes à Marrakech pour analyser un projet immobilier sur plan.',
    intro: [
      `À Marrakech, les projets sur plan peuvent viser des profils très différents : résidence principale, pied-à-terre, investissement locatif, résidence gérée ou achat patrimonial. Cette diversité rend la comparaison plus complexe qu’un simple prix au mètre carré.`,
      `Avant de réserver, l’acheteur doit relier le projet à son quartier, au sérieux du promoteur, à la qualité annoncée, au calendrier de livraison et à l’usage réel du bien.`,
    ],
    sections: [
      {
        heading: 'Lire le quartier avant de lire la brochure',
        body: [
          `À Marrakech, deux projets au même prix peuvent avoir des logiques totalement différentes selon l’adresse, l’accès, la cible locative, la proximité des services et la dynamique du quartier.`,
          `Un achat sur plan à Guéliz, Hivernage, Agdal, Targa, Route de l’Ourika ou Palmeraie ne se juge pas avec les mêmes critères. La première analyse doit donc replacer le programme dans son environnement réel.`,
        ],
        bullets: [
          'Accès routier, stationnement, commerces et transports.',
          'Cohérence entre prix, quartier et niveau de standing.',
          'Demande locative ou résidentielle selon le profil visé.',
          'Projets voisins pouvant modifier la valeur ou l’usage futur.',
        ],
      },
      {
        heading: 'Analyser le promoteur et l’avancement',
        body: [
          `La fiabilité du promoteur est centrale. Un beau projet peut devenir problématique si l’opérateur manque d’expérience, communique peu ou n’a pas d’historique comparable.`,
          `L’avancement réel doit aussi être observé. Un calendrier de livraison est plus crédible lorsqu’il correspond à un chantier visible, à des étapes documentées et à une organisation claire du suivi acheteur.`,
        ],
      },
      {
        heading: 'Comparer le prix à la promesse livrée',
        body: [
          `Le prix d’un projet neuf à Marrakech doit être lu avec les surfaces, les finitions, les parties communes, les services, la qualité du plan et la rareté de l’adresse. Un prix bas peut cacher une prestation limitée ; un prix élevé doit pouvoir être justifié par des éléments concrets.`,
          `La grille S.A.F.E aide à relier ces éléments afin d’éviter une comparaison trop rapide entre des projets qui ne livrent pas le même niveau de qualité.`,
        ],
      },
      {
        heading: 'Sécuriser la décision avant réservation',
        body: [
          `La réservation ne doit pas être une réponse à la pression commerciale. Elle doit venir après une première lecture du dossier, des conditions de paiement, de la livraison et des points à confirmer.`,
          `Un acheteur prudent garde une trace écrite des informations déterminantes : surfaces, prix, échéancier, finitions, frais, délai et engagements présentés.`,
        ],
      },
    ],
    checklistTitle: 'Checklist pour un projet sur plan à Marrakech',
    checklistItems: [
      'Comparer l’adresse à l’usage visé : résidence, location, revente ou pied-à-terre.',
      'Demander les références du promoteur et vérifier les projets déjà livrés.',
      'Étudier plans, orientation, étage, vues, nuisances possibles et parties communes.',
      'Comparer les prix avec des biens livrés dans le même secteur.',
      'Clarifier les frais, l’échéancier, la livraison et les conditions de réservation.',
      'Faire confirmer les points juridiques et notariaux avant signature engageante.',
    ],
    faq: [
      {
        question: 'Quels quartiers regarder pour acheter sur plan à Marrakech ?',
        answer:
          'Tout dépend du profil d’achat. Guéliz et Hivernage visent souvent la centralité et le standing, Agdal et Targa peuvent viser le résidentiel, tandis que Palmeraie ou Route de l’Ourika répondent à d’autres logiques patrimoniales ou touristiques.',
      },
      {
        question: 'Un projet neuf à Marrakech est-il toujours plus rentable ?',
        answer:
          'Non. La rentabilité dépend du prix d’achat, des charges, de la demande locative, de la qualité livrée, de la fiscalité et du mode d’exploitation. Le neuf peut être intéressant, mais il doit être comparé à des biens déjà livrés.',
      },
      {
        question: 'Comment savoir si le prix est cohérent ?',
        answer:
          'Il faut comparer le prix au quartier, aux surfaces, aux prestations, aux projets comparables et à la qualité attendue. La cohérence du prix fait partie des critères de la grille S.A.F.E.',
      },
      {
        question: 'Que vérifier avant de verser une réservation ?',
        answer:
          'Il faut comprendre à qui le paiement est versé, dans quelles conditions, avec quels documents, quelles possibilités de sortie et quelles étapes suivent la réservation.',
      },
      {
        question: 'La méthode S.A.F.E est-elle officielle ?',
        answer:
          'Non. S.A.F.E est une méthode éditoriale indépendante de Le Vrai Maroc. Elle sert à structurer l’analyse, mais ne constitue pas une validation administrative ou institutionnelle.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Méthode éditoriale S.A.F.E',
        text: 'Voir comment la grille S.A.F.E qualifie les projets immobiliers.',
      },
      {
        href: '/prix-immobilier-marrakech',
        title: 'Prix immobilier à Marrakech',
        text: 'Comprendre les niveaux de prix avant de comparer un programme neuf.',
      },
      {
        href: '/livraison-appartement-neuf-maroc',
        title: 'Livraison d’un appartement neuf',
        text: 'Préparer la remise des clés et les réserves de livraison.',
      },
      {
        href: '/articles/immobilier-marrakech-2026',
        title: 'Immobilier Marrakech 2026',
        text: 'Relier les projets neufs aux tendances de marché.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'risques-achat-immobilier-maroc',
    h1: 'Risques d’un achat immobilier au Maroc : les points à vérifier avant de signer',
    eyebrow: 'Prévention des risques',
    metaTitle: 'Risques achat immobilier au Maroc : points à vérifier',
    metaDescription:
      'Les principaux risques d’un achat immobilier au Maroc : promoteur, documents, paiement, prix, livraison, usage locatif et méthode S.A.F.E pour structurer les vérifications.',
    primaryKeyword: 'risques achat immobilier Maroc',
    secondaryKeywords: [
      'risques immobilier Maroc',
      'acheter immobilier Maroc prudence',
      'vérifications achat immobilier Maroc',
      'grille S.A.F.E immobilier',
    ],
    image: '/images/articles/acheter-bien-marrakech-erreurs.webp',
    imageAlt: 'Porte traditionnelle à Marrakech pour illustrer les vérifications avant un achat immobilier au Maroc.',
    intro: [
      `Un achat immobilier au Maroc peut être solide, rentable et patrimonial. Il peut aussi devenir compliqué si l’acheteur signe trop vite, comprend mal les documents ou se fie uniquement à une promesse commerciale.`,
      `Les risques ne sont pas tous juridiques. Certains sont opérationnels, financiers, techniques, locatifs ou liés à la cohérence du projet avec le profil de l’acheteur.`,
    ],
    sections: [
      {
        heading: 'Les risques liés au vendeur ou au promoteur',
        body: [
          `La première question porte sur l’interlocuteur : qui vend, qui construit, qui encaisse, qui livre et qui reste responsable après la signature ?`,
          `Un vendeur peu clair, un promoteur difficile à identifier ou un historique impossible à vérifier doivent pousser l’acheteur à demander plus d’éléments avant d’avancer.`,
        ],
        bullets: [
          'Historique de livraison insuffisant ou peu documenté.',
          'Interlocuteurs qui changent souvent ou répondent de manière vague.',
          'Dossier commercial plus précis que le dossier contractuel.',
          'Pression pour signer ou verser rapidement sans délai de vérification.',
        ],
      },
      {
        heading: 'Les risques liés aux documents',
        body: [
          `Un achat immobilier sérieux repose sur des documents lisibles. Plans, surfaces, conditions de paiement, titre, autorisations, règlement, charges, livraison et frais doivent être compris avant l’engagement.`,
          `Lorsque les documents sont incomplets, l’acheteur doit distinguer ce qui peut être obtenu plus tard de ce qui est indispensable avant de signer.`,
        ],
      },
      {
        heading: 'Les risques de prix, de liquidité et d’usage',
        body: [
          `Un bien peut être juridiquement propre mais acheté trop cher, mal placé ou mal adapté à son usage. La liquidité à la revente, les charges, la cible locative et la qualité réelle influencent fortement la valeur finale.`,
          `La méthode S.A.F.E intègre cette lecture économique afin de ne pas réduire l’analyse à la seule conformité documentaire.`,
        ],
      },
      {
        heading: 'Les risques de livraison et de qualité',
        body: [
          `Dans le neuf ou le sur plan, l’acheteur doit anticiper les écarts possibles entre brochure, showroom et livraison. Les finitions, matériaux, équipements communs, délais et réserves doivent être suivis avec méthode.`,
          `Une visite de livraison sérieuse permet de documenter les défauts visibles et de demander leur correction selon le cadre prévu.`,
        ],
      },
    ],
    checklistTitle: 'Points de vigilance avant signature',
    checklistItems: [
      'Identifier le vendeur, le promoteur, la société porteuse et le bien vendu.',
      'Comprendre le prix total, les frais, les charges et les modalités de paiement.',
      'Faire relire les documents par un notaire ou un conseil compétent.',
      'Comparer le prix avec le marché réel et l’usage prévu.',
      'Demander les éléments sur la livraison, les garanties disponibles et les recours.',
      'Ne pas signer sous pression si un point important reste flou.',
    ],
    faq: [
      {
        question: 'Quels sont les principaux risques d’un achat immobilier au Maroc ?',
        answer:
          'Les risques les plus fréquents concernent les documents incomplets, un prix mal évalué, un promoteur difficile à vérifier, des délais de livraison incertains, des frais mal anticipés ou un usage locatif surestimé.',
      },
      {
        question: 'Comment réduire les risques avant de signer ?',
        answer:
          'Il faut demander les documents, vérifier l’identité des parties, comparer le prix, clarifier les paiements, faire relire les actes et ne pas avancer sous pression commerciale.',
      },
      {
        question: 'La grille S.A.F.E couvre-t-elle tous les risques ?',
        answer:
          'Non. La grille S.A.F.E structure une présélection propriétaire, mais ne remplace pas les contrôles professionnels ni les vérifications juridiques, fiscales, financières ou techniques.',
      },
      {
        question: 'Un achat avec notaire suffit-il ?',
        answer:
          'Le notaire joue un rôle essentiel, mais l’acheteur doit aussi analyser le prix, l’usage, la qualité, la livraison, les charges et la cohérence du projet avec ses objectifs.',
      },
      {
        question: 'Quels signaux doivent alerter ?',
        answer:
          'Des documents absents, des réponses floues, une pression pour payer, un prix incohérent, un promoteur sans références ou des promesses uniquement orales doivent pousser à ralentir.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Grille S.A.F.E',
        text: 'Voir les critères de confiance utilisés pour qualifier un projet immobilier.',
      },
      {
        href: '/documents-achat-immobilier-maroc',
        title: 'Documents d’achat immobilier',
        text: 'Préparer la liste des pièces à demander avant signature.',
      },
      {
        href: '/acheter-sur-plan-maroc',
        title: 'Acheter sur plan au Maroc',
        text: 'Appliquer cette vigilance aux programmes neufs et sur plan.',
      },
      {
        href: '/articles/erreurs-acheter-marrakech',
        title: 'Erreurs à éviter',
        text: 'Repérer les pièges pratiques avant un achat à Marrakech.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'comment-verifier-promoteur-immobilier-maroc',
    h1: 'Comment vérifier un promoteur immobilier au Maroc avant d’acheter',
    eyebrow: 'Fiabilité promoteur',
    metaTitle: 'Vérifier un promoteur immobilier au Maroc avant achat',
    metaDescription:
      'Comment vérifier un promoteur immobilier au Maroc : historique, projets livrés, réputation, documents, calendrier, communication et critères S.A.F.E avant d’acheter.',
    primaryKeyword: 'comment vérifier promoteur immobilier Maroc',
    secondaryKeywords: [
      'vérifier promoteur immobilier',
      'promoteur immobilier Maroc fiable',
      'programme neuf Maroc promoteur',
      'S.A.F.E promoteur immobilier',
    ],
    image: '/images/articles/gueliz-hivernage-palmeraie-investissement.webp',
    imageAlt: 'Avenue moderne à Marrakech pour illustrer l’analyse d’un promoteur immobilier au Maroc.',
    intro: [
      `Le promoteur est l’un des critères les plus importants d’un achat neuf ou sur plan. Un projet peut sembler attractif, mais sa fiabilité dépend largement de la capacité réelle de l’opérateur à construire, livrer et gérer les engagements annoncés.`,
      `Vérifier un promoteur immobilier au Maroc consiste à réunir des signaux concordants, pas à se contenter d’une plaquette ou d’un argument commercial.`,
    ],
    sections: [
      {
        heading: 'Identifier précisément l’opérateur',
        body: [
          `La première étape est simple : savoir qui porte le projet. Il faut distinguer la marque commerciale, la société qui vend, l’équipe qui construit, les intermédiaires et les personnes habilitées à engager le dossier.`,
          `Plus les responsabilités sont claires, plus l’acheteur peut poser des questions précises sur les documents, les paiements et la livraison.`,
        ],
      },
      {
        heading: 'Étudier l’historique de livraison',
        body: [
          `Un promoteur fiable doit pouvoir présenter des références vérifiables : projets livrés, qualité observée, délais, niveau d’entretien et retours d’acheteurs. L’absence de références n’est pas toujours éliminatoire pour un nouvel opérateur, mais elle augmente le besoin de vérification.`,
          `Lorsque c’est possible, visiter un projet déjà livré donne souvent plus d’informations qu’une brochure : finitions réelles, parties communes, gestion, vieillissement des matériaux et cohérence avec la promesse initiale.`,
        ],
        bullets: [
          'Projets livrés dans la même ville ou sur le même segment.',
          'Délais de livraison passés et qualité de suivi.',
          'Réputation auprès d’acheteurs, agences et professionnels locaux.',
          'Transparence de la communication lorsque des questions précises sont posées.',
        ],
      },
      {
        heading: 'Relier promoteur, dossier et paiements',
        body: [
          `La fiabilité d’un promoteur se lit aussi dans la qualité du dossier transmis. Un opérateur sérieux doit pouvoir expliquer l’échéancier, les étapes, les documents disponibles, les frais et les conditions de livraison.`,
          `La grille S.A.F.E donne une place centrale à ce croisement : un promoteur identifié, un dossier lisible et un cadre de paiement compréhensible sont plus solides qu’une simple promesse de rentabilité.`,
        ],
      },
      {
        heading: 'Distinguer confiance commerciale et preuves utiles',
        body: [
          `Un bon relationnel commercial facilite l’échange, mais ne suffit pas. L’acheteur doit rechercher des preuves, des documents, des références et des réponses écrites sur les points déterminants.`,
          `La confiance doit se construire sur des éléments vérifiables, puis être confirmée par les professionnels compétents avant la signature.`,
        ],
      },
    ],
    checklistTitle: 'Checklist promoteur immobilier',
    checklistItems: [
      'Identifier la société porteuse, la marque commerciale et les responsables du projet.',
      'Demander des références de projets livrés et, si possible, les visiter.',
      'Observer la qualité des réponses aux questions précises.',
      'Comparer la promesse commerciale avec les documents transmis.',
      'Clarifier les paiements, délais, garanties disponibles et conditions de livraison.',
      'Faire valider les documents engageants par un professionnel indépendant.',
    ],
    faq: [
      {
        question: 'Comment savoir si un promoteur immobilier est fiable ?',
        answer:
          'Il faut croiser plusieurs éléments : identité claire, projets déjà livrés, qualité observée, réputation, documents disponibles, communication précise et cohérence entre promesse, prix et calendrier.',
      },
      {
        question: 'Faut-il visiter un ancien projet du promoteur ?',
        answer:
          'Oui, lorsque c’est possible. Un projet livré permet d’observer la qualité réelle, l’entretien, les finitions, les parties communes et les écarts éventuels avec la présentation commerciale.',
      },
      {
        question: 'Un nouveau promoteur est-il automatiquement risqué ?',
        answer:
          'Pas automatiquement. Mais l’absence d’historique augmente le besoin d’analyse du dossier, des partenaires, du financement, du chantier et des garanties disponibles.',
      },
      {
        question: 'Quels documents demander au promoteur ?',
        answer:
          'Il faut demander les documents liés au projet, aux plans, aux surfaces, aux prestations, au prix, à l’échéancier, à la livraison et aux conditions de réservation ou de vente.',
      },
      {
        question: 'Comment S.A.F.E évalue-t-elle un promoteur ?',
        answer:
          'La méthode S.A.F.E analyse notamment l’identification du promoteur, son historique, la lisibilité du dossier, la qualité de communication et la cohérence entre promesse, prix et livraison.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Critères de confiance d’un projet immobilier',
        text: 'Découvrir la place du promoteur dans la grille S.A.F.E',
      },
      {
        href: '/acheter-sur-plan-maroc',
        title: 'Acheter sur plan au Maroc',
        text: 'Vérifier le promoteur avant de réserver un programme neuf.',
      },
      {
        href: '/risques-achat-immobilier-maroc',
        title: 'Risques d’un achat immobilier au Maroc',
        text: 'Comprendre les autres risques autour du promoteur.',
      },
      {
        href: '/articles/pourquoi-investir-marrakech',
        title: 'Pourquoi investir à Marrakech',
        text: 'Relier la fiabilité du promoteur à la logique patrimoniale.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'vefa-maroc-garanties-risques',
    h1: 'VEFA au Maroc : garanties, risques et points de vigilance avant un achat sur plan',
    eyebrow: 'VEFA Maroc',
    metaTitle: 'VEFA au Maroc : garanties, risques et vigilance',
    metaDescription:
      'Comprendre la VEFA au Maroc avant un achat sur plan : documents, paiements, livraison, garanties, limites et méthode S.A.F.E pour structurer l’analyse.',
    primaryKeyword: 'VEFA Maroc garanties risques',
    secondaryKeywords: [
      'VEFA Maroc',
      'achat VEFA Maroc',
      'garanties VEFA Maroc',
      'risques VEFA Maroc',
    ],
    image: '/images/articles/zones-amizmiz-agdal-targa.webp',
    imageAlt: 'Zone résidentielle en développement à Marrakech pour illustrer un achat VEFA au Maroc.',
    intro: [
      `La VEFA, ou vente en l’état futur d’achèvement, désigne un achat immobilier avant la livraison complète du bien. Pour l’acheteur, l’enjeu est de comprendre ce qui est déjà sécurisé, ce qui reste prévisionnel et ce qui doit être confirmé avant signature.`,
      `Ce guide propose une lecture éditoriale des points de vigilance. Les aspects juridiques précis doivent toujours être vérifiés avec un notaire ou un conseil compétent.`,
    ],
    sections: [
      {
        heading: 'Comprendre ce qui est vendu avant livraison',
        body: [
          `Dans une VEFA, l’acheteur ne visite pas un bien entièrement terminé. Il achète un futur logement décrit par des plans, surfaces, notices, échéanciers et engagements de livraison.`,
          `La clarté de ces éléments est fondamentale. Plus le dossier décrit précisément le bien futur, moins l’acheteur dépend d’une interprétation orale de la promesse commerciale.`,
        ],
      },
      {
        heading: 'Lire les paiements et les étapes',
        body: [
          `L’échéancier est un point sensible. L’acheteur doit comprendre quand les sommes sont dues, à quoi elles correspondent, quelles conditions déclenchent les appels de fonds et quelles preuves d’avancement sont fournies.`,
          `Un paiement mal compris peut créer une tension financière ou contractuelle. Il faut donc relier chaque étape à des documents clairs et à une validation professionnelle si nécessaire.`,
        ],
      },
      {
        heading: 'Identifier les garanties et leurs limites',
        body: [
          `Le mot garantie peut être rassurant, mais il doit être précis. Il faut savoir ce qui est réellement garanti, par qui, dans quelles conditions, pendant combien de temps et avec quelles démarches en cas de difficulté.`,
          `La méthode S.A.F.E ne crée pas de garantie juridique. Elle aide à repérer les questions à poser sur les garanties disponibles et les limites du dossier présenté.`,
        ],
        bullets: [
          'Garantie ou engagement lié à la livraison.',
          'Garanties techniques ou réserves à la remise des clés.',
          'Responsabilité du promoteur et modalités de réclamation.',
          'Documents à faire relire avant engagement.',
        ],
      },
      {
        heading: 'Préparer la livraison dès la réservation',
        body: [
          `Une VEFA se suit dans le temps. L’acheteur doit conserver les documents, échanges, plans, notices et engagements qui permettront de comparer la livraison au dossier initial.`,
          `Cette discipline évite de découvrir trop tard qu’un élément important n’était pas écrit, pas inclus ou pas vérifiable.`,
        ],
      },
    ],
    checklistTitle: 'Checklist VEFA au Maroc',
    checklistItems: [
      'Comprendre le cadre exact de vente et les documents disponibles.',
      'Faire relire les engagements, conditions et paiements par un professionnel.',
      'Demander la notice descriptive, les plans et les surfaces détaillées.',
      'Clarifier les garanties annoncées et leurs limites concrètes.',
      'Conserver tous les échanges déterminants par écrit.',
      'Préparer une visite de livraison structurée avec réserves si nécessaire.',
    ],
    faq: [
      {
        question: 'Que signifie VEFA au Maroc ?',
        answer:
          'La VEFA désigne une vente en l’état futur d’achèvement, c’est-à-dire un achat avant livraison complète du bien. Le cadre exact et les documents doivent être vérifiés avec un professionnel.',
      },
      {
        question: 'Quels sont les principaux risques en VEFA ?',
        answer:
          'Les risques concernent notamment les retards, les écarts de qualité, les documents incomplets, les paiements mal compris et les garanties dont les limites ne sont pas claires.',
      },
      {
        question: 'S.A.F.E est-elle une garantie VEFA ?',
        answer:
          'Non. S.A.F.E est une méthode éditoriale d’analyse. Elle ne crée pas de garantie juridique et ne remplace pas les garanties prévues par les documents ou le droit applicable.',
      },
      {
        question: 'Comment vérifier une VEFA avant signature ?',
        answer:
          'Il faut lire les plans, surfaces, notices, échéancier, conditions de réservation ou vente, garanties annoncées et calendrier, puis faire relire les documents engageants.',
      },
      {
        question: 'Que faire en cas de retard annoncé ?',
        answer:
          'Il faut relire les documents signés, demander des explications écrites et consulter un professionnel pour comprendre les droits, obligations et démarches possibles.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Projet analysé selon S.A.F.E',
        text: 'Comprendre ce que la méthode éditoriale peut dire ou ne pas dire.',
      },
      {
        href: '/acheter-sur-plan-maroc',
        title: 'Acheter sur plan au Maroc',
        text: 'Lire les vérifications essentielles avant de réserver.',
      },
      {
        href: '/livraison-appartement-neuf-maroc',
        title: 'Livraison appartement neuf',
        text: 'Préparer la comparaison entre promesse et bien livré.',
      },
      {
        href: '/documents-achat-immobilier-maroc',
        title: 'Documents à vérifier',
        text: 'Identifier les pièces utiles avant une acquisition.',
      },
      {
        href: '/articles/dahir-maroc-immobilier-acheteur',
        title: 'Dahir et achat immobilier',
        text: 'Relier la VEFA aux textes officiels et à la vérification notariale.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'documents-achat-immobilier-maroc',
    h1: 'Documents à vérifier avant un achat immobilier au Maroc',
    eyebrow: 'Dossier achat',
    metaTitle: 'Documents à vérifier avant achat immobilier au Maroc',
    metaDescription:
      'Liste des documents à vérifier avant un achat immobilier au Maroc : identité, titre, plans, surfaces, prix, paiements, livraison, charges et grille S.A.F.E.',
    primaryKeyword: 'documents achat immobilier Maroc',
    secondaryKeywords: [
      'documents à vérifier achat immobilier Maroc',
      'dossier achat immobilier Maroc',
      'avant signature immobilier Maroc',
      'S.A.F.E dossier immobilier',
    ],
    image: '/images/articles/riads-marrakech-rendement-pieges.webp',
    imageAlt: 'Patio de riad à Marrakech pour illustrer l’examen des documents avant un achat immobilier.',
    intro: [
      `Les documents sont la mémoire d’un achat immobilier. Ils permettent de distinguer ce qui est promis, ce qui est écrit, ce qui est vérifiable et ce qui doit encore être confirmé.`,
      `Avant un achat au Maroc, l’acheteur doit construire un dossier lisible, surtout si le bien est neuf, sur plan, destiné à la location ou acheté à distance.`,
    ],
    sections: [
      {
        heading: 'Les documents d’identification',
        body: [
          `Il faut d’abord identifier les parties : vendeur, promoteur, société porteuse, mandataire éventuel et bien concerné. Une vente claire commence par une chaîne d’interlocuteurs claire.`,
          `Cette étape évite de mélanger marque commerciale, intermédiaire, société de projet et propriétaire réel du bien.`,
        ],
      },
      {
        heading: 'Les documents décrivant le bien',
        body: [
          `Plans, surfaces, étage, orientation, annexes, parking, équipements, finitions et parties communes doivent être suffisamment précis pour éviter une interprétation différente au moment de la livraison ou de la signature définitive.`,
          `Dans le neuf, la notice descriptive est particulièrement importante car elle relie la promesse commerciale à ce qui doit être livré.`,
        ],
        bullets: [
          'Plans et surfaces détaillées.',
          'Notice descriptive ou descriptif des prestations.',
          'Finitions, équipements, parking, cave ou annexes.',
          'Charges, règlement ou règles de copropriété lorsque disponibles.',
        ],
      },
      {
        heading: 'Les documents financiers et de paiement',
        body: [
          `Le prix ne se limite pas au montant affiché. Frais, taxes, charges, honoraires, conditions de réservation, échéancier et modalités de paiement doivent être compris avant tout versement significatif.`,
          `Un document financier clair doit répondre à trois questions : combien, à qui et à quel moment ?`,
        ],
      },
      {
        heading: 'La relecture professionnelle',
        body: [
          `Un dossier éditorialement cohérent ne suffit pas. Les documents engageants doivent être relus par un notaire ou un professionnel compétent, surtout lorsque l’acheteur n’est pas familier avec le marché marocain.`,
          `La grille S.A.F.E aide à repérer les zones floues, mais elle ne remplace pas la vérification juridique, fiscale, notariale, technique ou financière.`,
        ],
      },
    ],
    checklistTitle: 'Documents à réunir avant de signer',
    checklistItems: [
      'Identité du vendeur, promoteur, société porteuse ou mandataire.',
      'Description précise du bien : plans, surfaces, annexes et prestations.',
      'Prix total, frais, taxes, charges et honoraires éventuels.',
      'Conditions de réservation, échéancier et modalités de paiement.',
      'Informations sur la livraison, les garanties annoncées et les réserves possibles.',
      'Avis ou relecture d’un professionnel avant signature engageante.',
    ],
    faq: [
      {
        question: 'Quels documents demander avant un achat immobilier au Maroc ?',
        answer:
          'Il faut demander les documents d’identification, le descriptif du bien, les plans, les surfaces, le prix, les frais, les modalités de paiement et les documents liés à la livraison ou à la copropriété selon le cas.',
      },
      {
        question: 'Les documents commerciaux suffisent-ils ?',
        answer:
          'Non. Une brochure ou une présentation commerciale ne suffit pas. Les éléments importants doivent apparaître dans des documents vérifiables et, si nécessaire, dans les actes relus par un professionnel.',
      },
      {
        question: 'Faut-il tout vérifier avant une simple réservation ?',
        answer:
          'Plus le versement ou l’engagement est important, plus le dossier doit être clair. Même avant réservation, les conditions de sortie, les paiements et les éléments essentiels doivent être compris.',
      },
      {
        question: 'Que faire si un document manque ?',
        answer:
          'Il faut demander pourquoi il manque, quand il sera disponible et si l’absence empêche de s’engager. Certains documents sont indispensables avant signature définitive.',
      },
      {
        question: 'Comment S.A.F.E utilise-t-elle les documents ?',
        answer:
          'La méthode S.A.F.E évalue la clarté du dossier, les documents transmis, les zones floues et les points qui doivent être confirmés avant présentation du projet.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Grille S.A.F.E',
        text: 'Voir comment S.A.F.E analyse la clarté du dossier immobilier.',
      },
      {
        href: '/risques-achat-immobilier-maroc',
        title: 'Risques achat immobilier',
        text: 'Relier les documents aux principaux risques avant signature.',
      },
      {
        href: '/vefa-maroc-garanties-risques',
        title: 'VEFA au Maroc',
        text: 'Comprendre les documents spécifiques à l’achat sur plan.',
      },
      {
        href: '/articles/dahir-maroc-immobilier-acheteur',
        title: 'Dahir au Maroc',
        text: 'Lire le rôle des textes officiels dans un dossier immobilier.',
      },
      {
        href: '/articles/riads-marrakech-guide',
        title: 'Riads à Marrakech',
        text: 'Lire un cas où les documents, autorisations et usage sont déterminants.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'livraison-appartement-neuf-maroc',
    h1: 'Livraison d’un appartement neuf au Maroc : checklist avant remise des clés',
    eyebrow: 'Remise des clés',
    metaTitle: 'Livraison appartement neuf au Maroc : checklist',
    metaDescription:
      'Checklist de livraison d’un appartement neuf au Maroc : réserves, finitions, surfaces, équipements, parties communes, documents et suivi après remise des clés.',
    primaryKeyword: 'livraison appartement neuf Maroc',
    secondaryKeywords: [
      'checklist livraison appartement neuf',
      'remise des clés Maroc',
      'réserves livraison appartement',
      'qualité construction Maroc',
    ],
    image: '/images/articles/immobilier-marrakech-2026.webp',
    imageAlt: 'Architecture moderne à Marrakech pour illustrer la livraison d’un appartement neuf au Maroc.',
    intro: [
      `La livraison d’un appartement neuf est le moment où la promesse devient concrète. L’acheteur compare alors les plans, les finitions, les équipements et les engagements avec le bien réellement remis.`,
      `Une visite de livraison ne doit pas être improvisée. Elle doit permettre de repérer les défauts visibles, de formuler des réserves et de conserver une trace claire des corrections demandées.`,
    ],
    sections: [
      {
        heading: 'Préparer la visite avant le rendez-vous',
        body: [
          `Avant la remise des clés, l’acheteur doit réunir les documents qui décrivent le bien : plans, notice, échanges écrits, options choisies, équipements annoncés et éventuels engagements particuliers.`,
          `Cette préparation évite de visiter uniquement avec une impression générale. Elle permet de comparer point par point la livraison avec le dossier de départ.`,
        ],
      },
      {
        heading: 'Contrôler le logement et les finitions',
        body: [
          `La visite doit couvrir les sols, murs, plafonds, menuiseries, portes, fenêtres, sanitaires, cuisine, prises, éclairage, climatisation éventuelle, évacuations, robinets, placards et équipements inclus.`,
          `Les défauts visibles doivent être notés précisément, idéalement avec photos et localisation. Une réserve vague est plus difficile à suivre qu’une remarque concrète.`,
        ],
        bullets: [
          'Ouvrir et fermer portes, fenêtres, placards et volets.',
          'Tester prises, interrupteurs, arrivées et évacuations d’eau.',
          'Observer fissures, traces, rayures, joints et alignements.',
          'Comparer les matériaux livrés avec la notice ou les options validées.',
        ],
      },
      {
        heading: 'Vérifier les parties communes et annexes',
        body: [
          `Parking, ascenseur, hall, couloirs, sécurité, espaces communs, accès et équipements partagés influencent fortement l’usage et la valeur du bien.`,
          `Même si certaines parties communes ne sont pas finalisées, l’acheteur doit demander le calendrier, les responsabilités et les modalités de correction ou d’achèvement.`,
        ],
      },
      {
        heading: 'Suivre les réserves après remise des clés',
        body: [
          `La livraison ne s’arrête pas à la signature du procès-verbal ou du document de remise. Les réserves doivent être suivies, relancées et documentées jusqu’à correction.`,
          `Une méthode de suivi simple, avec photos, dates, messages et réponses, permet d’éviter que les petits défauts deviennent invisibles dans la gestion quotidienne.`,
        ],
      },
    ],
    checklistTitle: 'Checklist livraison appartement neuf',
    checklistItems: [
      'Apporter plans, notice descriptive, options, échanges écrits et liste de contrôle.',
      'Tester portes, fenêtres, prises, eau, climatisation, sanitaires et équipements.',
      'Vérifier finitions, matériaux, peinture, sols, joints, placards et cuisine.',
      'Contrôler parking, cave, parties communes et accès.',
      'Photographier les défauts et formuler des réserves précises.',
      'Conserver le calendrier de correction et les échanges après livraison.',
    ],
    faq: [
      {
        question: 'Que vérifier lors de la livraison d’un appartement neuf ?',
        answer:
          'Il faut vérifier les finitions, équipements, portes, fenêtres, électricité, plomberie, climatisation, sanitaires, annexes, parties communes et conformité avec les documents transmis.',
      },
      {
        question: 'Comment formuler des réserves ?',
        answer:
          'Les réserves doivent être précises : pièce concernée, défaut observé, photo si possible et correction demandée. Il faut conserver une trace écrite.',
      },
      {
        question: 'Faut-il venir accompagné ?',
        answer:
          'Si l’acheteur n’est pas à l’aise avec les points techniques, il peut être utile de venir avec une personne compétente ou un professionnel indépendant.',
      },
      {
        question: 'Que faire si des parties communes ne sont pas terminées ?',
        answer:
          'Il faut demander un calendrier, les responsabilités de correction et une trace écrite des engagements liés aux parties communes.',
      },
      {
        question: 'La méthode S.A.F.E analyse-t-elle la livraison ?',
        answer:
          'Oui. La livraison, l’avancement et la cohérence entre promesse et bien livré font partie des critères de confiance étudiés dans la grille S.A.F.E',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Méthode S.A.F.E',
        text: 'Voir comment la livraison entre dans la qualification d’un projet.',
      },
      {
        href: '/vefa-maroc-garanties-risques',
        title: 'VEFA au Maroc',
        text: 'Comprendre les risques de livraison dans un achat sur plan.',
      },
      {
        href: '/acheter-sur-plan-marrakech',
        title: 'Acheter sur plan à Marrakech',
        text: 'Analyser le projet avant d’arriver à la remise des clés.',
      },
      {
        href: '/articles/immobilier-marrakech-2026',
        title: 'Immobilier Marrakech 2026',
        text: 'Replacer le neuf dans les tendances de marché.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
  {
    slug: 'prix-immobilier-marrakech',
    h1: 'Prix immobilier à Marrakech : comprendre le marché avant d’acheter',
    eyebrow: 'Prix Marrakech',
    metaTitle: 'Prix immobilier à Marrakech : comprendre avant achat',
    metaDescription:
      'Comprendre les prix immobiliers à Marrakech avant d’acheter : quartiers, neuf, ancien, riads, villas, rentabilité, liquidité et méthode S.A.F.E.',
    primaryKeyword: 'prix immobilier Marrakech',
    secondaryKeywords: [
      'prix m2 Marrakech',
      'marché immobilier Marrakech',
      'acheter immobilier Marrakech prix',
      'prix appartement Marrakech',
    ],
    image: '/images/articles/marrakech-investisseurs-immobiliers.webp',
    imageAlt: 'Villa et jardin à Marrakech pour illustrer les prix immobiliers de la ville.',
    intro: [
      `Les prix immobiliers à Marrakech ne se lisent pas avec une moyenne unique. La ville mélange appartements neufs, ancien central, villas, riads, résidences touristiques, quartiers premium et zones en développement.`,
      `Avant d’acheter, l’enjeu est de comprendre ce que le prix rémunère réellement : adresse, rareté, qualité, potentiel locatif, liquidité, état du bien et cohérence avec l’usage prévu.`,
    ],
    sections: [
      {
        heading: 'Pourquoi les moyennes peuvent tromper',
        body: [
          `Un prix moyen masque de fortes différences entre Guéliz, Hivernage, Médina, Palmeraie, Agdal, Targa ou les routes périurbaines. Deux biens au même prix peuvent offrir une liquidité, une clientèle et un risque totalement différents.`,
          `La comparaison doit se faire par segment : appartement neuf, appartement ancien, riad, villa, terrain ou bien à vocation locative.`,
        ],
      },
      {
        heading: 'Les facteurs qui font varier le prix',
        body: [
          `Le quartier compte, mais il ne suffit pas. La qualité de construction, la surface utile, les parties communes, le stationnement, la vue, les nuisances, le standing, les charges et l’état juridique ou technique influencent la valeur.`,
          `Dans le neuf, le prix doit aussi être relié au promoteur, au calendrier, aux finitions et à la crédibilité de la livraison.`,
        ],
        bullets: [
          'Adresse, accessibilité et environnement immédiat.',
          'Qualité du bâti, prestations et entretien.',
          'Demande locative ou résidentielle réelle.',
          'Rareté, liquidité à la revente et frais de détention.',
        ],
      },
      {
        heading: 'Relier prix et profil acheteur',
        body: [
          `Un bon prix pour un résident n’est pas toujours un bon prix pour un investisseur locatif. Un bien central peut offrir de la liquidité, tandis qu’un bien plus grand en périphérie peut répondre à une logique familiale ou patrimoniale différente.`,
          `La méthode S.A.F.E intègre cette adéquation avec le profil acheteur afin d’éviter une décision uniquement fondée sur une remise ou une comparaison superficielle.`,
        ],
      },
      {
        heading: 'Comparer avant de négocier',
        body: [
          `La négociation est utile seulement si l’acheteur connaît les références comparables. Il faut comparer des biens réellement similaires : quartier, état, standing, étage, surface, charges, usage et disponibilité.`,
          `Un prix bas peut être justifié par un défaut de liquidité, des travaux, une localisation secondaire ou une incertitude documentaire. Un prix élevé doit être expliqué par des qualités concrètes.`,
        ],
      },
    ],
    checklistTitle: 'Checklist prix immobilier à Marrakech',
    checklistItems: [
      'Comparer par quartier et par type de bien, pas avec une moyenne globale.',
      'Distinguer prix affiché, prix négocié, frais et budget total.',
      'Relier le prix à la qualité, aux charges, à l’usage et à la liquidité.',
      'Comparer le neuf avec des biens livrés ou anciens comparables.',
      'Vérifier si la rentabilité annoncée repose sur des hypothèses réalistes.',
      'Garder une marge pour travaux, ameublement, fiscalité ou imprévus.',
    ],
    faq: [
      {
        question: 'Quel est le prix immobilier moyen à Marrakech ?',
        answer:
          'Une moyenne seule est peu utile car les écarts sont importants selon quartier, type de bien, état, standing et usage. Il faut comparer par segment et avec des biens réellement comparables.',
      },
      {
        question: 'Pourquoi deux appartements à Marrakech peuvent-ils avoir des prix très différents ?',
        answer:
          'L’adresse, l’étage, la surface, la qualité, les parties communes, le stationnement, les charges, l’état du bien et la demande locative peuvent créer de forts écarts.',
      },
      {
        question: 'Le neuf est-il plus cher que l’ancien ?',
        answer:
          'Souvent, mais pas toujours à qualité comparable. Le neuf intègre une promesse de livraison, des prestations, une fiscalité et parfois des frais ou charges différents. Il faut comparer le budget total.',
      },
      {
        question: 'Comment savoir si un prix est cohérent ?',
        answer:
          'Il faut comparer le bien avec des références proches, analyser la qualité, la liquidité, les charges, l’usage prévu et le potentiel locatif ou patrimonial.',
      },
      {
        question: 'Quel lien entre prix et méthode S.A.F.E ?',
        answer:
          'La cohérence du prix fait partie des critères S.A.F.E. La grille cherche à comprendre si le prix est justifié par l’emplacement, la qualité, le projet et le profil de l’acheteur.',
      },
    ],
    relatedLinks: [
      {
        href: '/safe-certification-immobiliere',
        title: 'Méthode éditoriale S.A.F.E',
        text: 'Voir comment la cohérence du prix est analysée dans la méthode.',
      },
      {
        href: '/acheter-sur-plan-marrakech',
        title: 'Acheter sur plan à Marrakech',
        text: 'Appliquer l’analyse de prix aux projets neufs.',
      },
      {
        href: '/articles/marrakech-accessible-investisseurs',
        title: 'Marrakech reste-t-elle accessible ?',
        text: 'Lire les budgets d’entrée et profils d’acheteurs.',
      },
      {
        href: '/articles/gueliz-hivernage-palmeraie-guide',
        title: 'Guéliz, Hivernage, Palmeraie',
        text: 'Comparer les quartiers selon votre profil.',
      },
    ],
    disclaimer:
      'Cet article est une analyse éditoriale et ne constitue pas un conseil juridique, fiscal, financier ou notarial.',
  },
];

export const SAFE_CLUSTER_PATHS = SAFE_CLUSTER_PAGES.map((page) => `/${page.slug}`);

export function getSafeClusterPage(slug: string): SafeClusterPage | undefined {
  return SAFE_CLUSTER_PAGES.find((page) => page.slug === slug);
}
