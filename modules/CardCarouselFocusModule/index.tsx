import { FC } from "react";
import { ModuleBase, Carousel } from "../../components";
import { HeadingSideModule } from "../../modules";
import { carouselWrapper } from "./CardCarouselFocusModule.styles";
import { CardCarouselFocusModuleProps } from "./CardCarouselFocusModule.types";

const CardCarouselFocusModule: FC<CardCarouselFocusModuleProps> = ({
  carouselProps,
  data,
  moduleAnims,
  getItems = () => ["No content found. Please connect a config."],
  textStyles,
  ...props
}) => {
  if (!data) return null;
  const getCards = data?.cardRow || [];

  const renderCarouselRows = getCards.map((val: any, i: number) => {
    const { cards } = val.props;

    return (
      <Carousel
        key={`carousel${i}`}
        items={getItems(cards)}
        {...carouselProps}
        {...moduleAnims?.carousel}
      />
    );
  });

  const headingData = {
    description: data?.description,
    headingTitle: data?.headingTitle,
    tag: data?.tag,
  };

  return (
    <ModuleBase data={data} {...carouselWrapper(props, moduleAnims?.module)}>
      <HeadingSideModule
        variant="flex"
        data={headingData}
        moduleAnims={moduleAnims?.headingSide}
      />
      {renderCarouselRows}
    </ModuleBase>
  );
};

export default CardCarouselFocusModule;
