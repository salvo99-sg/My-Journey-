// ============ My Journey — Service Worker (PWA) ============
// Rende l'app installabile e utilizzabile offline.
// Strategia:
//  - CODICE (index.html, app.js, manifest): network-first -> sempre aggiornato
//    quando sei online, con la cache come riserva offline. Questo evita che una
//    vecchia versione resti "incastrata" in cache dopo una pubblicazione.
//  - ASSET statici (icone, immagini dei temi): cache-first -> veloci e offline.
//  - Risorse di terze parti (Mapbox, font, cambio valuta): sempre dalla rete.
// IMPORTANTE: a ogni cambio di strategia/struttura, alzare il numero di CACHE
// (mj-vN). Il nuovo service worker cancella le cache vecchie all'attivazione.

const CACHE = "mj-v11";
const CORE = [
  "./",
  "index.html",
  "app.js",
  "manifest.json",
  "icon-192-v2.png",
  "icon-512-v2.png",
  "apple-touch-icon-v2.png",
  "favicon-32-v2.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// rete-prima: prova la rete, aggiorna la cache, e ripiega sulla cache se offline
function retePrima(req, fallback) {
  return fetch(req)
    .then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    })
    .catch(() => caches.match(req).then((r) => r || (fallback ? caches.match(fallback) : undefined)));
}

// cache-prima: serve dalla cache se c'è, altrimenti rete (e memorizza)
function cachePrima(req) {
  return caches.match(req).then((cached) =>
    cached ||
    fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    })
  );
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Risorse di terze parti: lascia gestire alla rete (no cache).
  if (url.origin !== self.location.origin) return;

  // Navigazioni (apertura pagina): sempre l'ultima versione se online.
  if (req.mode === "navigate") {
    e.respondWith(retePrima(req, "index.html"));
    return;
  }

  // Codice e Design System (js/json/css): network-first, così gli aggiornamenti
  // arrivano subito (i file del DS verranno consegnati in modo progressivo).
  if (/\.(?:js|json|css)$/.test(url.pathname)) {
    e.respondWith(retePrima(req));
    return;
  }

  // Tutto il resto (icone, immagini dei temi): cache-first.
  e.respondWith(cachePrima(req));
});
