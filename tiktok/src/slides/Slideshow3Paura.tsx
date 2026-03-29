/**
 * Slideshow 3 — "Non hai paura di sbagliare. Hai paura di scegliere."
 * Tema: paralisi decisionale / sovraccarico cognitivo
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

export const S3Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="cover" overlayOpacity={0.44}
    mainText={"Non hai paura\ndi sbagliare."}
    accentWords={["sbagliare."]}
    subText={"Hai paura di scegliere.."}
  />
);

export const S3Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="concept" overlayOpacity={0.50}
    mainText={"E intanto\nil tempo scorre."}
    accentWords={["scorre."]}
  />
);

export const S3Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.70}
    listNumber="1."
    mainText={"Aspetti di avere\ntutte le informazioni."}
    subText={"Non le avrai\nmai abbastanza."}
  />
);

export const S3Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.70}
    listNumber="2."
    mainText={"Cerchi conferme\nprima di agire."}
    subText={"Stai delegando\nla tua mossa."}
    accentWords={["mossa."]}
  />
);

export const S3Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.70}
    listNumber="3."
    mainText={"Rimandi.\nPoi ti penti di aver rimandato."}
    subText={"Il ciclo non si rompe\nda solo."}
    accentWords={["rimandato."]}
  />
);

export const S3Slide6Close = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="cta" overlayOpacity={0.40}
    mainText={"Il Re non aspetta\nil momento perfetto."}
    accentWords={["Re"]}
    subText={"Fa la mossa con quello che ha."}
  />
);
