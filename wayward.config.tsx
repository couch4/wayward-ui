// @ts-ignore
import Arrow from './assets/icons/arrow.svg';
// @ts-ignore
import Pause from './assets/icons/iconPause.svg';
// @ts-ignore
import Close from './assets/icons/iconClose.svg';
// @ts-ignore
import Fullscreen from './assets/icons/iconFullscreen.svg';
// @ts-ignore
import Mute from './assets/icons/iconMute.svg';
// @ts-ignore
import UnMute from './assets/icons/iconUnMute.svg';

// component library presets and overrides

export default {
  button: {
    primary: {},
    secondary: {},
    primaryCircle: {},
    secondaryCircle: {},
    primaryOutline: {},
    secondaryOutline: {},
    videoPlay: {
      icons: {
        iconPost: <Arrow />,
      },
      text: 'PLAY',
    },
    videoPause: {
      icons: {
        iconPost: <Pause />,
      },
      text: 'PAUSE',
    },
    videoFullscreen: {
      icons: {
        iconPost: <Fullscreen />,
      },
    },
    videoFullscreenPlay: {
      icons: {
        iconPost: <Arrow />,
      },
    },
    videoFullscreenPause: {
      icons: {
        iconPost: <Pause />,
      },
    },
    videoFullscreenMute: {
      icons: {
        iconPost: <Mute />,
      },
    },
    videoFullscreenUnMute: {
      icons: {
        iconPost: <UnMute />,
      },
    },
    videoClose: {
      icons: {
        iconPost: <Close />,
      },
    },
    paginate: {
      textStyle: 'i-sm',
    },
  },
  contentProps: {
    primary: {
      textStyles: {
        preHeading: {
          variant: 'primaryBold',
          textStyle: 'p',
        },
        headingTitle: {
          textStyle: 'h5',
        },
        subHeading: {
          variant: 'primaryBold',
          textStyle: 'h3',
        },
        info: {
          variant: 'primaryBold',
          textStyle: 'p',
        },
      },
      buttons: {
        primaryCta: {
          variant: 'primary',
        },
      },
    },
  },
  text: {
    variant: {
      alternate: 'font-alternate',
      alternateBold: 'font-alternate text-bold',
      alternateLight: 'font-alternate text-light',
      alternateItalic: 'font-alternate text-italic',
    },
    textStyle: {
      quote: 'text-quote',
    },
  },
  images: {
    disableCDNOptimisation: false,
  },
};
