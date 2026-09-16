import fs from 'node:fs';

const entries = [
  {
    files: {
      fr: 'src/content/articles/aide-logement-maroc-2026.md',
      en: 'src/content/articles/en/morocco-housing-aid-2026.md',
      es: 'src/content/articles/es/ayuda-vivienda-marruecos-2026.md',
      nl: 'src/content/articles/nl/huisvestingssteun-marokko-2026.md',
    },
    blocks: {
      fr: `## Exemples pratiques de calcul

Le seuil de prix doit être lu avant toute négociation bancaire. Un appartement neuf vendu **290 000 DH TTC** peut théoriquement entrer dans la tranche de **100 000 DH**, ce qui réduit fortement le besoin d’apport ou le montant emprunté. Le même appartement vendu **315 000 DH TTC** bascule dans la tranche de **70 000 DH** : l’écart de prix facial n’est que de 25 000 DH, mais l’écart d’aide atteint 30 000 DH. À l’inverse, un bien à **705 000 DH TTC** sort du dispositif, même si l’acheteur remplit les conditions personnelles.

| Exemple | Prix TTC | Aide théorique | Point de vigilance |
|---|---:|---:|---|
| Studio ou petit appartement social | 290 000 DH | 100 000 DH | Vérifier première vente, résidence principale et conformité du bien. |
| Appartement intermédiaire | 450 000 DH | 70 000 DH | Contrôler le prix TTC réel dans l’acte, pas seulement le prix commercial. |
| Logement proche du plafond | 690 000 DH | 70 000 DH | Anticiper frais d’acquisition, crédit et charges après achat. |
| Bien au-dessus du plafond | 720 000 DH | 0 DH | Ne pas construire son plan de financement sur une aide inexistante. |

Ces exemples ne sont pas des décisions administratives. Ils montrent seulement pourquoi le prix exact, les taxes incluses, la nature du logement et la chronologie du dossier doivent être vérifiés avant la signature.

## Documents et étapes à vérifier avant de s’engager

Le parcours doit rester ordonné. D’abord, l’acheteur vérifie son éligibilité personnelle : nationalité marocaine, absence de logement détenu pour habitation, absence d’aide publique antérieure et intention d’occuper le bien comme résidence principale. Ensuite seulement, il vérifie l’éligibilité du logement : prix, première vente, conformité administrative, promoteur ou vendeur identifié, acte notarié et circuit de paiement compatible avec Daam Sakane.

Avant de réserver, demandez au minimum la désignation exacte du bien, son prix TTC, la surface retenue, le calendrier de signature, l’identité du vendeur, les documents transmis au notaire et les conditions de remboursement si le dossier d’aide n’aboutit pas. Une simple brochure commerciale ne suffit pas. Le notaire doit pouvoir confirmer que le montage documentaire correspond au programme.

Pour un acheteur qui finance l’opération par emprunt, l’aide doit être coordonnée avec le [crédit immobilier au Maroc](/articles/credit-immobilier-maroc-septembre-2026/). L’aide réduit le besoin de financement, mais elle ne supprime pas l’examen bancaire du revenu, de l’apport, de l’endettement, de l’assurance et des frais annexes. Un dossier peut être éligible à l’aide mais rester trop tendu si la mensualité absorbe une part excessive du revenu.

## Délais, mainlevée et erreurs fréquentes

La mise à jour de septembre 2026 est importante parce qu’elle traite la finalisation de la vente et la mainlevée de l’hypothèque de l’État. En pratique, l’acheteur doit éviter de raisonner comme si l’accord initial suffisait. La vente doit être menée jusqu’au bout dans les délais applicables, avec un dossier complet et un circuit notarial clair. Si le logement cesse de respecter les conditions ou si l’aide doit être remboursée, la mainlevée devient un sujet administratif et financier à anticiper.

Les blocages les plus fréquents sont connus : bien au-dessus du plafond, confusion entre logement neuf et revente, incohérence entre prix commercial et prix dans l’acte, dossier incomplet, retard de signature, erreur d’identité, situation patrimoniale non conforme ou promoteur incapable de fournir les documents attendus. Pour éviter ces erreurs, l’aide doit être traitée comme un élément du plan d’achat, pas comme une simple remise commerciale.

## Ce que l’acheteur doit comparer

L’aide rend certains achats plus accessibles, mais elle ne rend pas tous les biens équivalents. Deux logements au même prix peuvent avoir une valeur très différente selon l’emplacement, la qualité de construction, les charges, l’accès, la copropriété, la revente possible et la proximité des services. Pour situer le bien dans son marché, croisez le dispositif avec les [prix immobiliers à Marrakech](/articles/prix-immobilier-marrakech-2026/) ou avec les prix de la ville concernée, puis vérifiez si le coût total reste cohérent après frais, crédit et charges.

La bonne question n’est donc pas seulement « ai-je droit à 70 000 ou 100 000 DH ? ». Elle est aussi : « le bien reste-t-il pertinent si je dois le conserver plusieurs années, l’entretenir, le financer et éventuellement le revendre ? ».`,
      en: `## Practical calculation examples

The price threshold must be checked before the financing plan is built. A new home sold for **290,000 DH including tax** can theoretically fall into the **100,000 DH** aid band. A similar home sold for **315,000 DH** moves into the **70,000 DH** band. The commercial price difference is 25,000 DH, but the aid difference is 30,000 DH. A home at **705,000 DH** is outside the scheme altogether.

| Example | Price incl. tax | Theoretical aid | What to check |
|---|---:|---:|---|
| Small eligible unit | 290,000 DH | 100,000 DH | First sale, main residence, compliant documents. |
| Mid-range apartment | 450,000 DH | 70,000 DH | Real price in the notarized deed. |
| Near the ceiling | 690,000 DH | 70,000 DH | Acquisition fees and post-purchase charges. |
| Above the ceiling | 720,000 DH | 0 DH | Do not build financing on unavailable aid. |

These are editorial examples, not administrative decisions. Buyers should first check their personal eligibility, then the property’s eligibility, then coordinate the aid with the [Morocco mortgage guide](/en/articles/morocco-mortgage-rates-september-2026/). The aid can reduce the amount to finance, but it does not remove the bank’s review of income, debt ratio, insurance, down payment and fees.

## Documents, delays and common rejection reasons

Before reserving a unit, request the exact property identification, total price including tax, stated area, signature calendar, seller identity, documents sent to the notary and refund conditions if the aid is not approved. Frequent problems include a price above the ceiling, confusion between new eligible housing and resale property, incomplete files, late finalization, identity inconsistencies or a seller unable to provide the expected paperwork.

The September 2026 operational update matters because sale finalization and release of the State mortgage must be managed properly. The aid should therefore be treated as one part of the purchase plan, not as a simple discount. A buyer should still compare location, construction quality, service charges, resale prospects and the local price level, especially in markets such as Marrakech where asking prices vary widely by district.`,
      es: `## Ejemplos prácticos de cálculo

El umbral de precio debe comprobarse antes de cerrar el plan de financiación. Una vivienda nueva vendida por **290.000 DH con impuestos** puede entrar teóricamente en la ayuda de **100.000 DH**. Una vivienda similar a **315.000 DH** pasa a la ayuda de **70.000 DH**. La diferencia comercial es de 25.000 DH, pero la diferencia de ayuda alcanza 30.000 DH. A **705.000 DH**, el inmueble queda fuera del dispositivo.

| Ejemplo | Precio con impuestos | Ayuda teórica | Qué comprobar |
|---|---:|---:|---|
| Vivienda pequeña elegible | 290.000 DH | 100.000 DH | Primera venta, residencia principal y documentos conformes. |
| Piso intermedio | 450.000 DH | 70.000 DH | Precio real en la escritura notarial. |
| Cerca del límite | 690.000 DH | 70.000 DH | Gastos de compra y cargas posteriores. |
| Por encima del límite | 720.000 DH | 0 DH | No basar la financiación en una ayuda inexistente. |

Son ejemplos editoriales, no decisiones administrativas. El comprador debe verificar primero su elegibilidad personal, después la del inmueble y finalmente coordinar la ayuda con el [crédito hipotecario en Marruecos](/es/articulos/credito-hipotecario-marruecos-septiembre-2026/). La ayuda reduce la necesidad de financiación, pero no elimina el análisis bancario de ingresos, endeudamiento, seguro, aportación y gastos.

## Documentos, plazos y causas frecuentes de rechazo

Antes de reservar, conviene pedir la identificación exacta del inmueble, el precio total con impuestos, la superficie, el calendario de firma, la identidad del vendedor, los documentos enviados al notario y las condiciones de devolución si la ayuda no se aprueba. Los problemas habituales son precio fuera de límite, confusión entre vivienda nueva elegible y reventa, expediente incompleto, retraso en la finalización, incoherencias de identidad o vendedor incapaz de entregar los documentos esperados.

La actualización operativa de septiembre de 2026 importa porque la finalización de la venta y la cancelación de la hipoteca estatal deben gestionarse correctamente. La ayuda debe tratarse como una parte del plan de compra, no como un simple descuento. El comprador aún debe comparar ubicación, calidad, cargas, reventa y nivel local de precios.`,
      nl: `## Praktische rekenvoorbeelden

De prijzdrempel moet worden gecontroleerd vóór het financieringsplan wordt vastgelegd. Een nieuwe woning van **290.000 DH inclusief belasting** kan theoretisch in de steun van **100.000 DH** vallen. Een vergelijkbare woning van **315.000 DH** valt in de steun van **70.000 DH**. Het commerciële prijsverschil is 25.000 DH, maar het steunverschil bedraagt 30.000 DH. Bij **705.000 DH** valt de woning buiten het systeem.

| Voorbeeld | Prijs incl. belasting | Theoretische steun | Controlepunt |
|---|---:|---:|---|
| Kleine geschikte woning | 290.000 DH | 100.000 DH | Eerste verkoop, hoofdwoning en conforme documenten. |
| Middensegment appartement | 450.000 DH | 70.000 DH | Echte prijs in de notariële akte. |
| Dicht bij de grens | 690.000 DH | 70.000 DH | Aankoopkosten en latere lasten. |
| Boven de grens | 720.000 DH | 0 DH | Bouw geen financiering op niet-beschikbare steun. |

Dit zijn redactionele voorbeelden, geen administratieve beslissingen. De koper controleert eerst persoonlijke voorwaarden, daarna de woning en vervolgens de samenhang met de [hypotheek in Marokko](/nl/artikelen/hypotheekrente-marokko-september-2026/). De steun verlaagt de financieringsbehoefte, maar de bank beoordeelt nog altijd inkomen, schuldgraad, verzekering, eigen inbreng en kosten.

## Documenten, termijnen en vaak voorkomende weigeringen

Vraag vóór reservering de exacte identificatie van het pand, de totaalprijs inclusief belasting, oppervlakte, ondertekeningsplanning, identiteit van de verkoper, documenten voor de notaris en terugbetalingsvoorwaarden als de steun niet doorgaat. Veel problemen ontstaan door een te hoge prijs, verwarring tussen nieuwe geschikte woning en herverkoop, onvolledig dossier, laattijdige afhandeling, identiteitsfouten of een verkoper die documenten niet kan leveren.

De operationele update van september 2026 is belangrijk omdat verkoopfinalisatie en opheffing van de staatshypotheek correct moeten worden beheerd. De steun is dus één onderdeel van het aankoopplan, geen gewone korting. De koper moet ook locatie, bouwkwaliteit, lasten, verkoopbaarheid en lokaal prijsniveau vergelijken.`,
    },
  },
  {
    files: {
      fr: 'src/content/articles/credit-immobilier-maroc-septembre-2026.md',
      en: 'src/content/articles/en/morocco-mortgage-rates-september-2026.md',
      es: 'src/content/articles/es/credito-hipotecario-marruecos-septiembre-2026.md',
      nl: 'src/content/articles/nl/hypotheekrente-marokko-september-2026.md',
    },
    blocks: {
      fr: `## Coût total du crédit : pourquoi la durée change tout

La mensualité ne suffit pas à comparer deux crédits. À taux identique, allonger la durée de 15 à 25 ans rend l’effort mensuel plus supportable, mais augmente fortement le coût total des intérêts. À titre indicatif, avec une hypothèse de **4,8 % hors assurance**, un emprunt de **1 000 000 DH** coûte environ **395 000 DH d’intérêts** sur 15 ans, **598 000 DH** sur 20 ans et **833 000 DH** sur 25 ans. Ces montants changent avec le taux exact, l’assurance, les frais et la date de déblocage, mais l’ordre de grandeur montre l’arbitrage.

| Emprunt | Durée | Mensualité simulée | Intérêts approximatifs hors assurance |
|---|---:|---:|---:|
| 500 000 DH | 15 ans | 3 875 DH | 197 500 DH |
| 500 000 DH | 25 ans | 3 055 DH | 416 500 DH |
| 1 000 000 DH | 15 ans | 7 750 DH | 395 000 DH |
| 1 000 000 DH | 25 ans | 6 110 DH | 833 000 DH |
| 2 000 000 DH | 20 ans | 13 320 DH | 1 196 800 DH |

Ces chiffres ne sont pas une offre bancaire. Ils servent à comprendre la mécanique : plus la durée est longue, plus la part d’intérêts payée au fil du temps augmente. Pour comparer deux propositions, demandez toujours le coût total dû, le tableau d’amortissement et l’assurance séparée.

## Apport, assurance et frais d’acquisition

Un crédit immobilier au Maroc ne finance pas seulement un prix affiché. L’acheteur doit prévoir les droits, honoraires, frais bancaires, assurance, éventuelle hypothèque, ameublement, travaux et réserve de trésorerie. Pour un logement aidé, l’aide publique peut réduire le besoin de crédit, mais elle ne remplace pas l’apport ni les frais. Pour un achat d’investissement, la mensualité doit être testée avec loyers réalistes, vacance, fiscalité et charges.

La banque lit le dossier à travers plusieurs critères : stabilité des revenus, ancienneté professionnelle, taux d’endettement, reste à vivre, apport, nature du bien, prix cohérent avec le marché, assurance et qualité du dossier notarial. Un taux attractif peut devenir moins intéressant si les frais, l’assurance ou les pénalités de remboursement anticipé sont élevés.

## Remboursement anticipé, taux fixe et taux variable

Le taux fixe donne de la visibilité : la mensualité est connue dès le départ, ce qui facilite le budget familial. Le taux variable peut être moins cher au départ, mais expose l’emprunteur à une évolution défavorable. Dans un marché où Bank Al-Maghrib publie les données de taux et où les banques ajustent leurs barèmes selon le profil, l’acheteur doit simuler un scénario prudent : que se passe-t-il si le revenu baisse, si le bien reste vacant ou si des travaux imprévus apparaissent ?

Le remboursement anticipé mérite aussi d’être lu avant signature. Certains acheteurs pensent revendre rapidement ou rembourser après une rentrée d’argent. Dans ce cas, les pénalités, les frais et la date de calcul peuvent changer l’intérêt réel de l’opération.

## Exemple de budget acheteur

Pour un bien à **1 200 000 DH**, l’analyse ne doit pas commencer par « quelle mensualité puis-je supporter ? » mais par le coût global : prix, frais d’acquisition, apport, crédit, assurance, charges de copropriété, travaux, mobilier et réserve. Si le bien est destiné à la location, comparez ensuite le revenu net probable avec les [loyers à Marrakech](/articles/loyer-marrakech-2026/) ou les loyers de la ville concernée. Si le bien est acheté sur plan, ajoutez le risque de calendrier et de livraison.`,
      en: `## Total credit cost: why duration changes the decision

The monthly payment is only one part of the mortgage decision. With the same rate, extending a loan from 15 to 25 years reduces the monthly pressure but increases total interest. Using the article’s illustrative **4.8% excluding insurance** assumption, a **1,000,000 DH** loan costs roughly **395,000 DH** in interest over 15 years, **598,000 DH** over 20 years and **833,000 DH** over 25 years. The exact amount changes with the bank offer, insurance and disbursement schedule, but the trade-off is clear.

| Loan | Duration | Simulated payment | Approx. interest excl. insurance |
|---|---:|---:|---:|
| 500,000 DH | 15 years | 3,875 DH | 197,500 DH |
| 500,000 DH | 25 years | 3,055 DH | 416,500 DH |
| 1,000,000 DH | 15 years | 7,750 DH | 395,000 DH |
| 1,000,000 DH | 25 years | 6,110 DH | 833,000 DH |

A buyer should request the full amortisation table, total amount due, insurance cost, early-repayment rules and bank fees. A low headline rate may be less attractive if insurance or penalties are high.

## Down payment, fees and investment stress test

The property budget includes acquisition costs, bank fees, insurance, possible mortgage registration, works, furniture and cash reserve. For investment property, the mortgage must be tested against realistic rent, vacancy, tax, service charges and maintenance. If the asset is in Marrakech, compare the financing plan with [current Marrakech rents](/en/articles/marrakech-rent-prices-2026/) and not only with optimistic Airbnb revenue.`,
      es: `## Coste total del crédito: por qué el plazo cambia la decisión

La cuota mensual es solo una parte de la decisión hipotecaria. Con el mismo tipo, pasar de 15 a 25 años reduce la presión mensual pero aumenta los intereses totales. Con la hipótesis ilustrativa del artículo, **4,8 % sin seguro**, un préstamo de **1.000.000 DH** cuesta aproximadamente **395.000 DH** de intereses a 15 años, **598.000 DH** a 20 años y **833.000 DH** a 25 años. La cifra exacta depende de la oferta bancaria, el seguro y el calendario de desembolso.

| Préstamo | Plazo | Cuota simulada | Intereses aprox. sin seguro |
|---|---:|---:|---:|
| 500.000 DH | 15 años | 3.875 DH | 197.500 DH |
| 500.000 DH | 25 años | 3.055 DH | 416.500 DH |
| 1.000.000 DH | 15 años | 7.750 DH | 395.000 DH |
| 1.000.000 DH | 25 años | 6.110 DH | 833.000 DH |

El comprador debe pedir cuadro de amortización, coste total, seguro, reglas de amortización anticipada y comisiones. Un tipo atractivo puede perder interés si el seguro o las penalizaciones son elevados.

## Aportación, gastos y prueba de resistencia

El presupuesto incluye gastos de adquisición, banco, seguro, posible hipoteca, obras, muebles y reserva de caja. En inversión, el crédito debe probarse con alquiler realista, vacancia, impuestos, comunidad y mantenimiento. En Marrakech, conviene comparar el plan financiero con los [alquileres actuales](/es/articulos/alquiler-marrakech-precios-2026/) y no solo con ingresos optimistas de Airbnb.`,
      nl: `## Totale kredietkost: waarom looptijd alles verandert

De maandlast is maar één deel van de hypotheekbeslissing. Bij dezelfde rente verlaagt een looptijd van 25 jaar de maandelijkse druk, maar verhoogt ze de totale rente sterk. Met de illustratieve hypothese van **4,8% zonder verzekering** kost een lening van **1.000.000 DH** ongeveer **395.000 DH** rente op 15 jaar, **598.000 DH** op 20 jaar en **833.000 DH** op 25 jaar. Het exacte bedrag hangt af van bankaanbod, verzekering en vrijgavekalender.

| Lening | Looptijd | Gesimuleerde maandlast | Rente bij benadering zonder verzekering |
|---|---:|---:|---:|
| 500.000 DH | 15 jaar | 3.875 DH | 197.500 DH |
| 500.000 DH | 25 jaar | 3.055 DH | 416.500 DH |
| 1.000.000 DH | 15 jaar | 7.750 DH | 395.000 DH |

Vraag altijd de aflossingstabel, totale kost, verzekering, regels voor vervroegde terugbetaling en bankkosten. Een lage rente kan minder interessant zijn wanneer verzekering of boetes zwaar wegen.

## Eigen inbreng, kosten en stresstest

Het vastgoedbudget omvat aankoopkosten, bankkosten, verzekering, eventuele hypotheekregistratie, werken, meubels en cashreserve. Voor investering moet de lening worden getest met realistische huur, leegstand, belasting, mede-eigendom en onderhoud. In Marrakech hoort dat samen te gaan met de [actuele huurprijzen](/nl/artikelen/huurprijzen-marrakech-2026/) en niet alleen met optimistische Airbnb-inkomsten.`,
    },
  },
];

// Additional entries share focused expansion blocks to keep the script readable.
entries.push(
  {
    files:{fr:'src/content/articles/prix-immobilier-marrakech-2026.md',en:'src/content/articles/en/marrakech-property-prices-2026.md',es:'src/content/articles/es/precios-inmobiliarios-marrakech-2026.md',nl:'src/content/articles/nl/vastgoedprijzen-marrakech-2026.md'},
    blocks:{
      fr:`## Lecture quartier par quartier

À Marrakech, un prix moyen cache des marchés très différents. **Guéliz** sert souvent de référence urbaine parce que l’offre y est abondante et comparable : appartements, commerces, immeubles avec ascenseur, parkings et biens de revente. **Hivernage** fonctionne davantage comme un segment premium où l’adresse, les prestations, la sécurité, la gestion de copropriété et la proximité des hôtels peuvent justifier un écart important. **Agdal** mélange résidence principale, tourisme et projets récents ; la valeur dépend fortement du standing et de la distance réelle aux services.

**Targa** intéresse les familles et les acheteurs qui privilégient surface, accessibilité et environnement résidentiel. **Palmeraie** ne doit pas être réduite à un prix au mètre carré : une villa, un appartement en résidence, un terrain ou un bien orienté tourisme ne se comparent pas mécaniquement. La **Médina** est encore plus spécifique : l’état structurel, l’accès, le statut juridique, l’autorisation d’exploitation et les travaux pèsent parfois davantage que la surface.

Les routes périphériques — Route de Casablanca, Route de Fès, Route de l’Ourika, Route d’Amizmiz — répondent à une autre logique. Le prix peut être plus accessible, mais la liquidité dépend de l’accès, de la qualité du projet, de la livraison effective, des services et du potentiel locatif. Un bien moins cher peut devenir coûteux si la copropriété est faible, si la route allonge les trajets ou si les charges ne sont pas anticipées.

## Prix affiché, prix négocié et prix signé

La donnée officielle ANCFCC/BAM décrit des transactions enregistrées. Les baromètres privés et annonces décrivent plutôt des prix demandés ou des observations de marché. Entre les deux, il existe la négociation : un prix affiché à 18 000 DH/m² peut se signer plus bas si le bien est resté longtemps en vente, si des travaux sont nécessaires ou si les documents ralentissent la transaction. À l’inverse, un bien rare, bien situé, avec parking, terrasse et titre clair peut se vendre proche du prix demandé.

Pour utiliser la table de prix, construisez une comparaison stricte : même quartier, même type de bien, surface comparable, état comparable, étage comparable, présence ou non de parking, charges, orientation, bruit, qualité du syndic, année de construction et statut juridique. Le [marché immobilier de Marrakech](/articles/marche-immobilier-marrakech-2026/) donne le contexte général ; l’estimation d’un bien doit ensuite descendre au niveau de l’immeuble.

## Ce qui modifie vraiment le prix au mètre carré

Le prix au mètre carré baisse souvent quand la surface augmente, mais ce n’est pas automatique. Une petite unité bien placée peut être plus liquide qu’un grand appartement difficile à louer. Un dernier étage avec terrasse peut dépasser la moyenne ; un rez-de-chaussée sombre peut être décoté. Un immeuble récent avec ascenseur, parking et syndic actif n’a pas la même valeur qu’un immeuble ancien sans entretien. Dans le neuf, le promoteur, les finitions, le délai de livraison et les garanties doivent être ajoutés à l’analyse.

Pour un investisseur, le prix n’a de sens qu’avec le revenu net probable. Comparez le prix d’achat avec les [loyers à Marrakech](/articles/loyer-marrakech-2026/) et avec les charges réelles. Un prix élevé peut rester rationnel si la liquidité, la qualité et le revenu net sont solides. Un prix bas peut être trompeur si le bien nécessite des travaux, se revend mal ou supporte des charges élevées.`,
      en:`## Reading Marrakech prices by district

A city average hides very different markets. Guéliz is often the urban benchmark because apartments are easier to compare. Hivernage is a premium segment where address, services, security and co-ownership quality can justify large differences. Agdal mixes main homes, tourism and recent developments. Targa is more family-oriented. Palmeraie and Medina assets must be read case by case because land, renovation, access, tourist use and legal status change value.

Official ANCFCC/BAM indicators describe registered transactions. Private barometers and portals mostly describe asking prices or market observations. The signed price may be lower when the asset needs work, has been listed for a long time or has document issues; it may stay close to asking price when the asset is rare and clean. Use the [Marrakech real-estate market guide](/en/articles/marrakech-real-estate-market-2026/) for context, then compare the exact building, floor, parking, service charges, orientation and title.

For investors, price only makes sense with likely net income. Compare the purchase price with [Marrakech rent levels](/en/articles/marrakech-rent-prices-2026/), maintenance and resale liquidity. A low price can be expensive if the asset is hard to rent or resell.`,
      es:`## Leer los precios por distrito

Una media de ciudad oculta mercados muy distintos. Guéliz suele servir de referencia urbana porque los pisos son más comparables. Hivernage es un segmento premium donde dirección, servicios, seguridad y comunidad pueden justificar grandes diferencias. Agdal mezcla residencia, turismo y proyectos recientes. Targa es más familiar. Palmeraie y Medina exigen lectura caso por caso porque terreno, reforma, acceso, uso turístico y situación jurídica cambian el valor.

Los indicadores ANCFCC/BAM describen transacciones registradas. Los barómetros privados y portales describen sobre todo precios solicitados u observaciones de mercado. El precio firmado puede ser inferior si el bien necesita obra, lleva tiempo anunciado o tiene documentos lentos; puede acercarse al precio pedido si el activo es raro y claro. Use la guía del [mercado inmobiliario de Marrakech](/es/articulos/mercado-inmobiliario-marrakech-2026/) como contexto y después compare edificio, planta, aparcamiento, cargas, orientación y título.

Para invertir, el precio solo tiene sentido con ingreso neto probable. Compárelo con los [alquileres de Marrakech](/es/articulos/alquiler-marrakech-precios-2026/), mantenimiento y liquidez de reventa.`,
      nl:`## Prijzen per wijk lezen

Een stedelijk gemiddelde verbergt zeer verschillende markten. Guéliz is vaak de stedelijke referentie omdat appartementen beter vergelijkbaar zijn. Hivernage is premium: adres, diensten, veiligheid en mede-eigendom kunnen grote verschillen verklaren. Agdal mengt hoofdwoning, toerisme en recente projecten. Targa is meer familiaal. Palmeraie en Medina vragen geval-per-gevalanalyse omdat grond, renovatie, toegang, toeristisch gebruik en juridisch statuut de waarde veranderen.

ANCFCC/BAM-indicatoren beschrijven geregistreerde transacties. Private barometers en portalen tonen vooral vraagprijzen of marktobservaties. De getekende prijs kan lager zijn bij werken, lange publicatie of documentproblemen; hij kan dicht bij de vraagprijs blijven bij een zeldzaam en duidelijk pand. Gebruik de gids over de [vastgoedmarkt van Marrakech](/nl/artikelen/vastgoedmarkt-marrakech-2026/) voor context en vergelijk daarna gebouw, verdieping, parking, lasten, oriëntatie en titel.

Voor investeerders telt prijs alleen met waarschijnlijk netto-inkomen. Vergelijk met [huurprijzen in Marrakech](/nl/artikelen/huurprijzen-marrakech-2026/), onderhoud en verkoopbaarheid.`,
    }
  },
  {
    files:{fr:'src/content/articles/marche-immobilier-marrakech-2026.md',en:'src/content/articles/en/marrakech-real-estate-market-2026.md',es:'src/content/articles/es/mercado-inmobiliario-marrakech-2026.md',nl:'src/content/articles/nl/vastgoedmarkt-marrakech-2026.md'},
    blocks:{
      fr:`## Comment lire les données ANCFCC/BAM

L’IPAI ANCFCC/BAM est un indicateur de tendance construit à partir des transactions enregistrées. Il est utile pour suivre la direction générale du marché, mais il ne donne pas le prix d’un appartement précis à Guéliz ni d’une villa précise sur la Route de l’Ourika. Sa force est la base officielle ; sa limite est l’échelle d’analyse. Pour Marrakech, cette distinction est essentielle parce que les sous-marchés ne bougent pas tous ensemble.

Les transactions résidentielles, foncières et commerciales doivent aussi être séparées. Une hausse sur le foncier peut traduire des anticipations de développement ou une rareté de terrains, sans signifier que les appartements anciens se vendent plus cher. Une hausse commerciale peut refléter des emplacements limités, pas la demande familiale. Un commentaire sérieux du marché doit donc préciser le segment observé.

## Ce que les acheteurs doivent surveiller en 2026

Quatre signaux méritent une attention particulière. Le premier est le volume de transactions : si les prix affichés montent mais que les transactions ne suivent pas, le marché peut être plus fragile qu’il n’y paraît. Le deuxième est le financement : la stabilité du taux directeur ne garantit pas le même taux pour tous les emprunteurs. Le troisième est la qualité de l’offre neuve : certains projets justifient une prime, d’autres vendent surtout une histoire. Le quatrième est la liquidité : un bien peut être séduisant mais difficile à revendre si son prix est trop spécifique ou si sa cible est étroite.

## Reprise ou sélection accrue ?

Le mot « reprise » doit être utilisé prudemment. Marrakech bénéficie d’une demande touristique, d’une visibilité internationale et d’un récit 2030 puissant. Mais les acheteurs sont plus sélectifs lorsqu’ils comparent financement, charges, location et revente. Une reprise saine se voit dans des transactions cohérentes, des délais de vente raisonnables et des prix négociés sur des comparables. Une surchauffe se voit lorsque les prix reposent uniquement sur une promesse future.

Pour décider, reliez la tendance de marché aux données de [prix immobiliers à Marrakech](/articles/prix-immobilier-marrakech-2026/) et au revenu possible si le bien est loué. Un bon marché n’efface jamais un mauvais dossier documentaire, un prix trop élevé ou un modèle locatif irréaliste.`,
      en:`## How to read ANCFCC/BAM data

The ANCFCC/BAM index is an official trend indicator based on registered transactions. It is useful for market direction, but it does not price a specific apartment in Guéliz or a villa on Route de l’Ourika. Residential, land and commercial data must be separated: land can rise because of development expectations without meaning old apartments are more expensive.

In 2026 buyers should watch transaction volume, financing conditions, new-build quality and resale liquidity. If asking prices rise while signed transactions lag, the market is more fragile than it looks. A healthy recovery shows coherent comparable sales and reasonable selling times. Overheating appears when prices rely mainly on future promises. Connect market direction with [Marrakech property prices](/en/articles/marrakech-property-prices-2026/) and realistic rental income before deciding.`,
      es:`## Cómo leer los datos ANCFCC/BAM

El índice ANCFCC/BAM es un indicador oficial basado en transacciones registradas. Sirve para ver la dirección del mercado, pero no da el precio de un piso concreto en Guéliz ni de una villa en la Route de l’Ourika. Hay que separar residencial, suelo y comercial: el suelo puede subir por expectativas de desarrollo sin que los pisos antiguos valgan más.

En 2026 el comprador debe vigilar volumen de operaciones, financiación, calidad de obra nueva y liquidez de reventa. Si los precios pedidos suben pero las ventas firmadas no acompañan, el mercado es más frágil de lo que parece. Una recuperación sana se ve en comparables coherentes y plazos razonables. La sobrecalentamiento aparece cuando el precio descansa casi solo en promesas futuras. Cruce el contexto con los [precios inmobiliarios de Marrakech](/es/articulos/precios-inmobiliarios-marrakech-2026/) y con ingresos de alquiler realistas.`,
      nl:`## ANCFCC/BAM-data juist lezen

De ANCFCC/BAM-index is een officiële trendindicator op basis van geregistreerde transacties. Hij toont marktrichting, maar geeft niet de prijs van één appartement in Guéliz of één villa op Route de l’Ourika. Wonen, grond en commercieel vastgoed moeten apart worden gelezen: grond kan stijgen door ontwikkelingsverwachtingen zonder dat oude appartementen duurder worden.

In 2026 moeten kopers transacties, financiering, kwaliteit van nieuwbouw en verkoopbaarheid volgen. Wanneer vraagprijzen stijgen maar getekende verkopen niet volgen, is de markt kwetsbaarder. Een gezonde herneming blijkt uit coherente vergelijkingen en redelijke verkooptijden. Oververhitting ontstaat wanneer prijzen vooral op toekomstverhalen steunen. Combineer de marktcontext met [vastgoedprijzen in Marrakech](/nl/artikelen/vastgoedprijzen-marrakech-2026/) en realistische huurinkomsten.`,
    }
  }
);

entries.push(
  {
    files:{fr:'src/content/articles/location-courte-duree-marrakech.md',en:'src/content/articles/en/short-term-rental-marrakech-opportunity-or-pressure.md',es:'src/content/articles/es/alquiler-corta-duracion-marrakech-oportunidad-presion.md',nl:'src/content/articles/nl/kortetermijnverhuur-marrakech-kans-of-druk.md'},
    blocks:{
      fr:`## Trois scénarios réalistes de rendement

Un calcul utile commence par le revenu net, pas par le chiffre d’affaires affiché. Prenons un appartement acheté **1 200 000 DH**. En location longue durée à **8 000 DH par mois**, le revenu brut annuel atteint **96 000 DH**. Après vacance limitée, entretien, syndic, fiscalité, petites réparations et gestion éventuelle, le net peut tomber autour de **65 000 à 75 000 DH** selon le bien. Le rendement net se situe alors autour de **5,4 % à 6,2 %** avant financement, dans cet exemple.

En courte durée, le même bien peut afficher un chiffre d’affaires plus élevé si l’occupation et le prix moyen suivent. Mais il faut retirer plateforme, gestion, ménage, linge, électricité, eau, internet, maintenance, remplacement du mobilier, commission éventuelle, fiscalité et périodes creuses. Un chiffre d’affaires de **180 000 DH** peut devenir **105 000 à 125 000 DH** nets avant financement si l’exploitation est bien gérée, et beaucoup moins si l’occupation baisse.

| Modèle | Revenu brut plausible | Coûts principaux | Lecture investisseur |
|---|---:|---|---|
| Longue durée | 72 000–120 000 DH/an | Vacance, syndic, entretien, fiscalité | Moins de gestion, revenu plus prévisible. |
| Courte durée standard | 120 000–220 000 DH/an | Plateformes, ménage, utilities, gestion, mobilier | Potentiel supérieur, forte dépendance à l’exécution. |
| Riad / villa touristique | Très variable | Personnel, licence, maintenance, commercialisation | Activité opérationnelle, pas simple revenu passif. |

## Point mort et saisonnalité

Le point mort est le nombre de nuits nécessaires pour couvrir charges, crédit, gestion et entretien. Si la mensualité, les charges et les frais fixes totalisent **11 000 DH par mois**, l’exploitation doit générer au moins **132 000 DH nets par an** avant de créer un surplus. Un prix moyen élevé ne suffit pas si l’occupation est irrégulière ou si la gestion absorbe une grande part du revenu.

Marrakech a une saisonnalité réelle : haute demande au printemps, en automne et sur certaines périodes de vacances ; tension plus faible lorsque la chaleur, la concurrence ou les travaux réduisent l’attractivité. La longue durée amortit mieux cette saisonnalité, mais capte moins le potentiel touristique. La courte durée capte mieux les pics, mais expose au risque d’exécution.

## Questions à poser avant de choisir

Le bien est-il autorisé et adapté à l’usage envisagé ? La copropriété accepte-t-elle l’exploitation courte durée ? Qui gère les arrivées, le ménage, les incidents et les avis clients ? Quel budget de remplacement du mobilier est prévu ? Le quartier attire-t-il réellement les voyageurs ou seulement les acheteurs ? Quel revenu reste après impôts, commissions, charges et vacance ?

Le choix dépend aussi du financement. Si le crédit est lourd, la courte durée peut sembler nécessaire pour équilibrer l’opération, mais elle augmente le risque opérationnel. Si l’objectif est patrimonial, une longue durée bien sécurisée peut être plus cohérente. Le bon arbitrage relie donc [loyers de marché](/articles/loyer-marrakech-2026/), prix d’achat, financement et capacité de gestion.`,
      en:`## Three realistic yield scenarios

Useful analysis starts with net income, not headline revenue. A 1,200,000 DH apartment rented long term at 8,000 DH per month generates 96,000 DH gross per year. After vacancy, service charges, tax, repairs and management, net income may fall to 65,000–75,000 DH before financing. Short term rental can do better, but platform fees, cleaning, utilities, furniture replacement, management and seasonality must be deducted.

| Model | Plausible gross revenue | Main costs | Investor reading |
|---|---:|---|---|
| Long term | 72,000–120,000 DH/year | Vacancy, charges, maintenance, tax | More predictable, less operational work. |
| Standard short term | 120,000–220,000 DH/year | Platforms, cleaning, utilities, furniture, management | Higher upside, execution dependent. |
| Riad / tourist villa | Highly variable | Staff, licence, maintenance, marketing | Operating business, not passive rent. |

The break-even point matters. If loan payment and fixed costs reach 11,000 DH per month, the operation needs at least 132,000 DH net per year before creating surplus. Compare this with [Marrakech rent levels](/en/articles/marrakech-rent-prices-2026/) and your real management capacity.`,
      es:`## Tres escenarios realistas de rentabilidad

El análisis útil empieza por el ingreso neto, no por la facturación. Un piso de 1.200.000 DH alquilado a largo plazo por 8.000 DH al mes genera 96.000 DH brutos al año. Tras vacancia, comunidad, impuestos, reparaciones y gestión, el neto puede caer a 65.000–75.000 DH antes de financiación. La corta duración puede superar esa cifra, pero hay que deducir plataformas, limpieza, suministros, mobiliario, gestión y estacionalidad.

| Modelo | Ingreso bruto plausible | Costes principales | Lectura inversor |
|---|---:|---|---|
| Larga duración | 72.000–120.000 DH/año | Vacancia, cargas, mantenimiento, impuestos | Más previsible y menos operativo. |
| Corta duración estándar | 120.000–220.000 DH/año | Plataformas, limpieza, suministros, muebles, gestión | Mayor potencial, depende de ejecución. |
| Riad / villa turística | Muy variable | Personal, licencia, mantenimiento, marketing | Negocio operativo, no renta pasiva. |

El punto muerto importa. Si crédito y costes fijos suman 11.000 DH al mes, la operación necesita al menos 132.000 DH netos al año para crear excedente. Compárelo con los [alquileres de Marrakech](/es/articulos/alquiler-marrakech-precios-2026/) y con su capacidad real de gestión.`,
      nl:`## Drie realistische rendementsscenario’s

Een nuttige analyse begint met netto-inkomen, niet met omzet. Een appartement van 1.200.000 DH dat langlopend 8.000 DH per maand verhuurt, levert 96.000 DH bruto per jaar op. Na leegstand, mede-eigendom, belasting, herstellingen en beheer kan netto 65.000–75.000 DH overblijven vóór financiering. Korte verhuur kan hoger liggen, maar platformkosten, schoonmaak, nutsvoorzieningen, meubels, beheer en seizoen moeten eraf.

| Model | Plausibele bruto-inkomst | Belangrijkste kosten | Lezing voor investeerder |
|---|---:|---|---|
| Langlopend | 72.000–120.000 DH/jaar | Leegstand, lasten, onderhoud, belasting | Voorspelbaarder, minder operationeel. |
| Korte verhuur standaard | 120.000–220.000 DH/jaar | Platforms, schoonmaak, nutsvoorzieningen, meubels, beheer | Meer potentieel, afhankelijk van uitvoering. |
| Riad / toeristische villa | Zeer variabel | Personeel, vergunning, onderhoud, marketing | Operationele activiteit, geen passieve huur. |

Het break-evenpunt telt. Bij 11.000 DH maandelijkse lening en vaste kosten is minstens 132.000 DH netto per jaar nodig om overschot te creëren. Vergelijk dat met [huurprijzen in Marrakech](/nl/artikelen/huurprijzen-marrakech-2026/) en met uw echte beheercapaciteit.`,
    }
  },
  {
    files:{fr:'src/content/articles/loyer-marrakech-2026.md',en:'src/content/articles/en/marrakech-rent-prices-2026.md',es:'src/content/articles/es/alquiler-marrakech-precios-2026.md',nl:'src/content/articles/nl/huurprijzen-marrakech-2026.md'},
    blocks:{
      fr:`## Loyers par typologie et quartier

Les loyers à Marrakech dépendent autant de la typologie que du quartier. Un studio meublé à Guéliz peut intéresser un étudiant, un jeune actif ou un séjour moyen terme ; un deux-pièces meublé à Hivernage vise une clientèle plus solvable ; une villa à Targa ou Route de l’Ourika répond à une logique familiale ou expatriée. Comparer seulement le nom du quartier produit donc des conclusions fragiles.

| Secteur | Studio / 1 chambre | 2 chambres | 3 chambres et plus | Lecture |
|---|---:|---:|---:|---|
| Guéliz | 4 000–7 000 DH | 6 500–10 000 DH | 9 000–14 000 DH | Forte demande urbaine, grande dispersion selon immeuble. |
| Hivernage | 6 000–10 000 DH | 9 000–16 000 DH | 14 000 DH+ | Premium, meublé et services pèsent beaucoup. |
| Agdal | 4 500–8 000 DH | 7 000–12 000 DH | 10 000–16 000 DH | Mix résidence, tourisme et projets récents. |
| Targa | 3 500–6 500 DH | 5 500–9 000 DH | 8 000–14 000 DH | Familial, surface et stationnement importants. |
| Palmeraie / villas | Variable | Variable | 18 000 DH+ | Dépend du terrain, piscine, entretien et gestion. |

Ces fourchettes sont des repères d’annonces et d’observations de marché, pas des baux signés. Le loyer réel dépend de l’état, du mobilier, de la durée, de la solvabilité du locataire, des charges incluses, de la saison et du niveau de négociation.

## Meublé, non meublé et frais d’entrée

Le meublé se loue souvent plus cher, mais il coûte aussi plus cher à maintenir. Literie, électroménager, climatisation, vaisselle, rideaux, internet et petites réparations réduisent l’écart net. Le non meublé attire parfois des locataires plus stables, mais peut demander plus de temps au départ. Les frais d’agence, dépôt de garantie, état des lieux, charges de copropriété et conditions de sortie doivent être clarifiés dès le début.

Pour un propriétaire, le bon loyer n’est pas le loyer maximal affiché : c’est le loyer qui se signe avec un locataire solvable, dans un délai raisonnable, avec peu de vacance et un risque limité. Pour un locataire, le bon loyer ne se juge pas seulement à la surface ; il faut inclure transport, bruit, parking, climatisation, eau chaude, internet et charges.

## Utiliser les loyers pour tester un investissement

Un investisseur doit partir du net. Si un appartement vaut 1 100 000 DH et peut se louer 7 500 DH par mois, le brut annuel atteint 90 000 DH. Après vacance, charges, entretien, fiscalité et gestion, le net peut être beaucoup plus faible. Ce net doit ensuite être comparé au prix d’achat, aux frais, au crédit et à la revente possible. Pour arbitrer avec la courte durée, consultez aussi le guide [Airbnb ou location longue durée à Marrakech](/articles/location-courte-duree-marrakech/).`,
      en:`## Rents by property type

Marrakech rents depend on both district and property type. A furnished studio in Guéliz does not compete with a family villa in Targa or a serviced apartment in Hivernage. Listing ranges are not signed leases: condition, furniture, duration, tenant profile, included charges and negotiation matter.

| Area | Studio / 1-bed | 2-bed | 3-bed+ | Reading |
|---|---:|---:|---:|---|
| Guéliz | 4,000–7,000 DH | 6,500–10,000 DH | 9,000–14,000 DH | Strong urban demand. |
| Hivernage | 6,000–10,000 DH | 9,000–16,000 DH | 14,000 DH+ | Premium and furnished quality matter. |
| Targa | 3,500–6,500 DH | 5,500–9,000 DH | 8,000–14,000 DH | Family logic, parking and surface. |

For investors, start from net rent. Deduct vacancy, service charges, maintenance, tax and management, then compare the result with purchase price, fees and financing. To compare with tourist rental, use the [Airbnb vs long-term rental guide](/en/articles/short-term-rental-marrakech-opportunity-or-pressure/).`,
      es:`## Alquileres por tipo de vivienda

Los alquileres dependen tanto del barrio como de la tipología. Un estudio amueblado en Guéliz no compite con una villa familiar en Targa ni con un piso premium en Hivernage. Las horquillas de anuncios no son contratos firmados: estado, muebles, duración, perfil del inquilino, cargas incluidas y negociación cambian el resultado.

| Zona | Estudio / 1 dorm. | 2 dorm. | 3 dorm.+ | Lectura |
|---|---:|---:|---:|---|
| Guéliz | 4.000–7.000 DH | 6.500–10.000 DH | 9.000–14.000 DH | Demanda urbana fuerte. |
| Hivernage | 6.000–10.000 DH | 9.000–16.000 DH | 14.000 DH+ | Premium y calidad del mobiliario. |
| Targa | 3.500–6.500 DH | 5.500–9.000 DH | 8.000–14.000 DH | Familiar, superficie y aparcamiento. |

Para invertir, empiece por el alquiler neto: vacancia, comunidad, mantenimiento, impuestos y gestión. Compare después con precio, gastos y financiación. Para el arbitraje turístico, vea [Airbnb o larga duración en Marrakech](/es/articulos/alquiler-corta-duracion-marrakech-oportunidad-presion/).`,
      nl:`## Huurprijzen per woningtype

Huur hangt af van wijk én type. Een gemeubelde studio in Guéliz concurreert niet met een gezinsvilla in Targa of een premiumappartement in Hivernage. Vraagprijzen zijn geen getekende contracten: staat, meubels, duur, huurderprofiel, inbegrepen lasten en onderhandeling veranderen het resultaat.

| Zone | Studio / 1 slpk. | 2 slpk. | 3 slpk.+ | Lezing |
|---|---:|---:|---:|---|
| Guéliz | 4.000–7.000 DH | 6.500–10.000 DH | 9.000–14.000 DH | Sterke stedelijke vraag. |
| Hivernage | 6.000–10.000 DH | 9.000–16.000 DH | 14.000 DH+ | Premium en meubelkwaliteit. |
| Targa | 3.500–6.500 DH | 5.500–9.000 DH | 8.000–14.000 DH | Familiaal, oppervlakte en parking. |

Voor investering begint u met nettohuur: leegstand, mede-eigendom, onderhoud, belasting en beheer. Vergelijk daarna met prijs, kosten en financiering. Voor toeristische verhuur, zie [Airbnb of langlopende verhuur in Marrakech](/nl/artikelen/kortetermijnverhuur-marrakech-kans-of-druk/).`,
    }
  }
);

entries.push(
  {
    files:{fr:'src/content/articles/aide-logement-maroc-2026-mre.md',en:'src/content/articles/en/morocco-housing-aid-mre-2026.md',es:'src/content/articles/es/ayuda-vivienda-marruecos-mre-2026.md',nl:'src/content/articles/nl/huisvestingssteun-marokko-mre-2026.md'},
    blocks:{
      fr:`## Un MRE peut-il réellement bénéficier de l’aide ?

Oui, un Marocain résidant à l’étranger peut entrer dans le dispositif si les conditions personnelles et celles du logement sont respectées. Le point décisif n’est pas la résidence à l’étranger en elle-même, mais la nationalité, l’absence de propriété d’habitation déjà détenue au Maroc, l’absence d’aide publique antérieure, l’achat d’un logement éligible et l’engagement d’usage comme résidence principale selon les règles du programme. Les chiffres publics de 2026 montrent d’ailleurs une part significative de bénéficiaires MRE.

La difficulté pratique vient de la distance. Un MRE doit coordonner plateforme, banque, notaire, vendeur, documents d’identité, procuration éventuelle, transfert de fonds et calendrier de signature. Le risque n’est pas seulement administratif : il peut aussi porter sur la qualité du bien, le prix, l’avancement de la construction ou la capacité du vendeur à finaliser.

## Procuration, banque et traçabilité

Lorsqu’un acheteur ne peut pas se déplacer, la procuration doit être préparée avec précision. Elle doit couvrir les actes nécessaires sans donner un pouvoir trop large. Le notaire doit confirmer la forme applicable, les documents consulaires éventuels et les limites de signature. Côté banque, les transferts de fonds doivent être traçables, surtout si l’achat mobilise des devises, un crédit marocain ou une contribution familiale.

La démarche doit aussi être synchronisée avec les délais de finalisation de l’aide. Un accord administratif ne suffit pas si l’acte, le paiement et la documentation ne suivent pas. Avant de signer à distance, demandez une copie de chaque document essentiel et gardez une trace écrite des engagements.

## Checklist MRE avant signature

- Vérifier son éligibilité personnelle sur la base du programme officiel.
- Confirmer que le bien entre dans la bonne tranche de prix TTC.
- Identifier le notaire et vérifier son rôle dans le circuit.
- Clarifier procuration, transfert de fonds et calendrier de présence éventuelle.
- Demander titre, autorisations, plans, prix total et charges.
- Tester le financement avec le [crédit immobilier au Maroc](/articles/credit-immobilier-maroc-septembre-2026/).
- Prévoir qui réceptionne le bien, suit les réserves et gère les documents après signature.

Pour un achat à distance, le gain apporté par l’aide ne doit pas faire oublier les vérifications de base. Le mauvais scénario n’est pas seulement de perdre l’aide ; c’est d’acheter un bien mal documenté, trop cher ou difficile à suivre depuis l’étranger.`,
      en:`## Can an MRE really benefit?

Yes, a Moroccan living abroad can fall within the scheme if personal and property conditions are met. The issue is not living abroad itself, but Moroccan nationality, absence of an existing residential property, no previous State housing aid, an eligible home and compliance with the main-residence rules. Public 2026 figures show a significant MRE share among beneficiaries.

The practical difficulty is distance. An MRE buyer must coordinate the platform, bank, notary, seller, identity documents, possible power of attorney, fund transfers and signature calendar. Before signing remotely, request every key document in writing, clarify the notary’s role and test financing with the [Morocco mortgage guide](/en/articles/morocco-mortgage-rates-september-2026/). The real risk is not only losing the aid; it is buying an overpriced, poorly documented or hard-to-monitor asset from abroad.`,
      es:`## ¿Un MRE puede beneficiarse realmente?

Sí. Un marroquí residente en el extranjero puede entrar en el dispositivo si cumple las condiciones personales y las del inmueble. El problema no es residir fuera, sino nacionalidad marroquí, ausencia de vivienda ya poseída, no haber recibido ayuda pública anterior, vivienda elegible y respeto de las reglas de residencia principal. Las cifras públicas de 2026 muestran una parte relevante de beneficiarios MRE.

La dificultad práctica es la distancia. El comprador debe coordinar plataforma, banco, notario, vendedor, identidad, posible poder, transferencias y calendario de firma. Antes de firmar a distancia, pida cada documento clave por escrito, aclare el papel del notario y pruebe la financiación con la guía de [crédito hipotecario en Marruecos](/es/articulos/credito-hipotecario-marruecos-septiembre-2026/). El riesgo no es solo perder la ayuda, sino comprar un activo caro, mal documentado o difícil de seguir desde fuera.`,
      nl:`## Kan een MRE echt steun krijgen?

Ja. Een Marokkaan die in het buitenland woont, kan binnen het systeem vallen als persoonlijke voorwaarden en woningvoorwaarden worden vervuld. Het probleem is niet het verblijf in het buitenland zelf, maar Marokkaanse nationaliteit, geen bestaande woning, geen eerdere staatssteun, een geschikte woning en naleving van de hoofdwoningregels. Publieke cijfers van 2026 tonen een aanzienlijk MRE-aandeel onder begunstigden.

De praktische moeilijkheid is afstand. De koper coördineert platform, bank, notaris, verkoper, identiteitsdocumenten, eventuele volmacht, transfers en ondertekeningskalender. Vraag vóór ondertekening op afstand alle kerndocumenten schriftelijk, verduidelijk de rol van de notaris en test financiering met de gids over [hypotheek in Marokko](/nl/artikelen/hypotheekrente-marokko-september-2026/). Het risico is niet alleen steun verliezen, maar een te duur of slecht gedocumenteerd pand kopen.`,
    }
  },
  {
    files:{fr:'src/content/articles/marrakech-avant-2030.md',en:'src/content/articles/en/marrakech-before-2030-tourism-infrastructure-opportunities.md',es:'src/content/articles/es/marrakech-antes-2030-turismo-infraestructuras-oportunidades.md',nl:'src/content/articles/nl/marrakech-voor-2030-toerisme-infrastructuur-kansen.md'},
    blocks:{
      fr:`## Confirmé, annoncé ou spéculatif : la distinction clé

L’horizon 2030 ne doit pas être lu comme une garantie de plus-value. Il existe trois niveaux. Le **confirmé** regroupe les infrastructures déjà financées, lancées ou documentées par des sources publiques : capacité aéroportuaire, équipements sportifs, voirie, hôtellerie, transport ou aménagements officiellement engagés. L’**annoncé** correspond aux projets présentés mais dont le calendrier, le budget ou l’exécution peuvent encore évoluer. Le **spéculatif** est le discours commercial qui transforme 2030 en argument de hausse automatique.

Pour un acheteur, cette distinction change tout. Un bien proche d’un équipement confirmé peut bénéficier d’une meilleure accessibilité ou d’une demande plus visible. Un bien vendu seulement sur une promesse vague doit être évalué comme si cette promesse arrivait en retard, partiellement ou pas du tout.

## Où 2030 peut vraiment compter

Les effets les plus plausibles concernent les zones liées au tourisme, à l’aéroport, aux axes d’accès, à l’hôtellerie, aux services et aux quartiers déjà liquides. Mais même dans ces zones, le prix payé aujourd’hui compte davantage que le récit. Si le vendeur intègre déjà toute l’espérance 2030 dans le prix, le potentiel futur peut être capté avant l’achat.

La bonne méthode consiste à construire trois scénarios : prudent, central et optimiste. Dans le scénario prudent, les travaux prennent du retard et les loyers progressent peu. Dans le scénario central, la demande s’améliore mais les charges augmentent aussi. Dans le scénario optimiste, la liquidité et le revenu progressent. Un achat solide doit rester défendable dans le scénario prudent, surtout si le bien est financé par crédit.

## Questions avant d’acheter pour 2030

Le projet est-il déjà confirmé par une source publique ? Le quartier dispose-t-il déjà d’une demande réelle ? Le prix actuel est-il comparable aux biens vendus aujourd’hui, ou intègre-t-il une prime future ? Le bien peut-il être loué hors événement exceptionnel ? Quelle est la sortie si la revente prend plus de temps ?

Reliez toujours l’argument 2030 aux [prix immobiliers à Marrakech](/articles/prix-immobilier-marrakech-2026/) et au [marché immobilier local](/articles/marche-immobilier-marrakech-2026/). 2030 peut renforcer un bon dossier ; il ne transforme pas un prix excessif, un mauvais emplacement ou un dossier juridique faible en investissement solide.`,
      en:`## Confirmed, announced or speculative

The 2030 horizon is not a capital-gain guarantee. Confirmed projects are documented, financed or under way through public sources. Announced projects may still change in budget or timing. Speculation is the sales narrative that turns 2030 into automatic appreciation. Buyers should test three scenarios: cautious, central and optimistic. A good purchase must still make sense if works are delayed or rents grow slowly.

The 2030 effect is most plausible around tourism, the airport, access routes, services and already liquid districts. But if the seller has already priced all future upside into today’s price, the buyer may be paying for the story before it materializes. Always connect the 2030 argument with [Marrakech property prices](/en/articles/marrakech-property-prices-2026/) and the [local market trend](/en/articles/marrakech-real-estate-market-2026/).`,
      es:`## Confirmado, anunciado o especulativo

El horizonte 2030 no garantiza plusvalía. Los proyectos confirmados están documentados, financiados o en marcha por fuentes públicas. Los anunciados pueden cambiar de presupuesto o calendario. La especulación es el discurso comercial que convierte 2030 en subida automática. El comprador debe probar tres escenarios: prudente, central y optimista. Una buena compra debe seguir teniendo sentido si las obras se retrasan o los alquileres crecen poco.

El efecto 2030 parece más plausible cerca de turismo, aeropuerto, accesos, servicios y zonas ya líquidas. Pero si el vendedor ya incluye toda la expectativa futura en el precio actual, el comprador paga la historia antes de que ocurra. Cruce siempre el argumento 2030 con los [precios inmobiliarios de Marrakech](/es/articulos/precios-inmobiliarios-marrakech-2026/) y la [tendencia del mercado local](/es/articulos/mercado-inmobiliario-marrakech-2026/).`,
      nl:`## Bevestigd, aangekondigd of speculatief

2030 is geen garantie op meerwaarde. Bevestigde projecten zijn publiek gedocumenteerd, gefinancierd of in uitvoering. Aangekondigde projecten kunnen nog wijzigen in budget of timing. Speculatie is het verkoopverhaal dat 2030 omzet in automatische stijging. Test drie scenario’s: voorzichtig, centraal en optimistisch. Een goede aankoop moet nog kloppen als werken vertragen of huur traag stijgt.

Het 2030-effect is het meest aannemelijk rond toerisme, luchthaven, toegangswegen, diensten en al liquide wijken. Maar als de verkoper alle toekomstige hoop al in de prijs rekent, betaalt de koper het verhaal vóór het werkelijkheid wordt. Koppel 2030 altijd aan [vastgoedprijzen in Marrakech](/nl/artikelen/vastgoedprijzen-marrakech-2026/) en de [lokale markttendens](/nl/artikelen/vastgoedmarkt-marrakech-2026/).`,
    }
  },
  {
    files:{fr:'src/content/articles/logement-programmes-partis-maroc-2026.md',en:'src/content/articles/en/morocco-housing-election-programmes-2026.md',es:'src/content/articles/es/vivienda-programas-electorales-marruecos-2026.md',nl:'src/content/articles/nl/huisvesting-verkiezingsprogrammas-marokko-2026.md'},
    blocks:{
      fr:`## Comment lire une promesse de logement

Une proposition électorale n’est pas une mesure applicable. Pour l’évaluer, il faut poser quatre questions : quel public est visé, quel budget est identifié, quel outil juridique ou fiscal serait nécessaire, et quel calendrier est réaliste ? Une promesse d’aide à l’achat n’a pas le même effet qu’une politique foncière, qu’un programme de logement social, qu’une incitation au crédit ou qu’une réforme locative.

Le logement est aussi un sujet transversal. Une baisse du coût du crédit dépend de la politique monétaire et des banques. Une hausse de l’offre dépend du foncier, des permis, des promoteurs et des infrastructures. Une amélioration de l’accès des jeunes dépend des revenus, de l’apport et de la stabilité professionnelle. Une mesure MRE dépend de la distance, de la banque, de la procuration et du notaire.

## Impact possible pour les acheteurs et investisseurs

Les programmes peuvent influencer les anticipations, mais ils ne changent pas immédiatement la valeur d’un bien. Avant 2026-2031, un acheteur doit distinguer ce qui existe déjà — par exemple l’aide au logement — de ce qui relève d’une proposition. Un investisseur doit éviter de payer aujourd’hui une prime fondée uniquement sur une promesse politique.

Pour une décision concrète, reliez les annonces à des pages opérationnelles : [aide au logement](/articles/aide-logement-maroc-2026/), [crédit immobilier](/articles/credit-immobilier-maroc-septembre-2026/) et [prix de Marrakech](/articles/prix-immobilier-marrakech-2026/) lorsque le projet concerne cette ville. Le vote peut changer un cadre public ; il ne remplace pas l’analyse du bien, du quartier, du financement et des documents.

## Neutralité et limites de cette comparaison

Cette page ne classe pas les partis et ne recommande aucun programme. Elle sépare les propositions documentées, les intentions générales et les mesures déjà en vigueur. Les formulations doivent rester prudentes : un parti « propose », « annonce » ou « s’engage à défendre » une mesure ; seule une loi, un décret, un budget ou une procédure publiée rend la mesure applicable.`,
      en:`## How to read a housing promise

An election proposal is not an applicable measure. Ask who is targeted, what budget is identified, what legal or tax tool is needed and what calendar is realistic. Purchase aid, land policy, social housing, mortgage support and rental reform do not affect the market in the same way.

Programmes can influence expectations, but they do not instantly change a property’s value. Buyers should separate what already exists, such as housing aid, from campaign proposals. For practical decisions, connect the proposals with operational guides: [housing aid](/en/articles/morocco-housing-aid-2026/), [mortgage rates](/en/articles/morocco-mortgage-rates-september-2026/) and [Marrakech property prices](/en/articles/marrakech-property-prices-2026/). This comparison is neutral: parties propose or announce; only published laws, budgets and procedures make measures applicable.`,
      es:`## Cómo leer una promesa de vivienda

Una propuesta electoral no es una medida aplicable. Pregunte a quién se dirige, qué presupuesto identifica, qué herramienta legal o fiscal necesita y qué calendario es realista. Ayuda a la compra, suelo, vivienda social, apoyo al crédito y reforma del alquiler no tienen el mismo efecto.

Los programas influyen en expectativas, pero no cambian al instante el valor de un inmueble. El comprador debe separar lo existente, como la ayuda a la vivienda, de las propuestas. Para decidir, relacione los anuncios con guías operativas: [ayuda a la vivienda](/es/articulos/ayuda-vivienda-marruecos-2026/), [crédito hipotecario](/es/articulos/credito-hipotecario-marruecos-septiembre-2026/) y [precios de Marrakech](/es/articulos/precios-inmobiliarios-marrakech-2026/). La comparación es neutral: los partidos proponen; solo leyes, presupuestos y procedimientos publicados aplican medidas.`,
      nl:`## Een woonbelofte lezen

Een verkiezingsvoorstel is geen toepasbare maatregel. Vraag wie wordt bedoeld, welk budget is geïdentificeerd, welk juridisch of fiscaal instrument nodig is en welk tijdschema realistisch is. Aankoopsteun, grondbeleid, sociale woningen, hypotheeksteun en huurhervorming hebben niet hetzelfde effect.

Programma’s beïnvloeden verwachtingen, maar veranderen niet meteen de waarde van een pand. Kopers moeten bestaande maatregelen, zoals huisvestingssteun, scheiden van voorstellen. Verbind aankondigingen met praktische gidsen: [huisvestingssteun](/nl/artikelen/huisvestingssteun-marokko-2026/), [hypotheekrente](/nl/artikelen/hypotheekrente-marokko-september-2026/) en [prijzen in Marrakech](/nl/artikelen/vastgoedprijzen-marrakech-2026/). Deze vergelijking is neutraal: partijen stellen voor; alleen gepubliceerde wetten, budgetten en procedures maken maatregelen toepasbaar.`,
    }
  }
);

function insertBlock(file, block) {
  let s = fs.readFileSync(file, 'utf8');
  if (s.includes('<!-- depth-finalized-2026-09-15 -->')) return;
  s = s.replace(/updatedDate: 2026-09-14/g, 'updatedDate: 2026-09-15');
  const marker = `\n<!-- depth-finalized-2026-09-15 -->\n\n${block.trim()}\n`;
  const faq = s.indexOf('\n## FAQ');
  if (faq !== -1) s = s.slice(0, faq) + marker + s.slice(faq);
  else s += marker;
  const body = s.replace(/^---[\s\S]*?---/, '');
  const words = (body.match(/[\p{L}\p{N}’'-]+/gu) || []).length;
  const reading = Math.max(5, Math.ceil(words / 190));
  s = s.replace(/readingTime: \d+/g, `readingTime: ${reading}`);
  fs.writeFileSync(file, s);
}

for (const entry of entries) {
  for (const [locale, file] of Object.entries(entry.files)) {
    insertBlock(file, entry.blocks[locale]);
  }
}
