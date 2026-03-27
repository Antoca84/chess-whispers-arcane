import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

type BgImageProps = {
  src: string;
  /** Ken Burns: quanto zoomma nel corso della scena (default 1.06) */
  zoomTo?: number;
  /** Opacità dell'overlay scuro sopra l'immagine (0-1, default 0.62) */
  overlayOpacity?: number;
  /** Direzione zoom: "in" (default) o "out" */
  zoomDirection?: "in" | "out";
};

export const BgImage = ({
  src,
  zoomTo = 1.06,
  overlayOpacity = 0.62,
  zoomDirection = "in",
}: BgImageProps) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const scale = interpolate(
    frame,
    [0, durationInFrames],
    zoomDirection === "in" ? [1, zoomTo] : [zoomTo, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill>
      {/* Immagine con Ken Burns */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Overlay scuro per leggibilità testo */}
      <AbsoluteFill
        style={{
          background: `rgba(0,0,0,${overlayOpacity})`,
        }}
      />
    </AbsoluteFill>
  );
};
