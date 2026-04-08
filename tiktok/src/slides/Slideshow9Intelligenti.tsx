/**
 * Slideshow: "5 errori che fanno le persone intelligenti"
 * 8 Still compositions — TikTok 1080×1920
 *
 * Render:
 *   npx remotion still --props='{"bgUrl":"<URL>"}' <CompositionId> out/s9/<filename>.png
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

export const S9Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cover-hero"
    overlayOpacity={0.35}
    heroNumber="5"
    mainText={"errori che fanno\nle persone intelligenti."}
  />
);

export const S9Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="concept"
    overlayOpacity={0.55}
    mainText={"L'intelligenza non basta.\nServe la mossa giusta\nal momento giusto."}
    accentWords={["la mossa giusta"]}
  />
);

export const S9Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="1."
    mainText={"Analizzano troppo."}
    subText={"E non muovono mai."}
    accentWords={["E non muovono mai."]}
  />
);

export const S9Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="2."
    mainText={"Aspettano di capire tutto."}
    subText={"Prima di cominciare."}
    accentWords={["Prima di cominciare."]}
  />
);

export const S9Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="3."
    mainText={"Giocano da soli."}
    subText={"E perdono partite\nche si vincono in due."}
    accentWords={["che si vincono in due."]}
  />
);

export const S9Slide6List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="4."
    mainText={"Usano la mente\nper giustificare."}
    subText={"Invece di decidere."}
    accentWords={["Invece di decidere."]}
  />
);

export const S9Slide7List = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="list"
    overlayOpacity={0.70}
    listNumber="5."
    mainText={"Sanno cosa fare."}
    subText={"Ma aspettano\ndi sentirsi pronti."}
    accentWords={["di sentirsi pronti."]}
  />
);

export const S9Slide8CTA = ({ bgUrl }: BgProps) => (
  <SlideStill
    bgUrl={bgUrl}
    type="cta"
    overlayOpacity={0.50}
    mainText={"Scopri quale pezzo\nsei davvero."}
    accentWords={["sei davvero."]}
    subText={"Quiz gratuito — link in bio"}
  />
);
