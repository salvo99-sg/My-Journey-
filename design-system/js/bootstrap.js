/*======================================================================
PRODUCT.......: My Journey
MODULE........: Bootstrap
FILE..........: js/bootstrap.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
APPLICATION BOOTSTRAP

Registers all application modules.

======================================================================*/

"use strict";

window.addEventListener(

"DOMContentLoaded",

async()=>{

await Icons.init();

Config;

Constants;

Storage.init();

State.init();

Theme.init();

Language.init();

Router.init();

Offline.init();

Sync.init();

Notifications.init();

Animations.init();

Modal.init();

Toast.init();

Loader.init();

FAB.init();

UIControls.init();

Gestures.init();

Timeline.init();

JourneyMap.init();

Search.init();

Autocomplete.init();

Onboarding.init();

Journal.init();

Gallery.init();

Tickets.init();

Packing.init();

Budget.init();

Memories.init();

Weather.init();

Hotels.init();

Transport.init();

Currency.init();

Analytics.init();

App.init();

});

if(

"serviceWorker" in navigator

){

window.addEventListener(

"load",

()=>{

navigator.serviceWorker.register(

"service-worker.js"

);

}

);

}

/*======================================================================
END OF FILE
======================================================================*/
