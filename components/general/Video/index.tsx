'use client';
import { useEffect, useRef, FC, useState } from 'react';
import { Box } from '../../';
import screenfull from 'screenfull';
import { videoWrapper } from './Video.styles';
import {
  VideoContext,
  VideoCoverImage,
  VideoFullscreen,
  VideoPlayer,
} from './chunks';

const Video: FC<any> = ({
  data,
  imageSizes,
  priority = 'false',
  onPlayerReady,
  onAutoPlayStarted,
  imageQuality,
}: any) => {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inlineViewer, setInlineViewer] = useState(null);
  const [init, setInit] = useState(true);
  const { image: cover, video } = data;

  useEffect(() => {
    setIsClient(true);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  const handleFullscreen = (e?: any) => {
    if (!video?.allowFullscreen) return;

    setIsMuted(false);
    setIsFullscreen(true);
    setIsPlaying(true);

    e && e.stopPropagation();
    inlineViewer && screenfull.request(inlineViewer);
  };

  const onFullscreenChange = () => {
    if (!screenfull.isFullscreen) {
      setIsMuted(true);
      setIsFullscreen(false);
      setIsPlaying(false);
    }
  };

  return data ? (
    <Box
      ref={videoWrapperRef}
      {...videoWrapper(
        isPlaying,
        video?.autoPlay,
        video?.allowFullscreen,
        isFullscreen,
        init,
      )}
      onClick={handleFullscreen}
    >
      <VideoContext.Provider
        value={{
          data: video,
          handleFullscreen,
          isClient,
          isMuted,
          isFullscreen,
          isPlaying,
          inlineViewer,
          onAutoPlayStarted,
          onPlayerReady,
          setInit,
          setIsFullscreen,
          setIsPlaying,
          setInlineViewer,
          wrapper: videoWrapperRef,
        }}
      >
        <VideoPlayer />
        <VideoCoverImage
          data={cover}
          sizes={imageSizes}
          priority={priority}
          quality={imageQuality}
        />
        <VideoFullscreen />
      </VideoContext.Provider>
    </Box>
  ) : null;
};

export default Video;
