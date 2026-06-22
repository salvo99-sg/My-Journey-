import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

/* ------------------------------------------------------------------ *
 * Header "Giappone — Fuji al tramonto" : poster iconico, cinematografico.
 * Colori accesi e semplici (ukiyo-e / travel poster). Loop perfetto:
 * ogni animazione e' funzione della fase p in [0,1) e torna a p=0.
 * ------------------------------------------------------------------ */

const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// pochi petali, sottili, per dare vita senza affollare
const PETALS = (() => {
  const r = rng(7);
  return Array.from({ length: 7 }, () => ({
    x: r() * 100,
    size: 7 + r() * 8,
    sway: 4 + r() * 6,
    swayFreq: 1 + Math.floor(r() * 2),
    spins: 1 + Math.floor(r() * 2),
    phase: r(),
    op: 0.5 + r() * 0.4,
    hue: r() < 0.5 ? "#FCE3EA" : "#FBC7D6",
  }));
})();

// uccelli che planano (V stilizzate)
const BIRDS = [
  { y: 22, scale: 1, phase: 0.0, speed: 1 },
  { y: 30, scale: 0.7, phase: 0.35, speed: 1 },
  { y: 18, scale: 0.5, phase: 0.62, speed: 1 },
];

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();
  const p = (frame % durationInFrames) / durationInFrames;
  const TAU = Math.PI * 2;

  const sunBob = Math.sin(p * TAU) * 6;
  const sunScale = 1 + 0.03 * Math.sin(p * TAU);
  const cloudX = p * width;
  const leakX = interpolate(p, [0, 1], [-0.2, 1.2]); // light-leak che attraversa
  const leakOp = 0.18 + 0.1 * Math.sin(p * TAU);

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#1B1E4D" }}>
      {/* CIELO — gradiente bold poster: indaco -> magenta -> arancio */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(178deg, #14173F 0%, #3A1C5A 30%, #B5246B 58%, #FF6A3D 82%, #FFB13C 100%)",
        }}
      />

      {/* SOLE che tramonta dietro al Fuji */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "46%",
          width: 360,
          height: 360,
          transform: `translate(-50%,-50%) translateY(${sunBob}px) scale(${sunScale})`,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, #FFDC8A 0%, #FF8A4D 30%, #FF4D3D 52%, rgba(255,77,61,0.0) 72%)",
        }}
      />
      {/* disco pieno del sole (flat, iconico) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "46%",
          width: 200,
          height: 200,
          transform: `translate(-50%,-50%) translateY(${sunBob}px) scale(${sunScale})`,
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 42%, #FFD36B, #FF5A3C 78%)",
          boxShadow: "0 0 70px 12px rgba(255,90,60,0.45)",
        }}
      />

      {/* NUVOLE poster sottili che attraversano (due copie -> wrap) */}
      {[0, 1].map((k) => (
        <svg
          key={k}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{
            position: "absolute",
            left: cloudX - k * width,
            top: 0,
            opacity: 0.5,
          }}
        >
          <g fill="#FFE6CE">
            <rect x="120" y="150" width="220" height="11" rx="6" />
            <rect x="180" y="178" width="150" height="9" rx="5" />
            <rect x="640" y="120" width="260" height="11" rx="6" />
            <rect x="720" y="148" width="160" height="9" rx="5" />
          </g>
        </svg>
      ))}

      {/* UCCELLI che planano */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: "absolute", inset: 0 }}
      >
        {BIRDS.map((b, i) => {
          const ph = (p * b.speed + b.phase) % 1;
          const x = -80 + ph * (width + 160);
          const y = (b.y / 100) * height + Math.sin(ph * TAU * 2) * 8;
          const flap = 5 + 4 * Math.sin(ph * TAU * 8);
          return (
            <path
              key={i}
              d={`M${-14 * b.scale} 0 Q0 ${-flap * b.scale} ${14 * b.scale} 0`}
              transform={`translate(${x} ${y})`}
              fill="none"
              stroke="#2A1740"
              strokeWidth={2.4 * b.scale}
              strokeLinecap="round"
              opacity={0.55}
            />
          );
        })}
      </svg>

      {/* MONTE FUJI — silhouette iconica + neve */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 1080 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* colline retrostanti (profondita') */}
        <path
          d="M-40 486 C 220 444 380 458 560 484 C 760 510 920 470 1120 486 L1120 600 L-40 600 Z"
          fill="#7E2A63"
          opacity="0.85"
        />
        <path
          d="M-40 506 C 180 474 420 492 640 506 C 840 518 980 500 1120 510 L1120 600 L-40 600 Z"
          fill="#5B2350"
        />
        {/* corpo del Fuji — fianchi concavi e svasati */}
        <path
          d="M150 474 C 360 430 470 250 540 214 C 610 250 720 430 930 474 Z"
          fill="#211A47"
        />
        {/* lato in ombra per volume */}
        <path
          d="M540 214 C 610 250 720 430 930 474 L540 474 Z"
          fill="#2C2152"
          opacity="0.9"
        />
        {/* neve in vetta con bordo a goccia */}
        <path
          d="M540 214 C 596 286 640 330 612 356 q -18 12 -36 0 q -18 -12 -36 0 q -18 12 -36 0 q -18 -12 -36 0 C 440 330 484 286 540 214 Z"
          fill="#FBF3F0"
        />
        <path
          d="M540 214 C 596 286 640 330 612 356 q -18 12 -36 0 C 560 300 552 260 540 214 Z"
          fill="#E7D6E4"
          opacity="0.8"
        />
      </svg>

      {/* FOSCHIA alla base */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "34%",
          background:
            "linear-gradient(0deg, rgba(255,160,90,0.30), rgba(255,160,90,0) 100%)",
        }}
      />

      {/* petali sottili */}
      {PETALS.map((pt, i) => {
        const ph = (p + pt.phase) % 1;
        const y = -10 + ph * 120;
        const x = pt.x + pt.sway * Math.sin(ph * TAU * pt.swayFreq);
        const rot = ph * 360 * pt.spins;
        const edge = interpolate(ph, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
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
              opacity: pt.op * edge,
            }}
          />
        );
      })}

      {/* LIGHT LEAK caldo che attraversa (cinematografico, no WebGL) */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(40% 70% at ${leakX * 100}% 30%, rgba(255,180,90,0.9), rgba(255,120,80,0) 60%)`,
          mixBlendMode: "screen",
          opacity: leakOp,
        }}
      />

      {/* GRANA */}
      <AbsoluteFill style={{ opacity: 0.05, mixBlendMode: "overlay" }}>
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

      {/* VIGNETTA */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(125% 120% at 50% 38%, rgba(0,0,0,0) 56%, rgba(8,6,22,0.5) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
