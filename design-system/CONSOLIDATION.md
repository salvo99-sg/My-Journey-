# Design System — Piano di Consolidamento

Elenco **vivo** dei nodi da risolvere **in un unico momento**, a pacchetto completo,
**prima del cut-over** (decisione: accumula ora → consolida e attiva alla fine).

> Finché questa lista non è chiusa, l'app live (`main`) resta intatta e i file DS
> restano archiviati su `develop` senza essere collegati.

Legenda: 🔴 bug (non rende) · 🟠 coerenza (hardcoded vs token esistente) · 🟡 duplicazione · 🔵 strutturale

---

## 🔴 Token / keyframe mancanti (da aggiungere)
- [x] `--z-fab`, `--z-navigation` → aggiunti in `tokens.css` (PR #61)
- [ ] `--z-dock` → `tokens.css` (usato da `map-dock.css`; nome reale **`--z-dock`**, non `--z-map-dock`. Valore atteso ~250, tra `--z-dropdown:200` e `--z-sheet:300`)
- [ ] `--z-overlay` → `tokens.css` (usato da `bottom-sheet.css`; in alternativa mappare su `--z-modal`)
- [ ] `--shadow-2xl` → `tokens.css` (usato da `modal.css`; la scala arriva a `--shadow-xl`)
- [ ] keyframe pulse del marker → **unificare in `motion.css`**: oggi mancante per `day-card.css`/`timeline-card.css` (riferito come `pulse-marker`), MA `journey-timeline.css` definisce `timelinePulse` (accent) e `map-markers.css` definisce `markerPulse` (verde hardcoded). 3 keyframe pulse divergenti → tenerne uno parametrizzato. NB `markerPulse` usa `rgba(34,197,94,.40)` hardcoded mentre lo sfondo `--map-marker--current` usa `--color-success`: incoerenti
- [x] ~~`--trip-accent-rgb`~~ **RISOLTO dal designer**: `theme/trip-themes.css` fornisce `--trip-accent-rgb` per `:root` (default) e per ogni tema. La mia proposta `color-mix` è **superata** (rispetto la scelta del designer: triplette esplicite). Consumatori già pronti: `empty-state.css`, `calendar.css`, `journey-timeline.css`. ⚠️ Si attiverà solo quando `trip-themes.css` sarà collegato al cut-over

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
- [ ] `select.css`: misure/tipo hardcoded → token (opzione `border-radius:14px` vs `--radius-*`; `font-size:14/15/11px` vs `--fs-*`). Coerente con gli altri componenti, da valutare in blocco
- [ ] `map-dock.css`: `#fff` su `__button--primary` (sfondo `--trip-accent`) → `--color-text-inverse`; raggi hardcoded (`28px`/`18px`/`14px`) → `--radius-*`; titolo `24px` → `--fs-*`
- [ ] `journey-timeline.css`: `#fff` su `.timeline-day__badge` (sfondo `--trip-accent`) → `--color-text-inverse`; raggi/font hardcoded (`18px`, `24px`, ecc.) → `--radius-*`/`--fs-*`
- [ ] **`map-markers.css`: palette categorie POI non tokenizzata** → hotel `#4F46E5`, restaurant `#EA580C`, attraction `#0F9D8A`, photo `#D946EF`, shopping `#F59E0B`, train `#2563EB`, flight `#DC2626`. Nessun token esistente le copre. Decidere: creare scala `--marker-*` (consigliato) o lasciare hardcoded. ⚠️ Alcune coincidono con accent dei temi (restaurant=default, attraction=tropical, flight=usa) ma sono semantica diversa (categoria, non destinazione)
- [ ] `map-markers.css`: `#fff` su icona/label/`route-point` border (sfondi colorati) → `--color-text-inverse`; tooltip label `rgba(0,0,0,.78)` / dark `rgba(18,18,22,.92)` → token dedicato; ombre marker custom

## 🟡 Duplicazioni / doppi meccanismi
- [ ] `.skeleton` definito 2 volte (`motion.css` shimmer vs `skeleton.css` ::after) → tenere `skeleton.css`, rimuovere da `motion.css` (+ keyframe `shimmer` orfano)
- [ ] Bottom-sheet apertura: `.is-open` (transition) vs `motion.css .bottom-sheet--open` (animation) → un solo meccanismo
- [ ] `motion.css .timeline-item` (trattino) orfana → i componenti usano altri nomi (vedi sotto)
- [ ] **Famiglia timeline frammentata**: `journey-timeline.css` (`.timeline-day`/`.timeline-stop`/`.timeline`) vs `timeline-card.css` vs `day-card.css` (`.day-card__stop`) vs orfana `motion.css .timeline-item`. Convenzioni di naming divergenti per lo stesso dominio (giorno+tappe) → al cut-over scegliere UNA struttura. Attenzione anche a `.timeline` (nome generico) come possibile collisione
- [ ] `input.css ::selection` duplica il `::selection` globale di `design-system.css`
- [ ] `empty-state.css` keyframe `emptyFloat` ≈ `floating` di `motion.css`
- [ ] `day-card.css` `transition:background .18s` (durata fissa) → token `--motion-*`
- [ ] **`search.css` vs `searchbar.css`**: due componenti di ricerca distinti (`.search` = ricerca universale con dropdown risultati; `.searchbar`/`searchbar--map` = barra compatta inline/mappa). Nessuna collisione di classi, ma sovrapposizione concettuale → al cut-over chiarire ruoli ed evitare doppioni di markup

## 🔴 Doppia fonte temi destinazione — colors.css vs trip-themes.css (DECISIONE UTENTE)
- [ ] **Due definizioni divergenti** degli stessi `[data-trip-theme]`:
  - `colors.css` (collegato): 14 temi (japan, italy, greece, iceland, egypt, tropical, france, usa, uk, **spain, china, netherlands, indonesia, uae**), `--trip-accent-soft` come **hex**, **nessun** `--trip-accent-rgb`, nessun `--trip-header-overlay`
  - `theme/trip-themes.css` (nuovo, archiviato): `:root` default + 16 temi (japan, italy, france, greece, egypt, tropical, usa, **canada, norway, australia, brazil, morocco, india**), `--trip-accent-soft` come **rgba**, **con** `--trip-accent-rgb`, `--trip-header-overlay`, helper `.trip-*`
  - Valori **diversi** per i temi in comune (es. japan `#C94C63` vs `#E63946`; italy `#A64F2F` vs `#2A9D8F`; usa `#B44A46` vs `#DC2626`; uk `#D9893B` vs `#334155`…)
  - Set paesi diverso: **rimossi** spain/china/netherlands/indonesia/uae · **aggiunti** canada/norway/australia/brazil/morocco/india
  - ❓ **Da decidere**: quale fonte vince? Ipotesi: `trip-themes.css` è l'evoluzione (ha rgb+default+helper) → rimuovere il blocco `[data-trip-theme]` da `colors.css` e tenere `trip-themes.css` come unica fonte. Ma cambia la palette di 9 temi e l'elenco paesi → **scelta del designer/utente, non autonoma**
  - Impatto: `THEME-MAP.md` va riallineato (mappa IT⇄EN + elenco paesi); verificare quali `data-trip-theme` usa davvero l'app
- [ ] `--trip-header-overlay`: nuovo token definito **solo** su `:root` (default) e `japan` → mancante sugli altri 15 temi (eredita il default `rgba(0,0,0,.24)`). Da valutare se serve per-tema o se basta il default

## 🔵 Strutturali / fondamenta
- [ ] **Responsive `.page`** (allargamento 720/1180 tablet/desktop) da ri-applicare in `design-system.css` (`.app`/`.page`); oggi solo `max-width:480`
- [ ] Tokenizzare colori brand **taupe `#6B645D`** e **oliva `#708050`**
- [ ] Durate motion vs mockup: hero `680→650ms`, map `900→1200ms`
- [x] ~~Fallback per `--trip-*` nei componenti "globali"~~ **RISOLTO dal designer**: `theme/trip-themes.css` definisce un blocco `:root` di default (`--trip-accent`/`-soft`/`-rgb`/`-gradient`) → i componenti fuori da `[data-trip-theme]` (modal, bottom-sheet, toast, accordion, select, search) restano colorati con l'arancione di default. ⚠️ Si attiverà solo quando `trip-themes.css` sarà collegato al cut-over (prima di colors.css o con precedenza, vedi nodo conflitto sotto)
- [ ] Collisioni `.app` / `.card` / `.fab` con le classi attuali → si risolvono sostituendo l'HTML (consegna #9)
- [ ] Ordine di collegamento `<link>` al cut-over: tokens → colors → typography → spacing → motion → design-system → components/*

## ✅ Già risolto in fasi precedenti (per memoria)
- Fonte unica: spacing→spacing.css, motion→motion.css (`--motion-*`), tipografia→typography.css, layout/focus/selection→design-system.css
- Collisione token `--timeline-line/-node` (misura vs colore) → rinominati width/size vs color
- Glass/scrim tokenizzati per i primi componenti (`--glass-strong`, `--glass-nav`, `--scrim-bg`, `--nav-shadow`)
- `.hidden !important` autorizzato; Mapbox GL JS autorizzato nello stack

---

**Stato consegna**: 7/13 · #8 libreria componenti: 28 file archiviati · + `theme/trip-themes.css` (theme engine).
Questa checklist si aggiorna a ogni nuovo file e si esegue **tutta insieme** al consolidamento.
