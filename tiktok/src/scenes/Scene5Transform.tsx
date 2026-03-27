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
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

export const Scene5Transform = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Prima frase: appare con spring
  const line1Spring = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const line1Scale = interpolate(line1Spring, [0, 1], [0.92, 1]);
  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1]);

  // Seconda frase (insight): appare con delay
  const line2Frame = Math.max(0, frame - 14);
  const line2Spring = spring({
    frame: line2Frame,
    fps,
    config: { damping: 200 },
  });
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1]);
  const line2Translate = interpolate(line2Spring, [0, 1], [20, 0]);

  // Accento dorato orizzontale che si disegna sotto "disciplina"
  const accentWidth = interpolate(frame, [20, 50], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR.BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
      }}
    >
      {/* Prima riga */}
      <div
        style={{
          opacity: line1Opacity,
          transform: `scale(${line1Scale})`,
          transformOrigin: "left center",
          marginBottom: 16,
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 72,
            fontWeight: 900,
            color: COLOR.WHITE,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Il tuo problema
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 72,
            fontWeight: 900,
            color: COLOR.WHITE,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          non è la
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 72,
            fontWeight: 900,
            color: COLOR.MUTED,
            lineHeight: 1.1,
            margin: "0 0 8px 0",
            textDecoration: "line-through",
            textDecorationColor: COLOR.GOLD,
            textDecorationThickness: 3,
          }}
        >
          disciplina.
        </p>
      </div>

      {/* Linea gold */}
      <div
        style={{
          width: `${accentWidth}%`,
          height: 3,
          background: COLOR.GOLD,
          marginBottom: 48,
          borderRadius: 2,
        }}
      />

      {/* Insight */}
      <div
        style={{
          opacity: line2Opacity,
          transform: `translateY(${line2Translate}px)`,
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 40,
            fontWeight: 400,
            color: COLOR.MUTED,
            lineHeight: 1.2,
            margin: "0 0 12px 0",
            letterSpacing: 1,
          }}
        >
          È la
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 96,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1,
            margin: 0,
            letterSpacing: -2,
          }}
        >
          strategia.
        </p>
      </div>
    </AbsoluteFill>
  );
};
