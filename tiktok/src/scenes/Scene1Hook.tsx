import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { COLOR, SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["700", "900"],
  subsets: ["latin"],
});

export const Scene1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Bagliore radiale pulsante (1 ciclo ogni 1.5s)
  const glowPulse = interpolate(
    Math.sin((frame / fps / 1.5) * Math.PI * 2),
    [-1, 1],
    [0.25, 0.55]
  );

  // Testo: spring da 0.8 a 1 (snappy, senza bounce)
  const springProgress = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 120 },
  });
  const scale = interpolate(springProgress, [0, 1], [0.8, 1]);
  const opacity = interpolate(springProgress, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR.BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
      }}
    >
      {/* Bagliore radiale gold */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLOR.GOLD}${Math.round(glowPulse * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Numero in alto */}
      <div
        style={{
          position: "absolute",
          top: SAFE.TOP,
          left: SAFE.SIDE,
          fontFamily,
          fontSize: 120,
          fontWeight: 900,
          color: COLOR.GOLD,
          lineHeight: 1,
          opacity,
          transform: `scale(${scale})`,
          transformOrigin: "left top",
        }}
      >
        5
      </div>

      {/* Testo principale */}
      <div
        style={{
          textAlign: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 80,
            fontWeight: 900,
            color: COLOR.WHITE,
            lineHeight: 1.15,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          segni che il tuo
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 80,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1.15,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          archetipo
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 72,
            fontWeight: 700,
            color: COLOR.WHITE,
            lineHeight: 1.15,
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          ti sta bloccando
        </p>
      </div>
    </AbsoluteFill>
  );
};
