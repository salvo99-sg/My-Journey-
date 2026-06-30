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
| `motion.css` | Durate (`--motion-*`), easing, transizioni, keyframes (fade/slide/scale/sheet/modal/spin/skeleton…) + regole globali `*`/`button`/`input` | 🟡 archiviato | Ha stili globali → si attiva al cut-over |
| `design-system.css` | Entry point: reset, layout (`.app`/`.page`/`.section`/`.grid`), superfici (`.card`/`.surface`/`.glass`), utility, `:focus-visible`/`::selection`, scrollbar | 🟡 archiviato | Reset globale → si attiva al cut-over |
| `THEME-MAP.md` | Mappatura temi app (IT) ⇄ DS (EN) + `THEME_KEY_MAP` | 📄 doc | — |

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

I componenti sono **namespaced** (additivi) e dipendono dai token di `typography.css` + `motion.css` + `spacing.css`: funzioneranno appieno solo quando tutto il DS sarà collegato insieme (cut-over).

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
| 8 | Libreria completa componenti | 🟡 in corso (button, icon-button, fab, navigation, bottom-navigation, accordion, calendar) |
| 9 | HTML completo di tutte le schermate | ⬜ |
| 10 | JavaScript ES Modules | ⬜ |
| 11 | SVG (150+ icone) | ⬜ |
| 12 | Logo e PWA Assets | ⬜ |
| 13 | Documentazione tecnica finale | ⬜ |

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
