/**
 * Slideshow: "Torre — archetipo"
 * 5 Still compositions — TikTok 1080×1920
 *
 * Render:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s10/<filename>.png
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

// ── SLIDE 1 — COVER ──────────────────────────────────────────────
export const S10Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover"
    overlayOpacity={0.38}
    mainText={"Tutti cambiano.\nTu rimani fermo."}
    subText={"E non sai più se è una scelta.."}
  />
);

// ── SLIDE 2 — CONCEPT ────────────────────────────────────────────
export const S10Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.72}
    mainText={"Non è affidabilità.\nÈ immobilità\nmascherata da forza."}
    accentWords={["immobilità"]}
  />
);

// ── SLIDE 3 — LIST ───────────────────────────────────────────────
export const S10Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.72}
    mainText={"Cambiare"}
    subText={"non significa crollare.\nMa tu non ci credi ancora."}
    accentWords={["Cambiare"]}
  />
);

// ── SLIDE 4 — LIST ───────────────────────────────────────────────
export const S10Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.72}
    mainText={"Stabilità è una virtù."}
    subText={"Rigidità è una prigione."}
    accentWords={["Rigidità è una prigione."]}
  />
);

// ── SLIDE 5 — CTA ────────────────────────────────────────────────
export const S10Slide5CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Si chiama Torre."}
    subText={"Scopri il tuo archetipo. Gratis.\nLink in bio."}
    accentWords={["Torre."]}
  />
);
