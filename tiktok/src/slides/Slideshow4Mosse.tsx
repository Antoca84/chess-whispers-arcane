/**
 * Slideshow: "4 mosse che ti tengono fermo"
 * 6 Still compositions — TikTok 1080×1920
 *
 * Render di ogni slide:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s4/<filename>.png
 *
 * Composizioni:
 *   S4Slide1Cover   — cover hook: 4 mosse ogni giorno
 *   S4Slide2Concept — non è talento, è strategia
 *   S4Slide3List    — item 1: aspetti che cambino da sole
 *   S4Slide4List    — item 2: movimento ≠ progresso
 *   S4Slide5List    — item 3: partita di qualcun altro
 *   S4Slide6CTA     — scopri quale pezzo ti blocca
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER ──────────────────────────────────────────────
export const S4Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover"
    overlayOpacity={0.44}
    mainText={"4 mosse che fai\nogni giorno.."}
    accentWords={["4"]}
    subText={"E ti tengono\nfermo."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S4Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.50}
    mainText={"Non è mancanza\ndi talento.\nÈ la strategia sbagliata."}
    accentWords={["strategia sbagliata."]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const S4Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.68}
    listNumber="1."
    mainText={"Aspetti che le cose\ncambino da sole."}
    subText={"Il tabellone\nnon aspetta."}
    accentWords={["tabellone"]}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const S4Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.68}
    listNumber="2."
    mainText={"Confusi movimento\ncon progresso."}
    subText={"Tanti passi.\nNessuna direzione."}
    accentWords={["Nessuna direzione."]}
  />
);

// ── SLIDE 5 — LIST ───────────────────────────────────────────────
export const S4Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.68}
    listNumber="3."
    mainText={"Stai giocando\nla partita\ndi qualcun altro."}
    subText={"Con le tue pedine."}
    accentWords={["pedine."]}
  />
);

// ── SLIDE 6 — CTA ────────────────────────────────────────────────
export const S4Slide6CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.44}
    mainText={"Scopri quale pezzo\nti sta bloccando."}
    accentWords={["bloccando."]}
    subText={"Quiz gratuito — link in bio"}
  />
);
