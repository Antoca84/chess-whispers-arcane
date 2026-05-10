/**
 * Slideshow: "Parti da zero.. e sembra di essere indietro"
 * Il Pedone — 5 Still compositions — TikTok 1080×1920
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER ──────────────────────────────────────────────
export const S11Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover"
    overlayOpacity={0.45}
    mainText={"Guardi chi ti è vicino\ne sembra che sappiano\ngià dove vanno.."}
    subText={"Tu no."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S11Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.70}
    mainText={"Non sei indietro.\nStai solo giocando\nuna partita diversa."}
    accentWords={["Non sei indietro."]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const S11Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.72}
    listNumber="1."
    mainText={"Cambi strada."}
    subText={"Gli altri la chiamano instabilità.\nTu stai solo cercando\nla mossa giusta."}
    accentWords={["Cambi strada."]}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const S11Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.72}
    listNumber="2."
    mainText={"Parti da zero."}
    subText={"Il Pedone è l'unico pezzo\nche può diventare tutto."}
    accentWords={["diventare tutto."]}
  />
);

// ── SLIDE 5 — CTA ────────────────────────────────────────────────
export const S11Slide5CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Scopri chi sei davvero."}
    subText={"Quiz gratuito — link in bio"}
    accentWords={["davvero."]}
  />
);
