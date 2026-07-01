/*======================================================================
PRODUCT.......: My Journey
MODULE........: PWA
FILE..........: service-worker.js
VERSION.......: 1.1.0
STATUS........: Production Ready
COMPATIBILITY.: Progressive Web App
======================================================================
SERVICE WORKER

Strategy
• Network-first  -> HTML / JS / JSON / CSS (codice sempre aggiornato)
• Cache-first    -> immagini
• Solo same-origin in cache (API esterne: mapbox/open-meteo/frankfurter
  passano sempre dalla rete, mai cache)
• Path relativi -> compatibile con base-path GitHub Pages (/My-Journey-/)

======================================================================*/

"use strict";

const CACHE_VERSION="myjourney-v1.1.0";

const STATIC_CACHE=[

"./",

"index.html",

"manifest.json"

];

/*======================================================================
INSTALL
======================================================================*/

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_VERSION).then(cache=>

cache.addAll(STATIC_CACHE)

)

);

self.skipWaiting();

});

/*======================================================================
ACTIVATE
======================================================================*/

self.addEventListener("activate",event=>{

event.waitUntil(

caches.keys().then(keys=>

Promise.all(

keys.map(key=>{

if(key!==CACHE_VERSION){

return caches.delete(key);

}

})

)

)

);

self.clients.claim();

});

/*======================================================================
FETCH
======================================================================*/

self.addEventListener("fetch",event=>{

const request=event.request;

if(request.method!=="GET") return;

const url=new URL(request.url);

// solo same-origin: le API esterne passano sempre dalla rete

if(url.origin!==self.location.origin) return;

const isImage=

request.destination==="image" ||

/\.(png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);

if(isImage){

// cache-first

event.respondWith(

caches.match(request).then(cached=>

cached ||

fetch(request).then(response=>{

const clone=response.clone();

caches.open(CACHE_VERSION).then(cache=>

cache.put(request,clone)

);

return response;

})

)

);

return;

}

// network-first (HTML/JS/JSON/CSS)

event.respondWith(

fetch(request).then(response=>{

const clone=response.clone();

caches.open(CACHE_VERSION).then(cache=>

cache.put(request,clone)

);

return response;

}).catch(()=>

caches.match(request).then(cached=>

cached || caches.match("./")

)

)

);

});

/*======================================================================
MESSAGE
======================================================================*/

self.addEventListener("message",event=>{

if(event.data==="skipWaiting"){

self.skipWaiting();

}

});

/*======================================================================
END OF FILE
======================================================================*/
