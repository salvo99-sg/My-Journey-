/*======================================================================
PRODUCT.......: My Journey
MODULE........: i18n
FILE..........: js/i18n/dictionary.js
VERSION.......: 0.1.0
STATUS........: SCAFFOLD (da completare/verificare)
COMPATIBILITY.: Vanilla JavaScript
======================================================================
DIZIONARIO i18n — SCAFFOLD

• Registra le traduzioni tramite Language.register({ it:{…}, en:{…} }).
• Le chiavi con ✅ sono GIÀ USATE nel codice (obbligatorie):
    - link_copied      (share.js)
    - backup_restored  (import.js)
• Le altre sono una base UI IT/EN best-effort da rifinire.
• Il set DEFINITIVO dipende dai [data-i18n] dell'HTML #9: quando arriva,
  vanno aggiunte tutte le chiavi mancanti e verificate le stringhe.

ORDINE DI CARICAMENTO (cut-over)
Questo file deve girare PRIMA di Language.init() (che fa translatePage()).
In bootstrap: caricare dictionary.js prima, oppure chiamare Language.register()
qui e Language.init() dopo.
======================================================================*/

"use strict";

Language.register({

/*====================================================================
ITALIANO
====================================================================*/

it:{

/* --- Chiavi richieste dal codice (NON rimuovere) --- */

"link_copied":"Link copiato",

"backup_restored":"Backup ripristinato",

/* --- Navigazione --- */

"nav.home":"Home",

"nav.map":"Mappa",

"nav.album":"Album",

"nav.tickets":"Biglietti",

"nav.budget":"Budget",

"nav.packing":"Valigia",

"nav.journal":"Diario",

"nav.memories":"Ricordi",

"nav.settings":"Impostazioni",

"nav.trophies":"Traguardi",

"nav.profile":"Profilo",

/* --- Azioni --- */

"action.save":"Salva",

"action.cancel":"Annulla",

"action.delete":"Elimina",

"action.confirm":"Conferma",

"action.edit":"Modifica",

"action.share":"Condividi",

"action.new_trip":"Nuovo viaggio",

"action.create_trip":"Crea viaggio",

"action.add_stop":"Aggiungi tappa",

"action.add_expense":"Aggiungi spesa",

"action.export":"Esporta",

"action.import":"Importa",

"action.retry":"Riprova",

/* --- Stati viaggio --- */

"status.draft":"Bozza",

"status.planned":"In programma",

"status.progress":"In corso",

"status.completed":"Concluso",

/* --- Home / elenchi --- */

"home.title":"I miei viaggi",

"home.continue":"Continua a pianificare",

"home.recent_memories":"Ricordi recenti",

"home.see_all":"Vedi tutti",

"home.empty":"Nessun viaggio",

"home.empty_hint":"Crea il tuo primo viaggio per iniziare.",

/* --- Form / ricerca --- */

"search.placeholder":"Dove vuoi andare?",

"search.place":"Cerca un luogo",

"search.empty":"Nessun risultato",

/* --- Categorie tappa --- */

"category.activity":"Attività",

"category.restaurant":"Ristorante",

"category.hotel":"Hotel",

"category.transport":"Trasporto",

"category.other":"Altro",

/* --- Generici --- */

"common.loading":"Caricamento…",

"common.offline":"Sei offline",

"common.day":"Giorno",

"common.progress":"Avanzamento"

},

/*====================================================================
ENGLISH
====================================================================*/

en:{

/* --- Keys required by code (do NOT remove) --- */

"link_copied":"Link copied",

"backup_restored":"Backup restored",

/* --- Navigation --- */

"nav.home":"Home",

"nav.map":"Map",

"nav.album":"Album",

"nav.tickets":"Tickets",

"nav.budget":"Budget",

"nav.packing":"Packing",

"nav.journal":"Journal",

"nav.memories":"Memories",

"nav.settings":"Settings",

"nav.trophies":"Achievements",

"nav.profile":"Profile",

/* --- Actions --- */

"action.save":"Save",

"action.cancel":"Cancel",

"action.delete":"Delete",

"action.confirm":"Confirm",

"action.edit":"Edit",

"action.share":"Share",

"action.new_trip":"New trip",

"action.create_trip":"Create trip",

"action.add_stop":"Add stop",

"action.add_expense":"Add expense",

"action.export":"Export",

"action.import":"Import",

"action.retry":"Retry",

/* --- Trip status --- */

"status.draft":"Draft",

"status.planned":"Planned",

"status.progress":"In progress",

"status.completed":"Completed",

/* --- Home / lists --- */

"home.title":"My trips",

"home.continue":"Continue planning",

"home.recent_memories":"Recent memories",

"home.see_all":"See all",

"home.empty":"No trips yet",

"home.empty_hint":"Create your first trip to get started.",

/* --- Form / search --- */

"search.placeholder":"Where do you want to go?",

"search.place":"Search a place",

"search.empty":"No results",

/* --- Stop categories --- */

"category.activity":"Activity",

"category.restaurant":"Restaurant",

"category.hotel":"Hotel",

"category.transport":"Transport",

"category.other":"Other",

/* --- Generic --- */

"common.loading":"Loading…",

"common.offline":"You are offline",

"common.day":"Day",

"common.progress":"Progress"

}

});

/*======================================================================
END OF FILE
======================================================================*/
