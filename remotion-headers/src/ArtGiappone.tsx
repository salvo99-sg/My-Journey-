import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

/* Giappone — artwork illustrato reso "vivo" e cinematografico.
   Base: immagine di riferimento. Loop perfetto (tutto funzione di p in [0,1)). */

const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const PETALS = (() => {
  const r = rng(23);
  return Array.from({ length: 16 }, () => {
    const near = r();
    return {
      x: r() * 100,
      size: 6 + near * 14,
      sway: 4 + r() * 8,
      swayFreq: 1 + Math.floor(r() * 3),
      spins: 1 + Math.floor(r() * 3),
      phase: r(),
      blur: near < 0.3 ? 1.6 : 0,
      op: 0.45 + r() * 0.45,
      hue: r() < 0.5 ? "#FCE0E9" : "#F8C2D4",
    };
  });
})();

const MOTES = (() => {
  const r = rng(91);
  return Array.from({ length: 7 }, () => ({
    x: r() * 100,
    y: 35 + r() * 50,
    size: 2 + r() * 3,
    amp: 6 + r() * 10,
    freq: 1 + Math.floor(r() * 2),
    phase: r(),
    op: 0.3 + r() * 0.4,
  }));
})();

export const ArtGiappone: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width } = useVideoConfig();
  const p = (frame % durationInFrames) / durationInFrames;
  const TAU = Math.PI * 2;

  // bagliore del sole che pulsa (sole ~22% x, ~34% y)
  const sunOp = 0.35 + 0.18 * (0.5 + 0.5 * Math.sin(p * TAU));
  // light-leak caldo che attraversa
  const leakX = interpolate(p, [0, 1], [-0.15, 1.15]);
  const leakOp = 0.14 + 0.08 * Math.sin(p * TAU);
  // luccichio acqua
  const shimX = Math.sin(p * TAU) * 40;

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#2a1830" }}>
      {/* base illustrata FISSA (niente zoom): animano solo gli overlay */}
      <Img
        src={staticFile("art/giappone.png")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* bagliore del sole */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(22% 30% at 22% 34%, rgba(255,220,170,0.9), rgba(255,180,120,0) 60%)",
          mixBlendMode: "screen",
          opacity: sunOp,
        }}
      />

      {/* luccichio sull'acqua (banda bassa) */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          right: "8%",
          top: "66%",
          height: "26%",
          overflow: "hidden",
          borderRadius: "50%",
          WebkitMaskImage:
            "radial-gradient(60% 80% at 45% 50%, #000 0%, transparent 75%)",
          maskImage:
            "radial-gradient(60% 80% at 45% 50%, #000 0%, transparent 75%)",
          mixBlendMode: "screen",
          opacity: 0.45,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            transform: `translateX(${shimX}px)`,
            background:
              "repeating-linear-gradient(100deg, transparent 0 26px, rgba(255,235,210,0.5) 26px 28px, transparent 28px 54px)",
          }}
        />
      </div>

      {/* petali */}
      {PETALS.map((pt, i) => {
        const ph = (p + pt.phase) % 1;
        const y = -10 + ph * 122;
        const x = pt.x + pt.sway * Math.sin(ph * TAU * pt.swayFreq);
        const rot = ph * 360 * pt.spins;
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
              opacity: pt.op * edge,
              filter: pt.blur ? `blur(${pt.blur}px)` : undefined,
            }}
          />
        );
      })}

      {/* light motes (lucciole calde) */}
      {MOTES.map((m, i) => {
        const ph = (p + m.phase) % 1;
        const x = m.x + Math.sin(ph * TAU * m.freq) * (m.amp / 10);
        const y = m.y - ph * 8;
        const tw = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(ph * TAU * 3));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: m.size,
              height: m.size,
              borderRadius: "50%",
              background: "rgba(255,240,210,1)",
              boxShadow: "0 0 8px 2px rgba(255,225,180,0.8)",
              opacity: m.op * tw,
            }}
          />
        );
      })}

      {/* light-leak caldo */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(38% 70% at ${leakX * 100}% 28%, rgba(255,190,120,0.9), rgba(255,140,90,0) 60%)`,
          mixBlendMode: "screen",
          opacity: leakOp,
        }}
      />

      {/* grana + vignetta */}
      <AbsoluteFill style={{ opacity: 0.045, mixBlendMode: "overlay" }}>
        <svg width="100%" height="100%">
          <filter id="g">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#g)" />
        </svg>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(125% 120% at 50% 40%, rgba(0,0,0,0) 58%, rgba(20,8,26,0.42) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
