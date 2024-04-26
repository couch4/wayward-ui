import { forwardRef, Ref } from 'react';
import { CardProps } from './Card.types';
import {
  backgroundMediaHolder,
  cardContent,
  cardVars,
  mediaHolder,
} from './Card.styles';
import { ContentBlock, Grid, Media } from '../../../components';
import { emptyContentBlockAnim } from '../../../theme/motion';

export const Card = forwardRef(
  (
    {
      className,
      variant = 'primary',
      imageSizes,
      backgroundImageSizes,
      data,
      motion = emptyContentBlockAnim,
      priority,
      imageQuality,
      backgroundImageQuality,
      richText = false,
      children,
      ...props
    }: CardProps,
    ref: Ref<CardProps>,
  ) => {
    const allProps = {
      ...cardVars(variant, className),
      ...motion?.card,
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
        {mainImage && (
          <Media
            data={mainImage}
            imageSizes={imageSizes}
            {...mediaHolder}
            responsive
            priority
            align={data?.mediaAlignment && data?.mediaAlignment?.toLowerCase()}
            orientation={
              data?.mediaOrientation && data?.mediaOrientation?.toLowerCase()
            }
            imageQuality={imageQuality}
          />
        )}
        {bgImage && (
          <Media
            data={bgImage}
            imageSizes={backgroundImageSizes}
            {...backgroundMediaHolder}
            responsive
            priority
            imageQuality={backgroundImageQuality}
          />
        )}
        <ContentBlock
          data={data}
          {...cardContent}
          motion={motion}
          variant={variant}
          richText={richText}
        />
        {children}
      </Grid>
    );
  },
);

Card.displayName = 'Card';
