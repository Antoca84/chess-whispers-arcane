/**
 * Slideshow: "2 tipi di persona su una scacchiera"
 * 6 Still compositions — TikTok 1080×1920
 *
 * Render:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s6/<filename>.png
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER HERO ─────────────────────────────────────────
export const S6Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover-hero"
    overlayOpacity={0.35}
    heroNumber="2"
    mainText={"tipi di persona\nsu una scacchiera.."}
    subText={"Quale sei tu?"}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S6Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.55}
    mainText={"C'è chi gioca.\nE chi aspetta che\nqualcuno muova per lui."}
    accentWords={["gioca."]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const S6Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="1."
    mainText={"Chi gioca."}
    subText={"Non aspetta il momento perfetto.\nSi muove e impara."}
    accentWords={["Si muove e impara."]}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const S6Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="2."
    mainText={"Chi aspetta."}
    subText={"Analizza. Pianifica.\nNon muove mai."}
    accentWords={["Non muove mai."]}
  />
);

// ── SLIDE 5 — LIST ───────────────────────────────────────────────
export const S6Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    mainText={"La differenza."}
    subText={"Non è il talento.\nÈ la decisione di muoversi."}
    accentWords={["decisione di muoversi."]}
  />
);

// ── SLIDE 6 — CTA ────────────────────────────────────────────────
export const S6Slide6CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Scopri quale pezzo\nsei davvero."}
    accentWords={["sei davvero."]}
    subText={"Quiz gratuito — link in bio"}
  />
);
