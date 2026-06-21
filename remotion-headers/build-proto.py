#!/usr/bin/env python3
import base64, pathlib
here = pathlib.Path(__file__).parent
PH = here / "node_modules/@phosphor-icons/core/assets/duotone"
def icon(name, size="1em", color=None):
    svg = (PH / f"{name}-duotone.svg").read_text()
    st = f"width:{size};height:{size};vertical-align:-0.18em;flex:none;"
    if color: st += f"color:{color};"
    return svg.replace("<svg ", f'<svg style="{st}" ', 1)
VB64 = base64.b64encode((here / "out" / "giappone-art.mp4").read_bytes()).decode()
ICONS = {"cal":"calendar-dots","money":"money","backpack":"backpack","cam":"camera",
 "plane":"airplane-tilt","train":"train-simple","bed":"bed","ticket":"ticket",
 "food":"fork-knife","boat":"boat","users":"users","map":"map-trifold",
 "clock":"clock-countdown","sunrise":"sun-horizon","sun":"sun","moon":"moon-stars",
 "plus":"plus-circle","cl":"caret-left","cr":"caret-right","cd":"caret-down",
 "check":"check-circle","circle":"circle","cart":"shopping-bag","doc":"identification-card",
 "pin":"map-pin","heart":"heart"}
def I(k,size="1em",color=None): return icon(ICONS[k],size,color)

HTML=f"""<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Agenda Viaggi — prototipo animato</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Playfair+Display:ital,wght@0,600;1,600&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
  :root{{--ink:#1c1917;--muted:#7d7167;--border:#F0E7DC;--navy:#16264C;
    --accent:#E0566A;--accent-d:#C23A55;--bg:#FBF6EF;
    --e:cubic-bezier(.2,.8,.2,1);
    --sm:0 1px 2px rgba(120,70,30,.06),0 1px 3px rgba(120,70,30,.05);
    --md:0 6px 18px rgba(120,70,30,.10);--lg:0 16px 40px rgba(120,70,30,.18);}}
  *{{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}}
  body{{font-family:'Inter',system-ui,sans-serif;color:var(--ink);min-height:100vh;
    display:flex;flex-direction:column;align-items:center;gap:16px;padding:30px 16px 50px;
    background:radial-gradient(1000px 600px at 12% -10%,#F6E1D2,transparent 55%),
               radial-gradient(900px 600px at 110% 8%,#EBD4E0,transparent 50%),#EFE7DC;}}
  .tip{{font-size:13px;color:#9a8d7f;font-weight:500;}}
  .tip b{{color:var(--accent-d);}}

  .phone{{width:360px;height:760px;background:#0c0c0e;border-radius:50px;padding:12px;box-shadow:var(--lg);flex:none;}}
  .screen{{position:relative;width:100%;height:100%;border-radius:38px;overflow:hidden;background:var(--bg);}}
  .notch{{position:absolute;top:0;left:50%;transform:translateX(-50%);width:128px;height:28px;background:#0c0c0e;border-radius:0 0 18px 18px;z-index:60;}}
  .status{{position:absolute;top:0;left:0;right:0;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 26px;font-size:12px;font-weight:700;color:#fff;z-index:55;mix-blend-mode:difference;}}

  .view{{position:absolute;inset:0;display:flex;flex-direction:column;background:var(--bg);transition:transform .44s var(--e),opacity .44s var(--e);will-change:transform;}}
  #home{{z-index:1;}}
  #home.back{{transform:translateX(-22%) scale(.96);opacity:.5;filter:saturate(.8);}}
  #trip{{z-index:2;transform:translateX(100%);box-shadow:-12px 0 30px rgba(0,0,0,.18);}}
  #trip.open{{transform:translateX(0);}}
  .press{{transition:transform .12s ease;cursor:pointer;}}
  .press:active{{transform:scale(.97);}}

  /* ---------- HOME ---------- */
  .h-scroll{{flex:1;overflow-y:auto;padding:0 16px 24px;}}
  .h-top{{display:flex;justify-content:space-between;align-items:flex-end;padding:56px 2px 14px;}}
  .h-top .hi{{font-size:13px;color:var(--muted);font-weight:500;}}
  .h-top h1{{font-family:'Calistoga',serif;font-size:27px;color:var(--navy);font-weight:400;margin-top:2px;}}
  .h-add{{width:46px;height:46px;border-radius:15px;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--md);}}
  .sez{{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#b6a99b;font-weight:700;margin:6px 2px 12px;}}

  .gate{{position:relative;border-radius:26px;overflow:hidden;height:248px;box-shadow:0 18px 40px rgba(70,25,45,.32);margin-bottom:22px;}}
  .gate video{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;}}
  .gate .veil{{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(25,12,28,.10) 0%,rgba(25,12,28,0) 30%,rgba(20,8,26,.74) 100%);}}
  .gate .frame{{position:absolute;inset:0;z-index:3;border-radius:26px;border:1px solid rgba(255,255,255,.18);pointer-events:none;}}
  .gate .accl{{position:absolute;left:0;bottom:0;height:4px;width:100%;z-index:2;background:linear-gradient(90deg,#E0566A,#FFB48A,#E0566A);}}
  .gate .in{{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:18px 20px;color:#fff;}}
  .g-row{{display:flex;justify-content:space-between;align-items:flex-start;}}
  .chip{{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.18);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.24);border-radius:999px;padding:6px 12px;font-size:11.5px;font-weight:700;}}
  .chip.warm{{background:rgba(224,86,106,.95);border:none;box-shadow:0 6px 16px rgba(224,86,106,.4);}}
  .g-eye{{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.9;font-weight:600;}}
  .g-name{{font-family:'Playfair Display',serif;font-style:italic;font-size:31px;font-weight:600;margin:3px 0 7px;text-shadow:0 2px 16px rgba(0,0,0,.4);}}
  .g-meta{{display:flex;align-items:center;gap:7px;font-size:13px;opacity:.95;font-weight:500;}}
  .g-cta{{margin-left:auto;width:46px;height:46px;border-radius:50%;background:#fff;color:var(--accent-d);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(0,0,0,.3);}}
  .pulse{{animation:pulse 2.2s var(--e) infinite;}}
  @keyframes pulse{{0%,100%{{box-shadow:0 8px 18px rgba(0,0,0,.3),0 0 0 0 rgba(255,255,255,.5);}}50%{{box-shadow:0 8px 18px rgba(0,0,0,.3),0 0 0 10px rgba(255,255,255,0);}}}}

  .mini{{display:flex;background:#fff;border:1px solid var(--border);border-radius:20px;overflow:hidden;margin-bottom:12px;box-shadow:var(--sm);}}
  .mini .sc{{width:96px;flex:none;position:relative;overflow:hidden;}}
  .mini .sc .gl{{position:absolute;right:-6px;bottom:-8px;color:rgba(255,255,255,.32);}}
  .mini .bd{{flex:1;padding:13px 14px;}}
  .mini .nm{{font-family:'Calistoga',serif;font-size:16px;}}
  .mini .dt{{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);margin-top:3px;}}
  .mini .cd{{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;margin-top:8px;color:#0E6E92;background:#E6F3F8;border-radius:999px;padding:3px 9px;}}
  .mini .go{{display:flex;align-items:center;padding-right:12px;color:#cdbdae;}}

  /* ---------- TRIP ---------- */
  .hdr{{position:relative;overflow:hidden;color:#fff;padding:52px 18px 16px;flex:none;}}
  .hdr video{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 24%;z-index:0;}}
  .hdr .scrim{{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(20,8,26,.30) 0%,rgba(20,8,26,0) 42%,rgba(20,8,26,.55) 100%);}}
  .hdr>*:not(video):not(.scrim){{position:relative;z-index:3;}}
  .t-row{{display:flex;justify-content:space-between;align-items:center;}}
  .gbtn{{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.2);color:#fff;border:none;border-radius:999px;padding:8px 13px;font-size:12px;font-weight:600;backdrop-filter:blur(4px);}}
  .h-eye{{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;opacity:.85;font-weight:600;margin-top:12px;}}
  .h-name{{font-family:'Playfair Display',serif;font-style:italic;font-size:26px;margin-top:3px;font-weight:600;text-shadow:0 2px 14px rgba(0,0,0,.4);}}
  .h-date{{font-size:13px;opacity:.95;margin-top:2px;}}
  .h-badge{{display:inline-flex;align-items:center;gap:7px;margin-top:12px;border-radius:999px;padding:7px 14px;font-size:12.5px;font-weight:700;background:var(--accent);box-shadow:0 6px 16px rgba(224,86,106,.45);}}

  .tabs{{display:flex;gap:6px;padding:12px 12px 6px;flex:none;background:var(--bg);}}
  .tab{{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 2px;border-radius:15px;border:1px solid var(--border);background:#fff;color:var(--muted);font-size:10px;font-weight:600;box-shadow:var(--sm);transition:all .2s var(--e);}}
  .tab.on{{background:var(--accent-d);border-color:var(--accent-d);color:#fff;}}
  .panes{{flex:1;overflow-y:auto;padding:4px 14px 28px;position:relative;}}
  .pane{{display:none;animation:fade .32s var(--e);}}
  .pane.on{{display:block;}}
  @keyframes fade{{from{{opacity:0;transform:translateY(8px);}}to{{opacity:1;transform:none;}}}}

  .sugg{{font-size:11.5px;color:#b6a99b;text-align:center;margin:8px 0 12px;}}
  .day{{background:#fff;border:1px solid var(--border);border-radius:18px;margin-bottom:11px;box-shadow:var(--sm);overflow:hidden;}}
  .day-h{{display:flex;align-items:center;justify-content:space-between;padding:14px;cursor:pointer;}}
  .day-h b{{font-family:'Calistoga',serif;font-size:15px;font-weight:400;display:block;}}
  .day-h small{{color:var(--muted);font-size:12px;}}
  .day-h .cv{{color:#d6c4b6;transition:transform .3s var(--e);}}
  .day.open .day-h .cv{{transform:rotate(90deg);}}
  .day-b{{max-height:0;overflow:hidden;transition:max-height .42s var(--e);}}
  .day.open .day-b{{max-height:420px;}}
  .day-bi{{padding:0 12px 12px;}}
  .fascia{{display:flex;align-items:center;gap:6px;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#b6a99b;margin:10px 4px 7px;font-weight:600;}}
  .tap{{display:flex;background:#FFFCF8;border:1px solid #EEE3D7;border-radius:14px;overflow:hidden;margin-bottom:8px;}}
  .tap .ba{{width:5px;flex:none;}} .tap .iw{{display:flex;align-items:center;padding-left:11px;}}
  .tap .co{{flex:1;padding:10px 11px;}} .tap .me{{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;font-weight:600;}}
  .tap .ti{{font-weight:600;margin-top:2px;font-size:14px;}} .tap .lu{{font-size:12px;color:var(--muted);margin-top:1px;}}
  .tap .cs{{width:58px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border-left:1px dashed var(--border);}}
  .addq{{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;margin-top:6px;background:#FFFCF8;border:1.5px dashed #E7C9B5;border-radius:13px;padding:11px;font-weight:600;font-size:13.5px;color:var(--accent-d);}}

  .card{{background:#fff;border:1px solid var(--border);border-radius:18px;padding:18px;margin-bottom:12px;box-shadow:var(--sm);}}
  .card .eye{{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);font-weight:600;}}
  .tot{{text-align:center;}} .tot .cf{{font-family:'Calistoga',serif;font-size:40px;margin:6px 0 2px;color:#7a2342;}} .tot .sb{{font-size:12.5px;color:var(--muted);}}
  .card b.tt{{display:flex;align-items:center;gap:7px;font-size:14px;margin-bottom:12px;}}
  .cat{{margin-bottom:11px;}} .cat .rg{{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:5px;}}
  .cat .nm{{display:flex;align-items:center;gap:7px;flex:1;}}
  .pista{{height:9px;background:#F3E9DD;border-radius:999px;overflow:hidden;}}
  .pieno{{height:100%;border-radius:999px;width:0;transition:width 1s var(--e);}}
  .pieno.acc{{background:linear-gradient(90deg,#E0566A,#FFB48A);}}

  .chk{{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--border);border-radius:14px;padding:13px 14px;margin-bottom:9px;box-shadow:var(--sm);cursor:pointer;}}
  .chk .ic{{color:#cdbdae;display:flex;transition:color .2s;}}
  .chk .tx{{font-size:14px;font-weight:500;transition:.2s;}}
  .chk.done .ic{{color:var(--accent);}}
  .chk.done .tx{{color:#b6a99b;text-decoration:line-through;}}
  .chk-h{{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#b6a99b;font-weight:700;margin:10px 2px 10px;}}

  .empty{{text-align:center;padding:50px 20px;color:#b6a99b;}}
  .empty .bi{{width:72px;height:72px;border-radius:50%;background:#fff;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;color:var(--accent);box-shadow:var(--sm);}}
  .empty h4{{font-family:'Calistoga',serif;color:var(--navy);font-size:18px;font-weight:400;margin-bottom:6px;}}
  .empty p{{font-size:13px;line-height:1.5;}}
  .grid{{display:grid;grid-template-columns:1fr 1fr;gap:10px;}}
  .ph{{aspect-ratio:1;border-radius:14px;background:linear-gradient(150deg,#f3d9c8,#e8c0d0);box-shadow:var(--sm);}}
</style></head><body>
<div class="tip">Prototipo cliccabile · tocca <b>la card del Giappone</b> per entrare, naviga le tab, apri i giorni, spunta i preparativi</div>

<div class="phone"><div class="screen"><div class="notch"></div>
  <div class="status"><span>9:41</span><span>5G&nbsp;&nbsp;100%</span></div>

  <!-- HOME -->
  <div class="view" id="home">
    <div class="h-scroll">
      <div class="h-top"><div><div class="hi">Bentornato, Salvatore</div><h1>I miei viaggi</h1></div><div class="h-add press">{I('plus','24px')}</div></div>
      <div class="sez">In partenza</div>
      <div class="gate press" onclick="openTrip()" data-video>
        <div class="veil"></div><div class="accl"></div><div class="frame"></div>
        <div class="in">
          <div class="g-row"><span class="chip">{I('map','15px')} Giappone</span><span class="chip warm">{I('clock','15px')} 38 giorni</span></div>
          <div><div style="display:flex;align-items:flex-end;">
            <div><div class="g-eye">Il prossimo viaggio</div><div class="g-name">Tour del Giappone</div>
              <div class="g-meta">{I('plane','15px')} 3 — 17 ottobre · 3 viaggiatori</div></div>
            <div class="g-cta pulse">{I('cr','22px')}</div></div></div>
        </div>
      </div>
      <div class="sez">In programma</div>
      <div class="mini press"><div class="sc" style="background:linear-gradient(150deg,#0E5C8A,#39A8CE)"><div class="gl">{I('boat','52px')}</div></div>
        <div class="bd"><div class="nm">Estate nelle Cicladi</div><div class="dt">{I('map','13px')} Grecia · 10 — 18 luglio</div><div class="cd">{I('clock','13px')} tra 4 mesi</div></div><div class="go">{I('cr','20px')}</div></div>
      <div class="mini press"><div class="sc" style="background:linear-gradient(150deg,#8a4b1f,#e0a04b)"><div class="gl">{I('sun','52px')}</div></div>
        <div class="bd"><div class="nm">Marocco on the road</div><div class="dt">{I('map','13px')} Marocco · 2 — 12 novembre</div><div class="cd" style="color:#9a5b16;background:#FBEEDD">{I('clock','13px')} tra 5 mesi</div></div><div class="go">{I('cr','20px')}</div></div>
    </div>
  </div>

  <!-- TRIP -->
  <div class="view" id="trip">
    <div class="hdr" data-video>
      <div class="scrim"></div>
      <div class="t-row"><button class="gbtn press" onclick="closeTrip()">{I('cl','15px')} Viaggi</button><button class="gbtn press">{I('map','15px')} Mappa</button></div>
      <div class="h-eye">Diario di bordo</div><div class="h-name">Tour del Giappone</div><div class="h-date">3 ottobre — 17 ottobre</div>
      <span class="h-badge">{I('clock','15px')} Mancano 38 giorni</span>
    </div>
    <div class="tabs">
      <div class="tab on" data-tab="v">{I('cal','20px')}Viaggio</div>
      <div class="tab" data-tab="b">{I('money','20px')}Budget</div>
      <div class="tab" data-tab="p">{I('backpack','20px')}Preparativi</div>
      <div class="tab" data-tab="r">{I('cam','20px')}Ricordi</div>
    </div>
    <div class="panes">
      <!-- VIAGGIO -->
      <div class="pane on" data-pane="v">
        <div class="sugg">Tocca un giorno per aprirlo</div>
        <div class="day open"><div class="day-h"><div><b>Giorno 1</b><small>gio 3 ott · 2 attività · € 18</small></div><span class="cv">{I('cr','20px')}</span></div>
          <div class="day-b"><div class="day-bi">
            <div class="fascia">{I('sunrise','14px')} Mattina</div>
            <div class="tap"><div class="ba" style="background:#5E548E"></div><div class="iw" style="color:#5E548E">{I('ticket','18px')}</div><div class="co"><div class="me">Attività · 09:30</div><div class="ti">Tempio Senso-ji</div><div class="lu">Asakusa, Tokyo</div></div><div class="cs">Gratis</div></div>
            <div class="fascia">{I('moon','14px')} Sera</div>
            <div class="tap"><div class="ba" style="background:#C9514C"></div><div class="iw" style="color:#C9514C">{I('food','18px')}</div><div class="co"><div class="me">Ristorante · 20:00</div><div class="ti">Ramen a Shinjuku</div><div class="lu">Tokyo</div></div><div class="cs">€ 18</div></div>
            <button class="addq press">{I('plus','16px')} Attività in questo giorno</button>
          </div></div></div>
        <div class="day"><div class="day-h"><div><b>Giorno 2</b><small>ven 4 ott · 1 attività · € 45</small></div><span class="cv">{I('cr','20px')}</span></div>
          <div class="day-b"><div class="day-bi">
            <div class="fascia">{I('sun','14px')} Pomeriggio</div>
            <div class="tap"><div class="ba" style="background:#3D7A55"></div><div class="iw" style="color:#3D7A55">{I('train','18px')}</div><div class="co"><div class="me">Spostamento · 14:00</div><div class="ti">Shinkansen per Kyoto</div><div class="lu">Tokyo → Kyoto</div></div><div class="cs">€ 45</div></div>
            <button class="addq press">{I('plus','16px')} Attività in questo giorno</button>
          </div></div></div>
        <div class="day"><div class="day-h"><div><b>Giorno 3</b><small>sab 5 ott · giornata libera</small></div><span class="cv">{I('cr','20px')}</span></div>
          <div class="day-b"><div class="day-bi"><button class="addq press" style="margin-top:12px">{I('plus','16px')} Aggiungi la prima attività</button></div></div></div>
      </div>
      <!-- BUDGET -->
      <div class="pane" data-pane="b">
        <div class="card tot"><div class="eye">Totale viaggio</div><div class="cf">€ 3.480</div><div class="sb">≈ ¥ 556.800 in valuta locale</div></div>
        <div class="card"><b class="tt">{I('users','18px','#C23A55')} Spese per viaggiatore</b>
          <div class="cat"><div class="rg"><span class="nm">Sara</span><b>€ 1.160</b></div><div class="pista"><div class="pieno acc" data-w="100"></div></div></div>
          <div class="cat"><div class="rg"><span class="nm">Luca</span><b>€ 1.160</b></div><div class="pista"><div class="pieno acc" data-w="100"></div></div></div>
          <div class="cat"><div class="rg"><span class="nm">Mia</span><b>€ 1.160</b></div><div class="pista"><div class="pieno acc" data-w="100"></div></div></div></div>
        <div class="card"><b class="tt">Spese per categoria</b>
          <div class="cat"><div class="rg"><span class="nm">{I('plane','16px','#3D5A80')}Volo</span><b>€ 1.900</b></div><div class="pista"><div class="pieno" data-w="100" style="background:#3D5A80"></div></div></div>
          <div class="cat"><div class="rg"><span class="nm">{I('bed','16px','#0891B2')}Hotel</span><b>€ 1.100</b></div><div class="pista"><div class="pieno" data-w="58" style="background:#0891B2"></div></div></div>
          <div class="cat"><div class="rg"><span class="nm">{I('food','16px','#C9514C')}Ristoranti</span><b>€ 320</b></div><div class="pista"><div class="pieno" data-w="17" style="background:#C9514C"></div></div></div>
          <div class="cat"><div class="rg"><span class="nm">{I('train','16px','#3D7A55')}Trasporti</span><b>€ 160</b></div><div class="pista"><div class="pieno" data-w="9" style="background:#3D7A55"></div></div></div></div>
      </div>
      <!-- PREPARATIVI -->
      <div class="pane" data-pane="p">
        <div class="chk-h">Documenti</div>
        <div class="chk press"><span class="ic">{I('circle','24px')}</span><span class="tx">Passaporto valido</span></div>
        <div class="chk done press"><span class="ic">{I('check','24px')}</span><span class="tx">Volo prenotato</span></div>
        <div class="chk press"><span class="ic">{I('circle','24px')}</span><span class="tx">Japan Rail Pass</span></div>
        <div class="chk-h">Valigia</div>
        <div class="chk press"><span class="ic">{I('circle','24px')}</span><span class="tx">Adattatore di corrente</span></div>
        <div class="chk done press"><span class="ic">{I('check','24px')}</span><span class="tx">Scarpe comode</span></div>
        <div class="chk press"><span class="ic">{I('circle','24px')}</span><span class="tx">Power bank</span></div>
      </div>
      <!-- RICORDI -->
      <div class="pane" data-pane="r">
        <div class="empty"><div class="bi">{I('cam','34px')}</div><h4>I ricordi del viaggio</h4><p>Le foto e gli appunti appariranno qui<br/>durante e dopo il viaggio.</p></div>
        <div class="grid"><div class="ph"></div><div class="ph"></div><div class="ph"></div><div class="ph"></div></div>
      </div>
    </div>
  </div>

</div></div>

<script>
  var V="data:video/mp4;base64,{VB64}";
  document.querySelectorAll('[data-video]').forEach(function(s){{
    var v=document.createElement('video');v.src=V;v.autoplay=v.loop=v.muted=v.playsInline=true;v.setAttribute('playsinline','');
    s.insertBefore(v,s.firstChild);var p=v.play();if(p&&p.catch)p.catch(function(){{}});
  }});
  function fillBars(){{document.querySelectorAll('#trip .pieno').forEach(function(b){{setTimeout(function(){{b.style.width=b.dataset.w+'%';}},120);}});}}
  function openTrip(){{document.getElementById('trip').classList.add('open');document.getElementById('home').classList.add('back');fillBars();}}
  function closeTrip(){{document.getElementById('trip').classList.remove('open');document.getElementById('home').classList.remove('back');}}
  document.querySelectorAll('.tab').forEach(function(t){{t.onclick=function(){{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));t.classList.add('on');
    var id=t.dataset.tab;document.querySelectorAll('.pane').forEach(p=>p.classList.toggle('on',p.dataset.pane===id));
    if(id==='b')fillBars();
  }};}});
  document.querySelectorAll('.day-h').forEach(function(h){{h.onclick=function(){{h.parentElement.classList.toggle('open');}};}});
  document.querySelectorAll('.chk').forEach(function(c){{c.onclick=function(){{
    c.classList.toggle('done');var i=c.querySelector('.ic');
    i.innerHTML=c.classList.contains('done')?`{I('check','24px')}`:`{I('circle','24px')}`;
  }};}});
</script>
</body></html>"""
out = here.parent / "prototipo-app.html"
out.write_text(HTML, encoding="utf-8")
print("written", out, round(out.stat().st_size/1024), "KB")
