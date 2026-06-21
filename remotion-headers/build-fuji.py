#!/usr/bin/env python3
import base64, pathlib

here = pathlib.Path(__file__).parent
PH = here / "node_modules/@phosphor-icons/core/assets/duotone"

def icon(name, size="1em", color=None):
    svg = (PH / f"{name}-duotone.svg").read_text()
    style = f"width:{size};height:{size};vertical-align:-0.18em;flex:none;"
    if color: style += f"color:{color};"
    return svg.replace("<svg ", f'<svg style="{style}" ', 1)

VB64 = base64.b64encode((here / "out" / "fuji.mp4").read_bytes()).decode()

ICONS = {"cal":"calendar-dots","money":"money","backpack":"backpack","cam":"camera",
 "plane":"airplane-tilt","train":"train-simple","bed":"bed","ticket":"ticket",
 "food":"fork-knife","boat":"boat","users":"users","map":"map-trifold",
 "clock":"clock-countdown","sunrise":"sun-horizon","sun":"sun","moon":"moon-stars",
 "plus":"plus-circle","cl":"caret-left","cr":"caret-right","cd":"caret-down"}
def I(k,size="1em",color=None): return icon(ICONS[k],size,color)

HTML = f"""<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Giappone — Fuji al tramonto · tema su tutto il viaggio</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Playfair+Display:ital,wght@0,600;1,600&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
  :root{{--surface:#fff;--ink:#1c1917;--muted:#7d7167;--border:#F0E7DC;--navy:#16264C;
    --accent:#E0485C;--accent-d:#B23147;
    --shadow-sm:0 1px 2px rgba(120,70,30,.06),0 1px 3px rgba(120,70,30,.05);
    --shadow-md:0 6px 18px rgba(120,70,30,.10);--shadow-lg:0 16px 40px rgba(120,70,30,.18);}}
  *{{margin:0;padding:0;box-sizing:border-box;}}
  body{{font-family:'Inter',system-ui,sans-serif;color:var(--ink);
    background:radial-gradient(1100px 600px at 8% -10%,#F6E1D2,transparent 55%),
               radial-gradient(1000px 600px at 112% 6%,#EBD4E0,transparent 50%),#F1EAE0;padding:34px 20px 70px;}}
  .doc-head{{max-width:1240px;margin:0 auto 22px;}}
  .doc-eyebrow{{font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#C2410C;font-weight:700;}}
  .doc-title{{font-family:'Calistoga',serif;font-size:38px;color:var(--navy);margin-top:6px;line-height:1.05;}}
  .doc-sub{{color:var(--muted);font-size:15px;margin-top:10px;max-width:760px;line-height:1.55;}}

  .block{{max-width:1240px;margin:0 auto 26px;background:var(--surface);border:1px solid var(--border);
    border-radius:20px;padding:18px 20px;box-shadow:var(--shadow-md);}}
  .block h4{{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;}}
  .hero-loop{{position:relative;border-radius:18px;overflow:hidden;height:230px;background:#1B1E4D;}}
  .hero-loop video{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}}
  .hero-loop .lbl{{position:absolute;left:24px;bottom:20px;color:#fff;z-index:2;text-shadow:0 2px 14px rgba(0,0,0,.4);}}
  .hero-loop .lbl .ey{{font-size:10px;letter-spacing:3px;text-transform:uppercase;opacity:.9;font-weight:600;}}
  .hero-loop .lbl h2{{font-family:'Playfair Display',serif;font-style:italic;font-size:34px;font-weight:600;margin-top:4px;}}

  .galleria{{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:34px;justify-items:center;align-items:start;}}
  .col-label{{text-align:center;font-weight:700;color:var(--navy);margin-bottom:12px;font-size:15px;}}
  .col-label span{{display:block;font-weight:400;font-size:12px;color:var(--muted);margin-top:2px;}}
  .phone{{width:320px;height:670px;background:#0c0c0e;border-radius:46px;padding:11px;box-shadow:var(--shadow-lg);}}
  .screen{{width:100%;height:100%;border-radius:36px;overflow:hidden;position:relative;background:#FBF6EF;display:flex;flex-direction:column;}}
  .notch{{position:absolute;top:0;left:50%;transform:translateX(-50%);width:120px;height:26px;background:#0c0c0e;border-radius:0 0 16px 16px;z-index:30;}}
  .scroll{{flex:1;overflow:hidden;}}

  /* HOME */
  .pad{{padding:0 16px;}}
  .home-top{{display:flex;justify-content:space-between;align-items:flex-end;padding:46px 2px 16px;}}
  .home-top .hi{{font-size:13px;color:var(--muted);font-weight:500;}}
  .home-top h1{{font-family:'Calistoga',serif;font-size:27px;color:var(--navy);font-weight:400;margin-top:2px;}}
  .home-top .add{{width:44px;height:44px;border-radius:14px;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md);}}
  .sezione{{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#b6a99b;font-weight:700;margin:4px 2px 12px;}}
  .hero{{position:relative;border-radius:26px;overflow:hidden;height:240px;box-shadow:0 18px 40px rgba(60,20,40,.30);margin-bottom:20px;}}
  .hero video{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;}}
  .hero .veil{{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(20,14,34,.12) 0%,rgba(20,14,34,0) 30%,rgba(16,10,28,.72) 100%);}}
  .hero .frame{{position:absolute;inset:0;z-index:3;border-radius:26px;border:1px solid rgba(255,255,255,.16);pointer-events:none;}}
  .hero .accentline{{position:absolute;left:0;bottom:0;height:4px;width:100%;z-index:2;background:linear-gradient(90deg,#E0485C,#FFB13C,#E0485C);}}
  .hero-in{{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:18px 20px;color:#fff;}}
  .hero-row{{display:flex;justify-content:space-between;align-items:flex-start;}}
  .country{{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:6px 12px;font-size:11.5px;font-weight:700;}}
  .count{{display:inline-flex;align-items:center;gap:6px;background:rgba(224,72,92,.95);border-radius:999px;padding:6px 12px;font-size:11.5px;font-weight:700;box-shadow:0 6px 16px rgba(224,72,92,.4);}}
  .hero-bottom .eyebrow{{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.88;font-weight:600;}}
  .hero-bottom h2{{font-family:'Playfair Display',serif;font-style:italic;font-size:30px;font-weight:600;margin:3px 0 7px;text-shadow:0 2px 16px rgba(0,0,0,.4);}}
  .hero-meta .dates{{display:inline-flex;align-items:center;gap:7px;font-size:13px;opacity:.95;font-weight:500;}}
  .hero-cta{{margin-left:auto;width:44px;height:44px;border-radius:50%;background:#fff;color:#B23147;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(0,0,0,.28);}}
  .mini{{display:flex;background:#fff;border:1px solid var(--border);border-radius:20px;overflow:hidden;margin-bottom:12px;box-shadow:var(--shadow-sm);}}
  .mini .scene{{width:92px;flex:none;position:relative;overflow:hidden;}}
  .mini .scene .glyph{{position:absolute;right:-6px;bottom:-8px;color:rgba(255,255,255,.30);}}
  .mini .body{{flex:1;padding:13px 14px;}}
  .mini .body .nm{{font-family:'Calistoga',serif;font-size:16px;color:var(--ink);}}
  .mini .body .dt{{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);margin-top:3px;}}
  .mini .body .cd{{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;margin-top:8px;color:#0E6E92;background:#E6F3F8;border-radius:999px;padding:3px 9px;}}
  .mini .go{{display:flex;align-items:center;padding-right:12px;color:#cdbdae;}}

  /* HEADER in-viaggio: stessa atmosfera, ritaglio su cielo+sole */
  .hdr{{position:relative;overflow:hidden;color:#fff;padding:40px 20px 20px;border-radius:0 0 28px 28px;min-height:158px;}}
  .hdr video{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 16%;z-index:0;}}
  .hdr .scrim{{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(20,14,34,.18) 0%,rgba(20,14,34,0) 40%,rgba(20,14,34,.5) 100%);}}
  .hdr>*:not(video):not(.scrim){{position:relative;z-index:3;}}
  .hdr .eyebrow{{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.85;font-weight:600;}}
  .hdr h1{{font-family:'Playfair Display',serif;font-style:italic;font-size:25px;margin-top:4px;font-weight:600;text-shadow:0 2px 14px rgba(0,0,0,.4);}}
  .hdr .date{{font-size:13px;opacity:.95;margin-top:3px;}}
  .testa-riga{{display:flex;justify-content:space-between;align-items:center;}}
  .btn-ghost{{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.18);color:#fff;border:none;border-radius:999px;padding:8px 13px;font-size:12px;font-weight:600;backdrop-filter:blur(4px);}}
  .badge{{display:inline-flex;align-items:center;gap:7px;margin-top:13px;border-radius:999px;padding:7px 15px;font-size:12.5px;font-weight:700;background:var(--accent);box-shadow:0 6px 16px rgba(224,72,92,.45);}}
  .tabs{{display:flex;gap:6px;padding:14px 14px 4px;}}
  .tab{{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 4px;border-radius:16px;border:1px solid var(--border);background:#fff;color:var(--muted);font-size:10.5px;font-weight:600;box-shadow:var(--shadow-sm);}}
  .tab.attiva{{background:var(--accent-d);border-color:var(--accent-d);color:#fff;}}
  .suggerimento{{font-size:11.5px;color:#b6a99b;text-align:center;margin:10px 0;}}
  .gcard{{background:#fff;border:1px solid var(--border);border-radius:20px;margin:0 14px 11px;box-shadow:var(--shadow-sm);overflow:hidden;}}
  .gcard-testa{{display:flex;align-items:center;justify-content:space-between;padding:14px;}}
  .gcard-info b{{font-family:'Calistoga',serif;font-size:16px;font-weight:400;display:block;}}
  .gcard-info small{{color:var(--muted);font-size:12px;}}
  .gcard-corpo{{padding:0 12px 12px;}}
  .fascia{{display:flex;align-items:center;gap:6px;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#b6a99b;margin:12px 4px 7px;font-weight:600;}}
  .tappa{{display:flex;background:#FFFCF8;border:1px solid #EEE3D7;border-radius:15px;overflow:hidden;margin-bottom:8px;}}
  .tappa .barra{{width:5px;flex:none;}}
  .tappa .iw{{display:flex;align-items:center;padding-left:11px;}}
  .tappa .corpo{{flex:1;padding:10px 11px;}}
  .tappa .meta{{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;font-weight:600;}}
  .tappa .titolo{{font-weight:600;margin-top:2px;font-size:14px;}}
  .tappa .luogo{{font-size:12px;color:var(--muted);margin-top:1px;}}
  .tappa .costo{{width:60px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border-left:1px dashed var(--border);}}
  .aggiungi{{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;margin-top:8px;background:#FFFCF8;border:1.5px dashed #E7C9B5;border-radius:14px;padding:11px;font-weight:600;font-size:13.5px;color:var(--accent);}}
  .card{{background:#fff;border:1px solid var(--border);border-radius:20px;padding:18px;margin:0 14px 13px;box-shadow:var(--shadow-sm);}}
  .card .eyebrow{{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);font-weight:600;}}
  .totale{{text-align:center;}}
  .totale .cifra{{font-family:'Calistoga',serif;font-size:40px;margin:6px 0 2px;color:#3A2350;}}
  .totale .sub{{font-size:12.5px;color:var(--muted);}}
  .card b.tit{{display:flex;align-items:center;gap:7px;font-size:14px;margin-bottom:12px;}}
  .cat{{margin-bottom:11px;}}
  .cat .riga{{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:5px;}}
  .cat .riga .nm{{display:flex;align-items:center;gap:7px;flex:1;}}
  .pista{{height:9px;background:#F3E9DD;border-radius:999px;overflow:hidden;}}
  .pieno{{height:100%;border-radius:999px;}}
  .pieno.acc{{background:linear-gradient(90deg,#E0485C,#FFB13C);}}

  .nota{{max-width:1240px;margin:38px auto 0;background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:22px 26px;box-shadow:var(--shadow-md);}}
  .nota h3{{font-family:'Calistoga',serif;color:var(--navy);font-size:22px;font-weight:400;margin-bottom:12px;}}
  .nota ul{{list-style:none;display:grid;gap:11px;}}
  .nota li{{display:flex;gap:11px;font-size:14px;color:#44403c;line-height:1.5;}}
  .nota li b{{color:var(--ink);}} .nota .d{{width:9px;height:9px;border-radius:50%;flex:none;margin-top:6px;}}
</style></head><body>

<div class="doc-head">
  <div class="doc-eyebrow">Proposta v5 · Giappone — Fuji al tramonto</div>
  <h1 class="doc-title">Un tema che ti accompagna</h1>
  <p class="doc-sub">Scena iconica e cinematografica: Monte Fuji con il sole che tramonta dietro, colori accesi e semplici. Lo stesso tema vive su <b>tutto il viaggio</b> — scena piena sulla card-gateway, stessa atmosfera (ritagliata su cielo e sole) negli header di Itinerario e Budget, accenti vermiglio coerenti ovunque.</p>
</div>

<div class="block">
  <h4>La scena · loop reale Remotion (294 KB, ciclo perfetto)</h4>
  <div class="hero-loop" data-video>
    <div class="lbl"><div class="ey">Giappone</div><h2>Tour del Giappone</h2></div>
  </div>
</div>

<div class="galleria">

  <div>
    <div class="col-label">Home <span>card-gateway · scena piena</span></div>
    <div class="phone"><div class="screen"><div class="notch"></div><div class="scroll pad">
      <div class="home-top"><div><div class="hi">Bentornato, Salvatore</div><h1>I miei viaggi</h1></div><div class="add">{I('plus','24px')}</div></div>
      <div class="sezione">In partenza</div>
      <div class="hero" data-video>
        <div class="veil"></div><div class="accentline"></div><div class="frame"></div>
        <div class="hero-in">
          <div class="hero-row"><span class="country">{I('map','15px')} Giappone</span><span class="count">{I('clock','15px')} 38 giorni</span></div>
          <div class="hero-bottom"><div style="display:flex;align-items:flex-end;">
            <div><div class="eyebrow">Il prossimo viaggio</div><h2>Tour del Giappone</h2>
            <div class="hero-meta"><span class="dates">{I('plane','15px')} 3 — 17 ottobre · 3 viaggiatori</span></div></div>
            <div class="hero-cta">{I('cr','22px')}</div></div></div>
        </div>
      </div>
      <div class="sezione">In programma</div>
      <div class="mini"><div class="scene" style="background:linear-gradient(150deg,#0E5C8A,#39A8CE);"><div class="glyph">{I('boat','52px')}</div></div>
        <div class="body"><div class="nm">Estate nelle Cicladi</div><div class="dt">{I('map','13px')} Grecia · 10 — 18 luglio</div><div class="cd">{I('clock','13px')} tra 4 mesi</div></div>
        <div class="go">{I('cr','20px')}</div></div>
      <div class="mini"><div class="scene" style="background:linear-gradient(150deg,#8a4b1f,#e0a04b);"><div class="glyph">{I('sun','52px')}</div></div>
        <div class="body"><div class="nm">Marocco on the road</div><div class="dt">{I('map','13px')} Marocco · 2 — 12 novembre</div><div class="cd" style="color:#9a5b16;background:#FBEEDD;">{I('clock','13px')} tra 5 mesi</div></div>
        <div class="go">{I('cr','20px')}</div></div>
    </div></div></div>
  </div>

  <div>
    <div class="col-label">Itinerario <span>stessa atmosfera</span></div>
    <div class="phone"><div class="screen"><div class="notch"></div><div class="scroll">
      <div class="hdr" data-video>
        <div class="scrim"></div>
        <div class="testa-riga"><button class="btn-ghost">{I('cl','15px')} Viaggi</button><button class="btn-ghost">{I('map','15px')} Mappa</button></div>
        <div class="eyebrow">Diario di bordo</div><h1>Tour del Giappone</h1><div class="date">3 ottobre — 17 ottobre</div>
        <span class="badge">{I('clock','15px')} Mancano 38 giorni</span>
      </div>
      <div class="tabs"><div class="tab attiva">{I('cal','20px')}Viaggio</div><div class="tab">{I('money','20px')}Budget</div><div class="tab">{I('backpack','20px')}Preparativi</div><div class="tab">{I('cam','20px')}Ricordi</div></div>
      <div class="suggerimento">Tocca un giorno · scorri per le azioni</div>
      <div class="gcard"><div class="gcard-testa"><div class="gcard-info"><b>Giorno 1</b><small>gio 3 ott · 2 attività · € 18</small></div><span style="color:#d6c4b6">{I('cd','20px')}</span></div>
        <div class="gcard-corpo">
          <div class="fascia">{I('sunrise','14px')} Mattina</div>
          <div class="tappa"><div class="barra" style="background:#5E548E"></div><div class="iw" style="color:#5E548E">{I('ticket','18px')}</div><div class="corpo"><div class="meta">Attività · 09:30</div><div class="titolo">Tempio Senso-ji</div><div class="luogo">Asakusa, Tokyo</div></div><div class="costo">Gratis</div></div>
          <div class="fascia">{I('moon','14px')} Sera</div>
          <div class="tappa"><div class="barra" style="background:#C9514C"></div><div class="iw" style="color:#C9514C">{I('food','18px')}</div><div class="corpo"><div class="meta">Ristorante · 20:00</div><div class="titolo">Ramen a Shinjuku</div><div class="luogo">Tokyo</div></div><div class="costo">€ 18</div></div>
          <button class="aggiungi">{I('plus','16px')} Attività in questo giorno</button>
        </div></div>
      <div class="gcard"><div class="gcard-testa"><div class="gcard-info"><b>Giorno 2</b><small>ven 4 ott · giornata libera</small></div><span style="color:#d6c4b6">{I('cr','20px')}</span></div></div>
    </div></div></div>
  </div>

  <div>
    <div class="col-label">Budget <span>stessa identità</span></div>
    <div class="phone"><div class="screen"><div class="notch"></div><div class="scroll">
      <div class="hdr" data-video>
        <div class="scrim"></div>
        <div class="testa-riga"><button class="btn-ghost">{I('cl','15px')} Viaggi</button><button class="btn-ghost">{I('map','15px')} Mappa</button></div>
        <h1>Tour del Giappone</h1><div class="date">3 ottobre — 17 ottobre</div>
      </div>
      <div class="tabs"><div class="tab">{I('cal','20px')}Viaggio</div><div class="tab attiva">{I('money','20px')}Budget</div><div class="tab">{I('backpack','20px')}Preparativi</div><div class="tab">{I('cam','20px')}Ricordi</div></div>
      <div style="height:14px"></div>
      <div class="card totale"><div class="eyebrow">Totale viaggio</div><div class="cifra">€ 3.480</div><div class="sub">≈ ¥ 556.800 in valuta locale</div></div>
      <div class="card"><b class="tit">{I('users','18px','#B23147')} Spese per viaggiatore</b>
        <div class="cat"><div class="riga"><span class="nm">Sara</span><b>€ 1.160</b></div><div class="pista"><div class="pieno acc" style="width:100%"></div></div></div>
        <div class="cat"><div class="riga"><span class="nm">Luca</span><b>€ 1.160</b></div><div class="pista"><div class="pieno acc" style="width:100%"></div></div></div>
        <div class="cat"><div class="riga"><span class="nm">Mia</span><b>€ 1.160</b></div><div class="pista"><div class="pieno acc" style="width:100%"></div></div></div></div>
      <div class="card"><b class="tit">Spese per categoria</b>
        <div class="cat"><div class="riga"><span class="nm">{I('plane','16px','#3D5A80')}Volo</span><b>€ 1.900</b></div><div class="pista"><div class="pieno" style="width:100%;background:#3D5A80"></div></div></div>
        <div class="cat"><div class="riga"><span class="nm">{I('bed','16px','#0891B2')}Hotel</span><b>€ 1.100</b></div><div class="pista"><div class="pieno" style="width:58%;background:#0891B2"></div></div></div></div>
    </div></div></div>
  </div>

</div>

<div class="nota">
  <h3>Il sistema-tema, in breve</h3>
  <ul>
    <li><span class="d" style="background:#E0485C"></span><div><b>Una scena, tutto il viaggio:</b> la card-gateway mostra la scena piena (Fuji + sole); gli header di Itinerario/Budget riusano lo stesso loop ritagliato su cielo e sole. Continuità totale.</div></li>
    <li><span class="d" style="background:#3A2350"></span><div><b>Iconico e semplice:</b> colori accesi da poster (indaco → magenta → arancio), sole vermiglio, Fuji a fianchi concavi. Moto cinematografico discreto (sole che respira, nuvole, uccelli, light-leak, grana).</div></li>
    <li><span class="d" style="background:#16264C"></span><div><b>Accenti coerenti:</b> vermiglio su tab attiva, badge, pulsanti, barre del budget. Titoli in corsivo editoriale (Playfair) per il tono cinematografico.</div></li>
    <li><span class="d" style="background:#D97706"></span><div><b>Prossimi temi:</b> stesso linguaggio per Grecia (Egeo), Marocco (dune), ecc. — ognuno la sua scena, stessa eleganza.</div></li>
  </ul>
</div>

<script>
  var V="data:video/mp4;base64,{VB64}";
  document.querySelectorAll('[data-video]').forEach(function(slot){{
    var v=document.createElement('video');v.src=V;v.autoplay=true;v.loop=true;v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');
    slot.insertBefore(v,slot.firstChild);var pr=v.play();if(pr&&pr.catch){{pr.catch(function(){{}});}}
  }});
</script>
</body></html>"""

out = here.parent / "proposta-fuji-v5.html"
out.write_text(HTML, encoding="utf-8")
print("written", out, round(out.stat().st_size/1024), "KB")
