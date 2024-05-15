import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { Box } from '../../../components';
import NextImage from 'next/image';
import { ImageProps } from './Image.types';
import { generatedSVG, spacer } from './Image.styles';
import { motion } from 'framer-motion';
import { containsMotionProps } from '../../../utils';
import { useImageOptimiser } from '../../../hooks';
import { getBase64 } from './Image.actions';

export const Image = forwardRef(
  (
    {
      src: propSrc,
      width: propWidth,
      height: propHeight,
      alt = 'image',
      responsive = false,
      placeholder,
      sizes,
      quality,
      preserveSVG = false,
      disablePlaceholder,
      priority = false,
      ...props
    }: ImageProps,
    ref: Ref<any>,
  ): any => {
    const [blurData, setBlurData] = useState({});
    const [isSVG, setIsSVG] = useState<any>(null);
    const imageRef = useRef<any>();
    const isAnimated = containsMotionProps(props);

    // get focal point
    const queryString = propSrc.split('?')[1];
    const searchParams = new URLSearchParams(queryString);
    const focalPoint = searchParams.get('rxy');
    const imageHeight = searchParams.get('height');

    useEffect(() => {
      const getBlurOrSVGImage = async () => {
        const blurOrSVG: any = await getBase64(
          propSrc,
          imageHeight,
          focalPoint,
          preserveSVG,
        );

        if (blurOrSVG && blurOrSVG.includes('</svg>')) {
          setIsSVG(
            <div
              dangerouslySetInnerHTML={{ __html: blurOrSVG }}
              {...generatedSVG(props)}
            />,
          );

          // transform(blurOrSVG.string, {}, { componentName: alt || 'SVG' });
        } else if (blurOrSVG && blurOrSVG.includes('data:image/jpeg')) {
          const blurDataURL = blurOrSVG;
          setBlurData({
            placeholder: 'blur',
            blurDataURL,
          });
        }
      };
      if (!disablePlaceholder) getBlurOrSVGImage();
    }, []);

    const optimiserProps = useImageOptimiser(
      propSrc,
      (propWidth = 0),
      (propHeight = 0),
      responsive,
      sizes,
      imageRef,
      quality,
      imageHeight,
      focalPoint,
    );

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

    if (isSVG) return isSVG;

    return isAnimated ? (
      motion(NextImage, { ...allProps, ref })
    ) : (
      <NextImage {...allProps} ref={ref} />
    );
  },
);

Image.displayName = 'Image';
