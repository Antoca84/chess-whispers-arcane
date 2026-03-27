/**
 * SCENA 5 — GLI ARCHETIPI (3s)
 * "L'Alfiere non si muove come la Torre. La tua mossa si chiama Archetipo."
 *
 * Tecnica max engagement: tutti e 6 i simboli degli archetipi appaiono
 * uno dopo l'altro con spring rapido — visual explosion di identità.
 * Usa le immagini REALI degli archetipi dal sito Scacchi Mentali.
 * L'utente si chiede: "Quale sono io?" — curiosità che porta al quiz.
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

const ARCHETYPES = [
  { file: "re.png", symbol: "♔", label: "Re", color: "#FFD700" },
  { file: "regina.png", symbol: "♕", label: "Regina", color: "#8A2BE2" },
  { file: "torre.png", symbol: "♖", label: "Torre", color: "#32CD32" },
  { file: "alfiere.png", symbol: "♗", label: "Alfiere", color: "#FF4500" },
  { file: "cavallo.png", symbol: "♞", label: "Cavallo", color: "#00CED1" },
  { file: "pedone.png", symbol: "♙", label: "Pedone", color: "#DC143C" },
];

type ArchIconProps = {
  arch: (typeof ARCHETYPES)[0];
  delayFrames: number;
};

const ArchIcon = ({ arch, delayFrames }: ArchIconProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delayFrames);

  const sp = spring({ frame: local, fps, config: { damping: 12, stiffness: 180, mass: 0.6 } });
  const scale = interpolate(sp, [0, 1], [0, 1]);
  const op = interpolate(local, [0, 4], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity: op,
        transform: `scale(${scale})`,
      }}
    >
      <Img
        src={staticFile(`images/v3/${arch.file}`)}
        style={{
          width: 110,
          height: 110,
          objectFit: "contain",
          filter: `drop-shadow(0 0 12px ${arch.color}88)`,
        }}
      />
      <span
        style={{
          fontFamily,
          fontSize: 28,
          fontWeight: 700,
          color: arch.color,
          letterSpacing: 1,
        }}
      >
        {arch.label}
      </span>
    </div>
  );
};

export const V3Scene5Archetypes = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Frase superiore
  const lineOp = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const lineTy = interpolate(frame, [0, 12], [-16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Frase inferiore — appare dopo le icone
  const ctaSp = spring({
    frame: Math.max(0, frame - 52),
    fps,
    config: { damping: 200 },
  });
  const ctaOp = interpolate(ctaSp, [0, 1], [0, 1]);
  const ctaTy = interpolate(ctaSp, [0, 1], [16, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR.BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
        gap: 0,
      }}
    >
      {/* Frase apertura */}
      <p
        style={{
          fontFamily,
          fontSize: 44,
          fontWeight: 700,
          color: COLOR.WHITE,
          lineHeight: 1.2,
          textAlign: "center",
          margin: "0 0 48px 0",
          opacity: lineOp,
          transform: `translateY(${lineTy}px)`,
        }}
      >
        Ogni pezzo ha la sua mossa.
      </p>

      {/* Griglia 3×2 degli archetipi */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px 40px",
          marginBottom: 56,
        }}
      >
        {ARCHETYPES.map((arch, i) => (
          <ArchIcon
            key={arch.label}
            arch={arch}
            delayFrames={8 + i * 8}
          />
        ))}
      </div>

      {/* Frase chiusura — naming del prodotto */}
      <div
        style={{
          opacity: ctaOp,
          transform: `translateY(${ctaTy}px)`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 40,
            fontWeight: 400,
            color: COLOR.MUTED,
            letterSpacing: 1,
            margin: "0 0 8px 0",
          }}
        >
          La tua si chiama
        </p>
        <p
          style={{
            fontFamily,
            fontSize: 72,
            fontWeight: 900,
            color: COLOR.GOLD,
            letterSpacing: -1,
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Archetipo
        </p>
      </div>
    </AbsoluteFill>
  );
};
