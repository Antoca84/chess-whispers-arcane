import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  S1_FRAMES,
  S2_FRAMES,
  S3_FRAMES,
  S4_FRAMES,
  S5_FRAMES,
  S6_FRAMES,
  TRANS_FRAMES,
} from "./constants";
import { Scene1HookV2 } from "./scenes/Scene1HookV2";
import { Scene2ProblemsV2 } from "./scenes/Scene2ProblemsV2";
import { Scene3InsightV2 } from "./scenes/Scene3InsightV2";
import { Scene4SymbolV2 } from "./scenes/Scene4SymbolV2";
import { Scene5TransformV2 } from "./scenes/Scene5TransformV2";
import { Scene6CTAV2 } from "./scenes/Scene6CTAV2";

const fadeTiming = linearTiming({ durationInFrames: TRANS_FRAMES });

export const ScacchiMentali5SegniV2 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={S1_FRAMES}>
          <Scene1HookV2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={fadeTiming} />

        <TransitionSeries.Sequence durationInFrames={S2_FRAMES}>
          <Scene2ProblemsV2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={fadeTiming} />

        <TransitionSeries.Sequence durationInFrames={S3_FRAMES}>
          <Scene3InsightV2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={fadeTiming} />

        <TransitionSeries.Sequence durationInFrames={S4_FRAMES}>
          <Scene4SymbolV2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={fadeTiming} />

        <TransitionSeries.Sequence durationInFrames={S5_FRAMES}>
          <Scene5TransformV2 />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={fadeTiming} />

        <TransitionSeries.Sequence durationInFrames={S6_FRAMES}>
          <Scene6CTAV2 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
