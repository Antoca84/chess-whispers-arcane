import { AbsoluteFill, Audio, staticFile } from "remotion";
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
  FPS,
} from "./constants";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problems } from "./scenes/Scene2Problems";
import { Scene3Insight } from "./scenes/Scene3Insight";
import { Scene4Symbol } from "./scenes/Scene4Symbol";
import { Scene5Transform } from "./scenes/Scene5Transform";
import { Scene6CTA } from "./scenes/Scene6CTA";

const fadeTiming = linearTiming({ durationInFrames: TRANS_FRAMES });

export const ScacchiMentali5Segni = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/*
        Musica: scarica una traccia epic/cinematic royalty-free da Pixabay
        (es. "Epic Cinematic" o "Dark Ambient") e salvala in public/music.mp3
        Poi decommenta le righe seguenti:
      */}
      {/* <Audio src={staticFile("music.mp3")} volume={0.28} /> */}

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={S1_FRAMES}>
          <Scene1Hook />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={fadeTiming}
        />

        <TransitionSeries.Sequence durationInFrames={S2_FRAMES}>
          <Scene2Problems />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={fadeTiming}
        />

        <TransitionSeries.Sequence durationInFrames={S3_FRAMES}>
          <Scene3Insight />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={fadeTiming}
        />

        <TransitionSeries.Sequence durationInFrames={S4_FRAMES}>
          <Scene4Symbol />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={fadeTiming}
        />

        <TransitionSeries.Sequence durationInFrames={S5_FRAMES}>
          <Scene5Transform />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={fadeTiming}
        />

        <TransitionSeries.Sequence durationInFrames={S6_FRAMES}>
          <Scene6CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
