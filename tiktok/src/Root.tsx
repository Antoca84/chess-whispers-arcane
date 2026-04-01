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
import { S1Slide1Cover, S1Slide2Concept, S1Slide3List, S1Slide4List, S1Slide5List, S1Slide6Close } from "./slides/Slideshow1Partita";
import { S2Slide1Cover, S2Slide2Concept, S2Slide3List, S2Slide4List, S2Slide5List, S2Slide6Close } from "./slides/Slideshow2Identita";
import { S3Slide1Cover, S3Slide2Concept, S3Slide3List, S3Slide4List, S3Slide5List, S3Slide6Close } from "./slides/Slideshow3Paura";
import { S4Slide1Cover, S4Slide2Concept, S4Slide3List, S4Slide4List, S4Slide5List, S4Slide6CTA } from "./slides/Slideshow4Mosse";
import { S5Slide1Cover, S5Slide2Concept, S5Slide3List, S5Slide4List, S5Slide5List, S5Slide6CTA } from "./slides/Slideshow5Segnali";

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

      <Folder name="Slideshow-Partita">
        <Composition id="S1Slide1Cover"   component={S1Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S1Slide2Concept" component={S1Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S1Slide3List"    component={S1Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S1Slide4List"    component={S1Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S1Slide5List"    component={S1Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S1Slide6Close"   component={S1Slide6Close}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Identita">
        <Composition id="S2Slide1Cover"   component={S2Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S2Slide2Concept" component={S2Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S2Slide3List"    component={S2Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S2Slide4List"    component={S2Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S2Slide5List"    component={S2Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S2Slide6Close"   component={S2Slide6Close}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Paura">
        <Composition id="S3Slide1Cover"   component={S3Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S3Slide2Concept" component={S3Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S3Slide3List"    component={S3Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S3Slide4List"    component={S3Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S3Slide5List"    component={S3Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S3Slide6Close"   component={S3Slide6Close}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Segnali">
        <Composition id="S5Slide1Cover"   component={S5Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S5Slide2Concept" component={S5Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S5Slide3List"    component={S5Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S5Slide4List"    component={S5Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S5Slide5List"    component={S5Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S5Slide6CTA"     component={S5Slide6CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Mosse">
        <Composition id="S4Slide1Cover"   component={S4Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S4Slide2Concept" component={S4Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S4Slide3List"    component={S4Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S4Slide4List"    component={S4Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S4Slide5List"    component={S4Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S4Slide6CTA"     component={S4Slide6CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
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
