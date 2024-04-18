import Arrow from "../../assets/icons/zhaArrow.svg";
import { CMSModule } from "../../components";
// import moduleAnims from './CardCarouselGenericModule.motion';

const renderSlides = (data: any) => {
  if (!data) return [];

  return data.map((slide: any, index: number) => {
    return (
      <CMSModule key={`${slide.moduleId}_slideId-${index}`} module={slide} />
    );
  });
};

export default {
  carouselProps: {
    animationStyle: "elegant",
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    paginationType: "leadingZeroNumbers",
    showPagination: true,
    paginationStyle: {
      textStyle: "i-sm",
    },
    columns: { sm: 1, md: 2, lg: 3 },
    crop: false,
  } as any,
  getItems: renderSlides,
  textStyles: {
    tag: {
      textStyle: "p-xs",
    },
    heading: {
      textStyle: "h3",
    },
    description: {
      textStyle: "p",
    },
  },
};
