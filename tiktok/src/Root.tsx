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
import { S6Slide1Cover, S6Slide2Concept, S6Slide3List, S6Slide4List, S6Slide5List, S6Slide6CTA } from "./slides/Slideshow6Tipi";
import { S7Slide1Cover, S7Slide2Concept, S7Slide3List, S7Slide4List, S7Slide5List, S7Slide6List, S7Slide7CTA } from "./slides/Slideshow7Smettila";
import { S8Slide1Cover, S8Slide2Concept, S8Slide3List, S8Slide4List, S8Slide5List, S8Slide6CTA } from "./slides/Slideshow8Pasqua";
import { S9Slide1Cover, S9Slide2Concept, S9Slide3List, S9Slide4List, S9Slide5List, S9Slide6List, S9Slide7List, S9Slide8CTA } from "./slides/Slideshow9Intelligenti";
import { S10Slide1Cover, S10Slide2Concept, S10Slide3List, S10Slide4List, S10Slide5CTA } from "./slides/Slideshow10Torre";

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

      <Folder name="Slideshow-Intelligenti">
        <Composition id="S9Slide1Cover"   component={S9Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide2Concept" component={S9Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide3List"    component={S9Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide4List"    component={S9Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide5List"    component={S9Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide6List"    component={S9Slide6List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide7List"    component={S9Slide7List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S9Slide8CTA"     component={S9Slide8CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Pasqua">
        <Composition id="S8Slide1Cover"   component={S8Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S8Slide2Concept" component={S8Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S8Slide3List"    component={S8Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S8Slide4List"    component={S8Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S8Slide5List"    component={S8Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S8Slide6CTA"     component={S8Slide6CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Smettila">
        <Composition id="S7Slide1Cover"   component={S7Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S7Slide2Concept" component={S7Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S7Slide3List"    component={S7Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S7Slide4List"    component={S7Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S7Slide5List"    component={S7Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S7Slide6List"    component={S7Slide6List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S7Slide7CTA"     component={S7Slide7CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
      </Folder>

      <Folder name="Slideshow-Tipi">
        <Composition id="S6Slide1Cover"   component={S6Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S6Slide2Concept" component={S6Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S6Slide3List"    component={S6Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S6Slide4List"    component={S6Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S6Slide5List"    component={S6Slide5List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S6Slide6CTA"     component={S6Slide6CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
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

      <Folder name="Slideshow-Torre">
        <Composition id="S10Slide1Cover"   component={S10Slide1Cover}   durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S10Slide2Concept" component={S10Slide2Concept} durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S10Slide3List"    component={S10Slide3List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S10Slide4List"    component={S10Slide4List}    durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
        <Composition id="S10Slide5CTA"     component={S10Slide5CTA}     durationInFrames={1} fps={FPS} width={1080} height={1920} defaultProps={SLIDE_DEFAULTS} />
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
