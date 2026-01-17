export type Lang = "nl" | "en" | "it";
export const SUPPORTED: Lang[] = ["nl", "en", "it"];
export const FALLBACK: Lang = "en";

export function normalizeLang(input?: string | null): Lang {
  const v = (input || "").toLowerCase();
  if (v.startsWith("nl")) return "nl";
  if (v.startsWith("it")) return "it";
  if (v.startsWith("en")) return "en";
  return FALLBACK;
}

export function isSupported(input?: string | null): input is Lang {
  return SUPPORTED.includes((input || "") as Lang);
}

export function langFromParams(params: Record<string, string | undefined>): Lang {
  const p = params.lang || "";
  return isSupported(p) ? (p as Lang) : FALLBACK;
}

export function withLang(lang: Lang, slug = "") {
  const clean = slug.replace(/^\//, "");
  return `/${lang}/${clean}`.replace(/\/$/, "") + "/";
}

export function langLabel(lang: Lang) {
  return lang === "nl" ? "NL" : lang === "it" ? "IT" : "EN";
}

/* Copy is gebaseerd op je aangeleverde webtekst (NL volledig). */
export const copy = {
  nl: {
    meta: {
      title: "IDEX Supply — Grip op voorraad en inkoop, zonder extra ruis",
      desc: "Gerichte supply chain webapps: KPI’s, marge en leverbetrouwbaarheid. Start met een Supply Scan en verbeter met gecontroleerd maatwerk.",
    },
    nav: {
      home: "Home",
      garanties: "Werkwijze & garanties",
      standaard: "Standaard vs IDEX",
      werkwijze: "Aanpak",
      faq: "FAQ",
      contact: "Contact",
      app: "App demo",
      pages: "Pagina’s",
      primaryLabel: "Hoofdmenu",
      menuLabel: "Menu",
    },
    common: {
      brandName: "IDEX Supply",
      logoAlt: "IDEX Supply logo",
      languageSwitcherLabel: "Taalwissel",
    },
    footer: {
      blurb: "Grip op voorraad en inkoop, zonder extra ruis — met gerichte modules en dashboards die op de werkvloer werken.",
    },
    cta: {
      scan: "Boek de IDEX Supply Scan",
      intake: "Plan een intake (15 min)",
      contact: "Neem contact op",
      meta: ["Fixed scope / fixed price", "Overdraagbaar (docs + broncode)", "KPI-gedreven aanpak"],
    },
    home: {
      kicker: "INKOOP & VOORRAADBEHEER VOOR HET MKB",
      heroTitle: "Grip op voorraad en inkoop, zonder extra ruis.",
      heroSub: "Stop met workarounds naast je systeem. Krijg realtime grip op voorraad en inkoop — passend bij je werkwijze.",
      scanAlt: "Liever eerst een scan?",
      ctaSub: "Vrijblijvend - 15 min - binnen 1 werkdag reactie",
      pills: [
        "Minder spoed, meer leverbetrouwbaarheid",
        "Sturen op KPI’s: service level, omloopsnelheid, out-of-stock",
        "Open source & EU-hosting (Hetzner) — geen vendor lock-in",
      ],
      tooltipTitle: "Wat bedoelen we met open source & EU-hosting?",
      tooltipBody:
        "Open-source stack + hosting in Duitsland (Hetzner) maakt de oplossing beter overdraagbaar en vermindert afhankelijkheid. Levering is inclusief documentatie en broncode (geen vendor lock-in).",
      problemCardTitle: "Van brandjes naar controle.",
      problemTitle: "Als voorraad niet klopt, wordt alles duur.",
      problemBody:
        "Spoedorders, misgrijpen, stilstand - frustratie op de vloer. IDEX Supply brengt grip met simpele, robuuste modules en dashboards die je team snapt en gebruikt. Plan een intake (15 min): in een gesprek zie je waar het lekt en wat je als eerste aanpakt.",
      resultsCardTitle: "Meetbaar effect op KPI's.",
      demoKicker: "Demo",
      demoTitle: "Zo ziet het er in de app uit.",
      demoLink: "Bekijk app demo",
      demoBody: "Een app met KPI's, exceptions en actielijsten - zoals je team het dagelijks gebruikt.",
      resultsTitle: "Wat het oplevert",
      results: [
        "Minder misgrijpen en spoed: leverbetrouwbaarheid omhoog",
        "Betere inkoopbeslissingen: signalen op basis van data en afspraken",
        "Transparantie: KPI’s voor service level, omloopsnelheid en leverperformance",
      ],
      forWhoTitle: "Voor wie is IDEX Supply?",
      forWhoHeading: "Gericht oplossen. Geen groot traject.",
      forWhoBody:
        "Standaard ERP/WMS/voorraadmodules en low-code werken prima bij gemiddelde processen. IDEX Supply is er als je ondanks een systeem nog workarounds en losse stuurinformatie nodig hebt — en snel grip wil op voorraad, inkoop en leverbetrouwbaarheid.",
      forWhoBullets: [
        "Uitzonderingen zijn ‘de norm’ (locaties, partijnummers, substitutes, afwijkende flows)",
        "Stuurinformatie op KPI’s: leverbetrouwbaarheid, backorders, leveranciersperformance",
        "Sneller resultaat dan een groot implementatietraject",
        "Vrijheid in integratie/hosting, zonder vendor lock-in",
      ],
      offerTitle: "3 heldere instappen",
      offerHeading: "Kies je instap.",
      intakeNudge: "Eerst sparren? Plan intake",
      offer: [
        { t: "IDEX Supply Scan", d: "Doorlichting voorraad/inkoop + KPI-gedreven verbeterplan en roadmap.", meta: "1–2 weken — € 1.250" },
        { t: "IDEX Supply Control", d: "Eén kernproces automatiseren (bijv. replenishment of voorraadcorrecties). Fixed scope/fixed price, uitbreiden optioneel.", meta: "4–6 weken — € 5.000" },
        { t: "IDEX Supply Suite", d: "Meerdere modules + dashboards + rollen. Fixed scope/fixed price, uitbreiden optioneel.", meta: "8–12 weken — € 12.000" },
      ],
      approachTitle: "Aanpak in 6 stappen",
      approachHeading: "Voorspelbaar leveren. Wekelijkse demo's.",
      steps: [
        ["Intake & dataverkenning", "Doelen, knelpunten en datastromen scherp krijgen."],
        ["Scan (proces + data + KPI’s)", "Waar verlies je marge of leverbetrouwbaarheid — en waardoor: wat is de grondoorzaak en waar in het proces gaat het mis?"],
        ["Scope & acceptatiecriteria", "Vaste deliverables, meetbaar en testbaar."],
        ["Bouw + wekelijkse demo’s", "Korte feedbackloop, zichtbaar resultaat."],
        ["Testen + begeleide livegang", "Echte scenario’s, uitzonderingen inbegrepen."],
        ["Nazorg", "Support helder ingericht — wijzigingen vooraf geoffreerd."],
      ],
      supportTitle: "Support zonder lock-in gevoel",
      supportBody:
        "Voor bedrijfssoftware is continuïteit essentieel. Support kan met duidelijke responstijden; wijzigingen worden vooraf geoffreerd.",
      tipKicker: "Tip",
      tipTitle: "Begin met data + KPI's.",
      tipBody: "De scan levert een concreet verbeterplan en roadmap. Daarna bouwen we precies wat impact heeft.",
      bottomCtaTitle: "Bepaal direct de meest kansrijke eerste stap.",
      bottomCtaBody:
        "Plan een korte kennismaking (15 min) en we bepalen direct of een scan, control of suite het meeste impact heeft.",
    },
    garanties: {
      title: "Werkwijze & garanties",
      kicker: "IDEX Supply",
      intro:
        "Grip op voorraad en inkoop — met software die op de werkvloer werkt. Geen groot ERP-traject, maar één knelpunt écht oplossen en daarna gecontroleerd uitbreiden.",
      bullets: [
        ["Proces en data centraal", "We richten een kernworkflow strak in (bijv. bestelniveaus → automatisch bestellingen genereren → order bewaking → ontvangst → voorraad → uitgifte) en meten het effect op KPI’s."],
        ["Voorspelbaar", "Fixed scope/fixed price, mijlpalen en acceptatiecriteria vooraf."],
        ["Wijzigingen zonder gedoe", "Nieuwe wensen via change requests — apart geprijsd en ingepland."],
        ["Overdraagbaar", "Documentatie, broncode en overdracht standaard inbegrepen (geen lock-in)."],
        ["Continuïteit (optioneel)", "Doorontwikkeling op afroep, met heldere afspraken."],
      ],
      continuityTitle: "Continuïteit (één vaste specialist, goed geborgd)",
      continuityBody:
        "Je werkt met één vaste specialist: korte lijnen, snelheid en eigenaarschap. Overdracht is geborgd via documentatie, repository-structuur, herhaalbare builds en afspraken over toegang tot hosting/accounts. Bij kritieke situaties kan extra capaciteit worden ingezet (alleen met akkoord).",
      practicalKicker: "Praktisch",
      practicalTitle: "Scope blijft beheersbaar.",
      practicalBody: "Nieuwe wensen kunnen altijd — via change requests: apart geprijsd en ingepland.",
      ctaKicker: "Start klein, meet impact",
      ctaTitle: "Start met de IDEX Supply Scan.",
      ctaBody: "Krijg binnen 1–2 weken een KPI-gedreven verbeterplan en roadmap.",
    },
    standaard: {
      kicker: "Vergelijking",
      title: "Standaard ERP/WMS of IDEX Supply?",
      intro:
        "Standaardsoftware werkt prima als processen ‘gemiddeld’ zijn en je je werkwijze wilt aanpassen aan het pakket. IDEX Supply is er voor teams die grip willen op voorraad, inkoop en leverbetrouwbaarheid — passend bij de werkvloer.",
      whenTitle: "Wanneer IDEX Supply extra logisch is",
      when: [
        "Excel/handwerk blijft nodig, ondanks een systeem",
        "Voorraadbetrouwbaarheid en leverbetrouwbaarheid schommelen",
        "Uitzonderingen passen slecht (locaties, partijnummers, substitutes, afwijkende flows)",
        "Snelle verbetering zonder groot ERP-traject",
      ],
      lowcodeTitle: "Low-code lijkt snel… totdat uitzonderingen en integraties gaan tellen.",
      lowcodeBody:
        "In supply/material processen zijn uitzonderingen vaak de norm en wil je sturen op KPI’s (service level, out-of-stock, leverbetrouwbaarheid). IDEX Supply kiest daarom voor solide maatwerk: kernworkflow strak ingericht, heldere scope en dashboards die écht gebruikt worden.",
      tableTitle: "Vergelijking (kort)",
      tableHeadings: ["Onderdeel", "Standaard / low-code", "IDEX Supply"],
      table: [
        ["Start", "Breed pakket, vaak veel configuratie", "Klein starten met 1 kernproces"],
        ["Uitzonderingen", "Workarounds (Excel, mail, ‘zo doen we dat’)", "Uitzonderingen expliciet ondersteund"],
        ["Inzicht", "Rapportage kost tijd of is generiek", "KPI-dashboards op jouw stuurinformatie"],
        ["Koppelingen", "Maatwerk wordt duur/traag", "Gericht integreren waar het waarde toevoegt"],
        ["Wijzigingen", "Ticketing/doorlooptijd/afhankelijkheid", "Change requests: geprijsd en gepland"],
        ["Eigenaarschap", "Lock-in risico", "Overdraagbaar (docs + broncode + overdracht)"],
      ],
      ctaKicker: "Snelle duidelijkheid",
      ctaTitle: "Twijfel je wat bij je past?",
      ctaBody: "Plan 15 minuten: we bepalen of standaardsoftware volstaat of dat een gerichte module/dashboards het verschil maakt.",
    },
    werkwijze: {
      title: "Aanpak",
      kicker: "Aanpak",
      intro:
        "IDEX Supply (maatwerk, maar gecontroleerd): wanneer je snel grip wil op één kernprobleem in je supply/material proces.",
      youGetTitle: "Wat je krijgt",
      youGet: [
        "Een eerste werkbare versie rond één kernworkflow (bijv. ontvangst → voorraad → uitgifte, of inkoop → leverplanning → backorders)",
        "Proces en data centraal: minder handwerk, minder afwijkingen",
        "Dashboards/overzichten die passen bij jouw KPI’s (gericht, niet ‘alles’)",
        "Overdraagbaar: documentatie + broncode + overdracht (geen vendor lock-in)",
        "Uitbreiden op basis van impact: stap voor stap, met duidelijke scope",
      ],
      stepsTitle: "Aanpak — in 6 stappen",
      steps: [
        "Intake & dataverkenning",
        "Scan (proces + data + KPI’s)",
        "Scope & acceptatiecriteria",
        "Bouw + demo’s (wekelijks)",
        "Testen + livegang (begeleid)",
        "Nazorg",
      ],
      close:
        "Weet je niet of je een systeemprobleem of procesprobleem hebt? Plan een korte kennismaking. In 15 minuten kunnen we vaak al bepalen of je met kleine aanpassingen vooruit kan, of dat gerichte software het verschil maakt.",
      ctaKicker: "KPI’s eerst",
      ctaTitle: "Begin met een scan, bouw daarna precies wat impact heeft.",
      ctaBody: "In 1–2 weken heb je een concreet verbeterplan en roadmap. Daarna leveren we een eerste werkbare module — fixed scope / fixed price.",
    },
    faq: {
      kicker: "FAQ",
      title: "FAQ",
      intro: "De meest gestelde vragen (accordion). Staat jouw vraag er niet bij? Mail of bel gerust.",
      items: [
        {
          q: "Kunnen jullie koppelen met ons huidige ERP/WMS?",
          a: "Ja, waar het zinvol is. We koppelen alleen als het echt waarde toevoegt. In de intake bepalen we welke data uit ERP/WMS komt, wat teruggeschreven moet worden en wat los kan blijven zodat het beheersbaar blijft."
        },
        {
          q: "Hoe borgen jullie dat dit op de vloer werkt?",
          a: "We bouwen rond het proces op de werkvloer, testen met echte scenario’s en leveren in korte iteraties met demo’s. Kritieke flows (correcties, uitzonderingen, partijnummers, substitutes) krijgen expliciete aandacht."
        },
        {
          q: "Hoe lang duurt het en hoe houden we het klein?",
          a: "Indicatief: Scan 1–2 weken, Control 4–6 weken, Suite 8–12 weken. We werken fixed scope/fixed price met acceptatiecriteria. Nieuwe wensen gaan via change requests: apart geprijsd en ingepland."
        },
        {
          q: "Wie beheert hosting en back-ups?",
          a: "Dat spreken we vooraf af. Het kan bij jullie IT/partner liggen, of optioneel via IDEX met afspraken over retentie, monitoring, toegang en verantwoordelijkheden."
        },
        {
          q: "Waar staat mijn data?",
          a: "Dat leggen we vooraf vast (locatie, toegang, beheer). Hosting kan in de EU, bijvoorbeeld Duitsland (Hetzner), met afgeschermde database. We leveren overdraagbaar op (documentatie + broncode)."
        },
        {
          q: "Wat als de ontwikkelaar uitvalt?",
          a: "Continuïteit borgen we met overdraagbaarheid: documentatie, repository-structuur, overdrachtsmoment, herhaalbare builds en heldere toegang tot hosting/accounts. Extra capaciteit alleen in overleg."
        },
        {
          q: "Waarom niet alles in het ERP/WMS oplossen?",
          a: "Soms kan dat, maar uitzonderingen en stuurinformatie passen vaak niet lekker in standaardmodules. IDEX Supply pakt precies de knelpunten aan — gericht, zonder groot traject."
        },
        {
          q: "Wanneer is standaardsoftware wél de beste keuze?",
          a: "Als processen relatief standaard zijn, uitzonderingen zeldzaam, je oké bent met standaard rapportage en de doorlooptijd van changes."
        },
        {
          q: "Wanneer is IDEX Supply logisch?",
          a: "Als je één knelpunt echt wil oplossen, minder handwerk en meer betrouwbaarheid op de vloer wil, KPI-dashboards wil die passen, en overdraagbaarheid zonder platform/leverancier-afhankelijkheid."
        },
        {
          q: "En low-code dan?",
          a: "Low-code/no-code kan prima zijn bij standaardprocessen of snelle interne tools. IDEX Supply is er als uitzonderingen, integraties, performance of overdraagbaarheid zwaarder wegen — en je minder lock-in wilt."
        },
        {
          q: "Hoe zit het met overdraagbaarheid en doorontwikkeling?",
          a: "Je krijgt oplevering met documentatie, broncode en overdracht. Doorontwikkeling kan op afroep: wijzigingen/uitbreidingen vooraf geoffreerd en ingepland wanneer nodig."
        },
        {
          q: "Pauzeren of annuleren?",
          a: "Kan altijd: uitgevoerd werk wordt afgerond en gefactureerd; niet gestart werk vervalt; broncode en documentatie kunnen worden overgedragen."
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Contact",
      intro: "Intakes genereren voor Supply Scan en Supply Control - met nadruk op KPI's, marge en leverbetrouwbaarheid.",
      company: "IDEX Supply",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Nederland"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexsupply.nl",
      kvk: "KVK nr.: (vul in)",
      btw: "BTW: (vul in)",
      formTitle: "Stuur een bericht",
      formNote:
        "Deze form gebruikt mailto (opent je mailprogramma). Wil je een echte server-form (Netlify/Vercel/Formspree), dan pas ik 'm direct aan.",
      intentScan: "Supply Scan",
      intentIntake: "Intake (15 min)",
      namePlaceholder: "Naam",
      emailPlaceholder: "E-mail",
      messagePlaceholder: "Bericht",
      submitLabel: "Verstuur",
      successMessage: "Bericht verzonden. We nemen snel contact op.",
      errorMessage: "Er ging iets mis. Probeer het later opnieuw.",
    },
    app: {
      title: "App demo (ingelogd)",
      intro: "Voorbeeld van de look & feel van een supply control dashboard: KPI's, exceptions en actielijsten."
    },
    appDemo: {
      crumb: "Supply >",
      pageTitle: "Supply Control Center",
      heroTitle: "Plan. Predict. Execute.",
      heroSub: "Een uniforme ervaring voor voorraad-, inkoop- en leverancierssturing.",
      panelTitle: "Supply Control Center services",
      collapse: "Inklappen",
      tabs: [
        { k: "inventory", label: "Voorraad overzicht" },
        { k: "replen", label: "Replenishment signalen" },
        { k: "suppliers", label: "Leveranciers performance" },
        { k: "exceptions", label: "Exceptions & backorders" },
      ],
      serviceTitle: "Zie waar voorraad en leverbetrouwbaarheid lekken",
      serviceBody:
        "Supply Control brengt data, KPI's en uitzonderingen samen in een scherm. Je team ziet direct wat actie nodig heeft: misgrijpen, afwijkende lead times, onverklaarde correcties en backorders.",
      launch: "Open Control Dashboard",
      learn: "Meer over KPI's en aanpak ->",
      sec1: "Dashboards & stuurinformatie",
      cards1: [
        ["Inventory Health", "Betrouwbaarheid per locatie/SKU, omloopsnelheid en OOS trends."],
        ["Service Level", "Service level per productgroep, inclusief impact van backorders."],
        ["Supplier OTIF", "OTIF/lead time afwijkingen en alerts op kritieke leveranciers."],
      ],
      sec2: "Troubleshooting & diagnostics",
      cards2: [
        ["Exception Analyzer", "Vind root causes achter misgrijpen, correcties en mismatch."],
        ["Backorder Triage", "Prioriteer acties op basis van impact (top sellers / klantprioriteit)."],
        ["Data Quality Checks", "Detecteer inconsistenties in masterdata en transactiestromen."],
      ],
      sec3: "Automation & workflow",
      cards3: [
        ["Replenishment Rules", "Min/max, safety stock en reorder points - gecontroleerd en transparant."],
        ["Approval Flows", "Inkoop/uitgifte approvals met rollen en audit trail."],
        ["Alerts & Tasks", "Actielijsten: wie moet wat doen, voordat het een spoed wordt."],
      ],
      hint:
        "Dit is een demo UI. In een echte implementatie koppelen we gericht aan ERP/WMS waar het waarde toevoegt, met fixed scope/fixed price en change requests voor uitbreidingen.",
      sidebarOverviewTitle: "Overview",
      sidebarOverviewLink: "Overview",
      sidebarDashboardsTitle: "Dashboards",
      sidebarDashboardsLinks: ["Inventory Health", "Service Level", "Supplier OTIF"],
      sidebarDiagnosticsTitle: "Diagnostics",
      sidebarDiagnosticsLinks: ["Exception Analyzer", "Backorder Triage", "Data Quality"],
      sidebarAutomationTitle: "Automation",
      sidebarAutomationLinks: ["Replenishment Rules", "Approvals", "Alerts & Tasks"],
      sidebarLinksTitle: "Links",
      sidebarLinkWerkwijze: "Werkwijze",
      sidebarLinkGaranties: "Garanties",
      sidebarLinkIntake: "Plan intake",
      diagramLabel1: "Replenishment signals",
      diagramLabel2: "Supplier performance alerts",
    }
  },

  /* EN/IT: compact maar professioneel (optioneel). */


  en: {
    meta: {
      title: "IDEX Supply — Inventory & purchasing control, without extra noise",
      desc: "Focused supply chain web apps: KPIs, margin and delivery reliability. Start with a Supply Scan and improve with controlled custom work.",
    },
    nav: {
      home: "Home",
      garanties: "How we work & guarantees",
      standaard: "Standard vs IDEX",
      werkwijze: "Approach",
      faq: "FAQ",
      contact: "Contact",
      app: "App demo",
      pages: "Pages",
      primaryLabel: "Main menu",
      menuLabel: "Menu",
    },
    common: {
      brandName: "IDEX Supply",
      logoAlt: "IDEX Supply logo",
      languageSwitcherLabel: "Language switch",
    },
    footer: {
      blurb:
        "Inventory and purchasing control, without extra noise — with focused modules and dashboards that work on the shop floor.",
    },
    cta: {
      scan: "Book the IDEX Supply Scan",
      intake: "Schedule an intake (15 min)",
      contact: "Get in touch",
      meta: ["Fixed scope / fixed price", "Transferable (docs + source code)", "KPI-driven approach"],
    },
    home: {
      kicker: "PURCHASING & INVENTORY MANAGEMENT FOR SMBs",
      heroTitle: "Inventory and purchasing control, without extra noise.",
      heroSub:
        "Stop using workarounds next to your system. Get real-time control of inventory and purchasing — aligned with how you work.",
      scanAlt: "Prefer a scan first?",
      ctaSub: "No obligation - 15 min - reply within 1 business day",
      pills: [
        "Fewer rush orders, better delivery reliability",
        "Steer on KPIs: service level, inventory turns, out-of-stock",
        "Open source & EU hosting (Hetzner) — no vendor lock-in",
      ],
      tooltipTitle: "What do we mean by open source & EU hosting?",
      tooltipBody:
        "An open-source stack + hosting in Germany (Hetzner) makes the solution more transferable and reduces dependency. Delivery includes documentation and source code (no vendor lock-in).",
      problemCardTitle: "From firefighting to control.",
      problemTitle: "When inventory is off, everything gets expensive.",
      problemBody:
        "Rush orders, stock-outs, downtime — frustration on the shop floor. IDEX Supply brings control with simple, robust modules and dashboards your team understands and actually uses. Schedule an intake (15 min): in one conversation you’ll see where it leaks and what to tackle first.",
      resultsCardTitle: "Measurable impact on KPIs.",
      demoKicker: "Demo",
      demoTitle: "What it looks like in the app.",
      demoLink: "View app demo",
      demoBody:
        "An app with KPIs, exceptions and action lists — the way your team uses it every day.",
      resultsTitle: "What you get out of it",
      results: [
        "Fewer stock-outs and rush orders: higher delivery reliability",
        "Better purchasing decisions: signals based on data and agreements",
        "Transparency: KPIs for service level, inventory turns and delivery performance",
      ],
      forWhoTitle: "Who is IDEX Supply for?",
      forWhoHeading: "Solve it with focus. No big project.",
      forWhoBody:
        "Standard ERP/WMS/inventory modules and low-code work fine for average processes. IDEX Supply is for when, despite having a system, you still need workarounds and separate steering information — and you want fast control of inventory, purchasing and delivery reliability.",
      forWhoBullets: [
        "Exceptions are ‘the norm’ (locations, batch numbers, substitutes, non-standard flows)",
        "Steering information on KPIs: delivery reliability, backorders, supplier performance",
        "Faster results than a large implementation project",
        "Freedom in integration/hosting, without vendor lock-in",
      ],
      offerTitle: "3 clear ways to start",
      offerHeading: "Choose your entry point.",
      intakeNudge: "Want to talk it through first? Schedule an intake",
      offer: [
        {
          t: "IDEX Supply Scan",
          d: "Inventory/purchasing review + KPI-driven improvement plan and roadmap.",
          meta: "1–2 weeks — € 1.250",
        },
        {
          t: "IDEX Supply Control",
          d: "Automate one core process (e.g. replenishment or inventory adjustments). Fixed scope/fixed price; optional expansion.",
          meta: "4–6 weeks — € 5.000",
        },
        {
          t: "IDEX Supply Suite",
          d: "Multiple modules + dashboards + roles. Fixed scope/fixed price; optional expansion.",
          meta: "8–12 weeks — € 12.000",
        },
      ],
      approachTitle: "Approach in 6 steps",
      approachHeading: "Predictable delivery. Weekly demos.",
      steps: [
        ["Intake & data exploration", "Clarify goals, bottlenecks and data flows."],
        [
          "Scan (process + data + KPIs)",
          "Where are you losing margin or delivery reliability — and why: what is the root cause and where in the process does it go wrong?",
        ],
        ["Scope & acceptance criteria", "Fixed deliverables, measurable and testable."],
        ["Build + weekly demos", "Short feedback loop, visible results."],
        ["Testing + guided go-live", "Real scenarios, exceptions included."],
        ["Aftercare", "Support set up clearly — changes quoted upfront."],
      ],
      supportTitle: "Support without a lock-in feeling",
      supportBody:
        "For business software, continuity is essential. Support can be arranged with clear response times; changes are quoted upfront.",
      tipKicker: "Tip",
      tipTitle: "Start with data + KPIs.",
      tipBody:
        "The scan delivers a concrete improvement plan and roadmap. After that, we build exactly what has impact.",
      bottomCtaTitle: "Determine the most promising first step right away.",
      bottomCtaBody:
        "Schedule a short introduction (15 min) and we’ll immediately determine whether a scan, control or suite will have the most impact.",
    },
    garanties: {
      title: "How we work & guarantees",
      kicker: "IDEX Supply",
      intro:
        "Inventory and purchasing control — with software that works on the shop floor. No big ERP project, but solving one bottleneck for real and then expanding in a controlled way.",
      bullets: [
        [
          "Process and data first",
          "We set up a core workflow tightly (e.g. reorder levels → automatically generate purchase orders → order monitoring → receiving → inventory → issuing) and measure the effect on KPIs.",
        ],
        ["Predictable", "Fixed scope/fixed price, milestones and acceptance criteria upfront."],
        [
          "Changes without hassle",
          "New wishes via change requests — priced and scheduled separately.",
        ],
        ["Transferable", "Documentation, source code and handover are included by default (no lock-in)."],
        ["Continuity (optional)", "On-demand development, with clear agreements."],
      ],
      continuityTitle: "Continuity (one dedicated specialist, properly safeguarded)",
      continuityBody:
        "You work with one dedicated specialist: short lines, speed and ownership. Transfer is safeguarded through documentation, repository structure, reproducible builds and agreements about access to hosting/accounts. In critical situations additional capacity can be deployed (only with approval).",
      practicalKicker: "Practical",
      practicalTitle: "Scope stays manageable.",
      practicalBody: "New wishes are always possible — via change requests: priced and scheduled separately.",
      ctaKicker: "Start small, measure impact",
      ctaTitle: "Start with the IDEX Supply Scan.",
      ctaBody: "Get a KPI-driven improvement plan and roadmap within 1–2 weeks.",
    },
    standaard: {
      kicker: "Comparison",
      title: "Standard ERP/WMS or IDEX Supply?",
      intro:
        "Standard software works fine when processes are ‘average’ and you’re willing to adapt your way of working to the package. IDEX Supply is for teams who want control of inventory, purchasing and delivery reliability — aligned with the shop floor.",
      whenTitle: "When IDEX Supply is especially logical",
      when: [
        "Excel/manual work remains necessary, despite having a system",
        "Inventory reliability and delivery reliability fluctuate",
        "Exceptions fit poorly (locations, batch numbers, substitutes, non-standard flows)",
        "Fast improvement without a big ERP project",
      ],
      lowcodeTitle: "Low-code seems fast… until exceptions and integrations start to matter.",
      lowcodeBody:
        "In supply/material processes, exceptions are often the norm and you want to steer on KPIs (service level, out-of-stock, delivery reliability). That’s why IDEX Supply chooses solid custom work: core workflow tightly set up, clear scope and dashboards that are actually used.",
      tableTitle: "Comparison (short)",
      tableHeadings: ["Topic", "Standard / low-code", "IDEX Supply"],
      table: [
        ["Start", "Broad package, often lots of configuration", "Start small with 1 core process"],
        ["Exceptions", "Workarounds (Excel, email, ‘this is how we do it’)", "Exceptions explicitly supported"],
        ["Insight", "Reporting takes time or is generic", "KPI dashboards on your steering information"],
        ["Integrations", "Custom work becomes expensive/slow", "Targeted integration where it adds value"],
        ["Changes", "Ticketing/lead time/dependency", "Change requests: priced and planned"],
        ["Ownership", "Lock-in risk", "Transferable (docs + source code + handover)"],
      ],
      ctaKicker: "Fast clarity",
      ctaTitle: "Not sure what fits you best?",
      ctaBody:
        "Schedule 15 minutes: we’ll determine whether standard software is sufficient or whether a focused module/dashboards makes the difference.",
    },
    werkwijze: {
      title: "Approach",
      kicker: "Approach",
      intro:
        "IDEX Supply (custom, but controlled): when you want quick control of one core problem in your supply/material process.",
      youGetTitle: "What you get",
      youGet: [
        "A first workable version around one core workflow (e.g. receiving → inventory → issuing, or purchasing → delivery planning → backorders)",
        "Process and data first: less manual work, fewer deviations",
        "Dashboards/overviews that fit your KPIs (focused, not ‘everything’)",
        "Transferable: documentation + source code + handover (no vendor lock-in)",
        "Expand based on impact: step by step, with clear scope",
      ],
      stepsTitle: "Approach — in 6 steps",
      steps: [
        "Intake & data exploration",
        "Scan (process + data + KPIs)",
        "Scope & acceptance criteria",
        "Build + demos (weekly)",
        "Testing + go-live (guided)",
        "Aftercare",
      ],
      close:
        "Not sure whether you have a system problem or a process problem? Schedule a short introduction. In 15 minutes we can often already determine whether small adjustments get you moving, or whether focused software makes the difference.",
      ctaKicker: "KPIs first",
      ctaTitle: "Start with a scan, then build exactly what has impact.",
      ctaBody:
        "In 1–2 weeks you’ll have a concrete improvement plan and roadmap. Then we deliver a first workable module — fixed scope / fixed price.",
    },
    faq: {
      kicker: "FAQ",
      title: "FAQ",
      intro: "The most frequently asked questions (accordion). Is your question not listed? Feel free to email or call.",
      items: [
        {
          q: "Can you integrate with our current ERP/WMS?",
          a: "Yes, where it makes sense. We only integrate if it truly adds value. In the intake we determine which data comes from ERP/WMS, what must be written back, and what can remain separate to keep it manageable.",
        },
        {
          q: "How do you ensure this works on the shop floor?",
          a: "We build around the shop-floor process, test with real scenarios and deliver in short iterations with demos. Critical flows (adjustments, exceptions, batch numbers, substitutes) get explicit attention.",
        },
        {
          q: "How long does it take and how do we keep it small?",
          a: "Indicative: Scan 1–2 weeks, Control 4–6 weeks, Suite 8–12 weeks. We work fixed scope/fixed price with acceptance criteria. New wishes go via change requests: priced and scheduled separately.",
        },
        {
          q: "Who manages hosting and backups?",
          a: "We agree this upfront. It can be handled by your IT/partner, or optionally via IDEX with agreements on retention, monitoring, access and responsibilities.",
        },
        {
          q: "Where is my data?",
          a: "We fix this upfront (location, access, management). Hosting can be in the EU, for example Germany (Hetzner), with a secured database. We deliver in a transferable way (documentation + source code).",
        },
        {
          q: "What if the developer is unavailable?",
          a: "We safeguard continuity through transferability: documentation, repository structure, a handover moment, reproducible builds and clear access to hosting/accounts. Extra capacity only in consultation.",
        },
        {
          q: "Why not solve everything in the ERP/WMS?",
          a: "Sometimes you can, but exceptions and steering information often do not fit well in standard modules. IDEX Supply tackles exactly the bottlenecks — focused, without a big project.",
        },
        {
          q: "When is standard software the best choice?",
          a: "When processes are relatively standard, exceptions are rare, you’re okay with standard reporting and with the lead time of changes.",
        },
        {
          q: "When is IDEX Supply logical?",
          a: "When you want to truly solve one bottleneck, reduce manual work and increase shop-floor reliability, want KPI dashboards that fit, and want transferability without platform/vendor dependency.",
        },
        {
          q: "And low-code?",
          a: "Low-code/no-code can be great for standard processes or quick internal tools. IDEX Supply is for when exceptions, integrations, performance or transferability weigh heavier — and you want less lock-in.",
        },
        {
          q: "How does transferability and ongoing development work?",
          a: "You receive delivery with documentation, source code and handover. Ongoing development can be on-demand: changes/expansions are quoted upfront and scheduled as needed.",
        },
        {
          q: "Pause or cancel?",
          a: "Always possible: completed work is finished and invoiced; not-started work is cancelled; source code and documentation can be handed over.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Contact",
      intro: "Generate intakes for Supply Scan and Supply Control — with emphasis on KPIs, margin and delivery reliability.",
      company: "IDEX Supply",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Netherlands"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexsupply.nl",
      kvk: "Chamber of Commerce no.: (fill in)",
      btw: "VAT: (fill in)",
      formTitle: "Send a message",
      formNote:
        "This form uses mailto (opens your email client). If you want a real server form (Netlify/Vercel/Formspree), I’ll adjust it immediately.",
      intentScan: "Supply Scan",
      intentIntake: "Intake (15 min)",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitLabel: "Send",
      successMessage: "Message sent. We’ll get back to you soon.",
      errorMessage: "Something went wrong. Please try again later.",
    },
    app: {
      title: "App demo (logged in)",
      intro:
        "Example of the look & feel of a supply control dashboard: KPIs, exceptions and action lists.",
    },
    appDemo: {
      crumb: "Supply >",
      pageTitle: "Supply Control Center",
      heroTitle: "Plan. Predict. Execute.",
      heroSub: "A unified experience for inventory, purchasing and supplier steering.",
      panelTitle: "Supply Control Center services",
      collapse: "Collapse",
      tabs: [
        { k: "inventory", label: "Inventory overview" },
        { k: "replen", label: "Replenishment signals" },
        { k: "suppliers", label: "Supplier performance" },
        { k: "exceptions", label: "Exceptions & backorders" },
      ],
      serviceTitle: "See where inventory and delivery reliability are leaking",
      serviceBody:
        "Supply Control brings data, KPIs and exceptions together in one screen. Your team immediately sees what needs action: stock-outs, deviating lead times, unexplained adjustments and backorders.",
      launch: "Open Control Dashboard",
      learn: "More about KPIs and approach ->",
      sec1: "Dashboards & steering information",
      cards1: [
        ["Inventory Health", "Reliability per location/SKU, inventory turns and OOS trends."],
        ["Service Level", "Service level per product group, including the impact of backorders."],
        ["Supplier OTIF", "OTIF/lead time deviations and alerts for critical suppliers."],
      ],
      sec2: "Troubleshooting & diagnostics",
      cards2: [
        ["Exception Analyzer", "Find root causes behind stock-outs, adjustments and mismatches."],
        ["Backorder Triage", "Prioritize actions based on impact (top sellers / customer priority)."],
        ["Data Quality Checks", "Detect inconsistencies in master data and transaction flows."],
      ],
      sec3: "Automation & workflow",
      cards3: [
        ["Replenishment Rules", "Min/max, safety stock and reorder points — controlled and transparent."],
        ["Approval Flows", "Purchasing/issuing approvals with roles and audit trail."],
        ["Alerts & Tasks", "Action lists: who needs to do what, before it becomes a rush."],
      ],
      hint:
        "This is a demo UI. In a real implementation we integrate selectively with ERP/WMS where it adds value, with fixed scope/fixed price and change requests for expansions.",
      sidebarOverviewTitle: "Overview",
      sidebarOverviewLink: "Overview",
      sidebarDashboardsTitle: "Dashboards",
      sidebarDashboardsLinks: ["Inventory Health", "Service Level", "Supplier OTIF"],
      sidebarDiagnosticsTitle: "Diagnostics",
      sidebarDiagnosticsLinks: ["Exception Analyzer", "Backorder Triage", "Data Quality"],
      sidebarAutomationTitle: "Automation",
      sidebarAutomationLinks: ["Replenishment Rules", "Approvals", "Alerts & Tasks"],
      sidebarLinksTitle: "Links",
      sidebarLinkWerkwijze: "Approach",
      sidebarLinkGaranties: "Guarantees",
      sidebarLinkIntake: "Schedule intake",
      diagramLabel1: "Replenishment signals",
      diagramLabel2: "Supplier performance alerts",
    },
  },

  it: {
    meta: {
      title: "IDEX Supply — Controllo di scorte e acquisti, senza rumore extra",
      desc: "Web app supply chain mirate: KPI, margine e affidabilità di consegna. Parti con una Supply Scan e migliora con custom controllato.",
    },
    nav: {
      home: "Home",
      garanties: "Metodo di lavoro & garanzie",
      standaard: "Standard vs IDEX",
      werkwijze: "Approccio",
      faq: "FAQ",
      contact: "Contatto",
      app: "Demo app",
      pages: "Pagine",
      primaryLabel: "Menu principale",
      menuLabel: "Menu",
    },
    common: {
      brandName: "IDEX Supply",
      logoAlt: "Logo IDEX Supply",
      languageSwitcherLabel: "Cambio lingua",
    },
    footer: {
      blurb:
        "Controllo di scorte e acquisti, senza rumore extra — con moduli e dashboard mirati che funzionano sul campo.",
    },
    cta: {
      scan: "Prenota la IDEX Supply Scan",
      intake: "Pianifica un intake (15 min)",
      contact: "Contattaci",
      meta: ["Scope fisso / prezzo fisso", "Trasferibile (doc + codice sorgente)", "Approccio guidato dai KPI"],
    },
    home: {
      kicker: "ACQUISTI & GESTIONE SCORTE PER PMI",
      heroTitle: "Controllo di scorte e acquisti, senza rumore extra.",
      heroSub:
        "Basta workaround accanto al tuo sistema. Ottieni controllo in tempo reale su scorte e acquisti — in linea con il tuo modo di lavorare.",
      scanAlt: "Preferisci prima una scan?",
      ctaSub: "Senza impegno - 15 min - risposta entro 1 giorno lavorativo",
      pills: [
        "Meno urgenze, più affidabilità di consegna",
        "Gestione via KPI: service level, rotazione, out-of-stock",
        "Open source & hosting UE (Hetzner) — nessun vendor lock-in",
      ],
      tooltipTitle: "Cosa intendiamo per open source & hosting UE?",
      tooltipBody:
        "Stack open-source + hosting in Germania (Hetzner) rendono la soluzione più trasferibile e riducono la dipendenza. La consegna include documentazione e codice sorgente (nessun vendor lock-in).",
      problemCardTitle: "Dalle emergenze al controllo.",
      problemTitle: "Se le scorte non tornano, tutto diventa più caro.",
      problemBody:
        "Ordini urgenti, mancanze, fermo macchina — frustrazione sul campo. IDEX Supply porta controllo con moduli e dashboard semplici e robusti che il team capisce e usa. Pianifica un intake (15 min): in una call vedi dove perde e cosa affrontare per primo.",
      resultsCardTitle: "Impatto misurabile sui KPI.",
      demoKicker: "Demo",
      demoTitle: "Così appare nell'app.",
      demoLink: "Guarda la demo app",
      demoBody:
        "Un’app con KPI, eccezioni e liste azioni — come il team la usa ogni giorno.",
      resultsTitle: "Cosa ottieni",
      results: [
        "Meno mancanze e urgenze: affidabilità di consegna in aumento",
        "Decisioni d’acquisto migliori: segnali basati su dati e accordi",
        "Trasparenza: KPI per service level, rotazione e performance di consegna",
      ],
      forWhoTitle: "Per chi è IDEX Supply?",
      forWhoHeading: "Soluzione mirata. Nessun grande progetto.",
      forWhoBody:
        "ERP/WMS/moduli scorte standard e low-code vanno bene con processi medi. IDEX Supply è per quando, nonostante un sistema, servono ancora workaround e informazioni di controllo separate — e vuoi rapidamente controllo su scorte, acquisti e affidabilità di consegna.",
      forWhoBullets: [
        "Le eccezioni sono “la norma” (sedi, lotti, sostituti, flussi non standard)",
        "Informazioni di controllo sui KPI: affidabilità, backorder, performance fornitori",
        "Risultati più rapidi di un grande progetto di implementazione",
        "Libertà su integrazione/hosting, senza vendor lock-in",
      ],
      offerTitle: "3 ingressi chiari",
      offerHeading: "Scegli il tuo ingresso.",
      intakeNudge: "Vuoi confrontarti prima? Pianifica un intake",
      offer: [
        {
          t: "IDEX Supply Scan",
          d: "Analisi scorte/acquisti + piano di miglioramento e roadmap guidati dai KPI.",
          meta: "1–2 settimane — € 1.250",
        },
        {
          t: "IDEX Supply Control",
          d: "Automatizzare un processo core (es. replenishment o correzioni scorte). Scope fisso/prezzo fisso; estensioni opzionali.",
          meta: "4–6 settimane — € 5.000",
        },
        {
          t: "IDEX Supply Suite",
          d: "Più moduli + dashboard + ruoli. Scope fisso/prezzo fisso; estensioni opzionali.",
          meta: "8–12 settimane — € 12.000",
        },
      ],
      approachTitle: "Approccio in 6 passi",
      approachHeading: "Consegna prevedibile. Demo settimanali.",
      steps: [
        ["Intake & esplorazione dati", "Chiarire obiettivi, colli di bottiglia e flussi dati."],
        [
          "Scan (processo + dati + KPI)",
          "Dove perdi margine o affidabilità di consegna — e perché: qual è la causa radice e dove nel processo va storto?",
        ],
        ["Scope & criteri di accettazione", "Deliverable fissi, misurabili e testabili."],
        ["Sviluppo + demo settimanali", "Feedback rapido, risultato visibile."],
        ["Test + go-live guidato", "Scenari reali, eccezioni incluse."],
        ["Post-go-live", "Supporto organizzato chiaramente — modifiche preventivate in anticipo."],
      ],
      supportTitle: "Supporto senza sensazione di lock-in",
      supportBody:
        "Per il software aziendale la continuità è essenziale. Il supporto può essere definito con tempi di risposta chiari; le modifiche vengono preventivate in anticipo.",
      tipKicker: "Tip",
      tipTitle: "Inizia da dati + KPI.",
      tipBody:
        "La scan produce un piano di miglioramento e una roadmap concreti. Poi costruiamo esattamente ciò che ha impatto.",
      bottomCtaTitle: "Determina subito il primo passo più promettente.",
      bottomCtaBody:
        "Pianifica una breve conoscenza (15 min) e decidiamo subito se scan, control o suite è ciò che ha più impatto.",
    },
    garanties: {
      title: "Metodo di lavoro & garanzie",
      kicker: "IDEX Supply",
      intro:
        "Controllo di scorte e acquisti — con software che funziona sul campo. Nessun grande progetto ERP, ma risolvere davvero un collo di bottiglia e poi estendere in modo controllato.",
      bullets: [
        [
          "Processo e dati al centro",
          "Impostiamo un workflow core in modo rigoroso (es. livelli di riordino → generazione automatica ordini → monitoraggio ordini → ricezione → scorte → prelievo) e misuriamo l’effetto sui KPI.",
        ],
        ["Prevedibile", "Scope fisso/prezzo fisso, milestone e criteri di accettazione definiti prima."],
        [
          "Modifiche senza complicazioni",
          "Nuove richieste tramite change request — preventivate e pianificate separatamente.",
        ],
        ["Trasferibile", "Documentazione, codice sorgente e handover inclusi di default (niente lock-in)."],
        ["Continuità (opzionale)", "Evoluzioni on-demand, con accordi chiari."],
      ],
      continuityTitle: "Continuità (un unico specialista dedicato, ben garantita)",
      continuityBody:
        "Lavori con un unico specialista dedicato: comunicazione diretta, velocità e responsabilità. Il passaggio di consegne è garantito tramite documentazione, struttura repository, build riproducibili e accordi sugli accessi a hosting/account. In situazioni critiche si può attivare capacità extra (solo con approvazione).",
      practicalKicker: "Pratico",
      practicalTitle: "Lo scope resta gestibile.",
      practicalBody:
        "Nuove richieste sono sempre possibili — tramite change request: preventivate e pianificate separatamente.",
      ctaKicker: "Parti in piccolo, misura l’impatto",
      ctaTitle: "Inizia con la IDEX Supply Scan.",
      ctaBody: "Ricevi in 1–2 settimane un piano e una roadmap guidati dai KPI.",
    },
    standaard: {
      kicker: "Confronto",
      title: "ERP/WMS standard o IDEX Supply?",
      intro:
        "Il software standard funziona bene se i processi sono “medi” e sei disposto ad adattare il tuo modo di lavorare al pacchetto. IDEX Supply è per i team che vogliono controllo su scorte, acquisti e affidabilità di consegna — in linea con il campo.",
      whenTitle: "Quando IDEX Supply è particolarmente sensato",
      when: [
        "Excel/lavoro manuale restano necessari, nonostante un sistema",
        "Affidabilità delle scorte e delle consegne fluttuano",
        "Le eccezioni si adattano male (sedi, lotti, sostituti, flussi non standard)",
        "Miglioramento rapido senza un grande progetto ERP",
      ],
      lowcodeTitle: "Il low-code sembra veloce… finché contano eccezioni e integrazioni.",
      lowcodeBody:
        "Nei processi supply/material, le eccezioni spesso sono la norma e vuoi gestire via KPI (service level, out-of-stock, affidabilità di consegna). Per questo IDEX Supply sceglie custom solido: workflow core impostato in modo rigoroso, scope chiaro e dashboard realmente usate.",
      tableTitle: "Confronto (breve)",
      tableHeadings: ["Voce", "Standard / low-code", "IDEX Supply"],
      table: [
        ["Start", "Pacchetto ampio, spesso molta configurazione", "Parti in piccolo con 1 processo core"],
        ["Eccezioni", "Workaround (Excel, email, “si fa così”)", "Eccezioni supportate esplicitamente"],
        ["Insight", "Report richiedono tempo o sono generici", "Dashboard KPI sulla tua steering information"],
        ["Integrazioni", "Il custom diventa costoso/lento", "Integrazione mirata dove aggiunge valore"],
        ["Modifiche", "Ticketing/tempi/dipendenza", "Change request: preventivate e pianificate"],
        ["Ownership", "Rischio lock-in", "Trasferibile (doc + codice + handover)"],
      ],
      ctaKicker: "Chiarezza rapida",
      ctaTitle: "Non sei sicuro di cosa scegliere?",
      ctaBody:
        "Pianifica 15 minuti: decidiamo se basta lo standard o se un modulo/dashboard mirato fa la differenza.",
    },
    werkwijze: {
      title: "Approccio",
      kicker: "Approccio",
      intro:
        "IDEX Supply (custom, ma controllato): quando vuoi rapidamente controllo su un problema core nel tuo processo supply/material.",
      youGetTitle: "Cosa ottieni",
      youGet: [
        "Una prima versione utilizzabile attorno a un workflow core (es. ricezione → scorte → prelievo, oppure acquisti → pianificazione consegne → backorder)",
        "Processo e dati al centro: meno lavoro manuale, meno deviazioni",
        "Dashboard/panoramiche allineate ai tuoi KPI (mirate, non “tutto”)",
        "Trasferibile: documentazione + codice sorgente + handover (nessun vendor lock-in)",
        "Estensione in base all’impatto: passo dopo passo, con scope chiaro",
      ],
      stepsTitle: "Approccio — in 6 passi",
      steps: [
        "Intake & esplorazione dati",
        "Scan (processo + dati + KPI)",
        "Scope & criteri di accettazione",
        "Sviluppo + demo (settimanali)",
        "Test + go-live (guidato)",
        "Post-go-live",
      ],
      close:
        "Non sai se hai un problema di sistema o di processo? Pianifica una breve conoscenza. In 15 minuti spesso possiamo già capire se bastano piccole modifiche o se il software mirato fa la differenza.",
      ctaKicker: "Prima i KPI",
      ctaTitle: "Inizia con una scan, poi costruiamo esattamente ciò che ha impatto.",
      ctaBody:
        "In 1–2 settimane hai un piano di miglioramento e una roadmap concreti. Poi consegniamo un primo modulo funzionante — scope fisso / prezzo fisso.",
    },
    faq: {
      kicker: "FAQ",
      title: "FAQ",
      intro: "Le domande più frequenti (accordion). La tua non c’è? Scrivi o chiama pure.",
      items: [
        {
          q: "Potete integrarvi con il nostro ERP/WMS attuale?",
          a: "Sì, dove ha senso. Integriamo solo se aggiunge davvero valore. Nell’intake definiamo quali dati arrivano da ERP/WMS, cosa va riscritto indietro e cosa può restare separato per mantenere tutto gestibile.",
        },
        {
          q: "Come garantite che funzioni sul campo?",
          a: "Costruiamo attorno al processo sul campo, testiamo con scenari reali e consegniamo in iterazioni brevi con demo. I flussi critici (correzioni, eccezioni, lotti, sostituti) ricevono attenzione esplicita.",
        },
        {
          q: "Quanto dura e come lo teniamo piccolo?",
          a: "Indicativamente: Scan 1–2 settimane, Control 4–6 settimane, Suite 8–12 settimane. Lavoriamo scope fisso/prezzo fisso con criteri di accettazione. Le nuove richieste passano via change request: preventivate e pianificate separatamente.",
        },
        {
          q: "Chi gestisce hosting e backup?",
          a: "Lo definiamo prima. Può restare al vostro IT/partner, oppure (opzionalmente) tramite IDEX con accordi chiari su retention, monitoraggio, accessi e responsabilità.",
        },
        {
          q: "Dove sono i miei dati?",
          a: "Lo definiamo prima (posizione, accesso, gestione). L’hosting può essere in UE, ad esempio in Germania (Hetzner), con database protetto. Consegniamo in modo trasferibile (documentazione + codice sorgente).",
        },
        {
          q: "E se lo sviluppatore non è disponibile?",
          a: "Garantiamo continuità tramite trasferibilità: documentazione, struttura repository, momento di handover, build riproducibili e accessi chiari a hosting/account. Capacità extra solo previo accordo.",
        },
        {
          q: "Perché non risolvere tutto in ERP/WMS?",
          a: "A volte è possibile, ma eccezioni e informazioni di controllo spesso non si adattano bene ai moduli standard. IDEX Supply risolve esattamente i colli di bottiglia — in modo mirato, senza un grande progetto.",
        },
        {
          q: "Quando il software standard è la scelta migliore?",
          a: "Se i processi sono relativamente standard, le eccezioni rare, sei ok con reportistica standard e con i tempi più lunghi per le modifiche.",
        },
        {
          q: "Quando IDEX Supply è sensato?",
          a: "Se vuoi risolvere davvero un collo di bottiglia, ridurre il lavoro manuale e aumentare l’affidabilità sul campo, vuoi dashboard KPI che calzano, e vuoi trasferibilità senza dipendenze da piattaforma/fornitore.",
        },
        {
          q: "E il low-code?",
          a: "Low-code/no-code può andare benissimo per processi standard o tool interni rapidi. IDEX Supply è per quando eccezioni, integrazioni, performance o trasferibilità pesano di più — e vuoi meno lock-in.",
        },
        {
          q: "Come funziona trasferibilità e sviluppo continuo?",
          a: "Ricevi consegna con documentazione, codice sorgente e handover. Lo sviluppo continuo può essere on-demand: modifiche/estensioni preventivate prima e pianificate quando serve.",
        },
        {
          q: "Pausa o annullamento?",
          a: "Sempre possibile: il lavoro svolto viene completato e fatturato; il lavoro non iniziato viene annullato; codice e documentazione possono essere consegnati.",
        },
      ],
    },
    contact: {
      kicker: "Contatto",
      title: "Contatto",
      intro: "Generare intake per Supply Scan e Supply Control — con focus su KPI, margine e affidabilità di consegna.",
      company: "IDEX Supply",
      address: ["Jonagoldstraat 65", "6515 EN Nijmegen", "Paesi Bassi"],
      phoneLabel: "+31 (0)24 207 0032",
      phoneTel: "+31242070032",
      email: "info@idexsupply.nl",
      kvk: "Registro imprese: (compila)",
      btw: "IVA: (compila)",
      formTitle: "Invia un messaggio",
      formNote:
        "Questo form usa mailto (apre il tuo client email). Se vuoi un form server (Netlify/Vercel/Formspree), lo adatto subito.",
      intentScan: "Supply Scan",
      intentIntake: "Intake (15 min)",
      namePlaceholder: "Nome",
      emailPlaceholder: "Email",
      messagePlaceholder: "Messaggio",
      submitLabel: "Invia",
      successMessage: "Messaggio inviato. Ti contatteremo a breve.",
      errorMessage: "Qualcosa è andato storto. Riprova più tardi.",
    },
    app: {
      title: "Demo app (accesso effettuato)",
      intro:
        "Esempio di look & feel di una dashboard supply control: KPI, eccezioni e liste azioni.",
    },
    appDemo: {
      crumb: "Supply >",
      pageTitle: "Supply Control Center",
      heroTitle: "Plan. Predict. Execute.",
      heroSub: "Un’esperienza unificata per gestione scorte, acquisti e fornitori.",
      panelTitle: "Servizi del Supply Control Center",
      collapse: "Comprimi",
      tabs: [
        { k: "inventory", label: "Panoramica scorte" },
        { k: "replen", label: "Segnali replenishment" },
        { k: "suppliers", label: "Performance fornitori" },
        { k: "exceptions", label: "Eccezioni & backorder" },
      ],
      serviceTitle: "Vedi dove scorte e affidabilità di consegna “perdono”",
      serviceBody:
        "Supply Control riunisce dati, KPI ed eccezioni in un’unica schermata. Il team vede subito cosa richiede azione: mancanze, lead time fuori standard, correzioni non spiegate e backorder.",
      launch: "Apri Control Dashboard",
      learn: "Più su KPI e approccio ->",
      sec1: "Dashboard & informazioni di controllo",
      cards1: [
        ["Inventory Health", "Affidabilità per sede/SKU, rotazione e trend OOS."],
        ["Service Level", "Service level per gruppo prodotti, incluso l’impatto dei backorder."],
        ["Supplier OTIF", "Deviazioni OTIF/lead time e alert su fornitori critici."],
      ],
      sec2: "Troubleshooting & diagnostica",
      cards2: [
        ["Exception Analyzer", "Trova le cause radice dietro mancanze, correzioni e mismatch."],
        ["Backorder Triage", "Prioritizza le azioni in base all’impatto (top seller / priorità cliente)."],
        ["Data Quality Checks", "Rileva incoerenze in master data e flussi transazionali."],
      ],
      sec3: "Automazione & workflow",
      cards3: [
        ["Replenishment Rules", "Min/max, safety stock e reorder point — controllati e trasparenti."],
        ["Approval Flows", "Approval acquisti/prelievi con ruoli e audit trail."],
        ["Alerts & Tasks", "Liste azioni: chi deve fare cosa, prima che diventi un’urgenza."],
      ],
      hint:
        "Questa è una demo UI. In un’implementazione reale integriamo in modo mirato con ERP/WMS dove aggiunge valore, con scope fisso/prezzo fisso e change request per estensioni.",
      sidebarOverviewTitle: "Overview",
      sidebarOverviewLink: "Overview",
      sidebarDashboardsTitle: "Dashboards",
      sidebarDashboardsLinks: ["Inventory Health", "Service Level", "Supplier OTIF"],
      sidebarDiagnosticsTitle: "Diagnostics",
      sidebarDiagnosticsLinks: ["Exception Analyzer", "Backorder Triage", "Data Quality"],
      sidebarAutomationTitle: "Automation",
      sidebarAutomationLinks: ["Replenishment Rules", "Approvals", "Alerts & Tasks"],
      sidebarLinksTitle: "Links",
      sidebarLinkWerkwijze: "Approccio",
      sidebarLinkGaranties: "Garanzie",
      sidebarLinkIntake: "Pianifica intake",
      diagramLabel1: "Replenishment signals",
      diagramLabel2: "Supplier performance alerts",
    },
  },




} as const;

export function t(lang: Lang){
  return copy[lang];
}
