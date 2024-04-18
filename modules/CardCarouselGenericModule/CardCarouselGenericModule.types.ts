import { CarouselProps } from "../../components";

export type CardCarouselGenericModuleProps = CarouselProps & {
  moduleAnims?: {
    module?: any;
    content?: any;
    carousel?: any;
    headingSide?: any;
  };
  data: any;
  carouselProps?: CarouselProps;
  getItems: (cards: any) => any;
  getColumnNumber?: (number: any) => any;
  textStyles?: Record<string, any>;
};
