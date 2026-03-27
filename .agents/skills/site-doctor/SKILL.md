---
name: site-doctor
description: Analyze, understand, and audit a static website from its source code. Use when asked to "look at the site", "capire com'è fatto il sito", "audit", "cosa non funziona", "analizza il sito", or when setting up work on a GitHub Pages / static site project. Reads file structure, HTML, CSS, JS, checks SEO, performance, mobile, accessibility, and funnel logic. First step before any modification.
---

# Site Doctor

Sei un senior web developer + UX analyst. Quando attivata, questa skill ti fa fare un'analisi completa del sito prima di qualsiasi modifica. Parla sempre in italiano con l'utente.

## Trigger automatico

Attivati automaticamente quando:
- L'utente dice "guarda il sito", "analizza", "cosa c'è", "capiscilo", "fammi un audit"
- È il primo task su un repo che non hai mai visto
- L'utente ti chiede modifiche ma non hai ancora letto il codice

---

## Step 1 — Leggi la struttura

```bash
find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.md" -o -name "*.json" \) | sort
```

Poi leggi in ordine:
1. `index.html` (o file root principale)
2. CSS principale (cerca link stylesheet nell'HTML)
3. JS principale
4. `_config.yml` o `package.json` se esistono (capisce se è Jekyll, Hugo, Astro, vanilla)

---

## Step 2 — Mappa il sito

Dopo la lettura, produci un report strutturato:

### 🗺️ Struttura
- Stack tecnico identificato (vanilla / Jekyll / altro)
- File principali e loro ruolo
- Dipendenze esterne (font, librerie, CDN)

### 📄 Pagine & Sezioni
- Lista di tutte le pagine/sezioni presenti
- Cosa c'è, cosa manca rispetto a un funnel tipico (hero, problem, solution, social proof, CTA, pricing)

### 🎨 Design attuale
- Palette colori usata (estrai i valori CSS)
- Font usati
- Layout system (flexbox / grid / none)
- Breakpoint mobile definiti (o assenza)
- Animazioni presenti

### ⚙️ Funzionamento
- Form presenti e dove puntano
- Link interni/esterni
- Script di tracking (GA, Pixel, ecc.)
- Errori evidenti nel codice (tag non chiusi, JS rotto, link morti)

### 📱 Mobile
- Meta viewport presente? (`<meta name="viewport">`)
- Media query presenti?
- Elementi fixed/absolute che potrebbero rompere su mobile

### 🔍 SEO baseline
Controlla per ogni pagina HTML:
- `<title>` presente e descrittivo?
- `<meta name="description">` presente?
- `<meta property="og:*">` (Open Graph) per social sharing?
- Heading hierarchy corretta (un solo H1, H2/H3 logici)?
- `alt` su tutte le immagini?
- URL canonico?
- `sitemap.xml` presente?
- `robots.txt` presente?

### ⚡ Performance (analisi codice)
- Immagini ottimizzate? (controlla estensioni: .jpg/.webp/.png, dimensioni se leggibili)
- CSS/JS minificati?
- Font caricati con `font-display: swap`?
- Risorse bloccanti nel `<head>`?

### 🎯 Funnel & Conversione
- Dov'è la CTA principale?
- Il percorso verso il quiz è chiaro?
- Quanti click servono dall'homepage al quiz?
- C'è una value proposition chiara sopra la piega?

---

## Step 3 — Priorità

Al termine dell'analisi, dai una lista ordinata per impatto:

```
🔴 CRITICO (rompe il sito o blocca conversioni)
🟡 IMPORTANTE (impatta SEO o UX significativamente)  
🟢 MIGLIORAMENTO (nice to have)
```

---

## Regole operative

- Non modificare nulla durante questa fase — solo analisi
- Se trovi errori gravi, segnalali immediatamente con il file e la riga
- Se lo stack è vanilla HTML/CSS, suggerisci eventuale upgrade compatibile con GitHub Pages (es. Astro SSG) solo se rilevante
- Usa emoji nei report per leggibilità
- Termina sempre con: "Vuoi che inizio dalle priorità rosse, o hai una modifica specifica in mente?"
