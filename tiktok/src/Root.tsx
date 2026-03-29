import { Composition, Folder } from "remotion";
import { ScacchiMentali5Segni } from "./Video";
import { ScacchiMentali5SegniV2 } from "./VideoV2";
import { ScacchiMentali3Percent, V3_TOTAL_FRAMES } from "./VideoV3";
import { FPS, TOTAL_FRAMES } from "./constants";
import {
  Slide1Cover,
  Slide2Concept,
  Slide3List,
  Slide4List,
  Slide5List,
  Slide6CTA,
} from "./slides/SlideshowNonSaiQuPezzo";

const SLIDE_DEFAULTS = { bgUrl: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=1080" };

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

      <Folder name="Slideshow-NonSaiQualePezzo">
        <Composition id="Slide1Cover"   component={Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="Slide2Concept" component={Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="Slide3List"    component={Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="Slide4List"    component={Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="Slide5List"    component={Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="Slide6CTA"     component={Slide6CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>
    </>
  );
};
