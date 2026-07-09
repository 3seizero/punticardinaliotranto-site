/* OTRANTO IN MOVIMENTO — identità + tema + config tecnica.
   Contenuti testuali in ./content.js. */

export const project = {
  slug: 'otranto',
  nomeProgetto: 'Otranto in Movimento',
  // Nome completo con riferimento alla webapp: usato come <title>, mittente
  // delle email e negli oggetti (richiesta Carlo: sempre riconoscibile la provenienza)
  nomeCompleto: 'Otranto in Movimento - Punti Cardinali for Work | Otranto',
  riferimento: 'Punti Cardinali for Work | Otranto',
  sottotitolo: 'Cultura, Agricoltura e Turismo per Nuove Opportunità Lavorative',
  comune: 'Otranto',
  cup: 'E31B25000680002',
  dominio: 'punticardinaliotranto.antform.it',
  shape: 'circle', // shape decorativa tono su tono (palette): Otranto = cerchio

  // Palette reale (fonte: _brand/otranto/palette.json)
  theme: {
    '--c-primary': '#182E4E',
    '--c-primary-dark': '#101F35',
    '--c-secondary': '#2E7D7B',
    '--c-accent': '#F2A93B',
    '--c-bg': '#FFFFFF',
    '--c-bg-alt': '#EEF1F6',
    '--c-text': '#16284B',
    '--c-text-soft': '#54616E',
    '--c-border': '#DCE3EC',
    '--c-on-primary': '#FFFFFF',
  },

  assets: {
    logosHeader: '/brand/logos-header.png', // striscia loghi istituzionali (in cima) — placeholder, Carlo prepara il blocco definitivo
    logoHeader: '/brand/logo.png',           // logo progetto "Otranto in Movimento"
    hero: '', // hero su navy pieno (la slide brandizzata faceva doppio testo). Foto hero dedicata: in attesa da Carlo.
    logosFooter: '', // striscia loghi footer rimossa (richiesta Carlo)
    favicon: '/favicon-96x96.png',
    icon: '/appicon-192.png',
  },

  // iubenda — informativa privacy & cookie policy (codice 75569688 condiviso PCFW).
  // Il banner è in index.html; questi URL alimentano footer e checkbox dei form.
  privacy: {
    policyUrl: 'https://www.iubenda.com/privacy-policy/75569688',
    cookieUrl: 'https://www.iubenda.com/privacy-policy/75569688/cookie-policy',
  },

  // Form CTA via endpoint PHP/SMTP in casa (/contact.php).
  // Credenziali SMTP impostate come variabili d'ambiente in Plesk (non nel repo).
  form: {
    provider: 'php',
    endpoint: '/contact.php',
  },
}

export default project
