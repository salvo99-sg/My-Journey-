/*======================================================================
PRODUCT.......: My Journey
MODULE........: PWA
FILE..........: service-worker.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Progressive Web App
======================================================================
SERVICE WORKER

Responsibilities

• Offline support
• Static asset cache
• Runtime cache
• Cache versioning
• Automatic cleanup

======================================================================*/

"use strict";

/*======================================================================
CACHE
======================================================================*/

const CACHE_VERSION="myjourney-v1.0.0";

const STATIC_CACHE=[

"/",

"/index.html",

"/manifest.json",

"/css/app.css",

"/js/app.js",

"/icons/icon-192.png",

"/icons/icon-512.png"

];

/*======================================================================
INSTALL
======================================================================*/

self.addEventListener(

"install",

event=>{

event.waitUntil(

caches.open(CACHE_VERSION)

.then(cache=>{

return cache.addAll(STATIC_CACHE);

})

);

self.skipWaiting();

}

/*======================================================================
ACTIVATE
======================================================================*/

);

self.addEventListener(

"activate",

event=>{

event.waitUntil(

caches.keys()

.then(keys=>{

return Promise.all(

keys.map(key=>{

if(key!==CACHE_VERSION){

return caches.delete(key);

}

})

);

})

);

self.clients.claim();

});

/*======================================================================
FETCH
======================================================================*/

self.addEventListener(

"fetch",

event=>{

if(event.request.method!=="GET"){

return;

}

event.respondWith(

caches.match(event.request)

.then(cached=>{

if(cached){

return cached;

}

return fetch(event.request)

.then(response=>{

const clone=response.clone();

caches.open(CACHE_VERSION)

.then(cache=>{

cache.put(

event.request,

clone

);

});

return response;

})

.catch(()=>{

return caches.match("/");

});

})

);

});

/*======================================================================
MESSAGE
======================================================================*/

self.addEventListener(

"message",

event=>{

if(

event.data==="skipWaiting"

){

self.skipWaiting();

}

});

/*======================================================================
END OF FILE
======================================================================*/
