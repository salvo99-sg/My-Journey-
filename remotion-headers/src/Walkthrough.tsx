import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  Loop,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { Icon } from "./Icons";

// I font Google non sono raggiungibili nel sandbox: uso fallback di sistema.
const playfair = "Georgia, 'Times New Roman', serif";
const inter =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const calistoga = "Georgia, 'Times New Roman', serif";

const ACCENT = "#E0566A";
const ACCENT_D = "#C23A55";
const BG = "#FBF6EF";

const Bg: React.FC<{ pos?: string }> = ({ pos = "center 30%" }) => (
  <Loop durationInFrames={180}>
    <OffthreadVideo
      src={staticFile("giappone-art.mp4")}
      muted
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: pos,
      }}
    />
  </Loop>
);

export const Walkthrough: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // entrata home
  const homeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });
  // tap + apertura viaggio
  const open = spring({
    frame: frame - 112,
    fps,
    config: { damping: 200 },
    durationInFrames: 28,
  });
  const tripX = (1 - open) * 100;
  const homeScale = interpolate(open, [0, 1], [1, 0.96]);
  const homeOp = interpolate(open, [0, 1], [1, 0.5]);
  const tap = interpolate(frame, [92, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // tab attiva
  const isBudget = frame >= 300;
  const paneV = interpolate(frame, [296, 312], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const paneB = interpolate(frame, [300, 316], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tabInd = interpolate(frame, [298, 314], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dayIn = (s: number) =>
    interpolate(frame, [s, s + 16], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  const bar = (target: number) =>
    interpolate(frame, [320, 360], [0, target], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  const sb = (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
        color: "#fff",
        fontWeight: 700,
        fontSize: 26,
        mixBlendMode: "difference",
        zIndex: 80,
        fontFamily: inter,
      }}
    >
      <span>9:41</span>
      <span>5G&nbsp;&nbsp;100%</span>
    </div>
  );

  const tab = (n: string, label: string, active: boolean) => (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "18px 4px",
        borderRadius: 28,
        border: `2px solid ${active ? ACCENT_D : "#F0E7DC"}`,
        background: active ? ACCENT_D : "#fff",
        color: active ? "#fff" : "#7d7167",
        fontSize: 20,
        fontWeight: 600,
        fontFamily: inter,
      }}
    >
      <Icon n={n} s={38} />
      {label}
    </div>
  );

  return (
    <AbsoluteFill style={{ background: "#EFE7DC", fontFamily: inter }}>
      {/* ===== HOME ===== */}
      <AbsoluteFill
        style={{
          background: BG,
          transform: `scale(${homeScale})`,
          opacity: homeOp,
        }}
      >
        <div style={{ padding: "96px 36px 0" }}>
          <div
            style={{
              opacity: homeIn,
              transform: `translateY(${(1 - homeIn) * 20}px)`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 30,
            }}
          >
            <div>
              <div style={{ fontSize: 26, color: "#7d7167", fontWeight: 500 }}>
                Bentornato, Salvatore
              </div>
              <div
                style={{
                  fontFamily: calistoga,
                  fontSize: 60,
                  color: "#16264C",
                  marginTop: 4,
                }}
              >
                I miei viaggi
              </div>
            </div>
            <div
              style={{
                width: 92,
                height: 92,
                borderRadius: 28,
                background: "#16264C",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon n="plus" s={48} c="#fff" />
            </div>
          </div>

          <div
            style={{
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#b6a99b",
              fontWeight: 700,
              margin: "10px 4px 22px",
            }}
          >
            In partenza
          </div>

          {/* GATEWAY CARD */}
          <div
            style={{
              position: "relative",
              borderRadius: 46,
              overflow: "hidden",
              height: 520,
              boxShadow: "0 30px 70px rgba(70,25,45,.34)",
              opacity: homeIn,
              transform: `translateY(${(1 - homeIn) * 30}px)`,
              marginBottom: 36,
            }}
          >
            <Bg pos="center 35%" />
            <AbsoluteFill
              style={{
                background:
                  "linear-gradient(180deg,rgba(25,12,28,.10) 0%,rgba(25,12,28,0) 32%,rgba(20,8,26,.76) 100%)",
              }}
            />
            <AbsoluteFill
              style={{
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={pill(false)}>
                  <Icon n="map" s={26} /> Giappone
                </span>
                <span style={pill(true)}>
                  <Icon n="clock" s={26} /> 38 giorni
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      letterSpacing: 4,
                      textTransform: "uppercase",
                      opacity: 0.9,
                      fontWeight: 600,
                    }}
                  >
                    Il prossimo viaggio
                  </div>
                  <div
                    style={{
                      fontFamily: playfair,
                      fontStyle: "italic",
                      fontSize: 60,
                      fontWeight: 600,
                      margin: "6px 0 14px",
                      textShadow: "0 2px 18px rgba(0,0,0,.45)",
                    }}
                  >
                    Tour del Giappone
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 24,
                      opacity: 0.95,
                    }}
                  >
                    <Icon n="plane" s={28} /> 3 — 17 ottobre · 3 viaggiatori
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: "#fff",
                    color: ACCENT_D,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon n="cr" s={44} />
                </div>
              </div>
            </AbsoluteFill>
            {/* tap ripple */}
            {tap > 0 && tap < 1 && (
              <div
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "80%",
                  width: 60,
                  height: 60,
                  marginLeft: -30,
                  marginTop: -30,
                  borderRadius: "50%",
                  border: "4px solid rgba(255,255,255,.9)",
                  transform: `scale(${1 + tap * 3})`,
                  opacity: 1 - tap,
                }}
              />
            )}
          </div>

          {/* MINI */}
          {mini("Estate nelle Cicladi", "Grecia · 10 — 18 luglio", "boat", "linear-gradient(150deg,#0E5C8A,#39A8CE)", homeIn)}
        </div>
      </AbsoluteFill>

      {/* ===== TRIP ===== */}
      <AbsoluteFill
        style={{
          transform: `translateX(${tripX}%)`,
          background: BG,
          boxShadow: "-20px 0 50px rgba(0,0,0,.2)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* header */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            color: "#fff",
            padding: "104px 36px 30px",
            flex: "none",
          }}
        >
          <Bg pos="center 26%" />
          <AbsoluteFill
            style={{
              background:
                "linear-gradient(180deg,rgba(20,8,26,.32) 0%,rgba(20,8,26,0) 44%,rgba(20,8,26,.58) 100%)",
            }}
          />
          <div style={{ position: "relative", zIndex: 3 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={ghost}>
                <Icon n="cl" s={26} /> Viaggi
              </span>
              <span style={ghost}>
                <Icon n="map" s={26} /> Mappa
              </span>
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.85,
                fontWeight: 600,
                marginTop: 24,
              }}
            >
              Diario di bordo
            </div>
            <div
              style={{
                fontFamily: playfair,
                fontStyle: "italic",
                fontSize: 54,
                fontWeight: 600,
                marginTop: 6,
                textShadow: "0 2px 16px rgba(0,0,0,.45)",
              }}
            >
              Tour del Giappone
            </div>
            <div style={{ fontSize: 24, opacity: 0.95, marginTop: 4 }}>
              3 ottobre — 17 ottobre
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginTop: 22,
                borderRadius: 999,
                padding: "14px 28px",
                fontSize: 24,
                fontWeight: 700,
                background: ACCENT,
                boxShadow: "0 10px 26px rgba(224,86,106,.5)",
              }}
            >
              <Icon n="clock" s={28} /> Mancano 38 giorni
            </span>
          </div>
        </div>

        {/* tabs */}
        <div style={{ display: "flex", gap: 12, padding: "22px 24px 10px" }}>
          {tab("cal", "Viaggio", !isBudget)}
          {tab("money", "Budget", isBudget)}
          {tab("backpack", "Preparativi", false)}
          {tab("cam", "Ricordi", false)}
        </div>

        {/* panes */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          {/* VIAGGIO */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "10px 28px",
              opacity: paneV,
            }}
          >
            {dayCard(
              "Giorno 1",
              "gio 3 ott · 2 attività · € 18",
              true,
              dayIn(150)
            )}
            {dayCard(
              "Giorno 2",
              "ven 4 ott · 1 attività · € 45",
              false,
              dayIn(168)
            )}
            {dayCard(
              "Giorno 3",
              "sab 5 ott · giornata libera",
              false,
              dayIn(186)
            )}
          </div>
          {/* BUDGET */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "10px 28px",
              opacity: paneB,
            }}
          >
            <div style={cardS}>
              <div style={eyeS}>Totale viaggio</div>
              <div
                style={{
                  fontFamily: calistoga,
                  fontSize: 84,
                  color: "#7a2342",
                  textAlign: "center",
                  margin: "10px 0 4px",
                }}
              >
                € 3.480
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "#7d7167",
                  textAlign: "center",
                }}
              >
                ≈ ¥ 556.800 in valuta locale
              </div>
            </div>
            <div style={cardS}>
              <div style={titS}>
                <Icon n="users" s={32} c={ACCENT_D} /> Spese per viaggiatore
              </div>
              {catRow("Sara", "€ 1.160", bar(100), true)}
              {catRow("Luca", "€ 1.160", bar(100), true)}
              {catRow("Mia", "€ 1.160", bar(100), true)}
            </div>
            <div style={cardS}>
              <div style={titS}>Spese per categoria</div>
              {catRow("Volo", "€ 1.900", bar(100), false, "#3D5A80", "plane")}
              {catRow("Hotel", "€ 1.100", bar(58), false, "#0891B2", "bed")}
              {catRow("Ristoranti", "€ 320", bar(17), false, "#C9514C", "food")}
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {sb}
    </AbsoluteFill>
  );
};

/* ---- helper styles/components ---- */
const pill = (warm: boolean): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  background: warm ? "rgba(224,86,106,.95)" : "rgba(255,255,255,.18)",
  border: warm ? "none" : "1px solid rgba(255,255,255,.24)",
  borderRadius: 999,
  padding: "12px 22px",
  fontSize: 22,
  fontWeight: 700,
});
const ghost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "rgba(255,255,255,.2)",
  borderRadius: 999,
  padding: "14px 22px",
  fontSize: 22,
  fontWeight: 600,
};
const cardS: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #F0E7DC",
  borderRadius: 32,
  padding: 32,
  marginBottom: 20,
  boxShadow: "0 2px 6px rgba(120,70,30,.08)",
};
const eyeS: React.CSSProperties = {
  fontSize: 20,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#7d7167",
  fontWeight: 600,
  textAlign: "center",
};
const titS: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  fontSize: 26,
  fontWeight: 700,
  marginBottom: 22,
};

function catRow(
  name: string,
  val: string,
  w: number,
  acc: boolean,
  color?: string,
   icon?: string
) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 24,
          marginBottom: 10,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
          {icon && <Icon n={icon} s={30} c={color} />}
          {name}
        </span>
        <b>{val}</b>
      </div>
      <div
        style={{
          height: 16,
          background: "#F3E9DD",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${w}%`,
            borderRadius: 999,
            background: acc
              ? "linear-gradient(90deg,#E0566A,#FFB48A)"
              : color,
          }}
        />
      </div>
    </div>
  );
}

function mini(
  name: string,
  meta: string,
  icon: string,
  grad: string,
  op: number
) {
  return (
    <div
      style={{
        display: "flex",
        background: "#fff",
        border: "1px solid #F0E7DC",
        borderRadius: 32,
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(120,70,30,.08)",
        opacity: op,
      }}
    >
      <div
        style={{
          width: 160,
          flex: "none",
          background: grad,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", right: -10, bottom: -14, color: "rgba(255,255,255,.32)" }}>
          <Icon n={icon} s={96} />
        </div>
      </div>
      <div style={{ flex: 1, padding: "24px 26px" }}>
        <div style={{ fontFamily: calistoga, fontSize: 30 }}>{name}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            color: "#7d7167",
            marginTop: 6,
          }}
        >
          <Icon n="map" s={24} /> {meta}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", paddingRight: 22, color: "#cdbdae" }}>
        <Icon n="cr" s={36} />
      </div>
    </div>
  );
}

function dayCard(title: string, sub: string, open: boolean, anim: number) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #F0E7DC",
        borderRadius: 32,
        marginBottom: 20,
        boxShadow: "0 2px 6px rgba(120,70,30,.08)",
        overflow: "hidden",
        opacity: anim,
        transform: `translateY(${(1 - anim) * 24}px)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 30,
        }}
      >
        <div>
          <div style={{ fontFamily: calistoga, fontSize: 32 }}>{title}</div>
          <div style={{ color: "#7d7167", fontSize: 22, marginTop: 4 }}>{sub}</div>
        </div>
        <span
          style={{
            color: "#d6c4b6",
            display: "flex",
            transform: open ? "rotate(90deg)" : "none",
          }}
        >
          <Icon n="cr" s={36} />
        </span>
      </div>
      {open && (
        <div style={{ padding: "0 24px 24px" }}>
          {tappa("#5E548E", "ticket", "Attività · 09:30", "Tempio Senso-ji", "Asakusa, Tokyo", "Gratis")}
          {tappa("#C9514C", "food", "Ristorante · 20:00", "Ramen a Shinjuku", "Tokyo", "€ 18")}
        </div>
      )}
    </div>
  );
}

function tappa(
  color: string,
  icon: string,
  meta: string,
  ti: string,
  lu: string,
  cost: string
) {
  return (
    <div
      style={{
        display: "flex",
        background: "#FFFCF8",
        border: "1px solid #EEE3D7",
        borderRadius: 26,
        overflow: "hidden",
        marginBottom: 14,
      }}
    >
      <div style={{ width: 9, background: color }} />
      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, color }}>
        <Icon n={icon} s={34} />
      </div>
      <div style={{ flex: 1, padding: "20px 22px" }}>
        <div style={{ fontSize: 18, color: "#7d7167", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
          {meta}
        </div>
        <div style={{ fontWeight: 600, fontSize: 28, marginTop: 4 }}>{ti}</div>
        <div style={{ fontSize: 22, color: "#7d7167", marginTop: 2 }}>{lu}</div>
      </div>
      <div
        style={{
          width: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 24,
          borderLeft: "1px dashed #F0E7DC",
        }}
      >
        {cost}
      </div>
    </div>
  );
}
