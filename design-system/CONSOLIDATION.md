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
5. **Mappa → Mapbox GL JS resta**: riscrivere `js/modules/map.js` su Mapbox **mantenendo la stessa API** (init/addMarker/removeMarker/selectMarker/focusMarker/drawRoute/locate/clear/refresh). Conservare geocoding `country=`/`language=it`, `setConfigProperty` lingua/lightPreset, marker custom `map-markers.css` (via marker DOM Mapbox). CSP invariata (`api.mapbox.com`). Leaflet/OSM **scartato**.
6. **Foto/biglietti → layer IndexedDB aggiunto da me al cut-over**: piccolo modulo media che riusa lo schema `agenda-viaggi-db` esistente, agganciato all'architettura a moduli. `storage.js` resta per localStorage. Garantire che foto/biglietti esistenti **non si perdano**.
7. **`/admin` → reintrodurre come route nascosta** nel nuovo router + logica proprietario (`mj-proprietario`), comportamento come l'app live (accesso nascosto, nessun dato esposto).
8. **Palette POI → tokenizzare `--marker-*`**: creare scala token (`--marker-hotel/-restaurant/-attraction/-photo/-shopping/-train/-flight`) e convertire `map-markers.css`.

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
- [ ] **`map-markers.css`: palette categorie POI non tokenizzata** → hotel `#4F46E5`, restaurant `#EA580C`, attraction `#0F9D8A`, photo `#D946EF`, shopping `#F59E0B`, train `#2563EB`, flight `#DC2626`. Nessun token esistente le copre. ✅ **DECISO #8**: creare scala `--marker-*` e convertire il CSS. ⚠️ Alcune coincidono con accent dei temi (restaurant=default, attraction=tropical, flight=usa) ma sono semantica diversa (categoria, non destinazione)
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
- [ ] **`animations.js` ↔ `animations.css`**: (a) `shake()` aggiunge classe `.shake` ma `animations.css` ha solo `@keyframes shake`, **nessuna classe `.shake`** → no-op. Aggiungere `.shake{animation:shake ...}`. (b) scroll-reveal aggiunge `.is-visible` a `[data-animate]` ma **manca la regola CSS** `[data-animate]{opacity:0;…}` + `[data-animate].is-visible{…}` → nessun effetto. (c) `.is-visible` ora è **sovraccarica** (scroll-reveal + toast + manager modali): contesti diversi, ma da tenere a mente. `.fade-up`/`.pulse` OK (classi presenti)
- [ ] `day-card.css` `transition:background .18s` (durata fissa) → token `--motion-*`
- [ ] 🔵 `notifications.js`: wrapper Notification API (init/request/show/tripReminder). (a) `tripReminder` usa icona `/icons/icon-192.png` → l'app live ha le icone **alla root con nomi versionati** (`icon-192-v2.png`); allineare il path con la consegna PWA **#12**. (b) `request()` va chiamato **su gesto utente** (non in auto-init). (c) Solo notifiche **immediate** (nessuna schedulazione/push, serve SW+backend per i promemoria reali); su iOS funziona solo da PWA installata (16.4+). Non in `App.loadModules`. Forward-looking
- [ ] 🔵 `sync.js`: **scaffolding inerte** per sync cloud futura — `process()` è uno stub (`Promise.resolve`), nessun backend (l'app è local-only). `flush()` svuoterebbe la coda senza inviare nulla. Forward-looking (collegato alla futura ipotesi Supabase/Firebase): tenerlo dormiente finché non c'è un backend, non chiamare `flush()` finché `process()` non è reale. Non in `App.loadModules`
- [ ] **Gestione offline doppia**: `app.js` `bind()` ascolta già online/offline e toggla `body.offline`; `offline.js` ascolta gli stessi eventi e toggla `body.is-offline` + `State.set("offline")`. Due meccanismi e **due classi diverse** (`.offline` vs `.is-offline`). Al cut-over: tenere `offline.js` (più completo: State+evento), rimuovere gli handler inline di `app.js`, e uniformare la classe CSS (verificare quale usano gli stili). `Offline` va anche aggiunto a `App.loadModules`
- [ ] **`search.css` vs `searchbar.css` vs `search.js`**: TRE rappresentazioni della ricerca. `search.css` (`.search__results`/`__item`/`__match`) e `searchbar.css` (`.searchbar__result`) sono componenti col loro markup; ma `js/modules/search.js` lavora in modo **generico** su `[data-search-input]`/`[data-search-results]`/`[data-searchable]`, **clona** i nodi nei risultati e evidenzia con classe `.is-search-match` (che **nessuno** dei due CSS stila — loro usano `.search__match`). Al cut-over: scegliere il componente e **collegare il JS alle sue classi** (o definire `.is-search-match`)

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

## 🔴 Stack mappa — Leaflet vs Mapbox GL JS ✅ DECISO #5 (Mapbox vince, riscrivere map.js mantenendo API)
- [ ] **`js/modules/map.js` usa Leaflet + OpenStreetMap**, l'app live usa **Mapbox GL JS v3.4.0**. Divergenza profonda:
  - **Libreria**: `L.map`/`L.tileLayer`/`L.marker`/`L.polyline` (Leaflet) vs Mapbox GL. Tile da `tile.openstreetmap.org` vs Mapbox Standard style
  - **CSP**: l'attuale è `script-src 'self' https://api.mapbox.com`. Leaflet richiede CDN JS (es. unpkg) + tile/connect verso openstreetmap.org → **CSP da riscrivere**; CONTRIBUTING "Eccezioni autorizzate" cita Mapbox, non Leaflet
  - **Funzioni che si perdono passando a Leaflet/OSM**: geocoding Mapbox con `country=`/`language=it` (i fix di precisione), `setConfigProperty("basemap","language")` IT/EN, `lightPreset`, stile 3D Standard, token Mapbox URL-restricted
  - **Marker**: `map.js` usa `L.marker` default → **NON usa `map-markers.css`** (i pin a goccia/categorie POI del designer). Andrebbe `L.divIcon` con quelle classi, altrimenti il componente marker è inutile
  - **Bug minore**: `drawRoute` passa `color:"var(--trip-accent)"` a Leaflet → la CSS var non si risolve come attributo SVG stroke → rotta senza colore tema
  - ❓ **Da decidere**: (a) Leaflet vince → riscrivere CSP, ricablare `map-markers.css` via divIcon, riportare geocoding/lingua su un servizio compatibile, rinunciare a Mapbox; (b) Mapbox resta → riscrivere `map.js` su Mapbox GL mantenendo l'API del modulo (init/addMarker/drawRoute/focusMarker); (c) decido al cut-over. **Scelta non autonoma**
- [ ] `map.js` si sincronizza con la timeline (`timeline:current`→`focusMarker`) e usa container id `journey-map` (HTML #9). API pulita (init/addMarker/removeMarker/select/focus/drawRoute/locate/clear/refresh) → riusabile anche se si cambia libreria sotto

## 🔴 Base-path GitHub Pages (deploy) — path assoluti `/` rompono
- [ ] L'app live è servita sotto **`salvo99-sg.github.io/My-Journey-/`** (sotto-cartella). Ma `manifest.json` e altri file usano **path assoluti dalla root** (`start_url:"/"`, `scope:"/"`, `id:"/"`, `icons:"/icons/…"`, shortcuts `"/#…"`, screenshots `"/screenshots/…"`) + `notifications.js` `"/icons/icon-192.png"`. Su GitHub Pages project-site questi risolvono a `salvo99-sg.github.io/icons/…` (404), **non** a `/My-Journey-/icons/…`. Al cut-over: rendere i path **relativi** o prefissarli con `/My-Journey-/` (start_url/scope `"./"`/`"/My-Journey-/"`). 🔴 Altrimenti PWA install/icone/shortcut rotti

## 🟣 Config / Constants (#10) — dichiarati ma non collegati
- [ ] `config.js` `map.provider:"OpenStreetMap"` **contraddice DECISO #5 (Mapbox)** → aggiornare a Mapbox al cut-over (e i relativi parametri zoom/animationDuration)
- [ ] `config.js` e `constants.js` sono **frozen ma non consumati** dai moduli: i valori sono **duplicati** hardcoded (es. `Search.delay=220` vs `Config.search.debounce=220`; zoom 13 in `map.js` vs `Config.map.defaultZoom`; eventi stringa vs `Constants.APP_EVENTS`). Al cut-over: cablare i moduli su Config/Constants (fonte unica) o accettare i duplicati
- [ ] 🟢 `constants.js` `TRIP_THEMES` elenca **gli stessi 16 temi** di `trip-themes.css` → **conferma DECISO #1** (trip-themes canonico, colors.css 14 superato)
- [ ] `constants.js` `JOURNEY_STATUS` (planning/active/completed/archived) ≠ token `--status-*` (planned/progress/completed/draft) → riconciliare la mappatura stato↔colore al cut-over
- [ ] `gestures.js`: swipe globali (`gesture:swipe*`) ok; va aggiunto a `loadModules`. Nessun nodo critico

## 🔵 PWA assets (#12) — manifest ricevuto, asset mancanti
- [ ] `pwa/manifest.json` archiviato. **Mancano i file referenziati**: `icons/icon-{72..512}.png` (logo #12), `screenshots/home.png`+`dashboard.png`. Da produrre al cut-over col logo Bob&Cosmo
- [ ] `theme_color:#0F172A` / `background_color:#FFFFFF` **divergono dalla palette DS** (bg cream `#FCF8F2`, navy `#1E3160`) → allineare (il background bianco causa flash su splash diverso dal tema)
- [ ] shortcut `"/#trip/new"` non gestito dal router flat (`resolve()` cerca route esatta → cade su home). Serve gestione sub-route/param nel router, oppure cambiare l'url shortcut
- [ ] Esiste già un `manifest.json` **live alla root**: al cut-over sostituirlo con questo (path corretti per base-path) — non duplicarlo

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
- [ ] 🔴 **`storage.js` NON gestisce IndexedDB**: è solo wrapper localStorage + `JSON.stringify` (l'header dice "Future IndexedDB compatible" = non ancora). L'app live tiene **foto e biglietti** in IndexedDB `agenda-viaggi-db` (blob binari, non serializzabili in JSON/localStorage). ✅ **DECISO #6**: al cut-over aggiungo io un layer IndexedDB (riusa schema `agenda-viaggi-db`) per i blob, agganciato ai moduli, così **foto e biglietti non si perdono**
- [ ] 🟢 `storage.js` `export()`/`import()` = meccanismo di **backup/restore** (JSON delle chiavi namespaced). Utile: abilita un trasferimento manuale dei dati tra dispositivi (collegato alla vecchia discussione "niente cross-device") — da esporre in UI Impostazioni al cut-over. Limite: copre solo localStorage, non i blob IndexedDB
- [ ] 🔵 **Sostituzione totale di `app.js` (root, ~3200 righe)**: la nuova architettura rimpiazza tutta la logica live. Rischio più alto del cut-over → i moduli nuovi devono re-implementare TUTTE le feature attuali (CRUD viaggi, IndexedDB foto/biglietti, geocoding+country, Mapbox lingua/preset, i18n IT/EN, PWA/SW, onboarding, /admin). Da verificare feature-by-feature prima di pubblicare
- [ ] Nota: archiviato in `design-system/js/` per non toccare il `app.js` di root (live). La cartella JS del DS è separata dalla root fino al cut-over
- [ ] 🟡 **Doppia persistenza dati**: `state.js` salva l'intero store (inclusi `journeys[]`) sotto un'unica chiave `myjourney.1.0.state`, mentre `storage.js` offre CRUD per-collezione (`push/update/delete` su chiavi separate). Due strategie sovrapposte per i viaggi → al cut-over sceglierne UNA (consigliato: storage per-collezione per i viaggi, `state` solo per UI/sessione volatile)
- [ ] 🔵 **Moduli non in `App.loadModules`**: l'array carica theme/router/storage/modal/timeline/map/search/language/animations, ma **non `State`**, **`Autocomplete`**, **`Onboarding`**, **`UIControls`** → i loro `init()` non vengono chiamati dall'App. Vanno registrati (State prima di Theme; Onboarding dopo Modal; Autocomplete e UIControls dopo il render dell'HTML)
- [ ] 🟡 `ui-controls.js`: wiring generico tab/accordion/bottom-nav via `data-*`. (a) `accordions()` usa `[data-accordion]`+`[data-toggle]`+`.is-open` → compatibile con `accordion.css` se l'HTML mette quegli attributi su `.accordion__item`/`__header`. (b) `bottomNavigation()` usa `[data-route]`→`Router.go` (ok) e `.is-active` di `bottom-navigation.css` (ok). (c) **tabs**: `.is-active` su `[data-tab]` ma **nessun componente "tab"** lo stila → serve un piccolo CSS; inoltre `getElementById(target).hidden=false` **senza null-check** → eccezione se il target manca. Dipende da `data-*` (HTML #9)
- [ ] 🟡 `onboarding.js`: usa `Modal.open("onboarding")` → eredita il bug `modal.js` (`.is-visible` vs `.modal-backdrop.is-open`): finché non si allinea il modale, l'onboarding non si mostra. Chiave Storage `onboarding-completed` (→ `myjourney.1.0.onboarding-completed`) ≠ live `mj-onboarded` → da migrare. Dipende da `#onboarding`/`.onboarding-slide`/`[data-next|prev|skip]` (HTML #9)
- [ ] 🟡 `autocomplete.js`: crea item `.autocomplete-item` / `.is-selected` → **nessun componente CSS li stila** (select/search hanno altre classi). Al cut-over riusare lo stile opzioni di `select.css`/`search.css` o aggiungere un piccolo CSS. Suggerimenti **solo locali** (Storage `autocomplete`, history): per il vero autocomplete destinazioni serve un'API geocoding (legato alla decisione mappa Leaflet/Mapbox). Dipende da `data-autocomplete*` (HTML #9)
- [ ] 🟡 **Tema persistito due volte**: `theme.js set()` scrive sia `Storage.set("theme")` sia `State.set("theme")` (che a sua volta persiste in `state`). Ridondanza → un'unica fonte
- [ ] 🔵 **Trip-theme non ripristinato al boot**: `App.restorePreferences()` chiama `Theme.set()`+`Language.set()`, NON `Theme.restore()` → il `data-trip-theme` salvato non viene riapplicato all'avvio. Usare `Theme.restore()` (che gestisce anche trip-theme) o aggiungere la chiamata
- [ ] 🟡 `state.js` `notify()` è solo a **path esatto** (nessun bubbling): un subscribe su `map` non scatta per `map.zoom`. Nota architetturale, valutare se serve match gerarchico
- [ ] 🔴 **`modal.js` ↔ `modal.css` mismatch classi**: il JS aggiunge `.is-visible` (su backdrop e modal), ma il CSS attiva la visibilità via **`.modal-backdrop.is-open`** (e `.modal-backdrop.is-open .modal`). Così il modale **non si apre**. Inoltre `modal.css` si aspetta il modale **annidato dentro `.modal-backdrop`** (dipendenza struttura HTML #9). Da allineare: usare `.is-open` sul backdrop o cambiare il CSS
- [ ] 🟡 **Convenzione classe "aperto" incoerente** tra componenti e manager: modal backdrop `.is-open`; bottom-sheet sheet `.is-open` + backdrop `.is-visible`; toast `.is-visible`; `modal.js` usa `.is-visible` ovunque. Unificare un'unica convenzione (es. `.is-open` per i contenitori, `.is-visible` per i backdrop) al cut-over
- [ ] 🔵 **`language.js`: dizionario non ancora fornito**: `register(data)` non è mai chiamato (le stringhe i18n IT/EN sono una consegna a parte) → `t()` restituisce la chiave finché il dizionario non viene registrato. Atteso. NB il nuovo `Language.t()` (metodo) sostituisce il `t()` globale dell'app live
- [ ] 🟢 **`timeline.js` conferma `journey-timeline.css` come canonico**: il JS bersaglia `.journey-timeline`/`.timeline-day`/`.timeline-stop`/`.is-open`/`.is-current` (≠ `.timeline__item` di `timeline-card.css`). Rafforza il nodo "famiglia timeline frammentata": **timeline-card.css probabilmente ridondante**. `setCurrent(id)` dipende dagli id delle tappe (HTML #9)
- [ ] **`js/core/router.js` dipende dall'HTML #9**: si aspetta elementi con id `page-home`/`page-trip`/`page-map`/`page-album`/`page-tickets`/`page-budget`/`page-packing`/`page-journal`/`page-memories`/`page-settings`/`page-trophies`. L'HTML attuale ha una struttura schermate diversa → questi id arriveranno con la consegna #9. Usa `.page-enter` (da `animations.css`) per la transizione
- [ ] `router.js`: **nessuna route `/admin`** né logica owner. ✅ **DECISO #7**: reintrodurre `/admin` come **route nascosta** + logica proprietario (`mj-proprietario`), comportamento come l'app live
- [ ] 🟡 `router.js` transizione `page-enter` probabilmente troncata: aggiunge la classe e la rimuove al `requestAnimationFrame` successivo (~1 frame) → l'animazione `fadeUp` non fa in tempo a girare. Valutare rimozione su `animationend` o durata. Minore
- [ ] `router.js` amplia le sezioni rispetto all'app attuale (trophies, journal, memories, packing, budget separati): verificare che l'HTML/JS #9-#10 implementi davvero queste pagine

## ✅ Già risolto in fasi precedenti (per memoria)
- Fonte unica: spacing→spacing.css, motion→motion.css (`--motion-*`), tipografia→typography.css, layout/focus/selection→design-system.css
- Collisione token `--timeline-line/-node` (misura vs colore) → rinominati width/size vs color
- Glass/scrim tokenizzati per i primi componenti (`--glass-strong`, `--glass-nav`, `--scrim-bg`, `--nav-shadow`)
- `.hidden !important` autorizzato; Mapbox GL JS autorizzato nello stack

---

**Stato consegna**: 7/13 · #8 libreria componenti: 28 file archiviati · + `theme/trip-themes.css` (theme engine) · + `styles/animations.css` (motion system) · + `styles/utilities.css` (utility layer) · + `styles/helpers.css` (helper layer) · **#10 JS avviato**: core (app, router, storage, state, theme, language) · ui (modal, animations) · modules (timeline, map, search, autocomplete, onboarding). Tutti i 9 moduli di App.loadModules consegnati + extra (state, autocomplete, onboarding, ui-controls, offline, sync, notifications, gestures) da registrare. + config/constants (statici).
Questa checklist si aggiorna a ogni nuovo file e si esegue **tutta insieme** al consolidamento.
