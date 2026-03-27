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
import { BgImage } from "../components/BgImage";
import { COLOR, SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

export const Scene4SymbolV2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Immagine Re del sito originale: appare con fade sopra la foto scacchi
  const reSp = spring({ frame, fps, config: { damping: 200 } });
  const reScale = interpolate(reSp, [0, 1], [0.85, 1]);
  const reOpacity = interpolate(reSp, [0, 1], [0, 0.9]);

  // Glow pulsante
  const glowPulse = interpolate(
    Math.sin((frame / fps / 1.3) * Math.PI * 2),
    [-1, 1],
    [0.3, 0.7]
  );

  // Label "Il Tuo Archetipo"
  const textOp = interpolate(frame, [15, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textTy = interpolate(frame, [15, 32], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Linea che si disegna
  const lineW = interpolate(frame, [8, 40], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Foto del Re degli scacchi come sfondo */}
      <BgImage
        src={staticFile("images/s4_chess_king.jpg")}
        overlayOpacity={0.75}
        zoomDirection="out"
        zoomTo={1.05}
      />

      {/* Bagliore gold centrale */}
      <AbsoluteFill
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLOR.GOLD}${Math.round(glowPulse * 60).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
          }}
        />
      </AbsoluteFill>

      {/* Immagine Re del sito originale — asset di brand */}
      <AbsoluteFill
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Img
          src={staticFile("images/archetipo_re.png")}
          style={{
            width: 420,
            height: 420,
            objectFit: "contain",
            opacity: reOpacity,
            transform: `scale(${reScale})`,
            filter: `drop-shadow(0 0 ${Math.round(glowPulse * 40)}px ${COLOR.GOLD})`,
          }}
        />
      </AbsoluteFill>

      {/* Testo */}
      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: `${lineW}%`,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${COLOR.GOLD}, transparent)`,
            marginBottom: 36,
          }}
        />

        <div
          style={{
            opacity: textOp,
            transform: `translateY(${textTy}px)`,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 40,
              fontWeight: 400,
              color: COLOR.MUTED,
              letterSpacing: 6,
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            Il Tuo
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 80,
              fontWeight: 700,
              color: COLOR.GOLD,
              letterSpacing: 2,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Archetipo
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
