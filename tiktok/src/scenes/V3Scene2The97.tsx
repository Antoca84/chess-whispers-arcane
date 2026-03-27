/**
 * SCENA 2 — IL 97% (3s)
 * "Il 97% gioca una partita che non è la sua."
 *
 * Tecnica max engagement: testo a 3 frammenti con "word drop" staggerato.
 * L'immagine di sfondo mostra UN pezzo nero separato dalla massa di pedoni rossi
 * — metafora visiva immediata del 3% vs 97%.
 */
import {
  AbsoluteFill,
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
  weights: ["700", "900"],
  subsets: ["latin"],
});

type LineProps = {
  text: string;
  size: number;
  color: string;
  delayFrames: number;
  dimAt?: number; // frame in cui si attenua (per dar spazio alla riga successiva)
};

const Line = ({ text, size, color, delayFrames, dimAt }: LineProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delayFrames);

  const sp = spring({ frame: local, fps, config: { damping: 200, stiffness: 120 } });
  const ty = interpolate(sp, [0, 1], [30, 0]);
  const baseOp = interpolate(local, [0, 8], [0, 1], { extrapolateRight: "clamp" });

  // Se dimAt è definito, attenua leggermente quando arriva la riga successiva
  const dimOp =
    dimAt !== undefined
      ? interpolate(frame, [dimAt, dimAt + 6], [1, 0.5], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  return (
    <p
      style={{
        fontFamily,
        fontSize: size,
        fontWeight: 900,
        color,
        lineHeight: 1.15,
        margin: 0,
        opacity: baseOp * dimOp,
        transform: `translateY(${ty}px)`,
      }}
    >
      {text}
    </p>
  );
};

export const V3Scene2The97 = () => {
  const frame = useCurrentFrame();

  const badgeOp = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/v3/s2_uno_vs_massa.jpg")}
        overlayOpacity={0.7}
        zoomTo={1.06}
      />

      {/* Gradiente top per separare il badge */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 40%)",
        }}
      />

      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Badge "97%" in alto come contatore */}
        <div
          style={{
            position: "absolute",
            top: SAFE.TOP + 8,
            right: SAFE.SIDE,
            opacity: badgeOp,
            background: "rgba(255,255,255,0.08)",
            border: `1px solid rgba(255,255,255,0.2)`,
            borderRadius: 8,
            padding: "8px 20px",
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 36,
              fontWeight: 700,
              color: COLOR.MUTED,
              letterSpacing: 2,
            }}
          >
            il 97%
          </span>
        </div>

        {/* Testo principale — 3 linee staggerate */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Line
            text="Gioca una partita"
            size={72}
            color={COLOR.WHITE}
            delayFrames={6}
            dimAt={26}
          />
          <Line
            text="che non è"
            size={72}
            color={COLOR.WHITE}
            delayFrames={18}
            dimAt={36}
          />
          <Line
            text="la sua."
            size={88}
            color={COLOR.GOLD}
            delayFrames={30}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
