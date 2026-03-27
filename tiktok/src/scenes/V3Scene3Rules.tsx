/**
 * SCENA 3 — LE REGOLE DEGLI ALTRI (3s)
 * "Le regole degli altri. Le strategie degli altri. I risultati degli altri."
 *
 * Tecnica max engagement: tre colpi rapidi staggerati ogni 10 frame.
 * Ritmo martellante — si legge come un'accusa.
 * Background: pedoni in fila rossa — massa indistinta che obbedisce.
 */
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  staticFile,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { BgImage } from "../components/BgImage";
import { COLOR, SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

type PunchProps = { text: string; delayFrames: number };

const Punch = ({ text, delayFrames }: PunchProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delayFrames);

  const sp = spring({ frame: local, fps, config: { damping: 200, stiffness: 200 } });
  const ty = interpolate(sp, [0, 1], [20, 0]);
  const op = interpolate(local, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  const sc = interpolate(sp, [0, 1], [0.96, 1]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        opacity: op,
        transform: `translateY(${ty}px) scale(${sc})`,
        marginBottom: 36,
      }}
    >
      {/* Trattino oro — come una riga in una lista di accuse */}
      <div
        style={{
          width: 32,
          height: 3,
          background: COLOR.GOLD,
          flexShrink: 0,
          borderRadius: 2,
        }}
      />
      <p
        style={{
          fontFamily,
          fontSize: 56,
          fontWeight: 700,
          color: COLOR.WHITE,
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export const V3Scene3Rules = () => {
  const frame = useCurrentFrame();

  // "Segui" — intro label
  const introOp = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/v3/s3_pedoni_rosso.jpg")}
        overlayOpacity={0.78}
        zoomDirection="out"
        zoomTo={1.04}
      />

      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Intro label */}
        <p
          style={{
            fontFamily,
            fontSize: 36,
            fontWeight: 400,
            color: COLOR.MUTED,
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: "0 0 48px 0",
            opacity: introOp,
          }}
        >
          Usa
        </p>

        {/* Tre colpi */}
        <Punch text="Le regole degli altri." delayFrames={4} />
        <Punch text="Le strategie degli altri." delayFrames={14} />
        <Punch text="I risultati degli altri." delayFrames={24} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
