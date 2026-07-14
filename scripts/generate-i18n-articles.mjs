import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'src/content/articles');
const locales = ['en', 'es', 'nl'];

const translations = {
  'immobilier-marrakech-2026': {
    en: {
      slug: 'marrakech-real-estate-2026',
      title: 'Marrakech real estate in 2026: what is really changing',
      metaTitle: 'Marrakech Real Estate 2026: Trends, Prices and Market Evolution',
      metaDescription:
        'A clear analysis of the Marrakech real estate market in 2026: rising prices, buyer profiles, neighborhood pressure and cautious perspectives toward 2030.',
      excerpt:
        'Marrakech real estate is changing fast. Between rising prices, tourism pressure and the 2030 World Cup effect, here is what is really shifting in 2026.',
      tags: ['Marrakech real estate', 'Marrakech property prices 2026', 'Marrakech market', 'Morocco property investment'],
      imageAlt: 'Modern architecture in Marrakech illustrating the evolution of the real estate market in 2026.',
      body: bodyBlock('en', [
        ['A market moving, but not everywhere at the same speed', 'Marrakech is often described through excessive optimism or excessive caution. The reality in 2026 is more precise: prices have risen, demand remains international, and some neighborhoods are under pressure, but the movement is uneven. A buyer should not read Marrakech as a single market. Guéliz, Hivernage, Palmeraie, Agdal, Targa and the peri-urban roads do not respond to the same logic.'],
        ['Prices and buyer profiles', 'The best documented fact is the rise in prices over recent years. Premium areas have attracted European, Gulf and Moroccan buyers looking for centrality, lifestyle or rental potential. At the same time, some peripheral zones still offer entry points, especially for buyers who accept a longer horizon and more project risk.'],
        ['What sellers rarely explain', 'A higher asking price does not automatically mean higher quality, better liquidity or stronger rental demand. Buyers must compare surface, title, building quality, management charges, delivery conditions and future use. A property can be expensive because it is rare, but it can also be expensive simply because the market narrative is strong.'],
        ['How to read 2026 carefully', 'The right approach is to compare neighborhoods, project status and total acquisition cost. For off-plan projects, the S.A.F.E method helps structure the first level of analysis, while legal, notarial, technical and financial checks remain essential.'],
        ['Key takeaway', 'Marrakech remains attractive, but 2026 rewards disciplined buyers. The best opportunities are not the loudest promises; they are the files where location, price, documentation and intended use are coherent.'],
      ]),
    },
    es: {
      slug: 'inmobiliario-marrakech-2026',
      title: 'Inmobiliario en Marrakech en 2026: lo que cambia de verdad',
      metaTitle: 'Inmobiliario Marrakech 2026: tendencias, precios y evolución del mercado',
      metaDescription:
        'Análisis del mercado inmobiliario de Marrakech en 2026: subida de precios, perfiles compradores, presión por barrios y perspectivas prudentes hacia 2030.',
      excerpt:
        'El mercado inmobiliario de Marrakech vive una transformación profunda. Entre subida de precios, presión turística y efecto Mundial 2030, esto es lo que cambia realmente.',
      tags: ['inmobiliario Marrakech', 'precios inmobiliarios Marrakech 2026', 'mercado Marrakech', 'inversión inmobiliaria Marruecos'],
      imageAlt: 'Arquitectura moderna en Marrakech que ilustra la evolución del mercado inmobiliario en 2026.',
      body: bodyBlock('es', [
        ['Un mercado en movimiento, pero no uniforme', 'Marrakech se describe a menudo con demasiado optimismo o demasiada prudencia. La realidad de 2026 es más matizada: los precios han subido, la demanda internacional sigue presente y algunos barrios están bajo presión, pero la evolución no es homogénea. Guéliz, Hivernage, Palmeraie, Agdal, Targa y las zonas periurbanas no obedecen a la misma lógica.'],
        ['Precios y perfiles compradores', 'El dato más documentado es la subida de precios de los últimos años. Las zonas premium atraen a compradores europeos, del Golfo y marroquíes que buscan centralidad, estilo de vida o potencial de alquiler. Al mismo tiempo, algunas zonas periféricas ofrecen puntos de entrada para perfiles con horizonte más largo y mayor tolerancia al riesgo del proyecto.'],
        ['Lo que los vendedores explican poco', 'Un precio anunciado más alto no significa automáticamente más calidad, más liquidez o mejor demanda de alquiler. Hay que comparar superficie, título, calidad de construcción, gastos, condiciones de entrega y uso previsto. Un bien puede ser caro porque es escaso, pero también por un relato de mercado demasiado fuerte.'],
        ['Cómo leer 2026 con prudencia', 'La buena lectura combina barrio, estado del proyecto y coste total de adquisición. En proyectos sobre plano, S.A.F.E ayuda a ordenar el primer nivel de análisis, sin sustituir verificaciones jurídicas, notariales, técnicas o financieras.'],
        ['Punto clave', 'Marrakech conserva atractivo, pero 2026 premia a los compradores disciplinados. Las mejores oportunidades no son las promesas más ruidosas, sino los expedientes coherentes en ubicación, precio, documentación y uso.'],
      ]),
    },
    nl: {
      slug: 'vastgoed-marrakech-2026',
      title: 'Vastgoed in Marrakech in 2026: wat echt verandert',
      metaTitle: 'Vastgoed Marrakech 2026: trends, prijzen en marktontwikkeling',
      metaDescription:
        'Analyse van de vastgoedmarkt in Marrakech in 2026: prijsstijgingen, kopersprofielen, druk per wijk en voorzichtige vooruitzichten richting 2030.',
      excerpt:
        'De vastgoedmarkt van Marrakech verandert snel. Tussen stijgende prijzen, toeristische druk en het 2030-effect: dit verandert echt in 2026.',
      tags: ['vastgoed Marrakech', 'vastgoedprijzen Marrakech 2026', 'markt Marrakech', 'vastgoed investeren Marokko'],
      imageAlt: 'Moderne architectuur in Marrakech als beeld voor de evolutie van de vastgoedmarkt in 2026.',
      body: bodyBlock('nl', [
        ['Een markt in beweging, maar niet overal even snel', 'Marrakech wordt vaak te optimistisch of te voorzichtig beschreven. De realiteit in 2026 is genuanceerder: prijzen zijn gestegen, internationale vraag blijft aanwezig en sommige wijken staan onder druk, maar de beweging is ongelijk. Guéliz, Hivernage, Palmeraie, Agdal, Targa en peri-urbane zones werken niet volgens dezelfde logica.'],
        ['Prijzen en kopersprofielen', 'Het best gedocumenteerde feit is de prijsstijging van de voorbije jaren. Premiumzones trekken Europese, Golf- en Marokkaanse kopers aan die centraliteit, levensstijl of verhuurpotentieel zoeken. Tegelijk bieden sommige randzones nog instappunten voor kopers met een langere horizon en meer projectrisico.'],
        ['Wat verkopers zelden uitleggen', 'Een hogere vraagprijs betekent niet automatisch betere kwaliteit, hogere liquiditeit of sterkere verhuurvraag. Kopers moeten oppervlakte, titel, bouwkwaliteit, kosten, opleveringsvoorwaarden en beoogd gebruik vergelijken. Een woning kan duur zijn door schaarste, maar ook door een sterk marktverhaal.'],
        ['2026 zorgvuldig lezen', 'De juiste benadering vergelijkt wijk, projectstatus en totale aankoopkost. Bij off-plan projecten helpt S.A.F.E de eerste analyse te ordenen, terwijl juridische, notariële, technische en financiële controles essentieel blijven.'],
        ['Belangrijkste punt', 'Marrakech blijft aantrekkelijk, maar 2026 beloont gedisciplineerde kopers. De beste kansen zijn niet de luidste beloftes, maar dossiers waar locatie, prijs, documenten en gebruik kloppen.'],
      ]),
    },
  },
  'pourquoi-investir-marrakech': {
    en: {
      slug: 'why-marrakech-still-attracts-real-estate-investors',
      title: 'Why Marrakech still attracts real estate investors',
      metaTitle: 'Investing in Marrakech: the real reasons behind its property appeal',
      metaDescription:
        'Objective analysis of the factors that keep Marrakech attractive for real estate investors: tourism, yields, lifestyle, scarcity and 2030 horizons.',
      excerpt:
        'Despite rising prices and legitimate caution, Marrakech still has real appeal for property investors. Here are the reasons, and the limits.',
      tags: ['investing in Marrakech', 'Marrakech property investment', 'rental yield Marrakech', 'Marrakech 2030'],
      imageAlt: 'Premium villa environment in Marrakech illustrating the city’s real estate appeal.',
      body: investmentBody('en'),
    },
    es: {
      slug: 'por-que-marrakech-atrae-inversores-inmobiliarios',
      title: 'Por qué Marrakech sigue atrayendo inversores inmobiliarios',
      metaTitle: 'Invertir en Marrakech: las verdaderas razones del atractivo inmobiliario',
      metaDescription:
        'Análisis de los factores que mantienen Marrakech atractiva para inversores: turismo, rentabilidad, estilo de vida, escasez y horizonte 2030.',
      excerpt:
        'Pese a la subida de precios y a las advertencias legítimas, Marrakech conserva atractivo real para inversores inmobiliarios.',
      tags: ['invertir Marrakech', 'inversión inmobiliaria Marrakech', 'rentabilidad alquiler Marrakech', 'Marrakech 2030'],
      imageAlt: 'Villa y entorno premium en Marrakech que ilustran el atractivo inmobiliario de la ciudad.',
      body: investmentBody('es'),
    },
    nl: {
      slug: 'waarom-marrakech-vastgoedinvesteerders-aantrekt',
      title: 'Waarom Marrakech nog steeds vastgoedinvesteerders aantrekt',
      metaTitle: 'Investeren in Marrakech: de echte redenen achter de vastgoedkracht',
      metaDescription:
        'Objectieve analyse van de factoren die Marrakech aantrekkelijk houden voor vastgoedinvesteerders: toerisme, rendement, levensstijl, schaarste en 2030.',
      excerpt:
        'Ondanks hogere prijzen en terechte waarschuwingen blijft Marrakech aantrekkelijk voor vastgoedinvesteerders.',
      tags: ['investeren Marrakech', 'vastgoed investeren Marrakech', 'huurrendement Marrakech', 'Marrakech 2030'],
      imageAlt: 'Villa en premiumomgeving in Marrakech als beeld voor de vastgoed aantrekkingskracht.',
      body: investmentBody('nl'),
    },
  },
  'gueliz-hivernage-palmeraie-guide': {
    en: {
      slug: 'gueliz-hivernage-palmeraie-where-to-invest',
      title: 'Guéliz, Hivernage, Palmeraie: where to invest for your profile',
      metaTitle: 'Guéliz vs Hivernage vs Palmeraie: Which Marrakech Area to Choose?',
      metaDescription:
        'Comparison of three premium Marrakech areas for property investment: prices, yields, uses and buyer profiles.',
      excerpt:
        'Guéliz, Hivernage and Palmeraie are three names every Marrakech buyer hears. The right choice depends on your budget, use and objective.',
      tags: ['Guéliz property', 'Hivernage property', 'Palmeraie property', 'Marrakech neighborhoods investment'],
      imageAlt: 'Premium neighborhoods in Marrakech between Guéliz, Hivernage and Palmeraie.',
      body: neighborhoodCompareBody('en'),
    },
    es: {
      slug: 'gueliz-hivernage-palmeraie-donde-invertir',
      title: 'Guéliz, Hivernage, Palmeraie: dónde invertir según tu perfil',
      metaTitle: 'Guéliz vs Hivernage vs Palmeraie: qué zona elegir en Marrakech',
      metaDescription:
        'Comparativa de tres zonas premium de Marrakech para inversión inmobiliaria: precios, rentabilidades, usos y perfiles.',
      excerpt:
        'Guéliz, Hivernage y Palmeraie aparecen en todas las conversaciones inmobiliarias. La buena elección depende de presupuesto, uso y objetivo.',
      tags: ['Guéliz inmobiliario', 'Hivernage inmobiliario', 'Palmeraie inmobiliario', 'barrios Marrakech inversión'],
      imageAlt: 'Barrios premium de Marrakech entre Guéliz, Hivernage y Palmeraie.',
      body: neighborhoodCompareBody('es'),
    },
    nl: {
      slug: 'gueliz-hivernage-palmeraie-waar-investeren',
      title: 'Guéliz, Hivernage, Palmeraie: waar investeren volgens je profiel',
      metaTitle: 'Guéliz vs Hivernage vs Palmeraie: welke wijk kiezen in Marrakech',
      metaDescription:
        'Vergelijking van drie premiumzones in Marrakech voor vastgoed: prijzen, rendementen, gebruik en kopersprofielen.',
      excerpt:
        'Guéliz, Hivernage en Palmeraie komen in elk vastgoedgesprek terug. De juiste keuze hangt af van budget, gebruik en doel.',
      tags: ['Guéliz vastgoed', 'Hivernage vastgoed', 'Palmeraie vastgoed', 'wijken Marrakech investering'],
      imageAlt: 'Premiumwijken van Marrakech tussen Guéliz, Hivernage en Palmeraie.',
      body: neighborhoodCompareBody('nl'),
    },
  },
  'riads-marrakech-guide': {
    en: {
      slug: 'riads-marrakech-investment-guide',
      title: 'Riads in Marrakech: charm, yield and pitfalls to understand',
      metaTitle: 'Marrakech Riads: Investment, Renovation and Rental Yield Guide',
      metaDescription:
        'Guide to buying a riad in Marrakech: purchase price, renovation, rental potential, regulation and risks before investing.',
      excerpt:
        'The riad is Marrakech’s most iconic property asset. It can create strong rental income or become a costly project.',
      tags: ['Marrakech riad investment', 'buy riad Marrakech', 'Medina riad', 'riad renovation Marrakech'],
      imageAlt: 'Traditional riad patio in Marrakech illustrating charm and investment risks.',
      body: riadBody('en'),
    },
    es: {
      slug: 'riads-marrakech-guia-inversion',
      title: 'Riads en Marrakech: encanto, rentabilidad y riesgos que conocer',
      metaTitle: 'Riads Marrakech: inversión, reforma y rentabilidad — Guía',
      metaDescription:
        'Guía para comprar un riad en Marrakech: precio, reforma, potencial de alquiler, regulación y riesgos antes de invertir.',
      excerpt:
        'El riad es el activo inmobiliario más emblemático de Marrakech. Puede generar ingresos o convertirse en un proyecto costoso.',
      tags: ['riad Marrakech inversión', 'comprar riad Marrakech', 'riad Medina', 'reforma riad Marrakech'],
      imageAlt: 'Patio tradicional de riad en Marrakech que ilustra encanto y riesgos de inversión.',
      body: riadBody('es'),
    },
    nl: {
      slug: 'riads-marrakech-investeringsgids',
      title: 'Riads in Marrakech: charme, rendement en valkuilen',
      metaTitle: 'Riads Marrakech: investeren, renovatie en huurrendement',
      metaDescription:
        'Gids voor het kopen van een riad in Marrakech: aankoopprijs, renovatie, verhuurpotentieel, regels en risico’s.',
      excerpt:
        'De riad is het meest iconische vastgoedtype van Marrakech. Hij kan inkomsten opleveren of een duur project worden.',
      tags: ['riad Marrakech investering', 'riad kopen Marrakech', 'riad Medina', 'riad renovatie Marrakech'],
      imageAlt: 'Traditionele riadpatio in Marrakech als beeld voor charme en investeringsrisico’s.',
      body: riadBody('nl'),
    },
  },
  'location-courte-duree-marrakech': {
    en: {
      slug: 'short-term-rental-marrakech-opportunity-or-pressure',
      title: 'Short-term rentals in Marrakech: real opportunity or pressured market?',
      metaTitle: 'Airbnb and Short-Term Rentals in Marrakech: Yield, Rules and Reality',
      metaDescription:
        'Analysis of short-term rentals in Marrakech: real yields, regulation, seasonality, competition and comparison with long-term rental.',
      excerpt:
        'Short-term rental attracts investors with double-digit promises. The reality is more nuanced: regulation, seasonality and competition matter.',
      tags: ['short-term rental Marrakech', 'Airbnb Marrakech', 'rental yield Marrakech', 'holiday rental Marrakech'],
      imageAlt: 'Furnished apartment or terrace in Marrakech illustrating short-term rental.',
      body: shortRentalBody('en'),
    },
    es: {
      slug: 'alquiler-corta-duracion-marrakech-oportunidad-presion',
      title: 'Alquiler de corta duración en Marrakech: oportunidad o mercado bajo presión',
      metaTitle: 'Airbnb y alquiler turístico en Marrakech: rentabilidad, regulación y realidad',
      metaDescription:
        'Análisis del alquiler de corta duración en Marrakech: rentabilidades reales, regulación, estacionalidad, competencia y comparación con larga duración.',
      excerpt:
        'El alquiler turístico atrae a inversores con promesas de doble dígito. La realidad exige mirar regulación, temporada y competencia.',
      tags: ['alquiler corta duración Marrakech', 'Airbnb Marrakech', 'rentabilidad alquiler Marrakech', 'alquiler turístico Marrakech'],
      imageAlt: 'Apartamento amueblado o terraza en Marrakech para ilustrar el alquiler de corta duración.',
      body: shortRentalBody('es'),
    },
    nl: {
      slug: 'kortetermijnverhuur-marrakech-kans-of-druk',
      title: 'Kortetermijnverhuur in Marrakech: kans of markt onder druk?',
      metaTitle: 'Airbnb en kortetermijnverhuur in Marrakech: rendement, regels en realiteit',
      metaDescription:
        'Analyse van kortetermijnverhuur in Marrakech: reëel rendement, regelgeving, seizoenen, concurrentie en vergelijking met lange termijn.',
      excerpt:
        'Kortetermijnverhuur lokt investeerders met dubbelecijferrendementen. De realiteit vraagt aandacht voor regels, seizoen en concurrentie.',
      tags: ['kortetermijnverhuur Marrakech', 'Airbnb Marrakech', 'huurrendement Marrakech', 'vakantieverhuur Marrakech'],
      imageAlt: 'Gemeubeld appartement of terras in Marrakech als beeld voor kortetermijnverhuur.',
      body: shortRentalBody('nl'),
    },
  },
  'marrakech-accessible-investisseurs': {
    en: {
      slug: 'is-marrakech-still-accessible-for-new-investors',
      title: 'Is Marrakech still accessible for new investors?',
      metaTitle: 'Investing in Marrakech in 2026: Entry Budgets and Market Accessibility',
      metaDescription:
        'Analysis of realistic budgets for investing in Marrakech in 2026: apartments, riads, villas, timing and buyer profiles.',
      excerpt:
        'Prices have risen. Is Marrakech still accessible for a first investor? The answer depends on budget, type of property and timing.',
      tags: ['Marrakech investment budget', 'buy apartment Marrakech', 'first investment Marrakech', 'Marrakech property 2026'],
      imageAlt: 'Modern buildings in Guéliz Marrakech illustrating real estate investment.',
      body: accessibilityBody('en'),
    },
    es: {
      slug: 'marrakech-accesible-nuevos-inversores',
      title: '¿Marrakech sigue siendo accesible para nuevos inversores?',
      metaTitle: 'Invertir en Marrakech en 2026: presupuestos de entrada y accesibilidad',
      metaDescription:
        'Análisis de presupuestos realistas para invertir en Marrakech en 2026: apartamentos, riads, villas, timing y perfiles.',
      excerpt:
        'Los precios han subido. ¿Marrakech sigue accesible para un primer inversor? Depende del presupuesto, el tipo de bien y el momento.',
      tags: ['invertir Marrakech presupuesto', 'comprar apartamento Marrakech', 'primera inversión Marrakech', 'inmobiliario Marrakech 2026'],
      imageAlt: 'Edificios modernos en Guéliz Marrakech para ilustrar inversión inmobiliaria.',
      body: accessibilityBody('es'),
    },
    nl: {
      slug: 'marrakech-toegankelijk-nieuwe-investeerders',
      title: 'Is Marrakech nog toegankelijk voor nieuwe investeerders?',
      metaTitle: 'Investeren in Marrakech in 2026: instapbudgetten en toegankelijkheid',
      metaDescription:
        'Analyse van realistische budgetten voor investeren in Marrakech in 2026: appartementen, riads, villa’s, timing en profielen.',
      excerpt:
        'De prijzen zijn gestegen. Is Marrakech nog bereikbaar voor een eerste investeerder? Dat hangt af van budget, type en timing.',
      tags: ['investeren Marrakech budget', 'appartement kopen Marrakech', 'eerste investering Marrakech', 'vastgoed Marrakech 2026'],
      imageAlt: 'Moderne gebouwen in Guéliz Marrakech als beeld voor vastgoed investeren.',
      body: accessibilityBody('nl'),
    },
  },
  'zones-periurbaines-marrakech': {
    en: {
      slug: 'amizmiz-road-agdal-targa-areas-to-watch',
      title: 'Route d’Amizmiz, Agdal, Targa: areas to watch outside the center',
      metaTitle: 'Marrakech Expansion Areas: Route d’Amizmiz, Agdal, Targa',
      metaDescription:
        'Analysis of Marrakech expansion areas: Route d’Amizmiz, Agdal, Targa and Route de l’Ourika, with prices, access and off-plan potential.',
      excerpt:
        'The next value potential may not be in established premium districts. Marrakech’s expansion zones concentrate many new projects.',
      tags: ['Route d’Amizmiz Marrakech', 'Agdal Marrakech real estate', 'Targa Marrakech', 'Marrakech expansion zones'],
      imageAlt: 'Developing residential area in Marrakech between Agdal, Targa and Route d’Amizmiz.',
      body: periurbanBody('en'),
    },
    es: {
      slug: 'route-amizmiz-agdal-targa-zonas-a-seguir',
      title: 'Route d’Amizmiz, Agdal, Targa: zonas a seguir fuera del centro',
      metaTitle: 'Zonas de expansión Marrakech: Route d’Amizmiz, Agdal, Targa',
      metaDescription:
        'Análisis de zonas de expansión de Marrakech: Route d’Amizmiz, Agdal, Targa y Route de l’Ourika, con precios, accesos y potencial.',
      excerpt:
        'El potencial de plusvalía quizá no esté en los barrios premium establecidos. Las zonas de expansión concentran muchos proyectos nuevos.',
      tags: ['Route d’Amizmiz Marrakech', 'Agdal Marrakech inmobiliario', 'Targa Marrakech', 'zonas expansión Marrakech'],
      imageAlt: 'Zona residencial en desarrollo en Marrakech entre Agdal, Targa y Route d’Amizmiz.',
      body: periurbanBody('es'),
    },
    nl: {
      slug: 'route-amizmiz-agdal-targa-zones-om-te-volgen',
      title: 'Route d’Amizmiz, Agdal, Targa: zones buiten het centrum om te volgen',
      metaTitle: 'Uitbreidingszones Marrakech: Route d’Amizmiz, Agdal, Targa',
      metaDescription:
        'Analyse van uitbreidingszones in Marrakech: Route d’Amizmiz, Agdal, Targa en Route de l’Ourika, met prijzen, toegang en potentieel.',
      excerpt:
        'Het volgende waardepotentieel ligt misschien niet in gevestigde premiumwijken. Uitbreidingszones concentreren veel nieuwbouw.',
      tags: ['Route d’Amizmiz Marrakech', 'Agdal Marrakech vastgoed', 'Targa Marrakech', 'uitbreidingszones Marrakech'],
      imageAlt: 'Residentiële ontwikkelingszone in Marrakech tussen Agdal, Targa en Route d’Amizmiz.',
      body: periurbanBody('nl'),
    },
  },
  'marrakech-avant-2030': {
    en: {
      slug: 'marrakech-before-2030-tourism-infrastructure-opportunities',
      title: 'Marrakech before 2030: tourism, infrastructure and new opportunities',
      metaTitle: 'Marrakech 2030: World Cup, Infrastructure and Property Impact',
      metaDescription:
        'Analysis of Marrakech infrastructure projects before 2030: stadium, airport, hospitality and impact on property and tourism.',
      excerpt:
        'The 2030 World Cup is approaching. Marrakech is preparing, but investors need to separate confirmed change from marketing noise.',
      tags: ['Marrakech 2030', 'World Cup 2030 Morocco', 'Marrakech infrastructure', 'tourism Marrakech 2030'],
      imageAlt: 'Marrakech infrastructure illustrating tourism opportunities toward 2030.',
      body: infrastructureBody('en'),
    },
    es: {
      slug: 'marrakech-antes-2030-turismo-infraestructuras-oportunidades',
      title: 'Marrakech antes de 2030: turismo, infraestructuras y oportunidades',
      metaTitle: 'Marrakech 2030: Mundial, infraestructuras e impacto inmobiliario',
      metaDescription:
        'Análisis de proyectos de infraestructura en Marrakech antes de 2030: estadio, aeropuerto, hotelería e impacto inmobiliario y turístico.',
      excerpt:
        'El Mundial 2030 se acerca. Marrakech se prepara, pero conviene distinguir cambios confirmados de ruido comercial.',
      tags: ['Marrakech 2030', 'Mundial 2030 Marruecos', 'infraestructura Marrakech', 'turismo Marrakech 2030'],
      imageAlt: 'Infraestructuras de Marrakech que ilustran oportunidades turísticas hacia 2030.',
      body: infrastructureBody('es'),
    },
    nl: {
      slug: 'marrakech-voor-2030-toerisme-infrastructuur-kansen',
      title: 'Marrakech vóór 2030: toerisme, infrastructuur en nieuwe kansen',
      metaTitle: 'Marrakech 2030: WK, infrastructuur en vastgoedimpact',
      metaDescription:
        'Analyse van infrastructuurprojecten in Marrakech vóór 2030: stadion, luchthaven, hotellerie en impact op vastgoed en toerisme.',
      excerpt:
        'Het WK 2030 komt dichterbij. Marrakech bereidt zich voor, maar investeerders moeten bevestigde verandering scheiden van marketing.',
      tags: ['Marrakech 2030', 'WK 2030 Marokko', 'infrastructuur Marrakech', 'toerisme Marrakech 2030'],
      imageAlt: 'Infrastructuur in Marrakech als beeld voor toeristische kansen richting 2030.',
      body: infrastructureBody('nl'),
    },
  },
  'effet-tourisme-prix-immobilier': {
    en: {
      slug: 'tourism-effect-property-prices-marrakech',
      title: 'The tourism effect on property prices in Marrakech',
      metaTitle: 'Tourism and Real Estate in Marrakech: How Visitor Growth Pushes Prices',
      metaDescription:
        'Analysis of the link between tourism and property prices in Marrakech: visitor flows, central districts, short-term rental and gentrification.',
      excerpt:
        'Record tourism is reshaping Marrakech real estate, with upside for owners and more complex effects for residents.',
      tags: ['Marrakech tourism 2026', 'tourism real estate Marrakech', 'Airbnb property prices', 'Marrakech gentrification'],
      imageAlt: 'Tourist view of Marrakech illustrating tourism’s impact on property prices.',
      body: tourismPriceBody('en'),
    },
    es: {
      slug: 'efecto-turismo-precios-inmobiliarios-marrakech',
      title: 'El efecto del turismo sobre los precios inmobiliarios en Marrakech',
      metaTitle: 'Turismo e inmobiliario en Marrakech: cómo la demanda turística impulsa precios',
      metaDescription:
        'Análisis del vínculo entre turismo y precios inmobiliarios en Marrakech: visitantes, barrios centrales, alquiler turístico y gentrificación.',
      excerpt:
        'El turismo récord transforma el inmobiliario de Marrakech, con efectos positivos para propietarios y más complejos para residentes.',
      tags: ['turismo Marrakech 2026', 'inmobiliario turismo Marrakech', 'Airbnb precios inmobiliarios', 'gentrificación Marrakech'],
      imageAlt: 'Vista turística de Marrakech que ilustra el impacto del turismo en los precios inmobiliarios.',
      body: tourismPriceBody('es'),
    },
    nl: {
      slug: 'effect-toerisme-vastgoedprijzen-marrakech',
      title: 'Het effect van toerisme op vastgoedprijzen in Marrakech',
      metaTitle: 'Toerisme en vastgoed in Marrakech: hoe bezoekersgroei prijzen duwt',
      metaDescription:
        'Analyse van de link tussen toerisme en vastgoedprijzen in Marrakech: bezoekers, centrale wijken, kortetermijnverhuur en gentrificatie.',
      excerpt:
        'Recordtoerisme verandert vastgoed in Marrakech, met voordelen voor eigenaars en complexere gevolgen voor bewoners.',
      tags: ['toerisme Marrakech 2026', 'toerisme vastgoed Marrakech', 'Airbnb vastgoedprijzen', 'gentrificatie Marrakech'],
      imageAlt: 'Toeristisch beeld van Marrakech als illustratie van de impact op vastgoedprijzen.',
      body: tourismPriceBody('nl'),
    },
  },
  'marrakech-perspectives-marche-2026-2030': {
    en: {
      slug: 'marrakech-real-estate-market-outlook-2026-2030',
      title: 'Marrakech 2026–2030: market outlook and real estate scenarios',
      metaTitle: 'Marrakech Real Estate Market 2026–2030: Scenarios and Signals',
      metaDescription:
        'Forward-looking analysis of Marrakech real estate from 2026 to 2030: upside scenario, correction risk, World Cup effect and signals to monitor.',
      excerpt:
        'Between the 2030 effect, tourism pressure and valuations, Marrakech real estate is at a crossroads. Here are plausible scenarios.',
      tags: ['Marrakech property market 2030', 'Marrakech outlook', 'World Cup property Morocco', 'Marrakech market analysis'],
      imageAlt: 'Marrakech railway station illustrating property market perspectives between 2026 and 2030.',
      body: outlookBody('en'),
    },
    es: {
      slug: 'marrakech-perspectivas-mercado-inmobiliario-2026-2030',
      title: 'Marrakech 2026–2030: perspectivas de mercado y escenarios inmobiliarios',
      metaTitle: 'Mercado inmobiliario Marrakech 2026–2030: escenarios y señales',
      metaDescription:
        'Análisis prospectivo del mercado inmobiliario de Marrakech entre 2026 y 2030: escenario alcista, corrección, efecto Mundial y señales.',
      excerpt:
        'Entre efecto 2030, presión turística y valoraciones, el inmobiliario de Marrakech está en una encrucijada.',
      tags: ['mercado inmobiliario Marrakech 2030', 'perspectivas Marrakech', 'Mundial inmobiliario Marruecos', 'análisis mercado Marrakech'],
      imageAlt: 'Estación de Marrakech que ilustra perspectivas del mercado inmobiliario entre 2026 y 2030.',
      body: outlookBody('es'),
    },
    nl: {
      slug: 'marrakech-vastgoedmarkt-vooruitzichten-2026-2030',
      title: 'Marrakech 2026–2030: marktvooruitzichten en vastgoedscenario’s',
      metaTitle: 'Vastgoedmarkt Marrakech 2026–2030: scenario’s en signalen',
      metaDescription:
        'Vooruitblik op vastgoed in Marrakech tussen 2026 en 2030: opwaarts scenario, correctierisico, WK-effect en signalen.',
      excerpt:
        'Tussen 2030-effect, toeristische druk en waarderingen staat vastgoed in Marrakech op een kruispunt.',
      tags: ['vastgoedmarkt Marrakech 2030', 'vooruitzichten Marrakech', 'WK vastgoed Marokko', 'marktanalyse Marrakech'],
      imageAlt: 'Station van Marrakech als beeld voor vastgoedmarktperspectieven tussen 2026 en 2030.',
      body: outlookBody('nl'),
    },
  },
  'erreurs-acheter-marrakech': {
    en: {
      slug: 'mistakes-buying-property-marrakech',
      title: 'Buying property in Marrakech: mistakes to avoid',
      metaTitle: 'Buying in Marrakech: 8 Mistakes to Avoid Before Investing',
      metaDescription:
        'Practical guide to avoiding property purchase traps in Marrakech: title deed, hidden costs, renovation, rental management and yield promises.',
      excerpt:
        'From title deed checks to unrealistic yield promises, buying in Marrakech has specific risks that buyers should understand before signing.',
      tags: ['buy property Marrakech', 'Marrakech property purchase', 'investment mistakes Marrakech', 'Morocco real estate traps'],
      imageAlt: 'Property visit in Marrakech illustrating mistakes to avoid before buying.',
      body: mistakesBody('en'),
    },
    es: {
      slug: 'errores-comprar-inmueble-marrakech',
      title: 'Comprar un inmueble en Marrakech: errores que evitar',
      metaTitle: 'Comprar en Marrakech: 8 errores que evitar antes de invertir',
      metaDescription:
        'Guía práctica para evitar trampas de compra inmobiliaria en Marrakech: título, gastos ocultos, reforma, gestión y promesas de rentabilidad.',
      excerpt:
        'Desde el título de propiedad hasta promesas de rentabilidad, comprar en Marrakech exige entender riesgos específicos antes de firmar.',
      tags: ['comprar Marrakech', 'compra inmobiliaria Marrakech', 'errores inversión Marrakech', 'trampas inmobiliarias Marruecos'],
      imageAlt: 'Visita inmobiliaria en Marrakech para ilustrar errores que evitar antes de comprar.',
      body: mistakesBody('es'),
    },
    nl: {
      slug: 'fouten-vastgoed-kopen-marrakech',
      title: 'Vastgoed kopen in Marrakech: fouten die je moet vermijden',
      metaTitle: 'Kopen in Marrakech: 8 fouten vermijden vóór investeren',
      metaDescription:
        'Praktische gids om valkuilen bij vastgoedkoop in Marrakech te vermijden: titel, verborgen kosten, renovatie, beheer en rendement.',
      excerpt:
        'Van eigendomstitel tot onrealistische rendementen: kopen in Marrakech kent specifieke risico’s die je vóór ondertekening moet begrijpen.',
      tags: ['kopen Marrakech', 'vastgoed kopen Marrakech', 'investeringsfouten Marrakech', 'vastgoedvalkuilen Marokko'],
      imageAlt: 'Vastgoedbezoek in Marrakech als beeld voor fouten die je vóór aankoop moet vermijden.',
      body: mistakesBody('nl'),
    },
  },
  'dahir-maroc-immobilier-acheteur': {
    en: {
      slug: 'dahir-morocco-real-estate-buyer',
      title: 'Dahir in Morocco: what a real estate buyer should understand before buying',
      metaTitle: 'Dahir in Morocco: Meaning and Real Estate Impact',
      metaDescription:
        'Understand what a Dahir is in Morocco, its role in the legal framework and why property buyers should verify texts, documents and safeguards.',
      excerpt:
        'The word Dahir often appears in Moroccan legal texts. Buyers do not need to become lawyers, but they should understand why official texts and documents matter.',
      tags: ['Dahir Morocco', 'Morocco real estate law', 'Morocco property purchase', 'VEFA Morocco', 'Title deed Morocco', 'Moroccan notary'],
      imageAlt: 'Real estate documents in Morocco illustrating the importance of legal framework and Dahirs in a property purchase.',
      body: dahirBody('en'),
    },
    es: {
      slug: 'dahir-marruecos-comprador-inmobiliario',
      title: 'Dahir en Marruecos: lo que un comprador inmobiliario debe entender antes de comprar',
      metaTitle: 'Dahir en Marruecos: definición e impacto inmobiliario',
      metaDescription:
        'Entender qué es un Dahir en Marruecos, su papel en el marco jurídico y por qué los compradores deben verificar textos, documentos y garantías.',
      excerpt:
        'La palabra Dahir aparece a menudo en textos jurídicos marroquíes. El comprador no debe ser jurista, pero sí entender por qué importan textos y documentos.',
      tags: ['Dahir Marruecos', 'derecho inmobiliario Marruecos', 'compra inmobiliaria Marruecos', 'VEFA Marruecos', 'título foncier', 'notario Marruecos'],
      imageAlt: 'Documentos inmobiliarios en Marruecos que ilustran la importancia del marco jurídico y los Dahirs.',
      body: dahirBody('es'),
    },
    nl: {
      slug: 'dahir-marokko-vastgoedkoper',
      title: 'Dahir in Marokko: wat een vastgoedkoper moet begrijpen vóór aankoop',
      metaTitle: 'Dahir in Marokko: betekenis en vastgoedimpact',
      metaDescription:
        'Begrijp wat een Dahir is in Marokko, de rol in het juridisch kader en waarom vastgoedkopers teksten, documenten en waarborgen moeten controleren.',
      excerpt:
        'Het woord Dahir komt vaak terug in Marokkaanse juridische teksten. Kopers hoeven geen jurist te worden, maar moeten begrijpen waarom officiële documenten tellen.',
      tags: ['Dahir Marokko', 'vastgoedrecht Marokko', 'vastgoedkoop Marokko', 'VEFA Marokko', 'titre foncier', 'notaris Marokko'],
      imageAlt: 'Vastgoeddocumenten in Marokko als beeld voor het belang van juridisch kader en Dahirs bij aankoop.',
      body: dahirBody('nl'),
    },
  },
};

function bodyBlock(locale, sections) {
  const intro = {
    en: 'This translated edition keeps the same editorial caution as the French original: it is an analysis for buyers and investors, not a promise of return or legal advice.',
    es: 'Esta edición traducida mantiene la misma prudencia editorial que el original francés: es un análisis para compradores e inversores, no una promesa de rentabilidad ni asesoramiento jurídico.',
    nl: 'Deze vertaalde editie behoudt dezelfde redactionele voorzichtigheid als het Franse origineel: het is analyse voor kopers en investeerders, geen rendementsbelofte of juridisch advies.',
  }[locale];
  const disclaimer = {
    en: 'Before any purchase, buyers should consult qualified legal, notarial, tax, financial or technical professionals where relevant.',
    es: 'Antes de cualquier compra, conviene consultar a profesionales jurídicos, notariales, fiscales, financieros o técnicos cualificados cuando corresponda.',
    nl: 'Vóór elke aankoop is het verstandig waar nodig gekwalificeerde juridische, notariële, fiscale, financiële of technische professionals te raadplegen.',
  }[locale];
  return [
    intro,
    '',
    ...sections.flatMap(([heading, text]) => [`## ${heading}`, '', text, '']),
    `> ${disclaimer}`,
  ].join('\n');
}

function investmentBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['A city supported by tourism', 'Marrakech continues to attract visitors, residents and investors because its appeal is not based on a single factor. Tourism supports short-term demand, the city has international visibility, and well-located properties can serve several uses: personal stays, rental income and patrimonial holding.'],
      ['The limits of the investment story', 'The attraction is real, but it does not justify buying anything at any price. Higher prices reduce margin for error. Management quality, regulation, seasonality, taxation and maintenance all affect net returns.'],
      ['What disciplined investors compare', 'A serious investor compares acquisition cost, expected rent, vacancy, management fees, renovation, resale liquidity and neighborhood trajectory. The right property is not only attractive; it matches a buyer profile and a realistic operating plan.'],
      ['Key takeaway', 'Marrakech remains compelling for investors who think in scenarios, not slogans. The strongest files combine location, documentation, price coherence and operational realism.'],
    ],
    es: [
      ['Una ciudad sostenida por el turismo', 'Marrakech sigue atrayendo visitantes, residentes e inversores porque su atractivo no depende de un solo factor. El turismo sostiene parte de la demanda, la ciudad tiene visibilidad internacional y los bienes bien ubicados pueden servir para uso personal, alquiler y patrimonio.'],
      ['Los límites del relato inversor', 'El atractivo es real, pero no justifica comprar cualquier bien a cualquier precio. La subida de precios reduce el margen de error. Gestión, regulación, estacionalidad, fiscalidad y mantenimiento afectan la rentabilidad neta.'],
      ['Qué compara un inversor disciplinado', 'Un inversor serio compara coste total, renta esperada, vacancia, gestión, reforma, liquidez de reventa y trayectoria del barrio. El buen activo no solo seduce; encaja con un perfil y un plan realista.'],
      ['Punto clave', 'Marrakech sigue siendo convincente para quien piensa en escenarios, no en eslóganes. Los mejores expedientes combinan ubicación, documentación, coherencia de precio y realismo operativo.'],
    ],
    nl: [
      ['Een stad gedragen door toerisme', 'Marrakech blijft bezoekers, bewoners en investeerders aantrekken omdat de aantrekkingskracht niet op één factor rust. Toerisme ondersteunt vraag, de stad is internationaal zichtbaar en goed gelegen vastgoed kan dienen voor eigen gebruik, verhuur en vermogen.'],
      ['De grenzen van het investeringsverhaal', 'De aantrekkingskracht is echt, maar rechtvaardigt niet elke aankoop tegen elke prijs. Hogere prijzen verkleinen de foutmarge. Beheer, regels, seizoenen, fiscaliteit en onderhoud bepalen netto rendement.'],
      ['Wat gedisciplineerde investeerders vergelijken', 'Een serieuze investeerder vergelijkt totale kost, verwachte huur, leegstand, beheer, renovatie, wederverkoop en wijkdynamiek. Het juiste pand past bij een profiel en een realistisch exploitatieplan.'],
      ['Belangrijkste punt', 'Marrakech blijft interessant voor wie in scenario’s denkt, niet in slogans. De sterkste dossiers combineren locatie, documenten, prijscoherentie en operationeel realisme.'],
    ],
  }[locale]);
}

function neighborhoodCompareBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Guéliz: liquidity and urban use', 'Guéliz is the modern city center. It suits buyers who want services, restaurants, walkability and resale liquidity. It can work for rental demand, but quality varies greatly from one building to another.'],
      ['Hivernage: prestige and limited stock', 'Hivernage carries a premium image. It can suit buyers seeking standing, hotels, nightlife and central prestige. The challenge is price discipline: the premium must be justified by real quality and scarcity.'],
      ['Palmeraie: space and patrimonial logic', 'Palmeraie is less about everyday convenience and more about villas, gardens, privacy and lifestyle. It can be powerful for high-end use, but management, maintenance and liquidity must be read carefully.'],
      ['Choosing by profile', 'There is no universal best district. The right area depends on budget, use, time horizon, management capacity and tolerance for liquidity risk.'],
    ],
    es: [
      ['Guéliz: liquidez y uso urbano', 'Guéliz es el centro moderno. Conviene a quienes buscan servicios, restaurantes, movilidad y liquidez de reventa. Puede funcionar para alquiler, pero la calidad cambia mucho de un edificio a otro.'],
      ['Hivernage: prestigio y oferta limitada', 'Hivernage tiene imagen premium. Puede convenir a compradores que buscan standing, hoteles, vida nocturna y centralidad. El reto es disciplinar el precio: la prima debe justificarse por calidad y escasez reales.'],
      ['Palmeraie: espacio y lógica patrimonial', 'Palmeraie se entiende menos por conveniencia diaria y más por villas, jardines, privacidad y estilo de vida. Puede ser fuerte en gama alta, pero gestión, mantenimiento y liquidez exigen atención.'],
      ['Elegir según perfil', 'No existe el mejor barrio universal. La zona correcta depende de presupuesto, uso, horizonte, capacidad de gestión y tolerancia al riesgo de liquidez.'],
    ],
    nl: [
      ['Guéliz: liquiditeit en stedelijk gebruik', 'Guéliz is het moderne centrum. Het past bij kopers die diensten, restaurants, wandelbaarheid en wederverkoopliquiditeit zoeken. Verhuur kan werken, maar kwaliteit verschilt sterk per gebouw.'],
      ['Hivernage: prestige en beperkt aanbod', 'Hivernage heeft een premiumimago. Het past bij kopers die standing, hotels, nachtleven en centraliteit zoeken. De uitdaging is prijsdiscipline: de premie moet door echte kwaliteit en schaarste worden gedragen.'],
      ['Palmeraie: ruimte en patrimoniale logica', 'Palmeraie draait minder om dagelijkse nabijheid en meer om villa’s, tuinen, privacy en levensstijl. Het kan sterk zijn in high-end gebruik, maar beheer, onderhoud en liquiditeit vragen aandacht.'],
      ['Kiezen volgens profiel', 'Er bestaat geen universeel beste wijk. De juiste zone hangt af van budget, gebruik, horizon, beheercapaciteit en tolerantie voor liquiditeitsrisico.'],
    ],
  }[locale]);
}

function riadBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['The appeal of a riad', 'A riad offers architecture, intimacy and a strong Marrakech identity. For buyers, it can be a lifestyle asset, a guesthouse project or a rental product with character.'],
      ['The hidden complexity', 'Behind the charm are technical, legal and operational questions: title, access, renovation permits, structural condition, humidity, neighborhood constraints and staff or management needs.'],
      ['Renovation and operating costs', 'The purchase price is only one part of the equation. Renovation can exceed initial estimates, and hospitality use requires compliance, service quality and permanent management.'],
      ['Key takeaway', 'A riad can be exceptional when the file, building condition and operating plan are coherent. It becomes risky when buyers fall in love with the image before checking the structure.'],
    ],
    es: [
      ['El atractivo de un riad', 'Un riad ofrece arquitectura, intimidad e identidad marrakchí. Para el comprador puede ser un bien de estilo de vida, una casa de huéspedes o un producto de alquiler con carácter.'],
      ['La complejidad oculta', 'Detrás del encanto hay preguntas técnicas, legales y operativas: título, acceso, permisos de reforma, estructura, humedad, limitaciones del barrio y necesidades de gestión.'],
      ['Reforma y costes de explotación', 'El precio de compra es solo una parte. La reforma puede superar estimaciones y el uso turístico exige cumplimiento, calidad de servicio y gestión permanente.'],
      ['Punto clave', 'Un riad puede ser excepcional si expediente, estado del edificio y plan operativo son coherentes. Se vuelve arriesgado cuando se compra la imagen antes de verificar la estructura.'],
    ],
    nl: [
      ['De aantrekkingskracht van een riad', 'Een riad biedt architectuur, intimiteit en een sterke Marrakech-identiteit. Voor kopers kan het een lifestylepand, gastenhuis of karaktervol verhuurproduct zijn.'],
      ['De verborgen complexiteit', 'Achter de charme zitten technische, juridische en operationele vragen: titel, toegang, renovatievergunningen, structuur, vocht, wijkbeperkingen en beheerbehoefte.'],
      ['Renovatie en exploitatiekosten', 'De aankoopprijs is slechts één deel. Renovatie kan ramingen overschrijden en toeristisch gebruik vraagt naleving, servicekwaliteit en permanent beheer.'],
      ['Belangrijkste punt', 'Een riad kan uitzonderlijk zijn wanneer dossier, gebouwstaat en exploitatieplan kloppen. Hij wordt riskant wanneer kopers verliefd worden op het beeld vóór controle van de structuur.'],
    ],
  }[locale]);
}

function shortRentalBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Demand is real, but competition is real too', 'Marrakech receives strong visitor flows, which supports short-term rental demand. Yet supply has also expanded, making occupancy, reviews, pricing and management more decisive.'],
      ['Gross yield is not net yield', 'Cleaning, platform fees, management, maintenance, taxes, vacancies and furnishing renewal reduce the number shown in sales presentations. Buyers should calculate conservative scenarios.'],
      ['Regulation and operating discipline', 'Short-term rental is an operating activity, not passive income. Owners need to understand applicable rules, authorization issues, guest service and neighborhood constraints.'],
      ['Key takeaway', 'Short-term rental can work in Marrakech, but only with a professional operating plan and a purchase price that leaves margin for seasonality and regulation.'],
    ],
    es: [
      ['La demanda existe, pero la competencia también', 'Marrakech recibe muchos visitantes, lo que sostiene el alquiler de corta duración. Pero la oferta también creció, haciendo más decisivos ocupación, reseñas, precio y gestión.'],
      ['Rentabilidad bruta no es rentabilidad neta', 'Limpieza, plataformas, gestión, mantenimiento, impuestos, vacancia y renovación del mobiliario reducen las cifras de las presentaciones comerciales. Conviene calcular escenarios prudentes.'],
      ['Regulación y disciplina operativa', 'El alquiler turístico es una actividad operativa, no ingreso pasivo. El propietario debe entender reglas aplicables, autorizaciones, servicio al huésped y limitaciones del vecindario.'],
      ['Punto clave', 'Puede funcionar en Marrakech, pero exige un plan profesional y un precio de compra que deje margen ante estacionalidad y regulación.'],
    ],
    nl: [
      ['Vraag is echt, maar concurrentie ook', 'Marrakech ontvangt veel bezoekers, wat kortetermijnverhuur ondersteunt. Maar het aanbod is ook gegroeid, waardoor bezetting, reviews, prijs en beheer doorslaggevender zijn.'],
      ['Bruto rendement is geen netto rendement', 'Schoonmaak, platformkosten, beheer, onderhoud, belastingen, leegstand en meubelvernieuwing verlagen de cijfers uit verkooppresentaties. Reken conservatieve scenario’s.'],
      ['Regels en operationele discipline', 'Kortetermijnverhuur is een operationele activiteit, geen passief inkomen. Eigenaars moeten regels, vergunningen, gastservice en buurtbeperkingen begrijpen.'],
      ['Belangrijkste punt', 'Het kan werken in Marrakech, maar alleen met professioneel beheer en een aankoopprijs die ruimte laat voor seizoen en regelgeving.'],
    ],
  }[locale]);
}

function accessibilityBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Accessibility depends on the segment', 'Marrakech is not closed to new investors, but the entry point has moved. Small apartments, emerging districts and off-plan projects may remain accessible, while premium riads and villas require deeper budgets.'],
      ['Budget is not only purchase price', 'Fees, furnishing, renovation, management, taxes and vacancy must be included. A buyer with a limited budget should protect liquidity rather than stretching for an image asset.'],
      ['Timing and negotiation', 'The right moment depends on the file. A fairly priced, well-documented asset may be better than waiting for a broad correction that may not arrive in the desired area.'],
      ['Key takeaway', 'Marrakech remains accessible for prepared investors who match budget, use and risk. It is less accessible to buyers who rely only on optimistic rental projections.'],
    ],
    es: [
      ['La accesibilidad depende del segmento', 'Marrakech no está cerrada a nuevos inversores, pero el punto de entrada subió. Apartamentos pequeños, zonas emergentes y proyectos sobre plano pueden seguir accesibles, mientras riads y villas premium exigen más capital.'],
      ['El presupuesto no es solo precio de compra', 'Gastos, mobiliario, reforma, gestión, impuestos y vacancia deben incluirse. Con presupuesto limitado conviene proteger liquidez antes que forzar la compra de un activo de imagen.'],
      ['Timing y negociación', 'El buen momento depende del expediente. Un bien bien documentado y a precio coherente puede ser mejor que esperar una corrección general que quizá no llegue al barrio buscado.'],
      ['Punto clave', 'Marrakech sigue accesible para inversores preparados que alinean presupuesto, uso y riesgo. Lo es menos para quien se basa solo en proyecciones optimistas.'],
    ],
    nl: [
      ['Toegankelijkheid hangt af van segment', 'Marrakech is niet gesloten voor nieuwe investeerders, maar het instappunt is verschoven. Kleine appartementen, opkomende zones en off-plan projecten kunnen bereikbaar blijven; premiumriads en villa’s vragen meer kapitaal.'],
      ['Budget is meer dan aankoopprijs', 'Kosten, inrichting, renovatie, beheer, belastingen en leegstand horen erbij. Met beperkt budget is liquiditeit beschermen beter dan rekken voor een imagopand.'],
      ['Timing en onderhandeling', 'Het juiste moment hangt af van het dossier. Een correct geprijsd, goed gedocumenteerd pand kan beter zijn dan wachten op een brede correctie die misschien niet in de gewenste wijk komt.'],
      ['Belangrijkste punt', 'Marrakech blijft bereikbaar voor voorbereide investeerders die budget, gebruik en risico afstemmen. Minder voor wie alleen op optimistische huurprojecties vertrouwt.'],
    ],
  }[locale]);
}

function periurbanBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Why expansion areas matter', 'When central areas become expensive, growth moves toward roads and districts with available land, new projects and infrastructure expectations. Route d’Amizmiz, Agdal, Targa and Route de l’Ourika illustrate this shift.'],
      ['Potential and uncertainty go together', 'Entry prices can be more accessible, but maturity is lower. Buyers must assess access, services, delivery quality, future supply and the real pace of urban development.'],
      ['Off-plan caution', 'Many opportunities in expansion areas are new-build or off-plan. That makes developer reliability, documentation and delivery conditions especially important.'],
      ['Key takeaway', 'Peri-urban zones can offer upside, but they require patience, verification and a clear view of the buyer’s intended use.'],
    ],
    es: [
      ['Por qué importan las zonas de expansión', 'Cuando el centro se encarece, el crecimiento se desplaza hacia ejes con suelo, proyectos nuevos y expectativas de infraestructura. Route d’Amizmiz, Agdal, Targa y Route de l’Ourika muestran esta dinámica.'],
      ['Potencial e incertidumbre van juntos', 'Los precios de entrada pueden ser más accesibles, pero la madurez es menor. Hay que evaluar accesos, servicios, calidad de entrega, oferta futura y ritmo real de urbanización.'],
      ['Prudencia en sobre plano', 'Muchas oportunidades en estas zonas son obra nueva o sobre plano. Por eso importan más la fiabilidad del promotor, los documentos y las condiciones de entrega.'],
      ['Punto clave', 'Las zonas periurbanas pueden ofrecer potencial, pero requieren paciencia, verificación y una visión clara del uso previsto.'],
    ],
    nl: [
      ['Waarom uitbreidingszones belangrijk zijn', 'Wanneer centrale gebieden duur worden, verschuift groei naar assen met grond, nieuwe projecten en infrastructuurverwachtingen. Route d’Amizmiz, Agdal, Targa en Route de l’Ourika tonen dit.'],
      ['Potentieel en onzekerheid horen samen', 'Instapprijzen kunnen lager zijn, maar de maturiteit is kleiner. Kopers moeten toegang, diensten, opleverkwaliteit, toekomstig aanbod en werkelijke urbanisatiesnelheid beoordelen.'],
      ['Voorzichtigheid bij off-plan', 'Veel kansen in uitbreidingszones zijn nieuwbouw of off-plan. Daarom zijn betrouwbaarheid van ontwikkelaar, documenten en opleveringsvoorwaarden extra belangrijk.'],
      ['Belangrijkste punt', 'Peri-urbane zones kunnen opwaarts potentieel bieden, maar vragen geduld, controle en helder beoogd gebruik.'],
    ],
  }[locale]);
}

function infrastructureBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['2030 as catalyst, not guarantee', 'The 2030 World Cup narrative supports infrastructure expectations, tourism investment and market attention. But a narrative is not the same as delivered infrastructure.'],
      ['What buyers should monitor', 'Transport, airport capacity, stadium-related works, hospitality supply and public-space improvements can influence neighborhoods differently. The timing, location and certainty of each project matter.'],
      ['Avoid buying only the story', 'Some prices already include optimistic expectations. Buyers should distinguish confirmed projects from rumors and compare today’s value with the realistic future scenario.'],
      ['Key takeaway', '2030 can support Marrakech, but disciplined investors buy coherent files, not headlines.'],
    ],
    es: [
      ['2030 como catalizador, no garantía', 'El relato del Mundial 2030 apoya expectativas de infraestructura, inversión turística y atención del mercado. Pero un relato no equivale a infraestructura entregada.'],
      ['Qué observar', 'Transporte, capacidad aeroportuaria, obras vinculadas al estadio, oferta hotelera y espacio público pueden influir de forma distinta por barrios. Importan calendario, ubicación y certeza.'],
      ['Evitar comprar solo el relato', 'Algunos precios ya incorporan expectativas optimistas. Conviene separar proyectos confirmados de rumores y comparar el valor actual con un escenario futuro realista.'],
      ['Punto clave', '2030 puede apoyar Marrakech, pero el inversor disciplinado compra expedientes coherentes, no titulares.'],
    ],
    nl: [
      ['2030 als katalysator, niet als garantie', 'Het WK 2030-verhaal ondersteunt verwachtingen rond infrastructuur, toeristische investering en marktaandacht. Maar een verhaal is geen opgeleverde infrastructuur.'],
      ['Wat kopers moeten volgen', 'Transport, luchthavencapaciteit, stadionwerken, hotelaanbod en publieke ruimte kunnen wijken verschillend beïnvloeden. Timing, locatie en zekerheid tellen.'],
      ['Koop niet alleen het verhaal', 'Sommige prijzen bevatten al optimistische verwachtingen. Onderscheid bevestigde projecten van geruchten en vergelijk huidige waarde met een realistisch toekomstscenario.'],
      ['Belangrijkste punt', '2030 kan Marrakech ondersteunen, maar gedisciplineerde investeerders kopen coherente dossiers, geen krantenkoppen.'],
    ],
  }[locale]);
}

function tourismPriceBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Tourism changes real estate demand', 'Visitor growth supports demand for short-term rental, riads, central apartments and hospitality-linked assets. It can raise prices in areas that combine access, experience and scarcity.'],
      ['Residents also feel the pressure', 'The same dynamic can reduce affordable supply for residents, increase competition for central housing and accelerate gentrification in parts of the Medina and new city.'],
      ['Not every area benefits equally', 'Tourism value concentrates where visitors want to stay. A property far from services or without management quality will not automatically benefit from record arrivals.'],
      ['Key takeaway', 'Tourism is a powerful support factor, but buyers must translate visitor demand into a realistic property-level operating plan.'],
    ],
    es: [
      ['El turismo cambia la demanda inmobiliaria', 'El crecimiento de visitantes sostiene demanda de alquiler turístico, riads, apartamentos céntricos y activos ligados a hospitalidad. Puede elevar precios en zonas con acceso, experiencia y escasez.'],
      ['Los residentes también sienten presión', 'La misma dinámica puede reducir oferta asequible para residentes, aumentar competencia por vivienda central y acelerar gentrificación en partes de la Medina y ciudad nueva.'],
      ['No todas las zonas se benefician igual', 'El valor turístico se concentra donde el visitante quiere alojarse. Un bien lejos de servicios o sin buena gestión no se beneficia automáticamente de llegadas récord.'],
      ['Punto clave', 'El turismo es un soporte potente, pero hay que traducir la demanda visitante en un plan operativo realista para el bien concreto.'],
    ],
    nl: [
      ['Toerisme verandert vastgoedvraag', 'Bezoekersgroei ondersteunt vraag naar kortetermijnverhuur, riads, centrale appartementen en hospitality-vastgoed. Het kan prijzen verhogen in zones met toegang, ervaring en schaarste.'],
      ['Bewoners voelen ook druk', 'Dezelfde dynamiek kan betaalbaar aanbod voor bewoners verminderen, concurrentie om centrale woningen verhogen en gentrificatie versnellen in delen van Medina en nieuwe stad.'],
      ['Niet elke zone profiteert gelijk', 'Toeristische waarde concentreert waar bezoekers willen verblijven. Een pand ver van diensten of zonder goed beheer profiteert niet automatisch van recordaankomsten.'],
      ['Belangrijkste punt', 'Toerisme is een sterke steunfactor, maar kopers moeten bezoekersvraag vertalen naar een realistisch plan per pand.'],
    ],
  }[locale]);
}

function outlookBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Scenario thinking, not prediction', 'No one can predict the Marrakech property market with certainty. A serious outlook works with scenarios: continued growth, stabilization or selective correction.'],
      ['Support factors', 'Tourism, infrastructure, international visibility and limited prime supply can support values. These factors are strongest when the property has real utility and liquidity.'],
      ['Risk factors', 'Overpricing, interest rates, delivery delays, weak documentation and excessive rental assumptions can weaken returns. The risk is often asset-specific, not city-wide.'],
      ['Key takeaway', 'Between 2026 and 2030, disciplined buyers should monitor prices, supply, tourism, regulation and project delivery rather than relying on a single market story.'],
    ],
    es: [
      ['Escenarios, no predicción', 'Nadie puede predecir el mercado inmobiliario de Marrakech con certeza. Una perspectiva seria trabaja con escenarios: crecimiento, estabilización o corrección selectiva.'],
      ['Factores de apoyo', 'Turismo, infraestructura, visibilidad internacional y oferta prime limitada pueden sostener valores. Funcionan mejor cuando el bien tiene utilidad y liquidez reales.'],
      ['Factores de riesgo', 'Sobreprecio, tipos, retrasos, documentación débil y supuestos de alquiler excesivos pueden reducir rentabilidad. El riesgo suele ser específico del activo, no de toda la ciudad.'],
      ['Punto clave', 'Entre 2026 y 2030, conviene vigilar precios, oferta, turismo, regulación y entregas en lugar de confiar en un único relato de mercado.'],
    ],
    nl: [
      ['Scenario’s, geen voorspelling', 'Niemand kan de vastgoedmarkt van Marrakech met zekerheid voorspellen. Een serieuze vooruitblik werkt met scenario’s: groei, stabilisatie of selectieve correctie.'],
      ['Steunfactoren', 'Toerisme, infrastructuur, internationale zichtbaarheid en beperkt prime-aanbod kunnen waarden ondersteunen. Ze zijn het sterkst wanneer het pand echte bruikbaarheid en liquiditeit heeft.'],
      ['Risicofactoren', 'Overprijzen, rente, vertragingen, zwakke documenten en te optimistische huurverwachtingen kunnen rendement verzwakken. Risico is vaak assetspecifiek, niet stadsbreed.'],
      ['Belangrijkste punt', 'Tussen 2026 en 2030 moeten kopers prijzen, aanbod, toerisme, regelgeving en oplevering volgen, niet één marktslogan.'],
    ],
  }[locale]);
}

function mistakesBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['Buying without checking the title', 'The first mistake is treating ownership as a formality. Buyers should understand whether the property is properly registered and have the situation reviewed by qualified professionals.'],
      ['Underestimating total cost', 'The purchase price is not the total budget. Fees, taxes, renovation, furniture, management, maintenance and delays can materially change the operation.'],
      ['Believing yield promises too quickly', 'A rental projection is not a guarantee. Occupancy, seasonality, platform fees, regulation and management quality must be tested with conservative assumptions.'],
      ['Key takeaway', 'Buying well in Marrakech means slowing down, documenting claims and refusing to confuse commercial urgency with a secure acquisition process.'],
    ],
    es: [
      ['Comprar sin verificar el título', 'El primer error es tratar la propiedad como una formalidad. Hay que entender si el bien está correctamente registrado y hacer revisar la situación por profesionales cualificados.'],
      ['Subestimar el coste total', 'El precio de compra no es el presupuesto total. Gastos, impuestos, reforma, mobiliario, gestión, mantenimiento y retrasos pueden cambiar la operación.'],
      ['Creer promesas de rentabilidad demasiado rápido', 'Una proyección de alquiler no es una garantía. Ocupación, temporada, plataformas, regulación y gestión deben probarse con hipótesis prudentes.'],
      ['Punto clave', 'Comprar bien en Marrakech significa frenar, documentar afirmaciones y no confundir urgencia comercial con proceso seguro.'],
    ],
    nl: [
      ['Kopen zonder titelcontrole', 'De eerste fout is eigendom als formaliteit behandelen. Kopers moeten begrijpen of het pand correct geregistreerd is en de situatie laten nakijken door professionals.'],
      ['Totale kost onderschatten', 'De aankoopprijs is niet het totale budget. Kosten, belastingen, renovatie, inrichting, beheer, onderhoud en vertragingen kunnen de operatie wijzigen.'],
      ['Rendementsbeloftes te snel geloven', 'Een huurprojectie is geen garantie. Bezetting, seizoen, platforms, regels en beheerkwaliteit moeten conservatief getest worden.'],
      ['Belangrijkste punt', 'Goed kopen in Marrakech betekent vertragen, claims documenteren en commerciële urgentie niet verwarren met een veilig aankoopproces.'],
    ],
  }[locale]);
}

function dahirBody(locale) {
  return bodyBlock(locale, {
    en: [
      ['What a Dahir is', 'In simple terms, a Dahir is a royal act used in the Moroccan legal order. Depending on context, it may promulgate laws or exercise prerogatives provided by the Constitution. Buyers should avoid reducing it to a generic “law” without context.'],
      ['Why it matters for property buyers', 'Real estate relies on official texts, land registration, title deeds, contracts, urban planning and notarial formalization. A buyer does not need to interpret Dahirs alone, but should understand that the applicable framework must be verified in official documents.'],
      ['Dahir, law and decree', 'A law sets rules in areas assigned to legislation. A Dahir can be involved in promulgation or specific constitutional contexts. A decree usually relates to regulatory implementation. The practical lesson is simple: identify the right document and ask a qualified professional what it means for the transaction.'],
      ['Off-plan purchases and S.A.F.E', 'In an off-plan purchase, the buyer commits before delivery. Documents, payment schedule, developer reliability and notarial review matter even more. S.A.F.E helps structure the first analysis, but never replaces legal or notarial checks.'],
      ['Key takeaway', 'A Dahir is part of Morocco’s legal framework. Buyers should not rely only on commercial claims; they should request documents, read the title and contract carefully, and consult qualified professionals before committing.'],
    ],
    es: [
      ['Qué es un Dahir', 'En términos simples, un Dahir es un acto real utilizado en el orden jurídico marroquí. Según el contexto, puede promulgar leyes o ejercer prerrogativas previstas por la Constitución. Conviene no reducirlo a una “ley” genérica sin contexto.'],
      ['Por qué importa para compradores', 'El inmobiliario se apoya en textos oficiales, registro de la propiedad, título foncier, contratos, urbanismo y formalización notarial. El comprador no debe interpretar Dahirs solo, pero sí entender que el marco aplicable se verifica en documentos oficiales.'],
      ['Dahir, ley y decreto', 'Una ley fija reglas en ámbitos legislativos. Un Dahir puede intervenir en la promulgación o en contextos constitucionales específicos. Un decreto suele precisar la aplicación reglamentaria. La lección práctica es identificar el documento correcto y preguntar a un profesional qué implica.'],
      ['Compra sobre plano y S.A.F.E', 'En una compra sobre plano, el comprador se compromete antes de la entrega. Documentos, calendario de pagos, fiabilidad del promotor y revisión notarial importan aún más. S.A.F.E ordena el primer análisis, pero no sustituye controles jurídicos o notariales.'],
      ['Punto clave', 'Un Dahir forma parte del marco jurídico marroquí. El comprador no debe basarse solo en discursos comerciales; debe pedir documentos, leer título y contrato con cuidado y consultar profesionales cualificados.'],
    ],
    nl: [
      ['Wat een Dahir is', 'Eenvoudig gezegd is een Dahir een koninklijke akte binnen de Marokkaanse rechtsorde. Afhankelijk van de context kan hij wetten afkondigen of constitutionele bevoegdheden uitoefenen. Kopers moeten het niet zonder context reduceren tot een gewone “wet”.'],
      ['Waarom dit telt voor vastgoedkopers', 'Vastgoed steunt op officiële teksten, grondregistratie, titel, contracten, stedenbouw en notariële formalisering. Een koper hoeft Dahirs niet alleen te interpreteren, maar moet begrijpen dat het toepasselijke kader in officiële documenten wordt gecontroleerd.'],
      ['Dahir, wet en decreet', 'Een wet legt regels vast binnen wetgevende domeinen. Een Dahir kan betrokken zijn bij afkondiging of specifieke constitutionele contexten. Een decreet gaat meestal over reglementaire uitvoering. Praktisch: identificeer het juiste document en vraag een professional wat het betekent voor de transactie.'],
      ['Off-plan aankoop en S.A.F.E', 'Bij off-plan aankoop verbindt de koper zich vóór oplevering. Documenten, betalingsschema, betrouwbaarheid van ontwikkelaar en notariële controle zijn dan extra belangrijk. S.A.F.E ordent de eerste analyse, maar vervangt nooit juridische of notariële controles.'],
      ['Belangrijkste punt', 'Een Dahir maakt deel uit van het Marokkaanse juridische kader. Kopers mogen niet alleen op commerciële claims vertrouwen; vraag documenten, lees titel en contract zorgvuldig en raadpleeg professionals.'],
    ],
  }[locale]);
}

function extractFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error('Missing frontmatter');
  return match[1];
}

function readField(fm, field) {
  const match = fm.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
  if (!match) return '';
  return match[1].trim().replace(/^"|"$/g, '');
}

function readBoolean(fm, field, fallback = false) {
  const value = readField(fm, field);
  return value ? value === 'true' : fallback;
}

function readSources(fm) {
  const start = fm.indexOf('sources:\n');
  if (start < 0) return 'sources: []';
  const afterSources = fm.slice(start);
  const end = afterSources.indexOf('\ndisclaimer:');
  return end >= 0 ? afterSources.slice(0, end).trimEnd() : afterSources.trimEnd();
}

function yamlString(value) {
  return JSON.stringify(value);
}

for (const locale of locales) {
  fs.mkdirSync(path.join(sourceDir, locale), { recursive: true });
}

for (const [key, perLocale] of Object.entries(translations)) {
  const source = fs.readFileSync(path.join(sourceDir, `${key}.md`), 'utf8');
  const fm = extractFrontmatter(source);
  const date = readField(fm, 'date');
  const category = readField(fm, 'category');
  const readingTime = readField(fm, 'readingTime') || '8';
  const heroImage = readField(fm, 'heroImage');
  const featured = readBoolean(fm, 'featured');
  const disclaimer = readBoolean(fm, 'disclaimer');
  const sources = readSources(fm);

  for (const locale of locales) {
    const t = perLocale[locale];
    const out = [
      '---',
      `title: ${yamlString(t.title)}`,
      `slug: ${yamlString(t.slug)}`,
      `locale: ${yamlString(locale)}`,
      `translationKey: ${yamlString(key)}`,
      `metaTitle: ${yamlString(t.metaTitle)}`,
      `metaDescription: ${yamlString(t.metaDescription)}`,
      `category: ${yamlString(category)}`,
      `tags: ${JSON.stringify(t.tags)}`,
      `date: ${date}`,
      `readingTime: ${readingTime}`,
      `excerpt: ${yamlString(t.excerpt)}`,
      `heroImage: ${yamlString(heroImage)}`,
      `imageAlt: ${yamlString(t.imageAlt)}`,
      `featured: ${featured}`,
      sources,
      `disclaimer: ${disclaimer}`,
      '---',
      '',
      t.body,
      '',
    ].join('\n');
    fs.writeFileSync(path.join(sourceDir, locale, `${t.slug}.md`), out);
  }
}

console.log(`Generated ${Object.keys(translations).length * locales.length} localized article files.`);
