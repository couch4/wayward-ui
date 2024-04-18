import { forwardRef, Ref, Suspense } from "react";
import { MediaProps } from "./Media.types";
import { caption, mediaHolder } from "./Media.styles";
import { Box, Image, Text, Video } from "../../../components";

export const Media = forwardRef(
  (
    {
      data,
      size,
      imageSizes,
      responsive = true,
      priority = false,
      align,
      captionTextStyle = "p",
      onAutoPlayStarted,
      onPlayerReady,
      orientation,
      cardVariant = "primary",
      imageQuality,
      disablePlaceholder,
      ...props
    }: MediaProps,
    ref: Ref<MediaProps>,
  ): any => {
    if (!data) return null;

    const hasImageSizes = imageSizes ? { sizes: imageSizes } : {};

    let variant: any = (
      <Image
        {...hasImageSizes}
        src={data?.imageUrl}
        alt={data?.imageAlt}
        responsive={responsive}
        priority={priority}
        quality={imageQuality}
        disablePlaceholder={disablePlaceholder || data?.isSvg}
      />
    );
    if (data?.coverImage) {
      if (
        data?.vimeoId !== "" ||
        data?.youtubeId !== "" ||
        data?.videoFromGallery
      ) {
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
      } else {
        // catch for images with video marked as cover images
        variant = (
          <Image
            {...hasImageSizes}
            src={data?.coverImage?.imageUrl}
            alt={data?.coverImage?.imageAlt}
            responsive={responsive}
            priority={priority}
            quality={imageQuality}
            disablePlaceholder={disablePlaceholder || data?.coverImage?.isSvg}
          />
        );
      }
    }
    if (data.isSvg && data.svg) {
      const SVG = require(data.imageUrl).current;
      variant = <SVG /> || null;
    }

    if (!variant) return null;

    return (
      <Box {...props} {...mediaHolder(size, align, orientation, props)}>
        {variant}
        {data?.title && <Text text={data?.title} {...caption("title")} />}
        {data?.photographer && (
          <Text text={data?.photographer} {...caption("photographer")} />
        )}
        <Text text={data?.caption} {...caption("")} />
      </Box>
    );
  },
);
