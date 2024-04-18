import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { Box } from "../../../components";
import NextImage from "next/image";
import { ImageProps } from "./Image.types";
import { spacer } from "./Image.styles";
import { motion } from "framer-motion";
import { containsMotionProps } from "../../../utils";
import { useImageOptimiser } from "../../../hooks";
import { getBase64 } from "./Image.actions";

export const Image = forwardRef(
  (
    {
      src: propSrc,
      width: propWidth,
      height: propHeight,
      alt = "image",
      responsive = false,
      placeholder,
      sizes,
      quality,
      disablePlaceholder,
      ...props
    }: ImageProps,
    ref: Ref<any>
  ): any => {
    const [blurData, setBlurData] = useState({});
    const imageRef = useRef<any>();
    const isAnimated = containsMotionProps(props);

    // get focal point
    const queryString = propSrc.split("?")[1];
    const searchParams = new URLSearchParams(queryString);
    const focalPoint = searchParams.get("rxy");
    const imageHeight = searchParams.get("height");

    const optimiserProps = useImageOptimiser(
      propSrc,
      (propWidth = 0),
      (propHeight = 0),
      responsive,
      sizes,
      imageRef,
      quality,
      imageHeight,
      focalPoint
    );

    useEffect(() => {
      const getBlurImage = async () => {
        const blurDataURL = await getBase64(propSrc, imageHeight, focalPoint);
        if (blurDataURL) {
          setBlurData({
            placeholder: "blur",
            blurDataURL,
          });
        }
      };
      if (!disablePlaceholder) getBlurImage();
    }, []);

    // this works out parent dimensions
    if (
      (optimiserProps.width && optimiserProps.width === 0) ||
      !optimiserProps.src
    ) {
      return <Box {...spacer} ref={imageRef} />;
    }

    const allProps = {
      alt,
      ...props,
      ...optimiserProps,
      ...blurData,
    };

    return isAnimated ? (
      motion(NextImage, { ...allProps, ref })
    ) : (
      <NextImage {...allProps} ref={ref} />
    );
  }
);

Image.displayName = "Image";
