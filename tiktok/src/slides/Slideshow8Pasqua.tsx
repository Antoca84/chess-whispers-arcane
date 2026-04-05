/**
 * Slideshow: "3 cose da lasciar morire prima di rinascere" (Pasqua)
 * 6 Still compositions — TikTok 1080×1920
 *
 * Render:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s8/<filename>.png
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER HERO ─────────────────────────────────────────
export const S8Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover-hero"
    overlayOpacity={0.35}
    heroNumber="3"
    mainText={"cose da lasciar morire\nprima di rinascere."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S8Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.55}
    mainText={"Non si rinasce\nportandosi dietro\nlo stesso peso."}
    accentWords={["lo stesso peso."]}
  />
);

// ── SLIDE 3 — LIST 1 ─────────────────────────────────────────────
export const S8Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="1."
    mainText={"La versione di te\nche aspetta il momento giusto."}
    subText={"Non arriverà."}
    accentWords={["Non arriverà."]}
  />
);

// ── SLIDE 4 — LIST 2 ─────────────────────────────────────────────
export const S8Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="2."
    mainText={"Il bisogno di piacere\na tutti."}
    subText={"Ti sta bloccando."}
    accentWords={["Ti sta bloccando."]}
  />
);

// ── SLIDE 5 — LIST 3 ─────────────────────────────────────────────
export const S8Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="3."
    mainText={"La paura\ndi sbagliare mossa."}
    subText={"Chi non muove, non vince."}
    accentWords={["Chi non muove, non vince."]}
  />
);

// ── SLIDE 6 — CTA ────────────────────────────────────────────────
export const S8Slide6CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Questa Pasqua\ncambia mossa."}
    accentWords={["cambia mossa."]}
    subText={"Quiz gratuito — link in bio"}
  />
);
