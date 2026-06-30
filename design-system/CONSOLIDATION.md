# Design System — Piano di Consolidamento

Elenco **vivo** dei nodi da risolvere **in un unico momento**, a pacchetto completo,
**prima del cut-over** (decisione: accumula ora → consolida e attiva alla fine).

> Finché questa lista non è chiusa, l'app live (`main`) resta intatta e i file DS
> restano archiviati su `develop` senza essere collegati.

Legenda: 🔴 bug (non rende) · 🟠 coerenza (hardcoded vs token esistente) · 🟡 duplicazione · 🔵 strutturale

---

## ✅ DECISIONI PRESE (checkpoint 2026-06-30) — da eseguire AL CUT-OVER
1. **Temi → `trip-themes.css` è fonte unica**. Al cut-over: rimuovere il blocco `[data-trip-theme]` da `colors.css`; accettare il cambio palette di 9 temi e il nuovo elenco paesi (−spain/china/netherlands/indonesia/uae · +canada/norway/australia/brazil/morocco/india); riallineare `THEME-MAP.md`. Ordine `<link>`: `trip-themes.css` dopo `colors.css`.
2. **Motion → `animations.css` è fonte unica** + **aggiungere `--motion-normal` e `--motion-map`** (per non rompere button/fab/icon-button/navigation/bottom-navigation). Rimuovere `motion.css`; migrare eventuali keyframe unici prima.
3. **Spacing → aggiungere alias named** `--space-sm:8px` / `-md:16px` / `-lg:20px` / `-xl:24px` mappati sulla scala numerica (così `helpers.css` funziona senza modificarlo). Resta da correggere comunque il typo `--font-handwriting`→`--font-handwritten`.
4. **Utility → `u-*` atomici + `h-*` compositi**; rimuovere le utility unprefixed duplicate da `typography.css`/`spacing.css` (es. `.text-*`/`.fw-*`/`.mt-*`/`.stack`/`.inline`) e `.hidden` (tenere `.u-hidden`).

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
- [ ] **`helpers.css`: spacing token inesistenti** → usa `--space-md/-sm/-lg/-xl` (named) ma `spacing.css` ha scala **numerica** `--space-1..--space-24`. ✅ **DECISO #3**: aggiungere alias named `--space-sm:8px`/`-md:16px`/`-lg:20px`/`-xl:24px` mappati sui numerici (helpers resta invariato)
- [ ] **`helpers.css`: `.h-handwriting` usa `--font-handwriting`** ma il token reale è `--font-handwritten` (typography.css) → non risolve

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
- [ ] `helpers.css`: `#fff` su `.h-trip-gradient` (sfondo gradiente) → `--color-text-inverse`

## 🟡 Duplicazioni / doppi meccanismi
- [ ] `.skeleton` definito 2 volte (`motion.css` shimmer vs `skeleton.css` ::after) → tenere `skeleton.css`, rimuovere da `motion.css` (+ keyframe `shimmer` orfano)
- [ ] Bottom-sheet apertura: `.is-open` (transition) vs `motion.css .bottom-sheet--open` (animation) → un solo meccanismo
- [ ] `motion.css .timeline-item` (trattino) orfana → i componenti usano altri nomi (vedi sotto)
- [ ] **Famiglia timeline frammentata**: `journey-timeline.css` (`.timeline-day`/`.timeline-stop`/`.timeline`) vs `timeline-card.css` vs `day-card.css` (`.day-card__stop`) vs orfana `motion.css .timeline-item`. Convenzioni di naming divergenti per lo stesso dominio (giorno+tappe) → al cut-over scegliere UNA struttura. Attenzione anche a `.timeline` (nome generico) come possibile collisione
- [ ] `input.css ::selection` duplica il `::selection` globale di `design-system.css`
- [ ] **Tre convenzioni utility/helper**: `styles/utilities.css` (`u-*`, `!important`) + `styles/helpers.css` (`h-*`) + classi unprefixed in `typography.css`/`spacing.css`. ✅ **DECISO #4**: tenere `u-*` (atomici) + `h-*` (compositi); rimuovere le unprefixed duplicate (`.text-*`/`.fw-*`/`.mt-*`/`.stack`/`.inline`) e `.hidden` (tenere `.u-hidden`)
- [ ] `empty-state.css` keyframe `emptyFloat` ≈ `floating` di `motion.css`
- [ ] `day-card.css` `transition:background .18s` (durata fissa) → token `--motion-*`
- [ ] **`search.css` vs `searchbar.css`**: due componenti di ricerca distinti (`.search` = ricerca universale con dropdown risultati; `.searchbar`/`searchbar--map` = barra compatta inline/mappa). Nessuna collisione di classi, ma sovrapposizione concettuale → al cut-over chiarire ruoli ed evitare doppioni di markup

## 🔴 Doppia fonte temi destinazione — colors.css vs trip-themes.css ✅ DECISO #1 (trip-themes.css vince)
- [ ] **Due definizioni divergenti** degli stessi `[data-trip-theme]`:
  - `colors.css` (collegato): 14 temi (japan, italy, greece, iceland, egypt, tropical, france, usa, uk, **spain, china, netherlands, indonesia, uae**), `--trip-accent-soft` come **hex**, **nessun** `--trip-accent-rgb`, nessun `--trip-header-overlay`
  - `theme/trip-themes.css` (nuovo, archiviato): `:root` default + 16 temi (japan, italy, france, greece, egypt, tropical, usa, **canada, norway, australia, brazil, morocco, india**), `--trip-accent-soft` come **rgba**, **con** `--trip-accent-rgb`, `--trip-header-overlay`, helper `.trip-*`
  - Valori **diversi** per i temi in comune (es. japan `#C94C63` vs `#E63946`; italy `#A64F2F` vs `#2A9D8F`; usa `#B44A46` vs `#DC2626`; uk `#D9893B` vs `#334155`…)
  - Set paesi diverso: **rimossi** spain/china/netherlands/indonesia/uae · **aggiunti** canada/norway/australia/brazil/morocco/india
  - ❓ **Da decidere**: quale fonte vince? Ipotesi: `trip-themes.css` è l'evoluzione (ha rgb+default+helper) → rimuovere il blocco `[data-trip-theme]` da `colors.css` e tenere `trip-themes.css` come unica fonte. Ma cambia la palette di 9 temi e l'elenco paesi → **scelta del designer/utente, non autonoma**
  - Impatto: `THEME-MAP.md` va riallineato (mappa IT⇄EN + elenco paesi); verificare quali `data-trip-theme` usa davvero l'app
- [ ] `--trip-header-overlay`: nuovo token definito **solo** su `:root` (default) e `japan` → mancante sugli altri 15 temi (eredita il default `rgba(0,0,0,.24)`). Da valutare se serve per-tema o se basta il default

## 🔴 Doppia fonte motion — motion.css vs styles/animations.css ✅ DECISO #2 (animations.css vince + aggiungere --motion-normal/--motion-map)
- [ ] **Due fonti motion divergenti**:
  - `motion.css` (archiviato, fonte attuale): token `--motion-instant/fast/normal/medium/slow/hero/map` + `--ease-standard` + regole globali `*`/`button`/`input` + keyframes
  - `styles/animations.css` (nuovo): token `--motion-instant/fast/medium/slow/hero` + `--ease-standard/-soft/-emphasized` + libreria keyframes + utility (`.fade-in`/`.fade-up`/`.scale-in`/`.pop`/`.float`/`.pulse`/`.spin`) + reduced-motion globale
  - **Valori diversi** sugli stessi token: `--motion-fast` 120→**160ms**, `--motion-medium` 340→**280ms**, `--motion-slow` 520→**420ms**, `--motion-hero` 680→**700ms**; `--ease-standard` `cubic-bezier(.22,.61,.36,1)` → `(.20,.80,.20,1)`. Anche **`--ease-soft` diverge**: `motion.css` `(.20,.80,.20,1)` vs `animations.css` `(.25,.90,.25,1)`
  - ⚠️ **`animations.css` NON definisce `--motion-normal` né `--motion-map`**. Ma `--motion-normal` è usato da 5 componenti già archiviati (**button, fab, icon-button, navigation, bottom-navigation**) e `--motion-map` da `motion.css`. Se `animations.css` **sostituisce** `motion.css` → quelle transizioni si rompono (token undefined)
  - ❓ **Da decidere**: tenere `animations.css` come unica fonte motion E aggiungere `--motion-normal`/`--motion-map` (o rimappare i 5 componenti su `--motion-medium`), oppure fondere le due. Scelta non autonoma
- [ ] Keyframe duplicati tra `motion.css` e `animations.css` (`floating`, `spin`, `shimmer`, `sheetOpen/Close`, `modalOpen/Close`, `fade*`, `scaleIn`…) → al cut-over una sola fonte. NB `animations.css .pulse` è scale-based (≠ `markerPulse`/`timelinePulse` che sono ring box-shadow): non confondere
- [ ] `animations.css` reduced-motion globale (`*`/`::before`/`::after` con `!important`) rende **ridondanti** i blocchi reduced-motion per-componente (innocui, ma rimovibili). `!important` qui è già autorizzato (CONTRIBUTING)
- [ ] `successRing` (in `animations.css`) usa `--trip-accent-rgb` → ok una volta collegato `trip-themes.css`

## 🔵 Strutturali / fondamenta
- [ ] **Responsive `.page`** (allargamento 720/1180 tablet/desktop) da ri-applicare in `design-system.css` (`.app`/`.page`); oggi solo `max-width:480`
- [ ] Tokenizzare colori brand **taupe `#6B645D`** e **oliva `#708050`**
- [ ] Durate motion vs mockup: hero `680→650ms`, map `900→1200ms`
- [x] ~~Fallback per `--trip-*` nei componenti "globali"~~ **RISOLTO dal designer**: `theme/trip-themes.css` definisce un blocco `:root` di default (`--trip-accent`/`-soft`/`-rgb`/`-gradient`) → i componenti fuori da `[data-trip-theme]` (modal, bottom-sheet, toast, accordion, select, search) restano colorati con l'arancione di default. ⚠️ Si attiverà solo quando `trip-themes.css` sarà collegato al cut-over (prima di colors.css o con precedenza, vedi nodo conflitto sotto)
- [ ] Collisioni `.app` / `.card` / `.fab` con le classi attuali → si risolvono sostituendo l'HTML (consegna #9)
- [ ] Ordine di collegamento `<link>` al cut-over: tokens → colors → typography → spacing → motion → design-system → components/*
- [ ] **Governance `!important`**: `styles/utilities.css` è un layer interamente `!important` (per design, è normale negli utility atomici). CONTRIB.md "Eccezioni autorizzate" oggi cita solo Mapbox + `!important` per reduced-motion e `.hidden` → al cut-over **estendere l'autorizzazione** al layer utility `u-*` (rispettando la decisione "rispetta la contributing")

## 🟣 Migrazione JavaScript (#10 — nuova architettura modulare)
- [ ] **`js/core/app.js` ≠ ES Module reale**: nessun `import`/`export`, è un oggetto globale `App` + riferimenti a globali. La scaletta lo chiama "ES Modules" → al cut-over decidere: ESM vero (`<script type="module">` + import/export) o pattern globale/IIFE. CSP `script-src 'self'` compatibile con entrambi
- [ ] **Dipende da 9 moduli non ancora consegnati**: `Theme`, `Router`, `Storage`, `Modal`, `Timeline`, `JourneyMap`, `Search`, `Language`, `Animations`. Finché mancano, `loadModules()`/`restorePreferences()` lanciano ReferenceError → il core non gira da solo (atteso: arriveranno nelle prossime consegne)
- [ ] 🔴 **Mismatch chiavi storage — CONFERMATO da `storage.js`**: il modulo namespaces le chiavi come `myjourney.1.0.<name>` (es. `myjourney.1.0.theme`, `myjourney.1.0.language`), mentre l'app live usa `mj-theme` / `mj-lang` / `agenda-viaggi-v2` / `mj-utente` / `mj-onboarded` / `mj-proprietario` / `pm-*`. **Nessuna sovrapposizione** → senza migrazione il nuovo Storage parte vuoto: tema/lingua resettati e **i viaggi salvati spariscono**. Al cut-over serve una **routine di migrazione una-tantum** (leggi vecchie chiavi → scrivi `myjourney.1.0.*` → marca migrato). NB: `version` è dentro la chiave → un futuro bump (`1.1`) orfanizza i dati se non si migra di nuovo
- [ ] 🔴 **`storage.js` NON gestisce IndexedDB**: è solo wrapper localStorage + `JSON.stringify` (l'header dice "Future IndexedDB compatible" = non ancora). L'app live tiene **foto e biglietti** in IndexedDB `agenda-viaggi-db` (blob binari, non serializzabili in JSON/localStorage). Serve un modulo/persistenza separata per i blob al cut-over, altrimenti **foto e biglietti si perdono**
- [ ] 🟢 `storage.js` `export()`/`import()` = meccanismo di **backup/restore** (JSON delle chiavi namespaced). Utile: abilita un trasferimento manuale dei dati tra dispositivi (collegato alla vecchia discussione "niente cross-device") — da esporre in UI Impostazioni al cut-over. Limite: copre solo localStorage, non i blob IndexedDB
- [ ] 🔵 **Sostituzione totale di `app.js` (root, ~3200 righe)**: la nuova architettura rimpiazza tutta la logica live. Rischio più alto del cut-over → i moduli nuovi devono re-implementare TUTTE le feature attuali (CRUD viaggi, IndexedDB foto/biglietti, geocoding+country, Mapbox lingua/preset, i18n IT/EN, PWA/SW, onboarding, /admin). Da verificare feature-by-feature prima di pubblicare
- [ ] Nota: archiviato in `design-system/js/` per non toccare il `app.js` di root (live). La cartella JS del DS è separata dalla root fino al cut-over
- [ ] 🟡 **Doppia persistenza dati**: `state.js` salva l'intero store (inclusi `journeys[]`) sotto un'unica chiave `myjourney.1.0.state`, mentre `storage.js` offre CRUD per-collezione (`push/update/delete` su chiavi separate). Due strategie sovrapposte per i viaggi → al cut-over sceglierne UNA (consigliato: storage per-collezione per i viaggi, `state` solo per UI/sessione volatile)
- [ ] 🔵 **`State` non è in `App.loadModules`**: l'array carica theme/router/storage/modal/timeline/map/search/language/animations, ma **non `State`** → `State.init()` non viene chiamato dall'App, eppure `theme.js` usa `State.set`. Va registrato (e inizializzato prima di Theme)
- [ ] 🟡 **Tema persistito due volte**: `theme.js set()` scrive sia `Storage.set("theme")` sia `State.set("theme")` (che a sua volta persiste in `state`). Ridondanza → un'unica fonte
- [ ] 🔵 **Trip-theme non ripristinato al boot**: `App.restorePreferences()` chiama `Theme.set()`+`Language.set()`, NON `Theme.restore()` → il `data-trip-theme` salvato non viene riapplicato all'avvio. Usare `Theme.restore()` (che gestisce anche trip-theme) o aggiungere la chiamata
- [ ] 🟡 `state.js` `notify()` è solo a **path esatto** (nessun bubbling): un subscribe su `map` non scatta per `map.zoom`. Nota architetturale, valutare se serve match gerarchico
- [ ] 🔴 **`modal.js` ↔ `modal.css` mismatch classi**: il JS aggiunge `.is-visible` (su backdrop e modal), ma il CSS attiva la visibilità via **`.modal-backdrop.is-open`** (e `.modal-backdrop.is-open .modal`). Così il modale **non si apre**. Inoltre `modal.css` si aspetta il modale **annidato dentro `.modal-backdrop`** (dipendenza struttura HTML #9). Da allineare: usare `.is-open` sul backdrop o cambiare il CSS
- [ ] 🟡 **Convenzione classe "aperto" incoerente** tra componenti e manager: modal backdrop `.is-open`; bottom-sheet sheet `.is-open` + backdrop `.is-visible`; toast `.is-visible`; `modal.js` usa `.is-visible` ovunque. Unificare un'unica convenzione (es. `.is-open` per i contenitori, `.is-visible` per i backdrop) al cut-over
- [ ] 🔵 **`language.js`: dizionario non ancora fornito**: `register(data)` non è mai chiamato (le stringhe i18n IT/EN sono una consegna a parte) → `t()` restituisce la chiave finché il dizionario non viene registrato. Atteso. NB il nuovo `Language.t()` (metodo) sostituisce il `t()` globale dell'app live
- [ ] 🟢 **`timeline.js` conferma `journey-timeline.css` come canonico**: il JS bersaglia `.journey-timeline`/`.timeline-day`/`.timeline-stop`/`.is-open`/`.is-current` (≠ `.timeline__item` di `timeline-card.css`). Rafforza il nodo "famiglia timeline frammentata": **timeline-card.css probabilmente ridondante**. `setCurrent(id)` dipende dagli id delle tappe (HTML #9)
- [ ] **`js/core/router.js` dipende dall'HTML #9**: si aspetta elementi con id `page-home`/`page-trip`/`page-map`/`page-album`/`page-tickets`/`page-budget`/`page-packing`/`page-journal`/`page-memories`/`page-settings`/`page-trophies`. L'HTML attuale ha una struttura schermate diversa → questi id arriveranno con la consegna #9. Usa `.page-enter` (da `animations.css`) per la transizione
- [ ] `router.js`: **nessuna route `/admin`** né logica owner. L'app live ha gestione admin/proprietario (`mj-proprietario`) → al cut-over decidere se reintrodurla nel router o tenerla fuori (route nascosta)
- [ ] 🟡 `router.js` transizione `page-enter` probabilmente troncata: aggiunge la classe e la rimuove al `requestAnimationFrame` successivo (~1 frame) → l'animazione `fadeUp` non fa in tempo a girare. Valutare rimozione su `animationend` o durata. Minore
- [ ] `router.js` amplia le sezioni rispetto all'app attuale (trophies, journal, memories, packing, budget separati): verificare che l'HTML/JS #9-#10 implementi davvero queste pagine

## ✅ Già risolto in fasi precedenti (per memoria)
- Fonte unica: spacing→spacing.css, motion→motion.css (`--motion-*`), tipografia→typography.css, layout/focus/selection→design-system.css
- Collisione token `--timeline-line/-node` (misura vs colore) → rinominati width/size vs color
- Glass/scrim tokenizzati per i primi componenti (`--glass-strong`, `--glass-nav`, `--scrim-bg`, `--nav-shadow`)
- `.hidden !important` autorizzato; Mapbox GL JS autorizzato nello stack

---

**Stato consegna**: 7/13 · #8 libreria componenti: 28 file archiviati · + `theme/trip-themes.css` (theme engine) · + `styles/animations.css` (motion system) · + `styles/utilities.css` (utility layer) · + `styles/helpers.css` (helper layer) · **#10 JS avviato**: core (app, router, storage, state, theme, language) · ui (modal) · modules (timeline).
Questa checklist si aggiorna a ogni nuovo file e si esegue **tutta insieme** al consolidamento.
