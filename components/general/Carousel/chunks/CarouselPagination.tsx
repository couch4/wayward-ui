import { FC, useContext } from "react";
import { Box, Stack, Text } from "../../../../components";
import { ICarouselPagination } from "../Carousel.types";
import { getFormattedValue } from "../../../../utils";
import {
  carouselPagination,
  carouselPaginationStep,
  carouselPaginationStepClickArea,
} from "../Carousel.styles";
import { CarouselContext } from "./";

const CarouselPagination: FC<ICarouselPagination> = ({
  length,
  paginationType = "dots",
  paginationStyle,
  ...props
}) => {
  const { currItem, setCurrItem } = useContext(CarouselContext);

  const handleClick = (index: number) => {
    setCurrItem(index);
  };

  const indexer = Array.from({ length }, (v, i) => i);
  const renderDots = indexer.map((i: number) => {
    const isActive = currItem === i;
    const number = getFormattedValue(i, paginationType) as string;

    let paginationItem = (
      <Box variant="block" {...carouselPaginationStep(isActive, "dots")} />
    );
    if (paginationType !== "dots") {
      paginationItem = (
        <Text
          text={number}
          {...carouselPaginationStep(isActive, "numbers", paginationStyle)}
        />
      );
    }

    return (
      <Box
        key={`pagination${i}`}
        {...carouselPaginationStepClickArea}
        onClick={() => handleClick(i)}
      >
        {paginationItem}
      </Box>
    );
  });

  const allProps = {
    ...carouselPagination,
    ...props,
  };

  return (
    <Stack direction="row" {...allProps}>
      {renderDots}
    </Stack>
  );
};

export default CarouselPagination;
