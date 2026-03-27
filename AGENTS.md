# Scacchi Mentali — Project Context

## Cos'è questo progetto
Sito statico GitHub Pages per **Scacchi Mentali** (`scacchimentali.it`) — brand italiano di crescita personale basato su metafora scacchistica. Voce narrativa: **Kairos**.

Repo: `https://github.com/Antoca84/chess-whispers-arcane`
Stack: Vanilla HTML/CSS/JS (GitHub Pages). Package.json React/Vite presente ma inutilizzato — ignorarlo.

---

## Struttura del sito

```
index.html                          ← Homepage / landing principale
css/style.css                       ← Design system globale
js/main.js                          ← Logica app: date, share, navigazione
js/auth.js                          ← Autenticazione token via Google Apps Script
js/countdown.js                     ← Gestione countdown offerta
subscribe/index.html                ← Pagina pricing/subscription
accesso-negato.html                 ← Errore token non valido
archetipi/[nome]/index.html         ← Pagine private per i 6 archetipi
messages/[nome]-messages.json       ← Messaggi quotidiani per archetipo
scacchiera-tempo/                   ← Landing page prodotto con Stripe
images/logo.png
images/archetipi/[re|regina|torre|alfiere|cavallo|pedone].png
```

---

## Brand & Design System

**Palette:**
- Background: `#0d0d0d`
- Surface: `#1c1c1c`
- Text: `#f8f9fa` / `#b8bcc0`
- Accento Re/Gold: `#FFD700`
- Gradient CTA: `#FFD700 → #FF8C00 → #FF4500`
- Colori archetipi: Re `#FFD700`, Regina `#8A2BE2`, Torre `#32CD32`, Alfiere `#FF4500`, Cavallo `#00CED1`, Pedone `#DC143C`

**Font:** Montserrat (Google Fonts, display=swap)
**Layout:** CSS Grid + Flexbox, breakpoint 768px e 480px
**Animazioni:** fadeInUp, scaleIn, glow, pulseGlow, shimmer — già definite in style.css

---

## Funnel

```
TikTok/Social
    ↓
Homepage (index.html)
    ↓
Quiz Google Form (forms.gle) → email con QR code token
    ↓
Pagina archetipo privata (archetipi/[nome]/index.html)
    ↓
Subscribe (subscribe/index.html) → Stripe (da implementare)
```

**Logica accesso archetipi:** token via URL param → verifica Google Apps Script → localStorage.quiz_completed

---

## I 6 Archetipi

| Archetipo | Colore | Simbolo |
|-----------|--------|---------|
| Il Re | `#FFD700` | ♔ |
| La Regina | `#8A2BE2` | ♕ |
| La Torre | `#32CD32` | ♖ |
| L'Alfiere | `#FF4500` | ♗ |
| Il Cavallo | `#00CED1` | ♞ |
| Il Pedone | `#DC143C` | ♙ |

---

## Integrazioni esterne

- **Google Analytics 4:** `G-XE6BJT3222` (configurato il 11/03/2026)
- **Google Apps Script:** autenticazione token (URL in auth.js)
- **Google Form:** quiz esterno (forms.gle)
- **Stripe.js:** presente in scacchiera-tempo/ ma non collegato a backend
- **Mailchimp:** da implementare (email sequences per archetipo)

---

## Stato attuale — Problemi aperti

### 🔴 Critici
- [ ] **Messaggi JSON vuoti** — logica fallback da implementare. In attesa di validare i messaggi generati da Manus prima di popolare i JSON. Non urgente: nessun iscritto attivo al momento.
- [ ] **Stripe non collegato** — `activateSubscription()` mostra solo un `alert()`. Nessun pagamento reale possibile.

### ✅ Risolti
- [x] **GA4 configurato** — `G-XE6BJT3222` in tutti gli HTML + evento `quiz_started` sul CTA
- [x] **Countdown resettato** — nuova scadenza 10/04/2026

### 🟡 Importanti
- [ ] **Open Graph mancante** — nessuna preview su WhatsApp/Telegram/social per nessuna pagina
- [ ] **sitemap.xml** — non presente
- [ ] **robots.txt** — non presente
- [ ] **H1 duplicato** — header e hero usano entrambi H1 in tutte le pagine
- [ ] **Link footer rotti** — #privacy, #termini, #contatti non esistono
- [ ] **Link quiz in accesso-negato.html** — punta a `forms.gle/TUO_FORM_ID` (placeholder)
- [ ] **Canonical URL** — mancante in tutte le pagine

### 🟢 Miglioramenti
- [ ] Social proof / testimonials in homepage
- [ ] Sezione FAQ
- [ ] Minificazione CSS/JS
- [ ] Immagini in formato .webp
- [ ] Pulizia scacchiera-tempo/ (6+ varianti dello stesso file)
- [ ] Rimuovere o usare package.json React/Vite
- [ ] Valutare upgrade font Cinzel per H1/H2 (già in design-system/MASTER.md §3)
- [ ] Creare pagine override design-system/pages/ per homepage, archetipo, subscribe

---

## Fix completati

| Data | Fix | Commit |
|------|-----|--------|
| 11/03/2026 | GA4 `G-XE6BJT3222` configurato in tutti gli HTML + evento `quiz_started` | `bb3b149` |
| 11/03/2026 | Countdown resettato al 10/04/2026 (era scaduto al 18/08/2025) | `bb3b149` |
| 11/03/2026 | AGENTS.md aggiunto al progetto (in .gitignore) | `4a8087c` |
| 11/03/2026 | SSH configurato su GitHub, push funzionante | — |
| 11/03/2026 | .gitignore aggiornato per escludere AGENTS.md | `5666d9d` |
| 12/03/2026 | design-system/MASTER.md generato con ui-ux-pro-max | — |
| 12/03/2026 | ui-ux-pro-max skill installata (.Codex/skills/) | — |
| 12/03/2026 | design-system/ aggiunto a .gitignore | — |

---

## Regole operative per Codex

1. **Lingua:** italiano con l'utente, sempre
2. **Non toccare** `js/auth.js` senza istruzioni esplicite — gestisce l'autenticazione
3. **Backup prima di modifiche CSS pesanti:** `cp css/style.css css/style.css.bak`
4. **Mobile-first:** ogni modifica CSS va testata mentalmente a 375px
5. **Voce Kairos** in tutti i testi: diretto, strategico, mai motivazionale-generico
6. **Dopo ogni gruppo di modifiche:** `git add`, `git commit` con messaggio descrittivo, `git push`
7. **Non usare** il package.json React/Vite — il sito è vanilla HTML/CSS/JS
8. Il `design-system/MASTER.md` è in vanilla CSS, NON Tailwind — i componenti nella sezione 5 usano sintassi Tailwind come riferimento visivo ma vanno tradotti in CSS vanilla prima di implementarli. Il sito non ha Tailwind installato.
