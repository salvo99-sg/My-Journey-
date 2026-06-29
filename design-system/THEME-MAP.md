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
| `regnounito` | `#D9893B` | `#B26E26` | `uk` *(proposto)* | — | 🟠 **manca nel DS** |
| `spagna` | `#D2552E` | `#AE3F1F` | `spain` *(proposto)* | — | 🟠 **manca nel DS** |
| `cina` | `#C0463C` | `#9C342C` | `china` *(proposto)* | — | 🟠 **manca nel DS** |
| `olanda` | `#E0A93B` | `#BD8623` | `netherlands` *(proposto)* | — | 🟠 **manca nel DS** |
| `indonesia` | `#2E8F86` | `#1F6A63` | `indonesia` *(proposto)* | — | 🟠 **manca nel DS** |
| `emiratiarabi` | `#D2A23C` | `#B07F22` | `uae` *(proposto)* | — | 🟠 **manca nel DS** |

**Extra solo nel DS (senza artwork/tema nell'app):** `iceland` (`#5D8FCF`) — 🔵 nessun corrispettivo lato app.

Sintesi: **7 mappabili subito**, **6 da aggiungere al DS**, **1 in più nel DS** (iceland).

---

## 2. Da decidere (non agisco da solo)

1. **6 temi mancanti nel DS** (`uk`, `spain`, `china`, `netherlands`, `indonesia`, `uae`):
   vanno aggiunti a `colors.css` come blocchi `[data-trip-theme="…"]` completi
   (`--trip-accent`, `--trip-accent-soft`, `--trip-gradient-start`, `--trip-gradient-end`).
   In tabella ho riportato gli **accenti attuali dell'app** come **seme di riferimento**:
   non li trascrivo nel DS di mia iniziativa (sarebbe "creare colori nel DS").
   → Mi confermi le **chiavi EN** proposte e se devo portare io quei valori nel DS,
   oppure li fornisce il designer (con soft + gradient).
2. **`iceland`**: lo teniamo nel DS per un futuro tema, o lo rimuoviamo?
3. **Cambio di palette all'attivazione**: gli accenti DS **differiscono** da quelli
   attuali (es. `giappone` `#E0566A` → `japan` `#C94C63`). Quando passeremo al DS,
   le tinte cambieranno leggermente (il DS diventa la fonte di verità). Confermi che va bene?

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
  regnounito: "uk",        // DS da creare
  spagna: "spain",         // DS da creare
  cina: "china",           // DS da creare
  olanda: "netherlands",   // DS da creare
  indonesia: "indonesia",  // DS da creare
  emiratiarabi: "uae",     // DS da creare
};
```
