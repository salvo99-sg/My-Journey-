import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

/* ------------------------------------------------------------------ *
 * Header "Oriente / Sol Levante" — scena stilizzata ad alta cura.
 * Loop perfetto: ogni animazione e' funzione della fase p in [0,1)
 * e torna identica a p=0. Niente CSS animation (vietate in Remotion).
 * ------------------------------------------------------------------ */

// RNG deterministico (mulberry32) per particelle ripetibili
const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

type Petal = {
  x: number; // % orizzontale di base
  size: number; // px
  sway: number; // ampiezza oscillazione %
  swayFreq: number; // cicli per loop (intero -> seamless)
  spins: number; // giri per loop (intero -> seamless)
  phase: number; // offset iniziale [0,1)
  blur: number;
  opacity: number;
  hue: string;
};

const buildPetals = (
  count: number,
  seed: number,
  depth: "far" | "mid" | "near"
): Petal[] => {
  const r = rng(seed);
  const out: Petal[] = [];
  for (let i = 0; i < count; i++) {
    const base =
      depth === "far"
        ? { size: [5, 9], blur: 2.2, op: 0.45, sway: [3, 6] }
        : depth === "mid"
        ? { size: [9, 14], blur: 0.8, op: 0.7, sway: [4, 8] }
        : { size: [14, 22], blur: 0, op: 0.92, sway: [5, 10] };
    out.push({
      x: r() * 100,
      size: base.size[0] + r() * (base.size[1] - base.size[0]),
      sway: base.sway[0] + r() * (base.sway[1] - base.sway[0]),
      swayFreq: 1 + Math.floor(r() * 3),
      spins: 1 + Math.floor(r() * 3),
      phase: r(),
      blur: base.blur,
      opacity: base.op,
      hue: r() < 0.3 ? "#FCE6EC" : r() < 0.7 ? "#F8CDD8" : "#F2B6C8",
    });
  }
  return out;
};

const FAR = buildPetals(10, 11, "far");
const MID = buildPetals(12, 47, "mid");
const NEAR = buildPetals(8, 91, "near");

const PetalLayer: React.FC<{ petals: Petal[]; p: number }> = ({
  petals,
  p,
}) => (
  <>
    {petals.map((pt, i) => {
      const ph = (p + pt.phase) % 1; // fase locale [0,1)
      const y = -12 + ph * 124; // dall'alto fuori campo al basso fuori campo
      const x = pt.x + pt.sway * Math.sin(ph * Math.PI * 2 * pt.swayFreq);
      const rot = ph * 360 * pt.spins;
      // dissolvenza dolce ai bordi del loop verticale
      const edge = interpolate(ph, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);
      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: pt.size,
            height: pt.size * 0.78,
            backgroundColor: pt.hue,
            borderRadius: `${pt.size}px 2px ${pt.size}px 2px`,
            transform: `rotate(${rot}deg)`,
            opacity: pt.opacity * edge,
            filter: pt.blur ? `blur(${pt.blur}px)` : undefined,
          }}
        />
      );
    })}
  </>
);

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width } = useVideoConfig();
  const p = (frame % durationInFrames) / durationInFrames; // [0,1)

  // sole che "respira"
  const sunScale = 1 + 0.035 * Math.sin(p * Math.PI * 2);
  const sunGlow = 0.85 + 0.15 * Math.sin(p * Math.PI * 2);

  // foschia che deriva (due copie -> wrap seamless)
  const mistX = p * width;

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#1B1E3C" }}>
      {/* cielo al tramonto */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(170deg, #181B38 0%, #3B2350 38%, #6E2F55 66%, #A23A5A 86%, #C7475F 100%)",
        }}
      />
      {/* alone del sole sull'orizzonte */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(120% 80% at 76% 96%, rgba(255,150,110,0.55), rgba(255,150,110,0) 55%)",
        }}
      />

      {/* sole soffuso con bloom */}
      <div
        style={{
          position: "absolute",
          right: "14%",
          top: "30%",
          width: 230,
          height: 230,
          transform: `translate(50%,-50%) scale(${sunScale})`,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,228,190,1) 0%, rgba(255,170,120,0.95) 34%, rgba(255,120,100,0.55) 55%, rgba(255,120,100,0) 72%)",
          filter: "blur(2px)",
          opacity: sunGlow,
        }}
      />

      {/* raggi soffusi dal sole */}
      <AbsoluteFill
        style={{
          background:
            "conic-gradient(from 200deg at 76% 28%, rgba(255,220,180,0) 0deg, rgba(255,220,180,0.10) 18deg, rgba(255,220,180,0) 36deg, rgba(255,220,180,0.08) 60deg, rgba(255,220,180,0) 90deg)",
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />

      {/* foschia / nuvole basse in deriva (due copie per wrap) */}
      {[0, 1].map((k) => (
        <div
          key={k}
          style={{
            position: "absolute",
            top: 0,
            left: mistX - k * width,
            width,
            height: "100%",
            background:
              "radial-gradient(60% 38% at 20% 78%, rgba(255,180,150,0.16), rgba(255,180,150,0) 60%), radial-gradient(50% 30% at 70% 88%, rgba(255,200,170,0.12), rgba(255,200,170,0) 60%)",
          }}
        />
      ))}

      {/* petali su tre livelli di profondita' */}
      <PetalLayer petals={FAR} p={p} />
      <PetalLayer petals={MID} p={p} />
      <PetalLayer petals={NEAR} p={p} />

      {/* grana sottile (film grain) */}
      <AbsoluteFill style={{ opacity: 0.06, mixBlendMode: "overlay" }}>
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </AbsoluteFill>

      {/* vignetta per profondita' */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(120% 120% at 50% 35%, rgba(0,0,0,0) 55%, rgba(10,8,24,0.45) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
