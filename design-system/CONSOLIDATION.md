# Design System — Piano di Consolidamento

Elenco **vivo** dei nodi da risolvere **in un unico momento**, a pacchetto completo,
**prima del cut-over** (decisione: accumula ora → consolida e attiva alla fine).

> Finché questa lista non è chiusa, l'app live (`main`) resta intatta e i file DS
> restano archiviati su `develop` senza essere collegati.

Legenda: 🔴 bug (non rende) · 🟠 coerenza (hardcoded vs token esistente) · 🟡 duplicazione · 🔵 strutturale

---

## 🔎 AUDIT FINALE AUTOMATICO (2026-06-30, notte) — esito
Scansione di tutti i file archiviati (CSS + JS) per scovare problemi nascosti:
- **Token CSS usati ma non definiti** (in TUTTO il DS): solo i 9 già tracciati → `--color-background` (ticket-card), `--font-handwriting` (helpers), `--shadow-2xl` (modal), `--space-sm/md/lg/xl` (helpers), `--z-dock` (map-dock), `--z-overlay` (bottom-sheet). **Nessun nuovo.**
- **Keyframe usati ma non definiti**: solo `pulse-marker` (day-card, timeline-card) → già tracciato.
- **Keyframe duplicati tra file**: `floating`/`pulse`/`shimmer`/`spin` in `motion.css`+`animations.css` → coperti da DECISO #2 (animations vince, rimuovere motion.css).
- **JS syntax-check (`node --check`)**: **20/20 file OK**, nessun errore di parsing.
→ Conclusione: la checklist sotto è **completa**; non sono emersi difetti non catalogati. Restano da *consegnare* (non da scoprire): HTML #9, 5 moduli JS, SVG #11, asset #12, i18n.

## ✅ DECISIONI PRESE (checkpoint 2026-06-30) — da eseguire AL CUT-OVER
1. **Temi → `trip-themes.css` è fonte unica**. Al cut-over: rimuovere il blocco `[data-trip-theme]` da `colors.css`; accettare il cambio palette di 9 temi e il nuovo elenco paesi (−spain/china/netherlands/indonesia/uae · +canada/norway/australia/brazil/morocco/india); riallineare `THEME-MAP.md`. Ordine `<link>`: `trip-themes.css` dopo `colors.css`.
2. **Motion → `animations.css` è fonte unica** + **aggiungere `--motion-normal` e `--motion-map`** (per non rompere button/fab/icon-button/navigation/bottom-navigation). Rimuovere `motion.css`; migrare eventuali keyframe unici prima.
3. **Spacing → aggiungere alias named** `--space-sm:8px` / `-md:16px` / `-lg:20px` / `-xl:24px` mappati sulla scala numerica (così `helpers.css` funziona senza modificarlo). Resta da correggere comunque il typo `--font-handwriting`→`--font-handwritten`.
4. **Utility → `u-*` atomici + `h-*` compositi**; rimuovere le utility unprefixed duplicate da `typography.css`/`spacing.css` (es. `.text-*`/`.fw-*`/`.mt-*`/`.stack`/`.inline`) e `.hidden` (tenere `.u-hidden`).
5. **Mappa → Mapbox GL JS resta**: riscrivere `js/modules/map.js` su Mapbox **mantenendo la stessa API** (init/addMarker/removeMarker/selectMarker/focusMarker/drawRoute/locate/clear/refresh). Conservare geocoding `country=`/`language=it`, `setConfigProperty` lingua/lightPreset, marker custom `map-markers.css` (via marker DOM Mapbox). CSP invariata (`api.mapbox.com`). Leaflet/OSM **scartato**.
6. **Foto/biglietti → layer IndexedDB aggiunto da me al cut-over**: piccolo modulo media che riusa lo schema `agenda-viaggi-db` esistente, agganciato all'architettura a moduli. `storage.js` resta per localStorage. Garantire che foto/biglietti esistenti **non si perdano**.
7. **`/admin` → reintrodurre come route nascosta** nel nuovo router + logica proprietario (`mj-proprietario`), comportamento come l'app live (accesso nascosto, nessun dato esposto).
8. **Palette POI → tokenizzare `--marker-*`**: creare scala token (`--marker-hotel/-restaurant/-attraction/-photo/-shopping/-train/-flight`) e convertire `map-markers.css`.
9. **Responsive → resta mobile-first**: mantenere l'esperienza a telefono (PWA), al massimo leggero allargamento tablet. **NON** implementare sidebar/griglia desktop ora; breakpoint del doc (1024/1280/1600) ignorati per desktop. Sidebar/drawer del DS restano archiviati per il futuro.
10. **Colori PWA → allineare alla palette DS**: nel manifest `theme_color:#1E3160` (navy DS), `background_color:#FCF8F2` (crema) — sostituire `#0F172A`/`#FFFFFF`. Evita il flash bianco sullo splash, coerenza brand.
11. **Stati viaggio → tassonomia attuale dell'app**: `draft/planned/progress/completed` (token `--status-*` + dati esistenti). Riallineare `constants.js JOURNEY_STATUS` a questa (NON adottare planning/active/archived) → nessun rischio sui viaggi salvati.
12. **Ricerca → tenere entrambi i componenti con ruoli distinti**: `.searchbar` (luoghi su mappa/inline) + `.search` (universale viaggi/memorie). Collegare il JS alle classi corrette (definire `.search__match` o adattare `search.js`).

---

## 🔴 Token / keyframe mancanti (da aggiungere)
- [x] `--z-fab`, `--z-navigation` → aggiunti in `tokens.css` (PR #61)
- [x] ✅ FATTO `--z-dock:250` in `tokens.css` (usato da `map-dock.css`; nome reale **`--z-dock`**, non `--z-map-dock`. Valore atteso ~250, tra `--z-dropdown:200` e `--z-sheet:300`)
- [x] ✅ FATTO `--z-overlay:350` in `tokens.css` (usato da `bottom-sheet.css`; in alternativa mappare su `--z-modal`)
- [x] ✅ FATTO `--shadow-2xl` aggiunto (preservato intento modal, non declassato) (usato da `modal.css`; la scala arriva a `--shadow-xl`)
- [x] ✅ **FATTO (parziale)** keyframe `pulse-marker` condiviso aggiunto in `animations.css` (usa `--trip-accent-rgb`) per day-card/timeline-card. NB `markerPulse`(verde)/`timelinePulse` restano inline nei rispettivi componenti (funzionano); unificazione completa opzionale. Originale nota:: oggi mancante per `day-card.css`/`timeline-card.css` (riferito come `pulse-marker`), MA `journey-timeline.css` definisce `timelinePulse` (accent) e `map-markers.css` definisce `markerPulse` (verde hardcoded). 3 keyframe pulse divergenti → tenerne uno parametrizzato. NB `markerPulse` usa `rgba(34,197,94,.40)` hardcoded mentre lo sfondo `--map-marker--current` usa `--color-success`: incoerenti
- [x] ~~`--trip-accent-rgb`~~ **RISOLTO dal designer**: `theme/trip-themes.css` fornisce `--trip-accent-rgb` per `:root` (default) e per ogni tema. La mia proposta `color-mix` è **superata** (rispetto la scelta del designer: triplette esplicite). Consumatori già pronti: `empty-state.css`, `calendar.css`, `journey-timeline.css`. ⚠️ Si attiverà solo quando `trip-themes.css` sarà collegato al cut-over

## ✅✅ DIRETTIVE DEFINITIVE + AUTONOMIA (2026-07) — riferimento vincolante
L'utente/designer ha dato **autonomia operativa** per tutto il consolidamento tecnico che **non cambia l'architettura funzionale**. Approvati: migrazione Leaflet→Mapbox, perf, refactoring interno, consolidamento token, bugfix, ottimizzazione SW, base-path, caching, PWA, a11y, responsive, SEO, Lighthouse. **Vietato senza approvazione**: architettura generale, struttura moduli, **API pubbliche**, naming convention, Design System, filosofia Local First, UX/UI principale, struttura progetto.

1. **Journal** → modulo definitivo `js/modules/journal.js` (**`diary.js` DEPRECATO**). bootstrap usa `Journal.init()`. Deve gestire CRUD, Storage, allegati foto, GPS, meteo, mood, tag, ordinamento, ricerca, export/sync-ready. ✅ **FATTO** (creato e testato; bootstrap già lo chiama)
2. **HTML** completo = **prossima consegna del designer** (struttura unica responsive con tutti gli hook page-*/#loader/#toast-container/#journey-map/#onboarding/.modal-backdrop + data-*). → attendo
3. **i18n** → `Language.register({it:{…},en:{…}})`, intera UI incl. `link_copied`/`backup_restored`. → attendo dizionario
4. **Grafica**: Bob&Cosmo era placeholder → asset definitivi dopo (logo/wordmark/icona/favicon/PWA/splash/sprite/immagini/screenshot). Asset generati = provvisori
5. **Mappa** → **sostituzione completa Leaflet → Mapbox GL JS autorizzata**, trasparente, **API pubblica invariata** (init/addMarker/removeMarker/selectMarker/focusMarker/drawRoute/locate/clear/refresh). Impl. interna riscrivibile. (chiude/attua DECISO #5)
6. **Weather** → integrare provider reale, preferenza **Open-Meteo** poi OpenWeather, isolato in `weather.js` senza toccare altri moduli
7. **Currency** → integrare **Frankfurter / exchangerate.host / ECB**, interfaccia pubblica invariata
8. **`--trip-header-overlay`** → **eredita da `:root`**; solo i temi che servono lo ridefiniscono. ✅ **RISOLTO: nessuna azione** (comportamento attuale già corretto)

## 🔵 CSP — domini da autorizzare al cut-over (connect-src)
- [ ] Aggiornare la CSP con i domini dei provider reali: `https://api.mapbox.com` (già), `https://geocoding-api.open-meteo.com`, `https://api.open-meteo.com` (weather), `https://api.frankfurter.app` (currency). `img-src`/`worker-src` invariati. Nessun altro servizio terzo.

## 🎨 NUOVA brand identity (poster + logo, checkpoint 2026-07) — SUPERSEDE
Ricevuti 2 riferimenti: poster Design System + brand/logo ufficiale. **La grafica finale cambierà** (l'utente ricostruirà la maggior parte delle immagini). Impatti:
- [ ] **Nuovo logo**: montagne + sole + libro aperto + penna + rotta aereo, wordmark "My Journey", tagline "Pianifica. Vivi. Ricorda.", **monogramma B&C nascosto** (= easter egg autorizzato). **Sostituisce il vecchio Bob&Cosmo** (libro navy)
- [ ] 🟠 **Asset PWA provvisori (dal vecchio logo)** → rigenerare dal nuovo logo (SVG/512 su crema). **Splash rimossi** (~2.3MB, non referenziati dal manifest, alleggerimento) → si rigenerano dal logo nuovo al cut-over. Icone tenute come placeholder funzionali del manifest
- [x] ✅ **FATTO** — Palette poster adottata: `colors.css` navy `#16264C`, crema `#FFF7ED`, map navy #16264C; manifest `theme_color:#16264C`/`background:#FFF7ED` (rivede DECISO #10). Originali: Divergenze da `colors.css`: navy `#1E3160`→**#16264C**; bg crema `#FCF8F2`→**#FFF7ED**; arancio `#D97706` ✅ combacia. **Conferma il nodo taupe/oliva da tokenizzare**. ⚠️ Rivedere anche DECISO #10 (theme_color era `#1E3160` → diventa `#16264C`? background `#FCF8F2`→`#FFF7ED`?)
- [x] ✅ **FATTO** — `animations.css`: hero 700→**650**, +`--motion-map:1200`, +`--motion-normal:220` (per i 5 componenti). Durate poster allineate
- [ ] Il poster conferma: Calistoga (titoli) / Inter (UI) / Caveat (diario), icon stroke 2.2 round, radius 10/14/18/24/38, shadow L1/L2/Floating, temi destinazione (Giappone/Italia/Grecia/Tropici…), safe-area PWA, switch manuale tema — tutto coerente con l'archiviato

## 🟣 README di progetto (#13)
- [ ] `docs/README.project.md`: (a) **Technology Stack cita "OpenStreetMap" + "Leaflet"** → **contraddice DECISO #5 (Mapbox)**. Al cut-over aggiornare lo stack a Mapbox GL JS. (b) Development usa `npm install`/`npm run dev`/`npm run build` → assume `package.json`/build alla root (oggi assente, vedi nodo config). (c) Conferma la feature "**Travel Journal**" → il modulo `journal.js`/`diary.js` è ancora **mancante** (bloccante per `bootstrap.js`). (d) Struttura `css/ js/ icons/ assets/ screenshots/ docs/` (root, flat) vs archivio sotto `design-system/`. Esiste già un README alla root del repo → non sovrascriverlo, valutare merge

## 🟣 SECURITY.md (#13) — i principi confermano i fix da fare
- [ ] Il doc dichiara "**Input validation**", "**Secure-by-default**", "No unnecessary third-party services". Per rispettarli davvero al cut-over vanno chiusi i nodi già aperti: (a) **`validators.js` maxLength/minLength rotti** (ASI); (b) **`toast.js` innerHTML non-escaped** (XSS); (c) **`import.js` `JSON.parse` non protetto**; (d) "no unnecessary third-party" ↔ scelta mappa (Mapbox richiede token/servizio; Leaflet+OSM sono comunque terze parti). Nessun nuovo nodo, ma questi diventano requisiti di conformità. Esiste già `SECURITY.md` alla root? valutare merge

## 🟣 SEO/error assets (#12/#13) — robots/sitemap/404
- [ ] `config/robots.txt` + `config/sitemap.xml`: **URL placeholder `https://example.com/`** → sostituire col dominio reale (`https://salvo99-sg.github.io/My-Journey-/`). ⚠️ Le `<loc>` del sitemap (`/privacy`, `/terms`, `/help`, `/contact`) sono **path reali** che non esistono nell'app (router **hash-based** `#route`, e quelle pagine non ci sono) → allineare o rimuovere. `robots` fa `Disallow: /docs/private/` (ok) — attenzione a non bloccare `/docs/` utili. Su GitHub Pages robots/sitemap vivono a livello **user-site**, non nel subpath progetto
- [x] ✅ **FATTO (parziale)** `404.html`/`privacy.html`: `.btn btn--primary` + `lang=it`. Resta `/css/app.css` (base-path/bundle, in B5). Nota orig: → usa `.button .button--primary`, ma il componente è **`.btn` / `.btn--primary`** (button.css). Anche `.page-404`/`.error-page` non sono stilate da alcun componente. `<link href="/css/app.css">` = **assoluto + bundle inesistente** (base-path + no-build). `lang="en"` (app default IT). Da riscrivere sulle classi reali al cut-over. NB su GitHub Pages il `404.html` va alla **root** per il custom 404

## 🟣 Pagine statiche legali + release checklist (#13)
- [ ] `pwa/privacy.html` (e presumibilmente terms/help/contact in arrivo): sono **pagine statiche separate** → chiariscono il sitemap (le `<loc>` `/privacy` ecc. mappano su questi file, NON su route hash dell'app). Problemi ricorrenti: `<link href="/css/app.css">` **assoluto + bundle inesistente** (base-path + no-build), `lang="en"` (app IT), classe `.legal-page` **non stilata** da alcun componente. Al cut-over: path relativo/base-path, CSS reale, lang, e uno stile `.legal-page`
- [ ] `docs/RELEASE_CHECKLIST.md`: **gate di cut-over** utile. Voci già a rischio per nodi aperti: "No console errors" ↔ `bootstrap` `Journal.init()` ReferenceError; "CSP configured" ↔ CSP da aggiornare (base-path/SW/Mapbox); "Logo/Icons/Splash" ↔ asset provvisori + nuovo logo; "SEO" ↔ URL placeholder sitemap. Da usare come lista di verifica finale prima di pubblicare

## 🔴 Bug JavaScript
- [ ] 🔴 **`js/bootstrap.js` chiama `Journal.init()` ma `Journal` (diary/journal) NON è stato consegnato** → `ReferenceError` a runtime che **interrompe l'intera sequenza di bootstrap** (i moduli dopo Journal, incluso `App.init()`, non partono). Bloccante finché non arriva `journal.js`/`diary.js`. NB l'ordine è Onboarding → **Journal** → Gallery → …
- [ ] 🟡 **Doppio bootstrap / doppia init**: `bootstrap.js` inizializza esplicitamente TUTTI i moduli **e** chiama `App.init()`; ma `App.init()` fa `loadModules()`+`startModules()` che **re-inizializza** 9 moduli (theme/router/storage/modal/timeline/map/search/language/animations), e `app.js` ha **un proprio** `DOMContentLoaded→App.init()`. Risultato: alcuni `init()` girano 2× → **listener duplicati** (Theme matchMedia, Router hashchange, Offline, ecc.). Al cut-over: un solo punto di avvio (bootstrap.js) e `App` che **non** re-inizializza i moduli (loadModules solo referenzia). Guard `App.initialized` protegge il doppio App.init, non i singoli moduli
- [ ] 🟢 **RISOLVE "moduli non in loadModules"**: `bootstrap.js` inizializza esplicitamente State, Autocomplete, Onboarding, UIControls, Offline, Sync, Notifications, Gestures, Toast, Loader, FAB, Gallery, Tickets, Packing, Budget, Memories, Weather, Hotels, Transport, Currency, Analytics → il nodo precedente si chiude (sono cablati qui, non in `App.loadModules`)
- [x] ✅ FATTO (verificato con Node) **`js/utils/validators.js`: `maxLength()`/`minLength()`** — espressione riportata sulla stessa riga del `return`; ora tornano true/false. Testo originale del bug (verificato con Node). Causa: **ASI** — `return` è su una riga da solo, seguito dall'espressione sotto → l'interprete inserisce `;` dopo `return` (`return;`) e `String(value).length<=max` diventa codice morto. Effetto: qualsiasi validazione lunghezza min/max fallisce (undefined = falsy). Fix: mettere l'espressione **sulla stessa riga** di `return`. (Gli altri metric — required/email/url/number/positive/date — sono corretti perché la riga termina con `&&`/apertura espressione)

## 🔴 Typo / riferimenti errati
- [x] ✅ FATTO `ticket-card.css` (dark): `var(--color-background)` → `var(--color-bg)`
- [ ] **`helpers.css`: spacing token inesistenti** → usa `--space-md/-sm/-lg/-xl` (named) ma `spacing.css` ha scala **numerica** `--space-1..--space-24`. ✅ **FATTO** (DECISO #3): alias `--space-sm/md/lg/xl` aggiunti in spacing.css → helpers ora rende
- [x] ✅ FATTO **`helpers.css`: `.h-handwriting`** → corretto in `--font-handwritten`

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
- [x] ✅ FATTO **`map-markers.css` tokenizzata** con scala `--marker-*` (colors.css) → hotel `#4F46E5`, restaurant `#EA580C`, attraction `#0F9D8A`, photo `#D946EF`, shopping `#F59E0B`, train `#2563EB`, flight `#DC2626`. Nessun token esistente le copre. ✅ **DECISO #8**: creare scala `--marker-*` e convertire il CSS. ⚠️ Alcune coincidono con accent dei temi (restaurant=default, attraction=tropical, flight=usa) ma sono semantica diversa (categoria, non destinazione)
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
- [x] ✅ **FATTO** `animations.js` ↔ `animations.css`: aggiunte classe `.shake` e regole reveal `[data-animate]`/`.is-visible`. Resta nota: `.is-visible` è sovraccarica (reveal/toast/modal) — contesti diversi, ok
- [ ] `day-card.css` `transition:background .18s` (durata fissa) → token `--motion-*`
- [ ] 🔵 `notifications.js`: wrapper Notification API (init/request/show/tripReminder). (a) `tripReminder` usa icona `/icons/icon-192.png` → l'app live ha le icone **alla root con nomi versionati** (`icon-192-v2.png`); allineare il path con la consegna PWA **#12**. (b) `request()` va chiamato **su gesto utente** (non in auto-init). (c) Solo notifiche **immediate** (nessuna schedulazione/push, serve SW+backend per i promemoria reali); su iOS funziona solo da PWA installata (16.4+). Non in `App.loadModules`. Forward-looking
- [ ] 🔵 `sync.js`: **scaffolding inerte** per sync cloud futura — `process()` è uno stub (`Promise.resolve`), nessun backend (l'app è local-only). `flush()` svuoterebbe la coda senza inviare nulla. Forward-looking (collegato alla futura ipotesi Supabase/Firebase): tenerlo dormiente finché non c'è un backend, non chiamare `flush()` finché `process()` non è reale. Non in `App.loadModules`
- [ ] ⏸️ **(da confermare, tocca app.js core) Gestione offline doppia**: `app.js` `bind()` ascolta già online/offline e toggla `body.offline`; `offline.js` ascolta gli stessi eventi e toggla `body.is-offline` + `State.set("offline")`. Due meccanismi e **due classi diverse** (`.offline` vs `.is-offline`). Al cut-over: tenere `offline.js` (più completo: State+evento), rimuovere gli handler inline di `app.js`, e uniformare la classe CSS (verificare quale usano gli stili). `Offline` va anche aggiunto a `App.loadModules`
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

## 🔴 Stack mappa — Leaflet vs Mapbox GL JS ✅ DECISO #5 · ✅✅ ATTUATO (map.js riscritto su Mapbox GL JS, API invariata)
- [ ] **`js/modules/map.js` usa Leaflet + OpenStreetMap**, l'app live usa **Mapbox GL JS v3.4.0**. Divergenza profonda:
  - **Libreria**: `L.map`/`L.tileLayer`/`L.marker`/`L.polyline` (Leaflet) vs Mapbox GL. Tile da `tile.openstreetmap.org` vs Mapbox Standard style
  - **CSP**: l'attuale è `script-src 'self' https://api.mapbox.com`. Leaflet richiede CDN JS (es. unpkg) + tile/connect verso openstreetmap.org → **CSP da riscrivere**; CONTRIBUTING "Eccezioni autorizzate" cita Mapbox, non Leaflet
  - **Funzioni che si perdono passando a Leaflet/OSM**: geocoding Mapbox con `country=`/`language=it` (i fix di precisione), `setConfigProperty("basemap","language")` IT/EN, `lightPreset`, stile 3D Standard, token Mapbox URL-restricted
  - **Marker**: `map.js` usa `L.marker` default → **NON usa `map-markers.css`** (i pin a goccia/categorie POI del designer). Andrebbe `L.divIcon` con quelle classi, altrimenti il componente marker è inutile
  - **Bug minore**: `drawRoute` passa `color:"var(--trip-accent)"` a Leaflet → la CSS var non si risolve come attributo SVG stroke → rotta senza colore tema
  - ❓ **Da decidere**: (a) Leaflet vince → riscrivere CSP, ricablare `map-markers.css` via divIcon, riportare geocoding/lingua su un servizio compatibile, rinunciare a Mapbox; (b) Mapbox resta → riscrivere `map.js` su Mapbox GL mantenendo l'API del modulo (init/addMarker/drawRoute/focusMarker); (c) decido al cut-over. **Scelta non autonoma**
- [ ] `map.js` si sincronizza con la timeline (`timeline:current`→`focusMarker`) e usa container id `journey-map` (HTML #9). API pulita (init/addMarker/removeMarker/select/focus/drawRoute/locate/clear/refresh) → riusabile anche se si cambia libreria sotto

## 🔴 Base-path GitHub Pages — ✅ FATTO su asset esistenti (manifest/SW/icons.js/notifications/404/privacy/bootstrap); resterà da applicare all'HTML #9 quando arriva
- [ ] L'app live è servita sotto **`salvo99-sg.github.io/My-Journey-/`** (sotto-cartella). Ma `manifest.json` e altri file usano **path assoluti dalla root** (`start_url:"/"`, `scope:"/"`, `id:"/"`, `icons:"/icons/…"`, shortcuts `"/#…"`, screenshots `"/screenshots/…"`) + `notifications.js` `"/icons/icon-192.png"` + **`icons.js` `sprite:"/icons/icons.svg"`** + **`bootstrap.js` registra SW `"/service-worker.js"`**. Su GitHub Pages project-site questi risolvono a `salvo99-sg.github.io/icons/…` (404), **non** a `/My-Journey-/icons/…`. Al cut-over: rendere i path **relativi** o prefissarli con `/My-Journey-/` (start_url/scope `"./"`/`"/My-Journey-/"`). 🔴 Altrimenti PWA install/icone/shortcut rotti

## 🟣 Config / Constants (#10) — dichiarati ma non collegati
- [ ] `config.js` `map.provider:"OpenStreetMap"` **contraddice DECISO #5 (Mapbox)** → aggiornare a Mapbox al cut-over (e i relativi parametri zoom/animationDuration)
- [ ] `config.js` e `constants.js` sono **frozen ma non consumati** dai moduli: i valori sono **duplicati** hardcoded (es. `Search.delay=220` vs `Config.search.debounce=220`; zoom 13 in `map.js` vs `Config.map.defaultZoom`; eventi stringa vs `Constants.APP_EVENTS`). Al cut-over: cablare i moduli su Config/Constants (fonte unica) o accettare i duplicati
- [ ] 🟢 `constants.js` `TRIP_THEMES` elenca **gli stessi 16 temi** di `trip-themes.css` → **conferma DECISO #1** (trip-themes canonico, colors.css 14 superato)
- [ ] `constants.js` `JOURNEY_STATUS` (planning/active/completed/archived) ≠ token `--status-*` (planned/progress/completed/draft) → riconciliare la mappatura stato↔colore al cut-over
- [ ] `gestures.js`: swipe globali (`gesture:swipe*`) ok; va aggiunto a `loadModules`. Nessun nodo critico

## 🔴 Service worker (#12) — ✅ RISOLTO (network-first ripristinato)
- [x] ✅ **FATTO** `pwa/service-worker.js` riscritto **network-first** (HTML/JS/JSON/CSS) + **cache-first immagini** + solo same-origin (API esterne mai in cache). Nota orig: (`caches.match` prima, poi network) → **reintroduce il bug "la PWA non si aggiorna"** che avevamo già risolto sull'app live passando a **network-first per js/json/css/html** (vedi sw.js live, cache `mj-v6`). Al cut-over: NON adottare questa strategia così com'è → riportare network-first per i file di codice, cache-first solo per immagini
- [x] ✅ **FATTO** `STATIC_CACHE` ridotto a `./`,`index.html`,`manifest.json` (path relativi); il bundle reale si aggiunge al cut-over. Nota orig: nella nuova struttura modulare (decine di file `js/core|ui|modules/*`, CSS `design-system/*`+`components/*`). Serve un **bundle** (build) o una lista di precache corretta
- [ ] `service-worker.js` path assoluti (`/`,`/index.html`,`/manifest.json`,`/css/…`,`/js/…`,`/icons/…`) → stesso problema **base-path GitHub Pages** (vedi sopra)
- [ ] **Due service worker**: nuovo `service-worker.js` vs `sw.js` live (cache `mj-v6`, network-first). Al cut-over tenerne **uno solo** e aggiornare la registrazione (oggi l'app registra `sw.js`)

## 🔵 PWA assets (#12) — manifest ricevuto, asset mancanti
- [ ] `pwa/manifest.json` archiviato. **Mancano i file referenziati**: `icons/icon-{72..512}.png` (logo #12), `screenshots/home.png`+`dashboard.png`. Da produrre al cut-over col logo Bob&Cosmo
- [ ] `theme_color:#0F172A` / `background_color:#FFFFFF` **divergono dalla palette DS** (bg cream `#FCF8F2`, navy `#1E3160`) → allineare (il background bianco causa flash su splash diverso dal tema)
- [ ] shortcut `"/#trip/new"` non gestito dal router flat (`resolve()` cerca route esatta → cade su home). Serve gestione sub-route/param nel router, oppure cambiare l'url shortcut
- [ ] Esiste già un `manifest.json` **live alla root**: al cut-over sostituirlo con questo (path corretti per base-path) — non duplicarlo

## 🟣 ARCHITECTURE.md (#13) — cosa rivela
- [ ] **Mancano ancora 5 Journey Modules**: il doc elenca `budget.js`, `album.js`, `diary.js`, `tickets.js`, `packing.js` (oltre a timeline/map/search/autocomplete già arrivati). Quindi **#10 JS non è completo**. (NB: `onboarding.js` consegnato ma non in elenco doc.)
- [ ] **Mancano i layer `js/data/` e `js/services/`** (citati nella folder structure, nessun file ancora). Probabile sede del **modulo media/IndexedDB** (DECISO #6) e dei servizi (geocoding Mapbox, ecc.)
- [ ] 🟢 **Risolve l'ambiguità doppia-persistenza**: il doc impone *Data Flow* `UI→State→Storage` e "State = single source of truth", "No module modifies data directly", "Never use localStorage directly" → al cut-over i moduli aggiornano **State**, che persiste via **Storage** (chiarisce il nodo `state.js`/`storage.js`)
- [ ] **Struttura cartelle CSS diversa**: il doc prevede `css/{tokens,base,layout,components,themes,utilities}/` (sottocartelle) vs il nostro archivio piatto `design-system/`. Riorganizzazione opzionale al cut-over (cosmetica)
- [ ] 🟢 I "Principles" del doc **corroborano nodi già aperti**: "Components never define colors/typography" → conferma i nodi hardcoded (#fff/raggi/font); "No inline CSS/JS" → l'HTML #9 dovrà esternalizzare lo stile/JS inline dell'app live

## 🟣 DESIGN_SYSTEM.md (#13) — conferme e incongruenze
- [ ] 🟢 **Scala motion del doc = `animations.css`** (80/160/280/420/700) → **conferma DECISO #2** (animations.css canonico, non motion.css 120/340/520/680)
- [ ] **Elevation si ferma a `Shadow XL`** nel doc → `--shadow-2xl` usato da `modal.css` è **fuori scala** → modal dovrebbe usare `--shadow-xl` (rafforza il nodo token mancante: non aggiungere 2xl, correggere modal)
- [ ] **Componenti navigation mancanti**: il doc prevede **Sidebar (desktop)**, **Drawer**, **Tabs** oltre a Bottom-nav. Consegnati solo `bottom-navigation.css` + `navigation.css` (top). Mancano sidebar/drawer/tabs (tabs già segnalato lato JS `ui-controls`). Desktop responsive (sidebar) da prevedere
- [ ] **Spec icone #11**: SVG-only, griglia 24px, stroke 2.2, rounded outline → coerente coi componenti (`stroke-width:2.2`); attesa la libreria SVG
- [ ] 🟢 **Easter egg autorizzato**: firma "Bob & Cosmo" da mantenere in metadata/commenti/elementi non intrusivi (già in `config.js` author). Coerente con BRAND-BIBLE; **non** esporre in UX. Nessuna azione, solo da preservare al cleanup

## 🟣 COMPONENT_GUIDE.md (#13) — note
- [ ] **Breakpoint divergenti**: il doc indica `480/768/1024/1280/1600`, ma il nodo "responsive `.page`" rimosso usava `720/1180`, e `typography.css` ha `@media (max-width:390px)`. Riconciliare un'unica scala breakpoint (allinearsi a `tokens.css`) al cut-over
- [ ] **Card menzionate senza componente dedicato**: "Weather Card", "Hotel Card" → non esistono `weather-card.css`/`hotel-card.css` (probabili varianti di card generica). Verificare se servono o sono usi di `.trip-card`/`.card`
- [ ] **"Gallery"** (lazy/fullscreen/zoom/swipe/masonry) descritta come componente, ma lato CSS abbiamo `album-card`/`photo-card` e lato JS manca `album.js` → la gallery completa arriverà coi moduli mancanti
- [ ] Conferma che budget/ticket/packing/journal(diary) sono feature attese → mappano sui **5 moduli JS mancanti** (budget/tickets/packing/diary/album)

## 🟣 CONTRIBUTING.md del designer (#13) — duplicato della governance root
- [ ] **Due CONTRIBUTING**: questo (designer, EN, generico, in `design-system/docs/`) vs **root `CONTRIBUTING.md`** (governance reale del progetto, IT, con le **Eccezioni autorizzate**: Mapbox GL JS, `!important` per reduced-motion/`.hidden`/layer utility). Al cut-over **NON sostituire la root**: semmai fonderle, mantenendo le eccezioni autorizzate (la root vince)
- [ ] **Convenzione commit divergente**: designer usa Conventional `feat:`/`fix:` **senza scope**; la root impone `tipo(scope): oggetto`. Tenere quella root (con scope) per coerenza con lo storico
- [ ] Branch model: il designer aggiunge `hotfix/*` e `release/*` (root aveva main/develop/feature/*). Adozione opzionale
- [ ] 🟢 **Auto-legittimazione dei fix**: il CONTRIBUTING del designer vieta esplicitamente "hardcode colors/typography" e "duplicate logic" → ma i suoi stessi componenti li violano (#fff, palette marker, font-size; doppioni search/timeline). Applicare i nodi 🟠/🟡 **fa rispettare le sue regole**, non le contraddice
- [ ] 🟢 "remove comments defining file headers" è vietato → i miei archivi mantengono gli header verbatim: conforme

## 🟣 Journey Modules dati (#10) — budget/gallery/tickets/packing
- [ ] 🔴 **`gallery.js` salva le foto in localStorage** (`Storage.set("gallery", photos)`) → se `photo` contiene dati immagine (base64/blob), **sfora la quota localStorage (~5MB)** e contraddice **DECISO #6 (IndexedDB per i blob)**. Al cut-over: i **dati immagine** vanno in IndexedDB (layer media), in `Storage` solo i **metadati** (id, didascalia, coords, riferimento al blob). Stessa cosa per `tickets.js` se il biglietto include allegati (immagine/PDF) — l'app live tiene i biglietti in IndexedDB `agenda-viaggi-db`
- [ ] `budget.js`/`packing.js`: dati piccoli → localStorage ok. Chiavi `budget-total`/`budget-currency`/`expenses`/`packing`/`gallery`/`tickets` (→ `myjourney.1.0.*`) diverse dai dati live (probabilmente dentro `agenda-viaggi-v2`) → rientrano nella **migrazione** una-tantum
- [ ] Naming: il doc ARCHITECTURE chiama il modulo `album.js`, il designer l'ha consegnato come **`gallery.js`** (stessa cosa). Coerenza nomi al cut-over
- [ ] Tutti e 4 **non in `App.loadModules`** → registrare/inizializzare (init carica da Storage)
- [ ] `memories.js`: CRUD via Storage `memories`. Il componente `memory-card.css` include foto/voce/waveform (`__photo`/`__voice`/`__wave`) → se le memorie contengono **media (foto/audio)**, vale la stessa regola: blob in **IndexedDB**, metadati in Storage. Non in `loadModules`. NB: router ha route separate `journal` e `memories` → `memories.js` copre "memories"; il **`diary.js`/journal** potrebbe essere ancora un modulo a sé (da verificare se manca)

## 🟣 Moduli journey aggiuntivi (#10) — weather/hotels/transport
- [x] ✅ ATTUATO `weather.js` → **Open-Meteo** (geocoding+forecast reali, no key, cache 1h). Era stub — `get()` restituisce `temperature:null/condition:null/forecast:[]` (header "Future API integration"). Inerte finché non si collega un provider meteo (API esterna → **CSP da estendere** + eventuale key). Copre la "Weather Card" del COMPONENT_GUIDE. Cache in Storage `weather-cache` (piccola, ok)
- [ ] `hotels.js` / `transport.js`: CRUD metadati via Storage (`hotels`/`transport`) → ok localStorage. `transport.next()` = primo segmento non completato. Chiavi da includere nella **migrazione**. Tutti e 3 **non in `App.loadModules`**
- [ ] Questi 3 moduli **non erano nella lista ARCHITECTURE** (bonus): il modello dati si sta ampliando (meteo, hotel, trasporti) → verificare che l'HTML #9 e i componenti (`ticket-card` per transport?, card hotel/meteo) li supportino

## 🟣 Moduli journey aggiuntivi (#10) — currency/share
- [x] ✅ ATTUATO `currency.js` → **Frankfurter** (ECB, base EUR, no key, refresh 6h). `convert()` ora torna valori reali (guardia se rate mancante → torna amount). `format()` Intl invariato
- [ ] 🟢 `share.js`: Web Share API (`navigator.share`) + fallback `clipboard` + `Toast.success(Language.t("link_copied"))`, share immagine via `canShare`/`File`. **Nessun `init()`** → non serve in `loadModules` (chiamato on-demand). Dipende da `Toast` e da chiave i18n **`link_copied`** (dizionario pendente). Rilevante per "**Shared Trips**" futuri (native share sheet). Richiede secure context (GitHub Pages https ok)

## 🟣 Export/backup (#10)
- [ ] 🟢 `export.js`: backup JSON via `Storage.export()` → download `my-journey-backup.json`. Ottimo per **trasferimento manuale dati tra dispositivi** (con `Storage.import`). ⚠️ **Copre solo localStorage**, NON i blob IndexedDB (foto/biglietti) → backup **incompleto**. Al cut-over estendere per includere anche i media IndexedDB (complementa DECISO #6) per un backup/restore completo. No init (on-demand)
- [ ] `import.js`: ripristino da file (complementa `export.js`). (a) `JSON.parse` in `fromFile()` **non è in try/catch** → file malformato = eccezione non gestita (aggiungere Toast di errore). (b) header cita "Version check" ma **non è implementato** (nessun controllo `myjourney.1.0` vs versione file). (c) come export, **solo localStorage**, non i blob IndexedDB. Dipende da `Toast` + i18n `backup_restored`. ⚠️ `Storage.import` **sovrascrive** le chiavi: valutare merge vs replace. No init (on-demand)

## 🟣 File di configurazione (root/special-path) — archiviati in `config/`, non attivati
- [ ] **`.github/workflows/ci.yml`**: workflow CI **stub** (solo `echo`), trigger su push main/develop + PR. Archiviato in `config/.github-workflows/ci.yml` per **non attivarlo** ora (girerebbe ad ogni push). Al cut-over: spostarlo in `.github/workflows/` **solo** se si vuole CI reale (implementare davvero le validazioni html/css/js/manifest) e coordinarlo con l'eventuale workflow Pages esistente
- [ ] **`.editorconfig`** (`config/editorconfig`): innocuo, va alla root al cut-over
- [ ] **`package.json`** (`config/package.json`): alla root **non esiste** oggi (progetto no-build). Introdurlo aggiunge `"type":"module"` (i `.js` diventerebbero ESM per Node — irrilevante per hosting statico, ma coerente col nodo "ESM reale"). Script usano `npx serve .`. Al cut-over: adottare solo se serve build/serve locale
- [ ] **`.gitignore` designer** (`config/gitignore`) vs **root `.gitignore`** esistente (che ha voci specifiche: `.agents/`, `.claude/skills/`, `src/`, `proposta-*.html`, `_v*.html`, `_*.png`…). **Fondere** al cut-over mantenendo le voci della root; il designer aggiunge utili `/backups/`, `/exports/`, `/cache/`, `/screenshots/generated/` (coerenti con export/import/screenshot). NON sovrascrivere la root

## 🔵 Strutturali / fondamenta
- [ ] **Responsive `.page`** (allargamento 720/1180 tablet/desktop) da ri-applicare in `design-system.css` (`.app`/`.page`); oggi solo `max-width:480`
- [x] ✅ FATTO taupe `--color-taupe`, oliva `--color-olive` in colors.css
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
- [ ] 🟡 `loader.js`: usa `#loader` + `.loader__text` + `.loader__progress`, ma **nessun componente CSS `loader` è stato consegnato** (c'è `skeleton.css`, non un overlay loader) → serve un CSS loader/spinner al cut-over (o riuso di `.spin`/skeleton). Dipende da `#loader` (HTML #9). Non in `loadModules`. NB `show()` fa `querySelector(".loader__text").textContent` senza null-check
- [ ] 🟢 `fab.js`: hide/show su scroll con `.is-hidden` → **combacia con `fab.css`** (che ha `.is-hidden`/`.is-visible`). OK. Solo da aggiungere a `loadModules`. (NB: nel messaggio il file era incollato due volte, archiviato una sola)
- [x] ✅ **FATTO** `toast.js`: contenitore `.toast-stack` + `escape()` messaggio (XSS chiuso). Resta: omette icon/title (minore). Nota orig: (a) il JS crea il contenitore `.toast-container`, ma il CSS stila `.toast-stack` → gli stili di posizionamento/stacking non si applicano. Allineare il nome. (b) `create()` genera solo `.toast__content>.toast__message`+`.toast__close`, **omette** `.toast__icon`/`.toast__title` (che il CSS supporta) e non usa `.is-hiding` (usa solo `.is-visible`, ok). (c) `innerHTML` con `${message}` → **escape** se il messaggio può contenere testo utente (XSS). (d) `Toast` non è in `App.loadModules` e `show()` non garantisce `init()` → se non inizializzato `this.container` è null. Registrare Toast
- [ ] 🟡 `onboarding.js`: usa `Modal.open("onboarding")` → eredita il bug `modal.js` (`.is-visible` vs `.modal-backdrop.is-open`): finché non si allinea il modale, l'onboarding non si mostra. Chiave Storage `onboarding-completed` (→ `myjourney.1.0.onboarding-completed`) ≠ live `mj-onboarded` → da migrare. Dipende da `#onboarding`/`.onboarding-slide`/`[data-next|prev|skip]` (HTML #9)
- [ ] 🟡 `autocomplete.js`: crea item `.autocomplete-item` / `.is-selected` → **nessun componente CSS li stila** (select/search hanno altre classi). Al cut-over riusare lo stile opzioni di `select.css`/`search.css` o aggiungere un piccolo CSS. Suggerimenti **solo locali** (Storage `autocomplete`, history): per il vero autocomplete destinazioni serve un'API geocoding (legato alla decisione mappa Leaflet/Mapbox). Dipende da `data-autocomplete*` (HTML #9)
- [ ] 🟡 **Tema persistito due volte**: `theme.js set()` scrive sia `Storage.set("theme")` sia `State.set("theme")` (che a sua volta persiste in `state`). Ridondanza → un'unica fonte
- [ ] 🔵 **Trip-theme non ripristinato al boot**: `App.restorePreferences()` chiama `Theme.set()`+`Language.set()`, NON `Theme.restore()` → il `data-trip-theme` salvato non viene riapplicato all'avvio. Usare `Theme.restore()` (che gestisce anche trip-theme) o aggiungere la chiamata
- [ ] 🟡 `state.js` `notify()` è solo a **path esatto** (nessun bubbling): un subscribe su `map` non scatta per `map.zoom`. Nota architetturale, valutare se serve match gerarchico
- [x] ✅ **FATTO** `modal.js` → usa `.is-open` (allineato a `.modal-backdrop.is-open`). Resta la dipendenza struttura HTML #9 (modale annidato nel backdrop). Nota orig:: il JS aggiunge `.is-visible` (su backdrop e modal), ma il CSS attiva la visibilità via **`.modal-backdrop.is-open`** (e `.modal-backdrop.is-open .modal`). Così il modale **non si apre**. Inoltre `modal.css` si aspetta il modale **annidato dentro `.modal-backdrop`** (dipendenza struttura HTML #9). Da allineare: usare `.is-open` sul backdrop o cambiare il CSS
- [ ] 🟡 **Convenzione classe "aperto" incoerente** tra componenti e manager: modal backdrop `.is-open`; bottom-sheet sheet `.is-open` + backdrop `.is-visible`; toast `.is-visible`; `modal.js` usa `.is-visible` ovunque. Unificare un'unica convenzione (es. `.is-open` per i contenitori, `.is-visible` per i backdrop) al cut-over
- [~] 🔵 **`language.js` dizionario**: creato **scaffold** `js/i18n/dictionary.js` (48 chiavi IT/EN allineate, incl. `link_copied`/`backup_restored`) → `register()` funziona. **Il set definitivo dipende dai `[data-i18n]` dell'HTML #9**: al suo arrivo completare le chiavi. Ordine: dictionary.js PRIMA di Language.init()
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

## CUT-OVER · FASE C — avanzamento

- ✅ **Home (app reale)** — `renderHome()` riscritto in stile DS: hero card (copertina tema + chip stato + titolo Calistoga + barra avanzamento "Giorno a di b"), sezioni "Continua a pianificare"/"Conclusi" con mini-card (thumb + pill stato), "Ricordi recenti" (ultime 3 foto da IndexedDB, cliccabili). Handler apri/elimina e temi video/canvas riusati identici. Nuove chiavi i18n `home.progress/continue/memories/done/day/startsIn/startsTomorrow` (IT+EN). CSS `hj-*` in index.html; vecchie regole `.viaggio-card` mantenute (da purgare a fine cut-over). Colore stato "programma" → #D97706. SW mj-v9.
- ⏭ Prossimi: schermata Viaggio (tabs), Budget, Diario, Album, Biglietti, Impostazioni, bottom-nav.
- ✅ **Schermata Viaggio (app reale)** — restyle DS: badge numero-giorno (`.gnum`, accent tema) nelle card giorno con weekday, card giorno bordi 18/aperta con bordo accent, tappe ripulite (meta Inter bold, costo navy tabulare), tab macro attiva → navy (tema-accent sui viaggi tematizzati), sottobar pill accent, "aggiungi qui" e countdown "in corso" in palette (olive). Logica intatta (swipe rinomina/svuota, riapertura via re-render). SW mj-v10.
- ✅ **Budget (app reale)** — restyle DS: eyebrow "Totale" uppercase, cifra Calistoga tabulare (chiara in dark), barre per-viaggiatore → accent tema (era #0891B2 fuori palette), piste su border-soft-2 con transizione, mini-btn e bordo righe spese in palette, btn-cambio navy. SW mj-v11.
- ✅ **Ricordi/Foto (app reale)** — restyle DS: bottone primario "Aggiungi foto" → accent tema con ombra, titoli gruppo località in Calistoga con contatore a pill (.gf-count, era small inline #a8a29e), griglia foto radius 14 + ombra morbida, gap 8. Logica intatta (visore, album, eliminazione). SW mj-v12.
- ✅ **Preparativi (app reale)** — Valigia: checkbox → accent tema (era #0891B2 fuori palette), riga "fatta" attenuata, titoli sezione Calistoga, input+bottone aggiunta in DS con focus ring accent. Biglietti: icona in squircle tinteggiato accent, riga radius 16 con ellissi sul nome, pill "Apri" navy (accent in dark) — **fix bug preesistente**: `.biglietto button` sovrascriveva lo sfondo di `.apri-pill` per specificità (pill senza sfondo in produzione); risolto con selettore più specifico. SW mj-v13.
- ✅ **Modali (app reale)** — bottom-sheet DS: maniglia di trascinamento (::before), radius 26, velo con blur, titoli 21px, label maiuscolette, input/select radius 14 con focus ring accent, chip pagatori → accent tema via CSS (rimossi inline #0891B2 da chipsPagatori), azioni radius 14 con Salva accent+ombra e Pericolo su var(--danger). SW mj-v14.
