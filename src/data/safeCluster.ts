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

const SAFE_ENTITY_DEFINITION =
  "S.A.F.E — Security, Analysis, Fidelity & Expert Guidance — est une méthode internationale propriétaire d’analyse et de présélection immobilière. Elle repose sur une grille structurée destinée à mieux qualifier un projet avant sa présentation à l’acheteur ou à l’investisseur.";

const SAFE_SCOPE_DISCLAIMER =
  'S.A.F.E est une méthodologie internationale de présélection et d’analyse. Elle ne constitue pas une certification officielle d’État, une garantie juridique, une promesse de rendement ou un substitut aux vérifications notariales, juridiques, techniques, fiscales et financières.';

const SAFE_ENTITY_CLUSTER_PAGES: SafeClusterPage[] = [
  {
    slug: 'methode-safe-immobilier',
    h1: 'Méthode S.A.F.E immobilier : définition, piliers et processus de décision',
    eyebrow: 'Méthode S.A.F.E',
    metaTitle: 'Méthode S.A.F.E immobilier : définition et fonctionnement',
    metaDescription:
      'La méthode S.A.F.E immobilier expliquée : Security, Analysis, Fidelity & Expert Guidance, quatre piliers internationaux pour analyser un projet immobilier avant achat.',
    primaryKeyword: 'méthode S.A.F.E immobilier',
    secondaryKeywords: ['méthode SAFE', 'S.A.F.E immobilier', 'real estate methodology', 'property due diligence'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      SAFE_ENTITY_DEFINITION,
      'Cette page cible l’intention “comment fonctionne S.A.F.E ?”. Elle présente le raisonnement, les étapes et les limites de la méthode sans se substituer à la page pilier ni à la grille opérationnelle.',
    ],
    sections: [
      {
        heading: 'Pourquoi une méthode dédiée à l’immobilier',
        body: [
          'Un achat immobilier engage du capital, du temps, de la confiance et souvent une projection de vie. Pourtant, la décision est encore trop souvent prise à partir d’une brochure, d’une visite rapide, d’une recommandation commerciale ou d’un prix présenté comme urgent.',
          'S.A.F.E existe pour remettre de l’ordre dans cette décision. La méthode classe les questions essentielles avant présentation ou achat : sécurisation du projet, analyse d’investissement, fiabilité d’exécution et encadrement acheteur.',
        ],
        bullets: [
          'Séparer les preuves des promesses commerciales.',
          'Relier le prix à la qualité et à l’usage réel.',
          'Identifier les points à confirmer avant engagement.',
          'Préparer les questions pour les professionnels compétents.',
        ],
      },
      {
        heading: 'Les quatre piliers officiels',
        body: [
          'Security concerne la sécurisation du projet : qui vend, qui construit, quels documents existent, quelles autorisations sont disponibles et quelles incertitudes restent visibles.',
          'Analysis concerne l’analyse d’investissement : prix, emplacement, usage, rendement plausible, liquidité, comparaison de marché et cohérence avec le profil de l’acheteur. Fidelity concerne la fiabilité d’exécution : correspondance entre ce qui est annoncé et ce qui peut être livré. Expert Guidance concerne l’encadrement acheteur : documents, paiements, calendrier, accompagnement et décision finale.',
        ],
      },
      {
        heading: 'Du diagnostic à la décision',
        body: [
          'La méthode ne donne pas un verdict magique. Elle transforme une masse d’informations en décision lisible : avancer, approfondir, attendre, négocier, demander des preuves ou écarter le projet.',
          'Elle peut s’appliquer en France, au Maroc, à Dubaï, en Espagne, au Portugal, au Canada, aux États-Unis, en Belgique ou en Suisse. Les questions restent structurées par S.A.F.E, mais les pièces et obligations doivent toujours être adaptées au pays concerné.',
        ],
      },
      {
        heading: 'Ce que la méthode ne prétend pas faire',
        body: [
          'Une méthode d’analyse ne remplace pas les professionnels. S.A.F.E aide à poser les bonnes questions et à détecter les zones faibles ; elle ne certifie pas la propriété, ne valide pas un permis, ne garantit pas une livraison et ne promet pas une rentabilité.',
          'Sa valeur vient de sa discipline : rendre visible ce qui est connu, ce qui est supposé, ce qui doit être prouvé et ce qui doit être confirmé par un conseil qualifié.',
        ],
      },
    ],
    checklistTitle: 'Processus de lecture S.A.F.E',
    checklistItems: [
      'Décrire le projet, le vendeur, le promoteur et l’usage visé.',
      'Classer les documents disponibles et les documents manquants.',
      'Comparer prix, marché, qualité et potentiel de sortie.',
      'Évaluer la fidélité entre promesse commerciale et éléments vérifiables.',
      'Identifier les questions à poser au notaire, avocat, architecte ou expert.',
      'Prendre une décision argumentée : avancer, approfondir, attendre ou écarter.',
    ],
    faq: [
      { question: 'Qu’est-ce que la méthode S.A.F.E immobilier ?', answer: SAFE_ENTITY_DEFINITION },
      { question: 'S.A.F.E est-elle une due diligence ?', answer: 'S.A.F.E prépare et structure une due diligence immobilière, mais ne remplace pas les vérifications professionnelles propres à chaque pays.' },
      { question: 'La méthode est-elle internationale ?', answer: 'Oui. S.A.F.E est internationale et peut s’appliquer à différents marchés, par exemple France, Maroc, Dubaï, Espagne, Portugal, Canada, États-Unis, Belgique ou Suisse.' },
      { question: 'Quel est le résultat d’une analyse S.A.F.E ?', answer: 'Le résultat est une lecture structurée des points forts, limites, documents manquants, risques et actions à confirmer avant décision.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'grille-safe-immobilier',
    h1: 'Grille S.A.F.E immobilier : critères, score couleur et décision acheteur',
    eyebrow: 'Grille S.A.F.E',
    metaTitle: 'Grille S.A.F.E immobilier : critères et score',
    metaDescription:
      'Grille S.A.F.E immobilier : tableau d’évaluation du promoteur, légal, construction, paiements, prix, livraison, quartier, risque, documents et décision.',
    primaryKeyword: 'grille S.A.F.E immobilier',
    secondaryKeywords: ['grille SAFE', 'SAFE checklist', 'SAFE score', 'SAFE certification'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'La grille S.A.F.E transforme une analyse immobilière en tableau de décision. Elle ne se limite pas à cocher des documents : elle relie preuves, cohérence économique, qualité livrable, risques et profil acheteur.',
      'Cette page cible l’intention “grille SAFE” et “SAFE checklist”. Elle complète la méthode générale en montrant comment classer les critères avant réservation, signature ou investissement.',
    ],
    sections: [
      {
        heading: 'Les familles de critères',
        body: [
          'Une bonne grille immobilière doit couvrir plus que le vendeur. S.A.F.E examine le promoteur, le cadre légal, la construction, les paiements, le prix, la livraison, le quartier, l’investissement, la location, la revente, les documents, la transparence, les photos, les cartes, les matériaux et la qualité.',
          'Chaque famille reçoit une lecture qualitative : élément clair, élément à confirmer, point faible, blocage potentiel ou sujet nécessitant un professionnel.',
        ],
        bullets: ['Promoteur et historique.', 'Documents et cadre légal.', 'Prix, marché, location et revente.', 'Livraison, matériaux, qualité et décision.'],
      },
      {
        heading: 'Le score couleur',
        body: [
          'Le score couleur sert à rendre la décision lisible. Vert signifie que les informations disponibles sont cohérentes. Orange signifie que le projet peut rester intéressant mais exige des confirmations. Rouge signifie que le risque, le flou ou l’absence de preuve doit ralentir ou bloquer la décision.',
          'Ce score ne remplace pas une expertise. Il sert à éviter l’effet de halo : un beau visuel ou une remise commerciale ne doit pas masquer un document manquant, un prix incohérent ou une livraison trop incertaine.',
        ],
      },
      {
        heading: 'Exemples d’utilisation',
        body: [
          'Un projet peut être vert sur l’emplacement et orange sur les paiements. Un autre peut être fort sur le prix mais rouge sur la transparence du promoteur. La décision finale ne dépend donc pas d’un seul critère, mais de la combinaison des risques.',
          'La grille est particulièrement utile pour comparer deux projets sur plan, arbitrer entre neuf et ancien, challenger une promesse locative ou préparer une discussion avec un notaire, avocat ou expert technique.',
        ],
      },
    ],
    checklistTitle: 'Table d’évaluation S.A.F.E',
    checklistItems: [
      'Promoteur : identité, références, projets livrés et réputation.',
      'Légal : titre, autorisations, contrat, charges et points à confirmer.',
      'Construction : plans, matériaux, qualité, photos et cohérence livrable.',
      'Paiements : bénéficiaire, échéancier, traçabilité et conditions de sortie.',
      'Prix : comparaison, location, revente, quartier et liquidité.',
      'Décision : score couleur, réserves, actions et validation professionnelle.',
    ],
    faq: [
      { question: 'À quoi sert la grille S.A.F.E ?', answer: 'Elle sert à classer les critères d’un projet immobilier avant achat pour rendre les points forts, risques et décisions plus lisibles.' },
      { question: 'La grille donne-t-elle une note officielle ?', answer: 'Non. Le score S.A.F.E est une lecture méthodologique propriétaire, pas une certification publique ni une note réglementaire.' },
      { question: 'Quels critères sont inclus ?', answer: 'La grille couvre notamment promoteur, légal, construction, paiements, prix, livraison, quartier, investissement, location, revente, risques, documents et transparence.' },
      { question: 'Peut-on utiliser la grille hors Maroc ?', answer: 'Oui. La structure est internationale ; les documents précis changent selon le pays.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'analyse-projet-immobilier',
    h1: 'Analyse de projet immobilier : méthode complète avant d’acheter',
    eyebrow: 'Analyse projet',
    metaTitle: 'Analyse de projet immobilier : méthode avant achat',
    metaDescription:
      'Méthode d’analyse d’un projet immobilier : promoteur, documents, prix, quartier, financement, livraison, risques, investissement et décision.',
    primaryKeyword: 'analyse projet immobilier',
    secondaryKeywords: ['comment analyser un projet immobilier', 'real estate project analysis', 'property due diligence'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'Analyser un projet immobilier consiste à comprendre la décision avant de la financer. Le projet doit être lu comme un système : vendeur, produit, emplacement, prix, documents, calendrier, usage, sortie et risques.',
      'S.A.F.E apporte une structure internationale pour organiser cette analyse sans la réduire à un prix au mètre carré ou à une impression de visite.',
    ],
    sections: [
      {
        heading: 'Partir de l’usage réel',
        body: [
          'Le même bien peut être pertinent pour une résidence principale et médiocre pour un investissement locatif. L’analyse commence donc par l’usage : habiter, louer, revendre, diversifier, transmettre ou sécuriser un pied-à-terre.',
          'Cette clarification évite de comparer des projets qui ne répondent pas au même besoin. Elle conditionne le quartier, la surface, la liquidité, le niveau de charges et le degré de risque acceptable.',
        ],
      },
      {
        heading: 'Lire le dossier comme un ensemble',
        body: [
          'Un dossier solide rassemble des informations cohérentes. Si le promoteur est sérieux mais que les paiements sont flous, l’analyse reste incomplète. Si le prix est attractif mais que la sortie est difficile, le risque économique augmente.',
          'La méthode S.A.F.E aide à relier ces fragments : Sécurisation, Analyse économique, Fiabilité de la promesse et Encadrement de la décision.',
        ],
        bullets: ['Qui porte le projet ?', 'Qu’est-ce qui est écrit ?', 'Le prix est-il justifié ?', 'Que se passe-t-il si le calendrier change ?'],
      },
      {
        heading: 'Transformer les risques en actions',
        body: [
          'Un risque identifié n’est pas toujours un blocage. Il peut devenir une question, une clause, une négociation, une réserve, une demande de document ou un avis professionnel.',
          'L’analyse devient utile lorsqu’elle produit une prochaine action claire. Sans action, une liste de risques reste théorique et l’acheteur revient à la pression commerciale.',
        ],
      },
    ],
    checklistTitle: 'Checklist d’analyse de projet immobilier',
    checklistItems: [
      'Définir l’objectif d’achat et l’horizon de détention.',
      'Identifier vendeur, promoteur, mandataire et responsabilités.',
      'Réunir documents, plans, prix, frais, charges et calendrier.',
      'Comparer quartier, demande, liquidité et biens similaires.',
      'Lister risques, preuves manquantes et questions professionnelles.',
      'Décider avec une synthèse écrite, pas sous pression.',
    ],
    faq: [
      { question: 'Comment analyser un projet immobilier ?', answer: 'Il faut relier objectif, promoteur, documents, prix, quartier, paiement, livraison, risques et sortie possible avant décision.' },
      { question: 'S.A.F.E suffit-elle pour acheter ?', answer: 'Non. S.A.F.E structure l’analyse, puis les points engageants doivent être confirmés par les professionnels compétents.' },
      { question: 'Quel critère regarder en premier ?', answer: 'Le premier critère est l’objectif d’achat, car il détermine les critères utiles : résidence, investissement, location, revente ou patrimoine.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'safe-achat-sur-plan',
    h1: 'S.A.F.E achat sur plan : analyser un projet avant livraison',
    eyebrow: 'Achat sur plan',
    metaTitle: 'S.A.F.E achat sur plan : méthode et checklist',
    metaDescription:
      'S.A.F.E achat sur plan : méthode internationale pour analyser promoteur, contrat, paiements, matériaux, prix, délais, livraison et risques.',
    primaryKeyword: 'S.A.F.E achat sur plan',
    secondaryKeywords: ['acheter sur plan en sécurité', 'off-plan property due diligence', 'SAFE achat immobilier'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'L’achat sur plan exige une méthode particulière parce que l’acheteur s’engage avant de voir le bien terminé. La promesse doit donc être traduite en preuves, documents, échéancier et suivi de livraison.',
      'S.A.F.E applique ses quatre piliers à cette situation : Sécurisation, Analyse du prix et de l’usage, Fiabilité de la livraison annoncée, Encadrement des paiements et de la décision.',
    ],
    sections: [
      {
        heading: 'La promesse doit devenir vérifiable',
        body: [
          'Une brochure montre une intention. Un contrat, une notice, un plan, une autorisation, un échéancier et un calendrier montrent ce qui peut être vérifié. L’écart entre les deux est le cœur du risque sur plan.',
          'La lecture S.A.F.E consiste à documenter cet écart avant de verser une réservation importante ou de signer un engagement fort.',
        ],
      },
      {
        heading: 'Les risques propres au sur plan',
        body: [
          'Les risques les plus fréquents concernent le retard, les finitions différentes, les surfaces mal comprises, les paiements mal encadrés, la qualité des parties communes et l’absence de recours clair en cas de problème.',
          'Ces risques varient selon le pays. En France, au Maroc, à Dubaï ou au Portugal, les documents et garanties ne sont pas identiques ; la méthode reste commune, mais les validations doivent être locales.',
        ],
        bullets: ['Historique du promoteur.', 'Documents de réservation et contrat.', 'Échéancier et traçabilité des paiements.', 'Livraison, réserves et corrections.'],
      },
      {
        heading: 'Décider avant de réserver',
        body: [
          'La réservation doit venir après une première synthèse, pas avant. L’acheteur doit savoir ce qui est clair, ce qui manque, ce qui est négociable et ce qui doit être confirmé par un professionnel.',
          'S.A.F.E n’empêche pas tout risque, mais elle évite de confondre vitesse commerciale et décision sécurisée.',
        ],
      },
    ],
    checklistTitle: 'Checklist S.A.F.E achat sur plan',
    checklistItems: [
      'Identifier promoteur, société porteuse, terrain et projet.',
      'Demander plans, surfaces, notice, contrat et calendrier.',
      'Relier chaque paiement à une étape et à un bénéficiaire clair.',
      'Comparer le prix à des biens comparables livrés.',
      'Prévoir la livraison, les réserves et les corrections.',
      'Faire confirmer les points juridiques, techniques et financiers.',
    ],
    faq: [
      { question: 'Comment acheter sur plan en sécurité ?', answer: 'Il faut ralentir la décision, réunir les documents, vérifier le promoteur, comprendre les paiements et faire relire les engagements.' },
      { question: 'S.A.F.E garantit-elle la livraison ?', answer: 'Non. S.A.F.E ne garantit pas la livraison ; elle aide à évaluer la crédibilité du calendrier et les preuves disponibles.' },
      { question: 'La méthode vaut-elle à Dubaï ou en France ?', answer: 'Oui, S.A.F.E est internationale, mais les garanties et documents doivent être validés selon le droit local.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'safe-investissement-immobilier',
    h1: 'S.A.F.E investissement immobilier : analyser rendement, risque et liquidité',
    eyebrow: 'Investissement',
    metaTitle: 'S.A.F.E investissement immobilier : rendement et risque',
    metaDescription:
      'S.A.F.E investissement immobilier : grille pour analyser rendement locatif, prix, charges, fiscalité, liquidité, revente, scénario et risque.',
    primaryKeyword: 'S.A.F.E investissement immobilier',
    secondaryKeywords: ['investment property analysis', 'analyse investissement immobilier', 'property investment due diligence'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'Un investissement immobilier ne s’analyse pas seulement par un rendement annoncé. Il faut comprendre le prix d’entrée, les charges, la fiscalité, la vacance, la gestion, la liquidité, la revente et le scénario de stress.',
      'S.A.F.E applique une lecture internationale à ces décisions : un projet rentable sur le papier peut devenir fragile si les hypothèses locatives, le dossier ou la sortie sont mal évalués.',
    ],
    sections: [
      {
        heading: 'Challenger le rendement affiché',
        body: [
          'Le rendement brut est souvent plus séduisant que le rendement réel. Il doit être retraité avec vacance, commissions, entretien, ameublement, fiscalité, frais de transaction, financement et coût du temps.',
          'La méthode S.A.F.E distingue les hypothèses documentées des promesses commerciales, puis demande si le scénario reste acceptable lorsque le marché ralentit.',
        ],
      },
      {
        heading: 'Lire la liquidité et la sortie',
        body: [
          'Un actif rentable mais difficile à revendre peut ne pas convenir à tous les investisseurs. La liquidité dépend de l’emplacement, du segment, de la qualité, des charges, de la demande et de la profondeur du marché.',
          'S.A.F.E oblige à poser la question de sortie avant l’achat : qui pourra racheter, pourquoi, à quel horizon et avec quel niveau de décote possible ?',
        ],
        bullets: ['Rendement net plutôt que brut.', 'Fiscalité et charges récurrentes.', 'Liquidité à la revente.', 'Scénario prudent et scénario défavorable.'],
      },
      {
        heading: 'Adapter l’analyse au pays',
        body: [
          'La même grille peut s’utiliser en France, au Maroc, à Dubaï, au Portugal, en Espagne, au Canada ou aux États-Unis, mais les taxes, règles locatives, frais de transaction et usages bancaires changent.',
          'La méthode donne la structure ; les chiffres et validations doivent rester locaux, datés et vérifiables.',
        ],
      },
    ],
    checklistTitle: 'Checklist investissement S.A.F.E',
    checklistItems: [
      'Calculer rendement brut, net et scénario de stress.',
      'Comparer le prix à des références récentes et similaires.',
      'Lister charges, fiscalité, gestion, travaux et vacance.',
      'Évaluer la demande locative réelle et les contraintes d’usage.',
      'Étudier la liquidité et le profil probable de revente.',
      'Faire valider les hypothèses financières et juridiques.',
    ],
    faq: [
      { question: 'S.A.F.E analyse-t-elle la rentabilité ?', answer: 'Oui. Elle challenge les hypothèses de rendement, mais ne garantit jamais un revenu locatif ni une plus-value.' },
      { question: 'Quelle différence avec un conseil de courtier ?', answer: 'S.A.F.E est une grille méthodologique indépendante ; elle ne remplace pas un conseil financier personnalisé ni une vérification juridique.' },
      { question: 'Pourquoi la liquidité compte-t-elle ?', answer: 'Parce qu’un investissement doit aussi pouvoir sortir dans de bonnes conditions, pas seulement produire un rendement théorique.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'comment-analyser-promoteur',
    h1: 'Comment analyser un promoteur immobilier avant d’acheter',
    eyebrow: 'Promoteur',
    metaTitle: 'Comment analyser un promoteur immobilier',
    metaDescription:
      'Analyser un promoteur immobilier : historique, projets livrés, réputation, documents, communication, financement, qualité, retards et transparence.',
    primaryKeyword: 'comment analyser promoteur immobilier',
    secondaryKeywords: ['promoteur fiable', 'comment choisir un promoteur', 'analyse promoteur immobilier'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'Le promoteur concentre une partie majeure du risque immobilier, surtout dans le neuf et le sur plan. L’analyse doit dépasser la marque, le showroom et la relation commerciale.',
      'S.A.F.E traite le promoteur comme un faisceau de preuves : identité, historique, projets livrés, qualité observée, communication, capacité d’exécution et cohérence du dossier.',
    ],
    sections: [
      {
        heading: 'Identifier qui porte réellement le projet',
        body: [
          'Il faut distinguer la marque commerciale, la société porteuse, les partenaires, les intermédiaires et les personnes habilitées à signer. Une responsabilité floue rend toute suite plus fragile.',
          'Cette identification doit être documentée avant de juger le projet. Un promoteur ne s’analyse pas seulement par sa visibilité, mais par la clarté de sa responsabilité.',
        ],
      },
      {
        heading: 'Observer les livraisons passées',
        body: [
          'Les projets déjà livrés donnent des indices concrets : respect des délais, vieillissement des matériaux, qualité des parties communes, suivi après livraison, niveau de satisfaction et cohérence entre promesse et résultat.',
          'Lorsque l’historique est limité, il faut compenser par plus de documents, plus de confirmations professionnelles et une prudence accrue sur les paiements.',
        ],
        bullets: ['Projets comparables livrés.', 'Délais et retards passés.', 'Qualité observable après livraison.', 'Réponses écrites aux questions précises.'],
      },
      {
        heading: 'Lire la transparence au quotidien',
        body: [
          'Un promoteur fiable répond clairement aux questions difficiles : documents disponibles, calendrier, frais, garanties, modifications possibles, réserves et responsabilités.',
          'La transparence ne signifie pas absence de risque. Elle signifie que le risque peut être compris, documenté et traité avant engagement.',
        ],
      },
    ],
    checklistTitle: 'Checklist analyse promoteur',
    checklistItems: [
      'Identifier société porteuse, marque et signataires.',
      'Lister projets livrés et projets en cours.',
      'Visiter si possible une livraison passée.',
      'Comparer promesse commerciale et documents transmis.',
      'Évaluer la qualité des réponses écrites.',
      'Faire confirmer les engagements par les professionnels concernés.',
    ],
    faq: [
      { question: 'Comment choisir un promoteur fiable ?', answer: 'Il faut croiser identité, historique de livraison, qualité observable, documents, réputation et transparence des réponses.' },
      { question: 'Un nouveau promoteur est-il à éviter ?', answer: 'Pas forcément, mais l’absence d’historique augmente le besoin de preuves, de garanties et de relecture professionnelle.' },
      { question: 'S.A.F.E certifie-t-elle les promoteurs ?', answer: 'Non. S.A.F.E analyse des projets et dossiers ; elle ne délivre pas de certification publique de promoteur.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'checklist-achat-sur-plan',
    h1: 'Checklist achat sur plan : documents, paiements, livraison et signaux d’alerte',
    eyebrow: 'Checklist achat',
    metaTitle: 'Checklist achat sur plan : documents et risques',
    metaDescription:
      'Checklist achat sur plan : promoteur, plans, contrat, échéancier, paiements, matériaux, prix, livraison, réserves et décision S.A.F.E.',
    primaryKeyword: 'checklist achat sur plan',
    secondaryKeywords: ['checklist immobilier', 'SAFE checklist', 'comment acheter sur plan'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'Une checklist d’achat sur plan sert à ralentir la décision au bon moment. Elle met les preuves avant la pression commerciale et les documents avant la promesse orale.',
      'Cette page donne une lecture actionnable compatible avec la grille S.A.F.E, applicable à différents marchés sous réserve des exigences locales.',
    ],
    sections: [
      {
        heading: 'Avant la réservation',
        body: [
          'Avant de réserver, l’acheteur doit comprendre qui vend, ce qui est vendu, à quel prix, avec quels documents et selon quel calendrier. Un manque d’information à ce stade doit être noté, pas oublié.',
          'La réservation ne doit pas être utilisée pour éviter les questions. Elle doit venir lorsque les informations essentielles sont assez claires pour justifier l’étape suivante.',
        ],
        bullets: ['Identité du promoteur.', 'Plan et surface.', 'Prix total et frais.', 'Conditions de réservation.'],
      },
      {
        heading: 'Avant la signature',
        body: [
          'La signature exige une relecture plus précise. Les documents engageants doivent être lus par les professionnels compétents selon le pays : notaire, avocat, conseil fiscal, expert technique ou banque.',
          'S.A.F.E aide à préparer cette relecture en listant les points à confirmer, mais la décision juridique ne doit pas rester au niveau éditorial.',
        ],
      },
      {
        heading: 'Avant la livraison',
        body: [
          'L’acheteur doit conserver plans, notice, options, courriels et engagements pour comparer la livraison à la promesse. La checklist devient alors un outil de suivi et de réserves.',
          'Un point non écrit ou non documenté devient difficile à faire corriger. La discipline documentaire commence donc dès les premiers échanges.',
        ],
      },
    ],
    checklistTitle: 'Checklist achat sur plan S.A.F.E',
    checklistItems: [
      'Vendeur et promoteur clairement identifiés.',
      'Plans, surfaces, annexes et finitions documentés.',
      'Prix, frais, charges et taxes compris.',
      'Échéancier et bénéficiaire des paiements clairs.',
      'Calendrier, garanties, retards et réserves anticipés.',
      'Relecture professionnelle avant engagement important.',
    ],
    faq: [
      { question: 'Quelle checklist utiliser avant un achat sur plan ?', answer: 'Une checklist utile couvre promoteur, documents, prix, paiements, livraison, garanties, réserves et relecture professionnelle.' },
      { question: 'Quand faut-il ralentir ?', answer: 'Il faut ralentir lorsqu’un document essentiel manque, lorsqu’un paiement est flou ou lorsqu’une décision rapide est exigée sans preuves.' },
      { question: 'La checklist suffit-elle ?', answer: 'Non. Elle prépare l’analyse et les rendez-vous professionnels ; elle ne remplace pas une validation juridique ou technique.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'guide-analyse-immobiliere',
    h1: 'Guide d’analyse immobilière : comparer, vérifier et décider avant achat',
    eyebrow: 'Guide analyse',
    metaTitle: 'Guide d’analyse immobilière avant achat',
    metaDescription:
      'Guide d’analyse immobilière : méthode pour comparer un bien, vérifier documents, prix, risques, rendement, livraison et décision avant achat.',
    primaryKeyword: 'guide analyse immobilière',
    secondaryKeywords: ['property due diligence', 'real estate methodology', 'analyse immobilière'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'Un guide d’analyse immobilière doit aider à passer de l’intuition à la décision argumentée. L’objectif n’est pas de tout savoir seul, mais de savoir quelles questions poser et dans quel ordre.',
      'S.A.F.E propose une colonne vertébrale internationale : Sécurisation, Analyse, Fiabilité et Encadrement.',
    ],
    sections: [
      {
        heading: 'Comparer des biens comparables',
        body: [
          'Comparer un appartement neuf, un bien ancien, une villa, un riad ou une résidence gérée avec la même métrique produit de mauvaises décisions. Chaque segment a sa liquidité, ses charges, son usage et ses risques.',
          'La comparaison doit donc isoler les variables : quartier, état, qualité, surface utile, contraintes d’usage, frais, fiscalité et sortie.',
        ],
      },
      {
        heading: 'Demander les bonnes preuves',
        body: [
          'Une analyse immobilière sérieuse distingue les preuves, les hypothèses et les opinions. Les preuves sont des documents, des photos datées, des visites, des références, des prix comparables ou des validations professionnelles.',
          'Les hypothèses doivent être testées. Les opinions peuvent éclairer, mais elles ne doivent pas porter seules une décision d’achat.',
        ],
        bullets: ['Documents datés.', 'Prix comparables.', 'Visite ou photos exploitables.', 'Questions professionnelles préparées.'],
      },
      {
        heading: 'Synthétiser avant de décider',
        body: [
          'La synthèse finale doit dire clairement pourquoi avancer, pourquoi attendre ou pourquoi abandonner. Un projet intéressant avec trois zones rouges ne se traite pas comme un projet complet avec seulement deux points à confirmer.',
          'Cette synthèse devient le support de discussion avec les conseillers, la banque, le vendeur ou le promoteur.',
        ],
      },
    ],
    checklistTitle: 'Checklist guide analyse immobilière',
    checklistItems: [
      'Définir usage, budget et horizon.',
      'Comparer uniquement des biens réellement comparables.',
      'Classer preuves, hypothèses et opinions.',
      'Identifier risques juridiques, techniques, financiers et opérationnels.',
      'Préparer les confirmations professionnelles.',
      'Écrire la synthèse de décision avant de signer.',
    ],
    faq: [
      { question: 'Qu’est-ce qu’une analyse immobilière ?', answer: 'C’est une lecture structurée d’un bien ou projet avant achat : documents, prix, emplacement, usage, risques, financement et sortie.' },
      { question: 'Pourquoi utiliser S.A.F.E ?', answer: 'S.A.F.E donne une structure stable pour ne pas oublier les dimensions de sécurité, analyse, fiabilité et encadrement.' },
      { question: 'Ce guide est-il international ?', answer: 'Oui. Les principes sont internationaux, mais les documents et obligations doivent être adaptés au pays concerné.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
  {
    slug: 'risques-achat-immobilier',
    h1: 'Risques achat immobilier : les signaux à vérifier avant de signer',
    eyebrow: 'Risques achat',
    metaTitle: 'Risques achat immobilier : prévenir avant de signer',
    metaDescription:
      'Risques achat immobilier : documents, vendeur, promoteur, prix, paiements, livraison, fiscalité, usage locatif, revente et méthode S.A.F.E.',
    primaryKeyword: 'risques achat immobilier',
    secondaryKeywords: ['comment sécuriser un achat immobilier', 'risques achat sur plan', 'property purchase risks'],
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
    intro: [
      'Les risques d’un achat immobilier ne sont pas toujours spectaculaires. Ils apparaissent souvent dans un détail : document manquant, prix mal comparé, paiement mal compris, délai flou ou promesse non écrite.',
      'S.A.F.E aide à repérer ces signaux avant qu’ils deviennent coûteux. La méthode est internationale et s’adapte au contexte local de chaque acquisition.',
    ],
    sections: [
      {
        heading: 'Les risques de confiance',
        body: [
          'Le premier risque concerne la confiance accordée au mauvais interlocuteur ou accordée trop vite. Un vendeur sympathique, une agence connue ou un promoteur visible ne suffisent pas sans documents et responsabilités claires.',
          'La sécurité vient d’un faisceau de preuves : identité, historique, droits, documents, réponses écrites et cohérence entre les discours.',
        ],
      },
      {
        heading: 'Les risques économiques',
        body: [
          'Un bien peut être juridiquement achetable mais économiquement faible : prix trop élevé, charges sous-estimées, demande locative surestimée, fiscalité oubliée, revente difficile ou travaux mal anticipés.',
          'L’analyse économique doit donc accompagner la vérification documentaire, surtout pour un investissement.',
        ],
        bullets: ['Prix surpayé.', 'Frais et charges incomplets.', 'Rendement surestimé.', 'Liquidité de revente faible.'],
      },
      {
        heading: 'Les risques de livraison et de qualité',
        body: [
          'Dans le neuf et le sur plan, la qualité promise doit être comparée à la qualité livrable. Matériaux, finitions, parties communes, équipements, retards et réserves doivent être anticipés.',
          'Un projet ne devient pas sûr parce qu’il est neuf. Il devient plus lisible lorsque les engagements sont écrits, datés et vérifiables.',
        ],
      },
    ],
    checklistTitle: 'Checklist risques achat immobilier',
    checklistItems: [
      'Identifier toutes les parties et responsabilités.',
      'Vérifier documents, droits, plans, contrat et paiements.',
      'Comparer prix, frais, charges et liquidité.',
      'Lister promesses orales et demander confirmation écrite.',
      'Anticiper livraison, qualité, réserves et recours.',
      'Consulter les professionnels compétents avant signature.',
    ],
    faq: [
      { question: 'Quels sont les principaux risques d’un achat immobilier ?', answer: 'Les risques portent sur vendeur, documents, prix, paiements, qualité, livraison, fiscalité, usage, location et revente.' },
      { question: 'Comment sécuriser un achat immobilier ?', answer: 'Il faut documenter la décision, vérifier les parties, comprendre les paiements, comparer le prix et faire relire les engagements.' },
      { question: 'S.A.F.E supprime-t-elle le risque ?', answer: 'Non. S.A.F.E réduit les zones floues et structure les vérifications, mais ne supprime pas tous les risques.' },
    ],
    relatedLinks: [],
    disclaimer: SAFE_SCOPE_DISCLAIMER,
  },
];

export const SAFE_CLUSTER_PAGES: SafeClusterPage[] = [
  ...SAFE_ENTITY_CLUSTER_PAGES,
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
          'Non. S.A.F.E est une méthode internationale propriétaire d’analyse et de présélection immobilière. Elle sert à structurer l’analyse, mais ne constitue pas une validation administrative ou institutionnelle.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
          'Non. S.A.F.E est une méthode internationale propriétaire d’analyse et de présélection immobilière. Elle ne crée pas de garantie juridique et ne remplace pas les garanties prévues par les documents ou le droit applicable.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
    image: '/images/safe-og-official.webp',
    imageAlt: 'Logo officiel S.A.F.E — Security, Analysis, Fidelity & Expert Guidance.',
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
