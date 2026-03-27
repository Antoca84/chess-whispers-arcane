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
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

type ItemProps = { number: string; text: string; delayFrames: number };

const ProblemItem = ({ number, text, delayFrames }: ItemProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delayFrames);

  const sp = spring({ frame: local, fps, config: { damping: 200, stiffness: 100 } });
  const ty = interpolate(sp, [0, 1], [22, 0]);
  const op = interpolate(local, [0, 8], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        opacity: op,
        transform: `translateY(${ty}px)`,
        marginBottom: 40,
        background: "rgba(0,0,0,0.45)",
        borderLeft: `4px solid ${COLOR.GOLD}`,
        padding: "16px 24px",
        borderRadius: 8,
      }}
    >
      <span
        style={{
          fontFamily,
          fontSize: 44,
          fontWeight: 900,
          color: COLOR.GOLD,
          lineHeight: 1,
          minWidth: 30,
        }}
      >
        {number}
      </span>
      <p
        style={{
          fontFamily,
          fontSize: 44,
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

export const Scene3InsightV2 = () => {
  const frame = useCurrentFrame();
  const labelOp = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/s3_silhouette.jpg")}
        overlayOpacity={0.68}
        zoomTo={1.06}
      />

      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 34,
            fontWeight: 400,
            color: COLOR.GOLD,
            letterSpacing: 5,
            textTransform: "uppercase",
            margin: "0 0 44px 0",
            opacity: labelOp,
          }}
        >
          Continua...
        </p>

        <ProblemItem
          number="3"
          text="Inizi mille cose, non ne finisci una."
          delayFrames={6}
        />
        <ProblemItem
          number="4"
          text="Dici sempre di sì, anche quando vorresti dire no."
          delayFrames={18}
        />
        <ProblemItem
          number="5"
          text="Hai grandi idee, ma la paura ti ferma."
          delayFrames={30}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
