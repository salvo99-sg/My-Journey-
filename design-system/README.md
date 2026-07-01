# My Journey — Design System

Indice e stato del Design System. Documento **vivo**: aggiornato a ogni consegna.

> ⚠️ Tutto il DS vive sul branch **`develop`** (integrazione). Il branch **`main`**
> (live su GitHub Pages) è **intatto**: la transizione sarà **simultanea** alla fine
> (decisione: accumula ora → cut-over unico). Per vedere i file: branch `develop`.

Legenda stato:
🟢 **collegato** (attivo nell'app, additivo, nessun effetto visivo) ·
🟡 **archiviato** (presente nel repo ma NON collegato; si attiva al cut-over) ·
⬜ **da consegnare**

---

## 🧱 Fondamenta (`design-system/`)

| File | Ruolo | Stato | Note |
|------|-------|-------|------|
| `tokens.css` | Token strutturali: safe-area, breakpoints, radius, icone, dimensioni componenti, z-index, blur, opacity, shadows, border, hero, timeline (misure), map, sheet, modal, badge, chip, avatar, ratio | 🟢 collegato | Fonte unica struttura |
| `colors.css` | Colori light/dark + glass/scrim/nav-shadow + status/badge + **14 destination theme** (`[data-trip-theme]`) | 🟢 collegato | Fonte unica colori |
| `spacing.css` | Scala spaziature (`--space-*`, 4pt) + utility stack/inline/mt/mb/p | 🟢 collegato | Fonte unica spacing |
| `typography.css` | Scala tipografica (`--fs-*`), pesi (`--fw-*`), tracking, classi titoli/testo + base `html/body/h1-h6` | 🟡 archiviato | Ha stili globali → si attiva al cut-over |
| `motion.css` | Durate (`--motion-*`), easing, transizioni, keyframes (fade/slide/scale/sheet/modal/spin/skeleton…) + regole globali `*`/`button`/`input` | 🟡 archiviato | ⚠️ **Sovrapposto da `styles/animations.css`** (valori token divergenti) → doppia fonte motion, vedi CONSOLIDATION |
| `styles/animations.css` | **Motion system nuovo**: token `--motion-*` (valori diversi) + `--ease-standard/-soft/-emphasized` + libreria keyframes + utility (`.fade-*`/`.pop`/`.float`/`.spin`…) + reduced-motion globale | 🟡 archiviato | ⚠️ Manca `--motion-normal`/`--motion-map` usati da 5 componenti → da consolidare |
| `styles/utilities.css` | **Utility layer atomico** (`u-*`, tutte `!important`): display/flex/text/spacing/border/shadow/bg/colori/position/safe-area/sr-only | 🟡 archiviato | Duplica utility unprefixed di typography/spacing → scegliere 1 convenzione al cut-over |
| `styles/helpers.css` | **Helper layer composito** (`h-*`): stack/inline/center/grid/surface/trip/image/text/interaction/scroll-snap/ratio/state/animation/safe | 🟡 archiviato | ⚠️ Usa `--space-sm/md/lg/xl` **inesistenti** + `--font-handwriting` (typo) → vedi CONSOLIDATION |
| `design-system.css` | Entry point: reset, layout (`.app`/`.page`/`.section`/`.grid`), superfici (`.card`/`.surface`/`.glass`), utility, `:focus-visible`/`::selection`, scrollbar | 🟡 archiviato | Reset globale → si attiva al cut-over |
| `theme/trip-themes.css` | **Theme engine**: `:root` default + 16 `[data-trip-theme]` con `--trip-accent`/`-rgb`/`-soft`/`-gradient`/`-header-overlay` + helper `.trip-*` | 🟡 archiviato | ⚠️ **Sovrappone/diverge** dai temi in `colors.css` (vedi CONSOLIDATION: doppia fonte) → da consolidare al cut-over |
| `THEME-MAP.md` | Mappatura temi app (IT) ⇄ DS (EN) + `THEME_KEY_MAP` | 📄 doc | ⚠️ da riallineare al nuovo elenco paesi di `trip-themes.css` |

## 🧩 Componenti (`design-system/components/`)

| File | Classe base | Stato |
|------|-------------|-------|
| `button.css` | `.btn` (+ primary/secondary/outline/ghost/danger/…) | 🟡 archiviato |
| `icon-button.css` | `.icon-btn` (+ filled/primary/glass/map/…) | 🟡 archiviato |
| `fab.css` | `.fab` (+ small/large/extended/glass/map/…) | 🟡 archiviato |
| `navigation.css` | `.navigation` (top nav) | 🟡 archiviato |
| `bottom-navigation.css` | `.bottom-nav` | 🟡 archiviato |
| `accordion.css` | `.accordion` (+ `__item.is-open`/`__badge`/…) | 🟡 archiviato |
| `calendar.css` | `.calendar` (+ `__day--today/--selected/--range`/…) | 🟡 archiviato |
| `select.css` | `.select` (+ `__field`/`__dropdown`/`__option.is-selected`/…) | 🟡 archiviato |
| `search.css` | `.search` (ricerca universale; + `__results`/`__item`/`__match`/…) | 🟡 archiviato |
| `map-dock.css` | `.map-dock` (+ `is-expanded`/`is-collapsed`/`__controls`/…) | 🟡 archiviato |
| `journey-timeline.css` | `.journey-timeline` (+ `.timeline-day`/`.timeline-stop`/…) | 🟡 archiviato |
| `map-markers.css` | `.map-marker` (+ `--hotel`/`--restaurant`/…, `.route-line`/…) | 🟡 archiviato |
| `header.css` | `.header` (top app bar) | 🟡 archiviato |
| `input.css` | `.input` / `.field` | 🟡 archiviato |
| `searchbar.css` | `.searchbar` (+ `--map`) | 🟡 archiviato |
| `trip-card.css` | `.trip-card` (+ stati) | 🟡 archiviato |
| `day-card.css` | `.day-card` (+ `__stop`) | 🟡 archiviato |
| `timeline-card.css` | `.timeline-card` | 🟡 archiviato |
| `bottom-sheet.css` | `.bottom-sheet` (+ `.is-open`) | 🟡 archiviato |
| `modal.css` | `.modal` | 🟡 archiviato |
| `album-card.css` | `.album-card` | 🟡 archiviato |
| `photo-card.css` | `.photo-card` | 🟡 archiviato |
| `ticket-card.css` | `.ticket-card` | 🟡 archiviato |
| `memory-card.css` | `.memory-card` | 🟡 archiviato |
| `empty-state.css` | `.empty-state` | 🟡 archiviato |
| `skeleton.css` | `.skeleton` | 🟡 archiviato |
| `toast.css` | `.toast` | 🟡 archiviato |

**27 componenti unificati su un unico branch.** I componenti sono **namespaced** (additivi) e dipendono dai token di `typography.css` + `motion.css` + `spacing.css`: funzioneranno appieno solo quando tutto il DS sarà collegato insieme (cut-over).

## ⚙️ JavaScript (`design-system/js/` — #10, nuova architettura modulare)

| File | Ruolo | Stato | Note |
|------|-------|-------|------|
| `js/core/app.js` | Core: bootstrap, lifecycle, eventi globali (online/offline/visibility/resize), carica e avvia i moduli, ripristina tema/lingua | 🟡 archiviato | ⚠️ Non è ESM reale; dipende da 9 moduli non ancora consegnati; chiavi storage diverse dall'app live → vedi CONSOLIDATION |
| `js/core/router.js` | Router hash-based: 11 route (home/trip/map/album/tickets/budget/packing/journal/memories/settings/trophies), show/hide `page.hidden`, transizione `.page-enter`, evento `route:change` | 🟡 archiviato | ⚠️ Dipende dagli id `page-*` dell'HTML #9; nessuna route `/admin` → vedi CONSOLIDATION |
| `js/core/storage.js` | Wrapper localStorage namespaced (`myjourney.1.0.*`): get/set/remove/has/toggle + CRUD array (push/update/delete by id) + export/import (backup) + size | 🟡 archiviato | ⚠️ Chiavi diverse dall'app live (`mj-*`) → serve migrazione; **non gestisce IndexedDB** (foto/biglietti) → vedi CONSOLIDATION |
| `js/core/state.js` | Stato reattivo centralizzato: store (user/journeys/currentJourney/map/ui…), get/set/update per dot-path, subscribe/notify, restore/persist via Storage | 🟡 archiviato | ⚠️ Doppia persistenza con storage; non in `App.loadModules` → vedi CONSOLIDATION |
| `js/core/theme.js` | Theme engine JS: light/dark (`data-theme`), trip theme (`data-trip-theme`), system preference, persistenza, toggle/restore | 🟡 archiviato | Pilota correttamente colors.css + trip-themes.css; trip-theme non ripristinato al boot via App → vedi CONSOLIDATION |
| `js/core/language.js` | i18n IT/EN: `set`/`toggle`/`register`/`t()`, auto-translate via `[data-i18n]`/`-placeholder`/`-title`/`-aria`, persistenza | 🟡 archiviato | ⚠️ Dizionario non ancora fornito (`register` non chiamato) → `t()` torna la chiave |
| `js/core/offline.js` | Stato online/offline: toggle `body.is-offline`, `State.set('offline')`, evento `offline:change` | 🟡 archiviato | ⚠️ Duplica gli handler online/offline di app.js (classe `.offline` vs `.is-offline`) → vedi CONSOLIDATION |
| `js/core/sync.js` | Coda sync locale (enqueue/flush/process), persistita in Storage; pronta per cloud futura | 🟡 archiviato | ⚠️ `process()` è stub (nessun backend) → inerte finché non c'è sync reale → vedi CONSOLIDATION |
| `js/core/notifications.js` | Notification API: init/request/show + `tripReminder` | 🟡 archiviato | ⚠️ Icona `/icons/icon-192.png` vs icone versionate live; solo immediate; iOS solo PWA → vedi CONSOLIDATION |
| `js/core/config.js` | Config statica (app/storage/ui/map/search/...), `Object.freeze` | 🟡 archiviato | ⚠️ `map.provider:OpenStreetMap` contraddice Mapbox (DECISO #5); non consumata dai moduli → vedi CONSOLIDATION |
| `js/core/constants.js` | Costanti immutabili (lingue/temi/16 trip-themes/transport/status/limiti/eventi) | 🟡 archiviato | ✅ TRIP_THEMES conferma i 16 temi; ⚠️ JOURNEY_STATUS ≠ --status-*; non consumate |
| `js/ui/gestures.js` | Swipe engine (touch → `gesture:swipe*`) | 🟡 archiviato | Da aggiungere a loadModules |
| `js/ui/modal.js` | Modal/sheet manager: open/close/toggle, backdrop, ESC, focus, stack, scroll-lock | 🟡 archiviato | 🔴 Aggiunge `.is-visible` ma `modal.css` usa `.modal-backdrop.is-open` → non apre. Vedi CONSOLIDATION |
| `js/ui/animations.js` | Motion engine JS: scroll-reveal (IntersectionObserver `[data-animate]`), stagger, counter, progress, shake/pulse, reduced-motion | 🟡 archiviato | ⚠️ `.shake` e reveal `[data-animate].is-visible` non stilati in animations.css → vedi CONSOLIDATION |
| `js/ui/ui-controls.js` | Wiring generico: tabs (`[data-tab]`), accordion (`[data-accordion]`), bottom-nav (`[data-route]`→Router) | 🟡 archiviato | ⚠️ Non in `App.loadModules`; tabs senza CSS dedicato; `getElementById(target)` senza null-check → vedi CONSOLIDATION |
| `js/ui/toast.js` | Toast manager: queue, success/error/warning/info, auto-dismiss | 🟡 archiviato | ⚠️ Crea `.toast-container` ma CSS usa `.toast-stack`; omette icon/title; innerHTML non-escaped; non in loadModules → vedi CONSOLIDATION |
| `js/ui/loader.js` | Loader overlay: show/hide/progress (`#loader`/`.loader__text`/`.loader__progress`) | 🟡 archiviato | ⚠️ Nessun CSS `loader` consegnato; dipende da #loader (HTML #9); non in loadModules |
| `js/ui/fab.js` | FAB auto-hide su scroll (`.fab`+`.is-hidden`) | 🟡 archiviato | ✅ Combacia con fab.css; da aggiungere a loadModules |
| `js/modules/timeline.js` | Itinerario: expand/collapse giorni (`.timeline-day.is-open`), tappa corrente (`.is-current`), playback, auto-scroll | 🟡 archiviato | Conferma `journey-timeline.css` canonico; dipende da id tappe (HTML #9) |
| `js/modules/map.js` | Mappa: init, marker, rotta, fitBounds, locate, sync con timeline (`timeline:current`) | 🟡 archiviato | 🔴 Usa **Leaflet+OSM**, non Mapbox GL (stack live) → decisione utente; non usa map-markers.css → vedi CONSOLIDATION |
| `js/modules/search.js` | Ricerca: debounce, filtro `[data-searchable]`, history (Storage), highlight `.is-search-match` | 🟡 archiviato | ⚠️ Non usa le classi di search.css/searchbar.css (`.search__match`) → vedi CONSOLIDATION |
| `js/modules/autocomplete.js` | Suggerimenti destinazione: tastiera (frecce/invio/esc), filtro, history (Storage), item `.autocomplete-item` | 🟡 archiviato | ⚠️ Non in `App.loadModules`; `.autocomplete-item` non stilato; suggerimenti solo locali → vedi CONSOLIDATION |
| `js/modules/onboarding.js` | Onboarding slide-based: next/prev/skip, una-tantum (Storage `onboarding-completed`), via Modal | 🟡 archiviato | ⚠️ Non in `App.loadModules`; eredita bug modal `.is-visible`; chiave ≠ `mj-onboarded` → vedi CONSOLIDATION |
| `js/modules/gallery.js` | Foto/album: add/remove/all (Storage `gallery`) | 🟡 archiviato | 🔴 Salva foto in localStorage → deve usare IndexedDB (DECISO #6) → vedi CONSOLIDATION |
| `js/modules/tickets.js` | Biglietti: create/remove/get/all (Storage `tickets`) | 🟡 archiviato | ⚠️ Allegati → IndexedDB; non in loadModules |
| `js/modules/packing.js` | Valigia: add/toggle/update/remove/progress (Storage `packing`) | 🟡 archiviato | Dati piccoli, ok localStorage; non in loadModules |
| `js/modules/budget.js` | Budget/spese: setBudget/currency/addExpense/spent/remaining/% (Storage) | 🟡 archiviato | Dati piccoli, ok; non in loadModules |
| `js/modules/memories.js` | Ricordi: create/update/remove/all (Storage `memories`) | 🟡 archiviato | ⚠️ Media (foto/voce) → IndexedDB; non in loadModules |
| `js/modules/weather.js` | Meteo: cache/get/set (Storage `weather-cache`) | 🟡 archiviato | ⚠️ Stub, nessuna API reale → serve provider meteo + CSP |
| `js/modules/hotels.js` | Hotel: add/remove/get/all (Storage `hotels`) | 🟡 archiviato | CRUD metadati; non in loadModules |
| `js/modules/transport.js` | Trasporti: add/remove/all/next (Storage `transport`) | 🟡 archiviato | CRUD metadati; non in loadModules |
| `js/modules/currency.js` | Valute: set/convert/format (Intl), rate in Storage | 🟡 archiviato | ⚠️ rate solo EUR di default → convert NaN senza provider FX |
| `js/modules/share.js` | Condivisione: Web Share API + clipboard fallback + share immagine | 🟡 archiviato | Dipende da Toast + i18n `link_copied`; no init (on-demand) |
| `js/modules/export.js` | Backup JSON (Storage.export → download) | 🟡 archiviato | ⚠️ Solo localStorage, non i blob IndexedDB → backup incompleto |
| `js/modules/import.js` | Ripristino backup da file (JSON → Storage.import) | 🟡 archiviato | ⚠️ JSON.parse non protetto; version-check non implementato; solo localStorage |
| `js/modules/analytics.js` | Analytics locali privacy-first (track/clear/export, cap 1000) | 🟡 archiviato | ✅ Nessun tracciamento esterno; non in loadModules |
| `js/utils/validators.js` | Validatori: required/email/url/number/positive/date/min/maxLength | 🟡 archiviato | 🔴 `maxLength`/`minLength` tornano `undefined` (ASI bug) → vedi CONSOLIDATION |
| `js/utils/utils.js` | Helpers: debounce/throttle/uuid/format date-time/capitalize/slug/clamp/sleep/$/$$ | 🟡 archiviato | Libreria utility pulita |
| `js/ui/icons.js` | SVG sprite manager: init/create/replace (`[data-icon]`) | 🟡 archiviato | ⚠️ `/icons/icons.svg` assoluto → base-path |
| `js/bootstrap.js` | Bootstrap: init di TUTTI i moduli + registra SW | 🟡 archiviato | 🔴 Chiama `Journal.init()` non consegnato; doppia init con app.js → vedi CONSOLIDATION |

> Archiviato sotto `design-system/js/` per **non toccare** il `app.js` di root (live).

## 📚 Governance (root del repo)

| File | Contenuto |
|------|-----------|
| `CONTRIBUTING.md` | Regole di sviluppo (vincolanti) + eccezioni autorizzate |
| `BRAND-BIBLE.md` | Brand, principi, linguaggio visivo |

---

## 📦 Avanzamento consegna (scaletta fornita)

| # | Materiale | Stato |
|---|-----------|-------|
| 1 | `BRAND-BIBLE.md` | ✅ |
| 2 | `tokens.css` | ✅ |
| 3 | `typography.css` | ✅ |
| 4 | `colors.css` | ✅ |
| 5 | `spacing.css` | ✅ |
| 6 | `motion.css` | ✅ |
| 7 | `design-system.css` | ✅ |
| 8 | Libreria completa componenti | 🟡 in corso (button, icon-button, fab, navigation, bottom-navigation, accordion, calendar, select, search, map-dock, journey-timeline, map-markers) |
| 9 | HTML completo di tutte le schermate | ⬜ |
| 10 | JavaScript ES Modules | 🟡 in corso (core: app/router/storage/state/theme/language/offline/sync/notifications · ui: modal/animations/ui-controls/gestures/toast/loader/fab · modules: …/gallery/tickets/packing/budget/memories) |
| 11 | SVG (150+ icone) | 🟡 in corso (icons/icons.svg — sprite campione ~10 di ~200) |
| 12 | Logo e PWA Assets | ⬜ |
| 13 | Documentazione tecnica finale | 🟡 in corso (docs: ARCHITECTURE, DESIGN_SYSTEM, COMPONENT_GUIDE, CONTRIBUTING, README, CHANGELOG) |

---

## 🔧 Nodi da sciogliere prima del cut-over (P4)

1. **Responsive `.page`** (allargamento 720/1180 su tablet/desktop) da ri-applicare in `design-system.css` (oggi `.app` ha solo `max-width:480`).
2. **Colori brand non tokenizzati**: taupe `#6B645D`, oliva `#708050`.
3. **Durate motion vs mockup**: hero `680→650ms`, riproduzione/map `900→1200ms`.
4. **Collisioni** `.app`/`.card`/`.fab` con le classi attuali → si risolvono con l'HTML nuovo (#9).
5. **`#fff` hardcoded** in spinner/testi su sfondi colorati → eventuale `--color-text-inverse`.

## ▶️ Attivazione (al cut-over)

Ordine di collegamento previsto (via `<link>` in `index.html`):
```
tokens.css → colors.css → typography.css → spacing.css → motion.css
→ design-system.css → components/*.css
```
Al cut-over: si collega tutto insieme, si sostituisce l'HTML/JS delle schermate,
si aggancia il theming `data-trip-theme`, si aggiorna logo/PWA. La logica
applicativa esistente resta; cambia solo la presentazione.
