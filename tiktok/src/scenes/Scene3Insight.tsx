import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { COLOR, SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

type ProblemItemProps = {
  number: string;
  text: string;
  delayFrames: number;
};

const ProblemItem = ({ number, text, delayFrames }: ProblemItemProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = Math.max(0, frame - delayFrames);

  const slideProgress = spring({
    frame: localFrame,
    fps,
    config: { damping: 200, stiffness: 110 },
  });
  const translateY = interpolate(slideProgress, [0, 1], [25, 0]);
  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 28,
        opacity,
        transform: `translateY(${translateY}px)`,
        marginBottom: 44,
      }}
    >
      <div
        style={{
          minWidth: 64,
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: `3px solid ${COLOR.GOLD}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 4,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 32,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1,
          }}
        >
          {number}
        </span>
      </div>

      <p
        style={{
          fontFamily,
          fontSize: 48,
          fontWeight: 700,
          color: COLOR.WHITE,
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export const Scene3Insight = () => {
  const frame = useCurrentFrame();

  const labelOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLOR.BG,
        padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: SAFE.TOP - 20,
          left: SAFE.SIDE,
          right: SAFE.SIDE,
          height: 2,
          background: `linear-gradient(90deg, ${COLOR.GOLD}, transparent)`,
          opacity: labelOpacity,
        }}
      />

      <p
        style={{
          fontFamily,
          fontSize: 36,
          fontWeight: 400,
          color: COLOR.GOLD,
          letterSpacing: 4,
          textTransform: "uppercase",
          margin: "0 0 56px 0",
          opacity: labelOpacity,
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
        delayFrames={32}
      />
    </AbsoluteFill>
  );
};
