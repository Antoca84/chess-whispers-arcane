import { Composition } from "remotion";
import { ScacchiMentali5Segni } from "./Video";
import { FPS, TOTAL_FRAMES } from "./constants";

export const RemotionRoot = () => {
  return (
    <Composition
      id="ScacchiMentali5Segni"
      component={ScacchiMentali5Segni}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1080}
      height={1920}
    />
  );
};
