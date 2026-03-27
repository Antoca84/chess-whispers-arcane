import { Composition, Folder } from "remotion";
import { ScacchiMentali5Segni } from "./Video";
import { ScacchiMentali5SegniV2 } from "./VideoV2";
import { ScacchiMentali3Percent, V3_TOTAL_FRAMES } from "./VideoV3";
import { FPS, TOTAL_FRAMES } from "./constants";

export const RemotionRoot = () => {
  return (
    <>
      <Folder name="5-Segni">
        <Composition
          id="ScacchiMentali5Segni"
          component={ScacchiMentali5Segni}
          durationInFrames={TOTAL_FRAMES}
          fps={FPS}
          width={1080}
          height={1920}
        />
        <Composition
          id="ScacchiMentali5SegniV2-Immagini"
          component={ScacchiMentali5SegniV2}
          durationInFrames={TOTAL_FRAMES}
          fps={FPS}
          width={1080}
          height={1920}
        />
      </Folder>

      <Folder name="Solo-il-3-Percent">
        <Composition
          id="ScacchiMentali3Percent"
          component={ScacchiMentali3Percent}
          durationInFrames={V3_TOTAL_FRAMES}
          fps={FPS}
          width={1080}
          height={1920}
        />
      </Folder>
    </>
  );
};
