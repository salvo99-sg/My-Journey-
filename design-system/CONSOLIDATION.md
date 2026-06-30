# Design System — Piano di Consolidamento

Elenco **vivo** dei nodi da risolvere **in un unico momento**, a pacchetto completo,
**prima del cut-over** (decisione: accumula ora → consolida e attiva alla fine).

> Finché questa lista non è chiusa, l'app live (`main`) resta intatta e i file DS
> restano archiviati su `develop` senza essere collegati.

Legenda: 🔴 bug (non rende) · 🟠 coerenza (hardcoded vs token esistente) · 🟡 duplicazione · 🔵 strutturale

---

## 🔴 Token / keyframe mancanti (da aggiungere)
- [x] `--z-fab`, `--z-navigation` → aggiunti in `tokens.css` (PR #61)
- [ ] `--z-map-dock` → `tokens.css` (usato da `map-dock.css`)
- [ ] `--z-overlay` → `tokens.css` (usato da `bottom-sheet.css`; in alternativa mappare su `--z-modal`)
- [ ] `--shadow-2xl` → `tokens.css` (usato da `modal.css`; la scala arriva a `--shadow-xl`)
- [ ] keyframe `pulse-marker` → `motion.css` (usato da `day-card.css` e `timeline-card.css`)
- [ ] `--trip-accent-rgb` → **non** aggiungere 14 triplette: convertire i consumatori a `color-mix(in srgb, var(--trip-accent) X%, transparent)`. Consumatori: `empty-state.css`; **`calendar.css`** (`.calendar__day--range` light .12 / dark .18)

## 🔴 Typo / riferimenti errati
- [ ] `ticket-card.css` (dark): `var(--color-background)` → `var(--color-bg)`

## 🟠 Hardcoded → token esistenti
- [ ] `trip-card.css`: colori stato `#F59E0B / #22C55E / #3B82F6 / #D1D5DB` → `--status-planned/-progress/-completed/-draft`
- [ ] `bottom-sheet.css` + `modal.css`: backdrop `rgba(0,0,0,.45/.56)` → `--color-overlay`
- [ ] `album-card.css` + `photo-card.css`: cuore `is-active` `#EF4444` → `--color-error`
- [ ] Vetri/scrim dark hardcoded → `--glass-strong` / `--glass-nav` (unificare valori divergenti
      .82/.84/.85/.88/.90/.92/.94): `toast`, `searchbar--map`, `map-dock`, `header`, `icon-btn--map`
- [ ] Ombre custom (dock/sheet/bottom-nav: `0 -Xpx … rgba(0,0,0,…)`) → token ombra dedicato
- [ ] `accordion.css`: misure/tipo hardcoded → token (icona `border-radius:14px` vs scala `--radius-*`; `font-size:17/13/12px` vs `--fs-*`; `gap:14px`). Coerente con gli altri componenti, da valutare in blocco
- [ ] `calendar.css`: testo su sfondo accent `#fff` (`--day--selected`, `--range-start/-end`, dot `--selected::after`) → `--color-text-inverse`. Inoltre misure/tipo hardcoded (titolo `28px` vs `--fs-*`; giorni `border-radius:16px` vs `--radius-*`)

## 🟡 Duplicazioni / doppi meccanismi
- [ ] `.skeleton` definito 2 volte (`motion.css` shimmer vs `skeleton.css` ::after) → tenere `skeleton.css`, rimuovere da `motion.css` (+ keyframe `shimmer` orfano)
- [ ] Bottom-sheet apertura: `.is-open` (transition) vs `motion.css .bottom-sheet--open` (animation) → un solo meccanismo
- [ ] `motion.css .timeline-item` (trattino) orfana → i componenti usano `.timeline__item` / `.day-card__stop`
- [ ] `input.css ::selection` duplica il `::selection` globale di `design-system.css`
- [ ] `empty-state.css` keyframe `emptyFloat` ≈ `floating` di `motion.css`
- [ ] `day-card.css` `transition:background .18s` (durata fissa) → token `--motion-*`

## 🔵 Strutturali / fondamenta
- [ ] **Responsive `.page`** (allargamento 720/1180 tablet/desktop) da ri-applicare in `design-system.css` (`.app`/`.page`); oggi solo `max-width:480`
- [ ] Tokenizzare colori brand **taupe `#6B645D`** e **oliva `#708050`**
- [ ] Durate motion vs mockup: hero `680→650ms`, map `900→1200ms`
- [ ] Fallback per `--trip-*` nei componenti "globali" senza `[data-trip-theme]` (modal, bottom-sheet, toast, **accordion**): es. focus-ring `--trip-accent-soft` che altrimenti sparisce. NB `accordion.css` usa `--trip-accent`/`--trip-accent-soft` per bordo `is-open`, icona, chevron e focus-ring, ma è dichiarato anche per FAQ/Packing/Notes (potenzialmente fuori da `[data-trip-theme]`)
- [ ] Collisioni `.app` / `.card` / `.fab` con le classi attuali → si risolvono sostituendo l'HTML (consegna #9)
- [ ] Ordine di collegamento `<link>` al cut-over: tokens → colors → typography → spacing → motion → design-system → components/*

## ✅ Già risolto in fasi precedenti (per memoria)
- Fonte unica: spacing→spacing.css, motion→motion.css (`--motion-*`), tipografia→typography.css, layout/focus/selection→design-system.css
- Collisione token `--timeline-line/-node` (misura vs colore) → rinominati width/size vs color
- Glass/scrim tokenizzati per i primi componenti (`--glass-strong`, `--glass-nav`, `--scrim-bg`, `--nav-shadow`)
- `.hidden !important` autorizzato; Mapbox GL JS autorizzato nello stack

---

**Stato consegna**: 7/13 · #8 libreria componenti: 23 file archiviati.
Questa checklist si aggiorna a ogni nuovo file e si esegue **tutta insieme** al consolidamento.
