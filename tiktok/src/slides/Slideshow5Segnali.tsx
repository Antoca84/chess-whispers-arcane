/**
 * Slideshow: "3 segnali che stai sabotando te stesso"
 * 6 Still compositions — TikTok 1080×1920
 *
 * Render di ogni slide:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s5/<filename>.png
 *
 * Composizioni:
 *   S5Slide1Cover   — cover hero: 3 segnali
 *   S5Slide2Concept — non è debolezza, è la mossa sbagliata
 *   S5Slide3List    — item 1: sai cosa fare ma non lo fai
 *   S5Slide4List    — item 2: aspetti il momento giusto
 *   S5Slide5List    — item 3: hai paura di sbagliare
 *   S5Slide6CTA     — scopri il tuo pezzo
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER HERO ─────────────────────────────────────────
export const S5Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover-hero"
    overlayOpacity={0.35}
    heroNumber="3"
    mainText={"segnali che non riesci\na ignorare.."}
    subText={"E che ti stanno bloccando."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S5Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.55}
    mainText={"Non è debolezza.\nÈ la mossa sbagliata."}
    accentWords={["mossa sbagliata."]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const S5Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="1."
    mainText={"Sai cosa fare."}
    subText={"Ma non lo fai."}
    accentWords={["Ma non lo fai."]}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const S5Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="2."
    mainText={"Aspetti il\nmomento giusto."}
    subText={"Il momento è adesso."}
    accentWords={["adesso."]}
  />
);

// ── SLIDE 5 — LIST ───────────────────────────────────────────────
export const S5Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="3."
    mainText={"Hai paura\ndi sbagliare."}
    subText={"E non muovi niente."}
    accentWords={["non muovi niente."]}
  />
);

// ── SLIDE 6 — CTA ────────────────────────────────────────────────
export const S5Slide6CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Scopri il tuo\npezzo."}
    accentWords={["pezzo."]}
    subText={"Quiz gratuito — link in bio"}
  />
);
