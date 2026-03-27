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

export const Scene6CTAV2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sfondo: nero puro con sottile vignetta gold in centro
  const glowPulse = interpolate(
    Math.sin((frame / fps / 1.5) * Math.PI * 2),
    [-1, 1],
    [0.04, 0.1]
  );

  // Testo CTA: spring con un pizzico di bounce
  const ctaSp = spring({ frame, fps, config: { damping: 14, stiffness: 140, mass: 0.8 } });
  const ctaScale = interpolate(ctaSp, [0, 1], [0.82, 1]);
  const ctaOp = interpolate(ctaSp, [0, 1], [0, 1]);

  // "Link in bio": slide dal basso
  const linkOp = interpolate(frame, [14, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const linkTy = interpolate(frame, [14, 30], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo: fade-in finale
  const logoOp = interpolate(frame, [22, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLOR.BG }}>
      {/* Bagliore sottile al centro */}
      <AbsoluteFill
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            width: 900,
            height: 900,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLOR.GOLD}${Math.round(glowPulse * 255).toString(16).padStart(2, "0")} 0%, transparent 65%)`,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {/* Testo principale */}
        <div
          style={{
            textAlign: "center",
            opacity: ctaOp,
            transform: `scale(${ctaScale})`,
            marginBottom: 56,
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 60,
              fontWeight: 900,
              color: COLOR.WHITE,
              textTransform: "uppercase",
              letterSpacing: -1,
              margin: "0 0 4px 0",
            }}
          >
            Scopri il tuo
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 104,
              fontWeight: 900,
              color: COLOR.GOLD,
              textTransform: "uppercase",
              letterSpacing: -3,
              margin: 0,
              lineHeight: 1,
            }}
          >
            Archetipo
          </p>
        </div>

        {/* Box "Link in bio" */}
        <div
          style={{
            opacity: linkOp,
            transform: `translateY(${linkTy}px)`,
            marginBottom: 80,
          }}
        >
          <div
            style={{
              border: `2px solid ${COLOR.GOLD}`,
              borderRadius: 10,
              padding: "18px 56px",
              background: "rgba(201, 168, 76, 0.08)",
            }}
          >
            <p
              style={{
                fontFamily,
                fontSize: 48,
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
        </div>

        {/* Logo brand */}
        <div
          style={{
            opacity: logoOp,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <Img
            src={staticFile("logo.png")}
            style={{ width: 52, height: 52, objectFit: "contain" }}
          />
          <p
            style={{
              fontFamily,
              fontSize: 36,
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
    </AbsoluteFill>
  );
};
