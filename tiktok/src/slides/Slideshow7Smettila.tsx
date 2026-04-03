/**
 * Slideshow: "4 cose da smettere subito se vuoi sbloccarti davvero"
 * 7 Still compositions — TikTok 1080×1920
 *
 * Render:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s7/<filename>.png
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER HERO ─────────────────────────────────────────
export const S7Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover-hero"
    overlayOpacity={0.35}
    heroNumber="4"
    mainText={"cose da smettere\nsubito.."}
    subText={"Se vuoi sbloccarti davvero."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S7Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.55}
    mainText={"Non sei bloccato.\nStai aspettando\nil permesso di muoverti."}
    accentWords={["il permesso di muoverti."]}
  />
);

// ── SLIDE 3 — LIST 1 ─────────────────────────────────────────────
export const S7Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="1."
    mainText={"Smetti di aspettare\ndi sentirti pronto."}
    subText={"Non ti sentirai mai pronto."}
    accentWords={["Non ti sentirai mai pronto."]}
  />
);

// ── SLIDE 4 — LIST 2 ─────────────────────────────────────────────
export const S7Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="2."
    mainText={"Smetti di spiegare\nle tue scelte."}
    subText={"Non devono capire."}
    accentWords={["Non devono capire."]}
  />
);

// ── SLIDE 5 — LIST 3 ─────────────────────────────────────────────
export const S7Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="3."
    mainText={"Smetti di ripartire\nda zero ogni volta."}
    subText={"Continua da dove sei."}
    accentWords={["Continua da dove sei."]}
  />
);

// ── SLIDE 6 — LIST 4 ─────────────────────────────────────────────
export const S7Slide6List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="4."
    mainText={"Smetti di giocare\nper non perdere."}
    subText={"Gioca per vincere."}
    accentWords={["Gioca per vincere."]}
  />
);

// ── SLIDE 7 — CTA ────────────────────────────────────────────────
export const S7Slide7CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Scopri quale pezzo\nti sta bloccando."}
    accentWords={["ti sta bloccando."]}
    subText={"Quiz gratuito — link in bio"}
  />
);
