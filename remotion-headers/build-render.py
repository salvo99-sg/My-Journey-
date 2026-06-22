#!/usr/bin/env python3
import base64, pathlib

here = pathlib.Path(__file__).parent
mp4 = (here / "out" / "oriente.mp4").read_bytes()
b64 = base64.b64encode(mp4).decode()

HTML = r"""<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Agenda Viaggi — Header video Remotion + icone ridisegnate</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  :root{
    --bg:#FBF6EF; --surface:#fff; --ink:#1c1917; --muted:#7d7167;
    --border:#F0E7DC; --border2:#EEE3D7; --navy:#16264C;
    --accent:#E0485C; --accent-d:#B23147;
    --radius:20px;
    --shadow-sm:0 1px 2px rgba(120,70,30,.06),0 1px 3px rgba(120,70,30,.05);
    --shadow-md:0 6px 18px rgba(120,70,30,.10);
    --shadow-lg:0 16px 40px rgba(120,70,30,.18);
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Inter',system-ui,sans-serif;color:var(--ink);
    background:radial-gradient(1100px 600px at 10% -10%,#F4E6D6,transparent 55%),
               radial-gradient(1000px 600px at 112% 6%,#EAD9E4,transparent 50%),#F1EAE0;
    padding:34px 20px 70px;}

  .ico{width:1.25em;height:1.25em;display:inline-block;vertical-align:-0.22em;}
  .ico .fg{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
  .ico .bg{fill:currentColor;opacity:.20;stroke:none;}
  .ico .dot{fill:currentColor;stroke:none;}

  .doc-head{max-width:1200px;margin:0 auto 24px;}
  .doc-eyebrow{font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#C2410C;font-weight:700;}
  .doc-title{font-family:'Calistoga',serif;font-size:38px;color:var(--navy);margin-top:6px;line-height:1.05;}
  .doc-sub{color:var(--muted);font-size:15px;margin-top:10px;max-width:740px;line-height:1.55;}

  .block{max-width:1200px;margin:0 auto 26px;background:var(--surface);border:1px solid var(--border);
    border-radius:var(--radius);padding:18px 20px;box-shadow:var(--shadow-md);}
  .block h4{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;}

  .ico-grid{display:flex;flex-wrap:wrap;gap:16px;}
  .ico-cell{display:flex;flex-direction:column;align-items:center;gap:7px;width:78px;color:var(--navy);}
  .ico-cell .ico{font-size:30px;}
  .ico-cell small{font-size:10.5px;color:var(--muted);font-weight:600;text-align:center;}

  /* anteprima grande del loop header */
  .hero-loop{position:relative;border-radius:18px;overflow:hidden;height:200px;background:#1B1E3C;}
  .hero-loop video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  .hero-loop .scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,16,40,.05),rgba(20,16,40,.45));}
  .hero-loop .lbl{position:absolute;left:22px;bottom:18px;color:#fff;z-index:2;}
  .hero-loop .lbl .ey{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.85;font-weight:600;}
  .hero-loop .lbl h2{font-family:'Calistoga',serif;font-size:30px;font-weight:400;margin-top:3px;}

  .galleria{max-width:1200px;margin:0 auto;display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:34px;justify-items:center;}
  .phone-wrap{width:320px;}
  .phone-label{text-align:center;font-weight:700;color:var(--navy);margin-bottom:12px;font-size:15px;}
  .phone-label span{display:block;font-weight:400;font-size:12px;color:var(--muted);margin-top:2px;}
  .phone{width:320px;height:652px;background:#0c0c0e;border-radius:44px;padding:11px;box-shadow:var(--shadow-lg);}
  .screen{width:100%;height:100%;border-radius:34px;overflow:hidden;position:relative;display:flex;flex-direction:column;background:#FBF6EF;}
  .screen::before{content:"";position:absolute;inset:0;z-index:0;opacity:.05;pointer-events:none;
    background-image:radial-gradient(circle at 50% 50%,#E0485C 1.5px,transparent 1.6px);background-size:120px;}
  .scroll{flex:1;overflow:hidden;position:relative;z-index:1;}
  .notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:120px;height:26px;background:#0c0c0e;border-radius:0 0 16px 16px;z-index:30;}

  .hdr{position:relative;overflow:hidden;color:#fff;padding:40px 20px 22px;border-radius:0 0 28px 28px;min-height:170px;}
  .hdr video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;}
  .hdr .scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(20,16,40,.12) 0%,rgba(20,16,40,0) 32%,rgba(20,16,40,.42) 100%);}
  .hdr>*:not(video):not(.scrim){position:relative;z-index:3;}
  .hdr .eyebrow{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.85;font-weight:600;}
  .hdr h1{font-family:'Calistoga',serif;font-size:25px;margin-top:5px;font-weight:400;text-shadow:0 1px 12px rgba(0,0,0,.25);}
  .hdr .date{font-size:13px;opacity:.95;margin-top:3px;}
  .testa-riga{display:flex;justify-content:space-between;align-items:center;}
  .btn-ghost{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.18);color:#fff;border:none;border-radius:999px;padding:8px 13px;font-size:12px;font-weight:600;backdrop-filter:blur(4px);}
  .badge{display:inline-flex;align-items:center;gap:7px;margin-top:14px;border-radius:999px;padding:7px 15px;font-size:12.5px;font-weight:700;color:#fff;background:var(--accent);box-shadow:0 6px 16px rgba(224,72,92,.45);}

  .tabs{display:flex;gap:6px;padding:14px 14px 4px;}
  .tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 4px;border-radius:16px;
    border:1px solid var(--border);background:#fff;color:var(--muted);font-size:10.5px;font-weight:600;box-shadow:var(--shadow-sm);}
  .tab .ico{font-size:20px;}
  .tab.attiva{background:var(--accent-d);border-color:var(--accent-d);color:#fff;}

  .suggerimento{font-size:11.5px;color:#b6a99b;text-align:center;margin:10px 0;}
  .gcard{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin:0 14px 11px;box-shadow:var(--shadow-sm);overflow:hidden;}
  .gcard-testa{display:flex;align-items:center;justify-content:space-between;padding:14px;}
  .gcard-info b{font-family:'Calistoga',serif;font-size:16px;color:var(--ink);font-weight:400;display:block;}
  .gcard-info small{color:var(--muted);font-size:12px;}
  .chev{color:#d6c4b6;display:flex;}
  .gcard-corpo{padding:0 12px 12px;}
  .fascia{display:flex;align-items:center;gap:6px;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#b6a99b;margin:12px 4px 7px;font-weight:600;}
  .tappa{display:flex;background:#FFFCF8;border:1px solid var(--border2);border-radius:15px;overflow:hidden;margin-bottom:8px;}
  .tappa .barra{width:5px;flex:none;}
  .tappa .ico-wrap{display:flex;align-items:center;padding-left:11px;}
  .tappa .corpo{flex:1;padding:10px 11px;}
  .tappa .meta{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;font-weight:600;}
  .tappa .titolo{font-weight:600;color:var(--ink);margin-top:2px;font-size:14px;}
  .tappa .luogo{font-size:12px;color:var(--muted);margin-top:1px;}
  .tappa .costo{width:62px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border-left:1px dashed var(--border);}
  .aggiungi-qui{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;margin-top:8px;background:#FFFCF8;border:1.5px dashed #E7C9B5;border-radius:14px;padding:11px;font-weight:600;font-size:13.5px;color:var(--accent);}

  .card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px;margin:0 14px 13px;box-shadow:var(--shadow-sm);}
  .card .eyebrow{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);font-weight:600;}
  .totale{text-align:center;}
  .totale .cifra{font-family:'Calistoga',serif;font-size:40px;margin:6px 0 2px;color:#3A2350;}
  .totale .sub{font-size:12.5px;color:var(--muted);}
  .card b.titoletto{display:flex;align-items:center;gap:7px;font-size:14px;color:var(--ink);margin-bottom:12px;}
  .cat{margin-bottom:11px;}
  .cat .riga{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:5px;color:var(--ink);}
  .cat .riga .nome{display:flex;align-items:center;gap:7px;flex:1;}
  .cat .riga b{font-weight:700;}
  .pista{height:9px;background:#F3E9DD;border-radius:999px;overflow:hidden;}
  .pieno{height:100%;border-radius:999px;}
  .pieno.acc{background:linear-gradient(90deg,#E0485C,#FF8A9A);}

  .nota{max-width:1200px;margin:40px auto 0;background:var(--surface);border:1px solid var(--border);
    border-radius:var(--radius);padding:22px 26px;box-shadow:var(--shadow-md);}
  .nota h3{font-family:'Calistoga',serif;color:var(--navy);font-size:22px;font-weight:400;margin-bottom:12px;}
  .nota ul{list-style:none;display:grid;gap:11px;}
  .nota li{display:flex;gap:11px;font-size:14px;color:#44403c;line-height:1.5;}
  .nota li b{color:var(--ink);}
  .nota .d{width:9px;height:9px;border-radius:50%;flex:none;margin-top:6px;}
</style>
</head>
<body>

<!-- ===== SPRITE ICONE (ridisegnate per riconoscibilita') ===== -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-cal" viewBox="0 0 24 24"><rect class="bg" x="3" y="5.5" width="18" height="15" rx="3"/><g class="fg"><rect x="3" y="5.5" width="18" height="15" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></g><g class="dot"><circle cx="8" cy="14" r=".9"/><circle cx="12" cy="14" r=".9"/><circle cx="16" cy="14" r=".9"/><circle cx="8" cy="17.5" r=".9"/><circle cx="12" cy="17.5" r=".9"/></g></symbol>

  <symbol id="i-money" viewBox="0 0 24 24"><rect class="bg" x="3" y="6.5" width="18" height="11" rx="2.5"/><g class="fg"><rect x="3" y="6.5" width="18" height="11" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/></g></symbol>

  <symbol id="i-backpack" viewBox="0 0 24 24"><path class="bg" d="M7 10a5 5 0 0 1 10 0v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><g class="fg"><path d="M7 11a5 5 0 0 1 10 0v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M10 6.5a2 2 0 0 1 4 0"/><path d="M9 20v-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V20"/><path d="M10.5 14.5h3"/></g></symbol>

  <symbol id="i-cam" viewBox="0 0 24 24"><rect class="bg" x="3" y="8" width="18" height="12" rx="3.5"/><g class="fg"><rect x="3" y="8" width="18" height="12" rx="3.5"/><circle cx="12" cy="14" r="3.3"/><path d="M9 8l1.3-2.2h3.4L15 8"/></g></symbol>

  <symbol id="i-plane" viewBox="0 0 24 24"><path class="bg" d="M12 3c.8 0 1.4 1 1.4 2.4V9l7 4v2.1l-7-2v3.6l2 1.5V21l-3.4-1L8.6 21v-1.8l2-1.5V13l-7 2V13l7-4V5.4C10.6 4 11.2 3 12 3z"/><g class="fg"><path d="M12 3c.8 0 1.4 1 1.4 2.4V9l7 4v2.1l-7-2v3.6l2 1.5V21l-3.4-1L8.6 21v-1.8l2-1.5V13l-7 2V13l7-4V5.4C10.6 4 11.2 3 12 3z"/></g></symbol>

  <symbol id="i-train" viewBox="0 0 24 24"><rect class="bg" x="5" y="4" width="14" height="13" rx="4"/><g class="fg"><rect x="5" y="4" width="14" height="13" rx="4"/><rect x="8" y="8" width="8" height="4" rx="1"/><path d="M8.5 21l1.6-2.5M15.5 21l-1.6-2.5"/></g><g class="dot"><circle cx="9" cy="14.6" r=".9"/><circle cx="15" cy="14.6" r=".9"/></g></symbol>

  <symbol id="i-bed" viewBox="0 0 24 24"><path class="bg" d="M3 13h13a4 4 0 0 1 4 4v2H3z"/><g class="fg"><path d="M3 19V8M3 13h13a4 4 0 0 1 4 4v2M21 19v-2"/><path d="M6 13v-1.5A1.5 1.5 0 0 1 7.5 10h2A1.5 1.5 0 0 1 11 11.5V13"/></g></symbol>

  <symbol id="i-ticket" viewBox="0 0 24 24"><path class="bg" d="M3 9.2V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.2a1.7 1.7 0 0 0 0 5.6V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.2a1.7 1.7 0 0 0 0-5.6z"/><g class="fg"><path d="M3 9.2V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.2a1.7 1.7 0 0 0 0 5.6V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.2a1.7 1.7 0 0 0 0-5.6z"/><path d="M15 7.5v9" stroke-dasharray="1.4 2.6"/></g></symbol>

  <symbol id="i-food" viewBox="0 0 24 24"><g class="fg"><path d="M6.5 3v4.2a1.6 1.6 0 0 0 3.2 0V3M8.1 7.4V21"/><path d="M16.8 3c-1.5.4-2.6 2.4-2.6 4.8 0 1.7 1 2.9 2.6 3.2M16.8 11V21"/></g></symbol>

  <symbol id="i-boat" viewBox="0 0 24 24"><path class="bg" d="M3.5 14.5h17l-1.7 4.3a1.5 1.5 0 0 1-1.4.9H6.6a1.5 1.5 0 0 1-1.4-.9z"/><g class="fg"><path d="M3.5 14.5h17l-1.7 4.3a1.5 1.5 0 0 1-1.4.9H6.6a1.5 1.5 0 0 1-1.4-.9z"/><path d="M6 14.5V11a1 1 0 0 1 1-1h5l4 4.5M12 10V6"/></g></symbol>

  <symbol id="i-users" viewBox="0 0 24 24"><circle class="bg" cx="9" cy="8" r="3.2"/><g class="fg"><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/></g></symbol>

  <symbol id="i-map" viewBox="0 0 24 24"><path class="bg" d="M9 4 3.5 6.2v13.6L9 17.5l6 2 5.5-2.2V3.7L15 6 9 4z"/><g class="fg"><path d="M9 4 3.5 6.2v13.6L9 17.5l6 2 5.5-2.2V3.7L15 6 9 4zM9 4v13.5M15 6v13.5"/></g></symbol>

  <symbol id="i-clock" viewBox="0 0 24 24"><circle class="bg" cx="12" cy="12" r="9"/><g class="fg"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></g></symbol>

  <symbol id="i-sunrise" viewBox="0 0 24 24"><path class="bg" d="M7.5 18a4.5 4.5 0 0 1 9 0z"/><g class="fg"><path d="M3 18h18M7.5 18a4.5 4.5 0 0 1 9 0"/><path d="M12 3v3.5M9.5 6 12 3.5 14.5 6"/><path d="M4.2 13.2 5.6 14.6M19.8 13.2 18.4 14.6"/></g></symbol>

  <symbol id="i-sun" viewBox="0 0 24 24"><circle class="bg" cx="12" cy="12" r="4.2"/><g class="fg"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.2M12 19.8V22M2 12h2.2M19.8 12H22M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"/></g></symbol>

  <symbol id="i-moon" viewBox="0 0 24 24"><path class="bg" d="M20 14.5A8 8 0 1 1 9.5 4 6.2 6.2 0 0 0 20 14.5z"/><g class="fg"><path d="M20 14.5A8 8 0 1 1 9.5 4 6.2 6.2 0 0 0 20 14.5z"/></g></symbol>

  <symbol id="i-plus" viewBox="0 0 24 24"><circle class="bg" cx="12" cy="12" r="9"/><g class="fg"><path d="M12 7.5v9M7.5 12h9"/></g></symbol>

  <symbol id="i-chev-r" viewBox="0 0 24 24"><g class="fg"><path d="M9.5 6l6 6-6 6"/></g></symbol>
  <symbol id="i-chev-d" viewBox="0 0 24 24"><g class="fg"><path d="M6 9.5l6 6 6-6"/></g></symbol>
  <symbol id="i-chev-l" viewBox="0 0 24 24"><g class="fg"><path d="M14.5 6l-6 6 6 6"/></g></symbol>
</svg>

<div class="doc-head">
  <div class="doc-eyebrow">Proposta v3 · Header video (Remotion) + icone ridisegnate</div>
  <h1 class="doc-title">Realistico, non disegnato</h1>
  <p class="doc-sub">L'header ora e' un <b>loop video reale</b> generato con Remotion: cielo al tramonto, sole soffuso che respira, foschia in deriva e petali di sakura su tre profondita'. 345&nbsp;KB, ciclo perfetto. Sotto, le icone sono state riprocessate: ogni metafora e' immediata e ogni silhouette e' distinta dalle altre.</p>
</div>

<div class="block">
  <h4>Header "Oriente / Sol Levante" · loop reale Remotion (autoplay, muto, ciclico)</h4>
  <div class="hero-loop" data-video>
    <div class="scrim"></div>
    <div class="lbl"><div class="ey">Diario di bordo</div><h2>Tour del Giappone</h2></div>
  </div>
</div>

<div class="block">
  <h4>Icone ridisegnate · duotone, una sola famiglia, ogni icona riconoscibile a colpo d'occhio</h4>
  <div class="ico-grid">
    <div class="ico-cell"><svg class="ico"><use href="#i-cal"/></svg><small>Viaggio</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-money"/></svg><small>Budget</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-backpack"/></svg><small>Preparativi</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-cam"/></svg><small>Ricordi</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-plane"/></svg><small>Volo</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-train"/></svg><small>Treno</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-bed"/></svg><small>Hotel</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-ticket"/></svg><small>Attivita'</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-food"/></svg><small>Ristorante</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-boat"/></svg><small>Traghetto</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-users"/></svg><small>Persone</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-map"/></svg><small>Mappa</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-clock"/></svg><small>Countdown</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-sunrise"/></svg><small>Mattina</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-sun"/></svg><small>Pomeriggio</small></div>
    <div class="ico-cell"><svg class="ico"><use href="#i-moon"/></svg><small>Sera</small></div>
  </div>
</div>

<div class="galleria">

  <!-- ITINERARIO -->
  <div class="phone-wrap">
    <div class="phone-label">In contesto <span>Itinerario</span></div>
    <div class="phone"><div class="screen"><div class="notch"></div><div class="scroll">
      <div class="hdr" data-video>
        <div class="scrim"></div>
        <div class="testa-riga">
          <button class="btn-ghost"><svg class="ico"><use href="#i-chev-l"/></svg> Viaggi</button>
          <button class="btn-ghost"><svg class="ico"><use href="#i-map"/></svg> Mappa</button>
        </div>
        <div class="eyebrow">Diario di bordo</div>
        <h1>Tour del Giappone</h1>
        <div class="date">3 ottobre &rarr; 17 ottobre</div>
        <span class="badge"><svg class="ico"><use href="#i-clock"/></svg> Mancano 38 giorni</span>
      </div>
      <div class="tabs">
        <div class="tab attiva"><svg class="ico"><use href="#i-cal"/></svg>Viaggio</div>
        <div class="tab"><svg class="ico"><use href="#i-money"/></svg>Budget</div>
        <div class="tab"><svg class="ico"><use href="#i-backpack"/></svg>Preparativi</div>
        <div class="tab"><svg class="ico"><use href="#i-cam"/></svg>Ricordi</div>
      </div>
      <div class="suggerimento">Tocca un giorno &middot; scorri per le azioni</div>
      <div class="gcard">
        <div class="gcard-testa"><div class="gcard-info"><b>Giorno 1</b><small>gio 3 ott &middot; 2 attivita' &middot; &euro; 18</small></div><div class="chev"><svg class="ico"><use href="#i-chev-d"/></svg></div></div>
        <div class="gcard-corpo">
          <div class="fascia"><svg class="ico"><use href="#i-sunrise"/></svg> Mattina</div>
          <div class="tappa"><div class="barra" style="background:#5E548E"></div><div class="ico-wrap" style="color:#5E548E"><svg class="ico" style="font-size:18px"><use href="#i-ticket"/></svg></div><div class="corpo"><div class="meta">Attivita' &middot; 09:30</div><div class="titolo">Tempio Senso-ji</div><div class="luogo">Asakusa, Tokyo</div></div><div class="costo">Gratis</div></div>
          <div class="fascia"><svg class="ico"><use href="#i-moon"/></svg> Sera</div>
          <div class="tappa"><div class="barra" style="background:#C9514C"></div><div class="ico-wrap" style="color:#C9514C"><svg class="ico" style="font-size:18px"><use href="#i-food"/></svg></div><div class="corpo"><div class="meta">Ristorante &middot; 20:00</div><div class="titolo">Ramen a Shinjuku</div><div class="luogo">Tokyo</div></div><div class="costo">&euro; 18</div></div>
          <button class="aggiungi-qui"><svg class="ico"><use href="#i-plus"/></svg> Attivita' in questo giorno</button>
        </div>
      </div>
      <div class="gcard"><div class="gcard-testa"><div class="gcard-info"><b>Giorno 2</b><small>ven 4 ott &middot; giornata libera</small></div><div class="chev"><svg class="ico"><use href="#i-chev-r"/></svg></div></div></div>
    </div></div></div>
  </div>

  <!-- BUDGET -->
  <div class="phone-wrap">
    <div class="phone-label">In contesto <span>Budget</span></div>
    <div class="phone"><div class="screen"><div class="notch"></div><div class="scroll">
      <div class="hdr" data-video>
        <div class="scrim"></div>
        <div class="testa-riga">
          <button class="btn-ghost"><svg class="ico"><use href="#i-chev-l"/></svg> Viaggi</button>
          <button class="btn-ghost"><svg class="ico"><use href="#i-map"/></svg> Mappa</button>
        </div>
        <h1>Tour del Giappone</h1>
        <div class="date">3 ottobre &rarr; 17 ottobre</div>
      </div>
      <div class="tabs">
        <div class="tab"><svg class="ico"><use href="#i-cal"/></svg>Viaggio</div>
        <div class="tab attiva"><svg class="ico"><use href="#i-money"/></svg>Budget</div>
        <div class="tab"><svg class="ico"><use href="#i-backpack"/></svg>Preparativi</div>
        <div class="tab"><svg class="ico"><use href="#i-cam"/></svg>Ricordi</div>
      </div>
      <div style="height:14px"></div>
      <div class="card totale"><div class="eyebrow">Totale viaggio</div><div class="cifra">&euro; 3.480</div><div class="sub">&asymp; &yen; 556.800 in valuta locale</div></div>
      <div class="card">
        <b class="titoletto"><svg class="ico" style="color:var(--accent-d)"><use href="#i-users"/></svg> Spese per viaggiatore</b>
        <div class="cat"><div class="riga"><span class="nome">Sara</span><b>&euro; 1.160</b></div><div class="pista"><div class="pieno acc" style="width:100%"></div></div></div>
        <div class="cat"><div class="riga"><span class="nome">Luca</span><b>&euro; 1.160</b></div><div class="pista"><div class="pieno acc" style="width:100%"></div></div></div>
        <div class="cat"><div class="riga"><span class="nome">Mia</span><b>&euro; 1.160</b></div><div class="pista"><div class="pieno acc" style="width:100%"></div></div></div>
      </div>
      <div class="card">
        <b class="titoletto">Spese per categoria</b>
        <div class="cat"><div class="riga"><span class="nome"><svg class="ico" style="color:#3D5A80"><use href="#i-plane"/></svg>Volo</span><b>&euro; 1.900</b></div><div class="pista"><div class="pieno" style="width:100%;background:#3D5A80"></div></div></div>
        <div class="cat"><div class="riga"><span class="nome"><svg class="ico" style="color:#0891B2"><use href="#i-bed"/></svg>Hotel</span><b>&euro; 1.100</b></div><div class="pista"><div class="pieno" style="width:58%;background:#0891B2"></div></div></div>
      </div>
    </div></div></div>
  </div>

</div>

<div class="nota">
  <h3>Cosa e' cambiato in questa v3</h3>
  <ul>
    <li><span class="d" style="background:#E0485C"></span><div><b>Header = video reale:</b> non piu' onde CSS, ma una scena renderizzata con Remotion (cielo, sole con bloom, foschia, petali su 3 profondita', grana e vignetta). Loop perfetto, 345&nbsp;KB, parte da solo e va in ciclo.</div></li>
    <li><span class="d" style="background:#3A2350"></span><div><b>Icone riconoscibili:</b> Budget &rarr; banconota, Preparativi &rarr; zaino, Traghetto &rarr; barca, calendario con griglia, ecc. Metafore nette e silhouette tutte diverse tra loro.</div></li>
    <li><span class="d" style="background:#16264C"></span><div><b>Pipeline a parte:</b> Remotion serve solo in fase di design per generare i loop; l'app resta vanilla e si limita a riprodurre il video. Carico solo il loop del tema attivo (lazy) + poster statico come fallback per "riduci movimento".</div></li>
    <li><span class="d" style="background:#0891B2"></span><div><b>Prossimo passo:</b> con il tuo ok replico lo stesso livello sugli altri temi-mood (Mediterraneo, Aurora, Deserto, ...), ognuno con la sua scena Remotion.</div></li>
  </ul>
</div>

<script>
  var V="data:video/mp4;base64,__VIDEO_B64__";
  document.querySelectorAll('[data-video]').forEach(function(slot){
    var v=document.createElement('video');
    v.src=V; v.autoplay=true; v.loop=true; v.muted=true; v.playsInline=true; v.setAttribute('playsinline','');
    slot.insertBefore(v, slot.firstChild);
    var pr=v.play(); if(pr&&pr.catch){pr.catch(function(){});}
  });
</script>
</body>
</html>
"""

out = here.parent / "proposta-temi-v3.html"
out.write_text(HTML.replace("__VIDEO_B64__", b64), encoding="utf-8")
print("written", out, round(out.stat().st_size/1024), "KB")
