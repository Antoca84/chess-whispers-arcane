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

export const Scene1HookV2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Testo: spring da 0 con leggero bounce
  const sp = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const scale = interpolate(sp, [0, 1], [0.78, 1]);
  const opacity = interpolate(sp, [0, 1], [0, 1]);

  // Numero "5" in alto a sinistra — appare prima con un flash
  const numOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Vignetta in basso per ancorare visivamente
  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/s1_chess_gold.jpg")}
        overlayOpacity={0.55}
        zoomTo={1.08}
      />

      {/* Vignetta bottom-up */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)",
        }}
      />

      {/* Contenuto testo */}
      <AbsoluteFill
        style={{
          padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Numero "5" grande come accento */}
        <div
          style={{
            fontFamily,
            fontSize: 200,
            fontWeight: 900,
            color: COLOR.GOLD,
            lineHeight: 1,
            opacity: numOpacity,
            marginBottom: -20,
          }}
        >
          5
        </div>

        {/* Testo hook */}
        <div
          style={{
            opacity,
            transform: `scale(${scale})`,
            transformOrigin: "left bottom",
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 68,
              fontWeight: 900,
              color: COLOR.WHITE,
              lineHeight: 1.15,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: -1,
            }}
          >
            segni che il tuo
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 80,
              fontWeight: 900,
              color: COLOR.GOLD,
              lineHeight: 1.1,
              margin: "4px 0",
              textTransform: "uppercase",
              letterSpacing: -1,
            }}
          >
            archetipo
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 60,
              fontWeight: 700,
              color: COLOR.WHITE,
              lineHeight: 1.2,
              margin: 0,
              opacity: 0.9,
            }}
          >
            ti sta bloccando
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
