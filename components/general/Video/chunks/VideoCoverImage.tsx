'use client';
import { FC } from 'react';
import { Image } from '../../../';

const VideoCoverImage: FC<any> = ({ data, ...props }: any) => {
  if (!data || !data?.src) return null;
  const { src, alt } = data;

  return <Image src={src} alt={alt} responsive {...props} />;
};

export default VideoCoverImage;
