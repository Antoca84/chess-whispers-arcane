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

  const sp = spring({ frame: local, fps, config: { damping: 200, stiffness: 90 } });
  const ty = interpolate(sp, [0, 1], [28, 0]);
  const op = interpolate(local, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 28,
        opacity: op,
        transform: `translateY(${ty}px)`,
        marginBottom: 52,
        background: "rgba(0,0,0,0.45)",
        borderLeft: `4px solid ${COLOR.GOLD}`,
        padding: "20px 28px",
        borderRadius: 8,
      }}
    >
      <span
        style={{
          fontFamily,
          fontSize: 52,
          fontWeight: 900,
          color: COLOR.GOLD,
          lineHeight: 1,
          minWidth: 36,
        }}
      >
        {number}
      </span>
      <p
        style={{
          fontFamily,
          fontSize: 48,
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

export const Scene2ProblemsV2 = () => {
  const frame = useCurrentFrame();
  const labelOp = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/s2_man_dark.jpg")}
        overlayOpacity={0.72}
        zoomDirection="out"
        zoomTo={1.05}
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
            margin: "0 0 48px 0",
            opacity: labelOp,
          }}
        >
          Ti riconosci?
        </p>

        <ProblemItem
          number="1"
          text="Procrastini le decisioni importanti."
          delayFrames={8}
        />
        <ProblemItem
          number="2"
          text="Ti senti frainteso dagli altri."
          delayFrames={24}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
