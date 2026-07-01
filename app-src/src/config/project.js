/* OTRANTO IN MOVIMENTO — identità + tema + config tecnica.
   Contenuti testuali in ./content.js. */

export const project = {
  slug: 'otranto',
  nomeProgetto: 'Otranto in Movimento',
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
    favicon: '/favicon.svg',
  },

  // Form CTA via endpoint PHP/SMTP in casa (/contact.php).
  // Credenziali SMTP impostate come variabili d'ambiente in Plesk (non nel repo).
  form: {
    provider: 'php',
    endpoint: '/contact.php',
  },
}

export default project
