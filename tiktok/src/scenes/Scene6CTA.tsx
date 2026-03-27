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

export const Scene6CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Testo CTA: spring deciso
  const ctaSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 150, mass: 0.8 },
  });
  const ctaScale = interpolate(ctaSpring, [0, 1], [0.85, 1]);
  const ctaOpacity = interpolate(ctaSpring, [0, 1], [0, 1]);

  // Logo: fade-in con delay
  const logoOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Link in bio": appare dopo il testo principale
  const linkOpacity = interpolate(frame, [12, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const linkTranslate = interpolate(frame, [12, 28], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Bagliore minimo sullo sfondo
  const bgGlow = interpolate(
    Math.sin((frame / fps) * Math.PI),
    [-1, 1],
    [0.03, 0.08]
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
      {/* Bagliore sfondo */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLOR.GOLD}${Math.round(bgGlow * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Testo principale CTA */}
      <div
        style={{
          textAlign: "center",
          opacity: ctaOpacity,
          transform: `scale(${ctaScale})`,
          marginBottom: 60,
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 68,
            fontWeight: 900,
            color: COLOR.WHITE,
            lineHeight: 1.2,
            margin: "0 0 8px 0",
            textTransform: "uppercase",
            letterSpacing: -1,
          }}
        >
          Scopri il tuo
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 96,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: -2,
          }}
        >
          Archetipo
        </p>
      </div>

      {/* "Link in bio" */}
      <div
        style={{
          opacity: linkOpacity,
          transform: `translateY(${linkTranslate}px)`,
          textAlign: "center",
          marginBottom: 80,
        }}
      >
        <div
          style={{
            display: "inline-block",
            border: `2px solid ${COLOR.GOLD}`,
            borderRadius: 8,
            padding: "16px 48px",
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 44,
              fontWeight: 700,
              color: COLOR.GOLD,
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Link in bio
          </p>
        </div>
      </div>

      {/* Logo Scacchi Mentali */}
      <div
        style={{
          opacity: logoOpacity,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{ width: 56, height: 56, objectFit: "contain" }}
        />
        <p
          style={{
            fontFamily,
            fontSize: 38,
            fontWeight: 700,
            color: COLOR.MUTED,
            letterSpacing: 2,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          scacchimentali.it
        </p>
      </div>
    </AbsoluteFill>
  );
};
