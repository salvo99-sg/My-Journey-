#!/usr/bin/env python3
import base64, pathlib, re

here = pathlib.Path(__file__).parent
PH = here / "node_modules/@phosphor-icons/core/assets/duotone"

def icon(name, size="1em", color=None):
    svg = (PH / f"{name}-duotone.svg").read_text()
    style = f"width:{size};height:{size};vertical-align:-0.18em;flex:none;"
    if color:
        style += f"color:{color};"
    svg = svg.replace("<svg ", f'<svg style="{style}" ', 1)
    return svg

mp4 = (here / "out" / "oriente.mp4").read_bytes()
VB64 = base64.b64encode(mp4).decode()

ICONS = {
    "cal": "calendar-dots", "money": "money", "backpack": "backpack",
    "cam": "camera", "plane": "airplane-tilt", "train": "train-simple",
    "bed": "bed", "ticket": "ticket", "food": "fork-knife", "boat": "boat",
    "users": "users", "map": "map-trifold", "clock": "clock-countdown",
    "sunrise": "sun-horizon", "sun": "sun", "moon": "moon-stars",
    "plus": "plus-circle", "cl": "caret-left", "cr": "caret-right", "cd": "caret-down",
}
LABELS = {
    "cal": "Viaggio", "money": "Budget", "backpack": "Preparativi", "cam": "Ricordi",
    "plane": "Volo", "train": "Treno", "bed": "Hotel", "ticket": "Attività",
    "food": "Ristorante", "boat": "Traghetto", "users": "Persone", "map": "Mappa",
    "clock": "Countdown", "sunrise": "Mattina", "sun": "Pomeriggio", "moon": "Sera",
}

def I(key, size="1em", color=None):
    return icon(ICONS[key], size, color)

showcase = "".join(
    f'<div class="ico-cell">{I(k,"30px")}<small>{LABELS[k]}</small></div>'
    for k in ["cal","money","backpack","cam","plane","train","bed","ticket","food","boat","users","map","clock","sunrise","sun","moon"]
)

HTML = f"""<!DOCTYPE html>
<html lang="it"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Card per nazione + icone Phosphor</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
  :root{{--surface:#fff;--ink:#1c1917;--muted:#7d7167;--border:#F0E7DC;--navy:#16264C;
    --shadow-sm:0 1px 2px rgba(120,70,30,.06),0 1px 3px rgba(120,70,30,.05);
    --shadow-md:0 6px 18px rgba(120,70,30,.10);--shadow-lg:0 16px 40px rgba(120,70,30,.18);}}
  *{{margin:0;padding:0;box-sizing:border-box;}}
  body{{font-family:'Inter',system-ui,sans-serif;color:var(--ink);
    background:radial-gradient(1100px 600px at 10% -10%,#F4E6D6,transparent 55%),
               radial-gradient(1000px 600px at 112% 6%,#EAD9E4,transparent 50%),#F1EAE0;
    padding:34px 20px 70px;}}
  .doc-head{{max-width:1100px;margin:0 auto 24px;}}
  .doc-eyebrow{{font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#C2410C;font-weight:700;}}
  .doc-title{{font-family:'Calistoga',serif;font-size:38px;color:var(--navy);margin-top:6px;line-height:1.05;}}
  .doc-sub{{color:var(--muted);font-size:15px;margin-top:10px;max-width:720px;line-height:1.55;}}
  .block{{max-width:1100px;margin:0 auto 26px;background:var(--surface);border:1px solid var(--border);
    border-radius:20px;padding:18px 20px;box-shadow:var(--shadow-md);}}
  .block h4{{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;}}
  .ico-grid{{display:flex;flex-wrap:wrap;gap:16px;}}
  .ico-cell{{display:flex;flex-direction:column;align-items:center;gap:7px;width:80px;color:var(--navy);}}
  .ico-cell small{{font-size:10.5px;color:var(--muted);font-weight:600;}}
  .ico-cell .compare{{color:#B23147;}}

  .galleria{{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:40px;justify-items:center;align-items:start;}}
  .col-label{{text-align:center;font-weight:700;color:var(--navy);margin-bottom:12px;font-size:15px;}}
  .col-label span{{display:block;font-weight:400;font-size:12px;color:var(--muted);margin-top:2px;}}

  .phone{{width:340px;height:710px;background:#0c0c0e;border-radius:46px;padding:11px;box-shadow:var(--shadow-lg);}}
  .screen{{width:100%;height:100%;border-radius:36px;overflow:hidden;position:relative;background:#FBF6EF;display:flex;flex-direction:column;}}
  .notch{{position:absolute;top:0;left:50%;transform:translateX(-50%);width:120px;height:26px;background:#0c0c0e;border-radius:0 0 16px 16px;z-index:30;}}
  .scroll{{flex:1;overflow:hidden;padding:0 16px;}}

  .home-top{{display:flex;justify-content:space-between;align-items:flex-end;padding:46px 2px 18px;}}
  .home-top .hi{{font-size:13px;color:var(--muted);font-weight:500;}}
  .home-top h1{{font-family:'Calistoga',serif;font-size:28px;color:var(--navy);font-weight:400;margin-top:2px;}}
  .home-top .add{{width:44px;height:44px;border-radius:14px;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md);}}
  .sezione{{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#b6a99b;font-weight:700;margin:6px 2px 12px;}}

  /* ===== HERO CARD — gateway cinematografica al tema (per nazione) ===== */
  .hero{{position:relative;border-radius:26px;overflow:hidden;height:230px;box-shadow:0 18px 40px rgba(60,20,40,.30);margin-bottom:22px;}}
  .hero video{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;}}
  .hero .veil{{position:absolute;inset:0;z-index:1;background:
      linear-gradient(180deg,rgba(20,14,34,.18) 0%,rgba(20,14,34,0) 28%,rgba(20,14,34,.30) 60%,rgba(16,10,28,.78) 100%);}}
  .hero .frame{{position:absolute;inset:0;z-index:3;border-radius:26px;border:1px solid rgba(255,255,255,.16);pointer-events:none;}}
  .hero>*:not(video):not(.veil){{position:relative;z-index:2;}}
  .hero-in{{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:18px 20px;color:#fff;}}
  .hero-row{{display:flex;justify-content:space-between;align-items:flex-start;}}
  .country{{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);
    border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:6px 12px;font-size:11.5px;font-weight:700;letter-spacing:.3px;}}
  .count{{display:inline-flex;align-items:center;gap:6px;background:rgba(224,72,92,.92);border-radius:999px;
    padding:6px 12px;font-size:11.5px;font-weight:700;box-shadow:0 6px 16px rgba(224,72,92,.4);}}
  .hero-bottom .eyebrow{{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.85;font-weight:600;}}
  .hero-bottom h2{{font-family:'Calistoga',serif;font-size:30px;font-weight:400;margin:3px 0 7px;text-shadow:0 2px 16px rgba(0,0,0,.35);}}
  .hero-meta{{display:flex;align-items:center;gap:8px;}}
  .hero-meta .dates{{display:inline-flex;align-items:center;gap:7px;font-size:13px;opacity:.95;font-weight:500;}}
  .hero-cta{{margin-left:auto;width:42px;height:42px;border-radius:50%;background:#fff;color:#3A2350;
    display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(0,0,0,.28);}}
  .accentline{{position:absolute;left:0;bottom:0;height:4px;width:100%;z-index:2;
    background:linear-gradient(90deg,#E0485C,#FF9A6B,#E0485C);}}

  /* ===== MINI CARD — viaggi successivi, sobri ed eleganti ===== */
  .mini{{display:flex;align-items:stretch;background:#fff;border:1px solid var(--border);border-radius:20px;
    overflow:hidden;margin-bottom:12px;box-shadow:var(--shadow-sm);}}
  .mini .scene{{width:96px;flex:none;position:relative;overflow:hidden;}}
  .mini .scene .glyph{{position:absolute;right:-6px;bottom:-6px;color:rgba(255,255,255,.30);}}
  .mini .body{{flex:1;padding:13px 14px;display:flex;flex-direction:column;justify-content:center;}}
  .mini .body .nm{{font-family:'Calistoga',serif;font-size:17px;color:var(--ink);font-weight:400;}}
  .mini .body .dt{{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);margin-top:3px;}}
  .mini .body .cd{{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;margin-top:8px;
    color:#0E6E92;background:#E6F3F8;border-radius:999px;padding:3px 9px;width:fit-content;}}
  .mini .go{{display:flex;align-items:center;padding-right:12px;color:#cdbdae;}}

  .nota{{max-width:1100px;margin:36px auto 0;background:var(--surface);border:1px solid var(--border);
    border-radius:20px;padding:22px 26px;box-shadow:var(--shadow-md);}}
  .nota h3{{font-family:'Calistoga',serif;color:var(--navy);font-size:22px;font-weight:400;margin-bottom:12px;}}
  .nota ul{{list-style:none;display:grid;gap:11px;}}
  .nota li{{display:flex;gap:11px;font-size:14px;color:#44403c;line-height:1.5;}}
  .nota li b{{color:var(--ink);}}
  .nota .d{{width:9px;height:9px;border-radius:50%;flex:none;margin-top:6px;}}
</style></head><body>

<div class="doc-head">
  <div class="doc-eyebrow">Proposta v4 · La card-gateway per nazione + icone Phosphor</div>
  <h1 class="doc-title">L'ingresso al viaggio</h1>
  <p class="doc-sub">La card del viaggio imminente diventa una <b>soglia cinematografica</b>: la scena del tema (qui Giappone) vive dentro la card, con tipografia curata, paese e countdown. Elaborata ma con impronta semplice ed elegante. I viaggi successivi restano card sobrie. Icone rifatte con <b>Phosphor duotone</b> (inline, leggibili ovunque).</p>
</div>

<div class="block">
  <h4>Icone · Phosphor duotone, inline (niente più quadrati neri), ogni metafora chiara</h4>
  <div class="ico-grid">{showcase}</div>
</div>

<div class="galleria">
  <div>
    <div class="col-label">Home · lista viaggi <span>la card-gateway in contesto</span></div>
    <div class="phone"><div class="screen"><div class="notch"></div><div class="scroll">
      <div class="home-top">
        <div><div class="hi">Bentornato, Salvatore</div><h1>I miei viaggi</h1></div>
        <div class="add">{I('plus','24px')}</div>
      </div>
      <div class="sezione">In partenza</div>

      <div class="hero" data-video>
        <div class="veil"></div>
        <div class="accentline"></div>
        <div class="frame"></div>
        <div class="hero-in">
          <div class="hero-row">
            <span class="country">{I('map','15px')} Giappone</span>
            <span class="count">{I('clock','15px')} 38 giorni</span>
          </div>
          <div class="hero-bottom">
            <div style="display:flex;align-items:flex-end;">
              <div>
                <div class="eyebrow">Il prossimo viaggio</div>
                <h2>Tour del Giappone</h2>
                <div class="hero-meta"><span class="dates">{I('plane','15px')} 3 — 17 ottobre · 3 viaggiatori</span></div>
              </div>
              <div class="hero-cta">{I('cr','22px')}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="sezione">In programma</div>

      <div class="mini">
        <div class="scene" style="background:linear-gradient(150deg,#0E5C8A,#39A8CE);">
          <div class="glyph">{I('boat','54px')}</div>
        </div>
        <div class="body">
          <div class="nm">Estate nelle Cicladi</div>
          <div class="dt">{I('map','13px')} Grecia · 10 — 18 luglio</div>
          <div class="cd">{I('clock','13px')} tra 4 mesi</div>
        </div>
        <div class="go">{I('cr','20px')}</div>
      </div>

      <div class="mini">
        <div class="scene" style="background:linear-gradient(150deg,#8a4b1f,#e0a04b);">
          <div class="glyph">{I('sun','54px')}</div>
        </div>
        <div class="body">
          <div class="nm">Marocco on the road</div>
          <div class="dt">{I('map','13px')} Marocco · 2 — 12 novembre</div>
          <div class="cd" style="color:#9a5b16;background:#FBEEDD;">{I('clock','13px')} tra 5 mesi</div>
        </div>
        <div class="go">{I('cr','20px')}</div>
      </div>

    </div></div></div>
  </div>

  <div>
    <div class="col-label">La card-gateway · da vicino <span>elaborata ma elegante</span></div>
    <div style="width:340px;">
      <div class="hero" data-video style="height:300px;border-radius:28px;">
        <div class="veil"></div>
        <div class="accentline"></div>
        <div class="frame"></div>
        <div class="hero-in" style="padding:22px 24px;">
          <div class="hero-row">
            <span class="country">{I('map','15px')} Giappone</span>
            <span class="count">{I('clock','15px')} 38 giorni</span>
          </div>
          <div class="hero-bottom">
            <div style="display:flex;align-items:flex-end;">
              <div>
                <div class="eyebrow">Il prossimo viaggio</div>
                <h2 style="font-size:34px;">Tour del Giappone</h2>
                <div class="hero-meta"><span class="dates">{I('plane','15px')} 3 — 17 ottobre · 3 viaggiatori</span></div>
              </div>
              <div class="hero-cta" style="width:48px;height:48px;">{I('cr','24px')}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="font-size:12.5px;color:#7d7167;margin-top:14px;line-height:1.5;">
        La scena del tema (loop video Remotion) vive dentro la card. Per la Grecia, il Marocco, ecc. ogni nazione avrà la sua scena: mare egeo, dune al tramonto… stesso linguaggio, stessa eleganza.
      </div>
    </div>
  </div>
</div>

<div class="nota">
  <h3>Direzione di questo elemento</h3>
  <ul>
    <li><span class="d" style="background:#E0485C"></span><div><b>La card È il tema:</b> non un'anteprima qualsiasi, ma una soglia che ti fa già sentire nella nazione. Scena viva, velatura per leggibilità, filo d'accento, cornice sottile, CTA tonda per "entrare".</div></li>
    <li><span class="d" style="background:#16264C"></span><div><b>Gerarchia:</b> solo il viaggio imminente prende il trattamento cinematografico; gli altri restano mini-card sobrie (pannello colore + glyph del tema). Niente affollamento.</div></li>
    <li><span class="d" style="background:#0891B2"></span><div><b>Icone risolte:</b> Phosphor duotone inline. Leggibili a ogni dimensione, ognuna riconoscibile.</div></li>
    <li><span class="d" style="background:#D97706"></span><div><b>Dimmi tu:</b> è questa la "card per nazione" che intendevi? E il livello di "elaborato" è giusto, o la vuoi ancora più ricca (es. parallax al tocco, micro-dettagli del paese)?</div></li>
  </ul>
</div>

<script>
  var V="data:video/mp4;base64,{VB64}";
  document.querySelectorAll('[data-video]').forEach(function(slot){{
    var v=document.createElement('video');
    v.src=V;v.autoplay=true;v.loop=true;v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');
    slot.insertBefore(v,slot.firstChild);
    var pr=v.play();if(pr&&pr.catch){{pr.catch(function(){{}});}}
  }});
</script>
</body></html>
"""

out = here.parent / "proposta-card-v4.html"
out.write_text(HTML, encoding="utf-8")
print("written", out, round(out.stat().st_size/1024), "KB")
