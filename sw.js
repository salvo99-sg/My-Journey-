// ============ My Journey — Service Worker (PWA) ============
// Rende l'app installabile e utilizzabile offline.
// Strategia: precache del "guscio" + cache-first per gli asset locali,
// network-first per le navigazioni. Le risorse esterne (Mapbox, font,
// cambio valuta) passano sempre dalla rete e non vengono memorizzate qui.

const CACHE = "mj-v1";
const CORE = [
  "./",
  "index.html",
  "app.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "favicon-32.png"
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

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Risorse di terze parti: lascia gestire alla rete (no cache).
  if (url.origin !== self.location.origin) return;

  // Navigazioni (apertura pagina): prima la rete, poi la cache come riserva.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("index.html")))
    );
    return;
  }

  // Asset locali (app.js, icone, immagini dei temi): prima la cache, poi la rete.
  e.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
    )
  );
});
