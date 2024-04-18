import { FC } from "react";
import { ModuleBase, Media, Carousel } from "../../components";
import { mediaCarousel } from "./MediaCarouselModule.styles";
const MediaCarouselModule: FC<any> = ({
  carouselProps,
  data,
  moduleAnims,
  imageSizes,
  imageQuality,
  imagePriority = false,
  ...props
}) => {
  if (!data) return null;
  const slides = data?.mediaSlides || [];

  const mediaSlides = slides.map((val: any, i: number) => {
    return (
      <Media
        key={`media-carousel-${i}`}
        data={val}
        imageSizes={imageSizes}
        imageQuality={imageQuality}
        priority={imagePriority}
      />
    );
  });

  return (
    <ModuleBase data={data} {...mediaCarousel(props, moduleAnims?.module)}>
      <Carousel items={mediaSlides} {...carouselProps} {...mediaCarousel} />
    </ModuleBase>
  );
};

export default MediaCarouselModule;
