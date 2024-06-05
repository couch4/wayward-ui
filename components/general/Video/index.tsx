'use client';
import { useRef, FC, useState } from 'react';
import { Box } from '../../';
import { videoWrapper } from './Video.styles';
import {
  VideoContext,
  VideoCoverImage,
  VideoFullscreen,
  VideoPlayer,
} from './chunks';
import './Video.css';

const Video: FC<any> = ({
  data,
  imageSizes,
  priority = 'false',
  onPlayerReady,
  onAutoPlayStarted,
  imageQuality,
}: any) => {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inlineViewer, setInlineViewer] = useState<any>(null);
  const [fullViewer, setFullViewer] = useState<any>(null);
  const [init, setInit] = useState(true);
  const { image: cover, video } = data;

  const handleFullscreen = (e?: any) => {
    if (!video?.allowFullscreen) return;

    setIsMuted(false);
    setIsFullscreen(true);
    setIsPlaying(true);

    e && e.stopPropagation();
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
      layoutId="videoPlayer"
      layout
    >
      <VideoContext.Provider
        value={{
          data: video,
          fullViewer,
          handleFullscreen,
          isMuted,
          isFullscreen,
          isPlaying,
          inlineViewer,
          onAutoPlayStarted,
          onPlayerReady,
          setFullViewer,
          setInit,
          setIsFullscreen,
          setIsMuted,
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
        <VideoFullscreen isFullscreen={isFullscreen} />
      </VideoContext.Provider>
    </Box>
  ) : null;
};

export default Video;
