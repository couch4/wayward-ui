import { CarouselProps } from "../../components";

export type CardCarouselFocusModuleProps = {
  moduleAnims?: {
    module?: any;
    content?: any;
    carousel?: any;
    headingSide?: any;
  };
  carouselProps?: CarouselProps;
  data: any;
  getItems: (cards: any) => any;
  textStyles?: Record<string, any>;
};
