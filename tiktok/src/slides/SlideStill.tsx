/**
 * SlideStill — componente base per slideshow TikTok Scacchi Mentali
 *
 * Layout brand:
 * - Sfondo: immagine esterna (bgUrl) + overlay scuro
 * - Testo bianco ALL CAPS, Montserrat Bold
 * - Keyword in arancio #FF6600
 * - Watermark "SCACCHI MENTALI" sempre in fondo
 * - Safe zones 1080×1920
 */
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { SAFE } from "../constants";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export type SlideStillProps = {
  bgUrl: string;
  /** Opacità overlay scuro sopra l'immagine (0–1) */
  overlayOpacity?: number;
  /** Tipo di slide — cambia layout e dimensioni testo */
  type: "cover" | "cover-hero" | "concept" | "list" | "cta";
  /** Testo principale grande (cover/cta: headline, list: item) */
  mainText: string;
  /** Parole da evidenziare in arancio (esatta corrispondenza substring) */
  accentWords?: string[];
  /** Testo secondario / sottotitolo */
  subText?: string;
  /** Numero progressivo per le slide lista ("1.", "2.", "3.") */
  listNumber?: string;
  /** cover-hero: numero/percentuale gigante che domina la slide (es. "4", "3%") */
  heroNumber?: string;
};

const ORANGE = "#FF6600";
const WHITE = "#FFFFFF";
const WATERMARK = "rgba(255,255,255,0.75)";

/** Sostituisce le accentWords con span arancio */
function renderWithAccent(text: string, accentWords: string[] = []) {
  if (!accentWords.length) return text;

  const regex = new RegExp(`(${accentWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    accentWords.some(w => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} style={{ color: ORANGE }}>{part}</span>
      : part
  );
}

export const SlideStill = ({
  bgUrl,
  overlayOpacity = 0.5,
  type,
  mainText,
  accentWords = [],
  subText,
  listNumber,
  heroNumber,
}: SlideStillProps) => {

  const isCover = type === "cover";
  const isCoverHero = type === "cover-hero";
  const isList = type === "list";
  const isCta = type === "cta";
  const isConcept = type === "concept";

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a", fontFamily }}>

      {/* Sfondo immagine */}
      <AbsoluteFill>
        <Img
          src={bgUrl}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Overlay scuro */}
      <AbsoluteFill
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* ── COVER / CTA ── testo nel terzo inferiore */}
      {(isCover || isCta) && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: `${SAFE.TOP}px ${SAFE.SIDE}px`,
            gap: 0,
            justifyContent: "center",
          }}
        >
          <p style={{
            fontSize: isCta ? 72 : 80,
            fontWeight: 900,
            color: isCta ? ORANGE : WHITE,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: 2,
            margin: "0 0 24px 0",
          }}>
            {renderWithAccent(mainText, accentWords)}
          </p>

          {subText && (
            <p style={{
              fontSize: isCta ? 48 : 52,
              fontWeight: 600,
              color: isCta ? WHITE : WHITE,
              fontStyle: "italic",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.25,
              letterSpacing: 3,
              margin: 0,
              opacity: 0.9,
            }}>
              {subText}
            </p>
          )}
        </AbsoluteFill>
      )}

      {/* ── COVER-HERO ── numero gigante in alto + titolo + sottotitolo in basso */}
      {isCoverHero && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${SAFE.TOP + 240}px ${SAFE.SIDE}px ${SAFE.BOTTOM + 100}px`,
          }}
        >
          {/* Numero/percentuale hero — occupa metà schermo */}
          {heroNumber && (
            <p style={{
              fontSize: 380,
              fontWeight: 900,
              color: WHITE,
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 0.9,
              letterSpacing: -8,
              margin: 0,
              opacity: 0.92,
              textShadow: `0 0 120px rgba(255,102,0,0.5), 0 8px 40px rgba(0,0,0,0.8)`,
            }}>
              <span style={{ color: ORANGE }}>{heroNumber}</span>
            </p>
          )}

          {/* Testo inferiore */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <p style={{
              fontSize: 72,
              fontWeight: 900,
              color: WHITE,
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: 2,
              margin: 0,
            }}>
              {renderWithAccent(mainText, accentWords)}
            </p>
            {subText && (
              <p style={{
                fontSize: 50,
                fontWeight: 600,
                color: WHITE,
                fontStyle: "italic",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.2,
                letterSpacing: 3,
                margin: 0,
                opacity: 0.85,
              }}>
                {subText}
              </p>
            )}
          </div>
        </AbsoluteFill>
      )}

      {/* ── CONCEPT ── testo singolo centrato in basso */}
      {isConcept && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: `${SAFE.TOP}px ${SAFE.SIDE}px ${SAFE.BOTTOM + 140}px`,
          }}
        >
          <p style={{
            fontSize: 62,
            fontWeight: 700,
            color: WHITE,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: 4,
            margin: 0,
          }}>
            {renderWithAccent(mainText, accentWords)}
          </p>
        </AbsoluteFill>
      )}

      {/* ── LIST ── due blocchi testo centrati verticalmente */}
      {isList && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: `${SAFE.TOP}px ${SAFE.SIDE + 20}px ${SAFE.BOTTOM + 120}px`,
            gap: 0,
          }}
        >
          {/* Numero */}
          {listNumber && (
            <p style={{
              fontSize: 36,
              fontWeight: 400,
              color: ORANGE,
              textTransform: "uppercase",
              letterSpacing: 6,
              margin: "0 0 16px 0",
              opacity: 0.9,
            }}>
              {listNumber}
            </p>
          )}

          {/* Testo principale item */}
          <p style={{
            fontSize: 64,
            fontWeight: 900,
            color: WHITE,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: 1,
            margin: "0 0 32px 0",
          }}>
            {renderWithAccent(mainText, accentWords)}
          </p>

          {/* Consequenza / sottotesto */}
          {subText && (
            <>
              {/* Separatore */}
              <div style={{
                width: 60,
                height: 2,
                backgroundColor: ORANGE,
                opacity: 0.6,
                marginBottom: 28,
              }} />
              <p style={{
                fontSize: 50,
                fontWeight: 600,
                fontStyle: "italic",
                color: WHITE,
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.2,
                letterSpacing: 2,
                margin: 0,
                opacity: 0.85,
              }}>
                {subText}
              </p>
            </>
          )}
        </AbsoluteFill>
      )}

      {/* ── WATERMARK "SCACCHI MENTALI" — sempre in fondo ── */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: SAFE.BOTTOM - 20,
        }}
      >
        <p style={{
          fontSize: 28,
          fontWeight: 600,
          color: WATERMARK,
          textTransform: "uppercase",
          letterSpacing: 10,
          margin: 0,
        }}>
          SCACCHI MENTALI
        </p>
      </AbsoluteFill>

    </AbsoluteFill>
  );
};
