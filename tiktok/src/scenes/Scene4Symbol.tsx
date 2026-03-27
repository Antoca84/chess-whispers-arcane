import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { COLOR, SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const Scene4Symbol = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Simbolo: spring di scala da 0 a 1
  const symbolSpring = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 100, mass: 1.2 },
  });
  const symbolScale = interpolate(symbolSpring, [0, 1], [0, 1]);

  // Bagliore pulsante del simbolo (1 ciclo ogni 1.2s)
  const glowPulse = interpolate(
    Math.sin((frame / fps / 1.2) * Math.PI * 2),
    [-1, 1],
    [0.4, 0.85]
  );

  // Testo "Il Tuo Archetipo": appare dopo il simbolo
  const textOpacity = interpolate(frame, [18, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textSlide = interpolate(frame, [18, 36], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Linea orizzontale che si disegna
  const lineWidth = interpolate(frame, [10, 40], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR.BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
      }}
    >
      {/* Bagliore di sfondo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLOR.GOLD}${Math.round(glowPulse * 80).toString(16).padStart(2, "0")} 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Simbolo scacchistico ♔ */}
      <div
        style={{
          fontSize: 260,
          lineHeight: 1,
          color: COLOR.GOLD,
          transform: `scale(${symbolScale})`,
          textShadow: `0 0 ${Math.round(glowPulse * 80)}px ${COLOR.GOLD}, 0 0 ${Math.round(glowPulse * 40)}px ${COLOR.GOLD_BRIGHT}`,
          marginBottom: 48,
        }}
      >
        ♔
      </div>

      {/* Linea decorativa */}
      <div
        style={{
          width: `${lineWidth}%`,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLOR.GOLD}, transparent)`,
          marginBottom: 40,
        }}
      />

      {/* Label */}
      <p
        style={{
          fontFamily,
          fontSize: 44,
          fontWeight: 400,
          color: COLOR.MUTED,
          letterSpacing: 6,
          textTransform: "uppercase",
          margin: "0 0 16px 0",
          opacity: textOpacity,
          transform: `translateY(${textSlide}px)`,
        }}
      >
        Il Tuo
      </p>
      <p
        style={{
          fontFamily,
          fontSize: 72,
          fontWeight: 700,
          color: COLOR.WHITE,
          letterSpacing: 2,
          textTransform: "uppercase",
          margin: 0,
          opacity: textOpacity,
          transform: `translateY(${textSlide}px)`,
        }}
      >
        Archetipo
      </p>
    </AbsoluteFill>
  );
};
