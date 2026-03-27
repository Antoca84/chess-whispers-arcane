/**
 * SCENA 6 — CTA (2s)
 * "Smetti di giocare la partita di un altro."
 * "Scopri chi sei. Link in bio."
 *
 * Tecnica max engagement: sfondo nero puro, nessuna distrazione.
 * La frase principale è un ULTIMATUM — voce Kairos al massimo.
 * Il "link in bio" è la mossa ovvia dopo.
 */
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { COLOR, SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

export const V3Scene6CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Frase principale — spring deciso
  const mainSp = spring({ frame, fps, config: { damping: 200, stiffness: 140 } });
  const mainScale = interpolate(mainSp, [0, 1], [0.88, 1]);
  const mainOp = interpolate(mainSp, [0, 1], [0, 1]);

  // Linea "Scopri chi sei" — slide dal basso
  const sub1Op = interpolate(frame, [12, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sub1Ty = interpolate(frame, [12, 24], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Link in bio" box
  const linkOp = interpolate(frame, [20, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo
  const logoOp = interpolate(frame, [28, 50], [0, 1], {
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
      {/* Barra verticale oro — accent mark */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "25%",
          width: 5,
          height: "50%",
          background: `linear-gradient(to bottom, transparent, ${COLOR.GOLD}, transparent)`,
          opacity: mainOp,
        }}
      />

      {/* Frase principale — ultimatum Kairos */}
      <div
        style={{
          opacity: mainOp,
          transform: `scale(${mainScale})`,
          transformOrigin: "left center",
          marginBottom: 40,
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 68,
            fontWeight: 900,
            color: COLOR.WHITE,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Smetti di giocare
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 68,
            fontWeight: 900,
            color: COLOR.WHITE,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          la partita
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 68,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          di un altro.
        </p>
      </div>

      {/* "Scopri chi sei." */}
      <p
        style={{
          fontFamily,
          fontSize: 48,
          fontWeight: 700,
          color: COLOR.MUTED,
          lineHeight: 1.2,
          margin: "0 0 36px 0",
          opacity: sub1Op,
          transform: `translateY(${sub1Ty}px)`,
        }}
      >
        Scopri chi sei.
      </p>

      {/* Box "Link in bio" */}
      <div
        style={{
          opacity: linkOp,
          border: `2px solid ${COLOR.GOLD}`,
          borderRadius: 10,
          padding: "16px 48px",
          background: "rgba(201, 168, 76, 0.08)",
          marginBottom: 56,
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 44,
            fontWeight: 700,
            color: COLOR.GOLD,
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Link in bio
        </p>
      </div>

      {/* Logo */}
      <div
        style={{
          opacity: logoOp,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{ width: 48, height: 48, objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily,
            fontSize: 34,
            fontWeight: 700,
            color: COLOR.MUTED,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          scacchimentali.it
        </span>
      </div>
    </AbsoluteFill>
  );
};
