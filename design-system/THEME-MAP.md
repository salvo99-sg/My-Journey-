# Theme Map — App (IT) ⇄ Design System (EN)

Mappatura tra i temi-destinazione **attuali dell'app** (chiavi italiane, oggetto
`TEMI` in `app.js`, accenti via `--t-accent` impostati da JS) e i temi del
**Design System** (`colors.css`, selettore `[data-trip-theme="…"]`, variabili
`--trip-accent` / `--trip-accent-soft` / `--trip-gradient-start|end`).

> Stato: **documento di preparazione** (decisione 5). Non collega nulla e non
> crea colori nel DS. Serve a guidare il wiring futuro e a colmare i buchi.

---

## 1. Mappatura

| App (IT) | Accento app | Accento app (dark) | → DS (EN) | Accento DS | Stato |
|----------|-------------|--------------------|-----------|------------|-------|
| `giappone` | `#E0566A` | `#C23A55` | `japan` | `#C94C63` | ✅ presente nel DS |
| `italia` | `#CC7A33` | `#A35E22` | `italy` | `#A64F2F` | ✅ presente nel DS |
| `francia` | `#3E6DA8` | `#2C5285` | `france` | `#4A6BD8` | ✅ presente nel DS |
| `grecia` | `#E0904C` | `#C06C30` | `greece` | `#2878D8` | ✅ presente nel DS |
| `egitto` | `#D99A3C` | `#A8721F` | `egypt` | `#C59B37` | ✅ presente nel DS |
| `tropici` | `#0FA3B1` | `#0B7C88` | `tropical` | `#22B6A8` | ✅ presente nel DS |
| `usa` | `#2E8BC0` | `#1F6A94` | `usa` | `#B44A46` | ✅ presente nel DS |
| `regnounito` | `#D9893B` | `#B26E26` | `uk` | `#D9893B` | ✅ aggiunto al DS |
| `spagna` | `#D2552E` | `#AE3F1F` | `spain` | `#D2552E` | ✅ aggiunto al DS |
| `cina` | `#C0463C` | `#9C342C` | `china` | `#C0463C` | ✅ aggiunto al DS |
| `olanda` | `#E0A93B` | `#BD8623` | `netherlands` | `#E0A93B` | ✅ aggiunto al DS |
| `indonesia` | `#2E8F86` | `#1F6A63` | `indonesia` | `#2E8F86` | ✅ aggiunto al DS |
| `emiratiarabi` | `#D2A23C` | `#B07F22` | `uae` | `#D2A23C` | ✅ aggiunto al DS |

**Extra solo nel DS (senza artwork/tema nell'app):** `iceland` (`#5D8FCF`) — 🔵 **mantenuto** per un tema futuro.

Sintesi: **13 temi app tutti mappati e presenti nel DS** + `iceland` (extra, mantenuto).

---

## 2. Decisioni prese (chiuse)

1. ✅ **6 temi mancanti** (`uk`, `spain`, `china`, `netherlands`, `indonesia`, `uae`)
   **aggiunti a `colors.css`**: `--trip-accent` = accento attuale dell'app;
   `--trip-accent-soft` / `--trip-gradient-start` / `--trip-gradient-end` generati
   con le **stesse frazioni di tinta** degli altri temi DS (coerenza), cioè
   12% / 3.5% / 17% di accento mescolato nel bianco.
2. ✅ **`iceland` mantenuto** per un tema futuro.
3. ✅ **Cambio palette confermato**: all'attivazione del DS gli accenti diventano
   quelli del DS (per i 7 già presenti cambiano leggermente; per i 6 aggiunti
   coincidono con gli attuali dell'app).

---

## 3. Nota tecnica sul wiring (per dopo, non ora)

- **Oggi**: `temaViaggio()` riconosce la destinazione (regex + geocoding) e
  `applicaTema()` imposta `--t-accent` / `--t-accent-d` via JS sull'elemento schermo.
- **Con il DS**: si imposterà l'attributo `data-trip-theme="<chiave EN>"` sull'elemento
  del viaggio; gli stili arriveranno da `colors.css`. In transizione si potrà
  ponticellare `--t-accent: var(--trip-accent)` per non toccare la logica esistente.

---

## 4. Costante pronta all'uso (per il wiring)

```js
// Chiave tema app (IT) -> chiave Design System (EN)
export const THEME_KEY_MAP = {
  giappone: "japan",
  italia: "italy",
  francia: "france",
  grecia: "greece",
  egitto: "egypt",
  tropici: "tropical",
  usa: "usa",
  regnounito: "uk",
  spagna: "spain",
  cina: "china",
  olanda: "netherlands",
  indonesia: "indonesia",
  emiratiarabi: "uae",
};
```
