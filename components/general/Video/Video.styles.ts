import classNames from 'classnames';

export const videoWrapper = (
  isPlaying: boolean,
  isAutoPlay: boolean,
  allowFullscreen: boolean,
  isFullscreen: boolean,
  init: boolean,
) => ({
  className: classNames(
    'video-wrapper',
    { playing: isPlaying },
    { autoplay: isAutoPlay && !allowFullscreen },
    { 'fullscreen-enabled': allowFullscreen },
    { 'fullscreen-active': isFullscreen },
    { started: !init },
  ),
  style: {
    width: '100%',
    height: '100%',
  },
});

export const videoControls = (isPlaying: boolean, hasStarted: boolean) => ({
  className: classNames(
    'video-controls',
    { playing: isPlaying },
    { started: hasStarted },
  ),
});

export const reactPlayer = {
  className: 'video-react-player',
};
