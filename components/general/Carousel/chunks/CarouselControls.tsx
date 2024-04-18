import { FC, useContext } from "react";
import { Box, Stack } from "../../../../components";
import { carouselControl, carouselControlsHolder } from "../Carousel.styles";
import { CarouselDirection } from "../Carousel.types";
import { CarouselContext } from "./";

const CarouselControls: FC<any> = ({
  controls,
  width,
  length,
  loop,
  ...props
}) => {
  const { currItem, setCurrItem } = useContext(CarouselContext);

  const handleSwitch = (dir: CarouselDirection) => {
    let switchVal = (dir === "next" ? 1 : -1) + currItem;

    const croppedVal = loop
      ? switchVal
      : Math.max(0, Math.min(length - 1, switchVal));

    setCurrItem(croppedVal);
  };

  const allProps = {
    ...carouselControlsHolder(width),
    ...props,
  };

  const renderControls = ["prev", "next"].map((val: any, i: number) => {
    const hide =
      (val === "prev" ? currItem === 0 : currItem === length - 1) && !loop;

    return (
      <Box
        key={`control${i}`}
        onClick={() => handleSwitch(val)}
        {...carouselControl(val, hide)}
      >
        {controls?.directionComponent}
      </Box>
    );
  });

  return (
    <Stack direction="row" {...allProps}>
      {renderControls}
    </Stack>
  );
};

export default CarouselControls;
