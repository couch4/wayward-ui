'use client';
import { FC, useEffect, useContext, useRef, useState } from 'react';
import { VideoContext, VideoControls } from './';
import { useDimensions } from '../../../../hooks';
import dynamic from 'next/dynamic';
import { reactPlayer } from '../Video.styles';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoPlayer: FC<any> = ({ isInline = true }: any) => {
  const {
    data,
    handleFullscreen,
    fullViewer,
    init,
    inlineViewer,
    isFullscreen,
    isMuted,
    isPlaying,
    onAutoPlayStarted,
    onPlayerReady,
    setFullViewer,
    setIsMuted,
    setIsPlaying,
    setInit,
    setInlineViewer,
    wrapper,
  } = useContext(VideoContext);
  const { width, height } = useDimensions(wrapper);
  const [playerDimensions, setPlayerDimensions] = useState({
    vidWidth: 640,
    vidHeight: 390,
    aspect: 1,
    container: null,
  });
  const vidWrapper = wrapper.current;
  const playerRef = useRef(null);

  let vidSrc = data?.src;
  const vidType = data?.type;
  if (vidType === 'vimeo') vidSrc = `https://vimeo.com/${vidSrc}`;
  if (vidType === 'youtube')
    vidSrc = `https://www.youtube.com/watch?v=${data?.vidSrc}`;

  useEffect(() => {
    handleResize();
  }, [vidWrapper, width, height, inlineViewer]);

  const handleResize = () => {
    if (vidWrapper) {
      const { aspect } = playerDimensions;
      const vidHolder = vidWrapper.querySelector('#backgroundPlayer');

      let containerWidth = width;
      let containerHeight = width * 10;

      if (height * aspect > width) {
        containerWidth = height * 10;
        containerHeight = height;
      }

      if (vidHolder) {
        vidHolder.style.width = `${containerWidth}px`;
        vidHolder.style.height = `${containerHeight}px`;
      }
    }
  };

  const handleReady = () => {
    onPlayerReady && onPlayerReady();

    if (vidWrapper && isInline) {
      const container: any = vidWrapper.getElementsByTagName('iframe')[0];
      const vidWidth = container?.width;
      const vidHeight = container?.height;

      setPlayerDimensions({
        vidWidth,
        vidHeight,
        aspect: vidWidth / vidHeight,
        container,
      });

      if (container) {
        setInlineViewer(container);
        if (data?.autoPlay) {
          setInit(false);
          setIsPlaying(!data?.allowFullscreen);
        }
      }
    } else {
      const fullPlayer = document.getElementById('fullPlayer');
      const container = fullPlayer?.getElementsByTagName('iframe')[0];
      setFullViewer(container);
    }
  };

  const togglePlay = (e: any) => {
    e.stopPropagation();

    if (isInline) {
      if (init) {
        setInit(false);
        onAutoPlayStarted && onAutoPlayStarted();
      }

      data?.allowFullscreen && handleFullscreen();
    } else {
      if (fullViewer) {
        fullViewer.playing = !isPlaying;
        setIsPlaying(!isPlaying);
      }
    }
  };

  const toggleMute = (e: any) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const skipRender = !data || !wrapper.current || (isFullscreen && isInline);

  return skipRender ? null : (
    <>
      <ReactPlayer
        ref={playerRef}
        id={isInline ? 'backgroundPlayer' : 'fullPlayer'}
        url={vidSrc}
        playing={isPlaying}
        onReady={handleReady}
        controls={data?.allowControls || data?.allowFullscreen}
        muted={isMuted}
        autoPlay={data?.autoPlay && isInline && !data?.allowFullscreen}
        playsinline={isInline}
        loop={data?.loop}
        width="100%"
        height="100%"
        config={{
          vimeo: {
            playerOptions: {
              background: isInline,
            },
          },
        }}
        {...reactPlayer}
      />
      <VideoControls {...{ togglePlay, toggleMute }} />
    </>
  );
};

export default VideoPlayer;
