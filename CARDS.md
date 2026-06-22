# 🎴 Card dei temi — lista & avanzamento

Riferimento delle **19 card** da generare con il prompt-madre (input = `DESTINATION_OR_TYPE`).
Aggiorniamo Stato e metadati man mano che le creiamo.

Legenda stato: ✅ fatto · 🟡 in lavorazione · ⬜ da fare

## Nazioni iconiche (8)

| # | Input | Stato | Stile | Ora | Accento | Elementi |
|---|-------|-------|-------|-----|---------|----------|
| 1 | `Giappone` | ✅ | illustrato sognante / ukiyo-e | tramonto | `#E0566A` | Monte Fuji, torii, sakura |
| 2 | `Italia` | ⬜ | — | — | — | — |
| 3 | `Francia` | ✅ | foto realistica | giorno | `#3E6DA8` | Tour Eiffel, giardini (bolle + particelle) |
| 4 | `Grecia` | ✅ | illustrato (statica) | tramonto | `#E0904C` | Santorini, cupole blu, mare (no animazione, watermark rimosso) |
| 5 | `Regno Unito` | ⬜ | — | — | — | — |
| 6 | `USA` | ⬜ | — | — | — | — |
| 7 | `Spagna` | ⬜ | — | — | — | — |
| 8 | `Egitto` | ⬜ | — | — | — | — |

## Tipologie di viaggio (10)

| # | Input | Stato | Stile | Ora | Accento | Elementi |
|---|-------|-------|-------|-----|---------|----------|
| 9  | `Mare / Costa` | ⬜ | — | — | — | — |
| 10 | `Tropici / Spiaggia` | ⬜ | — | — | — | — |
| 11 | `Montagna / Alpino` | ⬜ | — | — | — | — |
| 12 | `Deserto` | ⬜ | — | — | — | — |
| 13 | `Nordico / Aurora` | ⬜ | — | — | — | — |
| 14 | `Metropoli / Notte` | ⬜ | — | — | — | — |
| 15 | `Città storica` | ⬜ | — | — | — | — |
| 16 | `Campagna / Vigne` | ⬜ | — | — | — | — |
| 17 | `Foresta / Natura` | ⬜ | — | — | — | — |
| 18 | `Safari` | ⬜ | — | — | — | — |

## Default

| # | Input | Stato | Stile | Ora | Accento | Elementi |
|---|-------|-------|-------|-----|---------|----------|
| 19 | `Avventura / Mondo` | ⬜ | — | — | — | — |

---

**Avanzamento: 3 / 19**

### Come si aggiunge una card
1. Genera l'immagine col prompt-madre (input = una voce qui sopra).
2. Mandami **immagine + metadati** (STILE, ORA, ELEMENTI, ACCENTO, PALETTE, TESTO).
3. Io creo l'animazione (petali/corpuscoli o particelle adatte), ottimizzo (mp4 + poster jpg in `themes/`),
   collego il tema in `index.html` (oggetto `TEMI` + regola di riconoscimento) e aggiorno questa tabella.
