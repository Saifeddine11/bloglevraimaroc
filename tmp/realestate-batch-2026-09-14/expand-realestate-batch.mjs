import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
const files=[];
for (const dir of ['src/content/articles','src/content/articles/en','src/content/articles/es','src/content/articles/nl']) for (const f of fs.readdirSync(dir).filter(x=>x.endsWith('.md'))) files.push(path.join(dir,f));
const targets=new Set(['aide-logement-maroc-2026','logement-elections-maroc-2026','marche-immobilier-marrakech-2026','credit-immobilier-maroc-septembre-2026','prix-immobilier-marrakech-2026','loyer-marrakech-2026','location-courte-duree-marrakech','aide-logement-mre-maroc-2026','marrakech-avant-2030']);
function parse(s){ const m=s.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/); if(!m) throw new Error('frontmatter parse failed'); return {front:YAML.parse(m[1]), body:m[2].replace(/^\n/,''), rawFront:m[1]}; }
const common={
fr:`
## Comment utiliser ces chiffres sans se tromper

La première erreur consiste à transformer une fourchette en vérité absolue. Une donnée officielle, une annonce immobilière, un témoignage d'agence et une simulation bancaire ne répondent pas à la même question. La donnée officielle décrit un marché enregistré ; l'annonce indique une prétention de vendeur ou de bailleur ; la simulation bancaire montre un ordre de grandeur ; l'expérience de terrain éclaire la négociation. Pour décider, il faut les mettre dans le bon ordre.

Commencez par qualifier votre usage : résidence principale, pied-à-terre, investissement locatif, achat familial, projet MRE ou achat patrimonial. Le même prix peut être rationnel pour un usage long terme et excessif pour une stratégie locative. Ensuite, isolez le coût total : prix, frais d'acquisition, mobilier, travaux, charges, fiscalité, vacance, financement, assurance, gestion et marge de sécurité.

## Points de vigilance avant de signer

- Demander les documents avant de discuter du rendement.
- Comparer le prix avec des biens réellement comparables.
- Refuser les promesses orales non reprises dans un document.
- Vérifier la cohérence entre surface annoncée, surface utile et plans.
- Anticiper les frais après achat : syndic, entretien, fiscalité, ameublement, vacance.
- Faire relire les engagements importants par le professionnel compétent.

## Signaux d'alerte

Un prix présenté comme valable seulement aujourd'hui, une rentabilité garantie sans détail, un refus de transmettre des documents, un calendrier flou, un vendeur qui minimise les frais ou un discours qui repose uniquement sur 2030 doivent ralentir la décision. Dans l'immobilier marocain, le risque apparaît souvent dans les détails : un titre incomplet, une autorisation non fournie, une surface mal comprise, une charge ignorée ou un paiement mal documenté.
`,
en:`
## How to use these figures without misreading them

The first mistake is to treat a range as an absolute truth. Official data, property listings, agency observations and bank simulations do not answer the same question. Official data describes registered market activity; a listing shows a seller’s or landlord’s asking position; a banking simulation gives an order of magnitude; field observations help with negotiation. A sound decision puts each source in its proper place.

Start with the use case: main home, second home, rental investment, family purchase, MRE purchase or long-term wealth asset. The same price can be reasonable for one use and excessive for another. Then isolate the total cost: price, acquisition fees, furniture, works, service charges, taxes, vacancy, financing, insurance, management and safety margin.

## Checks before signing

- Request documents before discussing yield.
- Compare the price with genuinely comparable assets.
- Reject oral promises that are not written down.
- Check the consistency of advertised area, usable area and plans.
- Anticipate post-purchase costs: co-ownership, maintenance, tax, furniture and vacancy.
- Have major commitments reviewed by the relevant professional.

## Warning signs

A price “valid only today”, a guaranteed return without details, refusal to provide documents, a vague delivery calendar, a seller who downplays costs or a pitch based only on 2030 should slow the decision. In Moroccan property, risk often sits in details: incomplete title, missing authorisation, misunderstood surface area, ignored charges or poorly documented payment.
`,
es:`
## Cómo usar estas cifras sin interpretarlas mal

El primer error consiste en convertir una horquilla en una verdad absoluta. Un dato oficial, un anuncio inmobiliario, la observación de una agencia y una simulación bancaria no responden a la misma pregunta. El dato oficial describe actividad registrada; el anuncio muestra una pretensión de vendedor o arrendador; la simulación da un orden de magnitud; la experiencia de campo ayuda a negociar. Una decisión seria coloca cada fuente en su sitio.

Empiece por definir el uso: vivienda principal, segunda residencia, inversión de alquiler, compra familiar, proyecto MRE o activo patrimonial. El mismo precio puede ser razonable para un uso y excesivo para otro. Después calcule el coste total: precio, gastos de adquisición, mobiliario, obras, comunidad, impuestos, vacancia, financiación, seguro, gestión y margen de seguridad.

## Controles antes de firmar

- Pedir documentos antes de hablar de rentabilidad.
- Comparar el precio con inmuebles realmente comparables.
- Rechazar promesas verbales no escritas.
- Comprobar superficie anunciada, superficie útil y planos.
- Anticipar costes posteriores: comunidad, mantenimiento, fiscalidad, mobiliario y vacancia.
- Hacer revisar los compromisos importantes por el profesional competente.

## Señales de alerta

Un precio “solo válido hoy”, una rentabilidad garantizada sin detalle, la negativa a entregar documentos, un calendario impreciso, un vendedor que minimiza los gastos o un discurso basado solo en 2030 deben frenar la decisión. En el inmobiliario marroquí, el riesgo suele estar en los detalles: título incompleto, autorización ausente, superficie mal entendida, gastos ignorados o pago mal documentado.
`,
nl:`
## Hoe u deze cijfers goed gebruikt

De eerste fout is een vork behandelen als absolute waarheid. Officiële data, vastgoedadvertenties, makelaarsobservaties en banksimulaties beantwoorden niet dezelfde vraag. Officiële data beschrijft geregistreerde marktactiviteit; een advertentie toont de vraagpositie van verkoper of verhuurder; een banksimulatie geeft een orde van grootte; terreinervaring helpt bij onderhandelen. Een goede beslissing zet elke bron op de juiste plaats.

Begin met het gebruik: hoofdwoning, tweede verblijf, huurinvestering, gezinsaankoop, MRE-project of vermogensobject. Dezelfde prijs kan voor het ene gebruik logisch zijn en voor het andere te hoog. Bereken daarna de totale kost: prijs, aankoopkosten, meubels, werken, mede-eigendom, belasting, leegstand, financiering, verzekering, beheer en veiligheidsmarge.

## Controle vóór ondertekening

- Vraag documenten vóór u over rendement praat.
- Vergelijk de prijs met echt vergelijkbare panden.
- Weiger mondelinge beloften die niet schriftelijk staan.
- Controleer geadverteerde oppervlakte, bruikbare oppervlakte en plannen.
- Voorzie kosten na aankoop: mede-eigendom, onderhoud, belasting, meubels en leegstand.
- Laat belangrijke verbintenissen nalezen door de juiste professional.

## Waarschuwingssignalen

Een prijs die “alleen vandaag” geldt, gegarandeerd rendement zonder details, weigering om documenten te geven, een vaag opleveringsschema, een verkoper die kosten minimaliseert of een verhaal dat alleen op 2030 steunt, moet de beslissing vertragen. In Marokkaans vastgoed zit risico vaak in details: onvolledige titel, ontbrekende vergunning, verkeerd begrepen oppervlakte, vergeten kosten of slecht gedocumenteerde betaling.
`
};
const topicExtra={
'aide-logement-maroc-2026':{
fr:`
## Documents à préparer

Préparez une pièce d'identité, les informations d'état civil, les éléments relatifs au bien, les références du compromis ou du projet d'acte, les documents transmis par le promoteur ou le vendeur et les pièces que le notaire demandera pour vérifier le circuit. Le portail officiel indique la liste applicable au moment du dépôt ; cette liste doit primer sur tout résumé éditorial.

## Rejets fréquents

Les refus ou blocages viennent souvent d'un bien hors plafond, d'un logement non éligible, d'une incohérence dans l'identité du demandeur, d'une aide publique antérieure, d'un dossier incomplet ou d'un retard dans la finalisation. Le bon réflexe consiste à traiter l'aide comme une condition suspensive pratique : ne présumez pas qu'elle est acquise tant que le circuit officiel n'est pas validé.
`,
en:`
## Documents to prepare

Prepare identity documents, civil-status information, property details, preliminary contract references, documents provided by the developer or seller and any papers requested by the notary. The official portal’s checklist at filing date prevails over any editorial summary.

## Frequent rejection causes

Blocks often come from an over-ceiling property, an ineligible home, inconsistent applicant identity, previous State aid, an incomplete file or late completion. Treat the aid as a practical condition: do not assume it is secured until the official process confirms it.
`,
es:`
## Documentos que preparar

Prepare documento de identidad, datos civiles, información del inmueble, referencias del compromiso o proyecto de escritura, documentos del promotor o vendedor y las piezas que pida el notario. La lista del portal oficial en la fecha de solicitud prevalece sobre cualquier resumen editorial.

## Rechazos frecuentes

Los bloqueos suelen venir de un precio fuera de límite, vivienda no elegible, identidad incoherente, ayuda pública anterior, expediente incompleto o retraso en la finalización. Trate la ayuda como una condición práctica: no la dé por obtenida hasta la confirmación oficial.
`,
nl:`
## Documenten voorbereiden

Bereid identiteitsdocumenten, burgerlijke gegevens, vastgoedinformatie, compromis- of aktereferenties, documenten van ontwikkelaar of verkoper en de stukken die de notaris vraagt. De officiële checklist op de aanvraagdatum gaat voor op elke redactionele samenvatting.

## Vaak voorkomende weigeringen

Blokkades ontstaan vaak door een te hoge prijs, een niet-geschikte woning, foutieve identiteit, eerdere staatssteun, een onvolledig dossier of laattijdige afwerking. Behandel steun als praktische voorwaarde: ga er niet van uit vóór officiële bevestiging.
`},
'credit-immobilier-maroc-septembre-2026':{
fr:`
## Lire une offre bancaire

Comparez le taux nominal, le TAEG, l'assurance décès-invalidité, les frais de dossier, les pénalités de remboursement anticipé, la durée, la garantie exigée et le coût total. Deux offres avec le même taux facial peuvent produire un coût différent si l'assurance ou les frais changent. Demandez toujours un tableau d'amortissement.

## Apport, durée et taux d'endettement

L'apport protège la banque et l'acheteur. Une durée longue rend la mensualité plus accessible mais augmente les intérêts. Le taux d'endettement doit rester compatible avec les revenus réels, y compris charges de copropriété, impôts, entretien et vacance si le bien est loué.
`,
en:`
## Reading a bank offer

Compare the nominal rate, APR, death-disability insurance, file fees, early-repayment penalties, duration, guarantees and total cost. Two offers with the same headline rate can cost different amounts if insurance or fees differ. Always request an amortisation table.

## Down payment, duration and debt ratio

The down payment protects both bank and buyer. A longer duration lowers the monthly payment but increases interest. The debt ratio must remain compatible with real income, including service charges, tax, maintenance and vacancy if the asset is rented.
`,
es:`
## Leer una oferta bancaria

Compare tasa nominal, TAE, seguro fallecimiento-invalidez, gastos de expediente, penalizaciones de reembolso anticipado, plazo, garantías y coste total. Dos ofertas con la misma tasa pueden costar distinto si cambian seguro o gastos. Pida siempre cuadro de amortización.

## Aporte, plazo y endeudamiento

El aporte protege al banco y al comprador. Un plazo largo baja la cuota pero sube los intereses. El endeudamiento debe ser compatible con ingresos reales, comunidad, impuestos, mantenimiento y vacancia si el bien se alquila.
`,
nl:`
## Een bankaanbod lezen

Vergelijk nominale rente, JKP, overlijdens- en invaliditeitsverzekering, dossierkosten, boetes bij vervroegde terugbetaling, looptijd, garanties en totale kost. Twee aanbiedingen met dezelfde rente kunnen anders uitvallen door verzekering of kosten. Vraag altijd een aflossingstabel.

## Eigen inbreng, looptijd en schuldgraad

Eigen inbreng beschermt bank en koper. Een langere looptijd verlaagt de maandlast maar verhoogt de rente. De schuldgraad moet passen bij het echte inkomen, inclusief mede-eigendom, belasting, onderhoud en leegstand bij verhuur.
`}
};
for (const file of files){
 const s=fs.readFileSync(file,'utf8'); if(!s.startsWith('---')) continue; const {front,body}=parse(s); if(!targets.has(front.translationKey)) continue; if(body.includes('## Comment utiliser ces chiffres')||body.includes('## How to use these figures')||body.includes('## Cómo usar estas cifras')||body.includes('## Hoe u deze cijfers')) continue;
 const locale=front.locale||'fr'; const extra=(topicExtra[front.translationKey]?.[locale]||'')+common[locale];
 const marker='\n## FAQ\n'; let newBody;
 if(body.includes(marker)) newBody=body.replace(marker, extra+marker); else newBody=body+'\n'+extra;
 const wc=newBody.split(/\s+/).filter(Boolean).length;
 front.readingTime=Math.max(6,Math.round(wc/220));
 fs.writeFileSync(file,`---\n${YAML.stringify(front).trim()}\n---\n\n${newBody.trim()}\n`);
 console.log(file,wc);
}
