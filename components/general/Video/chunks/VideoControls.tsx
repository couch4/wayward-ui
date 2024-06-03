'use client';
import { FC } from 'react';
import { Box, Button } from '../../../';
import { videoControls } from '../Video.styles';

const VideoControls: FC<any> = ({
  toggleMute,
  togglePlay,
  handleFullscreen,
  isPlaying,
  init,
}) => {
  return (
    <Box {...videoControls(isPlaying, !init)}>
      <Button onClick={toggleMute} variant="videoMute" />
      <Button onClick={togglePlay} variant="videoPlay" />
      <Button onClick={handleFullscreen} variant="videoFullscreen" />
    </Box>
  );
};

export default VideoControls;
