/**
 * Giovanni Trenta — Personal Portfolio & Showcase Website
 * Client-side interactivity: theme switcher, language switcher (IT/EN),
 * project filters, scroll spy, and clipboard utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initThemeToggle();
  initMobileMenu();
  initProjectFilters();
  initScrollSpy();
  initCopyEmail();
});

/* --------------------------------------------------------------------------
   Internationalization (i18n) Dictionary & Controller
   -------------------------------------------------------------------------- */
const translations = {
  it: {
    page_title: "Giovanni Trenta — AI-Driven Mobile Architect & Software Engineer",
    meta_desc: "Sito ufficiale e portfolio di Giovanni Trenta. Oltre 25 anni di ingegneria software: architetture enterprise, Mobile Architect (Kotlin, Flutter, Swift, macOS) e sviluppo accelerato da Intelligenza Artificiale.",
    brand_badge: "Mobile Architect",
    nav_about: "Chi Sono",
    nav_projects: "Progetti",
    nav_ai: "AI Strategy",
    nav_experience: "Esperienze",
    nav_skills: "Competenze",
    nav_contact: "Contatti",
    nav_contact_btn: "Contattami",
    hero_greeting: "Software Engineer & Mobile Architect",
    hero_subtitle: "AI-Driven Mobile Architect & Enterprise Specialist",
    hero_desc: "Oltre <strong>25 anni di ingegneria software</strong> con profonda esperienza e specializzazione in <strong>Android, Java, Kotlin e Flutter</strong>: da solide architetture enterprise banking e telecomunicazioni alla progettazione architetturale mobile e al rilascio di applicazioni ad alte prestazioni.",
    hero_ai_callout: "<strong>Metodologia AI-Augmented:</strong> Claude Code (Architettura & Prototipazione) • Gemini (UI & Logic) • Cursor (Continuous Review) • Custom AI Skills",
    hero_btn_projects: "Esplora i Miei Progetti",
    hero_btn_contact: "Rimaniamo in Contatto",
    badge_years: "25+ Anni Ingegneria IT",
    metric_years: "Anni nell'Ingegneria Software",
    metric_apps: "App Pubblicate (macOS & App Store)",
    metric_enterprise: "Soluzioni Enterprise Banking, PA & Telco",
    metric_ai: "AI-Augmented Development Workflow",
    about_tag: "Profilo Professionale",
    about_title: "Solide Radici Enterprise, Visione Mobile & AI",
    about_desc: "Un percorso completo iniziato nel 2000 con la progettazione di sistemi backend J2EE e proseguito per oltre una decade come Mobile Architect per banche, grandi realtà industriali e startup.",
    about_p1: "Mi chiamo <strong>Giovanni Trenta</strong>. Da oltre 25 anni sviluppo software con un unico obiettivo: creare soluzioni affidabili, performanti e piacevoli da utilizzare. La mia carriera si è formata sui grandi sistemi enterprise Java/J2EE per enti governativi e istituzioni (Camera dei Deputati, Telecom Italia, INAIL, Ancitel), per poi evolvere stabilmente verso il mondo mobile nativo e cross-platform. Oggi opero come <strong>Mobile Architect presso Digitouch S.p.A.</strong>, guidando la progettazione architetturale di soluzioni software ad alta complessità per primari istituti bancari, grandi operatori nei servizi postali e finanziari e aziende leader nei servizi telematici e IoT.",
    about_p2: "Nel mio percorso applico costantemente la metodologia <strong>AI-Augmented Engineering</strong>: impiego agenti intelligenti nella fase di analisi concettuale, studio architetturale, documentazione e refactoring, moltiplicando velocità e rigore metodologico. Questo spazio web personale raccoglie e documenta la mia passione ingegneristica: dalle applicazioni desktop e mobile rilasciate con successo su Apple App Store e Google Play Store ai progetti open-source disponibili su GitHub.",
    about_pill_loc: "📍 Roma, Italia",
    about_pill_role: "💼 Mobile Architect @ Digitouch",
    about_pill_apps: "🚀 Creatore di Klipzen, CleanMacJoe, JoeNote & SleepRec",
    about_pill_ai: "🤖 AI-Augmented Developer",
    projects_tag: "App & Progetti Personali",
    projects_title: "Applicazioni Mobile & Utility Desktop",
    projects_desc: "Una selezione di applicazioni native e utility indipendenti create da zero e rilasciate sui marketplace ufficiali e su GitHub.",
    filter_all: "Tutti i Progetti",
    filter_stores: "App Store & Google Play",
    filter_macos: "macOS Desktop & Utility",
    filter_opensource: "Open Source",
    project_badge_featured: "⭐ In Evidenza • iOS & Android",
    project_badge_macos_free: "macOS Nativo • Free",
    project_badge_macos_utility: "macOS Utility • Native",
    sleeprec_tagline: "Sleep Quality Monitor & Audio Analytics (App Store & Google Play)",
    sleeprec_desc: "Applicazione mobile pubblicata su entrambi gli store per monitorare la qualità del sonno con analisi acustica notturna, rilevamento dei rumori e statistiche avanzate per il riposo. Integrazione con smartwatch e Wear OS.",
    joenote_tagline: "Quick Notes, Reminders & Tasks (App Store & Google Play)",
    joenote_desc: "App di produttività per catturare istantaneamente pensieri, note di lavoro, checklist e promemoria intelligenti con notifiche programmabili. UI pulita, supporto multilingua, temi personalizzati e widget per schermata home.",
    klipzen_tagline: "Native macOS Video Editor (CapCut / iMovie Alternative)",
    klipzen_desc: "Video editor leggero e performante scritto nativamente per macOS in Swift e SwiftUI. Permette di tagliare video, applicare filtri, generare sottotitoli automatici con time ruler di precisione ed esportare nei formati ottimali per TikTok, Instagram Reels e YouTube.",
    cleanmacjoe_tagline: "Disk Cleaner & App Uninstaller Utility",
    cleanmacjoe_desc: "Utility nativa per macOS che permette di ripulire file temporanei, cache orfane e disinstallare applicazioni in modo completo senza lasciare residui nel file system. Interfaccia moderna con supporto Dark Mode integrato e basso consumo di risorse.",
    btn_repo: "Repository GitHub",
    ai_tag: "AI-Augmented Engineering",
    ai_title: "Come l'AI Potenzia il Mio Processo di Sviluppo",
    ai_desc: "L'Intelligenza Artificiale non sostituisce l'esperienza ingegneristica: la amplifica. Integro modelli e agenti avanzati in ogni fase del ciclo di vita del software.",
    ai_step1_num: "01 / ARCHITETTURA",
    ai_step1_desc: "Analisi profonda di sistemi estesi, refactoring architetturale di classi complesse, verifica di pattern (MVVM, Clean Architecture, BLoC) e generazione di documentazione tecnica ad alta coerenza.",
    ai_step2_desc: "Generazione rapida di componenti visivi, interfacce utente reattive e analisi multimodale per verificare layout, accessibilità e corrispondenza alle linee guida Apple HIG e Android Material 3.",
    ai_step3_num: "03 / CONTINUOUS CODING",
    ai_step3_desc: "Pair programming contestuale a livello di intero workspace, generazione immediata di test unitari, individuazione tempestiva di edge case e refactoring reattivo in tempo reale durante la scrittura.",
    ai_step4_num: "04 / AUTOMATION",
    ai_step4_desc: "Creazione di skill su misura e automazioni agentiche per gestire build, pipeline di rilascio, auditing di sicurezza e sincronizzazione delle modifiche sui repository GitHub.",
    exp_tag: "Percorso Professionale",
    exp_title: "Esperienza Lavorativa",
    exp_desc: "Oltre due decenni di impegno sul campo: dai progetti enterprise della Pubblica Amministrazione e telecomunicazioni fino alla direzione architetturale mobile.",
    exp1_role: "Mobile Architect",
    exp1_period: "2020 – Presente",
    exp1_company: "Digitouch S.p.A. — Roma",
    exp1_text: "Nel mio ruolo di Mobile Architect presso Digitouch S.p.A., guido la definizione e l'evoluzione dell'architettura software su commesse enterprise ad alta criticità: pattern architetturali avanzati (Clean Architecture, MVVM, MVI), sviluppo nativo Android con Jetpack components, migrazioni strategiche a Kotlin moderno e soluzioni cross-platform con Flutter (BLoC, Riverpod). Presidio dei requisiti di crittografia, sicurezza applicativa, standard bancari e allineamento architetturale secondo metodologie Agile Scrum.",
    exp2_role: "Android Developer",
    exp2_period: "2018 – 2020",
    exp2_company: "Insoore (Startup Insurtech) — Roma",
    exp2_text: "Architettura e sviluppo completo dell'app Android per la perizia e ispezione dei veicoli assicurati. Pattern MVVM, networking reattivo con Retrofit, CameraView personalizzata per l'acquisizione certificata delle foto, elaborazione immagini con Glide, geolocalizzazione anti-frode e streaming video in tempo reale con WebRTC. Reingegnerizzazione e migrazione nativa a Kotlin moderno.",
    exp3_role: "Senior Mobile Developer",
    exp3_period: "2014 – 2018",
    exp3_company: "Consulenze IT Enterprise — Roma",
    exp3_text: "Consulenza e sviluppo applicativo mobile per grandi committenti nei settori energia e telecomunicazioni. Realizzazione di app native per iOS (Swift) e Android (Java/Kotlin), affiancate dalle prime adozioni di framework cross-platform (Flutter), curando l'intero ciclo di pubblicazione su Apple App Store e Google Play Store.",
    exp4_role: "Senior Java & Software Architect",
    exp4_period: "2000 – 2014",
    exp4_company: "Enterprise IT & Pubblica Amministrazione — Roma",
    exp4_text: "14 anni di ingegneria software enterprise per grandi committenti nazionali: Telecom Italia, INAIL, Ancitel e la Camera dei Deputati (dove ho sviluppato il sistema software di conteggio dei dibattiti parlamentari con Spring MVC, AOP, Hibernate, EJB 3.0, Oracle e SQL Server). Ruoli di progettazione architetturale, design di database relazionali e architetture distribuite mission-critical.",
    exp5_role: "Perito Informatico",
    exp5_period: "Formazione Tecnica",
    exp5_company: "Istruzione Tecnica Superiore — Roma",
    exp5_text: "Solide basi formative su algoritmi, strutture dati, linguaggi di programmazione, reti di telecomunicazione e gestione dei database, arricchite da 25 anni di formazione continua e adozione pionieristica delle tecnologie emergenti.",
    skills_tag: "Competenze Tecniche",
    skills_title: "Tech Stack & Specializzazioni",
    skills_desc: "Un ventaglio di competenze maturate sul campo, che spaziano dal mobile moderno ai sistemi backend enterprise e agli strumenti AI di ultima generazione.",
    skill_cat4: "Metodologie & Delivery",
    contact_tag: "Contatti & Networking",
    contact_title: "Rimaniamo in Contatto",
    contact_desc: "Questo sito rappresenta il mio spazio personale per condividere progetti indie, utility e passione per l'ingegneria software. Sono sempre aperto al <strong>confronto tecnico</strong>, al networking con altri sviluppatori e architetti software, e a discutere di innovazione mobile, architetture moderne e workflow AI.",
    contact_email_label: "Email Diretta",
    contact_loc_label: "Posizione",
    contact_loc_value: "Roma, Italia",
    contact_quick_title: "Canali Diretti",
    contact_quick_desc: "Puoi scrivermi per informazioni o feedback sulle mie app, copiare il mio indirizzo email negli appunti oppure connetterti sul mio profilo LinkedIn.",
    btn_send_email: "Invia una Email",
    btn_copy_email: "Copia Email negli Appunti",
    btn_linkedin: "Connettiti su LinkedIn",
    toast_email_copied: "Email copiata negli appunti!",
    footer_rights: "Tutti i diritti riservati.",
    footer_hosted: "Sito ospitato su GitHub Pages e reindirizzato al dominio"
  },
  en: {
    page_title: "Giovanni Trenta — AI-Driven Mobile Architect & Software Engineer",
    meta_desc: "Official website and portfolio of Giovanni Trenta. Over 25 years of software engineering: enterprise architectures, Mobile Architect (Kotlin, Flutter, Swift, macOS), and AI-augmented development.",
    brand_badge: "Mobile Architect",
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_ai: "AI Strategy",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_contact_btn: "Contact Me",
    hero_greeting: "Software Engineer & Mobile Architect",
    hero_subtitle: "AI-Driven Mobile Architect & Enterprise Specialist",
    hero_desc: "Over <strong>25 years of software engineering</strong> with deep expertise and specialization in <strong>Android, Java, Kotlin, and Flutter</strong>: from solid enterprise banking and telecom architectures to advanced mobile architecture and high-performance app releases.",
    hero_ai_callout: "<strong>AI-Augmented Methodology:</strong> Claude Code (Architecture & Prototyping) • Gemini (UI & Logic) • Cursor (Continuous Review) • Custom AI Skills",
    hero_btn_projects: "Explore My Projects",
    hero_btn_contact: "Let's Connect",
    badge_years: "25+ Years IT Engineering",
    metric_years: "Years in Software Engineering",
    metric_apps: "Published Apps (macOS & App Stores)",
    metric_enterprise: "Enterprise Banking, Gov & Telco Solutions",
    metric_ai: "AI-Augmented Development Workflow",
    about_tag: "Professional Profile",
    about_title: "Solid Enterprise Roots, Mobile & AI Vision",
    about_desc: "A comprehensive career that started in 2000 designing J2EE backend systems, evolving into more than a decade as Mobile Architect for banks, large enterprises, and startups.",
    about_p1: "My name is <strong>Giovanni Trenta</strong>. For over 25 years, I have been engineering software with a single focus: creating reliable, performant, and delightful solutions. My career was shaped by large-scale enterprise Java/J2EE systems for government institutions and national telecom (Chamber of Deputies, Telecom Italia, INAIL, Ancitel), later evolving into native and cross-platform mobile engineering. Today, I serve as <strong>Mobile Architect at Digitouch S.p.A.</strong>, leading the architectural design and strategic engineering of mission-critical mobile solutions for tier-one banking institutions, national postal/financial services, and global IoT telematics leaders.",
    about_p2: "I continuously leverage <strong>AI-Augmented Engineering</strong> methodologies: utilizing intelligent agentic workflows across architectural analysis, technical research, documentation, and prototyping. This personal website serves as a showcase for my engineering passion: featuring native desktop and mobile applications published on the Apple App Store, Google Play Store, and open-source projects on GitHub.",
    about_pill_loc: "📍 Rome, Italy",
    about_pill_role: "💼 Mobile Architect @ Digitouch",
    about_pill_apps: "🚀 Creator of Klipzen, CleanMacJoe, JoeNote & SleepRec",
    about_pill_ai: "🤖 AI-Augmented Developer",
    projects_tag: "Apps & Personal Projects",
    projects_title: "Mobile Applications & Desktop Utilities",
    projects_desc: "A curated selection of native apps and standalone utilities built from scratch and released on official marketplaces and GitHub.",
    filter_all: "All Projects",
    filter_stores: "App Store & Google Play",
    filter_macos: "macOS Desktop & Utility",
    filter_opensource: "Open Source",
    project_badge_featured: "⭐ Featured • iOS & Android",
    project_badge_macos_free: "Native macOS • Free",
    project_badge_macos_utility: "macOS Utility • Native",
    sleeprec_tagline: "Sleep Quality Monitor & Audio Analytics (App Store & Google Play)",
    sleeprec_desc: "Mobile app published on both stores to monitor sleep quality with night audio analysis, noise tracking, and advanced statistical reports for restorative sleep. Features smartwatch and Wear OS integration.",
    joenote_tagline: "Quick Notes, Reminders & Tasks (App Store & Google Play)",
    joenote_desc: "Productivity app designed to instantly capture thoughts, work notes, checklists, and smart reminders with customizable notifications. Clean UI, multi-language support, custom themes, and home screen widgets.",
    klipzen_tagline: "Native macOS Video Editor (CapCut / iMovie Alternative)",
    klipzen_desc: "Lightweight and performant video editor built natively for macOS in Swift and SwiftUI. Trim clips, apply filters, generate auto subtitles with precision time ruler, and export optimized for TikTok, Instagram Reels, and YouTube.",
    cleanmacjoe_tagline: "Disk Cleaner & App Uninstaller Utility",
    cleanmacjoe_desc: "Native macOS utility to clean temporary files, orphan caches, and completely uninstall applications without leaving residual files in the system. Modern UI with integrated Dark Mode and low resource footprint.",
    btn_repo: "GitHub Repository",
    ai_tag: "AI-Augmented Engineering",
    ai_title: "How AI Empowers My Development Process",
    ai_desc: "Artificial Intelligence does not replace engineering expertise: it amplifies it. I integrate advanced models and agents across every phase of the software development lifecycle.",
    ai_step1_num: "01 / ARCHITECTURE",
    ai_step1_desc: "In-depth analysis of large codebases, architectural refactoring of complex modules, design pattern validation (MVVM, Clean Architecture, BLoC), and coherent technical documentation generation.",
    ai_step2_desc: "Rapid generation of visual components, reactive UI, and multimodal analysis to ensure layout fidelity, accessibility, and alignment with Apple HIG and Android Material 3.",
    ai_step3_num: "03 / CONTINUOUS CODING",
    ai_step3_desc: "Workspace-level contextual pair programming, instant unit test generation, early edge case detection, and real-time reactive refactoring during development.",
    ai_step4_num: "04 / AUTOMATION",
    ai_step4_desc: "Custom skills and agentic automation scripts to orchestrate builds, release pipelines, security auditing, and automated synchronization across GitHub repositories.",
    exp_tag: "Career Journey",
    exp_title: "Work Experience",
    exp_desc: "Over two decades of hands-on expertise: from public sector and telecom enterprise projects to advanced mobile software architecture.",
    exp1_role: "Mobile Architect",
    exp1_period: "2020 – Present",
    exp1_company: "Digitouch S.p.A. — Rome",
    exp1_text: "In my role as Mobile Architect at Digitouch S.p.A., I drive software architecture definition and technical strategy for mission-critical enterprise accounts: advanced patterns (Clean Architecture, MVVM, MVI), native Android development with Jetpack components, strategic Kotlin migrations, and cross-platform Flutter solutions (BLoC, Riverpod). Enforcing cryptography, application security, banking compliance standards, and architectural alignment within Agile Scrum workflows.",
    exp2_role: "Android Developer",
    exp2_period: "2018 – 2020",
    exp2_company: "Insoore (Insurtech Startup) — Rome",
    exp2_text: "End-to-end architecture and development of the Android app for vehicle insurance inspection and appraisal. MVVM pattern, reactive networking with Retrofit, custom CameraView for verified image capture, Glide image processing, anti-fraud GPS verification, and real-time video streaming with WebRTC. Modernization and native migration to modern Kotlin.",
    exp3_role: "Senior Mobile Developer",
    exp3_period: "2014 – 2018",
    exp3_company: "Enterprise IT Consulting — Rome",
    exp3_text: "Mobile consulting and engineering for premier enterprise clients across energy and telecommunications sectors. Built native iOS (Swift) and Android (Java/Kotlin) applications alongside early cross-platform Flutter adoption, managing end-to-end releases on Apple App Store and Google Play Store.",
    exp4_role: "Senior Java & Software Architect",
    exp4_period: "2000 – 2014",
    exp4_company: "Enterprise IT & Public Sector — Rome",
    exp4_text: "14 years of enterprise software engineering for premier national institutions: Telecom Italia, INAIL, Ancitel, and the Chamber of Deputies (where I built the parliamentary debate tracking system using Spring MVC, AOP, Hibernate, EJB 3.0, Oracle, and SQL Server). Architectural design roles, relational database modeling, and mission-critical distributed architectures.",
    exp5_role: "Computer Science Diploma / IT Expert",
    exp5_period: "Technical Education",
    exp5_company: "Higher Technical Institute — Rome",
    exp5_text: "Strong foundations in algorithms, data structures, programming languages, telecommunications, and database management, reinforced by 25 years of continuous learning and early adoption of emergent technologies.",
    skills_tag: "Technical Skills",
    skills_title: "Tech Stack & Specializations",
    skills_desc: "A proven spectrum of hands-on expertise spanning modern mobile engineering, enterprise backends, and next-generation AI tools.",
    skill_cat4: "Methodologies & Delivery",
    contact_tag: "Contact & Networking",
    contact_title: "Let's Connect",
    contact_desc: "This website is my personal space to showcase indie projects, macOS utilities, and my passion for software engineering. I am always open to <strong>technical discussions</strong>, networking with fellow developers and software architects, and sharing insights on mobile architectures and AI workflows.",
    contact_email_label: "Direct Email",
    contact_loc_label: "Location",
    contact_loc_value: "Rome, Italy",
    contact_quick_title: "Direct Channels",
    contact_quick_desc: "Feel free to reach out for feedback or questions on my apps, copy my email to your clipboard, or connect on my LinkedIn profile.",
    btn_send_email: "Send an Email",
    btn_copy_email: "Copy Email to Clipboard",
    btn_linkedin: "Connect on LinkedIn",
    toast_email_copied: "Email copied to clipboard!",
    footer_rights: "All rights reserved.",
    footer_hosted: "Website hosted on GitHub Pages and routed to domain"
  }
};

let currentLang = 'it';

function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  const savedLang = langParam || localStorage.getItem('gt_lang') || 
    (navigator.language && navigator.language.startsWith('it') ? 'it' : 'en');
  
  setLanguage(savedLang, false);

  const itBtns = document.querySelectorAll('[data-lang-set="it"]');
  const enBtns = document.querySelectorAll('[data-lang-set="en"]');

  itBtns.forEach(btn => btn.addEventListener('click', () => setLanguage('it', true)));
  enBtns.forEach(btn => btn.addEventListener('click', () => setLanguage('en', true)));
}

function setLanguage(lang, updateUrl = true) {
  if (!translations[lang]) lang = 'it';
  currentLang = lang;
  localStorage.setItem('gt_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  }

  // Update switcher buttons active state
  document.querySelectorAll('[data-lang-set]').forEach(btn => {
    if (btn.getAttribute('data-lang-set') === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Update document title and description
  if (translations[lang].page_title) {
    document.title = translations[lang].page_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang].meta_desc) {
    metaDesc.setAttribute('content', translations[lang].meta_desc);
  }

  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
}

/* --------------------------------------------------------------------------
   Theme Switcher (Dark / Light) with LocalStorage & OS Preference
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('gt_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const newTheme = active === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('gt_theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = theme === 'light' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    toggleBtn.setAttribute('aria-label', theme === 'light' ? 'Toggle theme' : 'Toggle theme');
  }
}

/* --------------------------------------------------------------------------
   Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/* --------------------------------------------------------------------------
   Project Filtering (Tabs)
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Spy Navigation Highlighting
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   Copy Email to Clipboard with Toast Notification
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('copy-toast');
  const emailStr = 'giovanni.trenta78@gmail.com';

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailStr);
      showToast(translations[currentLang].toast_email_copied);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = emailStr;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast(translations[currentLang].toast_email_copied);
    }
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}
