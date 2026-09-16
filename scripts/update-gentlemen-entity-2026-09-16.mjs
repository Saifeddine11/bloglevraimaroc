import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../src/content/articles/", import.meta.url));
const oldNetflix = "https://about.netflix.com/en/news/netflix-confirms-renewals-for-uk-favourites-and-debuts-trailer-for-the-gentlemen-season-2";
const variety = "https://variety.com/2026/tv/news/the-gentlemen-season-3-greenlight-1236841374/";
const tudumDirty = "https://www.netflix.com/tudum/articles/the-gentlemen-season-3-release-date-cast-news?inapp=true";
const tudum = "https://www.netflix.com/tudum/articles/the-gentlemen-season-3-release-date-cast-news";
const accrocarBlog = "https://accrocar.com/blog/accrocar-the-gentlemen-moonage-pictures-dune-films";
const itv = "https://www.itv.com/presscentre/media-releases/itv-studios-acquires-majority-stake-moonage-pictures";
const ccmBilan = "https://www.ccm.ma/inter/bilans/21-bilan.pdf";
const leseco = "https://leseco.ma/maroc/maroc-le-cinema-attire-plus-de-12-milliards-de-dh-dinvestissements-etrangers-en-2025.html";

const titles = {
  "accrocar-vehicules-luxe-the-gentlemen-maroc": {
    fr: {
      title: "The Gentlemen au Maroc : Accrocar confirme sa collaboration avec Dune Films et Moonage Pictures",
      meta: "Accrocar confirme une collaboration avec Dune Films et MOONAGE PICTURES (THE GENTLEMEN) LIMITED pour The Gentlemen saison 3 au Maroc.",
      excerpt: "Accrocar publie une confirmation de première main: collaboration avec Dune Films et l’entité britannique de The Gentlemen, fourniture d’un Cullinan et d’un Bentayga, sans contrat Netflix.",
    },
    en: {
      title: "The Gentlemen in Morocco: Accrocar confirms work with Dune Films and Moonage Pictures",
      meta: "Accrocar confirms a collaboration with Dune Films and MOONAGE PICTURES (THE GENTLEMEN) LIMITED on The Gentlemen Season 3 in Morocco.",
      excerpt: "Accrocar’s first-party account names Dune Films and the UK Gentlemen production entity, plus a Cullinan and Bentayga — and states there is no Netflix contract.",
    },
    es: {
      title: "The Gentlemen en Marruecos: Accrocar confirma su colaboración con Dune Films y Moonage Pictures",
      meta: "Accrocar confirma una colaboración con Dune Films y MOONAGE PICTURES (THE GENTLEMEN) LIMITED en The Gentlemen temporada 3 en Marruecos.",
      excerpt: "Accrocar confirma de primera mano el trabajo con Dune Films y la entidad británica de The Gentlemen, un Cullinan y un Bentayga, y niega un contrato con Netflix.",
    },
    nl: {
      title: "The Gentlemen in Marokko: Accrocar bevestigt samenwerking met Dune Films en Moonage Pictures",
      meta: "Accrocar bevestigt samenwerking met Dune Films en MOONAGE PICTURES (THE GENTLEMEN) LIMITED voor The Gentlemen seizoen 3 in Marokko.",
      excerpt: "Accrocar bevestigt uit eerste hand Dune Films en de Britse Gentlemen-entiteit, plus een Cullinan en Bentayga, en stelt dat er geen Netflix-contract is.",
    },
  },
  "rolls-royce-bentley-the-gentlemen-maroc": {
    fr: {
      title: "Rolls-Royce Cullinan et Bentley Bentayga : les voitures fournies pour The Gentlemen au Maroc",
      meta: "Accrocar documente un Rolls-Royce Cullinan et un Bentley Bentayga fournis pour The Gentlemen au Maroc, sans apparition à l’écran confirmée.",
      excerpt: "Deux SUV d’ultra-luxe sont documentés comme fournis à la production. Rien n’établit encore qu’ils apparaîtront dans la saison 3.",
    },
    en: {
      title: "Rolls-Royce Cullinan and Bentley Bentayga: cars supplied for The Gentlemen in Morocco",
      meta: "Accrocar documents a Rolls-Royce Cullinan and Bentley Bentayga supplied for The Gentlemen in Morocco, without confirmed on-screen use.",
      excerpt: "Two ultra-luxury SUVs are documented as supplied to the production. That is not proof they will appear in Season 3.",
    },
    es: {
      title: "Rolls-Royce Cullinan y Bentley Bentayga: los coches suministrados para The Gentlemen en Marruecos",
      meta: "Accrocar documenta un Rolls-Royce Cullinan y un Bentley Bentayga suministrados para The Gentlemen en Marruecos, sin uso en pantalla confirmado.",
      excerpt: "Dos SUV de ultra lujo constan como suministrados a la producción. Eso no prueba que aparezcan en la temporada 3.",
    },
    nl: {
      title: "Rolls-Royce Cullinan en Bentley Bentayga: de auto’s geleverd voor The Gentlemen in Marokko",
      meta: "Accrocar documenteert een Rolls-Royce Cullinan en Bentley Bentayga geleverd voor The Gentlemen in Marokko, zonder bevestigde schermrol.",
      excerpt: "Twee ultra-luxe SUV’s zijn gedocumenteerd als geleverd aan de productie. Dat bewijst nog niet dat ze in seizoen 3 te zien zijn.",
    },
  },
  "coulisses-logistique-automobile-the-gentlemen-maroc": {
    fr: {
      title: "Dans les coulisses de The Gentlemen : comment Accrocar a géré les voitures de luxe au Maroc",
      meta: "Préparation, livraison hors Marrakech, timing et discrétion: la logistique automobile documentée d’Accrocar pour The Gentlemen au Maroc.",
      excerpt: "Une Rolls-Royce sur un tournage n’est pas une simple remise de clés. Accrocar décrit une opération de préparation, de convoyage et de disponibilité à Rabat.",
    },
    en: {
      title: "Behind the scenes of The Gentlemen: how Accrocar handled the luxury cars in Morocco",
      meta: "Preparation, delivery outside Marrakech, timing and discretion: Accrocar’s documented car logistics for The Gentlemen in Morocco.",
      excerpt: "A Rolls-Royce on a shoot is not a key handover. Accrocar describes preparation, delivery and availability in Rabat.",
    },
    es: {
      title: "Entre bastidores de The Gentlemen: cómo Accrocar gestionó los coches de lujo en Marruecos",
      meta: "Preparación, entrega fuera de Marrakech, timing y discreción: la logística documentada de Accrocar para The Gentlemen en Marruecos.",
      excerpt: "Un Rolls-Royce en un rodaje no es una entrega de llaves. Accrocar describe preparación, traslado y disponibilidad en Rabat.",
    },
    nl: {
      title: "Achter de schermen van The Gentlemen: hoe Accrocar de luxeauto’s in Marokko heeft beheerd",
      meta: "Voorbereiding, levering buiten Marrakech, timing en discretie: Accrocars gedocumenteerde autologistiek voor The Gentlemen in Marokko.",
      excerpt: "Een Rolls-Royce op een set is geen sleuteloverdracht. Accrocar beschrijft voorbereiding, transport en beschikbaarheid in Rabat.",
    },
  },
  "accrocar-mobilite-productions-internationales": {
    fr: {
      title: "Dune Films, Moonage Pictures et Accrocar : les entreprises autour de The Gentlemen au Maroc",
      meta: "Qui est qui: The Gentlemen, Moonage Pictures, MOONAGE PICTURES (THE GENTLEMEN) LIMITED, Dune Films et Accrocar.",
      excerpt: "Cinq entités distinctes. Accrocar confirme deux interlocuteurs opérationnels. Netflix n’en est pas un.",
    },
    en: {
      title: "Dune Films, Moonage Pictures and Accrocar: the companies around The Gentlemen in Morocco",
      meta: "Who is who: The Gentlemen, Moonage Pictures, MOONAGE PICTURES (THE GENTLEMEN) LIMITED, Dune Films and Accrocar.",
      excerpt: "Five distinct entities. Accrocar confirms two operational counterparts. Netflix is not one of them.",
    },
    es: {
      title: "Dune Films, Moonage Pictures y Accrocar: las empresas en torno a The Gentlemen en Marruecos",
      meta: "Quién es quién: The Gentlemen, Moonage Pictures, MOONAGE PICTURES (THE GENTLEMEN) LIMITED, Dune Films y Accrocar.",
      excerpt: "Cinco entidades distintas. Accrocar confirma dos interlocutores operativos. Netflix no es uno de ellos.",
    },
    nl: {
      title: "Dune Films, Moonage Pictures en Accrocar: de bedrijven rond The Gentlemen in Marokko",
      meta: "Wie is wie: The Gentlemen, Moonage Pictures, MOONAGE PICTURES (THE GENTLEMEN) LIMITED, Dune Films en Accrocar.",
      excerpt: "Vijf aparte entiteiten. Accrocar bevestigt twee operationele tegenpartijen. Netflix hoort daar niet bij.",
    },
  },
  "ecosysteme-marocain-productions-internationales": {
    fr: {
      title: "The Gentlemen au Maroc : derrière les caméras, tout un écosystème marocain accompagne les grandes productions",
      meta: "Tournage international au Maroc: équipes, CCM, Dune Films et Accrocar comme exemples concrets, pas comme slogans.",
      excerpt: "The Gentlemen illustre une chaîne locale: institutions, production services, techniciens et fournisseurs spécialisés. Les décors seuls ne suffisent pas.",
    },
    en: {
      title: "The Gentlemen in Morocco: behind the cameras, a Moroccan ecosystem supports major productions",
      meta: "International filming in Morocco: crews, the CCM, Dune Films and Accrocar as concrete examples, not slogans.",
      excerpt: "The Gentlemen illustrates a local chain: institutions, production services, technicians and specialist suppliers. Scenery alone is not enough.",
    },
    es: {
      title: "The Gentlemen en Marruecos: detrás de las cámaras, un ecosistema marroquí acompaña las grandes producciones",
      meta: "Rodaje internacional en Marruecos: equipos, CCM, Dune Films y Accrocar como ejemplos concretos, no eslóganes.",
      excerpt: "The Gentlemen ilustra una cadena local: instituciones, servicios de producción, técnicos y proveedores. El paisaje no basta.",
    },
    nl: {
      title: "The Gentlemen in Marokko: achter de camera’s ondersteunt een Marokkaans ecosysteem grote producties",
      meta: "Internationale opnames in Marokko: crews, CCM, Dune Films en Accrocar als concrete voorbeelden, geen slogans.",
      excerpt: "The Gentlemen toont een lokale keten: instellingen, productiediensten, technici en gespecialiseerde leveranciers. Decor alleen volstaat niet.",
    },
  },
};

const collabFrOld = [
  "Dans le cadre de la production de The Gentlemen au Maroc, Accrocar collabore directement avec [Dune Films](https://dunefilms.com/) pour les besoins automobiles haut de gamme qui lui ont été confiés. Cette collaboration directe est une information de première main communiquée à Le Vrai Maroc. Les sources publiques associent par ailleurs la série à MOONAGE PICTURES LIMITED; nous n'en déduisons ni un contrat identique entre Accrocar et MOONAGE PICTURES LIMITED, ni un partenariat officiel avec Netflix.",
  "Selon les informations de première main communiquées à Le Vrai Maroc, Accrocar collabore directement avec [Dune Films](https://dunefilms.com/) pour le volet automobile de l'opération au Maroc. MOONAGE PICTURES LIMITED est l'entité de production citée dans les sources publiques de The Gentlemen; nous n'en faisons pas un contrat Accrocar identique.",
  "Cette opération n'est pas un service isolé. Selon les informations de première main communiquées à Le Vrai Maroc, Accrocar collabore directement avec [Dune Films](https://dunefilms.com/) pour coordonner les mouvements et la disponibilité des véhicules. MOONAGE PICTURES LIMITED reste l'entité de production citée dans le dossier public de la série, sans établir à elle seule un contrat automobile identique.",
  "Le Vrai Maroc a été informé de première main qu'Accrocar collabore directement avec [Dune Films](https://dunefilms.com/) pour les véhicules qui lui ont été confiés; l'analyse reste indépendante et circonscrite à ce que les pixels permettent de voir. MOONAGE PICTURES LIMITED figure dans le contexte de production de The Gentlemen, sans décrire à elle seule le même contrat.",
  "Le dossier de The Gentlemen, pour lequel Accrocar collabore directement avec [Dune Films](https://dunefilms.com/) selon les informations de première main communiquées à Le Vrai Maroc, constitue un exemple déclaré par l'entreprise, pas un certificat émis par Netflix. MOONAGE PICTURES LIMITED figure dans le paysage de production de la série, sans transformer Accrocar en partenaire officiel de la plateforme.",
  "[Dune Films](https://dunefilms.com/) se présente comme une société de production basée à Marrakech, avec une base à Ouarzazate, active au Maroc depuis 1998 et spécialisée dans les services de production pour les tournages internationaux. Accrocar intervient ici comme prestataire de mobilité de luxe. Selon les informations de première main communiquées à Le Vrai Maroc, les deux entreprises collaborent directement sur le volet automobile de The Gentlemen au Maroc. Les crédits publics associent par ailleurs la série à MOONAGE PICTURES LIMITED, Miramax Television et Toff Guy Films; cette mention ne décrit pas le même lien opérationnel que la collaboration Accrocar–Dune Films.",
];

const collabEnOld = [
  "According to first-party information provided to Le Vrai Maroc, Accrocar is collaborating directly with [Dune Films](https://dunefilms.com/) on the high-end vehicle needs entrusted to it for The Gentlemen production in Morocco. Public sources also associate the series with MOONAGE PICTURES LIMITED; we do not treat that as the same contractual relationship Accrocar has with Dune Films, nor as an official Netflix partnership.",
  "According to first-party information provided to Le Vrai Maroc, Accrocar is collaborating directly with [Dune Films](https://dunefilms.com/) on the vehicle side of the Moroccan operation. MOONAGE PICTURES LIMITED is the production-company entity named in public sources for The Gentlemen; we do not treat that as the same Accrocar contract.",
  "The operation is not a stand-alone rental. First-party information provided to Le Vrai Maroc is that Accrocar is collaborating directly with [Dune Films](https://dunefilms.com/) to coordinate vehicle movements and availability. MOONAGE PICTURES LIMITED remains the production-company entity named in the public record for the series; that alone does not establish an identical vehicle contract.",
  "First-party information is that Accrocar is collaborating directly with [Dune Films](https://dunefilms.com/) on the vehicles entrusted to it; the analysis remains independent and limited to what the pixels support. MOONAGE PICTURES LIMITED belongs to the public production context of The Gentlemen and does not, by itself, describe the same contract.",
  "The Gentlemen file, for which Accrocar says it collaborated with Dune Films and MOONAGE PICTURES LIMITED, is an example declared by the company, not a certificate issued by Netflix.",
];

const evidence = {
  fr: `Variety a confirmé le 24 août 2026 le renouvellement de The Gentlemen pour une troisième saison de huit épisodes, avec Guy Ritchie à la réalisation et à l’écriture aux côtés de Matthew Read. Netflix Tudum a ensuite consacré un dossier officiel à cette saison 3. Les lieux marocains reposent sur un autre niveau de preuve: Le360 a rapporté le 14 septembre 2026 que le tournage avait commencé à Rabat le 13 septembre et qu’Erfoud faisait partie des décors retenus. Accrocar confirme, sur son site et dans le corpus remis à Le Vrai Maroc, une opération automobile à Rabat en septembre 2026, avec un Rolls-Royce Cullinan et un Bentley Bentayga.

Ces niveaux restent séparés. Un renouvellement officiel n’établit pas une carte des lieux. Une photographie de service ne prouve pas une apparition à l’écran. Accrocar nomme deux interlocuteurs: [Dune Films](https://dunefilms.com/) et MOONAGE PICTURES (THE GENTLEMEN) LIMITED, société britannique n° 14115797 au registre Companies House. Accrocar indique n’avoir aucun contrat direct avec Netflix.`,
  en: `Variety confirmed on 24 August 2026 that The Gentlemen had been renewed for a third season of eight episodes, with Guy Ritchie directing and co-writing with Matthew Read. Netflix Tudum later published an official Season 3 briefing. Moroccan locations sit on a different evidence layer: on 14 September 2026 Le360 reported that filming had begun in Rabat on 13 September and that Erfoud was among the selected settings. Accrocar confirms, on its website and in material supplied to Le Vrai Maroc, a vehicle operation in Rabat in September 2026 involving a Rolls-Royce Cullinan and a Bentley Bentayga.

These layers stay separate. An official renewal is not a location map. A service photograph does not prove an on-screen appearance. Accrocar names two counterparts: [Dune Films](https://dunefilms.com/) and MOONAGE PICTURES (THE GENTLEMEN) LIMITED, UK company 14115797 at Companies House. Accrocar states it has no direct contract with Netflix.`,
  es: `Variety confirmó el 24 de agosto de 2026 la renovación de The Gentlemen para una tercera temporada de ocho episodios, con Guy Ritchie en la dirección y el guion junto a Matthew Read. Netflix Tudum publicó después un dossier oficial sobre la temporada 3. Las localizaciones marroquíes tienen otro nivel de prueba: el 14 de septiembre de 2026 Le360 informó de que el rodaje había empezado en Rabat el 13 de septiembre y que Erfoud figuraba entre los escenarios. Accrocar confirma, en su web y en el material entregado a Le Vrai Maroc, una operación de vehículos en Rabat en septiembre de 2026, con un Rolls-Royce Cullinan y un Bentley Bentayga.

Estos niveles se mantienen separados. Una renovación oficial no es un mapa de localizaciones. Una foto de servicio no prueba una aparición en pantalla. Accrocar nombra dos interlocutores: [Dune Films](https://dunefilms.com/) y MOONAGE PICTURES (THE GENTLEMEN) LIMITED, sociedad británica n.º 14115797 en Companies House. Accrocar afirma no tener contrato directo con Netflix.`,
  nl: `Variety bevestigde op 24 augustus 2026 de verlenging van The Gentlemen voor een derde seizoen van acht afleveringen, met Guy Ritchie als regisseur en mede-scenarist naast Matthew Read. Netflix Tudum publiceerde later een officieel seizoen-3-dossier. De Marokkaanse locaties rusten op een ander bewijsniveau: op 14 september 2026 meldde Le360 dat de opnames op 13 september in Rabat waren begonnen en dat Erfoud tot de gekozen decors behoorde. Accrocar bevestigt, op zijn site en in materiaal voor Le Vrai Maroc, een voertuigoperatie in Rabat in september 2026 met een Rolls-Royce Cullinan en een Bentley Bentayga.

Die lagen blijven gescheiden. Een officiële verlenging is geen locatiekaart. Een servicefoto bewijst geen verschijning in beeld. Accrocar noemt twee tegenpartijen: [Dune Films](https://dunefilms.com/) en MOONAGE PICTURES (THE GENTLEMEN) LIMITED, Brits bedrijf 14115797 bij Companies House. Accrocar stelt dat het geen direct contract met Netflix heeft.`,
};

const faqSeason = {
  fr: "Oui. Variety a publié le renouvellement le 24 août 2026 et Netflix Tudum le confirme. Les lieux marocains viennent de Le360 et d’éléments de première main, pas d’une carte officielle Netflix.",
  en: "Yes. Variety reported the renewal on 24 August 2026 and Netflix Tudum confirms Season 3. Moroccan locations come from Le360 and first-party material, not from an official Netflix location map.",
  es: "Sí. Variety publicó la renovación el 24 de agosto de 2026 y Netflix Tudum la confirma. Las localizaciones marroquíes proceden de Le360 y de material de primera mano, no de un mapa oficial de Netflix.",
  nl: "Ja. Variety meldde de verlenging op 24 augustus 2026 en Netflix Tudum bevestigt seizoen 3. De Marokkaanse locaties komen van Le360 en eerstehands materiaal, niet van een officiële Netflix-locatiekaart.",
};

function yamlEscape(value) {
  return JSON.stringify(value);
}

function patchFrontmatter(text, locale, translationKey) {
  const pack = titles[translationKey]?.[locale];
  let out = text
    .replaceAll(oldNetflix, variety)
    .replaceAll(tudumDirty, tudum)
    .replaceAll("23 août 2026", "24 août 2026")
    .replaceAll("23 August 2026", "24 August 2026")
    .replaceAll("23 de agosto de 2026", "24 de agosto de 2026")
    .replaceAll("23 augustus 2026", "24 augustus 2026")
    .replaceAll("23 août", "24 août")
    .replaceAll("23 August", "24 August")
    .replaceAll("23 de agosto", "24 de agosto")
    .replaceAll("23 augustus", "24 augustus")
    .replaceAll("Netflix — renouvellement officiel (24 août 2026)", "Variety — renouvellement saison 3 (24 août 2026)")
    .replaceAll("Netflix — official renewal (24 August 2026)", "Variety — Season 3 renewal (24 August 2026)")
    .replaceAll("Netflix — renovación oficial (24 de agosto de 2026)", "Variety — renovación temporada 3 (24 de agosto de 2026)")
    .replaceAll("Netflix — officiële verlenging (24 augustus 2026)", "Variety — verlenging seizoen 3 (24 augustus 2026)");

  if (pack) {
    out = out.replace(/^title: .*$/m, `title: ${yamlEscape(pack.title)}`);
    out = out.replace(/^metaTitle: .*$/m, `metaTitle: ${yamlEscape(pack.title)}`);
    out = out.replace(/^metaDescription: .*$/m, `metaDescription: ${yamlEscape(pack.meta)}`);
    out = out.replace(/^excerpt: .*$/m, `excerpt: ${yamlEscape(pack.excerpt)}`);
  }

  if (!out.includes(accrocarBlog) && /accrocar|coulisses|rolls-royce|ecosysteme|ecosistema|marokkaans-ecosysteem|morocco-film-production|luxury-mobility|movilidad-lujo|luxe-mobiliteit|behind-the-scenes|bastidores|achter-de-schermen/i.test(out.slice(0, 800) + translationKey)) {
    const insertion = `  - label: ${yamlEscape(locale === "fr" ? "Accrocar — collaboration Moonage Pictures et Dune Films" : locale === "en" ? "Accrocar — Moonage Pictures and Dune Films collaboration" : locale === "es" ? "Accrocar — colaboración Moonage Pictures y Dune Films" : "Accrocar — samenwerking Moonage Pictures en Dune Films")}\n    url: ${yamlEscape(accrocarBlog)}\n`;
    out = out.replace("disclaimer: false", `${insertion}disclaimer: false`);
  }

  if ((translationKey === "pourquoi-productions-internationales-maroc" || translationKey === "ecosysteme-marocain-productions-internationales") && !out.includes(ccmBilan)) {
    out = out.replace(
      "disclaimer: false",
      `  - label: ${yamlEscape(locale === "fr" ? "CCM — bilan 2025 (PDF)" : locale === "en" ? "CCM — 2025 report (PDF)" : locale === "es" ? "CCM — balance 2025 (PDF)" : "CCM — jaarverslag 2025 (PDF)")}\n    url: ${yamlEscape(ccmBilan)}\n  - label: ${yamlEscape("LesEco — investissements étrangers 2025")}\n    url: ${yamlEscape(leseco)}\ndisclaimer: false`,
    );
  }

  if ((translationKey === "accrocar-mobilite-productions-internationales" || translationKey === "the-gentlemen-saison-3-maroc-rabat-erfoud") && !out.includes(itv)) {
    out = out.replace(
      "disclaimer: false",
      `  - label: ${yamlEscape("ITV Studios — majority stake in Moonage Pictures")}\n    url: ${yamlEscape(itv)}\ndisclaimer: false`,
    );
  }

  return out;
}

function replaceEvidence(body, locale) {
  const markers = {
    fr: ["L'annonce Netflix du 24 août établit", "L'annonce Netflix du 23 août établit"],
    en: ["Netflix's 24 August announcement establishes", "Netflix's 23 August announcement establishes"],
    es: ["El anuncio de Netflix del 24 de agosto establece", "El anuncio de Netflix del 23 de agosto establece"],
    nl: ["Netflix' aankondiging van 24 augustus bevestigt", "Netflix' aankondiging van 23 augustus bevestigt"],
  };
  const ends = {
    fr: "Dates, lieux et relations sont attribués à la source qui les étaye.",
    en: "Dates, places and relationships are attributed to the source that supports them.",
    es: "Fechas, lugares y relaciones se atribuyen a la fuente que los respalda.",
    nl: "Data, plaatsen en relaties worden aan hun ondersteunende bron toegeschreven.",
  };
  for (const start of markers[locale]) {
    const i = body.indexOf(start);
    if (i === -1) continue;
    const j = body.indexOf(ends[locale], i);
    if (j === -1) continue;
    return body.slice(0, i) + evidence[locale] + body.slice(j + ends[locale].length);
  }
  return body;
}

function replaceFaq(body, locale) {
  const old = {
    fr: "Oui. Netflix a confirmé la saison 3 le 24 août 2026. Les lieux marocains proviennent toutefois d'un reportage de presse et d'éléments de première main, pas d'une annonce de localisation publiée par Netflix.",
    en: "Yes. Netflix confirmed Season 3 on 24 August 2026. The Moroccan locations, however, come from press reporting and first-party material rather than a Netflix location announcement.",
    es: "Sí. Netflix confirmó la tercera temporada el 24 de agosto de 2026. Las localizaciones marroquíes proceden, sin embargo, de información periodística y material de primera mano, no de un anuncio de Netflix sobre el rodaje.",
    nl: "Ja. Netflix bevestigde seizoen 3 op 24 augustus 2026. De Marokkaanse locaties komen echter uit persberichtgeving en materiaal uit eerste hand, niet uit een locatie-aankondiging van Netflix.",
  };
  return body.replaceAll(old[locale], faqSeason[locale]);
}

function injectAccrocarBlogLink(body, locale) {
  if (body.includes(accrocarBlog)) return body;
  const line = {
    fr: `\n\nAccrocar a publié le 16 septembre 2026 une page de référence: [Accrocar confirme sa collaboration avec Moonage Pictures et Dune Films](${accrocarBlog}). Le Vrai Maroc s’appuie sur cette page pour les seuls faits qu’Accrocar affirme à propos d’elle-même, sans en recopier le texte.`,
    en: `\n\nOn 16 September 2026 Accrocar published a reference page: [Accrocar confirms its collaboration with Moonage Pictures and Dune Films](${accrocarBlog}). Le Vrai Maroc uses it only for Accrocar’s own claims, without copying the article.`,
    es: `\n\nEl 16 de septiembre de 2026 Accrocar publicó una página de referencia: [Accrocar confirma su colaboración con Moonage Pictures y Dune Films](${accrocarBlog}). Le Vrai Maroc la usa solo para las afirmaciones de Accrocar sobre sí misma, sin copiar el texto.`,
    nl: `\n\nOp 16 september 2026 publiceerde Accrocar een referentiepagina: [Accrocar bevestigt de samenwerking met Moonage Pictures en Dune Films](${accrocarBlog}). Le Vrai Maroc gebruikt die alleen voor Accrocars eigen claims, zonder de tekst te kopiëren.`,
  }[locale];
  return body.replace("\n## ", `${line}\n\n## `);
}

const entitySection = {
  fr: `## The Gentlemen

The Gentlemen est une série Netflix créée par Guy Ritchie, d’après son film de 2019. Variety et Netflix Tudum confirment une saison 3 de huit épisodes. Variety précise que la série est produite par Moonage Pictures pour Netflix et Miramax Television.

## Moonage Pictures

Moonage Pictures est la société britannique fondée en 2018 par Will Gould, Matthew Read et Frith Tiplady. ITV Studios a annoncé le 1er avril 2025 l’acquisition d’une participation majoritaire. C’est la marque de production, pas automatiquement le contrat signé par un prestataire marocain.

## MOONAGE PICTURES (THE GENTLEMEN) LIMITED

Le registre britannique Companies House identifie MOONAGE PICTURES (THE GENTLEMEN) LIMITED sous le numéro 14115797: société privée active, constituée le 18 mai 2022, activité « television programme production activities », siège à ITV White City, 201 Wood Lane, Londres. Accrocar désigne cette entité comme l’un de ses interlocuteurs sur l’opération marocaine.

## Dune Films

[Dune Films](https://dunefilms.com/) se présente comme une société de services de production basée à Marrakech, avec une seconde base à Ouarzazate, active depuis 1998. Elle indique avoir accompagné plus de 90 productions internationales et cite notamment Napoleon, Game of Thrones et John Wick: Chapter 3. Ces crédits décrivent son expérience passée; ils ne détaillent pas son rôle exact sur The Gentlemen. Accrocar confirme en revanche une collaboration directe avec Dune Films au Maroc.

## Accrocar

[Accrocar](https://accrocar.com/) se présente comme une maison marocaine de location de voitures de luxe, fondée à Marrakech en 2018. Elle affirme avoir fourni un Rolls-Royce Cullinan et un Bentley Bentayga pour les besoins qui lui ont été confiés, et indique n’avoir aucun contrat direct avec Netflix. Le Vrai Maroc n’invente ni taille de flotte, ni exclusivité, ni apparition à l’écran.

## Comment l’écosystème marocain s’emboîte

Une production étrangère ne filme pas seule: les autorisations passent par le Centre cinématographique marocain et une société marocaine enregistrée. Dune Films décrit ce rôle de partenaire local. Accrocar documente un maillon spécialisé — la mobilité haut de gamme. Les trois noms ne décrivent pas un seul et même contrat.`,
  en: `## The Gentlemen

The Gentlemen is a Netflix series created by Guy Ritchie, based on his 2019 film. Variety and Netflix Tudum confirm a third season of eight episodes. Variety states the series is produced by Moonage Pictures for Netflix and Miramax Television.

## Moonage Pictures

Moonage Pictures is the British company founded in 2018 by Will Gould, Matthew Read and Frith Tiplady. On 1 April 2025 ITV Studios announced a majority stake. That is the production brand, not automatically the contract signed by a Moroccan supplier.

## MOONAGE PICTURES (THE GENTLEMEN) LIMITED

UK Companies House lists MOONAGE PICTURES (THE GENTLEMEN) LIMITED as company 14115797: an active private limited company, incorporated on 18 May 2022, nature of business “television programme production activities”, registered office at ITV White City, 201 Wood Lane, London. Accrocar identifies this entity as one of its counterparts on the Moroccan operation.

## Dune Films

[Dune Films](https://dunefilms.com/) describes itself as a production-services company based in Marrakech, with a second base in Ouarzazate, active since 1998. It says it has serviced more than 90 international productions and lists credits including Napoleon, Game of Thrones and John Wick: Chapter 3. Those credits describe past experience; they do not detail its exact role on The Gentlemen. Accrocar does confirm a direct collaboration with Dune Films in Morocco.

## Accrocar

[Accrocar](https://accrocar.com/) presents itself as a Moroccan luxury-car rental house founded in Marrakech in 2018. It says it supplied a Rolls-Royce Cullinan and a Bentley Bentayga for the requirements entrusted to it, and that it has no direct Netflix contract. Le Vrai Maroc invents neither fleet size, exclusivity nor on-screen use.

## How the Moroccan production ecosystem fits together

A foreign production does not film alone: permits go through the Moroccan Cinema Centre and a registered Moroccan company. Dune Films describes that local-partner role. Accrocar documents a specialised link — high-end mobility. The three names do not describe a single identical contract.`,
  es: `## The Gentlemen

The Gentlemen es una serie de Netflix creada por Guy Ritchie a partir de su película de 2019. Variety y Netflix Tudum confirman una tercera temporada de ocho episodios. Variety indica que la serie la produce Moonage Pictures para Netflix y Miramax Television.

## Moonage Pictures

Moonage Pictures es la compañía británica fundada en 2018 por Will Gould, Matthew Read y Frith Tiplady. El 1 de abril de 2025 ITV Studios anunció una participación mayoritaria. Es la marca de producción, no automáticamente el contrato de un proveedor marroquí.

## MOONAGE PICTURES (THE GENTLEMEN) LIMITED

Companies House registra MOONAGE PICTURES (THE GENTLEMEN) LIMITED con el número 14115797: sociedad limitada activa, constituida el 18 de mayo de 2022, actividad de producción televisiva, sede en ITV White City, 201 Wood Lane, Londres. Accrocar identifica esta entidad como uno de sus interlocutores en la operación marroquí.

## Dune Films

[Dune Films](https://dunefilms.com/) se presenta como empresa de servicios de producción con sede en Marrakech y una segunda base en Ouarzazate, activa desde 1998. Dice haber servido más de 90 producciones internacionales y cita créditos como Napoleon, Game of Thrones y John Wick: Chapter 3. Esos créditos describen experiencia previa; no detallan su papel exacto en The Gentlemen. Accrocar sí confirma una colaboración directa con Dune Films en Marruecos.

## Accrocar

[Accrocar](https://accrocar.com/) se presenta como casa marroquí de alquiler de coches de lujo fundada en Marrakech en 2018. Afirma haber suministrado un Rolls-Royce Cullinan y un Bentley Bentayga para las necesidades que le fueron confiadas, y no tener contrato directo con Netflix. Le Vrai Maroc no inventa ni tamaño de flota, ni exclusividad, ni uso en pantalla.

## Cómo encaja el ecosistema de producción marroquí

Una producción extranjera no rueda sola: los permisos pasan por el Centro Cinematográfico Marroquí y una empresa marroquí registrada. Dune Films describe ese papel de socio local. Accrocar documenta un eslabón especializado: la movilidad de alta gama. Los tres nombres no describen un único contrato idéntico.`,
  nl: `## The Gentlemen

The Gentlemen is een Netflix-serie van Guy Ritchie, naar zijn film uit 2019. Variety en Netflix Tudum bevestigen een derde seizoen van acht afleveringen. Variety stelt dat de serie wordt geproduceerd door Moonage Pictures voor Netflix en Miramax Television.

## Moonage Pictures

Moonage Pictures is het Britse bedrijf opgericht in 2018 door Will Gould, Matthew Read en Frith Tiplady. Op 1 april 2025 kondigde ITV Studios een meerderheidsbelang aan. Dat is het productiemerk, niet automatisch het contract van een Marokkaanse leverancier.

## MOONAGE PICTURES (THE GENTLEMEN) LIMITED

Companies House vermeldt MOONAGE PICTURES (THE GENTLEMEN) LIMITED onder nummer 14115797: actieve private limited company, opgericht op 18 mei 2022, activiteit televisieproductie, kantoor op ITV White City, 201 Wood Lane, Londen. Accrocar noemt deze entiteit als een van zijn tegenpartijen in de Marokkaanse operatie.

## Dune Films

[Dune Films](https://dunefilms.com/) presenteert zich als productiedienstenbedrijf in Marrakech, met een tweede basis in Ouarzazate, actief sinds 1998. Het zegt meer dan 90 internationale producties te hebben ondersteund en noemt credits als Napoleon, Game of Thrones en John Wick: Chapter 3. Die credits beschrijven eerdere ervaring; ze detailleren niet de exacte rol op The Gentlemen. Accrocar bevestigt wél een directe samenwerking met Dune Films in Marokko.

## Accrocar

[Accrocar](https://accrocar.com/) presenteert zich als Marokkaans luxe-autoverhuurbedrijf, opgericht in Marrakech in 2018. Het zegt een Rolls-Royce Cullinan en een Bentley Bentayga te hebben geleverd voor de toevertrouwde behoeften, en geen direct Netflix-contract te hebben. Le Vrai Maroc verzint geen vlootgrootte, exclusiviteit of schermgebruik.

## Hoe het Marokkaanse productie-ecosysteem in elkaar past

Een buitenlandse productie filmt niet alleen: vergunningen lopen via het Marokkaans Filmcentrum en een geregistreerd Marokkaans bedrijf. Dune Films beschrijft die lokale partnerrol. Accrocar documenteert een gespecialiseerde schakel: high-end mobiliteit. De drie namen beschrijven niet één identiek contract.`,
};

const ccmExtra = {
  fr: `\n\nLe bilan 2025 du Centre cinématographique marocain, tel que repris par la presse économique marocaine, chiffre à 1,213 milliard de dirhams les investissements des productions étrangères tournées au Maroc, pour 48 productions selon une dépêche MAP. Les séries télévisées y pèsent 705,55 millions de dirhams. Le CCM décrit aussi un cash rebate pouvant atteindre 30 % de certaines dépenses locales éligibles, sous conditions. Ces chiffres décrivent 2025; ils ne mesurent pas The Gentlemen.`,
  en: `\n\nThe Moroccan Cinema Centre’s 2025 report, as covered by the Moroccan business press, puts foreign-production spend in Morocco at MAD 1.213 billion, with MAP citing 48 foreign productions. Television series accounted for MAD 705.55 million. The CCM also describes a cash rebate of up to 30% of certain eligible local costs, subject to conditions. Those figures describe 2025; they do not measure The Gentlemen.`,
  es: `\n\nEl balance 2025 del Centro Cinematográfico Marroquí, recogido por la prensa económica, cifra en 1.213 millones de dírhams la inversión de las producciones extranjeras, con 48 producciones según MAP. Las series de televisión concentran 705,55 millones. El CCM describe además un cash rebate de hasta el 30 % de determinados gastos locales elegibles, con condiciones. Son datos de 2025; no miden The Gentlemen.`,
  nl: `\n\nHet CCM-jaarverslag 2025, zoals overgenomen door de Marokkaanse zakenpers, raamde de uitgaven van buitenlandse producties in Marokko op 1,213 miljard dirham, met volgens MAP 48 buitenlandse producties. Televisieseries waren goed voor 705,55 miljoen dirham. Het CCM beschrijft ook een cash rebate tot 30% van bepaalde in aanmerking komende lokale kosten, onder voorwaarden. Dat zijn cijfers over 2025; ze meten The Gentlemen niet.`,
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (entry.name.endsWith(".md")) files.push(path);
  }
  return files;
}

const files = (await walk(root)).filter((path) => {
  const name = path.toLowerCase();
  return name.includes("gentlemen") || name.includes("accrocar") || name.includes("ecosysteme") || name.includes("ecosistema") || name.includes("productions-internationales") || name.includes("film-production-ecosystem") || name.includes("internationale-producties") || name.includes("why-international") || name.includes("pourquoi-productions") || name.includes("waarom-internationale") || name.includes("por-que-producciones");
});

let changed = 0;
for (const file of files) {
  let text = await readFile(file, "utf8");
  const key = text.match(/^translationKey: "([^"]+)"/m)?.[1];
  const locale = text.match(/^locale: "([^"]+)"/m)?.[1];
  if (!key || !locale) continue;
  const original = text;
  text = patchFrontmatter(text, locale, key);
  text = replaceEvidence(text, locale);
  text = replaceFaq(text, locale);
  text = text.replaceAll("MOONAGE PICTURES LIMITED", "MOONAGE PICTURES (THE GENTLEMEN) LIMITED");
  if (["accrocar-vehicules-luxe-the-gentlemen-maroc", "coulisses-logistique-automobile-the-gentlemen-maroc", "rolls-royce-bentley-the-gentlemen-maroc", "accrocar-mobilite-productions-internationales", "ecosysteme-marocain-productions-internationales"].includes(key)) {
    text = injectAccrocarBlogLink(text, locale);
  }
  if (key === "accrocar-mobilite-productions-internationales" && !text.includes("## MOONAGE PICTURES (THE GENTLEMEN) LIMITED")) {
    text = text.replace("## " + { fr: "Passer du client individuel au cahier des charges de production", en: "Moving from an individual customer to a production brief", es: "Del cliente individual al pliego de producción", nl: "Van individuele klant naar productiebrief" }[locale], entitySection[locale] + "\n\n## " + { fr: "Passer du client individuel au cahier des charges de production", en: "Moving from an individual customer to a production brief", es: "Del cliente individual al pliego de producción", nl: "Van individuele klant naar productiebrief" }[locale]);
  }
  if ((key === "pourquoi-productions-internationales-maroc" || key === "ecosysteme-marocain-productions-internationales") && !text.includes("1,213") && !text.includes("1.213")) {
    const heading = {
      fr: "## Pourquoi ce dossier compte pour le Maroc",
      en: "## Why this matters for Morocco",
      es: "## Por qué importa este caso para Marruecos",
      nl: "## Waarom dit dossier voor Marokko telt",
    }[locale];
    if (text.includes(heading)) text = text.replace(heading, heading + ccmExtra[locale]);
  }
  const pack = titles[key]?.[locale];
  if (pack) {
    const firstPara = text.split("---")[2] ?? "";
    if (firstPara.includes(text.match(/^excerpt: (.*)$/m)?.[1]?.replaceAll('"', "") ?? "___never___")) {
      /* excerpt already in body from previous generator */
    }
  }
  if (text !== original) {
    await writeFile(file, text);
    changed += 1;
  }
}

console.log(`Updated ${changed} article files of ${files.length} scanned.`);
