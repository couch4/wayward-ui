import { ImageProps as NextImageProps } from 'next/image';
import { MotionProps } from 'framer-motion';

type ImageAndMotionProps = NextImageProps & MotionProps;

export interface ImageProps extends ImageAndMotionProps {
  responsive?: boolean;
  src: string;
  motion?: boolean;
  preserveSVG?: boolean;
  disablePlaceholder?: boolean;
}
