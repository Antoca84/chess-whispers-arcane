/**
 * Slideshow: "Non sai quale pezzo sei"
 * 6 Still compositions — TikTok 1080×1920
 *
 * Render di ogni slide:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/<filename>.png
 *
 * Composizioni:
 *   Slide1Cover     — cover hook
 *   Slide2Concept   — 6 pezzi / uno di questi sei tu
 *   Slide3List      — item 1: stesse mosse
 *   Slide4List      — item 2: sai cosa vuoi
 *   Slide5List      — item 3: partita sbagliata
 *   Slide6CTA       — scopri quale pezzo sei
 */
import { SlideStill } from "./SlideStill";

/* Props condivise: solo bgUrl cambia per ogni slide */
type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER ──────────────────────────────────────────────
export const Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover"
    overlayOpacity={0.42}
    mainText="Non sai quale pezzo sei.."
    accentWords={["pezzo"]}
    subText={"E stai giocando una partita\nche non puoi vincere."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.48}
    mainText="Uno di questi sei tu."
    accentWords={["Uno"]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.68}
    listNumber="1."
    mainText={"Continui a fare\nle stesse mosse."}
    subText={"E ti sorprendi\ndello stesso risultato."}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.68}
    listNumber="2."
    mainText={"Sai cosa vuoi."}
    subText={"Ma non sai\ncome sei fatto."}
  />
);

// ── SLIDE 5 — LIST ───────────────────────────────────────────────
export const Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.68}
    listNumber="3."
    mainText={"Stai giocando bene."}
    subText={"La partita\nsbagliata."}
    accentWords={["sbagliata."]}
  />
);

// ── SLIDE 6 — CTA ────────────────────────────────────────────────
export const Slide6CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.42}
    mainText="Scopri quale pezzo sei."
    accentWords={["pezzo"]}
    subText={"Quiz gratuito — link in bio"}
  />
);
