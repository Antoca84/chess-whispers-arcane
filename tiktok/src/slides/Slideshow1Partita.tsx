/**
 * Slideshow 1 — "Stai giocando la partita di qualcun altro"
 * Tema: confronto sociale
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

export const S1Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="cover" overlayOpacity={0.40}
    mainText={"Stai giocando\nla partita\ndi qualcun altro.."}
    accentWords={["partita"]}
  />
);

export const S1Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="concept" overlayOpacity={0.45}
    mainText={"E non te ne sei\nancora accorto."}
    accentWords={["ancora"]}
  />
);

export const S1Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.70}
    listNumber="1."
    mainText={"Scegli le tue ambizioni\nguardando cosa hanno gli altri."}
    subText={"Non quello che senti.\nQuello che vedi."}
  />
);

export const S1Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.70}
    listNumber="2."
    mainText={"Ti misuri su traguardi\nche non hai scelto tu."}
    subText={"E ti senti\nsempre indietro."}
  />
);

export const S1Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.70}
    listNumber="3."
    mainText={"Quando vinci,\nnon senti niente."}
    subText={"Perché non era\nla tua partita."}
    accentWords={["niente."]}
  />
);

export const S1Slide6Close = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="cta" overlayOpacity={0.38}
    mainText={"Ogni pezzo\nha la sua mossa."}
    accentWords={["mossa."]}
    subText={"Impara la tua."}
  />
);
