'use client';
import { FC, useContext, useEffect } from 'react';
import { VideoContext, VideoPlayer } from './';
import { createPortal } from 'react-dom';

const VideoFullscreen: FC<any> = () => {
  const { isFullscreen, setIsFullscreen } = useContext(VideoContext);

  const handleEsc = (e: any) => {
    if (e.keyCode === 27) {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return isFullscreen
    ? createPortal(<VideoPlayer isInline={false} />, document.body)
    : null;
};

export default VideoFullscreen;
