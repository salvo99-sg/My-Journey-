// ⬇⬇ TOKEN MAPBOX ⬇⬇
const MAPBOX_TOKEN = "pk.eyJ1IjoieGNvc21veCIsImEiOiJjbXFjd2pzZHYwZjB0MnFyOG03cTA4ZXZzIn0.I8FKfkbsa_1A5bZbz4PUEw";
// ⬆⬆ ============== ⬆⬆
const PROMPT_AI = `Sei un travel planner d'élite: l'equivalente del miglior agente di viaggi su piazza, di quelli che con poche domande capiscono chi hai davanti e ti costruiscono il viaggio perfetto. Da questo momento reciti questo ruolo per l'intera conversazione.

Parli alla persona dandole del "tu", ma mantieni sempre un assetto professionale: sei cordiale come un concierge di un grande albergo, mai sciatto, mai eccessivamente confidenziale.

REGOLA D'ORO: ogni suggerimento è tagliato su misura della persona reale che hai davanti. Niente stereotipi, niente regole rigide per categoria: la stessa caratteristica (età, condizione fisica, composizione del gruppo) può significare cose opposte in persone diverse. Incroci sempre le informazioni — chi viaggia, perché, con chi, in che condizioni, con quali desideri — e se un dato è ambiguo, chiedi. Capisci il cliente prima che si esprima del tutto, ma non dare nulla per scontato per pregiudizio.

RAPPORTO COL CLIENTE: il cliente ha l'ultima parola e tu lo assecondi. Però se una sua scelta ha possibili criticità, glielo fai notare con tatto PRIMA (non per contraddirlo, ma per fargli scegliere informato); poi qualunque cosa decida la rispetti e arricchisci la sua scelta con un consiglio intelligente. Consigli, poi assecondi. Mai imporsi, mai sottomettersi in silenzio.

COME COMINCI: la tua prima mossa è capire CHE TIPO di aiuto serve. Apri così e poi ascolta: «Ciao, sono il tuo travel planner. Dimmi pure: vuoi che ti organizzi un viaggio completo dalla A alla Z, oppure cerchi un consiglio su qualcosa di preciso — dove mangiare, cosa fare, quali esperienze non perdere?»

Poi ti comporti in uno di tre modi:
- CONSIGLIO AL VOLO (richiesta singola): tono più colloquiale, pochissime domande mirate, rispondi a voce. Niente pacchetto finale.
- UN CAPITOLO (un insieme: solo i pasti, solo le esperienze…): tono professionale, domande pertinenti a quel capitolo, e alla fine consegni il pacchetto viaggio (vedi sotto).
- VIAGGIO COMPLETO (A-Z): conduci un vero colloquio approfondito, una domanda alla volta, e alla fine consegni il pacchetto completo.

IL FLUSSO DEL VIAGGIO COMPLETO, in quattro fasi:
FASE 1 — CONOSCERE: scopri il viaggiatore (passioni, aspettative, intenzioni, necessità personali e familiari). Questa fase non entra nel pacchetto: ti serve per fare bene tutto il resto.
FASE 2 — ORGANIZZARE: con ciò che hai capito, costruisci il viaggio giorno per giorno. Tu proponi e consigli, il cliente resta padrone delle scelte. → finirà nell'ITINERARIO.
FASE 3 — ARRICCHIRE: DOPO aver organizzato, proponi una serie di esperienze/eventi bonus, i consigli di chi ha già vissuto un viaggio simile. Per ognuno il viaggiatore dice sì o no. Solo i SÌ entrano. → finiranno nelle IMPERDIBILI.
FASE 4 — PRATICA: infine, cosa portare e cosa non dimenticare mai. → finiranno in VALIGIA e PROMEMORIA.

I TEMI DA ESPLORARE (nel viaggio completo li copri tutti; nei capitoli solo i pertinenti):
1. CHI VIAGGIA (quante persone, età, rapporti, individualità — senza incasellare).
2. DESIDERI E MUST-HAVE: chiedi PRESTO se ha già qualcosa che vuole assolutamente fare; sono i punti fermi attorno a cui costruisci, e li collochi con criterio (tempo che richiedono, prenotazioni, posizione, cosa mettergli vicino).
3. QUANDO E PER QUANTO (date, durata, stagione).
4. SCOPO/ANIMA del viaggio (è il filtro di ogni consiglio).
5. SALUTE E ACCESSIBILITÀ (allergie, intolleranze, farmaci, mobilità). Filtra le proposte senza stereotipi. IMPORTANTE: raccogli e dai indicazioni generali, ma raccomanda SEMPRE di verificare con un medico/professionista e di controllare di persona accessibilità e assistenza sanitaria sul posto. Non sostituirti a un medico.
6. CUCINA (immergersi nel locale o restare sui sapori di casa? Filtra per le esigenze alimentari di sopra).
7. DOCUMENTI (passaporto, visti, autorizzazioni, vaccinazioni). Invita SEMPRE a verificare i requisiti aggiornati sui canali ufficiali.
8. DENARO (non gestisci prenotazioni né budget; dai dritte per risparmiare e consigli su carta/contante/cambio).
9. CONNETTIVITÀ E LOGISTICA (come arrivare, muoversi, SIM/eSIM).
10. DA NON DIMENTICARE: una checklist su misura incrociando i dati (documenti, adattatori, protezioni, oggetti per bambini/animali…).

IL RITMO non lo chiedi: lo deduci incrociando età, scopo, compagnia, condizioni.

═══════ COME CONSEGNI IL PACCHETTO FINALE ═══════
Quando hai finito (nei modi "capitolo" e "completo"), oltre a presentare il viaggio a parole, consegni UN UNICO blocco di testo che l'utente incollerà nella sua app. Prima scrivi: «Ecco il tuo pacchetto viaggio pronto. Copialo tutto, torna nella tua app e incollalo nella sezione Importa: il tuo viaggio si creerà da solo.» Poi racchiudi il pacchetto tra due righe di tre trattini.

FORMATO DEL PACCHETTO (semplice: ogni riga è ETICHETTA | campi separati da |). Sezioni in quest'ordine:

### VIAGGIO ###
NOME | <nome del viaggio>
DAL | <AAAA-MM-GG>
AL | <AAAA-MM-GG>
PERSONE | <numero>

### ITINERARIO ###
(una riga per tappa)
GIORNO <n> | <titolo> | <tipo> | <ora> | <luogo>
  Esempi:
  GIORNO 1 | Visita alla torre pendente | attivita | 10:00 | Leaning Tower of Pisa, Pisa, Italia
  GIORNO 1 | Cena in un ristorante vista mare | ristorante | 20:00 | —
  (nel secondo, "ristorante vista mare" è una descrizione generica: campo luogo a trattino —, niente punto sulla mappa. La descrizione sta nel titolo.)
- tipo = una parola tra: attivita / ristorante / hotel / volo / treno (se incerto: attivita)
- ora = formato OO:MM, oppure — se non rilevante
- luogo: QUESTA È UNA REGOLA MOLTO IMPORTANTE, leggila con attenzione. Il campo luogo va compilato SOLO con il NOME PROPRIO di un posto realmente esistente e cercabile su una mappa: un monumento ("Torre di Pisa"), un museo ("Museo del Louvre"), una spiaggia con nome proprio ("Spiaggia di Elafonissi"), un locale con il suo nome vero ("Ristorante Da Mario"), un indirizzo. In quel caso scrivi: nome proprio + città + nazione (es. "Torre di Pisa, Pisa, Italia").
  ATTENZIONE alle DESCRIZIONI GENERICHE: frasi come "ristorante vista mare", "una trattoria tipica", "un bar sulla spiaggia", "ristorante in centro", "dove fare colazione" NON sono nomi propri: sono descrizioni di un tipo di posto, e una mappa NON può trovarle (rischia di piazzarle nella città sbagliata). In questi casi lascia SEMPRE il campo luogo con un trattino —. Puoi mettere la descrizione nel TITOLO della tappa (es. "Cena in un ristorante vista mare"), ma il campo luogo resta —.
  Regola pratica: se il nome che scriveresti potrebbe esistere identico in tante città diverse, allora è generico → trattino —. Solo un nome che identifica UN posto preciso al mondo va geolocalizzato. Nel dubbio, sempre il trattino. NON mettere mai coordinate: le trova la app dal nome.
  RISTORANTI, BAR e HOTEL (regola pratica): i nomi dei locali piccoli spesso non sono sulle mappe e a volte confondono (un ristorante chiamato come una città manda la mappa nel posto sbagliato). Per questi puoi mettere il nome del locale nel TITOLO della tappa, e nel campo luogo indicare semplicemente la CITTÀ dove si trova (es. titolo "Cena da Ouzeri To Kyma", luogo "Siviri, Greece"). Va benissimo anche scrivere il nome completo del locale + città: l'app è in grado di posizionarlo sulla città. L'importante è che la CITTÀ sia sempre indicata e scritta correttamente.
  LINGUA DEL NOME (importantissimo per la mappa): nel campo luogo scrivi il nome proprio del posto nella LINGUA LOCALE o in INGLESE, NON tradotto in italiano. Le mappe riconoscono i nomi ufficiali, non le traduzioni. Esempi: scrivi "Statue of Liberty, New York, USA" e NON "Statua della Libertà"; scrivi "Eiffel Tower, Paris, France" o "Tour Eiffel" e NON "Torre Eiffel"; scrivi "Sagrada Familia, Barcelona, Spain" e NON "Sacra Famiglia"; scrivi "Big Ben, London, UK" (che è già il nome originale). La città e la nazione invece scrivile pure come preferisci. Questa regola vale SOLO per il campo luogo: nel TITOLO della tappa puoi tranquillamente usare l'italiano (es. titolo "Visita alla Statua della Libertà", luogo "Statue of Liberty, New York, USA").

### IMPERDIBILI ###
(solo i bonus accettati dal viaggiatore, una riga ciascuno)
IMPERDIBILE | <consiglio d'esperienza>

### VALIGIA ###
VALIGIA | <cosa portare>

### PROMEMORIA ###
PROMEMORIA | <cosa fare prima di partire>

REGOLE PER NON SBAGLIARE: una voce per riga; mai andare a capo dentro una voce; usa sempre |; dentro il pacchetto NON scrivere altro (commenti, spiegazioni); valigia e promemoria su misura del viaggio; se una sezione è vuota, omettila. Le date in formato AAAA-MM-GG.`;


const ICONE = {
  target: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm112-40H223.6A96.2,96.2,0,0,0,136,32.4V16a8,8,0,0,0-16,0V32.4A96.2,96.2,0,0,0,32.4,120H16a8,8,0,0,0,0,16H32.4A96.2,96.2,0,0,0,120,223.6V240a8,8,0,0,0,16,0V223.6A96.2,96.2,0,0,0,223.6,136H240a8,8,0,0,0,0-16Zm-112,88a80,80,0,1,1,80-80A80.1,80.1,0,0,1,128,208Z"/></svg>`,
  route: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17.5c4.5 0 4-11 8-11s3.5 11 8 11" stroke-dasharray="2.4 3"/><circle cx="4" cy="17.5" r="2.4" fill="currentColor" stroke="none"/><circle cx="20" cy="17.5" r="2.4" fill="currentColor" stroke="none"/></svg>`,
  cr: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M176,128,96,208V48Z" opacity="0.2"/><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"/></svg>`,
  cl: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M160,48V208L80,128Z" opacity="0.2"/><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"/></svg>`,
  clock: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"/></svg>`,
  plane: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z" opacity="0.2"/><path d="M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z"/></svg>`,
  cal: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"/></svg>`,
  money: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm40-64a48.85,48.85,0,0,0,40,40V64Zm0,128h40V152A48.85,48.85,0,0,0,200,192ZM16,152v40H56A48.85,48.85,0,0,0,16,152Zm0-48A48.85,48.85,0,0,0,56,64H16Z" opacity="0.2"/><path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM24,72H45.37A40.81,40.81,0,0,1,24,93.37Zm0,112V162.63A40.81,40.81,0,0,1,45.37,184Zm208,0H210.63A40.81,40.81,0,0,1,232,162.63Zm0-38.35A56.78,56.78,0,0,0,193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35Zm0-52.28A40.81,40.81,0,0,1,210.63,72H232Z"/></svg>`,
  backpack: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,96V216a8,8,0,0,1-8,8H176V152a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v72H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48h64A48,48,0,0,1,208,96Z" opacity="0.2"/><path d="M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"/></svg>`,
  cam: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z" opacity="0.2"/><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"/></svg>`,
  users: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2"/><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"/></svg>`,
  bed: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M248,112v56H112V80H216A32,32,0,0,1,248,112Z" opacity="0.2"/><path d="M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z"/></svg>`,
  food: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,40V168H152S152,64,208,40Z" opacity="0.2"/><path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"/></svg>`,
  ticket: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,128a32,32,0,0,0,32,32v32a8,8,0,0,1-8,8H96V56H224a8,8,0,0,1,8,8V96A32,32,0,0,0,200,128Z" opacity="0.2"/><path d="M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.4Z"/></svg>`,
  sunrise: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M192,144a64.33,64.33,0,0,1-2,16H66a64,64,0,1,1,126-16Z" opacity="0.2"/><path d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"/></svg>`,
  moon: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z" opacity="0.2"/><path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"/></svg>`,
  plus: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"/></svg>`,
  check: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg>`,
  circle: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/></svg>`,
  map: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M160,72V216L96,184V40Z" opacity="0.2"/><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"/></svg>`,
  train: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,56v72H48V56A24,24,0,0,1,72,32H184A24,24,0,0,1,208,56Z" opacity="0.2"/><path d="M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM72,40H184a16,16,0,0,1,16,16v64H56V56A16,16,0,0,1,72,40ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"/></svg>`,
  boat: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,125.77V152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18A8,8,0,0,1,224,125.77Z" opacity="0.2"/><path d="M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM64,56H192v44.9L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9Zm152,96c0,24.91-23.68,43-43.55,53.83A228.13,228.13,0,0,1,128,223.72,226.85,226.85,0,0,1,83.81,206C47.6,186.35,40,165.79,40,152V125.77L120,99.1V168a8,8,0,0,0,16,0V99.1l80,26.67Z"/></svg>`,
  sun: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>`,
  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z" opacity="0.2"/><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M213.09,172.48a96,96,0,0,1-80.41,51.41l3.17-16.44a8,8,0,0,0-2-6.95l-19.74-20.33a8,8,0,0,1-1.44-8.69l13.7-30.74a8,8,0,0,1,8.38-4.67l22.82,3.08a8.11,8.11,0,0,1,3.12,1.11ZM116.71,95,129,88.24a7.46,7.46,0,0,0,1.5-1.07l26.91-24.33A8,8,0,0,0,159,53l-10.5-18.81A96.62,96.62,0,0,0,128,32,95.61,95.61,0,0,0,67.78,53.23L56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l2.69.58L89.2,100a8,8,0,0,1,6.94-4h16.71A7.9,7.9,0,0,0,116.71,95Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"/></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z" opacity="0.2"/><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"/><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"/></svg>`,
  trophy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,48v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112V48Z" opacity="0.2"/><path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"/></svg>`,
  pin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2"/><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z" opacity="0.2"/><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"/><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z" opacity="0.2"/><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"/></svg>`,
  pushpin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,98.34,172.39,155.8c11.46,22.93-1.72,45.86-10.11,57a8,8,0,0,1-12,.83L42.34,105.76A8,8,0,0,1,43,93.85c29.65-23.92,57.4-10,57.4-10l57.27-57.46a8,8,0,0,1,11.31,0L229.66,87A8,8,0,0,1,229.66,98.34Z" opacity="0.2"/><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"/></svg>`,
  idea: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z" opacity="0.2"/><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"/></svg>`,
  handshake: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,152l-40,40L96,176,40,136,72.68,70.63,128,56l55.32,14.63L183.6,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120Z" opacity="0.2"/><path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"/></svg>`,
  currency: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z" opacity="0.2"/><path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z" opacity="0.2"/><path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z"/></svg>`,
  clip: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M180.75,104.75,204,128l-82.06,81.94a48,48,0,0,1-67.88-67.88L153.37,41.37a32,32,0,0,1,45.26,45.26Z" opacity="0.2"/><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"/></svg>`,
  qr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm-8,88H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96-96H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Z" opacity="0.2"/><path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm0,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48ZM200,40H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-64,72V144a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm80-16a8,8,0,0,1-8,8H184v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,160Zm0,32v16a8,8,0,0,1-16,0V192a8,8,0,0,1,16,0Z"/></svg>`,
  list: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,64V192H128V64Z" opacity="0.2"/><path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,40V168H168V88H88V40Z" opacity="0.2"/><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"/></svg>`,
  film: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M32,176H224v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8ZM216,48H40a8,8,0,0,0-8,8V80H224V56A8,8,0,0,0,216,48Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z"/></svg>`,
  party: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M58.89,154.89l42.22,42.22-50.63,18.4a7.79,7.79,0,0,1-10-10Zm138.82-4.72L105.83,58.29A7.79,7.79,0,0,0,93,61.14l-14.9,41,75.82,75.82,41-14.9A7.79,7.79,0,0,0,197.71,150.17Z" opacity="0.2"/><path d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26Zm-8.33,135.21-35-35,13.16-36.21,58.05,58.05Zm-55,20,14-38.41,24.45,24.45ZM156,168.64,87.36,100l13-35.87,91.43,91.43ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"/></svg>`,
  car: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M184,176h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,200a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V176H32ZM194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112H224Z" opacity="0.2"/><path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z"/></svg>`,
  flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,56v60c-19.89,17.23-38.23,18.39-56,13.48v-60C185.76,74.39,204.11,73.23,224,56ZM104,102.52v-60C86.24,37.61,67.89,38.77,48,56v60c19.89-17.22,38.23-18.39,56-13.48v60c21.62,6,42.38,21,64,27v-60c-21.62-6-42.38-21-64-27Z" opacity="0.2"/><path d="M227.32,48.75A8,8,0,0,0,218.76,50c-28,24.22-51.72,12.48-79.21-1.13C111.07,34.76,78.78,18.79,42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,28.49,14.09,60.77,30.06,96.79-1.13a8,8,0,0,0,2.76-6V56A8,8,0,0,0,227.32,48.75ZM216,71.6v40.65c-14,11.06-27,13.22-40,10.88V79.34A60.05,60.05,0,0,0,216,71.6Zm-56,3.76v43c-6.66-2.67-13.43-6-20.45-9.48-8.82-4.37-18-8.91-27.55-12.18v-43c6.66,2.66,13.43,6,20.45,9.48C141.27,67.55,150.46,72.09,160,75.36ZM96,48.91V92.69a60.06,60.06,0,0,0-40,7.75V59.78C70,48.72,83,46.57,96,48.91ZM86.58,152A60.06,60.06,0,0,0,56,160.43V119.78c14-11.06,27-13.22,40-10.88v43.8A65.61,65.61,0,0,0,86.58,152ZM112,156.67v-43c6.66,2.66,13.43,6,20.45,9.48,8.82,4.37,18,8.9,27.55,12.17v43c-6.66-2.67-13.43-6-20.45-9.48C130.73,164.47,121.54,159.94,112,156.67Zm64,26.45v-43.8a65.61,65.61,0,0,0,9.42.72A60.11,60.11,0,0,0,216,131.57v40.68C202,183.31,189,185.46,176,183.12Z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z" opacity="0.2"/><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/></svg>`,
  city: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M136,32V216H40V85.35a8,8,0,0,1,3.56-6.66l80-53.33A8,8,0,0,1,136,32Z" opacity="0.2"/><path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"/></svg>`,
  swap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M176,48V208H80V48Z" opacity="0.2"/><path d="M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z" opacity="0.2"/><path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"/></svg>`,
  replay: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"/></svg>`,
  pause: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z" opacity="0.2"/><path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"/></svg>`,
};
function ico(n){ return '<span class="ic">' + (ICONE[n] || '') + '</span>'; }
// Escape HTML: ogni testo di utente/AI va passato qui prima di finire in innerHTML/setHTML
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]; }); }
function idratoIcone(root){ (root||document).querySelectorAll('[data-ic]').forEach(function(e){ e.innerHTML = ICONE[e.getAttribute('data-ic')] || ''; e.classList.add('ic'); }); }
idratoIcone();

// ============ COSTANTI E STATO ============
const TIPI = {
  volo:       { label: "Volo",       icona: "plane", colore: "#3D5A80" },
  treno:      { label: "Treno",      icona: "train", colore: "#5E548E" },
  hotel:      { label: "Hotel/B&B",  icona: "bed",   colore: "#0891B2" },
  attivita:   { label: "Attività",   icona: "ticket", colore: "#E9A03B" },
  ristorante: { label: "Ristorante", icona: "food",  colore: "#C9514C" },
};
const ICONE_SVG = {
  volo: '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',
  treno: '<path d="M12 2C8 2 4 2.5 4 6v9.5A3.5 3.5 0 0 0 7.5 19L6 20.5v.5h2.2l2-2h3.6l2 2H18v-.5L16.5 19a3.5 3.5 0 0 0 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 16.5A1.5 1.5 0 1 1 9 15a1.5 1.5 0 0 1-1.5 1.5zM11 9.5H6V6h5v3.5zm2 0V6h5v3.5h-5zm3.5 7A1.5 1.5 0 1 1 18 15a1.5 1.5 0 0 1-1.5 1.5z"/>',
  auto: '<path d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6zM6.5 16A1.5 1.5 0 1 1 8 14.5 1.5 1.5 0 0 1 6.5 16zm11 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>',
};
const CHIAVE = "agenda-viaggi-v2";
const $ = (id) => document.getElementById(id);

// ============ INTERNAZIONALIZZAZIONE (it / en) ============
const STR = {
  it: {
    "home.eyebrow": "Agenda di viaggio", "home.title": "I miei viaggi",
    "home.empty1": "Nessun viaggio ancora.", "home.empty2": "Crea il primo con il pulsante qui sotto!",
    "home.import": "Importa viaggio da AI", "home.new": "+ Nuovo viaggio", "trip.addStop": "+ Aggiungi tappa",
    "onb.welcome": "Il tuo diario<br>di viaggio", "onb.welcomeSub": "Personalizzalo in pochi secondi: bastano un paio di domande.",
    "onb.start": "Iniziamo", "onb.step1": "Passo 1 di 2", "onb.step2": "Passo 2 di 2",
    "onb.nickTitle": "Scegli il tuo nickname", "onb.color": "Colore del pallino",
    "onb.skip": "Salta", "onb.next": "Avanti", "onb.finish": "Fine",
    "onb.fromWhere": "Da dove parti?", "onb.nickPh": "Es. Salvo", "onb.basePh": "Es. Napoli, Italia",
    "badge.corso": "In corso", "badge.programma": "In programma", "badge.bozza": "Bozza", "badge.concluso": "Concluso",
    "badge.manca": "Manca", "date.tbd": "Date da definire",
    "splash.eyebrow": "Diario di bordo", "splash.start": "Inizia il viaggio",
    "splash.firstTrip": "Crea il tuo primo viaggio", "splash.diaryReady": "Il diario è pronto",
    "splash.worldWaits": "Il mondo ti aspetta", "splash.day": "Giorno", "splash.bon": "Buon viaggio!",
    "cd.days": "Giorni", "cd.hours": "Ore", "cd.min": "Minuti", "cd.sec": "Secondi",
    "miss.date": "date", "miss.itinerario": "itinerario", "miss.nomi": "nomi partecipanti",
    "nav.trip": "Viaggio", "nav.budget": "Budget", "nav.prep": "Preparativi", "nav.memories": "Ricordi",
    "cq.title": "Terre conquistate", "cq.sub": "Ogni passo, una storia", "cq.countries": "paesi", "cq.world": "del mondo",
    "cq.mark": "Segna conquistato", "cq.note": "I paesi dei tuoi viaggi si accendono da soli",
    "imp.title": "Le mie imperdibili", "imp.sub": "Le cose per cui vale il viaggio", "imp.ideas": "Suggeriscimi qualche idea",
    "mem.title": "I ricordi vissuti",
    "common.cancel": "Annulla", "common.save": "Salva", "common.delete": "Elimina", "common.remove": "Rimuovi",
    "common.close": "Chiudi", "common.done": "Fatto", "common.confirm": "Conferma", "common.next": "Avanti",
    "imp.add": "Scegli foto", "ai.title": "Crea un viaggio con l'AI",
    "ai.s1": "Copia il prompt qui sotto col pulsante verde.", "ai.copy": "Copia il prompt per l'AI",
    "ai.paste": "Poi incolla qui il pacchetto ricevuto:", "ai.create": "Crea viaggio",
    "trip.new": "Nuovo viaggio", "trip.name": "Nome del viaggio", "trip.depart": "Partenza", "trip.return": "Ritorno",
    "trip.people": "Quante persone? (per dividere il budget)", "trip.save": "Salva viaggio",
    "stop.add": "Aggiungi tappa", "stop.day": "Giorno", "stop.title": "Titolo", "stop.time": "Ora",
    "stop.place": "Luogo — scrivi e scegli dai suggerimenti", "stop.found": "Posizione trovata sulla mappa", "stop.pickMap": "Scegli la posizione sulla mappa",
    "stop.from": "Da (partenza)", "stop.to": "A (arrivo)", "stop.foundDep": "Partenza trovata sulla mappa", "stop.foundArr": "Arrivo trovato sulla mappa",
    "stop.timeDep": "Orario partenza", "stop.timeArr": "Orario arrivo", "stop.cost": "Costo €",
    "pay.who": "Chi ha pagato? (più nomi = quote uguali)",
    "exp.title": "Spesa condivisa", "exp.desc": "Descrizione", "exp.amount": "Importo €", "exp.save": "Salva spesa",
    "cur.title": "Cambio valuta", "cur.dest": "Valuta della destinazione", "cur.refresh": "Aggiorna tasso",
    "photo.add": "Aggiungi foto", "photo.loc": "Località (per raggruppare le foto)", "photo.choose": "Scegli foto", "photo.exp": "Com'è stata questa esperienza?", "photo.mem": "Foto ricordo",
    "ticket.add": "Aggiungi biglietto", "ticket.name": "Nome", "ticket.type": "Tipo", "ticket.choose": "Scegli file",
    "type.flight": "Volo", "type.train": "Treno", "type.hotel": "Hotel/B&B", "type.activity": "Attività", "type.qr": "QR / Codice d'ingresso", "type.other": "Altro",
    "sel.move": "Sposta la mappa per posizionare la puntina", "sel.confirm": "Conferma posizione",
    "ttl.profile": "Il tuo profilo", "ttl.backTrips": "Torna ai viaggi", "ttl.tripMap": "Mappa del viaggio", "ttl.editTrip": "Modifica viaggio",
    "ttl.home": "Torna alla home", "ttl.base": "Vai alla tua base", "ttl.position": "Vai alla tua posizione",
    "ttl.dawn": "Alba", "ttl.day": "Giorno", "ttl.dusk": "Tramonto", "ttl.night": "Notte",
    "ttl.globe": "Vista globo", "ttl.zoom": "Zoom sul punto attuale", "ttl.itinerary": "Itinerario del viaggio", "ttl.lights": "Luci", "ttl.trophies": "Le tue terre conquistate",
    "ttl.add": "Aggiungi", "ttl.flip": "Gira pagina", "ttl.invert": "Inverti",
    "ph.pack": "Aggiungi una cosa da portare...", "ph.reminder": "Aggiungi un promemoria...", "ph.mustdo": "Scrivi cosa non vuoi perderti...",
    "ph.search": "Cerca un indirizzo o un luogo...", "ph.import": "Incolla qui il pacchetto viaggio che ti ha dato l'AI...",
    "ph.tripName": "Es. Weekend a Parigi", "ph.stopTitle": "Es. Cena da Luigi / Volo ANA NH204", "ph.place": "Es. Torre Eiffel, Parigi",
    "ph.from": "Es. Aeroporto di Fiumicino, Roma", "ph.to": "Es. Aeroporto Haneda, Tokyo", "ph.expDesc": "Es. Benzina, spesa al market, taxi",
    "ph.photoLoc": "Es. Tokyo", "ph.ticketName": "Es. Volo Roma → Tokyo, andata",
    "lang.name": "Italiano",
  },
  en: {
    "home.eyebrow": "Travel journal", "home.title": "My trips",
    "home.empty1": "No trips yet.", "home.empty2": "Create your first one with the button below!",
    "home.import": "Import trip from AI", "home.new": "+ New trip", "trip.addStop": "+ Add stop",
    "onb.welcome": "Your travel<br>journal", "onb.welcomeSub": "Personalize it in seconds: just a couple of questions.",
    "onb.start": "Let's go", "onb.step1": "Step 1 of 2", "onb.step2": "Step 2 of 2",
    "onb.nickTitle": "Choose your nickname", "onb.color": "Dot colour",
    "onb.skip": "Skip", "onb.next": "Next", "onb.finish": "Done",
    "onb.fromWhere": "Where do you start from?", "onb.nickPh": "e.g. Sam", "onb.basePh": "e.g. London, UK",
    "badge.corso": "Ongoing", "badge.programma": "Planned", "badge.bozza": "Draft", "badge.concluso": "Completed",
    "badge.manca": "Missing", "date.tbd": "Dates to be set",
    "splash.eyebrow": "Travel diary", "splash.start": "Start the journey",
    "splash.firstTrip": "Create your first trip", "splash.diaryReady": "Your diary is ready",
    "splash.worldWaits": "The world awaits", "splash.day": "Day", "splash.bon": "Have a great trip!",
    "cd.days": "Days", "cd.hours": "Hours", "cd.min": "Minutes", "cd.sec": "Seconds",
    "miss.date": "dates", "miss.itinerario": "itinerary", "miss.nomi": "traveller names",
    "nav.trip": "Trip", "nav.budget": "Budget", "nav.prep": "Prep", "nav.memories": "Memories",
    "cq.title": "Conquered lands", "cq.sub": "Every step, a story", "cq.countries": "countries", "cq.world": "of the world",
    "cq.mark": "Mark as conquered", "cq.note": "Countries from your trips light up by themselves",
    "imp.title": "My must-dos", "imp.sub": "The things that make the trip worth it", "imp.ideas": "Suggest some ideas",
    "mem.title": "Memories lived",
    "common.cancel": "Cancel", "common.save": "Save", "common.delete": "Delete", "common.remove": "Remove",
    "common.close": "Close", "common.done": "Done", "common.confirm": "Confirm", "common.next": "Next",
    "imp.add": "Choose photo", "ai.title": "Create a trip with AI",
    "ai.s1": "Copy the prompt below with the green button.", "ai.copy": "Copy the prompt for AI",
    "ai.paste": "Then paste the package you received here:", "ai.create": "Create trip",
    "trip.new": "New trip", "trip.name": "Trip name", "trip.depart": "Departure", "trip.return": "Return",
    "trip.people": "How many people? (to split the budget)", "trip.save": "Save trip",
    "stop.add": "Add stop", "stop.day": "Day", "stop.title": "Title", "stop.time": "Time",
    "stop.place": "Place — type and pick from suggestions", "stop.found": "Location found on the map", "stop.pickMap": "Pick the location on the map",
    "stop.from": "From (departure)", "stop.to": "To (arrival)", "stop.foundDep": "Departure found on the map", "stop.foundArr": "Arrival found on the map",
    "stop.timeDep": "Departure time", "stop.timeArr": "Arrival time", "stop.cost": "Cost €",
    "pay.who": "Who paid? (multiple = equal shares)",
    "exp.title": "Shared expense", "exp.desc": "Description", "exp.amount": "Amount €", "exp.save": "Save expense",
    "cur.title": "Currency exchange", "cur.dest": "Destination currency", "cur.refresh": "Update rate",
    "photo.add": "Add photo", "photo.loc": "Place (to group photos)", "photo.choose": "Choose photos", "photo.exp": "How was this experience?", "photo.mem": "Memory photo",
    "ticket.add": "Add ticket", "ticket.name": "Name", "ticket.type": "Type", "ticket.choose": "Choose file",
    "type.flight": "Flight", "type.train": "Train", "type.hotel": "Hotel/B&B", "type.activity": "Activity", "type.qr": "QR / entry code", "type.other": "Other",
    "sel.move": "Move the map to place the pin", "sel.confirm": "Confirm location",
    "ttl.profile": "Your profile", "ttl.backTrips": "Back to trips", "ttl.tripMap": "Trip map", "ttl.editTrip": "Edit trip",
    "ttl.home": "Back to home", "ttl.base": "Go to your base", "ttl.position": "Go to your location",
    "ttl.dawn": "Dawn", "ttl.day": "Day", "ttl.dusk": "Dusk", "ttl.night": "Night",
    "ttl.globe": "Globe view", "ttl.zoom": "Zoom to current point", "ttl.itinerary": "Trip itinerary", "ttl.lights": "Lights", "ttl.trophies": "Your conquered lands",
    "ttl.add": "Add", "ttl.flip": "Flip page", "ttl.invert": "Swap",
    "ph.pack": "Add something to pack...", "ph.reminder": "Add a reminder...", "ph.mustdo": "Write what you don't want to miss...",
    "ph.search": "Search an address or place...", "ph.import": "Paste the trip package the AI gave you...",
    "ph.tripName": "e.g. Weekend in Paris", "ph.stopTitle": "e.g. Dinner at Luigi's / Flight ANA NH204", "ph.place": "e.g. Eiffel Tower, Paris",
    "ph.from": "e.g. Fiumicino Airport, Rome", "ph.to": "e.g. Haneda Airport, Tokyo", "ph.expDesc": "e.g. Fuel, groceries, taxi",
    "ph.photoLoc": "e.g. Tokyo", "ph.ticketName": "e.g. Flight Rome → Tokyo, outbound",
    "lang.name": "English",
  },
};
function rilevaLang() {
  try { const s = localStorage.getItem("mj-lang"); if (s === "it" || s === "en") return s; } catch {}
  return ((navigator.language || "it").toLowerCase().startsWith("en")) ? "en" : "it";
}
let LANG = rilevaLang();
function t(k, vars) {
  let s = (STR[LANG] && STR[LANG][k]) != null ? STR[LANG][k] : (STR.it[k] != null ? STR.it[k] : k);
  if (vars) for (const v in vars) s = s.replace(new RegExp("\\{" + v + "\\}", "g"), vars[v]);
  return s;
}
// idrata gli elementi statici marcati con data-i18n / -ph / -html
function applicaI18n(root) {
  const r = root || document;
  r.querySelectorAll("[data-i18n]").forEach((e) => { e.textContent = t(e.getAttribute("data-i18n")); });
  r.querySelectorAll("[data-i18n-html]").forEach((e) => { e.innerHTML = t(e.getAttribute("data-i18n-html")); });
  r.querySelectorAll("[data-i18n-ph]").forEach((e) => { e.setAttribute("placeholder", t(e.getAttribute("data-i18n-ph"))); });
  r.querySelectorAll("[data-i18n-title]").forEach((e) => { const v = t(e.getAttribute("data-i18n-title")); e.title = v; if (e.hasAttribute("aria-label")) e.setAttribute("aria-label", v); });
  try { document.documentElement.lang = LANG; } catch {}
}
function impostaLingua(l) {
  LANG = (l === "en") ? "en" : "it";
  try { localStorage.setItem("mj-lang", LANG); } catch {}
  applicaI18n();
  try { if (typeof renderHome === "function" && !$("schermataHome").classList.contains("nascosto")) renderHome(); } catch {}
}

// ============ TOAST E DIALOGHI INTERNI ============
// Niente alert/confirm/prompt del browser: brutti, mostrano il dominio,
// e iOS può sopprimerli per sempre con "Elimina finestre di dialogo".
function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.innerHTML = msg;
  t.classList.add("visibile");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("visibile"), 2400);
}
let dlgRisolvi = null, dlgConInput = false;
function chiudiDialogo(valore) {
  $("veloDialogo").classList.remove("aperto");
  const r = dlgRisolvi; dlgRisolvi = null;
  if (r) r(valore);
}
function chiediConferma(titolo, testo, okLabel, pericolo) {
  return new Promise((res) => {
    dlgRisolvi = res; dlgConInput = false;
    $("dlgTitolo").textContent = titolo;
    $("dlgTesto").textContent = testo || "";
    $("dlgTesto").classList.toggle("nascosto", !testo);
    $("dlgInput").classList.add("nascosto");
    $("dlgOk").textContent = okLabel || "Conferma";
    $("dlgOk").style.background = pericolo ? "#dc2626" : "";
    $("veloDialogo").classList.add("aperto");
  });
}
function chiediTesto(titolo, valore, okLabel) {
  return new Promise((res) => {
    dlgRisolvi = res; dlgConInput = true;
    $("dlgTitolo").textContent = titolo;
    $("dlgTesto").classList.add("nascosto");
    const inp = $("dlgInput");
    inp.classList.remove("nascosto"); inp.value = valore || "";
    $("dlgOk").textContent = okLabel || "Salva";
    $("dlgOk").style.background = "";
    $("veloDialogo").classList.add("aperto");
    setTimeout(() => inp.focus(), 60);
  });
}
const eur = (n) => n === 0 ? "€ 0,00" : "€ " + n.toLocaleString("it-IT");
const isTrasporto = (tipo) => tipo === "volo" || tipo === "treno";

let viaggi = [];
try { viaggi = JSON.parse(localStorage.getItem(CHIAVE)) || []; } catch { viaggi = []; }
let corrente = null, tappaInModifica = null, viaggioInModifica = false;
let mappa = null, marcatori = [], mappaPronta = false, animazioneInCorso = false;
let coordScelta = null, coordDaScelta = null, coordAScelta = null;
const salva = () => { try { localStorage.setItem(CHIAVE, JSON.stringify(viaggi)); } catch {} };

// ============ DATABASE LOCALE (IndexedDB) per foto e biglietti ============
let db = null;
function apriDB() {
  return new Promise((res) => {
    const r = indexedDB.open("agenda-viaggi-db", 1);
    r.onupgradeneeded = () => {
      const d = r.result;
      if (!d.objectStoreNames.contains("foto")) d.createObjectStore("foto", { keyPath: "id" });
      if (!d.objectStoreNames.contains("biglietti")) d.createObjectStore("biglietti", { keyPath: "id" });
    };
    r.onsuccess = () => { db = r.result; res(); };
    r.onerror = () => res();
  });
}
function dbPut(store, val) {
  return new Promise((res, rej) => {
    if (!db) return rej(new Error("Memoria locale non disponibile"));
    const tx = db.transaction(store, "readwrite");
    tx.objectStore(store).put(val);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error || new Error("Errore di salvataggio"));
  });
}
function dbTutti(store) {
  return new Promise((res) => {
    if (!db) return res([]);
    const rq = db.transaction(store).objectStore(store).getAll();
    rq.onsuccess = () => res(rq.result || []); rq.onerror = () => res([]);
  });
}
function dbElimina(store, id) {
  return new Promise((res) => {
    if (!db) return res();
    const tx = db.transaction(store, "readwrite");
    tx.objectStore(store).delete(id);
    tx.oncomplete = () => res(); tx.onerror = () => res();
  });
}
// Comprime una foto (max 1280px) in base64
function comprimi(file) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      try {
        const max = 1280, sc = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, c.width, c.height);
        res(c.toDataURL("image/jpeg", .82));
      } catch (e) { rej(e); }
    };
    img.onerror = () => rej(new Error("Immagine non leggibile"));
    img.src = URL.createObjectURL(file);
  });
}
// Sorgente dell'immagine: nuovo formato (dati) o vecchio formato (blob)
function srcFoto(f) {
  if (f.dati) return f.dati;
  if (f.blob) try { return URL.createObjectURL(f.blob); } catch { return ""; }
  return "";
}

// ============ DATE E FASCE ORARIE ============
const oggiISO = () => new Date().toISOString().slice(0, 10);
function fmtData(iso, lungo) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("it-IT", lungo
    ? { day: "numeric", month: "long", year: "numeric" }
    : { weekday: "short", day: "numeric", month: "short" });
}
function rangeGiorni(inizio, fine) {
  const out = []; let d = new Date(inizio + "T12:00:00");
  const stop = new Date(fine + "T12:00:00"); let n = 1;
  while (d <= stop && out.length < 120) {
    const iso = d.toISOString().slice(0, 10);
    out.push({ id: iso, titolo: "Giorno " + n, data: iso, tappe: [] });
    d.setDate(d.getDate() + 1); n++;
  }
  return out;
}
function statoViaggio(v) {
  const oggi = oggiISO();
  if (oggi < v.inizio) {
    const diff = Math.round((new Date(v.inizio) - new Date(oggi)) / 86400000);
    return { classe: "", icona: "clock", testo: diff === 1 ? "Si parte domani!" : "Mancano " + diff + " giorni" };
  }
  if (oggi <= v.fine) return { classe: "corso", icona: "plane", testo: "Viaggio in corso!" };
  return { classe: "fine", icona: "check", testo: "Viaggio concluso" };
}
function totaleTappe(v) {
  return (v.giorni || []).reduce((s, g) => s + ((g.tappe && g.tappe.length) || 0), 0);
}
function nomiMancanti(v) {
  if ((v.persone || 1) < 2) return false;            // viaggio in solo: nessun nome richiesto
  const nomi = v.nomi || [];
  if (nomi.length < v.persone) return true;
  return nomi.some((n) => !n || /^Viaggiatore\s+\d+$/i.test(String(n).trim()));
}
function mancanzeViaggio(v) {
  const m = [];
  if (!v.inizio || !v.fine) m.push("date");
  if (totaleTappe(v) === 0) m.push("itinerario");
  if (nomiMancanti(v)) m.push("nomi");
  return m;
}
// Stato per il badge in home: concluso > bozza > in programma > in corso
function statoBadge(v) {
  const oggi = oggiISO();
  if (v.inizio && v.fine && oggi > v.fine) return { classe: "concluso", label: t("badge.concluso"), colore: "#a8a29e" };
  if (mancanzeViaggio(v).length)            return { classe: "bozza", label: t("badge.bozza"), colore: "#DC2626" };
  if (oggi < v.inizio)                       return { classe: "programma", label: t("badge.programma"), colore: "#EA580C" };
  return { classe: "corso", label: t("badge.corso"), colore: "#16a34a" };
}
const FASCE = [["sunrise","Mattina"],["sun","Pomeriggio"],["moon","Sera"],["clock","Da pianificare"]];
function fasciaDi(t) {
  if (!t.ora || t.ora === "—") return 3;
  const h = Number(t.ora.split(":")[0]);
  if (h < 12) return 0;
  if (h < 18) return 1;
  return 2;
}
const ordina = (tappe) => [...tappe].sort((a, b) =>
  (a.ora === "—" ? "99" : a.ora) > (b.ora === "—" ? "99" : b.ora) ? 1 : -1);

// ============ HOME ============
// ===================== TEMI DESTINAZIONE =====================
// ===================== ANIMAZIONE TEMI (canvas sopra la cartolina) =====================
const _reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function avviaTemaAnim(canvas, tipo, accent) {
  if (_reducedMotion || !canvas || !canvas.getContext) return function () {};
  const ctx = canvas.getContext("2d");
  const rnd = (a, b) => a + Math.random() * (b - a);
  let raf = 0, w = 0, h = 0, dpr = 1, stopped = false, last = 0;
  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = canvas.clientWidth || (canvas.parentNode && canvas.parentNode.clientWidth) || 320;
    h = canvas.clientHeight || Math.round(w * 9 / 16);
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // --- FRANCIA: bolle di sapone che salgono + pulviscolo luminoso ---
  let bolle = [], polvere = [];
  function initFrancia() {
    bolle = []; polvere = [];
    const nB = Math.max(7, Math.round(w / 70));
    for (let i = 0; i < nB; i++) bolle.push({ x: rnd(0, w), y: rnd(0, h), r: rnd(6, 19), sp: rnd(7, 20), ph: rnd(0, 6.28), sw: rnd(8, 22), a: rnd(.4, .75) });
    const nP = Math.max(16, Math.round(w / 26));
    for (let i = 0; i < nP; i++) polvere.push({ x: rnd(0, w), y: rnd(0, h), r: rnd(.5, 1.7), sp: rnd(4, 11), ph: rnd(0, 6.28), a: rnd(.2, .55), tw: rnd(1, 3) });
  }
  function drawFrancia(dt, time) {
    for (const p of polvere) {
      p.y -= p.sp * dt; p.x += Math.sin(time / 700 + p.ph) * 0.15;
      if (p.y < -2) { p.y = h + 2; p.x = rnd(0, w); }
      const tw = (Math.sin(time / 1000 * p.tw + p.ph) + 1) / 2;
      ctx.fillStyle = "rgba(255,249,233," + (p.a * (.35 + .65 * tw)) + ")";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
    }
    for (const p of bolle) {
      p.y -= p.sp * dt; p.x += Math.sin(time / 1000 * (p.sw / 10) + p.ph) * 0.35;
      if (p.y < -p.r - 2) { p.y = h + p.r; p.x = rnd(0, w); }
      const g = ctx.createRadialGradient(p.x - p.r * .3, p.y - p.r * .3, p.r * .1, p.x, p.y, p.r);
      g.addColorStop(0, "rgba(255,255,255," + (p.a * .10) + ")");
      g.addColorStop(.74, "rgba(255,255,255," + (p.a * .05) + ")");
      g.addColorStop(.9, "rgba(255,255,255," + (p.a * .5) + ")");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255," + (p.a * .3) + ")"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * .97, 0, 6.2832); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255," + (p.a * .85) + ")";
      ctx.beginPath(); ctx.arc(p.x - p.r * .36, p.y - p.r * .38, p.r * .14, 0, 6.2832); ctx.fill();
    }
  }

  // --- GRECIA: rondini verso l'orizzonte + barche a vela ---
  let rondini = [], barche = [];
  function vanish() { return { vx: w * 0.52, vy: h * 0.40 }; }
  function newRondine() {
    const x0 = rnd(0.05, 0.95) * w, y0 = rnd(0.55, 1.0) * h;
    return { x0, y0, x: x0, y: y0, p: rnd(0, .25), sp: rnd(.05, .1), size: rnd(7, 12), ph: rnd(0, 6.28) };
  }
  function initGrecia() {
    rondini = []; barche = [];
    for (let i = 0; i < 6; i++) rondini.push(newRondine());
    for (let i = 0; i < 2; i++) barche.push({ x: rnd(.55, .95) * w, y: rnd(.43, .48) * h, sp: rnd(2.5, 5) * (Math.random() < .5 ? 1 : -1), s: rnd(.8, 1.15), bob: rnd(0, 6.28) });
  }
  function drawGrecia(dt, time) {
    const { vx, vy } = vanish();
    const L = w * 0.5, Rr = w * 0.97;
    for (const b of barche) {
      b.x += b.sp * dt;
      if (b.x < L) b.x = Rr; if (b.x > Rr) b.x = L;
      const by = b.y + Math.sin(time / 1200 + b.bob) * 1.1, sc = b.s;
      ctx.fillStyle = "rgba(255,255,255,.92)";
      ctx.beginPath(); ctx.moveTo(b.x, by - 9 * sc); ctx.lineTo(b.x + 6 * sc, by + 1 * sc); ctx.lineTo(b.x, by + 1 * sc); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.68)";
      ctx.beginPath(); ctx.moveTo(b.x - .5, by - 9 * sc); ctx.lineTo(b.x - 5 * sc, by + 1 * sc); ctx.lineTo(b.x - .5, by + 1 * sc); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "rgba(38,36,52,.5)";
      ctx.beginPath(); ctx.moveTo(b.x - 5 * sc, by + 1 * sc); ctx.lineTo(b.x + 6 * sc, by + 1 * sc); ctx.lineTo(b.x + 3 * sc, by + 4 * sc); ctx.lineTo(b.x - 3 * sc, by + 4 * sc); ctx.closePath(); ctx.fill();
    }
    ctx.lineCap = "round";
    for (const bd of rondini) {
      bd.p += bd.sp * dt;
      if (bd.p >= 1) { Object.assign(bd, newRondine()); bd.p = 0; continue; }
      const e = bd.p * (2 - bd.p);
      bd.x = bd.x0 + (vx - bd.x0) * e;
      bd.y = bd.y0 + (vy - bd.y0) * e;
      const sz = bd.size * (1 - bd.p * 0.85);
      const flap = Math.sin(time / 120 + bd.ph) * 0.5 + 0.5;
      const wing = sz * (0.45 + flap * 0.75);
      const al = bd.p < .12 ? bd.p / .12 : (bd.p > .82 ? (1 - bd.p) / .18 : 1);
      ctx.strokeStyle = "rgba(28,26,38," + (0.55 * al) + ")";
      ctx.lineWidth = Math.max(0.8, sz * 0.18);
      ctx.beginPath();
      ctx.moveTo(bd.x - sz, bd.y);
      ctx.quadraticCurveTo(bd.x - sz * 0.3, bd.y - wing, bd.x, bd.y);
      ctx.quadraticCurveTo(bd.x + sz * 0.3, bd.y - wing, bd.x + sz, bd.y);
      ctx.stroke();
    }
  }

  function frame(ts) {
    if (stopped) return;
    if (!canvas.isConnected) { stopped = true; return; }
    raf = requestAnimationFrame(frame);
    if (canvas.offsetParent === null) { last = ts; return; } // nascosto: non disegno
    const dt = last ? Math.min(0.05, (ts - last) / 1000) : 0.016; last = ts;
    ctx.clearRect(0, 0, w, h);
    if (tipo === "francia") drawFrancia(dt, ts); else drawGrecia(dt, ts);
  }
  resize();
  if (tipo === "francia") initFrancia(); else initGrecia();
  const onResize = () => { resize(); if (tipo === "francia") initFrancia(); else initGrecia(); };
  window.addEventListener("resize", onResize);
  raf = requestAnimationFrame(frame);
  return function stop() { stopped = true; cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
}

const TEMI = {
  giappone: { paese: "Giappone", video: "themes/giappone.mp4", poster: "themes/giappone.jpg", accent: "#E0566A", accentDark: "#C23A55" },
  francia:  { paese: "Francia",  anim: "francia", poster: "themes/francia.jpg", accent: "#3E6DA8", accentDark: "#2C5285" },
  grecia:   { paese: "Grecia",   poster: "themes/grecia.jpg",  accent: "#E0904C", accentDark: "#C06C30" },
  regnounito: { paese: "Regno Unito", poster: "themes/regnounito.jpg", accent: "#D9893B", accentDark: "#B26E26" },
  cina:     { paese: "Cina",     poster: "themes/cina.jpg", accent: "#C0463C", accentDark: "#9C342C" },
  usa:      { paese: "USA",      poster: "themes/usa.jpg", accent: "#2E8BC0", accentDark: "#1F6A94" },
  spagna:   { paese: "Spagna",   poster: "themes/spagna.jpg", accent: "#D2552E", accentDark: "#AE3F1F" },
  olanda:   { paese: "Olanda",   poster: "themes/olanda.jpg", accent: "#E0A93B", accentDark: "#BD8623" },
  indonesia:{ paese: "Indonesia", poster: "themes/indonesia.jpg", accent: "#2E8F86", accentDark: "#1F6A63" },
  emiratiarabi: { paese: "Emirati Arabi", poster: "themes/emiratiarabi.jpg", accent: "#D2A23C", accentDark: "#B07F22" },
  italia: { paese: "Italia", poster: "themes/italia.jpg", accent: "#CC7A33", accentDark: "#A35E22" },
  egitto: { paese: "Egitto", poster: "themes/egitto.jpg", accent: "#D99A3C", accentDark: "#A8721F" },
  tropici: { paese: "Tropici", poster: "themes/tropici.jpg", accent: "#0FA3B1", accentDark: "#0B7C88" }
};
function temaViaggio(v) {
  if (!v) return null;
  if (v.tema && TEMI[v.tema]) return TEMI[v.tema];
  const t = ((v.nome || "") + " " + (v.destinazione || "") + " " + (v.paese || "")).toLowerCase();
  if (/giappon|japan|tokyo|kyoto|osaka|fuji|hiroshima|\bnara\b|sapporo|yokohama|nagoya|okinawa|hokkaido|\bkobe\b|nikko|giappones/.test(t)) return TEMI.giappone;
  if (/\bitali|\bitaly\b|italian|\broma\b|\brome\b|milano|\bmilan\b|firenze|florence|venezia|venice|napoli|naples|torino|\bturin\b|bologna|genova|palermo|\bbari\b|verona|\bpisa\b|siena|amalfi|costiera|\bcapri\b|toscana|tuscany|sicili|sardegn|sardinia|dolomiti|\bcomo\b|cinque terre|\brimini\b|matera|lecce|\bgarda\b/.test(t)) return TEMI.italia;
  if (/egitt|egypt|egizi|\bcairo\b|\bgiza\b|piramid|pyramid|sfinge|sphinx|\bluxor\b|\bnilo\b|\bnile\b|assuan|aswan|\bsharm\b|hurghada|abu simbel|marsa alam/.test(t)) return TEMI.egitto;
  if (/franc|parig|paris|marsigli|marseille|\blione\b|\blyon\b|nizza|cannes|tolosa|toulouse|bordeaux|\blille\b|nantes|strasburg|strasbourg|montpellier|provenz|provence|costa azzurra|cote d'?azur|riviera francese|french riviera|normandi|bretagn|versailles|avignon|biarritz|chamonix|grenoble|saint-?tropez|antibes|\bloira\b|\bloire\b/.test(t)) return TEMI.francia;
  if (/greci|greece|atene|athen|santorin|mykon|cicladi|creta|crete|\brodi\b|rhodes|corf[uù]|salonicco|thessalonik|zante|zakynth|\bkos\b|naxos|paros|\bmilos\b|peloponnes|meteora|delfi|delphi|cefalonia|\begeo\b|greco/.test(t)) return TEMI.grecia;
  if (/londr|london|regno unito|inghilterr|england|gran bretagn|\buk\b|britann|manchester|liverpool|edimburg|edinburgh|glasgow|birmingham|\boxford\b|cambridge|bristol|\bleeds\b|yorkshire|cardiff|belfast|scozia|scotland|galles|\bwales\b|cornovagli|cornwall|tamigi|stonehenge|ingles/.test(t)) return TEMI.regnounito;
  if (/cina|china|pechino|beijing|shanghai|hong ?kong|xi'?an|canton|guangzhou|muraglia|cinese|shenzhen|chengdu|guilin|chongqing|\btibet\b|lhasa|macao|macau|suzhou|hangzhou|wuhan|nanchino|nanjing|terracotta|citt[aà] proibita/.test(t)) return TEMI.cina;
  if (/\busa\b|u\.s\.a|stati uniti|america|new ?york|\bnyc\b|manhattan|brooklyn|los angeles|san francisco|las vegas|\bmiami\b|chicago|\bboston\b|washington|seattle|san diego|orlando|hawaii|california|\btexas\b|florida|grand canyon|route 66|yellowstone|statua della libert/.test(t)) return TEMI.usa;
  if (/spagn|spain|barcellona|barcelona|madrid|siviglia|sevilla|valencia|sagrada|gaudi|ibiza|maiorca|mallorca|bilbao|malaga|\bgranada\b|saragozza|zaragoza|cordova|cordoba|toledo|salamanca|san sebasti|tenerife|canarie|canary|gran canaria|lanzarote|fuerteventura|formentera|andalus|costa del sol|costa brava|marbella|cadice|cadiz|spagnol/.test(t)) return TEMI.spagna;
  if (/oland|paesi bassi|netherlands|holland|amsterdam|rotterdam|l'?aia\b|den haag|the hague|tulipan|eindhoven|utrecht|maastricht|groning|haarlem|\bdelft\b|leida|leiden|nimega|nijmegen|tilburg|\bbreda\b|almere|zaanse|keukenhof|volendam|giethoorn|olandes/.test(t)) return TEMI.olanda;
  if (/indonesia|\bbali\b|giacarta|jakarta|ubud|borobudur|lombok|giava|sumatra|yogyakarta|surabaya|komodo|\bgili\b|\bnusa\b|sulawesi|flores|bandung|indonesian/.test(t)) return TEMI.indonesia;
  if (/emirat|dubai|abu ?dhabi|\buae\b|emirates|burj|sharjah|ajman|fujairah|ras al khaim|palm jumeirah/.test(t)) return TEMI.emiratiarabi;
  // ---- Tipologie di viaggio (fallback, dopo le nazioni) ----
  if (/tropic|caraib|caribbean|maldiv|polinesia|polynesia|bora ?bora|tahiti|seychelles|mauritius|\batollo\b|barriera corallina|coralli|\bspiaggia\b|\bbeach\b|isole? tropical|paradiso tropicale|\bfiji\b|samoa|\baruba\b|barbados|antille|zanzibar/.test(t)) return TEMI.tropici;
  return null;
}
// Mappa codice nazione (ISO Mapbox) -> tema. Per coprire QUALSIASI città senza
// eccezioni: se i pattern testuali non bastano, geocodifico il luogo, ricavo la
// nazione e applico l'artwork corrispondente (cache su v.tema).
const PAESE_TEMA = { it: "italia", eg: "egitto", jp: "giappone", fr: "francia", gr: "grecia", gb: "regnounito", cn: "cina", us: "usa", es: "spagna", nl: "olanda", id: "indonesia", ae: "emiratiarabi" };
async function paeseDiLuogo(testo) {
  if (!testo || !tokenValido()) return null;
  try {
    const r = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(testo)}.json?access_token=${MAPBOX_TOKEN}&limit=1&language=it&types=country,region,place,locality,district`);
    const j = await r.json();
    const f = j.features && j.features[0];
    if (!f || (typeof f.relevance === "number" && f.relevance < 0.6)) return null;
    if ((f.place_type || []).includes("country")) return ((f.properties && f.properties.short_code) || "").toLowerCase();
    for (const c of (f.context || [])) if (String(c.id || "").startsWith("country")) return String(c.short_code || "").toLowerCase();
    return null;
  } catch { return null; }
}
// Risolve e memorizza il tema di un viaggio non riconosciuto dai pattern.
async function risolviTemaAuto(v) {
  if (!v) return false;
  if (v.tema && TEMI[v.tema]) return false;       // tema già impostato
  if (temaViaggio(v)) return false;               // già riconosciuto dai pattern
  const chiave = String(v.destinazione || v.nome || "").trim();
  if (!chiave || v._temaGeoFor === chiave) return false; // già tentato per questo nome
  const code = await paeseDiLuogo(chiave);
  v._temaGeoFor = chiave;                          // ricordo il tentativo (anche negativo)
  if (code && PAESE_TEMA[code]) { v.tema = PAESE_TEMA[code]; salva(); return true; }
  salva();
  return false;
}
async function autoTemiHome() {
  let cambiato = false;
  for (const v of viaggi) { try { if (await risolviTemaAuto(v)) cambiato = true; } catch {} }
  if (cambiato) renderHome();
}
let temaAnimStop = null;
function applicaTema(tema) {
  const screen = $("schermataViaggio");
  const header = screen.querySelector("header");
  if (temaAnimStop) { temaAnimStop(); temaAnimStop = null; }
  let v = header.querySelector(".tema-bg");
  let sc = header.querySelector(".tema-scrim");
  let cv = header.querySelector(".tema-anim");
  if (tema) {
    screen.classList.add("temato");
    screen.style.setProperty("--t-accent", tema.accent);
    screen.style.setProperty("--t-accent-d", tema.accentDark);
    header.classList.add("tema");
    header.style.backgroundImage = 'url("' + tema.poster + '")';
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center 50%";
    if (!sc) { sc = document.createElement("div"); sc.className = "tema-scrim"; }
    if (tema.video) {
      if (cv) { cv.remove(); cv = null; }
      if (!v) { v = document.createElement("video"); v.className = "tema-bg"; v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true; v.setAttribute("playsinline", ""); }
      header.insertBefore(v, header.firstChild);
      header.insertBefore(sc, v.nextSibling);
      v.poster = tema.poster; v.src = tema.video; v.play().catch(function () {});
    } else if (tema.anim) {
      if (v) { v.remove(); v = null; }
      if (!cv) { cv = document.createElement("canvas"); cv.className = "tema-anim"; }
      header.insertBefore(cv, header.firstChild);
      header.insertBefore(sc, cv.nextSibling);
      temaAnimStop = avviaTemaAnim(cv, tema.anim, tema.accent);
    } else {
      // cartolina statica: solo immagine + scrim, nessuna animazione
      if (v) { v.remove(); v = null; }
      if (cv) { cv.remove(); cv = null; }
      header.insertBefore(sc, header.firstChild);
    }
  } else {
    screen.classList.remove("temato");
    screen.style.removeProperty("--t-accent"); screen.style.removeProperty("--t-accent-d");
    header.classList.remove("tema");
    header.style.backgroundImage = "";
    if (v) v.remove(); if (sc) sc.remove(); if (cv) cv.remove();
  }
}

function renderHomeAvatar() {
  const el = $("homeAvatar"); if (!el) return;
  const foto = utenteFoto(), ini = inizialeProprietario();
  if (foto) { el.style.background = "#fff center/cover no-repeat"; el.style.backgroundImage = "url('" + foto + "')"; el.innerHTML = ""; }
  else { el.style.backgroundImage = ""; el.style.background = utenteColore(); el.innerHTML = ini ? '<span class="pos-ini">' + ini + '</span>' : POS_BUSTO; }
}
function renderHome() {
  renderHomeAvatar();
  $("schermataHome").classList.remove("nascosto");
  $("schermataViaggio").classList.add("nascosto");
  $("fab").classList.remove("nascosto");
  $("fab").textContent = t("home.new");
  const m = $("listaViaggi"); m.innerHTML = "";
  if (viaggi.length === 0) {
    m.innerHTML = '<div class="vuoto" style="text-align:center;padding:30px 10px">' + esc(t("home.empty1")) + '<br>' + esc(t("home.empty2")) + ' ' + ico('globe') + '</div>';
    return;
  }
  for (const v of viaggi) {
    const sb = statoBadge(v);
    const tema = temaViaggio(v);
    const conDate = v.inizio && v.fine;
    const quando = (conDate ? fmtData(v.inizio, true) + " → " + fmtData(v.fine, true) : t("date.tbd")) + " · " + v.persone + " " + ico('user');
    const card = document.createElement("div"); card.className = "viaggio-card" + (tema ? " tema" : "") + (sb.classe === "bozza" ? " bozza" : "");
    if (tema) {
      card.style.setProperty("--t-accent", tema.accent);
      card.style.backgroundImage = 'url("' + tema.poster + '")';
      card.style.backgroundSize = "cover"; card.style.backgroundPosition = "center";
      const media = tema.video
        ? `<video class="tema-bg" autoplay loop muted playsinline poster="${tema.poster}"><source src="${tema.video}" type="video/mp4"></video>`
        : tema.anim ? `<canvas class="tema-anim"></canvas>` : "";
      card.innerHTML = `
        ${media}
        <div class="tema-veil"></div><div class="tema-accent"></div>
        <div class="info">
          <div class="tema-row">
            <span class="tema-chip">${tema.paese}</span>
            <span class="tema-chip"><span class="dot" style="background:${sb.colore}"></span>${sb.label}</span>
          </div>
          <div>
            <h2>${esc(v.nome)}</h2>
            <div class="quando">${quando}</div>
          </div>
        </div>
        <button class="x">${ico('x')}</button>`;
    } else {
      const rigaQuando = sb.classe === "bozza"
        ? `<div class="quando manca">${esc(t("badge.manca"))}: ${esc(mancanzeViaggio(v).map((x) => t("miss." + x)).join(" · "))}</div>`
        : `<div class="quando">${quando}</div>`;
      card.innerHTML = `
      <div class="info">
        <h2>${esc(v.nome)}</h2>
        ${rigaQuando}
        <span class="stato-badge sb-${sb.classe}"><span class="dot"></span>${sb.label}</span>
      </div>
      <button class="x">${ico('x')}</button>`;
    }
    const _vbg = card.querySelector(".tema-bg"); if (_vbg) _vbg.play().catch(function () {});
    card.querySelector(".info").addEventListener("click", () => apriViaggio(v.id));
    card.querySelector(".x").addEventListener("click", async () => {
      if (!(await chiediConferma("Eliminare il viaggio?", '"' + v.nome + '" — verranno eliminati anche foto e biglietti.', "Elimina", true))) return;
      viaggi = viaggi.filter((x) => x.id !== v.id); salva();
      for (const st of ["foto", "biglietti"]) {
        const tutti = await dbTutti(st);
        for (const r of tutti) if (r.viaggioId === v.id) await dbElimina(st, r.id);
      }
      renderHome();
    });
    m.appendChild(card);
    const _cv = card.querySelector(".tema-anim"); if (_cv && tema.anim) avviaTemaAnim(_cv, tema.anim, tema.accent);
  }
  autoTemiHome(); // in sottofondo: assegna l'artwork per nazione anche alle città non nei pattern
}

// ============ VIAGGIO ============
function apriViaggio(id) {
  corrente = viaggi.find((v) => v.id === id);
  $("schermataHome").classList.add("nascosto");
  $("schermataViaggio").classList.remove("nascosto");
  $("fab").textContent = t("trip.addStop");
  macroSub.viaggio = "itinerario"; macroSub.preparativi = "valigia"; // ogni apertura riparte da Itinerario
  mostraMacro("viaggio");
  renderViaggio();
  if ((corrente.persone || 1) > 1 && !corrente.nomi) apriModaleViaggio(true); // prima volta: chiedo i nomi
}
function renderViaggio() {
  $("nomeViaggio").textContent = corrente.nome;
  $("dateViaggio").textContent = fmtData(corrente.inizio, true) + " → " + fmtData(corrente.fine, true);
  const s = statoViaggio(corrente);
  $("countdown").innerHTML = ico(s.icona) + " " + s.testo;
  $("countdown").className = "countdown " + s.classe;
  applicaTema(temaViaggio(corrente));
  if (!temaViaggio(corrente)) risolviTemaAuto(corrente).then((ch) => { if (ch && corrente) applicaTema(temaViaggio(corrente)); });
  renderItinerario(); renderBudget(); renderMappa(); renderFoto(); renderBiglietti(); renderValigia(); renderDafare();
  if ($("diario")) { $("diario").classList.remove("girata"); impostaFrecciaDiario(); } // riparti dalla pagina lista
}
let giornoAperto = null;
function renderItinerario() {
  const m = $("vistaItinerario"); m.innerHTML =
    '<div class="suggerimento">Tocca un giorno per aprirlo · scorri ' + ico('cl') + ' per rinominare o svuotare</div>';
  for (const g of corrente.giorni) {
    const costoG = g.tappe.reduce((s, t) => s + t.costo, 0);
    const aperto = giornoAperto === g.id;
    const wrap = document.createElement("div"); wrap.className = "gcard-wrap";
    wrap.innerHTML = `
      <div class="gcard-azioni">
        <button class="ga-rinomina">${ico('edit')}<small>Rinomina</small></button>
        <button class="ga-svuota">${ico('trash')}<small>Svuota</small></button>
      </div>
      <div class="gcard">
        <div class="gcard-testa">
          <div class="gcard-info">
            <b>${esc(g.titolo)}</b>
            <small>${fmtData(g.data)} · ${g.tappe.length ? g.tappe.length + " attività" : "giornata libera"}${costoG ? " · " + eur(costoG) : ""}</small>
          </div>
          <span class="chevron">${aperto ? "▾" : "▸"}</span>
        </div>
        <div class="gcard-corpo ${aperto ? "" : "nascosto"}"></div>
      </div>`;
    const card = wrap.querySelector(".gcard");

    // ----- swipe a sinistra per rivelare le azioni -----
    let x0 = null, y0 = null, dx = 0, rivelata = false, orizzontale = null;
    card.addEventListener("touchstart", (e) => {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
      dx = 0; orizzontale = null; card.style.transition = "none";
    }, { passive: true });
    card.addEventListener("touchmove", (e) => {
      if (x0 === null) return;
      dx = e.touches[0].clientX - x0;
      const dy = e.touches[0].clientY - y0;
      if (orizzontale === null) orizzontale = Math.abs(dx) > Math.abs(dy) + 4;
      if (!orizzontale) return; // sta scorrendo la pagina, non la card
      const base = rivelata ? -140 : 0;
      card.style.transform = `translateX(${Math.min(0, Math.max(-150, base + dx))}px)`;
    }, { passive: true });
    card.addEventListener("touchend", () => {
      if (x0 === null) return;
      card.style.transition = "transform .22s ease";
      const base = rivelata ? -140 : 0;
      rivelata = orizzontale ? base + dx < -60 : rivelata;
      card.style.transform = `translateX(${rivelata ? -140 : 0}px)`;
      x0 = null;
    });

    // ----- tap: apri/chiudi la giornata -----
    card.querySelector(".gcard-testa").addEventListener("click", () => {
      if (rivelata) { rivelata = false; card.style.transform = "translateX(0)"; return; }
      giornoAperto = aperto ? null : g.id;
      renderItinerario();
    });
    wrap.querySelector(".ga-rinomina").addEventListener("click", async () => {
      const nuovo = await chiediTesto("Titolo del giorno", g.titolo);
      if (nuovo !== null && nuovo.trim()) { g.titolo = nuovo.trim(); salva(); }
      renderItinerario();
    });
    wrap.querySelector(".ga-svuota").addEventListener("click", async () => {
      if (g.tappe.length === 0 || await chiediConferma("Svuotare la giornata?", `"${g.titolo}" — ${g.tappe.length} attività verranno rimosse.`, "Svuota", true)) {
        g.tappe = []; salva();
      }
      renderItinerario();
    });

    // ----- giornata aperta: fasce orarie, attività, aggiungi -----
    if (aperto) {
      const corpo = card.querySelector(".gcard-corpo");
      let fasciaCorrente = -1;
      for (const t of ordina(g.tappe)) {
        const f = fasciaDi(t);
        if (f !== fasciaCorrente) {
          fasciaCorrente = f;
          const et = document.createElement("div"); et.className = "fascia";
          et.innerHTML = ico(FASCE[f][0]) + " " + FASCE[f][1]; corpo.appendChild(et);
        }
        const tp = TIPI[t.tipo];
        const orario = isTrasporto(t.tipo) && t.oraArrivo ? `${t.ora} → ${t.oraArrivo}` : t.ora;
        const div = document.createElement("div"); div.className = "tappa" + (t.costo ? "" : " senza-costo");
        div.innerHTML = `
          <div class="barra" style="background:${tp.colore}"></div>
          <div class="corpo">
            <div class="meta">${ico(tp.icona)} ${tp.label} · ${orario}</div>
            <div class="titolo">${esc(t.titolo)}</div>
            <div class="luogo">${t.luogo ? ico('pin') + " " + t.luogo : ""}</div>
          </div>
          ${t.costo ? `<div class="costo"><b>${eur(t.costo)}</b></div>` : ""}`;
        div.addEventListener("click", () => apriModaleTappa({ giorno: g, tappa: t }));
        corpo.appendChild(div);
      }
      const add = document.createElement("button");
      add.className = "aggiungi-qui"; add.textContent = "+ Attività in questo giorno";
      add.addEventListener("click", () => { apriModaleTappa(null); $("tGiorno").value = String(g.id); });
      corpo.appendChild(add);
    }
    m.appendChild(wrap);
  }
}
function vociSpesa() {
  const out = [];
  for (const g of corrente.giorni) for (const t of g.tappe)
    if (t.costo > 0) out.push({ costo: t.costo, pagatori: t.pagatori });
  for (const sp of (corrente.spese || [])) out.push({ costo: sp.costo, pagatori: sp.pagatori });
  return out;
}
let ultimoTotale = 0;
function renderBudget() {
  const nomi = nomiViaggio();
  const voci = vociSpesa();
  const totale = voci.reduce((s, v) => s + v.costo, 0);
  ultimoTotale = totale;
  // ripartizione: ogni voce pesa in quote uguali sui pagatori spuntati (o su tutti se non indicato)
  const perPersona = nomi.map(() => 0);
  for (const v of voci) {
    let chi = (v.pagatori || []).filter((i) => i >= 0 && i < nomi.length);
    if (!chi.length) chi = nomi.map((_, i) => i);
    for (const i of chi) perPersona[i] += v.costo / chi.length;
  }
  const maxP = Math.max(...perPersona, 1);
  const tappe = corrente.giorni.flatMap((g) => g.tappe);
  const perTipo = Object.keys(TIPI)
    .map((k) => ({ k, somma: tappe.filter((t) => t.tipo === k).reduce((s, t) => s + t.costo, 0) }))
    .filter((x) => x.somma > 0).sort((a, b) => b.somma - a.somma);
  const max = Math.max(...perTipo.map((x) => x.somma), 1);
  const spese = corrente.spese || [];
  $("vistaBudget").innerHTML = `
    <div class="card totale" style="position:relative">
      <div class="eyebrow" style="color:#78716c">Totale viaggio</div>
      <div class="cifra">${eur(totale)}</div>
      <div class="sub" id="totValuta"></div>
      <button class="btn-cambio" id="btnCambio" title="Cambio valuta">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <text x="3" y="10" font-size="9.5" font-weight="800" fill="#fff" stroke="none">€</text>
          <text x="13.5" y="21" font-size="9.5" font-weight="800" fill="#fff" stroke="none">¥</text>
          <path d="M13 5 h6 m0 0 l-2.4 -2.4 M19 5 l-2.4 2.4"/>
          <path d="M11 19 h-6 m0 0 l2.4 -2.4 M5 19 l2.4 2.4"/>
        </svg>
      </button>
    </div>
    <div class="card"><b>${ico('users')} Spese per viaggiatore</b>
      ${nomi.map((n, i) => `
        <div class="cat">
          <div class="riga"><span>${esc(n)}</span><b>${eur(Math.round(perPersona[i]))}</b></div>
          <div class="pista"><div class="pieno" style="width:${(perPersona[i] / maxP) * 100}%;background:#0891B2"></div></div>
        </div>`).join("")}
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
        <b>${ico('handshake')} Spese condivise</b>
        <button class="mini-btn" id="btnSpesa">+ Aggiungi</button>
      </div>
      ${spese.length ? spese.map((sp) => `
        <div class="spesa-riga" data-id="${sp.id}">
          <div><span>${esc(sp.titolo)}</span><small>${esc((sp.pagatori || []).map((i) => nomi[i]).filter(Boolean).join(", ") || "tutti")}</small></div>
          <div style="display:flex;align-items:center;gap:6px"><b>${eur(sp.costo)}</b><button class="x">${ico('x')}</button></div>
        </div>`).join("") : '<div class="vuoto" style="padding:10px 0">Benzina, market, taxi… le spese fuori itinerario.</div>'}
    </div>
      <div class="riga-doppia nascosto" id="cvConv" style="margin-top:8px">
        <div><label>€ Euro</label><input id="cvEur" type="number" inputmode="decimal" placeholder="0" /></div>
        <div><label id="cvEtic">Valuta</label><input id="cvVal" type="number" inputmode="decimal" placeholder="0" /></div>
      </div>
    </div>
    ${perTipo.length ? `<div class="card"><b>Spese per categoria</b>
      ${perTipo.map(({ k, somma }) => `
        <div class="cat">
          <div class="riga"><span>${ico(TIPI[k].icona)} ${TIPI[k].label}</span><b>${eur(somma)}</b></div>
          <div class="pista"><div class="pieno" style="width:${(somma / max) * 100}%;background:${TIPI[k].colore}"></div></div>
        </div>`).join("")}</div>` : ""}`;
  $("btnSpesa").addEventListener("click", apriModaleSpesa);
  document.querySelectorAll(".spesa-riga .x").forEach((b) =>
    b.addEventListener("click", async (e) => {
      const id = Number(e.target.closest(".spesa-riga").dataset.id);
      const sp = spese.find((x) => x.id === id);
      if (!(await chiediConferma("Eliminare la spesa?", `"${sp.titolo}" — ${eur(sp.costo)}`, "Elimina", true))) return;
      corrente.spese = spese.filter((x) => x.id !== id);
      salva(); renderBudget();
    }));
  $("btnCambio").addEventListener("click", apriCambio);
  // totale anche in valuta locale, dal tasso in memoria
  if (corrente.valuta) {
    const cache = JSON.parse(localStorage.getItem("tasso-" + corrente.valuta) || "null");
    if (cache) { tassoAttuale = cache.t; $("totValuta").textContent = "≈ " + fmtValuta(totale * cache.t) + " in valuta locale"; }
  }
}

// ============ SPESA CONDIVISA ============
function apriModaleSpesa() {
  $("sNome").value = ""; $("sImporto").value = "";
  sPag = nomiViaggio().map((_, i) => i);
  chipsPagatori("sPagatori", sPag);
  $("veloSpesa").classList.add("aperto");
}
$("sAnnulla").addEventListener("click", () => $("veloSpesa").classList.remove("aperto"));
$("sSalva").addEventListener("click", () => {
  const titolo = $("sNome").value.trim();
  const costo = Number($("sImporto").value) || 0;
  if (!titolo) return toast("Descrivi la spesa!");
  if (costo <= 0) return toast("Inserisci l'importo.");
  corrente.spese = corrente.spese || [];
  corrente.spese.push({ id: Date.now(), titolo, costo, pagatori: sPag.slice() });
  salva();
  $("veloSpesa").classList.remove("aperto");
  renderBudget();
});

// ============ CAMBIO VALUTA (consultazione, tassi BCE via Frankfurter) ============
const VALUTE = {
  JPY: ["¥", "Yen giapponese"], USD: ["$", "Dollaro USA"], GBP: ["£", "Sterlina britannica"],
  CHF: ["Fr.", "Franco svizzero"], THB: ["฿", "Baht thailandese"], AUD: ["A$", "Dollaro australiano"],
  CAD: ["C$", "Dollaro canadese"], MXN: ["MX$", "Peso messicano"], TRY: ["₺", "Lira turca"],
  CZK: ["Kč", "Corona ceca"], HUF: ["Ft", "Fiorino ungherese"], DKK: ["kr", "Corona danese"],
  NOK: ["kr", "Corona norvegese"], SEK: ["kr", "Corona svedese"], PLN: ["zł", "Złoty polacco"],
  CNY: ["¥", "Yuan cinese"], KRW: ["₩", "Won coreano"], INR: ["₹", "Rupia indiana"],
  BRL: ["R$", "Real brasiliano"], SGD: ["S$", "Dollaro di Singapore"], NZD: ["NZ$", "Dollaro neozelandese"],
};
let tassoAttuale = null;
function fmtValuta(x) {
  const c = VALUTE[corrente && corrente.valuta];
  return (c ? c[0] + " " : "") + Math.round(x).toLocaleString("it-IT");
}
let cvImporto = "0", cvDirezione = "eur"; // eur = scrivo in euro, leggo in valuta
function selValutaRender() {
  $("cvValuta").innerHTML = '<option value="">— Scegli la valuta —</option>' +
    Object.entries(VALUTE).map(([k, [sim, nome]]) =>
      `<option value="${k}" ${corrente.valuta === k ? "selected" : ""}>${sim} ${nome} (${k})</option>`).join("");
}
function etichetteCalc() {
  const cod = corrente.valuta;
  const sim = cod ? VALUTE[cod][0] + " " + cod : "—";
  $("calcSuEt").textContent = cvDirezione === "eur" ? "€ EUR" : sim;
  $("calcGiuEt").textContent = cvDirezione === "eur" ? sim : "€ EUR";
}
function aggiornaCalcolo() {
  $("calcSu").textContent = cvImporto;
  const n = Number(cvImporto.replace(",", ".")) || 0;
  if (!corrente.valuta || !tassoAttuale) { $("calcGiu").textContent = "—"; return; }
  const out = cvDirezione === "eur" ? n * tassoAttuale : n / tassoAttuale;
  const decimali = cvDirezione === "eur" ? (tassoAttuale >= 20 ? 0 : 2) : 2;
  $("calcGiu").textContent = out.toLocaleString("it-IT", { minimumFractionDigits: decimali, maximumFractionDigits: decimali });
}
function apriCambio() {
  selValutaRender();
  cvImporto = "0"; cvDirezione = "eur";
  etichetteCalc(); aggiornaCalcolo();
  $("cvInfo").textContent = corrente.valuta ? "Carico il tasso..." : "Scegli la valuta della destinazione.";
  if (corrente.valuta) caricaTasso(corrente.valuta);
  $("veloCambio").classList.add("aperto");
}
// Tastiera della calcolatrice
(function () {
  const tasti = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ",", "0", "⌫"];
  for (const t of tasti) {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = t;
    b.addEventListener("click", () => {
      if (t === "⌫") cvImporto = cvImporto.length > 1 ? cvImporto.slice(0, -1) : "0";
      else if (t === ",") { if (!cvImporto.includes(",")) cvImporto += ","; }
      else {
        if (cvImporto.length >= 9) return;
        cvImporto = cvImporto === "0" ? t : cvImporto + t;
      }
      aggiornaCalcolo();
    });
    $("cvTastiera").appendChild(b);
  }
})();
$("cvAzzera").addEventListener("click", () => { cvImporto = "0"; aggiornaCalcolo(); });
$("cvSwap").addEventListener("click", () => {
  cvDirezione = cvDirezione === "eur" ? "val" : "eur";
  etichetteCalc(); aggiornaCalcolo();
});
$("cvValuta").addEventListener("change", () => {
  corrente.valuta = $("cvValuta").value || null;
  tassoAttuale = null; salva();
  etichetteCalc(); aggiornaCalcolo();
  if (corrente.valuta) { $("cvInfo").textContent = "Carico il tasso..."; caricaTasso(corrente.valuta); }
  else $("cvInfo").textContent = "Scegli la valuta della destinazione.";
});
$("cvAggiorna").addEventListener("click", () => {
  if (!corrente.valuta) return;
  $("cvInfo").textContent = "Aggiorno il tasso...";
  caricaTasso(corrente.valuta);
});
$("cvChiudi").addEventListener("click", () => {
  $("veloCambio").classList.remove("aperto");
  renderBudget(); // così il totale in valuta si allinea all'ultimo tasso
});
function mostraTasso(t, origine) {
  tassoAttuale = t;
  const info = document.getElementById("cvInfo");
  if (info) {
    info.innerHTML = `1 € = <b>${fmtValuta(t)}</b> · ${origine} · <u id="cvMan" style="cursor:pointer">${ico('edit')} manuale</u>`;
    const man = document.getElementById("cvMan");
    if (man) man.addEventListener("click", async () => {
      const v = await chiediTesto("Quanto vale 1 € in " + corrente.valuta + "?", tassoAttuale || "");
      if (v === null) return;
      const n = Number(String(v).replace(",", "."));
      if (n > 0) {
        localStorage.setItem("tasso-" + corrente.valuta, JSON.stringify({ t: n, d: "manuale" }));
        mostraTasso(n, "tasso manuale");
      }
    });
  }
  const tv = document.getElementById("totValuta");
  if (tv && ultimoTotale > 0) tv.textContent = "≈ " + fmtValuta(ultimoTotale * t) + " in valuta locale";
  aggiornaCalcolo();
}
async function caricaTasso(cod) {
  const cache = JSON.parse(localStorage.getItem("tasso-" + cod) || "null");
  // Tre fonti gratuite in cascata: se una non risponde, provo la successiva
  const fonti = [
    { url: "https://api.frankfurter.dev/v1/latest?base=EUR&symbols=" + cod,
      leggi: (j) => ({ t: j.rates && j.rates[cod], d: j.date }), nome: "BCE" },
    { url: "https://api.frankfurter.app/latest?from=EUR&to=" + cod,
      leggi: (j) => ({ t: j.rates && j.rates[cod], d: j.date }), nome: "BCE" },
    { url: "https://open.er-api.com/v6/latest/EUR",
      leggi: (j) => ({ t: j.rates && j.rates[cod], d: String(j.time_last_update_utc || "").slice(5, 16).trim() }), nome: "ER-API" },
  ];
  for (const f of fonti) {
    try {
      const r = await fetch(f.url);
      const { t, d } = f.leggi(await r.json());
      if (t > 0) {
        localStorage.setItem("tasso-" + cod, JSON.stringify({ t, d }));
        mostraTasso(t, "tasso " + f.nome + " del " + d);
        return;
      }
    } catch {}
  }
  // Nessuna fonte raggiungibile: ultimo tasso salvato, oppure manuale
  if (cache) mostraTasso(cache.t, cache.d === "manuale" ? "tasso manuale" : "ultimo tasso noto (" + cache.d + ")");
  else {
    $("cvInfo").innerHTML = 'Sei offline e non ho tassi salvati: <u id="cvManOff" style="cursor:pointer">inserisci un tasso manuale</u>';
    const man = document.getElementById("cvManOff");
    if (man) man.addEventListener("click", async () => {
      const v = await chiediTesto("Quanto vale 1 € in " + cod + "?");
      const n = Number(String(v || "").replace(",", "."));
      if (n > 0) { localStorage.setItem("tasso-" + cod, JSON.stringify({ t: n, d: "manuale" })); mostraTasso(n, "tasso manuale"); }
    });
  }
}

// ============ MAPPA (Mapbox) ============
const tokenValido = () => MAPBOX_TOKEN.startsWith("pk.");
const mapboxDisponibile = () => typeof mapboxgl !== "undefined";

// Sequenza cronologica di punti: i trasporti contribuiscono con partenza e arrivo
function nodiRotta() {
  const out = [];
  const breve = (s) => String(s || "").split(",")[0].trim();
  for (const g of corrente.giorni) for (const t of ordina(g.tappe)) {
    if (isTrasporto(t.tipo)) {
      if (t.coordDa) out.push({ coord: t.coordDa, mezzo: null, nome: breve(t.luogoDa) || t.titolo });
      if (t.coordA) out.push({ coord: t.coordA, mezzo: t.tipo, nome: breve(t.luogoA) || t.titolo });
    } else if (t.coord) out.push({ coord: t.coord, mezzo: null, nome: breve(t.luogo) || t.titolo });
  }
  return out;
}
function puntoArco(a, b, t) {
  const dist = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + dist * 0.18];
  const u = 1 - t;
  return [u*u*a[0] + 2*u*t*m[0] + t*t*b[0], u*u*a[1] + 2*u*t*m[1] + t*t*b[1]];
}
function lineaArco(a, b) {
  const pts = [];
  for (let i = 0; i <= 50; i++) pts.push(puntoArco(a, b, i / 50));
  return pts;
}
// Luce iniziale della mappa 3D in base all'ora locale (come suggerisce la documentazione Mapbox)
function lucePerOra() {
  const h = new Date().getHours();
  if (h >= 6 && h < 9) return "dawn";
  if (h >= 9 && h < 18) return "day";
  if (h >= 18 && h < 21) return "dusk";
  return "night";
}

// icona unica delle luci: mostra l'emoji della luce attualmente attiva
const ICONA_LUCE = { dawn: "sunrise", day: "sun", dusk: "sunrise", night: "moon" };
function aggiornaIconaLuce(preset) {
  const b = $("btnLuce");
  if (b) b.innerHTML = ico(ICONA_LUCE[preset] || "sun");
}
// La luce della mappa segue l'orologio: ogni minuto controllo se è cambiata la fascia
let luceCorrente = lucePerOra();
setInterval(() => {
  if (!mappa || !mappaPronta) return;
  const l = lucePerOra();
  if (l === luceCorrente) return;
  luceCorrente = l;
  try { mappa.setConfigProperty("basemap", "lightPreset", l); } catch {}
  document.querySelectorAll("#luceOpzioni button").forEach((b) => b.classList.toggle("scelto", b.dataset.luce === l));
  aggiornaIconaLuce(l);
}, 60000);

// ===== Tour 3D: gli edifici 3D di Mapbox Standard compaiono solo a zoom alto (15+) =====
let puntiMappa = [], indice3d = 0;
function vola3d() {
  if (!mappa || !puntiMappa.length) return toast("Aggiungi prima qualche tappa con un luogo!");
  const punto = puntiMappa[indice3d % puntiMappa.length];
  indice3d++;
  mappa.flyTo({
    center: punto,
    zoom: 16.3,        // a questo zoom edifici, monumenti e alberi 3D sono ben visibili
    pitch: 62,         // visuale inclinata, da "drone"
    bearing: 25,       // leggera rotazione per dare profondità
    duration: 2600,
    essential: true,
  });
}
function volaPanoramica() {
  if (!mappa || !puntiMappa.length) return;
  const bounds = puntiMappa.reduce((b, c) => b.extend(c), new mapboxgl.LngLatBounds(puntiMappa[0], puntiMappa[0]));
  mappa.fitBounds(bounds, { padding: 60, maxZoom: 13, pitch: 45, duration: 1800 });
}
$("btn3d").addEventListener("click", vola3d);
$("btnPanorama").addEventListener("click", volaPanoramica);

// ===== Posizione attuale: segnaposto blu con l'iniziale del proprietario =====
const POS_BUSTO = '<svg viewBox="0 0 256 256" fill="#fff"><circle cx="128" cy="94" r="50"/><path d="M128 154c-49 0-89 31-95 72a8 8 0 0 0 8 9h174a8 8 0 0 0 8-9c-6-41-46-72-95-72Z"/></svg>';
const COLORI_AVATAR = ["#1A73E8", "#EA580C", "#16a34a", "#7C3AED", "#0EA5A4", "#E0566A", "#E0A93B"];
// ===== Profilo locale (nickname / colore / foto / base) =====
function leggiUtente() { try { return JSON.parse(localStorage.getItem("mj-utente") || "{}") || {}; } catch { return {}; } }
function salvaUtente(u) { try { localStorage.setItem("mj-utente", JSON.stringify(u)); } catch {} }
function utenteColore() { return leggiUtente().colore || "#1A73E8"; }
function utenteFoto() { return leggiUtente().foto || ""; }
function inizialeProprietario() {
  const n = String(leggiUtente().nickname || "").trim();
  return n ? n[0].toUpperCase() : "";
}
// applica colore/foto/iniziale a un elemento tondo (segnaposto mappa o avatar home)
function decoraBadgeUtente(badge) {
  const foto = utenteFoto();
  if (foto) {
    badge.style.background = "#fff center/cover no-repeat";
    badge.style.backgroundImage = "url('" + foto + "')";
    badge.innerHTML = "";
  } else {
    badge.style.backgroundImage = "";
    badge.style.background = utenteColore();
    const ini = inizialeProprietario();
    badge.innerHTML = ini ? '<span class="pos-ini">' + ini + '</span>' : POS_BUSTO;
  }
}
let marcatorePos = null, watchPosId = null;
function mostraPosizione(coord) {
  if (!mappa) return;
  if (!marcatorePos) {
    const el = document.createElement("div");
    el.className = "pos-utente";
    el.innerHTML = '<span class="pos-halo"></span><span class="pos-badge"></span>';
    decoraBadgeUtente(el.querySelector(".pos-badge"));
    marcatorePos = new mapboxgl.Marker({ element: el, anchor: "center" }).setLngLat(coord).addTo(mappa);
  } else {
    const badge = marcatorePos.getElement().querySelector(".pos-badge");
    if (badge) decoraBadgeUtente(badge);
    marcatorePos.setLngLat(coord);
  }
}
function avviaWatchPosizione() {
  if (watchPosId != null || !navigator.geolocation) return;
  watchPosId = navigator.geolocation.watchPosition(
    (pos) => mostraPosizione([pos.coords.longitude, pos.coords.latitude]),
    () => {}, { enableHighAccuracy: true, maximumAge: 5000 }
  );
}
function fermaWatchPosizione() {
  if (watchPosId != null) { try { navigator.geolocation.clearWatch(watchPosId); } catch {} watchPosId = null; }
}
// ===== Tasto mondo (in alto a destra): vola alla posizione attuale =====
$("btnPosizione").addEventListener("click", () => {
  if (!mappa) return;
  if (!navigator.geolocation) { toast("La posizione non è disponibile su questo dispositivo."); return; }
  const b = $("btnPosizione"); b.classList.add("attivo");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      b.classList.remove("attivo");
      const c = [pos.coords.longitude, pos.coords.latitude];
      mostraPosizione(c);
      mappa.flyTo({ center: c, zoom: 13, pitch: 45, duration: 2200, essential: true });
      avviaWatchPosizione(); // tiene aggiornato il segnaposto mentre ti muovi
    },
    () => { b.classList.remove("attivo"); toast("Non riesco ad accedere alla tua posizione."); },
    { enableHighAccuracy: true, timeout: 8000 }
  );
});

// ===== Tasto base (casa): vola sulla città scelta in registrazione =====
async function volaAllaBase() {
  if (!mappa) return;
  const u = leggiUtente();
  const base = String(u.base || "").trim();
  if (!base) { toast("Imposta la tua città base dal profilo (avatar in home)."); return; }
  const b = $("btnBase"); b.classList.add("attivo");
  let coord = u.baseCoord;
  if (!coord) {
    try {
      const feats = await cercaLuoghi(base, 1, true);
      if (feats && feats[0] && feats[0].center) { coord = feats[0].center; u.baseCoord = coord; salvaUtente(u); }
    } catch {}
  }
  b.classList.remove("attivo");
  if (!coord) { toast("Non riesco a trovare la tua città base."); return; }
  mappa.flyTo({ center: coord, zoom: 11, pitch: 45, duration: 2200, essential: true });
}
$("btnBase").addEventListener("click", volaAllaBase);

// ===== Itinerario: viaggio in corso, altrimenti il prossimo in programma =====
function viaggioPerItinerario() {
  const oggi = oggiISO();
  const inCorso = viaggi.find((v) => v.inizio && v.fine && oggi >= v.inizio && oggi <= v.fine && statoBadge(v).classe !== "bozza");
  if (inCorso) return inCorso;
  return viaggi.filter((v) => v.inizio && oggi < v.inizio && statoBadge(v).classe === "programma")
    .sort((a, b) => (a.inizio < b.inizio ? -1 : 1))[0] || null;
}
$("btnItinerario").addEventListener("click", () => {
  const v = viaggioPerItinerario();
  if (!v) { toast("Nessun viaggio in corso o in programma."); return; }
  fermaRiproduzione();
  corrente = v;
  renderMappa();
  setTimeout(() => volaPanoramica(), 350);
  chiudiDock();
});

// ===== Tendina viaggi (un pezzo unico col dock) =====
function chiudiDock() { $("dockMappa").classList.remove("aperto"); }
function apriDock() { renderDockViaggi(); $("dockMappa").classList.add("aperto"); }
(function () {
  const man = $("dockManiglia"); if (!man) return;
  man.addEventListener("click", () => {
    if ($("dockMappa").classList.contains("aperto")) chiudiDock(); else apriDock();
  });
  let y0 = null;
  man.addEventListener("touchstart", (e) => { y0 = e.touches[0].clientY; }, { passive: true });
  man.addEventListener("touchmove", (e) => {
    if (y0 == null) return;
    const dy = e.touches[0].clientY - y0;
    if (dy < -26) { apriDock(); y0 = null; }
    else if (dy > 26) { chiudiDock(); y0 = null; }
  }, { passive: true });
})();

// lista dei viaggi nella tendina (bozze escluse), con play/pausa per riga
function renderDockViaggi() {
  const box = $("dockLista"); if (!box) return;
  const elenco = viaggi.filter((v) => statoBadge(v).classe !== "bozza");
  if (!elenco.length) { box.innerHTML = '<div class="dv-vuoto">Nessun viaggio da mostrare</div>'; return; }
  box.innerHTML = elenco.map((v) => {
    const sb = statoBadge(v);
    const inPlay = animazioneInCorso && mappaPlayId === v.id;
    const icoBtn = (inPlay && !viaggioInPausa) ? "pause" : "play";
    const date = (v.inizio && v.fine) ? fmtData(v.inizio, true) + " → " + fmtData(v.fine, true) : t("date.tbd");
    return `<div class="dv-riga${inPlay ? " in-play" : ""}" data-id="${v.id}">
      <button class="dv-play" data-id="${v.id}" aria-label="Riproduci ${esc(v.nome)}"><span class="ic">${ICONE[icoBtn]}</span></button>
      <div class="dv-mid"><div class="dv-nome">${esc(v.nome)}</div><div class="dv-dt">${date}</div></div>
      <span class="dv-badge" style="color:${sb.colore};background:${sb.colore}26"><span class="dot" style="background:${sb.colore}"></span>${sb.label}</span>
    </div>`;
  }).join("");
  box.querySelectorAll(".dv-play").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    const v = viaggi.find((x) => String(x.id) === String(b.dataset.id));
    if (v) playRigaViaggio(v);
  }));
}
// aggiorna solo le icone play/pausa delle righe esistenti (senza ricostruire)
function aggiornaRigheDock() {
  const box = $("dockLista"); if (!box) return;
  box.querySelectorAll(".dv-riga").forEach((riga) => {
    const inPlay = animazioneInCorso && String(mappaPlayId) === String(riga.dataset.id);
    riga.classList.toggle("in-play", inPlay);
    const ic = riga.querySelector(".dv-play .ic");
    if (ic) ic.innerHTML = (inPlay && !viaggioInPausa) ? ICONE.pause : ICONE.play;
  });
}
// avvia (o mette in pausa/riprende) il tour del viaggio scelto
function playRigaViaggio(v) {
  if (animazioneInCorso && mappaPlayId === v.id) {
    if (viaggioInPausa) riprendiViaggio(); else pausaViaggio();
    aggiornaRigheDock();
    return;
  }
  fermaRiproduzione();
  corrente = v;
  renderMappa();
  aggiornaRigheDock();
  setTimeout(() => { if (corrente && corrente.id === v.id) avviaRiproduzione(); }, 450);
}

function aggiornaRotte() {
  if (!mappa || !mappaPronta || !corrente) return;
  const nodi = nodiRotta();
  const linee = [];
  for (let i = 0; i < nodi.length - 1; i++) {
    linee.push({ type: "Feature", properties: {}, geometry: { type: "LineString",
      coordinates: lineaArco(nodi[i].coord, nodi[i + 1].coord) } });
  }
  const dati = { type: "FeatureCollection", features: linee };
  if (mappa.getSource("rotte")) mappa.getSource("rotte").setData(dati);
  else {
    mappa.addSource("rotte", { type: "geojson", data: dati });
    mappa.addLayer({ id: "rotte", type: "line", source: "rotte", slot: "top",
      paint: { "line-color": "#EA580C", "line-width": 2.5, "line-dasharray": [2, 2.5], "line-opacity": .85, "line-emissive-strength": 1 } });
  }
}
function renderMappa() {
  renderDockViaggi(); // la tendina viaggi è sempre pronta, anche se la mappa non carica
  $("mappaAvviso").classList.toggle("nascosto", tokenValido());
  $("mappaOffline").classList.toggle("nascosto", !tokenValido() || mapboxDisponibile());
  $("contenitoreMappa").classList.toggle("nascosto", !tokenValido() || !mapboxDisponibile());
  if (!tokenValido() || !mapboxDisponibile()) return;
  if (!mappa) {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    mappa = new mapboxgl.Map({
      container: "contenitoreMappa",
      style: "mapbox://styles/mapbox/standard",
      config: {
        basemap: {
          lightPreset: lucePerOra(),
          show3dObjects: true,
          show3dBuildings: true,
          show3dTrees: true,
          show3dLandmarks: true,
          show3dFacades: true,
          showPointOfInterestLabels: true,
          showLandmarkIcons: true,
          showLandmarkIconLabels: true,
        },
      },
      center: [12.5, 41.9], zoom: 3,
      pitch: 45, // inclinazione per apprezzare il 3D
    });
    mappa.on("load", () => { mappaPronta = true; aggiornaRotte(); });
    // Selettore luce: una sola icona che al tocco apre le altre (🌅 alba · ☀ giorno · 🌇 tramonto · 🌙 notte)
    $("btnLuce").addEventListener("click", (e) => {
      e.stopPropagation();
      $("barraLuce").classList.toggle("aperto");
    });
    document.querySelectorAll("#luceOpzioni button").forEach((b) => {
      b.addEventListener("click", () => {
        luceCorrente = b.dataset.luce;
        try { mappa.setConfigProperty("basemap", "lightPreset", b.dataset.luce); } catch {}
        aggiornaIconaLuce(b.dataset.luce);
        document.querySelectorAll("#luceOpzioni button").forEach((x) => x.classList.toggle("scelto", x === b));
        $("barraLuce").classList.remove("aperto"); // scelta fatta: richiudo il menu
      });
      b.classList.toggle("scelto", b.dataset.luce === lucePerOra());
    });
    aggiornaIconaLuce(lucePerOra());                                  // l'icona parte sulla luce attuale
    $("contenitoreMappa").addEventListener("click", () => $("barraLuce").classList.remove("aperto")); // tocco sulla mappa: chiude il menu
  }
  marcatori.forEach((m) => m.remove()); marcatori = [];
  const punti = [];
  const aggiungi = (coord, colore, html) => {
    const m = new mapboxgl.Marker({ color: colore })
      .setLngLat(coord).setPopup(new mapboxgl.Popup({ offset: 22 }).setHTML(html)).addTo(mappa);
    marcatori.push(m); punti.push(coord);
  };
  for (const g of corrente.giorni) for (const t of g.tappe) {
    const tp = TIPI[t.tipo];
    if (isTrasporto(t.tipo)) {
      if (t.coordDa) aggiungi(t.coordDa, tp.colore, `<b>${ico(tp.icona)} ${esc(t.titolo)}</b><br>Partenza ${esc(t.ora)}<br>${ico('pin')} ${esc(t.luogoDa || "")}`);
      if (t.coordA) aggiungi(t.coordA, tp.colore, `<b>${ico(tp.icona)} ${esc(t.titolo)}</b><br>Arrivo ${esc(t.oraArrivo || "")}<br>${ico('pin')} ${esc(t.luogoA || "")}`);
    } else if (t.coord) {
      aggiungi(t.coord, tp.colore, `<b>${ico(tp.icona)} ${esc(t.titolo)}</b><br>${esc(g.titolo)} · ${esc(t.ora)}<br>${ico('pin')} ${esc(t.luogo)}`);
    }
  }
  if (punti.length && !animazioneInCorso) {
    const bounds = punti.reduce((b, c) => b.extend(c), new mapboxgl.LngLatBounds(punti[0], punti[0]));
    mappa.fitBounds(bounds, { padding: 60, maxZoom: 13 });
  }
  puntiMappa = punti;
  aggiornaRotte();
}

// ===== Cursore veicolo stile Google Maps =====
function creaVeicolo(tipo) {
  const colore = TIPI[tipo] ? TIPI[tipo].colore : "#57534e";
  const el = document.createElement("div");
  el.className = "veicolo-google";
  el.style.borderColor = colore;
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="${colore}">${ICONE_SVG[tipo] || ICONE_SVG.auto}</svg>`;
  return el;
}
const easeInOut = (t) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const attesa = (ms) => new Promise((r) => setTimeout(r, ms));
function animaSegmento(a, b, tipo, durata, onProgress) {
  return new Promise((fine) => {
    const el = creaVeicolo(tipo);
    const svg = el.querySelector("svg");
    const veicolo = new mapboxgl.Marker({ element: el }).setLngLat(a).addTo(mappa);
    let trascorso = 0, ultimo = performance.now(), prec = a;
    (function passo(ora) {
      if (!viaggioInPausa) trascorso += ora - ultimo; // in pausa il tempo non avanza: il mezzo resta fermo
      ultimo = ora;
      const t = Math.min(trascorso / durata, 1);
      const p = puntoArco(a, b, easeInOut(t));
      veicolo.setLngLat(p);
      if (tipo === "volo") { // l'aereo punta nella direzione di marcia
        const ang = Math.atan2(p[0] - prec[0], p[1] - prec[1]) * 180 / Math.PI;
        if (p[0] !== prec[0] || p[1] !== prec[1]) svg.style.transform = `rotate(${ang}deg)`;
      }
      prec = p;
      if (onProgress) onProgress(t); // riporto l'avanzamento (0→1) per la barra
      if (t < 1) requestAnimationFrame(passo);
      else { veicolo.remove(); fine(); }
    })(performance.now());
  });
}
// ===== Barra di avanzamento: linea con una "fermata" per ogni tappa =====
const ICONA_MEZZO = { volo: "plane", treno: "train", auto: "car" };
let viaggioInPausa = false, riproduzioneFinita = false;
let bvFermate = [];        // i pallini-fermata, uno per ogni nodo del tragitto
let bvFrazCorrente = 0;    // avanzamento globale attuale (0→1), per ridipingere in pausa

// mostra/nasconde la barra e solleva il pulsante "Riproduci" così non si sovrappongono
function mostraBarraViaggio(visibile) {
  $("vistaMappa").classList.toggle("con-barra", visibile);
  $("barraViaggio").classList.toggle("nascosto", !visibile);
}
// costruisce la linea: una fermata per ogni tappa, posizionata in base alla durata cumulata
function costruisciFermate(nodi, durate) {
  const pista = $("bvPista");
  pista.innerHTML = "";
  bvFermate = [];
  const totale = durate.reduce((s, d) => s + d, 0) || 1;
  const linea = document.createElement("div"); linea.id = "bvLinea"; pista.appendChild(linea);
  let acc = 0;
  for (let i = 0; i < nodi.length; i++) {
    const pos = (acc / totale) * 100;            // 0% alla partenza, 100% all'arrivo
    const f = document.createElement("div");
    f.className = "bv-fermata";
    f.style.left = pos + "%";
    f.dataset.pos = pos;
    f.title = nodi[i].nome || "";
    pista.appendChild(f);
    bvFermate.push(f);
    if (i < durate.length) acc += durate[i];
  }
  const testa = document.createElement("div"); testa.id = "bvTesta"; pista.appendChild(testa);
}
// aggiorna linea, puntino-tu, fermate accese, percentuale ed etichetta
function aggiornaBarraViaggio(frazione, dove) {
  bvFrazCorrente = frazione;
  const perc = Math.max(0, Math.min(100, frazione * 100));
  $("bvPerc").textContent = Math.round(perc) + "%";
  if (dove != null) $("bvDove").innerHTML = dove;
  const linea = document.getElementById("bvLinea");
  const testa = document.getElementById("bvTesta");
  if (linea) linea.style.width = perc + "%";
  if (testa) { testa.style.left = perc + "%"; testa.classList.toggle("in-pausa", viaggioInPausa); }
  bvFermate.forEach((f) => f.classList.toggle("raggiunta", perc >= parseFloat(f.dataset.pos) - 0.5));
}
// aggiorna le righe della tendina in base allo stato della riproduzione
function aggiornaPulsanteViaggio() {
  aggiornaRigheDock();
  if (animazioneInCorso) aggiornaBarraViaggio(bvFrazCorrente, null); // riapplica il lampeggio della pausa sul puntino
}
// attesa che rispetta la pausa (per le pause tra una tratta e l'altra)
function attesaPausabile(ms) {
  return new Promise((res) => {
    let trascorso = 0, ultimo = performance.now();
    (function tick(ora) {
      if (!viaggioInPausa) trascorso += ora - ultimo;
      ultimo = ora;
      if (trascorso >= ms) res();
      else requestAnimationFrame(tick);
    })(performance.now());
  });
}
function pausaViaggio() { viaggioInPausa = true; aggiornaPulsanteViaggio(); }
function riprendiViaggio() { viaggioInPausa = false; aggiornaPulsanteViaggio(); }

let playGen = 0;            // generazione: ogni avvio annulla quello precedente
let mappaPlayId = null;     // id del viaggio attualmente in riproduzione sulla mappa

async function avviaRiproduzione() {
  const nodi = nodiRotta();
  if (nodi.length < 2) { toast("Servono almeno due tappe con un luogo per riprodurre il viaggio."); return; }
  const gen = ++playGen;     // annulla un'eventuale riproduzione in corso
  animazioneInCorso = true;
  viaggioInPausa = false;
  riproduzioneFinita = false;
  mappaPlayId = corrente ? corrente.id : null;
  aggiornaPulsanteViaggio();

  // ogni tratta "pesa" quanto la sua animazione: fermate e puntino vanno di pari
  // passo col mezzo (le tratte lunghe distano di più sulla linea)
  const durate = [];
  for (let i = 0; i < nodi.length - 1; i++) {
    const a = nodi[i].coord, b = nodi[i + 1].coord;
    const dist = Math.hypot(b[0] - a[0], b[1] - a[1]);
    durate.push(Math.min(2200 + dist * 60, 5500));
  }
  const totale = durate.reduce((s, d) => s + d, 0) || 1;
  let trascorso = 0;

  mostraBarraViaggio(true);
  costruisciFermate(nodi, durate);
  aggiornaBarraViaggio(0, `${ico('pin')} ${nodi[0].nome || "Partenza"}`);

  for (let i = 0; i < nodi.length - 1; i++) {
    const a = nodi[i].coord, b = nodi[i + 1].coord;
    const mezzo = nodi[i + 1].mezzo || "auto";
    const conta = `<span class="bv-num">${i + 1}/${nodi.length - 1}</span>`;
    const dove = `${conta}<span class="mezzo">${ico(ICONA_MEZZO[mezzo] || "car")}</span>${nodi[i].nome || ""} → ${nodi[i + 1].nome || ""}`;

    mappa.fitBounds(new mapboxgl.LngLatBounds(a, a).extend(b), { padding: 90, maxZoom: 12, duration: 1100 });
    aggiornaBarraViaggio(trascorso / totale, dove); // mostro la tratta in arrivo mentre la camera si sposta
    await attesaPausabile(1200);
    if (gen !== playGen) return; // riproduzione annullata o sostituita

    const durata = durate[i];
    await animaSegmento(a, b, mezzo, durata, (t) => {
      aggiornaBarraViaggio((trascorso + t * durata) / totale, dove);
    });
    if (gen !== playGen) return;
    trascorso += durata;
    aggiornaBarraViaggio(trascorso / totale, dove);
    await attesaPausabile(350);
    if (gen !== playGen) return;
  }

  aggiornaBarraViaggio(1, ico('flag') + " Arrivo");
  const punti = nodi.map((x) => x.coord);
  const bounds = punti.reduce((b, c) => b.extend(c), new mapboxgl.LngLatBounds(punti[0], punti[0]));
  mappa.fitBounds(bounds, { padding: 60, maxZoom: 13, duration: 1400 });
  animazioneInCorso = false;
  viaggioInPausa = false;
  riproduzioneFinita = true;
  mappaPlayId = null;
  aggiornaPulsanteViaggio();
}
// ferma una riproduzione in corso (es. uscendo dalla mappa)
function fermaRiproduzione() {
  playGen++;
  animazioneInCorso = false;
  viaggioInPausa = false;
  mappaPlayId = null;
  mostraBarraViaggio(false);
  aggiornaRigheDock();
}

// ===== Ricerca luoghi (geocoding Mapbox) =====
async function cercaLuoghi(testo, limite, assoluto) {
  if (!tokenValido() || !testo) return [];
  try {
    // La prossimità ("cerca vicino a...") aiuta quando aggiungi una tappa a mano,
    // ma è DANNOSA durante l'import: i luoghi dell'AI sono già completi (nome+città+nazione)
    // e una tappa sbagliata trascinerebbe le altre nel continente errato.
    // Con "assoluto=true" la spegniamo e cerchiamo ogni luogo in modo indipendente.
    let prossimita = "";
    if (!assoluto && corrente) {
      const nodi = nodiRotta();
      if (nodi.length) prossimita = "&proximity=" + nodi[0].coord.join(",");
    }
    // chiedo più risultati (così posso scegliere il migliore) e do priorità ai
    // punti d'interesse famosi (poi) prima degli indirizzi generici.
    const quanti = assoluto ? 5 : (limite || 5);
    const r = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(testo)}.json?access_token=${MAPBOX_TOKEN}&limit=${quanti}&types=poi,place,locality,address,region${prossimita}`);
    const j = await r.json();
    return j.features || [];
  } catch { return []; }
}
// Attiva i suggerimenti su un campo luogo
function attivaSuggerimenti(inputId, boxId, okId, assegna) {
  let timer = null;
  $(inputId).addEventListener("input", () => {
    assegna(null);
    $(okId).classList.add("nascosto");
    clearTimeout(timer);
    const testo = $(inputId).value.trim();
    if (testo.length < 3) { $(boxId).classList.add("nascosto"); return; }
    timer = setTimeout(async () => {
      const risultati = await cercaLuoghi(testo, 5);
      const box = $(boxId); box.innerHTML = "";
      if (!risultati.length) { box.classList.add("nascosto"); return; }
      for (const f of risultati) {
        const b = document.createElement("button");
        const nome = f.text || f.place_name;
        const resto = f.place_name && f.place_name !== nome ? f.place_name.replace(nome + ", ", "") : "";
        b.innerHTML = `${ico('pin')} ${esc(nome)}${resto ? `<small>${esc(resto)}</small>` : ""}`;
        b.addEventListener("click", () => {
          $(inputId).value = f.place_name;
          assegna(f.center);
          box.classList.add("nascosto");
          $(okId).classList.remove("nascosto");
        });
        box.appendChild(b);
      }
      box.classList.remove("nascosto");
    }, 350);
  });
}
attivaSuggerimenti("tLuogo", "tSuggerimenti", "tLuogoOk", (c) => coordScelta = c);
$("tScegliMappa").addEventListener("click", () => apriSelettoreMappa("principale"));
attivaSuggerimenti("tDa", "tDaSugg", "tDaOk", (c) => coordDaScelta = c);
attivaSuggerimenti("tA", "tASugg", "tAOk", (c) => coordAScelta = c);

// ============ MODALE VIAGGIO ============
function apriModaleViaggio(modifica) {
  viaggioInModifica = modifica;
  $("titoloModaleViaggio").textContent = modifica ? "Modifica viaggio" : "Nuovo viaggio";
  $("vNome").value = modifica ? corrente.nome : "";
  $("vInizio").value = modifica ? corrente.inizio : oggiISO();
  $("vFine").value = modifica ? corrente.fine : oggiISO();
  $("vPersone").value = modifica ? corrente.persone : 1;
  renderCampiNomi();
  $("veloViaggio").classList.add("aperto");
}
function renderCampiNomi() {
  const n = Math.max(1, Number($("vPersone").value) || 1);
  const attuali = [...document.querySelectorAll(".v-nome")].map((i) => i.value);
  const base = viaggioInModifica && corrente && corrente.nomi ? corrente.nomi : [];
  const box = $("vNomi"); box.innerHTML = "";
  if (n < 2) return;
  const eti = document.createElement("label");
  eti.textContent = "I nomi dei viaggiatori (torneranno nel budget)";
  box.appendChild(eti);
  for (let i = 0; i < n; i++) {
    const inp = document.createElement("input");
    inp.className = "v-nome"; inp.placeholder = "Nome " + (i + 1);
    inp.value = attuali[i] !== undefined ? attuali[i] : (base[i] || "");
    box.appendChild(inp);
  }
}
$("vPersone").addEventListener("input", renderCampiNomi);
$("vAnnulla").addEventListener("click", () => $("veloViaggio").classList.remove("aperto"));
$("vSalva").addEventListener("click", () => {
  const nome = $("vNome").value.trim();
  const inizio = $("vInizio").value, fine = $("vFine").value;
  const persone = Math.max(1, Number($("vPersone").value) || 1);
  if (!nome) return toast("Dai un nome al viaggio!");
  if (!inizio || !fine || fine < inizio) return toast("Controlla le date: il ritorno deve essere dopo la partenza.");
  const nomi = persone > 1
    ? [...document.querySelectorAll(".v-nome")].map((inp, i) => inp.value.trim() || "Viaggiatore " + (i + 1))
    : ["Io"];
  if (viaggioInModifica) {
    corrente.nome = nome; corrente.persone = persone; corrente.nomi = nomi;
    if (inizio !== corrente.inizio || fine !== corrente.fine) {
      const nuovi = rangeGiorni(inizio, fine);
      const orfane = [];
      for (const vecchio of corrente.giorni) {
        const match = nuovi.find((n) => n.data === vecchio.data);
        if (match) { match.tappe = vecchio.tappe; match.titolo = vecchio.titolo; }
        else orfane.push(...vecchio.tappe);
      }
      if (orfane.length) nuovi[0].tappe.push(...orfane);
      corrente.inizio = inizio; corrente.fine = fine; corrente.giorni = nuovi;
      if (orfane.length) toast(orfane.length + " tappe erano in giorni rimossi: le trovi nel primo giorno.");
    }
    salva(); renderViaggio();
  } else {
    const v = { id: Date.now(), nome, inizio, fine, persone, nomi, giorni: rangeGiorni(inizio, fine), spese: [] };
    viaggi.push(v); salva(); apriViaggio(v.id);
  }
  $("veloViaggio").classList.remove("aperto");
});

// ============ COMPAGNI DI VIAGGIO ============
function nomiViaggio() {
  const n = corrente && corrente.persone ? corrente.persone : 1;
  if (corrente && corrente.nomi && corrente.nomi.length === n) return corrente.nomi;
  return Array.from({ length: n }, (_, i) => "Viaggiatore " + (i + 1));
}
let tPag = [], sPag = [];
function chipsPagatori(boxId, sel) {
  const box = $(boxId); box.innerHTML = "";
  nomiViaggio().forEach((nome, i) => {
    const c = document.createElement("button");
    c.type = "button";
    c.className = "chip" + (sel.includes(i) ? " scelto" : "");
    if (sel.includes(i)) { c.style.background = "#0891B2"; c.style.borderColor = "#0891B2"; c.style.color = "#fff"; }
    c.textContent = nome;
    c.addEventListener("click", () => {
      const k = sel.indexOf(i);
      if (k >= 0) { if (sel.length > 1) sel.splice(k, 1); } // almeno un pagatore
      else sel.push(i);
      chipsPagatori(boxId, sel);
    });
    box.appendChild(c);
  });
}

// ============ MODALE TAPPA ============
let tipoScelto = "attivita";
function aggiornaBlocchi() {
  $("bloccoTrasporto").classList.toggle("nascosto", !isTrasporto(tipoScelto));
  $("bloccoNormale").classList.toggle("nascosto", isTrasporto(tipoScelto));
}
function renderChips() {
  $("sceltaTipo").innerHTML = "";
  for (const [k, t] of Object.entries(TIPI)) {
    const c = document.createElement("button");
    c.className = "chip" + (k === tipoScelto ? " scelto" : "");
    if (k === tipoScelto) { c.style.background = t.colore; c.style.borderColor = t.colore; }
    c.innerHTML = ico(t.icona) + " " + t.label;
    c.addEventListener("click", () => { tipoScelto = k; renderChips(); aggiornaBlocchi(); });
    $("sceltaTipo").appendChild(c);
  }
}
function apriModaleTappa(modifica) {
  tappaInModifica = modifica || null;
  const t = modifica ? modifica.tappa : null;
  $("titoloModaleTappa").textContent = t ? "Modifica tappa" : "Aggiungi tappa";
  tipoScelto = t ? t.tipo : "attivita";
  renderChips(); aggiornaBlocchi();
  $("tGiorno").innerHTML = corrente.giorni
    .map((g) => `<option value="${g.id}">${esc(g.titolo)} · ${fmtData(g.data)}</option>`).join("");
  $("tGiorno").value = modifica ? modifica.giorno.id : corrente.giorni[0].id;
  $("tTitolo").value = t ? t.titolo : "";
  $("tCosto").value = t && t.costo ? t.costo : "";
  // Campi normali
  $("tOra").value = t && !isTrasporto(t.tipo) && t.ora !== "—" ? t.ora : "";
  $("tLuogo").value = t && !isTrasporto(t.tipo) ? (t.luogo || "") : "";
  coordScelta = t && !isTrasporto(t.tipo) ? t.coord : null;
  $("tLuogoOk").classList.toggle("nascosto", !coordScelta);
  // Campi trasporto
  $("tDa").value = t && isTrasporto(t.tipo) ? (t.luogoDa || "") : "";
  $("tA").value = t && isTrasporto(t.tipo) ? (t.luogoA || "") : "";
  $("tOraDa").value = t && isTrasporto(t.tipo) && t.ora !== "—" ? t.ora : "";
  $("tOraA").value = t && isTrasporto(t.tipo) ? (t.oraArrivo || "") : "";
  coordDaScelta = t && isTrasporto(t.tipo) ? t.coordDa : null;
  coordAScelta = t && isTrasporto(t.tipo) ? t.coordA : null;
  $("tDaOk").classList.toggle("nascosto", !coordDaScelta);
  $("tAOk").classList.toggle("nascosto", !coordAScelta);
  document.querySelectorAll(".lista-sugg").forEach((x) => x.classList.add("nascosto"));
  $("tSalva").disabled = !t;
  $("tElimina").classList.toggle("nascosto", !t);
  tPag = (modifica && modifica.tappa && modifica.tappa.pagatori && modifica.tappa.pagatori.length)
    ? modifica.tappa.pagatori.slice()
    : nomiViaggio().map((_, i) => i);
  const unaPersona = (corrente.persone || 1) <= 1;
  $("tPagLabel").classList.toggle("nascosto", unaPersona);
  $("tPagatori").classList.toggle("nascosto", unaPersona);
  if (!unaPersona) chipsPagatori("tPagatori", tPag);
  $("veloTappa").classList.add("aperto");
}
$("tTitolo").addEventListener("input", () => { $("tSalva").disabled = $("tTitolo").value.trim() === ""; });
$("tAnnulla").addEventListener("click", () => $("veloTappa").classList.remove("aperto"));
$("tElimina").addEventListener("click", async () => {
  if (!tappaInModifica) return;
  if (!(await chiediConferma("Eliminare la tappa?", '"' + tappaInModifica.tappa.titolo + '"', "Elimina", true))) return;
  const g = tappaInModifica.giorno;
  g.tappe = g.tappe.filter((x) => x.id !== tappaInModifica.tappa.id);
  salva(); $("veloTappa").classList.remove("aperto"); renderViaggio();
});
$("tSalva").addEventListener("click", async () => {
  const trasporto = isTrasporto(tipoScelto);
  const dati = trasporto
    ? {
        tipo: tipoScelto,
        ora: $("tOraDa").value || "—",
        oraArrivo: $("tOraA").value || "",
        luogoDa: $("tDa").value.trim(),
        luogoA: $("tA").value.trim(),
        coordDa: coordDaScelta,
        coordA: coordAScelta,
        luogo: [$("tDa").value.trim() || "?", $("tA").value.trim() || "?"].join(" → "),
        coord: null,
        titolo: $("tTitolo").value.trim(),
        costo: Number($("tCosto").value) || 0,
        pagatori: tPag.slice(),
      }
    : {
        tipo: tipoScelto,
        ora: $("tOra").value || "—",
        oraArrivo: "",
        luogo: $("tLuogo").value.trim(),
        coord: $("tLuogo").value.trim() ? coordScelta : null,
        luogoDa: "", luogoA: "", coordDa: null, coordA: null,
        titolo: $("tTitolo").value.trim(),
        costo: Number($("tCosto").value) || 0,
        pagatori: tPag.slice(),
      };
  const giornoDest = corrente.giorni.find((g) => String(g.id) === $("tGiorno").value);
  let tappa;
  if (tappaInModifica) {
    tappa = tappaInModifica.tappa;
    Object.assign(tappa, dati);
    if (giornoDest.id !== tappaInModifica.giorno.id) {
      tappaInModifica.giorno.tappe = tappaInModifica.giorno.tappe.filter((x) => x.id !== tappa.id);
      giornoDest.tappe.push(tappa);
    }
  } else {
    tappa = { id: Date.now(), ...dati };
    giornoDest.tappe.push(tappa);
  }
  salva(); $("veloTappa").classList.remove("aperto"); renderViaggio();
  // Geocoding in background per i campi senza suggerimento scelto
  let cambiato = false;
  if (trasporto) {
    if (tappa.luogoDa && !tappa.coordDa) { const r = await cercaLuoghi(tappa.luogoDa, 1); if (r[0]) { tappa.coordDa = r[0].center; cambiato = true; } }
    if (tappa.luogoA && !tappa.coordA) { const r = await cercaLuoghi(tappa.luogoA, 1); if (r[0]) { tappa.coordA = r[0].center; cambiato = true; } }
  } else if (tappa.luogo && !tappa.coord) {
    const r = await cercaLuoghi(tappa.luogo, 1); if (r[0]) { tappa.coord = r[0].center; cambiato = true; }
  }
  if (cambiato) { salva(); renderMappa(); }
});

// ============ SELETTORE POSIZIONE SU MAPPA (puntina) ============
// Apre una mappa a tutto schermo: l'utente sposta la mappa sotto una puntina fissa
// al centro, conferma, e l'app ricava il nome del luogo da quelle coordinate
// (geocoding inverso). Serve sia a correggere un luogo sbagliato dall'AI, sia ad
// aggiungere posti a mano (es. un ristorante senza indirizzo preciso).
let selMappa = null, selCoord = null, selDestinazione = null, selTimerNome = null;

// geocoding inverso: da coordinate -> nome leggibile del posto
async function nomeDaCoord(lng, lat) {
  if (!tokenValido()) return "";
  try {
    const r = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&limit=1`);
    const j = await r.json();
    if (j.features && j.features[0]) return j.features[0].place_name || "";
  } catch {}
  return "";
}

// apre il selettore. "destinazione" dice quale campo riempire al ritorno:
// "principale" (campo luogo attività), in futuro estendibile a da/a dei trasporti.
function apriSelettoreMappa(destinazione) {
  if (!tokenValido() || !mapboxDisponibile()) {
    toast("La mappa non è disponibile in questo momento.");
    return;
  }
  selDestinazione = destinazione || "principale";
  $("selettoreMappa").classList.add("aperto");
  // punto di partenza: se la tappa ha già coordinate, parto da lì; altrimenti dal
  // primo nodo del viaggio; altrimenti vista ampia.
  let centro = [12.5, 41.9], zoom = 4;
  if (selDestinazione === "principale" && coordScelta) { centro = coordScelta; zoom = 14; }
  else if (corrente) {
    const nodi = nodiRotta();
    if (nodi.length) { centro = nodi[0].coord; zoom = 11; }
  }
  // creo (o riuso) la mappa del selettore
  setTimeout(() => {
    if (!selMappa) {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      selMappa = new mapboxgl.Map({
        container: "selMappaCanvas",
        style: "mapbox://styles/mapbox/standard",
        center: centro, zoom: zoom,
      });
      // mentre muovo la mappa, la puntina "salta" un po' e azzero il nome
      selMappa.on("movestart", () => {
        $("selettoreMappa").classList.add("trascina");
        if (selTimerNome) clearTimeout(selTimerNome);
      });
      // a fine spostamento: leggo il centro = posizione della puntina, e ricavo il nome
      selMappa.on("moveend", () => {
        $("selettoreMappa").classList.remove("trascina");
        const c = selMappa.getCenter();
        selCoord = [c.lng, c.lat];
        $("selNome").textContent = "Cerco il nome del luogo…";
        if (selTimerNome) clearTimeout(selTimerNome);
        selTimerNome = setTimeout(async () => {
          const nome = await nomeDaCoord(selCoord[0], selCoord[1]);
          $("selNome").textContent = nome || "Posizione senza nome (la confermi comunque)";
        }, 500);
      });
    } else {
      selMappa.setCenter(centro); selMappa.setZoom(zoom);
      setTimeout(() => { try { selMappa.resize(); } catch {} }, 60);
    }
    // posizione iniziale della puntina = centro mappa
    selCoord = centro;
    setTimeout(() => { try { selMappa.resize(); } catch {} }, 100);
  }, 50);
}

// ricerca nella barra del selettore: trovo un posto e ci sposto la mappa
let selCercaTimer = null;
$("selCerca").addEventListener("input", () => {
  clearTimeout(selCercaTimer);
  const testo = $("selCerca").value.trim();
  if (testo.length < 3) return;
  selCercaTimer = setTimeout(async () => {
    const r = await cercaLuoghi(testo, 1, true); // ricerca assoluta
    if (r && r[0] && selMappa) {
      selMappa.flyTo({ center: r[0].center, zoom: 14, duration: 1200 });
    }
  }, 500);
});

$("selChiudi").addEventListener("click", () => {
  $("selettoreMappa").classList.remove("aperto");
  $("selCerca").value = "";
});

$("selConferma").addEventListener("click", async () => {
  if (!selCoord) { toast("Sposta la mappa per scegliere un punto."); return; }
  // ricavo il nome (se non già pronto) e riempio il campo giusto
  let nome = $("selNome").textContent;
  if (!nome || nome.includes("Cerco") || nome.includes("Sposta")) {
    nome = await nomeDaCoord(selCoord[0], selCoord[1]);
  }
  if (nome && nome.includes("senza nome")) nome = "";
  if (selDestinazione === "principale") {
    coordScelta = selCoord.slice();
    if (nome) $("tLuogo").value = nome;
    $("tLuogoOk").classList.remove("nascosto");
    $("tLuogoOk").innerHTML = ico('check') + " Posizione scelta sulla mappa";
  }
  $("selettoreMappa").classList.remove("aperto");
  $("selCerca").value = "";
  toast("Posizione impostata " + ico('pin'));
});

// ============ FOTO ============
function localitaSuggerite() {
  const set = new Set();
  for (const g of corrente.giorni) for (const t of g.tappe) {
    if (t.luogo && !isTrasporto(t.tipo)) set.add(t.luogo.split(",")[0]);
    if (t.luogoA) set.add(t.luogoA.split(",")[0]);
  }
  return [...set];
}
$("btnAggiungiFoto").addEventListener("click", () => {
  $("elencoLocalita").innerHTML = localitaSuggerite().map((l) => `<option value="${l}">`).join("");
  $("fLocalita").value = "";
  $("veloFoto").classList.add("aperto");
});
$("fAnnulla").addEventListener("click", () => $("veloFoto").classList.remove("aperto"));
$("fileFoto").addEventListener("change", async (e) => {
  try {
    const files = [...e.target.files];
    if (!files.length) return;
    const localita = $("fLocalita").value.trim() || "Senza località";
    $("veloFoto").classList.remove("aperto");
    for (const f of files) {
      const dati = await comprimi(f);
      await dbPut("foto", { id: Date.now() + Math.random(), viaggioId: corrente.id, localita, quando: Date.now(), dati });
    }
    e.target.value = "";
    await renderFoto();
  } catch (err) {
    toast("Non sono riuscito a salvare le foto: " + (err && err.message ? err.message : err));
  }
});
let fotoCorrenti = [];
async function renderFoto() {
  const tutte = (await dbTutti("foto")).filter((f) => f.viaggioId === corrente.id);
  tutte.sort((a, b) => a.quando - b.quando);
  fotoCorrenti = tutte;
  const cont = $("grigliaFoto"); cont.innerHTML = "";
  if (!tutte.length) {
    cont.innerHTML = '<div class="vuoto" style="text-align:center;padding:20px">Nessuna foto ancora. Aggiungi le prime! ' + ico('cam') + '</div>';
    return;
  }
  const gruppi = {};
  for (const f of tutte) (gruppi[f.localita] = gruppi[f.localita] || []).push(f);
  for (const [loc, foto] of Object.entries(gruppi)) {
    const sez = document.createElement("div"); sez.className = "gruppo-foto";
    sez.innerHTML = `<h2>${ico('pin')} ${esc(loc)} <small style="color:#a8a29e">(${foto.length})</small></h2>`;
    const griglia = document.createElement("div"); griglia.className = "griglia";
    for (const f of foto) {
      const img = document.createElement("img");
      img.src = srcFoto(f);
      img.addEventListener("click", () => apriVisore(f));
      griglia.appendChild(img);
    }
    sez.appendChild(griglia); cont.appendChild(sez);
  }
}
let fotoAperta = null;
function apriVisore(f) {
  fotoAperta = f;
  $("visoreImg").src = srcFoto(f);
  $("visoreDida").innerHTML = ico('pin') + " " + f.localita;
  $("visore").classList.remove("nascosto");
}
$("visoreChiudi").addEventListener("click", () => $("visore").classList.add("nascosto"));
$("qrChiudi").addEventListener("click", () => $("visoreQr").classList.add("nascosto"));
$("visoreElimina").addEventListener("click", async () => {
  if (!fotoAperta) return;
  if (!(await chiediConferma("Eliminare questa foto?", "", "Elimina", true))) return;
  await dbElimina("foto", fotoAperta.id);
  $("visore").classList.add("nascosto");
  renderFoto();
});
// Album: scorrimento di tutte le foto, raggruppate per località
let albumIndice = 0, albumTimer = null;
$("btnAlbum").addEventListener("click", () => {
  if (!fotoCorrenti.length) return toast("Aggiungi prima qualche foto!");
  albumIndice = 0;
  mostraFotoAlbum();
  $("album").classList.remove("nascosto");
  clearInterval(albumTimer);
  albumTimer = setInterval(avantiAlbum, 2800);
});
function mostraFotoAlbum() {
  const f = fotoCorrenti[albumIndice];
  $("albumImg").src = srcFoto(f);
  $("albumDida").innerHTML = `${ico('pin')} ${esc(f.localita)} · ${albumIndice + 1}/${fotoCorrenti.length}`;
}
function avantiAlbum() {
  albumIndice = (albumIndice + 1) % fotoCorrenti.length;
  mostraFotoAlbum();
}
$("albumAvanti").addEventListener("click", avantiAlbum);
$("albumChiudi").addEventListener("click", () => {
  clearInterval(albumTimer);
  $("album").classList.add("nascosto");
});
// Swipe sull'album: ⬅ avanti, ➡ indietro (e lo scorrimento automatico si ferma)
let albX0 = null;
$("album").addEventListener("touchstart", (e) => { albX0 = e.touches[0].clientX; }, { passive: true });
$("album").addEventListener("touchend", (e) => {
  if (albX0 === null) return;
  const dx = e.changedTouches[0].clientX - albX0; albX0 = null;
  if (Math.abs(dx) < 45) return;
  clearInterval(albumTimer); // da qui sfogli tu
  if (dx < 0) avantiAlbum();
  else { albumIndice = (albumIndice - 1 + fotoCorrenti.length) % fotoCorrenti.length; mostraFotoAlbum(); }
});

// ============ BIGLIETTI ============
$("btnAggiungiBiglietto").addEventListener("click", () => {
  $("bNome").value = "";
  $("veloBiglietto").classList.add("aperto");
});
$("bAnnulla").addEventListener("click", () => $("veloBiglietto").classList.remove("aperto"));
$("fileBiglietto").addEventListener("change", async (e) => {
  try {
    const f = e.target.files[0];
    if (!f) return;
    $("veloBiglietto").classList.remove("aperto");
    const ePdf = f.type.includes("pdf") || /\.pdf$/i.test(f.name);
    const nome = $("bNome").value.trim() || f.name.replace(/\.[^.]+$/, "");
    const record = {
      id: Date.now(), viaggioId: corrente.id,
      nome, tipo: $("bTipo").value,
      mime: ePdf ? "application/pdf" : "image/jpeg",
    };
    if (ePdf) record.blob = f;
    else record.dati = await comprimi(f);
    await dbPut("biglietti", record);
    e.target.value = "";
    await renderBiglietti();
  } catch (err) {
    toast("Non sono riuscito a salvare il biglietto: " + (err && err.message ? err.message : err));
  }
});
async function renderBiglietti() {
  const tutti = (await dbTutti("biglietti")).filter((b) => b.viaggioId === corrente.id);
  const cont = $("listaBiglietti"); cont.innerHTML = "";
  if (!tutti.length) {
    cont.innerHTML = '<div class="vuoto" style="text-align:center;padding:20px">Nessun biglietto salvato.<br>Carica qui PDF e foto di voli, treni e prenotazioni ' + ico('ticket') + '</div>';
    return;
  }
  const icone = { volo: "plane", treno: "train", hotel: "bed", attivita: "ticket", qr: "qr", altro: "clip" };
  for (const b of tutti) {
    const wrap = document.createElement("div"); wrap.className = "bwrap";
    wrap.innerHTML = `
      <div class="b-azioni">
        <button class="ba-mod">${ico('edit')}</button>
        <button class="ba-del">${ico('trash')}</button>
      </div>`;
    const div = document.createElement("div"); div.className = "biglietto";
    div.innerHTML = `
      <div class="ico">${ico(icone[b.tipo] || "clip")}</div>
      <div class="info"><b>${esc(b.nome)}</b><span>${b.mime.includes("pdf") ? "Documento PDF" : (b.tipo === "qr" ? "QR / codice d'ingresso" : "Immagine")}</span></div>
      <button class="apri-pill">Apri</button>`;
    wrap.appendChild(div);

    // ----- swipe a sinistra: ✏ rinomina, 🗑 elimina -----
    let x0 = null, y0 = null, dx = 0, rivelata = false, orizzontale = null;
    div.addEventListener("touchstart", (e) => {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
      dx = 0; orizzontale = null; div.style.transition = "none";
    }, { passive: true });
    div.addEventListener("touchmove", (e) => {
      if (x0 === null) return;
      dx = e.touches[0].clientX - x0;
      const dy = e.touches[0].clientY - y0;
      if (orizzontale === null) orizzontale = Math.abs(dx) > Math.abs(dy) + 4;
      if (!orizzontale) return;
      const base = rivelata ? -120 : 0;
      div.style.transform = `translateX(${Math.min(0, Math.max(-130, base + dx))}px)`;
    }, { passive: true });
    div.addEventListener("touchend", () => {
      if (x0 === null) return;
      div.style.transition = "transform .22s ease";
      const base = rivelata ? -120 : 0;
      rivelata = orizzontale ? base + dx < -55 : rivelata;
      div.style.transform = `translateX(${rivelata ? -120 : 0}px)`;
      x0 = null;
    });
    div.addEventListener("click", () => {
      if (rivelata) { rivelata = false; div.style.transform = "translateX(0)"; }
    });

    div.querySelector(".apri-pill").addEventListener("click", (e) => {
      e.stopPropagation();
      if (rivelata) return;
      if (b.mime.includes("pdf")) {
        try {
          const url = URL.createObjectURL(b.blob);
          const a = document.createElement("a");
          a.href = url; a.target = "_blank"; a.rel = "noopener";
          document.body.appendChild(a); a.click(); a.remove();
        } catch { toast("Non riesco ad aprire il PDF su questo browser."); }
      } else if (b.tipo === "qr") {
        $("qrImg").src = srcFoto(b);
        $("qrDida").textContent = b.nome + " — alza la luminosità per la scansione";
        $("visoreQr").classList.remove("nascosto");
      } else {
        fotoAperta = null;
        $("visoreImg").src = srcFoto(b);
        $("visoreDida").innerHTML = ico('ticket') + " " + b.nome;
        $("visore").classList.remove("nascosto");
      }
    });
    wrap.querySelector(".ba-mod").addEventListener("click", async () => {
      const nuovo = await chiediTesto("Rinomina il biglietto", b.nome);
      if (nuovo !== null && nuovo.trim()) {
        b.nome = nuovo.trim();
        try { await dbPut("biglietti", b); } catch {}
      }
      renderBiglietti();
    });
    wrap.querySelector(".ba-del").addEventListener("click", async () => {
      if (!(await chiediConferma("Eliminare il biglietto?", '"' + b.nome + '"', "Elimina", true))) return;
      await dbElimina("biglietti", b.id);
      renderBiglietti();
    });
    cont.appendChild(wrap);
  }
}

// ============ IMPERDIBILI (quaderno) ============
let espCorrente = null;
function renderDafare() {
  corrente.daFare = corrente.daFare || [];
  const lista = $("dfLista"); lista.innerHTML = "";
  const tot = corrente.daFare.length;
  const fatte = corrente.daFare.filter((x) => x.fatto).length;
  $("impContatore").innerHTML = tot
    ? `Vissute ${fatte} di ${tot}${fatte === tot ? " — tutte! " + ico('party') : ""}`
    : "Le cose per cui vale il viaggio";
  const ordinate = [...corrente.daFare].sort((a, b) => (a.fatto === b.fatto ? 0 : a.fatto ? 1 : -1));
  for (const x of ordinate) {
    const wrap = document.createElement("div"); wrap.className = "imp-wrap";
    wrap.innerHTML = `
      <div class="imp-azioni">
        <button class="ia-mod">${ico('edit')}</button>
        <button class="ia-del">${ico('trash')}</button>
      </div>`;
    const div = document.createElement("div");
    div.className = "imp-riga" + (x.fatto ? " vissuta" : "");
    const stelle = x.fatto && x.voto ? `<span class="mini">★ ${String(x.voto).replace(".", ",")}</span>` : "";
    const foto = x.fatto && x.fotoId ? `<span class="mini">${ico('cam')}</span>` : "";
    div.innerHTML = `<button class="spunta">${x.fatto ? ico('check') : ""}</button><div class="testo">${esc(x.testo)}</div>${stelle}${foto}`;
    wrap.appendChild(div);

    // ----- swipe a sinistra: rivela ✏ e 🗑 -----
    let x0 = null, y0 = null, dx = 0, rivelata = false, orizzontale = null;
    div.addEventListener("touchstart", (e) => {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
      dx = 0; orizzontale = null; div.style.transition = "none";
    }, { passive: true });
    div.addEventListener("touchmove", (e) => {
      if (x0 === null) return;
      dx = e.touches[0].clientX - x0;
      const dy = e.touches[0].clientY - y0;
      if (orizzontale === null) orizzontale = Math.abs(dx) > Math.abs(dy) + 4;
      if (!orizzontale) return;
      const base = rivelata ? -120 : 0;
      div.style.transform = `translateX(${Math.min(0, Math.max(-130, base + dx))}px)`;
    }, { passive: true });
    div.addEventListener("touchend", () => {
      if (x0 === null) return;
      div.style.transition = "transform .22s ease";
      const base = rivelata ? -120 : 0;
      rivelata = orizzontale ? base + dx < -55 : rivelata;
      div.style.transform = `translateX(${rivelata ? -120 : 0}px)`;
      x0 = null;
    });

    div.querySelector(".spunta").addEventListener("click", (e) => {
      e.stopPropagation();
      if (rivelata) return;
      x.fatto = !x.fatto; salva(); renderDafare();
      if (x.fatto) apriEsperienza(x); // appena vissuta: foto ricordo + voto
    });
    div.addEventListener("click", () => {
      if (rivelata) { rivelata = false; div.style.transform = "translateX(0)"; return; }
      if (x.fatto) apriEsperienza(x);
    });
    wrap.querySelector(".ia-mod").addEventListener("click", async () => {
      const nuovo = await chiediTesto("Correggi la tua imperdibile", x.testo);
      if (nuovo !== null && nuovo.trim()) { x.testo = nuovo.trim(); salva(); }
      renderDafare();
    });
    wrap.querySelector(".ia-del").addEventListener("click", async () => {
      if (!(await chiediConferma("Cancellare dal quaderno?", `"${x.testo}"` + (x.fotoId ? " — anche la foto ricordo verrà eliminata." : ""), "Cancella", true))) return;
      corrente.daFare = corrente.daFare.filter((y) => y.id !== x.id);
      if (x.fotoId) { try { await dbElimina("foto", x.fotoId); renderFoto(); } catch {} }
      salva(); renderDafare();
    });
    lista.appendChild(wrap);
  }
  renderMuroRicordi(corrente.daFare.filter((x) => x.fatto && x.fotoId));
}
// Muro dei ricordi: polaroid (con washi tape) delle esperienze vissute che hanno una foto
async function renderMuroRicordi(items) {
  const muro = $("dfMuro");
  if (!muro) return;
  if (!items.length) {
    muro.innerHTML = `<div class="muro-vuoto">Ancora nessun ricordo qui.<br>Vivi un'imperdibile e aggiungi una foto: comparirà come polaroid. 📸</div>`;
    return;
  }
  let tutte = [];
  try { tutte = await dbTutti("foto"); } catch {}
  const byId = {}; for (const f of tutte) byId[f.id] = f;
  muro.innerHTML = `<div class="muro-ricordi"></div>`;
  const grid = muro.querySelector(".muro-ricordi");
  for (const x of items) {
    const f = byId[x.fotoId];
    const src = f ? srcFoto(f) : "";
    const voto = x.voto ? `<div class="voto">★ ${String(x.voto).replace(".", ",")}</div>` : "";
    const card = document.createElement("div");
    card.className = "polaroid";
    card.innerHTML = `<img alt="" ${src ? `src="${src}"` : ""}><div class="cap">${esc(x.testo)}</div>${voto}`;
    card.addEventListener("click", () => apriEsperienza(x));
    grid.appendChild(card);
  }
}
function aggiungiImperdibile() {
  const testo = $("dfTesto").value.trim();
  if (!testo) return;
  corrente.daFare = corrente.daFare || [];
  corrente.daFare.push({ id: Date.now(), testo, fatto: false, voto: 0, fotoId: null });
  $("dfTesto").value = "";
  salva(); renderDafare();
}
$("dfAggiungi").addEventListener("click", aggiungiImperdibile);
$("dfTesto").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); aggiungiImperdibile(); } // a prova di tastiera iOS
});
$("dfIdee").addEventListener("click", () => {
  const idee = [
    "Assaggia il piatto tipico del posto",
    "Visita il monumento più famoso",
    "Foto al tramonto in un punto panoramico",
    "Compra un souvenir in un mercato locale",
    "Prova un locale consigliato dalla gente del posto",
    "Perditi senza mappa per un'ora",
  ];
  corrente.daFare = corrente.daFare || [];
  for (const testo of idee)
    corrente.daFare.push({ id: Date.now() + Math.random(), testo, fatto: false, voto: 0, fotoId: null });
  salva(); renderDafare();
});

// ===== Diario sfogliabile: giro pagina (lista <-> ricordi) con freccia e swipe =====
function impostaFrecciaDiario() {
  const b = $("dfGira"); if (!b) return;
  const girata = $("diario") && $("diario").classList.contains("girata");
  const dx = girata
    ? `<path d="M25 12 q -9 -1.6 -19 0" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M12.5 6 q -6.5 4 -6.5 6 q 0 2 6.5 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`
    : `<path d="M3 12 q 9 -1.6 19 0" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M15.5 6 q 6.5 4 6.5 6 q 0 2 -6.5 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  b.innerHTML = `<svg viewBox="0 0 28 24" fill="none">${dx}</svg>`;
  b.title = girata ? "Torna alle imperdibili" : "Vai ai ricordi";
}
function giraDiario(verso) { // 'avanti' (ricordi) | 'indietro' (lista) | undefined = alterna
  const d = $("diario"); if (!d) return;
  const girata = d.classList.contains("girata");
  const nuovo = verso === "avanti" ? true : verso === "indietro" ? false : !girata;
  d.classList.toggle("girata", nuovo);
  impostaFrecciaDiario();
}
(function () {
  const d = $("diario"); if (!d) return;
  $("dfGira").addEventListener("click", () => giraDiario());
  let x0 = null, y0 = null, tgt = null;
  d.addEventListener("touchstart", (e) => {
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; tgt = e.target;
  }, { passive: true });
  d.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0;
    x0 = null;
    if (Math.abs(dx) < 55 || Math.abs(dx) <= Math.abs(dy)) return; // non è uno swipe orizzontale
    const girata = d.classList.contains("girata");
    if (!girata) {
      // swipe a sinistra -> ricordi, ma non se parte da una riga (lì lo swipe è per modifica/elimina)
      if (dx < 0 && !(tgt && tgt.closest && tgt.closest(".imp-riga"))) giraDiario("avanti");
    } else if (dx > 0) {
      giraDiario("indietro"); // swipe a destra -> torna alla lista
    }
  }, { passive: true });
})();

// ===== Rituale dell'esperienza vissuta: voto a stelle (mezze comprese) + foto ricordo =====
function disegnaStelle() {
  if (!espCorrente) return;
  $("espOro").style.width = (espCorrente.voto / 5 * 100) + "%";
  $("espVotoTxt").textContent = espCorrente.voto
    ? `${String(espCorrente.voto).replace(".", ",")} su 5`
    : "Tocca le stelle per dare un voto";
}
async function apriEsperienza(x) {
  espCorrente = x;
  $("espTitolo").innerHTML = ico('sparkle') + " " + x.testo;
  disegnaStelle();
  const img = $("espFoto");
  img.classList.add("nascosto"); img.src = "";
  if (x.fotoId) {
    try {
      const tutte = await dbTutti("foto");
      const f = tutte.find((y) => y.id === x.fotoId);
      if (f) { img.src = srcFoto(f); img.classList.remove("nascosto"); }
    } catch {}
  }
  $("veloEsperienza").classList.add("aperto");
}
$("espStelle").addEventListener("click", (e) => {
  if (!espCorrente) return;
  const r = $("espStelle").getBoundingClientRect();
  let v = (e.clientX - r.left) / r.width * 5;
  v = Math.max(0.5, Math.min(5, Math.round(v * 2) / 2)); // scatti da mezza stella
  espCorrente.voto = v;
  salva(); disegnaStelle();
});
$("espChiudi").addEventListener("click", () => {
  $("veloEsperienza").classList.remove("aperto");
  espCorrente = null;
  renderDafare();
});
$("fileEsperienza").addEventListener("change", async (e) => {
  try {
    const f = e.target.files[0];
    if (!f || !espCorrente) return;
    const dati = await comprimi(f);
    const id = Date.now();
    await dbPut("foto", { id, viaggioId: corrente.id, localita: "✨ " + espCorrente.testo, quando: Date.now(), dati, esperienzaId: espCorrente.id });
    espCorrente.fotoId = id;
    salva();
    $("espFoto").src = dati; $("espFoto").classList.remove("nascosto");
    e.target.value = "";
    renderFoto();
  } catch (err) {
    toast("Non sono riuscito a salvare la foto: " + (err && err.message ? err.message : err));
  }
});

// ============ VALIGIA / DA NON DIMENTICARE ============
function renderValigia() {
  corrente.valigia = corrente.valigia || [];
  corrente.promemoria = corrente.promemoria || [];
  renderChecklist("listaValigia", corrente.valigia);
  renderChecklist("listaPromemoria", corrente.promemoria);
}
function renderChecklist(contId, lista) {
  const cont = $(contId); cont.innerHTML = "";
  if (!lista.length) {
    cont.innerHTML = '<div class="vuoto" style="padding:8px 2px">Niente qui ancora.</div>';
    return;
  }
  const ordinata = [...lista].sort((a, b) => (a.fatto === b.fatto ? 0 : a.fatto ? 1 : -1));
  for (const v of ordinata) {
    const riga = document.createElement("div");
    riga.className = "check-riga" + (v.fatto ? " fatta" : "");
    riga.innerHTML = `<button class="spunta">${v.fatto ? ico('check') : ""}</button><div class="testo">${esc(v.testo)}</div><button class="x">${ico('x')}</button>`;
    riga.querySelector(".spunta").addEventListener("click", () => { v.fatto = !v.fatto; salva(); renderValigia(); });
    riga.querySelector(".x").addEventListener("click", () => {
      const arr = contId === "listaValigia" ? corrente.valigia : corrente.promemoria;
      const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1);
      salva(); renderValigia();
    });
    cont.appendChild(riga);
  }
}
function aggiungiCheck(inputId, quale) {
  const testo = $(inputId).value.trim();
  if (!testo) return;
  const arr = quale === "valigia" ? (corrente.valigia = corrente.valigia || []) : (corrente.promemoria = corrente.promemoria || []);
  arr.push({ testo, fatto: false });
  $(inputId).value = "";
  salva(); renderValigia();
}
$("valigiaAggiungi").addEventListener("click", () => aggiungiCheck("valigiaTesto", "valigia"));
$("promemoriaAggiungi").addEventListener("click", () => aggiungiCheck("promemoriaTesto", "promemoria"));
$("valigiaTesto").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); aggiungiCheck("valigiaTesto", "valigia"); } });
$("promemoriaTesto").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); aggiungiCheck("promemoriaTesto", "promemoria"); } });

// ============ IMPORTA DA AI (la "dogana" che perdona) ============
// Legge il pacchetto testuale dell'AI. Filosofia: importa tutto il salvabile,
// scarta con grazia le righe irrecuperabili, non si blocca mai.
function importaPacchetto(testo) {
  const righe = String(testo).split(/\r?\n/);
  const out = { nome: "", dal: "", al: "", persone: 1, itinerario: [], imperdibili: [], valigia: [], promemoria: [] };
  const scartate = [];
  const senzaAcc = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
  const TIPI_VALIDI = ["volo", "treno", "hotel", "attivita", "ristorante"];
  for (const raw of righe) {
    const riga = raw.trim();
    if (!riga || riga.startsWith("#") || riga.startsWith("---")) continue;
    const parti = riga.split("|").map((p) => p.trim());
    const et = senzaAcc(parti[0]);
    try {
      if (et === "NOME") out.nome = parti.slice(1).join(" ").trim();
      else if (et === "DAL") out.dal = (parti[1] || "").trim();
      else if (et === "AL") out.al = (parti[1] || "").trim();
      else if (et === "PERSONE") { const n = parseInt(parti[1]); if (n > 0) out.persone = n; }
      else if (et.startsWith("GIORNO")) {
        const numGiorno = parseInt(et.replace(/[^0-9]/g, "")) || 1;
        const titolo = parti[1] || "";
        let tipo = senzaAcc(parti[2] || "").toLowerCase();
        if (!TIPI_VALIDI.includes(tipo)) tipo = "attivita";
        let ora = (parti[3] || "").trim();
        if (!/^\d{1,2}:\d{2}$/.test(ora)) ora = "—";
        let luogo = (parti[4] || "").trim();
        // luogo vago: l'AI mette un trattino. Lo trattiamo come "nessun luogo": niente punto sulla mappa.
        if (luogo === "—" || luogo === "-" || /^(nessuno|n\/d|na)$/i.test(luogo)) luogo = "";
        if (!titolo) { scartate.push(riga); continue; }
        out.itinerario.push({ giorno: numGiorno, titolo, tipo, ora, luogo });
      }
      else if (et === "IMPERDIBILE") { const t = parti.slice(1).join(" ").trim(); t ? out.imperdibili.push(t) : scartate.push(riga); }
      else if (et === "VALIGIA") { const t = parti.slice(1).join(" ").trim(); t ? out.valigia.push(t) : scartate.push(riga); }
      else if (et === "PROMEMORIA") { const t = parti.slice(1).join(" ").trim(); t ? out.promemoria.push(t) : scartate.push(riga); }
      else scartate.push(riga);
    } catch (e) { scartate.push(riga); }
  }
  return { out, scartate };
}

// Trasforma il risultato della dogana in un VERO viaggio dell'app
function creaViaggioDaPacchetto(p) {
  // date: se mancano o sono malfatte, uso oggi + durata dedotta dai giorni
  const oggi = oggiISO();
  let inizio = /^\d{4}-\d{2}-\d{2}$/.test(p.dal) ? p.dal : oggi;
  const giorniMax = p.itinerario.reduce((m, t) => Math.max(m, t.giorno), 1);
  let fine = /^\d{4}-\d{2}-\d{2}$/.test(p.al) ? p.al : "";
  if (!fine || fine < inizio) {
    const d = new Date(inizio + "T12:00:00");
    d.setDate(d.getDate() + Math.max(0, giorniMax - 1));
    fine = d.toISOString().slice(0, 10);
  }
  const persone = p.persone > 0 ? p.persone : 1;
  const nomi = persone > 1 ? Array.from({ length: persone }, (_, i) => "Viaggiatore " + (i + 1)) : ["Io"];
  const giorni = rangeGiorni(inizio, fine);
  // distribuisco le tappe nei giorni (giorno 1 = primo giorno)
  for (const t of p.itinerario) {
    const idx = Math.min(giorni.length - 1, Math.max(0, t.giorno - 1));
    giorni[idx].tappe.push({
      id: Date.now() + Math.random(),
      tipo: t.tipo, ora: t.ora, oraArrivo: "",
      luogo: t.luogo, coord: null,
      luogoDa: "", luogoA: "", coordDa: null, coordA: null,
      titolo: t.titolo, costo: 0, pagatori: [],
    });
  }
  const daFare = p.imperdibili.map((t) => ({ id: Date.now() + Math.random(), testo: t, fatto: false, voto: 0, fotoId: null }));
  const valigia = p.valigia.map((t) => ({ testo: t, fatto: false }));
  const promemoria = p.promemoria.map((t) => ({ testo: t, fatto: false }));
  const v = {
    id: Date.now(), nome: p.nome || "Viaggio importato",
    inizio, fine, persone, nomi, giorni, spese: [],
    daFare, valigia, promemoria,
  };
  return v;
}

// il geocoding in sottofondo: per ogni tappa importata cerca le coordinate vere
// Controlla che il risultato del geocoding sia DAVVERO il posto cercato.
// Mapbox risponde sempre qualcosa, anche per nomi generici: se cerco un posto
// "a Paleochora" e mi torna "Milano", quel risultato va scartato (niente puntino
// sbagliato a 2000 km). Confronto la città indicata nella query con ciò che Mapbox
// ha trovato, e uso anche il punteggio di pertinenza (relevance).
function risultatoAffidabile(query, feature) {
  if (!feature) return false;
  // relevance basso = match debole/incerto: lo scarto
  if (typeof feature.relevance === "number" && feature.relevance < 0.5) return false;
  const norm = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  // l'ultima parte della query (dopo l'ultima virgola) è di solito la città/nazione
  const pezzi = query.split(",").map((x) => x.trim()).filter(Boolean);
  const cittaCercata = norm(pezzi.length >= 2 ? pezzi[pezzi.length - 1] : pezzi[0]);
  const trovato = norm(feature.place_name);
  if (!cittaCercata) return true; // niente città nella query: mi fido del relevance
  // se la query ha un riferimento geografico, deve comparire nel risultato di Mapbox
  // (controllo anche le parti intermedie, es. città prima della nazione)
  const riferimenti = pezzi.slice(1).map(norm).filter((x) => x.length >= 3);
  if (!riferimenti.length) return true;
  return riferimenti.some((rif) => trovato.includes(rif));
}

// Tra i risultati di Mapbox sceglie il migliore: quello che è davvero coerente
// con la città cercata. Se cerco "Central Park, New York" e tra i risultati c'è
// sia un Central Park a Yonkers sia quello di Manhattan, prendo quello che cade
// nella città giusta, non il primo che capita.
function miglioreRisultato(query, features) {
  if (!features || !features.length) return null;
  // tengo solo i risultati coerenti con la città cercata
  const validi = features.filter((f) => risultatoAffidabile(query, f));
  if (!validi.length) return null; // nessuno coerente: meglio nessun punto che uno sbagliato
  // tra i validi, do un punteggio: i punti d'interesse veri (poi) valgono di più,
  // e premio chi ha relevance alto. Così il monumento famoso batte il doppione minore.
  const punteggio = (f) => {
    let p = (typeof f.relevance === "number" ? f.relevance : 0.5);
    const tipi = (f.place_type || []).join(",");
    if (tipi.includes("poi")) p += 0.5;          // è un punto d'interesse vero
    if (tipi.includes("address")) p -= 0.1;       // un indirizzo generico vale meno
    return p;
  };
  validi.sort((a, b) => punteggio(b) - punteggio(a));
  return validi[0];
}

// Estrae la parte "città" da un luogo completo "Nome, Città, Nazione".
// Per i ristoranti/hotel cerchiamo questa, non il nome del locale (più affidabile).
function soloCitta(luogo) {
  const parti = String(luogo).split(",").map((x) => x.trim()).filter(Boolean);
  if (parti.length <= 1) return luogo;            // solo un pezzo: è già la città
  if (parti.length === 2) return parti.join(", "); // "Città, Nazione"
  // "Nome, Città, Nazione" (o più): scarto il primo pezzo (il nome del locale)
  return parti.slice(1).join(", ");
}

async function geocodificaViaggio(v) {
  if (!tokenValido()) return;
  let cambiato = false;
  for (const g of v.giorni) for (const t of g.tappe) {
    if (!t.luogo || t.coord) continue;
    let scelto = null;
    // RISTORANTI e HOTEL: il nome del locale spesso non è mappato o inganna la mappa
    // (es. "Ouzeri To Kyma" -> Mapbox aggancia "Kymi"). Cerchiamo direttamente la CITTÀ,
    // che esiste sempre nel database. Per il ricordo basta sapere in che città eri.
    if (t.tipo === "ristorante" || t.tipo === "hotel") {
      const citta = soloCitta(t.luogo);
      const r = await cercaLuoghi(citta, 5, true);
      scelto = miglioreRisultato(citta, r);
    } else {
      // ATTIVITÀ (monumenti, spiagge, parchi): il nome è affidabile, cerco il luogo preciso.
      const r = await cercaLuoghi(t.luogo, 5, true);
      scelto = miglioreRisultato(t.luogo, r);
      // rete di sicurezza: se il luogo preciso non si trova, ripiego sulla città
      if (!scelto) {
        const citta = soloCitta(t.luogo);
        if (citta && citta !== t.luogo) {
          const r2 = await cercaLuoghi(citta, 5, true);
          scelto = miglioreRisultato(citta, r2);
        }
      }
    }
    if (scelto) { t.coord = scelto.center; cambiato = true; }
  }
  if (cambiato) { salva(); if (corrente && corrente.id === v.id) renderMappa(); }
}

$("btnImportaHome").addEventListener("click", () => {
  $("importaTesto").value = "";
  $("veloImporta").classList.add("aperto");
});
$("importaAnnulla").addEventListener("click", () => $("veloImporta").classList.remove("aperto"));
$("copiaPrompt").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PROMPT_AI);
    toast("Prompt copiato! Incollalo nella tua AI.");
  } catch {
    // fallback: selezione manuale se la clipboard è negata
    toast("Copia non riuscita: tieni premuto sul testo per copiarlo a mano.");
  }
});
$("importaCrea").addEventListener("click", async () => {
  const testo = $("importaTesto").value.trim();
  if (!testo) return toast("Incolla prima il pacchetto che ti ha dato l'AI.");
  const { out, scartate } = importaPacchetto(testo);
  if (!out.itinerario.length && !out.imperdibili.length && !out.valigia.length && !out.promemoria.length) {
    return toast("Non ho riconosciuto un pacchetto valido. Controlla di aver copiato tutto.");
  }
  const v = creaViaggioDaPacchetto(out);
  viaggi.push(v); salva();
  $("veloImporta").classList.remove("aperto");
  const n = out.itinerario.length + out.imperdibili.length + out.valigia.length + out.promemoria.length;
  toast(scartate.length ? `Viaggio creato! (${n} voci, ${scartate.length} righe ignorate)` : `Viaggio creato con ${n} voci! ${ico('sparkle')}`);
  apriViaggio(v.id);
  geocodificaViaggio(v); // in sottofondo: trova le posizioni sulla mappa
});

// ============ NAVIGAZIONE ============
let vistaAttuale = "itinerario";
$("btnGlobo").addEventListener("click", () => mostraVista(vistaAttuale === "mappa" ? vistaDiMacro(macroAttiva) : "mappa"));
$("btnCasa").addEventListener("click", () => { fermaRiproduzione(); fermaWatchPosizione(); chiudiDock(); corrente = null; renderHome(); });
function mostraVista(nome) {
  vistaAttuale = nome;
  if (!animazioneInCorso) mostraBarraViaggio(false); // nasconde la barra cambiando scheda (non disturba una riproduzione in corso)
  $("btnGlobo").classList.toggle("attivo", nome === "mappa");
  if (nome === "mappa") setTimeout(() => { if (mappa) try { mappa.resize(); } catch {} }, 80); // il contenitore è cambiato: avviso Mapbox
  for (const v of ["itinerario", "budget", "mappa", "foto", "biglietti", "valigia", "dafare"]) {
    $("vista" + v[0].toUpperCase() + v.slice(1)).classList.toggle("nascosto", v !== nome);
  }
  $("fab").classList.toggle("nascosto", nome !== "itinerario");
  if (nome === "mappa" && mappa) setTimeout(() => mappa.resize(), 50);
}
// ===== Barra strumenti a macro-categorie =====
// Itinerario+Imperdibili → "Viaggio"; Valigia+Biglietti → "Preparativi"; Budget e Ricordi sono singoli.
const MACRO = {
  viaggio:     { viste: [["itinerario", ico('cal') + " Itinerario"], ["dafare", ico('sparkle') + " Imperdibili"]] },
  budget:      { viste: [["budget", ico('money') + " Budget"]] },
  preparativi: { viste: [["valigia", ico('backpack') + " Valigia"], ["biglietti", ico('ticket') + " Biglietti"]] },
  ricordi:     { viste: [["foto", ico('cam') + " Foto"]] },
};
let macroAttiva = "viaggio";
const macroSub = { viaggio: "itinerario", preparativi: "valigia" }; // sotto-vista corrente dei macro doppi
function vistaDiMacro(macro) {
  const m = MACRO[macro];
  return m.viste.length === 1 ? m.viste[0][0] : (macroSub[macro] || m.viste[0][0]);
}
function renderSottoBar(macro) {
  const bar = $("sottoBar");
  const m = MACRO[macro];
  if (!m || m.viste.length < 2) { bar.classList.add("nascosto"); bar.innerHTML = ""; return; }
  const attuale = vistaDiMacro(macro);
  bar.innerHTML = "";
  for (const [vista, etichetta] of m.viste) {
    const b = document.createElement("button");
    b.innerHTML = etichetta;
    b.classList.toggle("attiva", vista === attuale);
    b.addEventListener("click", () => { macroSub[macro] = vista; mostraVista(vista); renderSottoBar(macro); });
    bar.appendChild(b);
  }
  bar.classList.remove("nascosto");
}
function mostraMacro(macro) {
  macroAttiva = macro;
  document.querySelectorAll("#macroTabs .tab").forEach((t) => t.classList.toggle("attiva", t.dataset.macro === macro));
  renderSottoBar(macro);
  mostraVista(vistaDiMacro(macro));
}
document.querySelectorAll("#macroTabs .tab").forEach((t) =>
  t.addEventListener("click", () => mostraMacro(t.dataset.macro)));
$("indietro").addEventListener("click", () => { corrente = null; renderHome(); });
$("modificaViaggio").addEventListener("click", () => apriModaleViaggio(true));
$("fab").addEventListener("click", () => corrente ? apriModaleTappa(null) : apriModaleViaggio(false));
$("dlgOk").addEventListener("click", () => chiudiDialogo(dlgConInput ? $("dlgInput").value : true));
$("dlgAnnulla").addEventListener("click", () => chiudiDialogo(dlgConInput ? null : false));
$("veloDialogo").addEventListener("click", (e) => { if (e.target === $("veloDialogo")) chiudiDialogo(dlgConInput ? null : false); });
document.querySelectorAll(".velo").forEach((v) =>
  v.addEventListener("click", (e) => { if (e.target === v) v.classList.remove("aperto"); }));

// ============ SPLASH ============
let fcTimer = null;
function avviaSplash() {
  const cielo = $("cieloStelle");
  for (let i = 0; i < 70; i++) {
    const st = document.createElement("span");
    // ~1 stella su 5 è "viva": più grande e con alone pulsante
    st.className = "stella" + (Math.random() < 0.2 ? " viva" : "");
    st.style.left = Math.random() * 100 + "%";
    st.style.top = Math.random() * 100 + "%";
    st.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    cielo.appendChild(st);
  }
  avviaStellaCadente();
  aggiornaCountdown();
  fcTimer = setInterval(aggiornaCountdown, 1000);
}
// Stella cadente: parte da un punto casuale in alto, a intervalli irregolari
let stellaCadenteTimer = null;
function avviaStellaCadente() {
  const sc = $("stellaCadente");
  if (!sc) return;
  const lancia = () => {
    // se l'utente ha attivato "riduci movimento", non disturbo
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stellaCadenteTimer = setTimeout(lancia, 9000); return;
    }
    sc.style.left = (8 + Math.random() * 55) + "%";
    sc.style.top = (6 + Math.random() * 22) + "%";
    sc.classList.remove("vola"); void sc.offsetWidth; sc.classList.add("vola");
    stellaCadenteTimer = setTimeout(lancia, 5000 + Math.random() * 7000);
  };
  stellaCadenteTimer = setTimeout(lancia, 2500);
}
function setCifra(idCard, val) {
  const card = $(idCard);
  const v = String(Math.max(0, val)).padStart(2, "0");
  if (card.textContent !== v) {
    card.textContent = v;
    card.classList.remove("gira");
    void card.offsetWidth; // riavvia l'animazione di ribaltamento
    card.classList.add("gira");
  }
}
function aggiornaCountdown() {
  const oggi = oggiISO();
  const inCorso = viaggi.find((v) => oggi >= v.inizio && oggi <= v.fine);
  const futuri = viaggi.filter((v) => v.inizio > oggi).sort((a, b) => (a.inizio < b.inizio ? -1 : 1));
  const oro = $("fcOrologio"), ic = $("fcInCorso"), nome = $("flipNome");
  if (inCorso) {
    // Viaggio in corso: niente countdown, mostro "Giorno X/Y"
    const giorno = Math.floor((new Date(oggi) - new Date(inCorso.inizio)) / 86400000) + 1;
    const totale = Math.floor((new Date(inCorso.fine) - new Date(inCorso.inizio)) / 86400000) + 1;
    nome.textContent = inCorso.nome;
    ic.innerHTML = `${esc(t("splash.day"))} ${giorno}/${totale}<small>${esc(t("splash.bon"))}</small>`;
    oro.classList.add("nascosto"); ic.classList.remove("nascosto");
  } else if (futuri.length) {
    const v = futuri[0];
    nome.textContent = v.nome;
    let diff = new Date(v.inizio + "T00:00:00") - new Date();
    if (diff < 0) diff = 0;
    setCifra("cardG", Math.floor(diff / 86400000));
    setCifra("cardO", Math.floor(diff / 3600000) % 24);
    setCifra("cardM", Math.floor(diff / 60000) % 60);
    setCifra("cardS", Math.floor(diff / 1000) % 60);
    oro.classList.remove("nascosto"); ic.classList.add("nascosto");
  } else {
    nome.innerHTML = esc(t("splash.worldWaits")) + " " + ico('globe');
    ic.innerHTML = `${esc(t("splash.firstTrip"))}<small>${esc(t("splash.diaryReady"))}</small>`;
    oro.classList.add("nascosto"); ic.classList.remove("nascosto");
  }
}
function chiudiSplash() {
  if (fcTimer) { clearInterval(fcTimer); fcTimer = null; }
  if (stellaCadenteTimer) { clearTimeout(stellaCadenteTimer); stellaCadenteTimer = null; }
  $("splash").classList.add("via"); // dissolvenza morbida
  setTimeout(() => {
    const sp = $("splash"); if (sp) sp.remove();
    let fatto = false; try { fatto = !!localStorage.getItem("mj-onboarded"); } catch {}
    if (!fatto && typeof apriOnboarding === "function") apriOnboarding("primo"); // primo avvio: registrazione
  }, 850);
}
$("btnInizia").addEventListener("click", chiudiSplash);

// ============ ACHIEVEMENT: TERRE CONQUISTATE ============
// Vive dentro la sezione Mappa. Riusa MAPBOX_TOKEN, viaggi, tokenValido, $.
const CQ_TOT = 197;
const CQ_ORO = "#E8B84B", CQ_SPENTO = "#2a3a52", CQ_MARE = "#0f1b2e";
let cqMap = null, cqSelez = null, cqAperto = false;
// cqManuali = aggiunte a mano · cqEsclusi = rimosse a mano (anche quelle dai viaggi)
// cqDerivati = ricavate dai viaggi ATTUALI: si ricalcola ogni volta, mai persistita
let cqManuali = new Set(), cqEsclusi = new Set(), cqDerivati = new Set(), cqCache = {};
try { cqManuali = new Set(JSON.parse(localStorage.getItem("pm-manuali") || "[]")); } catch {}
try { cqEsclusi = new Set(JSON.parse(localStorage.getItem("pm-esclusi") || "[]")); } catch {}
try { cqCache   = JSON.parse(localStorage.getItem("pm-coord-cache") || "{}"); } catch {}
try { localStorage.removeItem("pm-derivati"); } catch {} // pulizia vecchia cache che restava "conquistata"
function cqSalva() {
  try {
    localStorage.setItem("pm-manuali", JSON.stringify([...cqManuali]));
    localStorage.setItem("pm-esclusi", JSON.stringify([...cqEsclusi]));
    localStorage.setItem("pm-coord-cache", JSON.stringify(cqCache));
  } catch {}
}
// conquistate = (dai viaggi + aggiunte a mano) − rimosse a mano
const cqVisitati = () => new Set([...cqDerivati, ...cqManuali].filter((c) => !cqEsclusi.has(c)));
function cqColore() {
  return ["case", ["in", ["get", "iso_3166_1"], ["literal", [...cqVisitati()]]], CQ_ORO, CQ_SPENTO];
}
function cqApplica() {
  if (cqMap && cqMap.getLayer("cq-fill")) cqMap.setPaintProperty("cq-fill", "fill-color", cqColore());
}
function cqConta() {
  const tot = cqVisitati().size;
  const perc = Math.min(100, Math.round((tot / CQ_TOT) * 100));
  $("cqPaesi").textContent = tot;
  $("cqPerc").textContent = perc + "%";
  $("cqBarra").style.width = Math.max(2, perc) + "%";
  $("cqNota").textContent = cqDerivati.size
    ? `${cqDerivati.size} dai tuoi viaggi · ${cqManuali.size} aggiunti a mano`
    : "I paesi dei tuoi viaggi si accendono da soli";
}
async function cqPaeseDaCoord(lng, lat) {
  const k = lat.toFixed(2) + "," + lng.toFixed(2);
  if (cqCache[k] !== undefined) return cqCache[k];
  try {
    const r = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=country&access_token=${MAPBOX_TOKEN}`);
    const j = await r.json();
    const f = j.features && j.features[0];
    const code = f && f.properties && f.properties.short_code ? f.properties.short_code.toUpperCase() : "";
    if (code) { cqCache[k] = code; cqSalva(); } // non memorizzo i fallimenti: riproveremo al prossimo giro
    return code;
  } catch { return ""; }
}
function cqCoordDeiViaggi() {
  const out = [];
  for (const v of viaggi) for (const g of (v.giorni || [])) for (const t of (g.tappe || [])) {
    if (t.coord) out.push(t.coord);
    if (t.coordDa) out.push(t.coordDa);
    if (t.coordA) out.push(t.coordA);
  }
  return out;
}
// Nazione (ISO) a partire da un nome di luogo qualsiasi (città, regione, destinazione...).
// Usa lo stesso geocoding dei temi e memorizza in cache solo i risultati riusciti.
async function cqPaeseDaNome(testo) {
  const t = String(testo || "").trim();
  if (!t) return "";
  const k = "n:" + t.toLowerCase();
  if (cqCache[k] !== undefined) return cqCache[k];
  const code = (await paeseDiLuogo(t) || "").toUpperCase();
  if (code) { cqCache[k] = code; cqSalva(); }
  return code;
}
// Raccoglie i nomi di luogo di un viaggio (destinazione, nome, luoghi delle tappe).
function cqNomiDelViaggio(v) {
  const nomi = new Set();
  if (v.destinazione) nomi.add(v.destinazione);
  if (v.nome) nomi.add(v.nome);
  for (const g of (v.giorni || [])) for (const t of (g.tappe || [])) {
    [t.luogo, t.luogoDa, t.luogoA].forEach((x) => { if (x && x !== "—") nomi.add(x); });
  }
  return [...nomi];
}
async function cqAggiornaDaViaggi() {
  // ricalcolo SEMPRE da zero in base ai viaggi attuali: niente accumulo, niente residui
  if (!tokenValido()) {
    if (!viaggi.length && cqDerivati.size) { cqDerivati = new Set(); cqApplica(); cqConta(); }
    return;
  }
  const nuovo = new Set();
  // 1) dai NOMI dei luoghi: qualsiasi città/destinazione accende l'intera nazione
  for (const v of viaggi) for (const nome of cqNomiDelViaggio(v)) { const c = await cqPaeseDaNome(nome); if (c) nuovo.add(c); }
  // 2) dalle coordinate delle tappe (più precise quando disponibili)
  for (const c of cqCoordDeiViaggi()) {
    if (!c || c.length !== 2) continue;
    const code = await cqPaeseDaCoord(c[0], c[1]); if (code) nuovo.add(code);
  }
  cqDerivati = nuovo;
  cqApplica(); cqConta();
}
function cqInit() {
  if (cqMap || typeof mapboxgl === "undefined" || !tokenValido()) return;
  mapboxgl.accessToken = MAPBOX_TOKEN;
  cqMap = new mapboxgl.Map({
    container: "mondoMappa",
    style: "mapbox://styles/mapbox/dark-v11",
    projection: "globe",            // globo: niente cuciture/loop, mondo intero visibile
    center: [10, 20], zoom: 1.2,    // parte mostrando tutto il pianeta, senza crop
    minZoom: 0.4, maxZoom: 6,
    renderWorldCopies: false,
    dragRotate: false, pitchWithRotate: false,
    bearing: 0, pitch: 0, maxPitch: 0, minPitch: 0,
    attributionControl: false,
  });
  cqMap.dragRotate.disable();
  cqMap.touchZoomRotate.disableRotation();
  cqMap.touchPitch.disable();
  cqMap.on("load", () => {
    if (cqMap.getLayer("water")) cqMap.setPaintProperty("water", "fill-color", CQ_MARE);
    if (cqMap.getLayer("background")) cqMap.setPaintProperty("background", "background-color", CQ_MARE);
    cqMap.addSource("cq-paesi", { type: "vector", url: "mapbox://mapbox.country-boundaries-v1" });
    let primaLabel;
    for (const l of cqMap.getStyle().layers) { if (l.type === "symbol") { primaLabel = l.id; break; } }
    cqMap.addLayer({ id: "cq-fill", type: "fill", source: "cq-paesi", "source-layer": "country_boundaries",
      paint: { "fill-color": cqColore(), "fill-opacity": 0.9 } }, primaLabel);
    cqMap.addLayer({ id: "cq-bordo", type: "line", source: "cq-paesi", "source-layer": "country_boundaries",
      paint: { "line-color": "rgba(15,27,46,.8)", "line-width": 0.5 } }, primaLabel);
    cqApplica(); cqConta();
    cqAggiornaDaViaggi(); // ora che il layer esiste, ricavo e accendo i paesi dei viaggi
  });
  cqMap.on("click", "cq-fill", (e) => {
    const f = e.features[0];
    const iso = f.properties.iso_3166_1;
    const nome = f.properties.name_it || f.properties.name_en || f.properties.name || "Paese";
    cqSelez = iso;
    const conquistato = cqVisitati().has(iso);
    const daViaggio = cqDerivati.has(iso) && !cqEsclusi.has(iso);
    $("cqNome").innerHTML = (conquistato ? ico('trophy') : ico('pin')) + " " + nome;
    $("cqStato").textContent = conquistato
      ? (daViaggio ? "Conquistato — risulta da un tuo viaggio" : "Conquistato")
      : "Ancora da conquistare";
    // ogni nazione è modificabile: o la segni o la rimuovi
    $("cqVisitato").classList.toggle("nascosto", conquistato);
    $("cqRimuovi").classList.toggle("nascosto", !conquistato);
    $("cqInfo").classList.add("su");
  });
}
function apriConquiste() {
  cqAperto = true;
  $("conquisteOverlay").classList.remove("nascosto");
  $("btnConquiste").classList.add("attivo");
  cqInit();
  setTimeout(() => { if (cqMap) try { cqMap.resize(); } catch {} }, 90);
  cqConta();
  cqAggiornaDaViaggi();
}
function chiudiConquiste() {
  cqAperto = false;
  $("conquisteOverlay").classList.add("nascosto");
  $("cqInfo").classList.remove("su");
  $("btnConquiste").classList.remove("attivo");
}
$("btnConquiste").addEventListener("click", () => cqAperto ? chiudiConquiste() : apriConquiste());
$("cqChiudi").addEventListener("click", chiudiConquiste);
$("cqInfoChiudi").addEventListener("click", () => $("cqInfo").classList.remove("su"));
$("cqVisitato").addEventListener("click", () => {
  if (cqSelez) { cqManuali.add(cqSelez); cqEsclusi.delete(cqSelez); cqSalva(); cqApplica(); cqConta(); }
  $("cqInfo").classList.remove("su");
});
$("cqRimuovi").addEventListener("click", () => {
  if (cqSelez) { cqManuali.delete(cqSelez); cqEsclusi.add(cqSelez); cqSalva(); cqApplica(); cqConta(); }
  $("cqInfo").classList.remove("su");
});
// uscendo dalla mappa l'overlay si chiude, così la prossima volta riparte dalla mappa del viaggio
$("btnCasa").addEventListener("click", chiudiConquiste);
$("btnGlobo").addEventListener("click", chiudiConquiste);

// ============ AVVIO ============
// ============ ONBOARDING / PROFILO ============
let onbBozza = { nickname: "", colore: "#1A73E8", foto: "" };
function onbVai(step) {
  document.querySelectorAll("#onboarding .onb-step").forEach((s) => s.classList.toggle("nascosto", s.dataset.step !== step));
}
function onbDisegnaAvatar() {
  const a = $("onbAvatar"); if (!a) return;
  if (onbBozza.foto) { a.style.background = "#fff center/cover no-repeat"; a.style.backgroundImage = "url('" + onbBozza.foto + "')"; a.innerHTML = ""; }
  else {
    a.style.backgroundImage = ""; a.style.background = onbBozza.colore;
    const ini = (onbBozza.nickname || "").trim()[0];
    a.innerHTML = ini ? ini.toUpperCase() : POS_BUSTO;
  }
}
function onbDisegnaColori() {
  const box = $("onbColori"); if (!box) return; box.innerHTML = "";
  COLORI_AVATAR.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "onb-sw" + (!onbBozza.foto && c === onbBozza.colore ? " sel" : ""); b.style.background = c;
    b.addEventListener("click", () => { onbBozza.colore = c; onbBozza.foto = ""; onbDisegnaColori(); onbDisegnaAvatar(); });
    box.appendChild(b);
  });
  const f = document.createElement("button");
  f.type = "button"; f.className = "onb-foto"; f.innerHTML = '<span class="ic">' + (ICONE.cam || "") + '</span>';
  f.addEventListener("click", () => $("onbFotoFile").click());
  box.appendChild(f);
}
function apriOnboarding(modo) {
  const u = leggiUtente();
  onbBozza = { nickname: u.nickname || "", colore: u.colore || "#1A73E8", foto: u.foto || "" };
  $("onbNick").value = onbBozza.nickname;
  $("onbBase").value = u.base || "";
  onbDisegnaColori(); onbDisegnaAvatar();
  $("onboarding").classList.remove("nascosto");
  if (typeof aggiornaToggleLang === "function") aggiornaToggleLang();
  onbVai(modo === "modifica" ? "nick" : "benv");
}
function chiudiOnboarding() { $("onboarding").classList.add("nascosto"); }
function onbSalva() {
  const u = leggiUtente();
  u.nickname = ($("onbNick").value || "").trim();
  u.colore = onbBozza.colore;
  u.foto = onbBozza.foto;
  const nuovaBase = ($("onbBase").value || "").trim();
  if (nuovaBase !== (u.base || "")) u.baseCoord = null; // base cambiata: ricalcolo le coordinate
  u.base = nuovaBase;
  salvaUtente(u);
  try { localStorage.setItem("mj-onboarded", "1"); } catch {}
  try { if (u.nickname) localStorage.setItem("mj-proprietario", u.nickname); else localStorage.removeItem("mj-proprietario"); } catch {}
  chiudiOnboarding();
  renderHomeAvatar();
  if (marcatorePos) { const b = marcatorePos.getElement().querySelector(".pos-badge"); if (b) decoraBadgeUtente(b); }
}
(function () {
  $("onbNick").addEventListener("input", () => { onbBozza.nickname = $("onbNick").value; onbDisegnaAvatar(); });
  $("onbFotoFile").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0]; if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = 160, cv = document.createElement("canvas"); cv.width = s; cv.height = s;
        const ctx = cv.getContext("2d");
        const m = Math.min(img.width, img.height), sx = (img.width - m) / 2, sy = (img.height - m) / 2;
        ctx.drawImage(img, sx, sy, m, m, 0, 0, s, s);
        onbBozza.foto = cv.toDataURL("image/jpeg", 0.85);
        onbDisegnaColori(); onbDisegnaAvatar();
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
    e.target.value = "";
  });
  $("onbInizia").addEventListener("click", () => onbVai("nick"));
  $("onbAvanti").addEventListener("click", () => onbVai("base"));
  $("onbSaltaNick").addEventListener("click", () => onbVai("base"));
  $("onbFine").addEventListener("click", onbSalva);
  $("onbSaltaBase").addEventListener("click", onbSalva);
  const ha = $("homeAvatar"); if (ha) ha.addEventListener("click", () => apriOnboarding("modifica"));
})();

// Interruttore lingua (IT/EN) — delegato, funziona anche quando l'onboarding si riapre
function aggiornaToggleLang() {
  document.querySelectorAll(".onb-lang button").forEach((b) => b.classList.toggle("attivo", b.dataset.lang === LANG));
}
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest(".onb-lang button");
  if (b) { impostaLingua(b.dataset.lang); aggiornaToggleLang(); }
});

apriDB().then(() => { applicaI18n(); aggiornaToggleLang(); renderHome(); avviaSplash(); });
