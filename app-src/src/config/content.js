// =============================================================================
// OTRANTO IN MOVIMENTO — configurazione contenuti webapp
// Progetto "Punti Cardinali for Work" — PR Puglia FESR-FSE+ 2021-2027
// Comune di Otranto — CUP E31B25000680002 — Coordinamento ANTFORM APS
// Schema condiviso e intercambiabile: vedi _content/SCHEMA.md
// -----------------------------------------------------------------------------
// DIFFERENZE NOTE DI QUESTO PROGETTO (vedi anche _content/REPORT.md):
// - Orientation Desk aperto MERCOLEDÌ e VENERDÌ.
// - È l'UNICO dei tre progetti con la pagina "Opportunità" valorizzata.
// - È l'unico con il blocco "Coordinamento" dettagliato (descrizione + attività).
// - Orientation Lab: 5 AREE da 6 laboratori (Aree 1-2 con descrizioni, Aree 3-5
//   solo nomi). Intro lab presente (laboratori da 6 ore ciascuno).
// - Job Day in formato "attività + obiettivi" (NON in 3 percorsi tematici).
// - Puglia Donna Partecipa: 6 tematiche + campo "format" valorizzato.
// - Puglia Attrattiva #mareAsinistra: ha la lista "obiettivi" valorizzata.
// =============================================================================

export const content = {
  meta: {
    nomeProgetto: "Otranto in Movimento",
    sottotitolo: "Cultura, Agricoltura e Turismo per Nuove Opportunità Lavorative",
    comune: "Otranto",
    cup: "E31B25000680002",
    slug: "otranto",
  },

  home: {
    hero: {
      titolo: "Otranto in Movimento",
      claim: "La webapp che connette persone, competenze e opportunità",
      paragrafi: [
        "Uno spazio digitale dedicato all'orientamento, alla formazione e al lavoro, nato per accompagnare cittadini e cittadine nella scoperta delle opportunità professionali offerte dal territorio di Otranto.",
        "Attraverso servizi di orientamento, laboratori esperienziali, eventi, attività di empowerment e iniziative di promozione territoriale, il progetto sostiene giovani, adulti, donne e persone in cerca di occupazione nella costruzione del proprio percorso professionale.",
      ],
    },
    cta: [
      "Prenota una consulenza",
      "Scopri i laboratori",
      "Partecipa agli eventi",
      "Consulta le opportunità",
    ],
    cosaPuoiFare: [
      { titolo: "Orientarti", icon: "compass", desc: "Prenotare colloqui individuali e ricevere supporto personalizzato." },
      { titolo: "Partecipare", icon: "users", desc: "Iscriverti ai laboratori e agli eventi del progetto." },
      { titolo: "Informarti", icon: "info", desc: "Consultare opportunità formative e lavorative." },
      { titolo: "Connetterti", icon: "link", desc: "Entrare in contatto con servizi, imprese e reti territoriali." },
    ],
    azioni: [
      { titolo: "Orientation Desk", icon: "chat", desc: "Uno sportello permanente di orientamento e accompagnamento personalizzato." },
      { titolo: "Orientation Lab", icon: "book", desc: "30 laboratori esperienziali dedicati allo sviluppo delle competenze e all'orientamento professionale." },
      { titolo: "Job Day", icon: "calendar", desc: "Eventi dedicati all'incontro tra persone, imprese e servizi per il lavoro." },
      { titolo: "Puglia Donna Partecipa", icon: "women", desc: "Percorsi di empowerment femminile e valorizzazione delle competenze." },
      { titolo: "Puglia Attrattiva #mareAsinistra", icon: "globe", desc: "Attività di promozione del territorio e delle sue opportunità oltre i confini comunali." },
    ],
  },

  progetto: {
    intro: {
      titolo: "Cos'è Otranto in Movimento",
      paragrafi: [
        "Otranto in Movimento – Cultura, Agricoltura e Turismo per Nuove Opportunità Lavorative è il progetto promosso dal Comune di Otranto, soggetto beneficiario dell'Avviso Pubblico \"PUNTI CARDINALI FOR WORK – Punti di orientamento per la formazione e il lavoro\", finanziato nell'ambito del PR Puglia FESR-FSE+ 2021-2027 – Priorità Occupazione – Azione 5.1 Interventi per l'Occupazione.",
        "Il progetto nasce per rafforzare il sistema territoriale di orientamento, favorire l'incontro tra domanda e offerta di lavoro e accompagnare le persone nella costruzione di percorsi formativi e professionali coerenti con le vocazioni economiche e produttive del territorio.",
        "Le attività progettuali sono coordinate da ANTFORM APS – Ente del Terzo Settore, ente di formazione professionale accreditato dalla Regione Puglia e partner del progetto.",
      ],
    },
    "perchéNasce": {
      titolo: "Perché nasce",
      paragrafi: [
        "Otranto è una comunità caratterizzata da un importante patrimonio culturale, ambientale e produttivo. Turismo, agricoltura, artigianato, cultura e servizi rappresentano settori strategici capaci di generare sviluppo e nuove opportunità professionali.",
        "Il progetto nasce per sostenere l'occupabilità delle persone, facilitare l'accesso ai servizi di orientamento e valorizzare il capitale umano locale attraverso azioni innovative, inclusive e partecipative.",
      ],
    },
    aChiSiRivolge: {
      intro: "Il progetto è rivolto a persone di età compresa tra i 16 e i 65 anni, con particolare attenzione a:",
      categorie: [
        "giovani",
        "studenti",
        "NEET",
        "disoccupati",
        "inoccupati",
        "donne",
        "persone inattive",
        "immigrati",
        "soggetti fragili",
        "lavoratori in fase di riqualificazione professionale",
      ],
    },
    visione: {
      titolo: "Una comunità che orienta",
      paragrafi: [
        "Otranto in Movimento intende costruire un sistema territoriale stabile di orientamento capace di mettere in relazione cittadini, istituzioni, imprese, enti di formazione e realtà sociali.",
        "Attraverso un approccio partecipativo e integrato, il progetto accompagna le persone nelle scelte formative e professionali, favorendo una maggiore consapevolezza delle proprie competenze e delle opportunità presenti sul territorio.",
      ],
    },
    obiettivi: [
      "rafforzare il sistema locale di orientamento",
      "migliorare l'accesso alle informazioni e ai servizi",
      "favorire l'occupabilità",
      "accompagnare le transizioni scuola-lavoro",
      "promuovere l'inclusione sociale",
      "sostenere la partecipazione attiva dei cittadini",
      "valorizzare le risorse e le eccellenze territoriali",
    ],
    assetStrategici: [
      { titolo: "Turismo", icon: "mappin", desc: "Accoglienza, ospitalità, turismo esperienziale e sostenibile." },
      { titolo: "Cultura", icon: "landmark", desc: "Patrimonio storico, identitario e artistico." },
      { titolo: "Agricoltura", icon: "leaf", desc: "Produzioni tipiche, filiere agroalimentari e innovazione rurale." },
      { titolo: "Economia del Mare", icon: "waves", desc: "Risorse costiere, servizi e opportunità legate al mare." },
      { titolo: "Artigianato", icon: "tool", desc: "Competenze tradizionali e nuove forme di imprenditorialità." },
      { titolo: "Ambiente", icon: "tree", desc: "Valorizzazione sostenibile del patrimonio naturale." },
    ],
    coordinamento: {
      ente: "ANTFORM APS – Ente del Terzo Settore",
      descrizione: "ANTFORM APS coordina la realizzazione delle attività progettuali e garantisce il raccordo tra Comune, partner territoriali, destinatari e stakeholder.",
      "attività": [
        "coordinamento operativo del progetto",
        "gestione dell'Orientation Desk",
        "organizzazione degli Orientation Lab",
        "realizzazione dei Job Day",
        "coordinamento di Puglia Donna Partecipa",
        "organizzazione delle attività di Puglia Attrattiva #mareAsinistra",
        "animazione territoriale",
        "monitoraggio delle attività",
      ],
    },
  },

  orientationDesk: {
    intro: {
      titolo: "Lo sportello di orientamento",
      paragrafi: [
        "L'Orientation Desk rappresenta il punto di accesso ai servizi del progetto.",
        "Uno spazio dedicato all'ascolto, all'orientamento e all'accompagnamento personalizzato per sostenere le persone nelle proprie scelte formative e professionali.",
      ],
    },
    dove: {
      nome: "Community Library \"Le Fabbriche\"",
      indirizzo: "Piazza dell'Umanità Migrante, 73028 Otranto (LE)",
    },
    quando: [
      { giorno: "Mercoledì", orari: ["09:30 – 12:30", "16:00 – 19:00"] },
      { giorno: "Venerdì", orari: ["09:30 – 12:30", "16:00 – 19:00"] },
    ],
    servizi: [
      { nome: "Accoglienza e primo orientamento", icon: "chat", desc: "Analisi dei bisogni e definizione degli obiettivi." },
      { nome: "Bilancio delle competenze", icon: "clipboard", desc: "Valorizzazione delle esperienze e delle capacità personali." },
      { nome: "Piano di sviluppo professionale", icon: "chart", desc: "Costruzione di percorsi personalizzati." },
      { nome: "Ricerca attiva del lavoro", icon: "search", desc: "Supporto nella candidatura e nell'inserimento lavorativo." },
      { nome: "Accesso alla formazione", icon: "book", desc: "Orientamento verso corsi e percorsi di aggiornamento." },
      { nome: "Accompagnamento ai servizi", icon: "link", desc: "Connessione con enti, imprese e servizi territoriali." },
    ],
    cta: ["Prenota un colloquio", "Richiedi informazioni", "Contatta lo sportello"],
  },

  orientationLab: {
    titolo: "30 LABORATORI PER ORIENTARSI, CRESCERE E COSTRUIRE IL PROPRIO FUTURO",
    intro: "Gli Orientation Lab sono percorsi esperienziali della durata di 6 ore ciascuno. Attraverso metodologie attive e partecipative favoriscono l'apprendimento, la scoperta delle proprie competenze e la conoscenza delle opportunità offerte dal territorio.",
    aree: [
      {
        titolo: "AREA 1 – TURISMO E CULTURA",
        laboratori: [
          { nome: "Food Experience", icon: "fork", desc: "Esperienze e opportunità legate alla valorizzazione delle tradizioni enogastronomiche." },
          { nome: "Accoglienza e Ospitalità", icon: "heart", desc: "Le competenze richieste nel settore turistico." },
          { nome: "Storytelling del Patrimonio", icon: "scroll", desc: "Tecniche e strumenti per raccontare il territorio." },
          { nome: "Turismo Esperienziale", icon: "compass", desc: "Nuovi modelli di turismo e professioni emergenti." },
          { nome: "Turismo Culturale", icon: "museum", desc: "Valorizzazione del patrimonio storico e culturale." },
          { nome: "Eventi e Cultura", icon: "ticket", desc: "Ideazione e gestione di eventi culturali." },
        ],
      },
      {
        titolo: "AREA 2 – AGRICOLTURA E FILIERE LOCALI",
        laboratori: [
          { nome: "Dal Campo alla Tavola", icon: "wheat", desc: "Le opportunità delle filiere agroalimentari." },
          { nome: "Agricoltura e Innovazione", icon: "tractor", desc: "Tecnologie e sostenibilità." },
          { nome: "Comunicazione dei Prodotti Tipici", icon: "megaphone", desc: "Marketing e promozione delle eccellenze locali." },
          { nome: "Green Skills", icon: "sprout", desc: "Competenze per la transizione ecologica." },
          { nome: "Filiere Agroalimentari", icon: "supply", desc: "Conoscere il sistema produttivo locale." },
          { nome: "Economia Circolare e Territorio", icon: "recycle", desc: "Sviluppo sostenibile e nuove opportunità." },
        ],
      },
      {
        titolo: "AREA 3 – COMPETENZE DIGITALI",
        laboratori: [
          { nome: "Digital Storytelling", icon: "film", desc: "" },
          { nome: "Social Media per il Territorio", icon: "hashtag", desc: "" },
          { nome: "Marketing Territoriale", icon: "target", desc: "" },
          { nome: "Content Creation", icon: "pen", desc: "" },
          { nome: "Strumenti Digitali per il Lavoro", icon: "digital", desc: "" },
          { nome: "Personal Branding", icon: "badge", desc: "" },
        ],
      },
      {
        titolo: "AREA 4 – INCLUSIONE E CITTADINANZA ATTIVA",
        laboratori: [
          { nome: "Empowerment Personale", icon: "rocket", desc: "" },
          { nome: "Soft Skills per il Lavoro", icon: "puzzle", desc: "" },
          { nome: "Team Working", icon: "users", desc: "" },
          { nome: "Leadership", icon: "flag", desc: "" },
          { nome: "Comunità e Partecipazione", icon: "globe", desc: "" },
          { nome: "Orientarsi nel Territorio", icon: "map", desc: "" },
        ],
      },
      {
        titolo: "AREA 5 – PROFESSIONI DEL FUTURO",
        laboratori: [
          { nome: "Professioni del Turismo", icon: "mappin", desc: "" },
          { nome: "Professioni della Cultura", icon: "palette", desc: "" },
          { nome: "Professioni Green", icon: "leaf", desc: "" },
          { nome: "Autoimprenditorialità", icon: "bulb", desc: "" },
          { nome: "Cooperazione e Impresa Sociale", icon: "handshake", desc: "" },
          { nome: "Innovazione Territoriale", icon: "gear", desc: "" },
        ],
      },
    ],
  },

  jobDay: {
    titolo: "Incontro tra persone, imprese e opportunità",
    intro: "I Job Day rappresentano occasioni concrete di confronto tra cittadini, aziende, enti di formazione e servizi per il lavoro.",
    percorsi: [],
    "attività": [
      "recruiting",
      "presentazione aziende",
      "simulazione colloqui",
      "revisione curriculum vitae",
      "orientamento professionale",
      "networking",
    ],
    obiettivi: [
      "favorire l'incontro tra domanda e offerta di lavoro",
      "promuovere l'occupabilità",
      "facilitare l'accesso alle opportunità professionali",
      "rafforzare il dialogo tra territorio e sistema produttivo",
    ],
  },

  donnaPartecipa: {
    titolo: "Donne protagoniste del cambiamento",
    intro: "Un percorso dedicato alla valorizzazione del talento femminile e alla promozione delle pari opportunità.",
    tematiche: [
      "Leadership femminile",
      "Empowerment e autostima",
      "Conciliazione vita-lavoro",
      "Autoimprenditorialità",
      "Competenze digitali",
      "Occupabilità e crescita professionale",
    ],
    format: "Quattro giornate laboratoriali dedicate all'orientamento, alla partecipazione e alla crescita personale e professionale delle donne.",
  },

  mareASinistra: {
    titolo: "Otranto si racconta oltre i propri confini",
    intro: "Puglia Attrattiva #mareAsinistra è la linea di intervento dedicata alla promozione delle eccellenze territoriali, delle opportunità professionali e delle vocazioni produttive di Otranto. Attraverso eventi, fiere, manifestazioni e iniziative regionali, il progetto porta il territorio fuori dai propri confini per raccontarne identità, risorse e prospettive di sviluppo.",
    obiettivi: [
      "valorizzare il territorio",
      "promuovere le eccellenze locali",
      "favorire l'attrattività territoriale",
      "creare reti e connessioni",
      "promuovere nuove opportunità professionali",
    ],
    ambiti: [
      "Turismo",
      "Cultura",
      "Agricoltura",
      "Artigianato",
      "Economia del Mare",
      "Innovazione Sociale",
    ],
  },

  opportunita: {
    titolo: "Opportunità",
    voci: [
      { titolo: "Formazione", icon: "book", desc: "Corsi, laboratori e percorsi di aggiornamento." },
      { titolo: "Lavoro", icon: "briefcase", desc: "Offerte di lavoro e opportunità professionali." },
      { titolo: "Tirocini", icon: "badge", desc: "Esperienze formative e di inserimento lavorativo." },
      { titolo: "Autoimpresa", icon: "rocket", desc: "Bandi, incentivi e strumenti per avviare una nuova attività." },
      { titolo: "Opportunità per i Giovani", icon: "graduation", desc: "Percorsi dedicati ai giovani e ai NEET." },
      { titolo: "Opportunità per le Donne", icon: "women", desc: "Misure e iniziative dedicate all'occupazione femminile." },
    ],
  },

  contatti: {
    nomeProgetto: "OTRANTO IN MOVIMENTO",
    orientationDesk: {
      nome: "Community Library \"Le Fabbriche\"",
      indirizzo: "Piazza dell'Umanità Migrante, 73028 Otranto (LE)",
    },
    apertura: {
      giorni: "Mercoledì e Venerdì",
      orari: ["09:30 – 12:30", "16:00 – 19:00"],
    },
    soggettoBeneficiario: "Comune di Otranto",
    coordinamento: "ANTFORM APS – Ente del Terzo Settore",
    cup: "E31B25000680002",
  },

  footerIstituzionale: {
    testo: "Progetto finanziato nell'ambito dell'Avviso Pubblico \"PUNTI CARDINALI FOR WORK – Punti di orientamento per la formazione e il lavoro\", PR Puglia FESR-FSE+ 2021-2027 – Azione 5.1 Interventi per l'Occupazione.",
    soggettoBeneficiario: "Comune di Otranto",
    coordinamento: "ANTFORM APS – Ente del Terzo Settore",
    cup: "E31B25000680002",
  },
};

export default content;
