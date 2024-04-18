import { FC } from "react";
import { Box, Carousel, ModuleBase, Stack, Text } from "../../components";
import * as styles from "./QuoteCarouselModule.styles";
import { QuoteCarouselModuleProps } from "./QuoteCarouselModule.types";

const QuoteCarouselModule: FC<QuoteCarouselModuleProps> = ({
  data,
  carouselProps,
  moduleAnims,
  textStyles,
  ...props
}) => {
  if (!data) return null;

  const quoteItems = data?.quotes || [];

  const renderQuotes = quoteItems.map((val: any, i: number) => {
    return (
      <Stack
        key={`quoteCarousel${i}`}
        {...styles.quoteSlide(moduleAnims?.slide)}
      >
        <Stack {...styles.quoteWrapper}>
          <Text
            text="&ldquo;"
            {...styles.quoteLeft(
              moduleAnims?.quoteLeft,
              textStyles?.quoteMarks,
            )}
          />
          <Text
            text={val.quote}
            {...styles.quoteMain(moduleAnims?.quoteMain, textStyles?.quote)}
          />
          <Text
            text="&rdquo;"
            {...styles.quoteRight(
              moduleAnims?.quoteRight,
              textStyles?.quoteMarks,
            )}
          />
        </Stack>
        <Stack {...styles.quoteFooter(moduleAnims?.footer)}>
          <Text
            text={val.author}
            {...styles.quoteAuthor(
              moduleAnims?.author,
              textStyles?.quoteAuthor,
            )}
          />
          <Text
            text={val.source}
            {...styles.quoteSource(
              moduleAnims?.source,
              textStyles?.quoteSource,
            )}
          />
        </Stack>
      </Stack>
    );
  });

  return (
    <ModuleBase data={data} {...styles.quoteModule(props, moduleAnims?.module)}>
      <Box
        variant="container"
        {...styles.quoteContainer(moduleAnims?.container)}
      >
        <Carousel items={renderQuotes} {...carouselProps} />
      </Box>
    </ModuleBase>
  );
};

export default QuoteCarouselModule;
