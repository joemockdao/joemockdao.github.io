# 📌 Storico del Progetto & Guida Operativa
## Sito Web Personale — Giovanni Trenta (giovannitrenta.it)

*Documento creato il: 18 Settembre 2026*  
*Autore: Giovanni Trenta / joemockdao*  
*Posizione del progetto:* `/Users/giovannitrenta/cv_AI/joemockdao.github.io`

---

## 1. Obiettivo del Progetto
Creazione e manutenzione del sito web personale e portfolio pubblico per **Giovanni Trenta** (*Mobile Architect & Software Engineer* con 25+ anni di esperienza IT). Il sito è concepito per presentare il proprio profilo professionale, evidenziare le app pubbliche su Apple App Store e Google Play Store, illustrare i progetti nativi macOS e le architetture enterprise, ed essere ospitato su **GitHub Pages** con reindirizzamento al dominio personalizzato **`giovannitrenta.it`**.

---

## 2. Configurazione Infrastruttura & Hosting

### Repository GitHub
- **Repository pubblico:** [`https://github.com/joemockdao/joemockdao.github.io`](https://github.com/joemockdao/joemockdao.github.io)
- **Account:** `joemockdao`
- **Branch di pubblicazione:** `main` (radice `/`)
- **Tipologia:** GitHub Pages User Site (`<username>.github.io`)

### Configurazione Dominio Personalizzato (CNAME & DNS)
- **File CNAME:** presente nella radice del repository con valore:
  ```
  giovannitrenta.it
  ```
- **Configurazione DNS presso il registrar OVH per il dominio `giovannitrenta.it`:**
  - **Record A per l'apex domain (`giovannitrenta.it`):**
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
  - **Record CNAME per il sottodominio `www`:**
    - **Host / Sottodominio:** `www`
    - **Tipo:** `CNAME`
    - **Destinazione / Target:** `joemockdao.github.io.`
  - **Certificato SSL/HTTPS:** viene emesso automaticamente da GitHub tramite Let's Encrypt una volta rilevata la corretta propagazione dei record DNS (attivando *Enforce HTTPS* nelle impostazioni del repository).

---

## 3. Ambiente di Sviluppo Locale & Comandi Utili

### Regola Fondamentale di Flusso di Lavoro
> ⚠️ **IMPORTANTE:** Prima di qualsiasi commit e push su GitHub, **tutte le modifiche devono essere visionate e revisionate in locale** all'indirizzo `http://localhost:8080`. Il push remoto su GitHub viene eseguito solo su richiesta o approvazione esplicita.

### Avvio Server di Anteprima Locale
Dalla cartella del progetto:
```bash
python3 -m http.server 8080
```
Indirizzo di navigazione: **`http://localhost:8080`**

### Nota Tecnica su Git su questo Mac
Su questa macchina (`staff@giovannitrenta` Apple Silicon), la versione di Git predefinita in `/usr/local/bin/git` è un vecchio eseguibile Intel x86.  
Per tutte le operazioni git da terminale o script, **utilizzare sempre la versione nativa Apple Git** posizionando `/usr/bin` in testa al PATH:
```bash
PATH="/usr/bin:$PATH" git status
PATH="/usr/bin:$PATH" git add .
PATH="/usr/bin:$PATH" git commit -m "Descrizione modifica"
PATH="/usr/bin:$PATH" git push origin main
```

---

## 4. Architettura dei File del Progetto

```
joemockdao.github.io/
├── index.html               # Pagina principale semantica, responsive, accessibile e bilingue (IT/EN)
├── CNAME                    # Mappatura dominio personalizzato giovannitrenta.it
├── README.md                # Presentazione e documentazione del repository GitHub
├── STORICO_PROGETTO.md      # Questo file di storico, decisioni e guida operativa completa
├── .gitignore               # Ignora file di sistema macOS (.DS_Store) e temporanei
├── css/
│   └── style.css            # Design system moderno: glassmorphism, gradienti, Dark/Light theme
├── js/
│   └── main.js              # Logica client-side: i18n bilingue (100 chiavi), filtri progetti, tema, toast
└── assets/
    ├── photo.webp           # Nuova foto profilo montano/lago convertita in formato WebP HD
    └── photo_thumb.webp     # Foto ritagliata 1:1 ottimizzata (64KB) per avatar e Hero section
```

---

## 5. Cronistoria di Tutte le Modifiche Effettuate

### Fase 1 — Creazione Iniziale del Sito e Setup Repository
- Autenticazione con `gh` su account `joemockdao`.
- Creazione del repository pubblico `joemockdao/joemockdao.github.io`.
- Configurazione iniziale di GitHub Pages con file `CNAME` impostato su `giovanni.trenta.it`.
- Creazione della struttura grafica con interfaccia moderna scura, subtle glassmorphism (`backdrop-filter: blur`), gradienti raffinati (indaco/ciano/verde) e Dark/Light theme switcher con salvataggio su `localStorage`.
- Inserimento delle sezioni: Hero, Statistiche, Chi Sono, Progetti, AI Strategy, Timeline Esperienze (2000-Presente), Competenze Tecniche, Contatti e Footer.

### Fase 2 — Risalto delle App Store Pubbliche (SleepRec & JoeNote)
- Spostate **SleepRec** e **JoeNote** come prime due card della sezione *Progetti*.
- Aggiunto badge visivo ad alta evidenza: `⭐ In Evidenza • iOS & Android`.
- Aggiunta cornice luminosa e sfumatura dedicata (`.project-card-featured`).
- Inseriti i pulsanti diretti con icone per entrambi gli store (Apple App Store e Google Play Store).
- Aggiunto il tab di filtro dedicato `App Pubbliche (Android & iOS)`.

### Fase 3 — Rimozione del Numero di Telefono
- Su richiesta di privacy, rimosso completamente il recapito telefonico dalla sezione contatti in fondo alla pagina.
- Mantenuta l'email diretta con tasto di copia rapida e la sede (Roma, Italia - Remoto/Ibrido).

### Fase 4 — Correzione Link Ufficiali Google Play Store
- Sostituiti gli URL del Google Play Store con quelli effettivi forniti da Giovanni:
  - **SleepRec:** `https://play.google.com/store/apps/details?id=it.joe.sleeprec&pcampaignid=web_share`
  - **JoeNote:** `https://play.google.com/store/apps/details?id=it.note.joeNote&pcampaignid=web_share`
- Aggiornati contestualmente sia `index.html` che `README.md`.

### Fase 5 — Personalizzazione Badge attorno alla Foto Profilo
- Nella Hero section, attorno al tondo della foto:
  - ❌ Rimosso il badge `macOS & iOS Specialist`.
  - ✅ Inserito il nuovo badge: **`Android • Java • Kotlin • Flutter`** con icona verde Android.
  - ✅ Mantenuto il badge in basso a sinistra: **`25+ Anni Ingegneria IT`**.
- Aggiornato il testo descrittivo dell'Hero per porre l'accento sulla forte specializzazione in **Android, Java, Kotlin e Flutter**.

### Fase 6 — Rimozione Completa del Download del CV
- Rimosso il pulsante *"Scarica CV"* dalla barra di navigazione dell'header e sostituito con il pulsante CTA **`Contattami`** (ancora `#contatti`).
- Rimossa la voce *"Scarica Curriculum Vitae (PDF)"* e la relativa descrizione nella colonna *Azione Rapida* dei contatti.
- Inserito al suo posto il pulsante primario **`Invia una Email`** (`mailto:giovanni.trenta78@gmail.com`).
- Eliminato fisicamente il file `Giovanni_Trenta_CV.pdf` dalla cartella `assets/` del sito web in modo che il documento non sia esposto pubblicamente né raggiungibile tramite URL.

### Fase 7 — Rimozione del Badge di Disponibilità
- Rimossa dalla Hero section la frase e il relativo pill badge:
  `"Disponibile per progetti di consulenza, architettura e sviluppo mobile"`.
- La Hero presenta ora un attacco visivo immediato e pulito:
  > **Software Engineer & Mobile Architect**  
  > **Giovanni Trenta**  
  > *AI-Driven Lead Mobile Developer & Enterprise Architect*

### Fase 8 — Supporto Bilingue Completo (Italiano & Inglese / IT-EN Toggle)
- Progettato e implementato un sistema di internazionalizzazione (i18n) client-side senza dipendenze:
  - **Dizionario bilingue:** in `js/main.js` contenente tutte le stringhe del sito (Hero, Statistiche, Chi Sono, Progetti, AI Strategy, Esperienze, Competenze, Contatti, Footer e Toast di notifica).
  - **Switcher grafico nella navbar:** elegante pill toggle `IT / EN` affiancato al selettore del tema Dark/Light.
  - **Persistenza & Rilevamento automatico:** memorizzazione della lingua scelta su `localStorage` (`gt_lang`), rilevamento automatico della lingua del browser per visitatori internazionali e sincronizzazione parametro URL (`?lang=en`).
  - **SEO & Accessibilità:** aggiornamento dinamico dell'attributo `<html lang="...">`, del `<title>` e del `<meta name="description">`.

### Fase 9 — Aggiornamento Nuova Foto Profilo
- Sostituita la foto profilo nella cornice rotonda della Hero section e nella navbar con il nuovo scatto fornito da Giovanni (ritratto con sfondo montano e lago turchese).
- Ritagliata in formato quadrato 1:1 ottimizzato e convertita nel formato compresso WebP ad alta fedeltà (`photo_thumb.webp` da 64KB e `photo.webp`).
- Aggiornato `object-position: center center` per una centratura millimetrica del viso all'interno dell'anello circolare ciano e del bagliore luminoso.

### Fase 10 — Verifica Dominio Reale e Conformità Aziendale & NDA (Digitouch S.p.A.)
1. **Verifica Dominio su Registro .it & OVH:**
   - Diagnosi DNS/Whois: accertato che il dominio registrato su OVH è **`giovannitrenta.it`** (senza punto tra nome e cognome).
   - Aggiornato il file `CNAME`, i metatag canonici, OpenGraph e i link di reindirizzamento.
2. **Revisione di Conformità Aziendale & Protezione NDA:**
   - **Anonimizzazione Clienti:** Rimossi i nomi espliciti di marchi terzi (BNL, Octo Telematics, Poste Italiane, Enel) da tutte le sezioni visibili, sostituendoli con descrizioni autorevoli del settore (*"primari istituti bancari, grandi operatori nei servizi postali e finanziari e aziende leader nei servizi telematici e IoT"*).
   - **Posizionamento Professionale:** Chiarito il ruolo attuale di Giovanni come dipendente: *"Mobile Architect presso Digitouch S.p.A."*.
   - **Rimozione Riferimenti Freelance:** Trasformata la sezione Contatti da offerta di "consulenza/progetti freelance" a uno spazio di **Contatti & Networking**, confronto tecnico tra professionisti e supporto/feedback per le app pubblicate. Rimossa la dicitura *"Disponibile Full Remote / Ibrido"*.
   - **Focalizzazione Vetrina Progetti:** La sezione Progetti è stata interamente dedicata alle 4 creazioni software proprietarie e indipendenti di Giovanni (*SleepRec*, *JoeNote*, *Klipzen*, *CleanMacJoe*), eliminando le card descrittive di progetti corporate.
   - **Scoping AI-Augmented Engineering:** L'utilizzo di Claude Code, Gemini e Cursor è stato circoscritto all'analisi architetturale, alla prototipazione, alla documentazione e ai progetti personali/R&D, a piena tutela delle policy di sicurezza sul codice proprietario bancario.
   - **Allineamento Dizionario Bilingue:** Tutti i testi in italiano e in inglese in `js/main.js` e i tag `data-i18n` in `index.html` sono stati sincronizzati e validati con copertura al 100%.

### Fase 11 — Focalizzazione Esclusiva su "Mobile Architect" & Rimozione Ruoli "Lead"
- **Obiettivo:** Su richiesta esplicita di Giovanni, rimossa ogni menzione del termine "Technical Lead" o "Lead" in tutte le pagine, valorizzando al massimo il profilo e la seniority di **Mobile Architect**.
- **Modifiche Effettuate:**
  - **Titolo Pagina & OpenGraph:** `Giovanni Trenta — AI-Driven Mobile Architect & Software Engineer`.
  - **Badge Navbar:** Sostituito `Lead Mobile & Architect` con `Mobile Architect`.
  - **Hero Subtitle & Desc:** Aggiornato a `AI-Driven Mobile Architect & Enterprise Specialist`, ponendo l'accento sulla progettazione architetturale mobile e enterprise.
  - **Sezione Chi Sono:** Ruolo aggiornato a `Mobile Architect presso Digitouch S.p.A.`, pill badge `💼 Mobile Architect @ Digitouch`.
  - **Sezione Esperienze:**
    - Exp 1 (Digitouch): Ruolo `Mobile Architect`, focus su Clean Architecture, MVVM/MVI, e rimpiazzo del badge `Scrum Lead` con `Mobile Architecture`.
    - Exp 4 (Enterprise/PA): Ruolo aggiornato a `Senior Java & Software Architect`.
  - **Sezione Contatti:** Rimosso riferimento a "tech lead", focalizzato su confronto tecnico con sviluppatori, ingegneri e architetti software.
  - **Dizionario Bilingue (IT/EN):** Sincronizzazione al 100% in `js/main.js` per tutte le diciture in entrambe le lingue.

---

## 6. Progetti Presentati nel Sito (App Personali & Utility)

| Progetto | Piattaforme | Ruolo / Descrizione | Link |
| :--- | :--- | :--- | :--- |
| **SleepRec** | iOS & Android | Monitoraggio qualità sonno, analisi acustica notturna, Wear OS | [App Store](https://apps.apple.com/it/app/sleeprec/id1528754113) • [Google Play](https://play.google.com/store/apps/details?id=it.joe.sleeprec&pcampaignid=web_share) |
| **JoeNote** | iOS & Android | App note e promemoria minimale, widget, promemoria intelligenti | [App Store](https://apps.apple.com/it/app/joenote/id6738133424) • [Google Play](https://play.google.com/store/apps/details?id=it.note.joeNote&pcampaignid=web_share) |
| **Klipzen** | macOS Nativo | Video editor desktop nativo (Swift, SwiftUI, AVFoundation) | [GitHub](https://github.com/joemockdao/Klipzen) |
| **CleanMacJoe** | macOS Nativo | Utility di pulizia disco, cache e disinstallazione app | [GitHub](https://github.com/joemockdao/CleanMacJoe) |

---

## 7. Come Riprendere il Lavoro in Altri Giorni

1. **Aprire il terminale nella cartella del progetto:**
   ```bash
   cd /Users/giovannitrenta/cv_AI/joemockdao.github.io
   ```

2. **Avviare il server locale di test:**
   ```bash
   python3 -m http.server 8080
   ```
   Aprire `http://localhost:8080` nel browser per vedere le modifiche in tempo reale.

3. **Verificare lo stato dei file modificati:**
   ```bash
   PATH="/usr/bin:$PATH" git status
   ```

4. **Quando tutte le modifiche locali sono approvate e pronte per essere pubblicate su GitHub:**
   ```bash
   PATH="/usr/bin:$PATH" git add .
   PATH="/usr/bin:$PATH" git commit -m "Descrizione sintetica delle modifiche"
   PATH="/usr/bin:$PATH" git push origin main
   ```
   GitHub Pages aggiornerà automaticamente la versione online su `giovannitrenta.it` entro 1-2 minuti.
