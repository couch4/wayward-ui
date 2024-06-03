import { forwardRef, Ref, Suspense } from 'react';
import { MediaProps } from './Media.types';
import { caption, mediaHolder } from './Media.styles';
import { Box, Image, Text, Video } from '../../../components';

export const Media = forwardRef(
  (
    {
      data,
      imageSizes,
      responsive = true,
      priority = false,
      align,
      captionTextStyle = 'p',
      onAutoPlayStarted,
      onPlayerReady,
      orientation,
      imageQuality,
      disablePlaceholder,
      preserveSVG,
      ...props
    }: MediaProps,
    ref: Ref<MediaProps>,
  ): any => {
    if (!data) return null;

    const hasImageSizes = imageSizes ? { sizes: imageSizes } : {};

    let variant: any = (
      <Image
        {...hasImageSizes}
        src={data?.image?.src}
        alt={data?.image?.alt}
        responsive={responsive}
        priority={priority}
        quality={imageQuality}
        disablePlaceholder={disablePlaceholder}
        preserveSVG={preserveSVG}
      />
    );
    if (data?.video) {
      variant = (
        <Suspense>
          <Video
            onAutoPlayStarted={onAutoPlayStarted}
            onPlayerReady={onPlayerReady}
            data={data}
            {...hasImageSizes}
            priority={priority} // for cover image
            imageQuality={imageQuality}
          />
        </Suspense>
      );
    }

    if (!variant) return null;

    return (
      <Box {...props} {...mediaHolder(align, orientation, props)}>
        {variant}
        <Text text={data?.image?.caption} {...caption('')} />
      </Box>
    );
  },
);
