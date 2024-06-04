import { createContext } from 'react';

export const VideoContext = createContext({} as any);

export { default as VideoControls } from './VideoControls';
export { default as VideoCoverImage } from './VideoCoverImage';
export { default as VideoFullscreen } from './VideoFullscreen';

import dynamic from 'next/dynamic';
export const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
});
