const copy = {
  it: {
    title: 'Giovanni Trenta — Mobile Architect & Software Engineer',
    description: 'Giovanni Trenta, Mobile Architect e Software Engineer specializzato in Android, Kotlin, Flutter e architetture enterprise.',
    skip: 'Vai al contenuto', nav_projects: 'Progetti', nav_experience: 'Esperienze', nav_contact: 'Contatti', open_menu: 'Apri menu', close_menu: 'Chiudi menu',
    hero_eyebrow: 'Software Engineer & Mobile Architect', hero_role: 'Mobile Architect & Enterprise Specialist',
    hero_description: 'Oltre <strong>25 anni di ingegneria software</strong> con profonda esperienza e specializzazione in <strong>Android, Java, Kotlin e Flutter</strong>: da solide architetture enterprise banking e telecomunicazioni alla progettazione architetturale mobile e al rilascio di applicazioni ad alte prestazioni.',
    ai_intro: 'Integro strumenti AI nell’analisi, nella prototipazione e nello sviluppo dei miei progetti personali.', ai_claude: 'Architettura e prototipazione', ai_cursor: 'Revisione continua e pair programming', ai_gemini: 'Interfacce utente e logica applicativa', ai_codex: 'Sviluppo, refactoring e verifica del codice',
    hero_projects: 'Esplora i progetti ↘', hero_contact: 'Contatti', badge_years: '25+ Anni Ingegneria IT',
    section_projects: 'Progetti', projects_title: 'Progetti personali', projects_lead: 'Applicazioni che progetto, sviluppo e pubblico.',
    sleeprec_desc: 'Analisi acustica notturna, rilevamento dei rumori e statistiche sul sonno.', sleeprec_community_link: 'Community ↗', joenote_desc: 'Note, checklist e promemoria con notifiche programmabili, temi e widget.', klipzen_desc: 'Montaggio video, filtri e sottotitoli automatici. Esportazione per social e YouTube.', cleanmacjoe_desc: 'Pulizia di cache e file temporanei. Disinstallazione completa delle applicazioni.', native_utility: 'Utility nativa',
    section_experience: 'Esperienze', experience_title: 'Esperienze lavorative', current_role: 'Ruolo attuale', exp1_period: '2020 — Presente', exp1_role: 'Mobile Architect', exp1_company: 'Digitouch S.p.A.', exp1_bullet1: 'Definizione ed evoluzione di architetture mobile per commesse enterprise.', exp1_bullet2: 'Android nativo, migrazioni Kotlin, Flutter e sicurezza applicativa.', exp2_period: '2018 — 2020', exp2_role: 'Android Developer', exp2_company: 'Insoore', exp2_bullet1: 'Sviluppo dell’app Android per ispezioni assicurative: acquisizione foto, geolocalizzazione e streaming video.', exp3_period: '2014 — 2018', exp3_role: 'Senior Mobile Developer', exp3_company: 'Consulenze IT Enterprise', exp3_detail: 'Sviluppo di applicazioni native iOS e Android e prime soluzioni cross-platform.', exp4_period: '2000 — 2014', exp4_role: 'Senior Java & Software Architect', exp4_company: 'Enterprise IT & Pubblica Amministrazione', exp4_detail: 'Architetture distribuite mission-critical, progettazione applicativa e database relazionali.',
    section_contact: 'Contatti', contact_title: 'Restiamo in contatto.', contact_lead: 'Confronto tecnico, networking e feedback sulle mie app.', location: 'Roma, Italia'
  },
  en: {
    title: 'Giovanni Trenta — Mobile Architect & Software Engineer',
    description: 'Giovanni Trenta, Mobile Architect and Software Engineer specializing in Android, Kotlin, Flutter, and enterprise architecture.',
    skip: 'Skip to content', nav_projects: 'Projects', nav_experience: 'Experience', nav_contact: 'Contact', open_menu: 'Open menu', close_menu: 'Close menu',
    hero_eyebrow: 'Software Engineer & Mobile Architect', hero_role: 'Mobile Architect & Enterprise Specialist',
    hero_description: 'Over <strong>25 years of software engineering</strong> with deep expertise in <strong>Android, Java, Kotlin, and Flutter</strong>: from enterprise banking and telecom architecture to advanced mobile design and high-performance app releases.',
    ai_intro: 'I integrate AI tools into analysis, prototyping, and the development of my personal projects.', ai_claude: 'Architecture and prototyping', ai_cursor: 'Continuous review and pair programming', ai_gemini: 'User interfaces and application logic', ai_codex: 'Development, refactoring, and code verification',
    hero_projects: 'Explore projects ↘', hero_contact: 'Contact', badge_years: '25+ Years in IT Engineering',
    section_projects: 'Projects', projects_title: 'Personal projects', projects_lead: 'Applications I design, build, and publish.',
    sleeprec_desc: 'Night-time audio analysis, noise detection, and sleep statistics.', sleeprec_community_link: 'Community ↗', joenote_desc: 'Notes, checklists, and reminders with scheduled notifications, themes, and widgets.', klipzen_desc: 'Video editing, filters, and automatic subtitles. Export for social media and YouTube.', cleanmacjoe_desc: 'Cache and temporary-file cleanup. Complete application uninstallation.', native_utility: 'Native utility',
    section_experience: 'Experience', experience_title: 'Work experience', current_role: 'Current role', exp1_period: '2020 — Present', exp1_role: 'Mobile Architect', exp1_company: 'Digitouch S.p.A.', exp1_bullet1: 'Definition and evolution of mobile architecture for enterprise engagements.', exp1_bullet2: 'Native Android, Kotlin migrations, Flutter, and application security.', exp2_period: '2018 — 2020', exp2_role: 'Android Developer', exp2_company: 'Insoore', exp2_bullet1: 'Android app development for insurance inspections: photo capture, geolocation, and video streaming.', exp3_period: '2014 — 2018', exp3_role: 'Senior Mobile Developer', exp3_company: 'Enterprise IT Consulting', exp3_detail: 'Native iOS and Android application development and early cross-platform solutions.', exp4_period: '2000 — 2014', exp4_role: 'Senior Java & Software Architect', exp4_company: 'Enterprise IT & Public Sector', exp4_detail: 'Mission-critical distributed architecture, application design, and relational databases.',
    section_contact: 'Contact', contact_title: 'Let’s stay in touch.', contact_lead: 'Technical exchange, networking, and feedback on my apps.', location: 'Rome, Italy'
  }
};

const languageKey = 'gt_portfolio_language';

function setLanguage(language) {
  const dictionary = copy[language] || copy.it;
  document.documentElement.lang = language;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').setAttribute('content', dictionary.description);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute('aria-label', dictionary[element.getAttribute('aria-expanded') === 'true' ? 'close_menu' : key]);
  });
  document.querySelectorAll('.language-btn').forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  localStorage.setItem(languageKey, language);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  history.replaceState(null, '', url);
}

function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const preferred = params.get('lang') || localStorage.getItem(languageKey) || 'en';
  setLanguage(copy[preferred] ? preferred : 'it');
  document.querySelectorAll('.language-btn').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
}

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const update = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    const language = document.documentElement.lang;
    toggle.setAttribute('aria-label', copy[language][open ? 'close_menu' : 'open_menu']);
  };
  toggle.addEventListener('click', () => update(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => update(false)));
}

function initExperiences() {
  document.querySelectorAll('.experience').forEach((experience) => {
    experience.addEventListener('toggle', () => {
      if (!experience.open) return;
      document.querySelectorAll('.experience').forEach((other) => {
        if (other !== experience && !other.classList.contains('current')) other.open = false;
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initLanguage();
  initMenu();
  initExperiences();
});
