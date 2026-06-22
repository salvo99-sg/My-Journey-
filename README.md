# My-Journey-

App per gestire viaggi e programmare itinerari. Single-page, vanilla JS, nessun build.

## Struttura del progetto

```
index.html              → l'intera app (HTML + CSS + JS)
sfondo.jpeg             → immagine di sfondo della schermata iniziale (splash)
themes/                 → asset dei temi per-destinazione
  ├─ giappone.mp4        · loop video del tema Giappone
  └─ giappone.png        · poster di fallback (reduced-motion / video non disponibile)
```

## Come si usa
Apri `index.html` in un browser (o pubblicalo su GitHub Pages). Funziona anche aperto come file locale.

## Temi per-destinazione
Ogni viaggio può avere un tema cinematografico (sfondo animato + accenti) applicato in home e nell'header del viaggio. Il tema viene riconosciuto in automatico dal nome del viaggio (es. "Giappone") o impostato a mano.
Per aggiungere un tema: metti gli asset in `themes/` e aggiungi una voce all'oggetto `TEMI` dentro `index.html`.

> La pipeline di design usata per generare le animazioni dei temi (progetto Remotion) è conservata sul branch **`pipeline-remotion`**, fuori dall'app, per mantenere il repo pulito.
