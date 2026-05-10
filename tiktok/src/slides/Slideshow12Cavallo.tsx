/**
 * Slideshow: "La tua mente non si ferma mai"
 * Il Cavallo — 5 Still compositions — TikTok 1080×1920
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER ──────────────────────────────────────────────
export const S12Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover"
    overlayOpacity={0.45}
    mainText={"La tua mente\nnon si ferma mai.."}
    subText={"E non sai se è un dono\no un problema."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S12Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.70}
    mainText={"Non è dispersione.\nÈ intelligenza che\nnon ha ancora trovato\nla sua forma."}
    accentWords={["Non è dispersione."]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const S12Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.72}
    listNumber="1."
    mainText={"Inizi tutto."}
    subText={"Non perché sei superficiale.\nPerché vedi connessioni\nche gli altri non vedono ancora."}
    accentWords={["Inizi tutto."]}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const S12Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.72}
    listNumber="2."
    mainText={"Non ti muovi\nin linea retta."}
    subText={"Il Cavallo è l'unico pezzo\nche salta gli ostacoli.\nNon li aggira. Li salta."}
    accentWords={["Li salta."]}
  />
);

// ── SLIDE 5 — CTA ────────────────────────────────────────────────
export const S12Slide5CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Il tuo movimento\nha un nome."}
    subText={"Quiz gratuito — link in bio"}
    accentWords={["ha un nome."]}
  />
);
