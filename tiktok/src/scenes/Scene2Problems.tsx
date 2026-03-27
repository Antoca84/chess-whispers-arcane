import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { COLOR, SAFE, FPS } from "../constants";

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
    config: { damping: 200, stiffness: 100 },
  });
  const translateY = interpolate(slideProgress, [0, 1], [30, 0]);
  const opacity = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 32,
        opacity,
        transform: `translateY(${translateY}px)`,
        marginBottom: 56,
      }}
    >
      {/* Numero circolare */}
      <div
        style={{
          minWidth: 72,
          width: 72,
          height: 72,
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
            fontSize: 36,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1,
          }}
        >
          {number}
        </span>
      </div>

      {/* Testo problema */}
      <p
        style={{
          fontFamily,
          fontSize: 52,
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

export const Scene2Problems = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Etichetta "Riconosci..." con fade-in iniziale
  const labelOpacity = interpolate(frame, [0, 15], [0, 1], {
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
      {/* Linea sottile decorativa in alto */}
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

      {/* Label categoria */}
      <p
        style={{
          fontFamily,
          fontSize: 36,
          fontWeight: 400,
          color: COLOR.GOLD,
          letterSpacing: 4,
          textTransform: "uppercase",
          margin: "0 0 64px 0",
          opacity: labelOpacity,
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
        delayFrames={22}
      />
    </AbsoluteFill>
  );
};
