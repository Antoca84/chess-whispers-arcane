/**
 * SCENA 4 — IL CAVALLO (3s)
 * "Il 3% conosce la propria mossa unica."
 *
 * Tecnica max engagement: inversione narrativa netta.
 * "Il 3% no." — tre parole che azzerano tutto il prima.
 * Il Cavallo emerge dal buio come metafora visiva dell'unicità.
 * Transizione breve (5 frame) dalla scena 3 — flash cut, non dissolvenza.
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
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});

export const V3Scene4Knight = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Il 3% no." — apparizione immediata e decisa
  const sp1 = spring({ frame, fps, config: { damping: 200, stiffness: 160 } });
  const sc1 = interpolate(sp1, [0, 1], [0.92, 1]);
  const op1 = interpolate(sp1, [0, 1], [0, 1]);

  // "Conosce la propria..." — dopo pausa
  const sp2 = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 200, stiffness: 90 },
  });
  const op2 = interpolate(sp2, [0, 1], [0, 1]);
  const ty2 = interpolate(sp2, [0, 1], [18, 0]);

  // Cavallo immagine — parallax leggero verso l'alto nel tempo
  const imgTy = interpolate(frame, [0, 90], [0, -10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <BgImage
        src={staticFile("images/v3/s4_cavallo.jpg")}
        overlayOpacity={0.68}
        zoomDirection="in"
        zoomTo={1.07}
      />

      {/* Gradiente bottom */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)",
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
        {/* "Il 3% no." — risposta diretta e netta */}
        <div
          style={{
            opacity: op1,
            transform: `scale(${sc1})`,
            transformOrigin: "left bottom",
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 52,
              fontWeight: 400,
              color: COLOR.MUTED,
              lineHeight: 1,
              margin: 0,
            }}
          >
            Il 3%
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 100,
              fontWeight: 900,
              color: COLOR.GOLD,
              lineHeight: 0.95,
              margin: 0,
              letterSpacing: -2,
            }}
          >
            no.
          </p>
        </div>

        {/* Frase completa */}
        <div
          style={{
            opacity: op2,
            transform: `translateY(${ty2}px)`,
          }}
        >
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
            Conosce la propria
          </p>
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
            mossa unica.
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
