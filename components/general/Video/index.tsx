'use client';
import { useEffect, useRef, FC, useState } from 'react';
import { Box, Button, Image } from '../../';
import screenfull from 'screenfull';
import { videoWrapper, videoControls } from './Video.styles';
import { useDimensions } from '../../../hooks';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

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
  const [viewer, setViewer] = useState<HTMLIFrameElement | HTMLVideoElement>();
  const [init, setInit] = useState(true);
  const [aspect, setAspect] = useState(1);
  const { width, height } = useDimensions(videoWrapperRef);

  const wrapper = videoWrapperRef.current;

  const resizeVideo = () => {
    if (wrapper) {
      const vidContainer: any = wrapper.children[0];

      const viewerWidth = viewer?.getBoundingClientRect()?.width;

      if (vidContainer) {
        vidContainer.style.width = '105%';
        vidContainer.style.height = `${width * 3}px`;
        if (
          height >=
          width * aspect
          // (viewerWidth || width) < width
        ) {
          vidContainer.style.height = '105%';
          vidContainer.style.width = `${height * 3}px`;
        }
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    resizeVideo();
  }, [width, height, viewer, init]);

  if (!data) {
    return null;
  }

  let vidSrc = data?.src;
  const vidType = data?.type;
  if (vidType === 'vimeo') vidSrc = `https://vimeo.com/${data?.vimeoId}`;
  if (vidType === 'youtube')
    vidSrc = `https://www.youtube.com/watch?v=${data?.youtubeId}`;

  const handleReady = () => {
    onPlayerReady && onPlayerReady();
    const wrapper = videoWrapperRef.current;

    console.log('handleReady');

    if (wrapper) {
      let container: any = wrapper.getElementsByTagName('video')[0];
      let vidWidth = container?.videoWidth;
      let vidHeight = container?.videoHeight;
      if (wrapper.getElementsByTagName('iframe')[0]) {
        container = wrapper.getElementsByTagName('iframe')[0];
        vidWidth = container?.width.includes('px')
          ? parseInt(container?.width)
          : 640;
        vidHeight = container?.height.includes('px')
          ? parseInt(container?.height)
          : 390;
      }

      setAspect(vidHeight / vidWidth + 0.07);

      if (container) {
        setViewer(container);
        if (data?.autoPlay) {
          setInit(false);
          setIsPlaying(!data?.allowFullScreen);
        }
      }
    }
  };

  const handleFullscreen = (e?: any) => {
    if (!data?.allowFullScreen) return;

    setIsMuted(false);
    setIsFullscreen(true);
    setIsPlaying(true);

    e && e.stopPropagation();
    viewer && screenfull.request(viewer);
  };

  const onFullscreenChange = () => {
    if (!screenfull.isFullscreen) {
      setIsMuted(true);
      setIsFullscreen(false);
      setIsPlaying(false);
    }
  };

  const togglePlay = (e: any) => {
    e.stopPropagation();
    if (init) {
      setInit(false);
      onAutoPlayStarted && onAutoPlayStarted();
    }

    setIsPlaying(!isPlaying);
    if (data?.allowFullScreen) {
      handleFullscreen();
    }
  };

  const toggleMute = (e: any) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  console.log(vidSrc);

  return (
    <Box
      ref={videoWrapperRef}
      {...videoWrapper(
        isPlaying,
        data?.autoPlay,
        data?.allowFullScreen,
        isFullscreen,
        init,
      )}
      onClick={handleFullscreen}
    >
      {isClient && (
        <ReactPlayer
          url={vidSrc}
          playing={isPlaying}
          onReady={handleReady}
          controls={data?.allowControls || data?.allowFullScreen}
          muted={isMuted}
          autoPlay={data?.autoPlay && viewer && !data?.allowFullScreen}
          playsinline={!data?.allowFullScreen}
          loop={data?.loop}
        />
      )}
      {cover && (
        <Image
          sizes={imageSizes}
          src={cover?.url}
          alt={cover?.alt}
          priority={priority}
          responsive
          quality={imageQuality}
        />
      )}
      {vidSrc && isClient && (
        <Box {...videoControls(isPlaying, !init)}>
          <Button onClick={toggleMute} variant="videoMute" />
          <Button onClick={togglePlay} variant="videoPlay" />
          <Button onClick={handleFullscreen} variant="videoFullscreen" />
        </Box>
      )}
    </Box>
  );
};

export default Video;
