# Giovanni Trenta — Personal Portfolio & Website

Official personal website and developer portfolio for **Giovanni Trenta** (Mobile Architect &amp; Software Engineer), hosted on GitHub Pages and routed to [giovannitrenta.it](https://giovannitrenta.it).

---

## 🚀 Progetti in Evidenza

- **[SleepRec](https://apps.apple.com/it/app/sleeprec/id1528754113)**: Sleep Quality Monitor & Audio Analytics (Disponibile su [App Store](https://apps.apple.com/it/app/sleeprec/id1528754113) e [Google Play](https://play.google.com/store/apps/details?id=it.joe.sleeprec&pcampaignid=web_share))
- **[JoeNote](https://apps.apple.com/it/app/joenote/id6738133424)**: Smart Notes, Reminders & Task App (Disponibile su [App Store](https://apps.apple.com/it/app/joenote/id6738133424) e [Google Play](https://play.google.com/store/apps/details?id=it.note.joeNote&pcampaignid=web_share))
- **[Klipzen](https://github.com/joemockdao/Klipzen)**: Native macOS Video Editor (Swift, SwiftUI, AVFoundation)
- **[CleanMacJoe](https://github.com/joemockdao/CleanMacJoe)**: Disk Cleaner & App Uninstaller Utility per macOS

---

## 🛠️ Stack Tecnologico del Sito

- **HTML5 Semantico**: Struttura accessibile, OpenGraph meta tags, SEO-friendly.
- **Modern CSS3**: Glassmorphism (`backdrop-filter`), CSS variables, gradienti dinamici, responsive con `clamp()` e CSS Grid.
- **Vanilla JavaScript**: Zero dipendenze esterne, caricamento ultra-rapido (100 Lighthouse Performance), supporto bilingue (IT/EN) con rilevamento e sincronizzazione URL/localStorage, Dark/Light theme switcher persistente, filtri interattivi, scroll-spy e copy-to-clipboard.
- **Hosting**: GitHub Pages con CNAME custom domain (`giovannitrenta.it`).

---

## 🌐 Configurazione Dominio DNS (giovannitrenta.it)

Per puntare il dominio registrato `giovannitrenta.it` a questo spazio GitHub Pages:

1. Accedere al pannello DNS di OVH per `giovannitrenta.it`.
2. Impostare i record **A** per il dominio apex (`giovannitrenta.it`):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Aggiungere il record **CNAME** per il sottodominio `www`:
   - **Host / Sottodominio**: `www`
   - **Tipo**: `CNAME`
   - **Target**: `joemockdao.github.io.`
4. Il file `CNAME` alla radice della repository contiene `giovannitrenta.it`.
5. Una volta propagati i DNS, GitHub Pages abiliterà automaticamente il certificato SSL/HTTPS via Let's Encrypt (opzione *Enforce HTTPS* nei Settings del repository).

---

## 💻 Anteprima Locale

Per avviare un server locale:

```bash
python3 -m http.server 8080
# Apri http://localhost:8080 nel browser
```

---

© 2026 Giovanni Trenta. All rights reserved.
