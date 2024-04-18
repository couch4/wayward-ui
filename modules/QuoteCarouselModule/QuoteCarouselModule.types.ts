import { CarouselProps } from "../../components";

export type QuoteCarouselModuleProps = {
  data: any;
  moduleAnims?: {
    module?: Record<string, any>;
    container?: Record<string, any>;
    slide?: Record<string, any>;
    quoteWrapper?: Record<string, any>;
    quoteLeft?: Record<string, any>;
    quoteMain?: Record<string, any>;
    quoteRight?: Record<string, any>;
    footer?: Record<string, any>;
    author?: Record<string, any>;
    source?: Record<string, any>;
  };
  carouselProps?: CarouselProps;
  textStyles?: any;
};
