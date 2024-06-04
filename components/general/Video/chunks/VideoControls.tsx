'use client';
import { FC, useContext, useRef } from 'react';
import { Box, Button, Stack, Text } from '../../../';
import { VideoContext } from './';
import { secondsToHMS } from '../../../../utils';
import { useDimensions } from '../../../../hooks';
import {
  videoControls,
  videoControlsToolbar,
  videoControlsToolbarButtons,
  videoLoadedProgress,
  videoProgress,
  videoTimeline,
  videoTimer,
} from '../Video.styles';

const VideoControls: FC<any> = ({
  toggleMute,
  togglePlay,
  progress,
  duration,
  playerRef,
}) => {
  const {
    handleFullscreen,
    init,
    isFullscreen,
    isMuted,
    isPlaying,
    setIsFullscreen,
  } = useContext(VideoContext);
  const timelineRef = useRef(null);
  const { x, width } = useDimensions(timelineRef);

  const handleClose = () => {
    setIsFullscreen(false);
  };

  const handleSeek = (e: any) => {
    const player: any = playerRef.current;
    if (player) {
      const scrubX = e.clientX - x;
      const scrubPos = (scrubX / width) * duration;
      player.seekTo(scrubPos);
    }
  };

  if (isFullscreen) {
    return (
      <Box {...videoControls(isPlaying, !init)}>
        <Button onClick={handleClose} variant="videoClose" />
        <Stack direction="column" {...videoControlsToolbar}>
          <Box ref={timelineRef} {...videoTimeline} onClick={handleSeek}>
            <Box {...videoProgress(progress?.played)} />
            <Box {...videoLoadedProgress(progress?.loaded)} />
          </Box>
          <Stack {...videoControlsToolbarButtons}>
            <Button
              onClick={togglePlay}
              variant={
                isPlaying ? 'videoFullscreenPause' : 'videoFullscreenPlay'
              }
            />
            <Button
              onClick={toggleMute}
              variant={
                isMuted ? 'videoFullscreenUnMute' : 'videoFullscreenMute'
              }
            />
            <Text
              text={`<span class="timer-elapsed">${secondsToHMS(progress?.playedSeconds)}</span> / <span class="timer-duration">${secondsToHMS(duration)}</span>`}
              {...videoTimer}
            />
          </Stack>
        </Stack>
      </Box>
    );
  }

  return (
    <Box {...videoControls(isPlaying, !init)}>
      <Button
        onClick={toggleMute}
        variant={isMuted ? 'videoUnMute' : 'videoMute'}
      />
      <Button
        onClick={togglePlay}
        variant={isPlaying ? 'videoPause' : 'videoPlay'}
      />
      <Button onClick={handleFullscreen} variant="videoFullscreen" />
    </Box>
  );
};

export default VideoControls;
