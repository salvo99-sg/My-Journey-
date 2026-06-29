# My Journey — Development Guidelines
Version: 1.0.0
Status: Mandatory

---

## PREMESSA

Il presente documento definisce le regole di sviluppo del progetto **My Journey**.

Ogni contributo al repository dovrà rispettare queste linee guida.

Il Design System costituisce la **fonte unica di verità (Single Source of Truth)** dell'interfaccia.

Non sono ammesse implementazioni che violino tali regole.

---

## OBIETTIVO

L'obiettivo non è far funzionare semplicemente l'app.

L'obiettivo è costruire un prodotto premium, coerente e manutenibile nel tempo.

Ogni modifica deve:

- migliorare il prodotto;
- mantenere la coerenza;
- non introdurre debito tecnico;
- non rompere il Design System.

---

## STACK TECNOLOGICO

Consentito:

- HTML5
- CSS3
- CSS Custom Properties
- JavaScript ES6 Modules
- Web Components (solo se approvati)
- Service Worker
- IndexedDB
- LocalStorage
- MapLibre / Leaflet (solo moduli già presenti)
- Canvas API
- SVG

Non consentito:

- React
- Vue
- Angular
- Bootstrap
- Tailwind
- jQuery
- Material UI
- librerie UI esterne

L'app deve rimanere Vanilla.

---

## GITHUB

Branch protetti

main

develop

Feature branch

feature/nome-feature

Bugfix

fix/nome-fix

Hotfix

hotfix/nome-hotfix

---

Mai lavorare direttamente su main.

Mai fare commit direttamente su main.

Sempre Pull Request.

---

## COMMIT

Formato obbligatorio

feat(ui):

feat(map):

feat(home):

feat(theme):

fix(ui):

fix(storage):

docs:

style:

perf:

refactor:

Esempi

feat(home): redesign hero section

feat(map): add floating dock

fix(theme): correct dark palette

---

## DESIGN SYSTEM

È vietato creare:

nuovi colori

nuove ombre

nuovi radius

nuovi font

nuove animazioni

nuovi componenti

senza aggiornare il Design System.

Prima si aggiorna il Design System.

Poi si usa.

Mai il contrario.

---

## CSS

Utilizzare esclusivamente

Design Tokens

Esempio

✔

color: var(--color-primary);

✘

color: #D97706;

---

Mai hardcodare:

colori

spacing

font-size

border-radius

shadow

transition

z-index

Utilizzare sempre i token.

---

## HTML

HTML semantico.

Utilizzare:

header

main

section

article

nav

button

dialog

time

figure

picture

Mai usare div inutili.

---

## JAVASCRIPT

Consentito

ES Modules

Event Delegation

Classi

Custom Events

Fetch API

Async Await

AbortController

Non consentito

jQuery

inline onclick

inline javascript

global variables

duplicazione codice

---

## ACCESSIBILITÀ

Obbligatorio

WCAG AA

Focus visibile

Touch area ≥44px

Contrasto minimo AA

Supporto tastiera

aria-label

aria-expanded

aria-hidden

ruoli ARIA

Mai affidare informazioni solo al colore.

---

## RESPONSIVE

Approccio

Mobile First

Breakpoint

320

390

480

768

1200

Mai progettare Desktop First.

---

## SAFE AREA

Sempre utilizzare

env(safe-area-inset-top)

env(safe-area-inset-bottom)

env(safe-area-inset-left)

env(safe-area-inset-right)

---

## PERFORMANCE

SVG ottimizzati.

Lazy Loading.

No immagini inutilmente pesanti.

Mai importare librerie senza approvazione.

Ogni KB conta.

---

## MOTION

Usare esclusivamente

motion.css

Mai inventare nuove durate.

Mai inventare nuovi easing.

---

## COMPONENTI

Ogni componente deve essere

riutilizzabile

indipendente

documentato

accessibile

responsive

Mai duplicare un componente.

Se esiste già,

riutilizzarlo.

---

## PAGINE

Una pagina

non contiene logica.

La logica vive nei moduli JavaScript.

Le pagine assemblano componenti.

---

## TEMI

Light

Dark

Destination Theme

devono funzionare sempre.

Mai aggiungere colori fuori tema.

---

## ICONE

Solo SVG.

24px.

Stroke uniforme.

Rounded.

Mai PNG.

Mai Font Icons.

---

## ANIMAZIONI

Preferire CSS.

JavaScript solo se necessario.

Mai animare:

width

height

left

top

Preferire:

opacity

transform

filter

---

## MAPPA

La mappa è la protagonista.

La UI deve scomparire quando non serve.

Mai coprire la mappa con pannelli permanenti.

---

## UX

Prima di aggiungere un pulsante chiedersi:

Serve davvero?

Ogni elemento deve avere uno scopo.

---

## DESIGN REVIEW

Se una modifica cambia il Design System,

non implementarla direttamente.

Aprire Issue.

Attendere approvazione.

---

## COSA NON FARE MAI

Mai cambiare il Design System senza approvazione.

Mai usare colori hardcoded.

Mai usare librerie UI.

Mai creare componenti duplicati.

Mai usare CSS inline.

Mai usare JavaScript inline.

Mai rompere la compatibilità mobile.

Mai ignorare la Safe Area.

Mai usare !important salvo autorizzazione.

Mai modificare i token esistenti senza incrementare la versione.

Mai modificare un componente già approvato senza documentare la modifica.

Mai introdurre codice non documentato.

Mai lasciare TODO nel branch principale.

Mai fare commit direttamente su main.

Mai rimuovere commenti architetturali.

Mai rinominare file del Design System senza aggiornare tutta la documentazione.

---

## FILOSOFIA

My Journey non è una semplice applicazione.

È un prodotto.

Ogni riga di codice dovrà essere scritta come se dovesse rimanere nel progetto per i prossimi dieci anni.

La qualità del codice è parte integrante dell'esperienza utente.

Fine documento.
