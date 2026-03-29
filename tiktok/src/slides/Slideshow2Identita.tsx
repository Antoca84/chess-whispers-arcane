/**
 * Slideshow 2 — "Chi sei quando smetti di esibirti"
 * Tema: burnout identitario / performance
 */
import { SlideStill } from "./SlideStill";

type BgProps = { bgUrl: string };

export const S2Slide1Cover = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="cover" overlayOpacity={0.42}
    mainText={"Chi sei\nquando smetti\ndi esibirti.."}
    accentWords={["esibirti.."]}
  />
);

export const S2Slide2Concept = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="concept" overlayOpacity={0.48}
    mainText={"Quello che rimane\nquando si spengono le luci."}
    accentWords={["rimane"]}
  />
);

export const S2Slide3List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.72}
    listNumber="1."
    mainText={"Controlli il telefono\nprima di capire come stai."}
    subText={"Gli altri decidono\nil tuo umore."}
  />
);

export const S2Slide4List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.72}
    listNumber="2."
    mainText={"Non sai cosa vuoi.\nSai cosa impressiona."}
    subText={"Non è\nla stessa cosa."}
    accentWords={["impressiona."]}
  />
);

export const S2Slide5List = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="list" overlayOpacity={0.72}
    listNumber="3."
    mainText={"Il silenzio\nti spaventa."}
    subText={"Perché senza pubblico\nnon sai chi sei."}
    accentWords={["spaventa."]}
  />
);

export const S2Slide6Close = ({ bgUrl }: BgProps) => (
  <SlideStill bgUrl={bgUrl} type="cta" overlayOpacity={0.38}
    mainText={"Non sei\nla tua performance."}
    accentWords={["performance."]}
    subText={"Sei il pezzo che la muove."}
  />
);
