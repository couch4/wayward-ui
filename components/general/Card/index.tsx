import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import {
  backgroundMediaHolder,
  cardContent,
  cardVars,
  mediaHolder,
} from "./Card.styles";
import { ContentBlock, Grid, Media } from "../../../components";
import { emptyContentBlockAnim } from "../../../theme/motion";

export const Card = forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
      imageSizes,
      backgroundImageSizes,
      data,
      childAnims = emptyContentBlockAnim,
      priority,
      imageQuality,
      backgroundImageQuality,
      richText = false,
      children,
      ...props
    }: CardProps,
    ref: Ref<CardProps>
  ) => {
    const allProps = {
      ...cardVars(variant, size, className),
      ...childAnims?.card,
      ...props,
    };

    if (!data) return null;

    const mainImage: any =
      data?.image ||
      data?.media ||
      data?.cardImage ||
      data?.largeImage ||
      data?.smallImage ||
      data?.videoFromGallery; // grrrr
    const bgImage: any = data?.backgroundImage || data?.backgroundMedia;

    return (
      <Grid ref={ref} {...allProps}>
        <Media
          data={mainImage}
          size={size}
          imageSizes={imageSizes}
          {...mediaHolder(size)}
          responsive
          priority
          align={data?.mediaAlignment && data?.mediaAlignment?.toLowerCase()}
          orientation={
            data?.mediaOrientation && data?.mediaOrientation?.toLowerCase()
          }
          cardVariant={variant}
          imageQuality={imageQuality}
        />
        <Media
          data={bgImage}
          size={size}
          imageSizes={backgroundImageSizes}
          {...backgroundMediaHolder}
          responsive
          priority
          cardVariant={variant}
          imageQuality={backgroundImageQuality}
        />
        <ContentBlock
          data={data}
          {...cardContent(size)}
          childAnims={childAnims}
          variant={variant}
          richText={richText}
        />
        {children}
      </Grid>
    );
  }
);

Card.displayName = "Card";
