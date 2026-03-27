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

export const Scene5TransformV2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Prima parte
  const sp1 = spring({ frame, fps, config: { damping: 200 } });
  const op1 = interpolate(sp1, [0, 1], [0, 1]);
  const sc1 = interpolate(sp1, [0, 1], [0.94, 1]);

  // Seconda parte (insight gold)
  const local2 = Math.max(0, frame - 16);
  const sp2 = spring({ frame: local2, fps, config: { damping: 200 } });
  const op2 = interpolate(sp2, [0, 1], [0, 1]);
  const ty2 = interpolate(sp2, [0, 1], [18, 0]);

  // Linea divisoria
  const lineW = interpolate(frame, [10, 35], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/s5_horizon.jpg")}
        overlayOpacity={0.65}
        zoomTo={1.05}
      />

      {/* Gradiente bottom per ancorare il testo */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
        }}
      />

      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Prima frase */}
        <div
          style={{
            opacity: op1,
            transform: `scale(${sc1})`,
            transformOrigin: "left bottom",
            marginBottom: 16,
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 64,
              fontWeight: 900,
              color: COLOR.WHITE,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Il tuo problema
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 64,
              fontWeight: 900,
              color: COLOR.WHITE,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            non è la
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 64,
              fontWeight: 900,
              color: COLOR.MUTED,
              lineHeight: 1.15,
              margin: "4px 0 0",
              textDecoration: "line-through",
              textDecorationColor: COLOR.GOLD,
              textDecorationThickness: 3,
            }}
          >
            disciplina.
          </p>
        </div>

        {/* Linea */}
        <div
          style={{
            width: `${lineW}%`,
            height: 3,
            background: COLOR.GOLD,
            marginBottom: 32,
            borderRadius: 2,
          }}
        />

        {/* Insight */}
        <div
          style={{
            opacity: op2,
            transform: `translateY(${ty2}px)`,
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 38,
              fontWeight: 400,
              color: COLOR.MUTED,
              letterSpacing: 1,
              margin: "0 0 8px 0",
            }}
          >
            È la
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 104,
              fontWeight: 900,
              color: COLOR.GOLD,
              lineHeight: 1,
              margin: 0,
              letterSpacing: -2,
            }}
          >
            strategia.
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
