# 🎴 Card dei temi — lista & avanzamento

Riferimento delle **19 card** da generare con il prompt-madre (input = `DESTINATION_OR_TYPE`).
Aggiorniamo Stato e metadati man mano che le creiamo.

Legenda stato: ✅ fatto · 🟡 in lavorazione · ⬜ da fare

## Nazioni iconiche (12)

| # | Input | Stato | Stile | Ora | Accento | Elementi |
|---|-------|-------|-------|-----|---------|----------|
| 1 | `Giappone` | ✅ | illustrato sognante / ukiyo-e | tramonto | `#E0566A` | Monte Fuji, torii, sakura |
| 2 | `Italia` | ✅ | foto (statica) | tramonto | `#CC7A33` | Roma, Colosseo, Vespa, vicolo, caffè |
| 3 | `Francia` | ✅ | foto realistica | giorno | `#3E6DA8` | Tour Eiffel, giardini (bolle + particelle) |
| 4 | `Grecia` | ✅ | illustrato (statica) | tramonto | `#E0904C` | Santorini, cupole blu, mare (no animazione, watermark rimosso) |
| 5 | `Regno Unito` | ✅ | foto (statica) | tramonto | `#D9893B` | Big Ben, Westminster, Tamigi |
| 6 | `USA` | ✅ | foto (statica) | giorno | `#2E8BC0` | New York, Central Park, Manhattan |
| 7 | `Spagna` | ✅ | foto (statica) | tramonto | `#D2552E` | Sagrada Família, Park Güell |
| 8 | `Egitto` | ✅ | foto (statica) | notte | `#D99A3C` | Piramidi di Giza, Sfinge, cammello, Via Lattea |
| 9 | `Cina` | ✅ | pittura a inchiostro | tramonto | `#C0463C` | Grande Muraglia, dragone, montagne |
| 10 | `Olanda` | ✅ | stile Van Gogh | notte | `#E0A93B` | Mulini, tulipani, notte stellata |
| 11 | `Indonesia` | ✅ | foto (statica) | alba | `#2E8F86` | Bali, tempio, Buddha, loto |
| 12 | `Emirati Arabi` | ✅ | foto (statica) | notte | `#D2A23C` | Dubai, Burj Khalifa, dune, cammelli |

## Tipologie di viaggio (10)

| # | Input | Stato | Stile | Ora | Accento | Elementi |
|---|-------|-------|-------|-----|---------|----------|
| 9  | `Mare / Costa` | ⬜ | — | — | — | — |
| 10 | `Tropici / Spiaggia` | ✅ | foto (statica) | giorno | `#0FA3B1` | Spiaggia, palme, acqua turchese, pesci tropicali |
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

**Avanzamento: 13 / 23** · Nazioni: 12/12 ✅ · Tipologie: 1/10 · Default: 0/1

### Come si aggiunge una card
1. Genera l'immagine col prompt-madre (input = una voce qui sopra).
2. Mandami **immagine + metadati** (STILE, ORA, ELEMENTI, ACCENTO, PALETTE, TESTO).
3. Io creo l'animazione (petali/corpuscoli o particelle adatte), ottimizzo (mp4 + poster jpg in `themes/`),
   collego il tema in `index.html` (oggetto `TEMI` + regola di riconoscimento) e aggiorno questa tabella.
