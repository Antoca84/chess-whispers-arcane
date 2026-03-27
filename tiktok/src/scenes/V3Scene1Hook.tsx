/**
 * SCENA 1 — HOOK (2.5s)
 * "Solo il 3% conosce la propria mossa."
 *
 * Tecnica max engagement: il numero "3%" esplode per primo (spring bounce),
 * solo dopo la frase scivola dal basso. Il contrasto numero/testo
 * ferma lo scroll in meno di 1 secondo.
 */
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

export const V3Scene1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "3%" — spring con bounce, appare a frame 0
  const numSp = spring({ frame, fps, config: { damping: 10, stiffness: 200, mass: 0.6 } });
  const numScale = interpolate(numSp, [0, 1], [0.4, 1]);
  const numOp = interpolate(numSp, [0, 1], [0, 1]);

  // "Solo il" sopra il numero — appare con un ritardo
  const soloOp = interpolate(frame, [10, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const soloTy = interpolate(frame, [10, 22], [-16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Frase sotto il numero — slide dal basso
  const fraseSp = spring({
    frame: Math.max(0, frame - 14),
    fps,
    config: { damping: 200, stiffness: 80 },
  });
  const fraseOp = interpolate(fraseSp, [0, 1], [0, 1]);
  const fraseTy = interpolate(fraseSp, [0, 1], [24, 0]);

  // Bagliore radiale pulsante centrato sul numero
  const glow = interpolate(
    Math.sin((frame / fps / 1.2) * Math.PI * 2),
    [-1, 1],
    [0.2, 0.5]
  );

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
      {/* Bagliore radiale */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLOR.GOLD}${Math.round(glow * 90).toString(16).padStart(2, "0")} 0%, transparent 65%)`,
        }}
      />

      {/* "Solo il" — piccolo sopra */}
      <p
        style={{
          fontFamily,
          fontSize: 48,
          fontWeight: 400,
          color: COLOR.MUTED,
          letterSpacing: 4,
          textTransform: "uppercase",
          margin: "0 0 -12px 0",
          opacity: soloOp,
          transform: `translateY(${soloTy}px)`,
        }}
      >
        Solo il
      </p>

      {/* NUMERO "3%" — protagonista */}
      <div
        style={{
          fontFamily,
          fontSize: 320,
          fontWeight: 900,
          color: COLOR.GOLD,
          lineHeight: 1,
          letterSpacing: -8,
          opacity: numOp,
          transform: `scale(${numScale})`,
          textShadow: `0 0 60px ${COLOR.GOLD}80`,
        }}
      >
        3%
      </div>

      {/* Frase sotto */}
      <p
        style={{
          fontFamily,
          fontSize: 52,
          fontWeight: 700,
          color: COLOR.WHITE,
          lineHeight: 1.2,
          margin: "16px 0 0 0",
          textAlign: "center",
          opacity: fraseOp,
          transform: `translateY(${fraseTy}px)`,
        }}
      >
        conosce la propria mossa.
      </p>
    </AbsoluteFill>
  );
};
