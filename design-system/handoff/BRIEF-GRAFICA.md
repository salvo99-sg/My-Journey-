# My Journey — Brief grafico per il designer

> **Come usare questo documento:** è l'unico file da leggere. Contiene tutto ciò che
> serve per produrre gli asset estetici mancanti. I **fondamentali** (palette, font,
> motion) sono già bloccati e vanno **rispettati** — non reinterpretarli. La consegna
> ideale è un'unica cartella `.zip` con la struttura indicata in fondo (§8).

---

## 0. Cos'è My Journey

App PWA (installabile, offline-first) di diario di viaggio: l'utente pianifica un
viaggio, lo vive con mappa/itinerario/biglietti, e lo ricorda con album foto e diario.
Vanilla HTML/CSS/JS, **niente build step**. Mobile-first (larghezza base 393 px),
con dark mode e 16 temi cromatici per destinazione.

Tono di marca: **editoriale, autorevole, "poster da viaggio"** — non giocoso, non piatto.

---

## 1. Fondamentali già bloccati (da rispettare, NON ridisegnare)

### 1.1 Palette brand
| Ruolo | Nome | HEX |
|---|---|---|
| Primario / superfici scure, testo titoli | Navy | `#16264C` |
| Accento / azioni, CTA | Orange | `#D97706` |
| Sfondo app (light) | Cream | `#FFF7ED` |
| Neutro caldo / testo secondario | Taupe | `#6B645D` |
| Naturale / conferme, treni | Olive | `#708050` |

Colori funzionali marker (categorie): hotel `#4F46E5`, restaurant `#EA580C`,
attraction `#0F9D8A`, photo `#D946EF`, shopping `#F59E0B`, train `#2563EB`,
flight `#DC2626`.

### 1.2 Tipografia
- **Calistoga** → titoli editoriali / hero / wordmark.
- **Inter** → tutta la UI (testo, label, numeri).
- **Caveat** → tocco manoscritto (diario, annotazioni).

### 1.3 Motion (durate ufficiali)
tap 120 ms · swipe 280 ms · sheet 340 ms · hero 650 ms · mappa/itinerario 1200 ms.
Rispettare `prefers-reduced-motion`. Ogni animazione che proponi deve rientrare in
queste durate.

---

## 2. Deliverable 1 — Logo / Marchio ⭐ (bloccante)

Serve il marchio definitivo di "My Journey" (attualmente c'è un placeholder emoji).

**Cosa consegnare:**
1. **Logo primario** (marchio + wordmark "My Journey") — SVG vettoriale.
2. **Simbolo / icona sola** (senza testo) — SVG, deve funzionare a 32 px.
3. **Wordmark solo testo** — SVG.
4. **Varianti colore:** (a) full color, (b) monocromo navy `#16264C`,
   (c) monocromo bianco (per fondi scuri/dark mode), (d) monocromo nero.
5. **Versione su fondo scuro** e su fondo crema, entrambe leggibili.

**Specifiche:**
- Formato sorgente: **SVG** (curve, testo convertito in tracciati) + export PNG @1x/@2x/@3x.
- Area di rispetto e dimensione minima documentate.
- Coerente con palette e con Calistoga per l'eventuale wordmark.
- Deve reggere sia sullo **splash** (grande, centrato su crema) sia come **favicon** (16 px).

---

## 3. Deliverable 2 — Set icone / SVG sprite ⭐ (bloccante)

L'app usa uno **sprite SVG unico** con `<symbol>` (attualmente ne ha solo 10, incompleti).
Servono tutte le icone della UI in un unico file `icons.svg`.

### 3.1 Specifiche tecniche icone (tassative)
- **Stile:** linea (outline), stroke uniforme, **stroke-width 2** su griglia 24×24.
- `viewBox="0 0 24 24"`, angoli `stroke-linecap="round" stroke-linejoin="round"`.
- **Colore = `currentColor`** (nessun colore hardcoded: l'app le colora via CSS).
- Ogni icona è un `<symbol id="…">` dentro un unico `<svg>` sprite.
- Ottimizzate (SVGO), senza `width/height` fissi sui symbol, senza metadati Illustrator.
- Peso target dell'intero sprite: < 30 KB.

### 3.2 Inventario icone richieste (id → uso)

**Navigazione (bottom nav + sezioni):**
`home`, `map`, `album`, `ticket`, `wallet` (budget), `bag` (valigia/packing),
`journal` (diario), `memories` (ricordi), `settings`, `trophy` (traguardi),
`profile`, `bell` (notifiche).

**Azioni:**
`plus` (FAB), `search`, `chevron-left` (back), `chevron-right`, `chevron-down`,
`edit`, `trash` (elimina), `share`, `download` (esporta), `upload` (importa),
`check`, `close` (x), `retry` (refresh), `filter`, `sort`, `more` (⋯), `heart`,
`heart-filled`, `star`, `star-filled`, `pin` (salva luogo).

**Categorie tappa / marker (versione icona, oltre ai marker colorati):**
`hotel`, `restaurant`, `attraction`, `camera` (foto), `shopping`, `train`,
`airplane` (volo), `car`, `walk`, `activity`.

**Contenuto / meta:**
`calendar`, `clock`, `location`, `weather` (meteo generico), `sun`, `cloud`,
`rain`, `currency`, `tag`, `note`, `map-route` (percorso), `compass`.

**Media controls (mappa animata / timeline):**
`play`, `pause`, `skip-prev` (≪), `skip-next` (≫).

**Stati / feedback:**
`info`, `warning`, `error`, `success`, `offline`, `wifi`, `empty-box` (stato vuoto),
`lock` (privacy).

> Se un'icona ti sembra ridondante segnalalo, ma **mantieni gli `id` esatti** qui
> sopra: sono referenziati dal codice. Se ne aggiungi altre utili, allega una legenda.

---

## 4. Deliverable 3 — Asset PWA (icone app + favicon)

Da generare **a partire dal logo definitivo** (§2). Fondo consigliato: navy `#16264C`
o crema `#FFF7ED` secondo variante.

| Asset | Dimensioni | Note |
|---|---|---|
| Icone app | 72, 96, 128, 144, 152, 180, 192, 256, 384, 512 px | PNG, quadrate |
| Icona **maskable** | 192 e 512 px | safe-zone 80% centrale, PNG |
| `apple-touch-icon` | 180 px | PNG, angoli pieni (no trasparenza) |
| Favicon | 16, 32 px PNG + `favicon.ico` | |
| `mask-icon.svg` (Safari pinned tab) | monocromo | tracciato pieno navy |

Naming atteso: `icon-{size}.png`, `icon-{size}-maskable.png`, `favicon-16.png`,
`favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`, `mask-icon.svg`.

---

## 5. Deliverable 4 — Illustrazioni / stati vuoti (enhancement)

Non bloccante ma migliora molto la UX. Stile coerente con il poster/brand.
- **Empty state Home** ("Nessun viaggio — crea il primo"): 1 illustrazione.
- **Empty state Album/Ricordi** ("Ancora nessuna foto").
- **Empty state ricerca** ("Nessun risultato").
- **Offline** ("Sei offline").
- Formato: **SVG** (preferito) o PNG @2x/@3x trasparente. Palette brand.
- Larghezza max utile ~280 px, devono funzionare su crema e su dark.

---

## 6. Deliverable 5 — Screenshot store / manifest (enhancement)

Per il manifest PWA e le pagine di anteprima.
- 2–3 screenshot **portrait** 1080×1920 (o 393×852 @2/3x) e, se possibile, 2 landscape.
- Mostrare Home, Mappa, Album con dati realistici. Palette brand, no chrome browser.
- PNG. Naming: `screenshot-1.png`, `screenshot-2.png`, …

---

## 7. Regole di consegna trasversali

1. **Sorgenti vettoriali sempre in SVG** ottimizzato (SVGO), testo convertito in tracciati.
2. Icone UI in `currentColor`; **nessun colore inline** dove il colore lo mette il CSS.
3. Nessun riferimento a font di sistema negli SVG (converti in path).
4. **Non introdurre** colori fuori palette (§1.1) senza segnalarlo esplicitamente.
5. `id` e nomi file **esattamente** come indicati: sono agganciati al codice.
6. PNG esportati a densità dichiarata (@1x/@2x/@3x), fondo trasparente salvo dove
   specificato (app icon / apple-touch = fondo pieno).
7. Allega una **legenda** (README breve) con: elenco id icone, varianti logo, e note
   su area di rispetto / dimensioni minime.

---

## 8. Struttura di consegna (un unico .zip)

```
my-journey-grafica/
├─ README.md                  ← legenda + note (area rispetto, id, varianti)
├─ logo/
│  ├─ logo-primary.svg
│  ├─ logo-symbol.svg
│  ├─ logo-wordmark.svg
│  ├─ logo-navy.svg  logo-white.svg  logo-black.svg
│  └─ png/  (…@1x/@2x/@3x)
├─ icons/
│  └─ icons.svg               ← sprite unico con tutti i <symbol> (§3.2)
├─ pwa/
│  ├─ icon-72.png … icon-512.png
│  ├─ icon-192-maskable.png  icon-512-maskable.png
│  ├─ apple-touch-icon.png
│  ├─ favicon-16.png  favicon-32.png  favicon.ico
│  └─ mask-icon.svg
├─ illustrations/             ← stati vuoti (§5)
│  └─ empty-home.svg  empty-album.svg  empty-search.svg  offline.svg
└─ screenshots/               ← §6
   └─ screenshot-1.png …
```

---

## 9. Priorità

1. ⭐ **Logo definitivo** (§2) — sblocca splash, PWA e favicon.
2. ⭐ **Sprite icone `icons.svg`** (§3) — sblocca l'intera UI.
3. **Asset PWA** (§4) — derivano dal logo.
4. Illustrazioni (§5) e screenshot (§6) — miglioramenti, in coda.

Per qualsiasi dubbio su misure o `id`, chiedere **prima** di produrre: meglio una domanda
in più che un rework. Grazie!
