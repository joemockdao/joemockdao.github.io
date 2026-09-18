# Giovanni Trenta — Personal Portfolio & Website

Official personal website and developer portfolio for **Giovanni Trenta** (AI-Driven Lead Mobile Developer & Software Architect), hosted on GitHub Pages and routed to [giovanni.trenta.it](https://giovanni.trenta.it).

---

## 🚀 Progetti in Evidenza

- **[Klipzen](https://github.com/joemockdao/Klipzen)**: Native macOS Video Editor (Swift, SwiftUI, AVFoundation)
- **[CleanMacJoe](https://github.com/joemockdao/CleanMacJoe)**: Disk Cleaner & App Uninstaller Utility per macOS
- **[JoeNote](https://apps.apple.com/it/app/joenote/id6738133424)**: Minimalist Notes app on Apple App Store
- **[SleepRec](https://apps.apple.com/it/app/sleeprec/id1528754113)**: Sleep Quality Monitor on Apple App Store
- **Enterprise Solutions**: Mobile banking & IoT architectures (BNL, Octo Telematics, Poste Italiane)

---

## 🛠️ Stack Tecnologico del Sito

- **HTML5 Semantico**: Struttura accessibile, OpenGraph meta tags, SEO-friendly.
- **Modern CSS3**: Glassmorphism (`backdrop-filter`), CSS variables, gradienti dinamici, responsive con `clamp()` e CSS Grid.
- **Vanilla JavaScript**: Zero dipendenze esterne, caricamento ultra-rapido (100 Lighthouse Performance), Dark/Light theme switcher persistente in `localStorage`, filtri interattivi, scroll-spy e copy-to-clipboard.
- **Hosting**: GitHub Pages con CNAME custom domain (`giovanni.trenta.it`).

---

## 🌐 Configurazione Dominio DNS (giovanni.trenta.it)

Per puntare il dominio acquistato `giovanni.trenta.it` a questo spazio GitHub Pages:

1. Accedere al pannello DNS del registrar dove è gestito il dominio `trenta.it`.
2. Aggiungere / modificare il record **CNAME**:
   - **Host / Nome**: `giovanni` (o `giovanni.trenta.it` in base al provider)
   - **Tipo**: `CNAME`
   - **Valore / Destinazione**: `joemockdao.github.io.`
   - **TTL**: Automatico (o 3600)
3. Il file `CNAME` è già presente nella radice di questo repository con il valore `giovanni.trenta.it`.
4. Una volta propagati i DNS, GitHub Pages abiliterà automaticamente il certificato SSL/HTTPS via Let's Encrypt (opzione *Enforce HTTPS* nei Settings del repository).

---

## 💻 Anteprima Locale

Per avviare un server locale:

```bash
python3 -m http.server 8000
# Apri http://localhost:8000 nel browser
```

---

© 2026 Giovanni Trenta. All rights reserved.
