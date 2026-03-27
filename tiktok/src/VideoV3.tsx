/**
 * VIDEO V3 — "Solo il 3%"
 *
 * Hook tipo: Esclusività/Percentuale
 * Copy: Kairos — voce diretta, nessuna pausa inutile
 * Durata: ~14.5s (435 frame @ 30fps)
 * Transizioni: fade da 12 frame tra scene (più breve del V1/V2 = ritmo più serrato)
 *
 * Struttura:
 *   S1 (2.5s) — "3%" spring bounce → hook visivo immediato
 *   S2 (3s)   — Il 97% gioca la partita sbagliata — word drop staggerato
 *   S3 (3s)   — Le regole / strategie / risultati degli altri — 3 punti rapidi
 *   S4 (3s)   — Il Cavallo salta — "Il 3% no." come inversione netta
 *   S5 (3s)   — Tutti gli archetipi dal sito — explosion of identity
 *   S6 (2s)   — CTA ultimatum — "Smetti di giocare la partita di un altro."
 */
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { V3Scene1Hook } from "./scenes/V3Scene1Hook";
import { V3Scene2The97 } from "./scenes/V3Scene2The97";
import { V3Scene3Rules } from "./scenes/V3Scene3Rules";
import { V3Scene4Knight } from "./scenes/V3Scene4Knight";
import { V3Scene5Archetypes } from "./scenes/V3Scene5Archetypes";
import { V3Scene6CTA } from "./scenes/V3Scene6CTA";

// Frame per scena
const S = { S1: 75, S2: 90, S3: 90, S4: 90, S5: 90, S6: 60 };
// Transizione più corta = ritmo più serrato
const FADE = linearTiming({ durationInFrames: 12 });

export const ScacchiMentali3Percent = () => (
  <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={S.S1}>
        <V3Scene1Hook />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={FADE} />

      <TransitionSeries.Sequence durationInFrames={S.S2}>
        <V3Scene2The97 />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={FADE} />

      <TransitionSeries.Sequence durationInFrames={S.S3}>
        <V3Scene3Rules />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={FADE} />

      <TransitionSeries.Sequence durationInFrames={S.S4}>
        <V3Scene4Knight />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={FADE} />

      <TransitionSeries.Sequence durationInFrames={S.S5}>
        <V3Scene5Archetypes />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={FADE} />

      <TransitionSeries.Sequence durationInFrames={S.S6}>
        <V3Scene6CTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);

// Durata totale calcolata: 75+90+90+90+90+60 - 5*12 = 495 - 60 = 435 frames
export const V3_TOTAL_FRAMES = 435;
