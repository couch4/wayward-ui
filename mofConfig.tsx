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

// MOF component library presets and overrides

export default {
  button: {
    primary: {},
    secondary: {},
    primaryCircle: {},
    secondaryCircle: {},
    primaryOutline: {},
    secondaryOutline: {},
    primaryWithIcon: {
      icons: {
        iconPost: <Arrow />,
      },
    },
    primaryOnlyIcon: {
      icons: {
        iconPost: <Close />,
      },
      omitText: true,
    },
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
    linkWithIcon: {
      icons: {
        iconPost: <Arrow />,
      },
    },
    iconBack: {
      icons: {
        iconPost: <Arrow />,
      },
      omitText: true,
    },
    iconNext: {
      icons: {
        iconPost: <Arrow />,
      },
      omitText: true,
    },
    paginate: {
      textStyle: 'i-sm',
    },
  },
  contentProps: {
    heroLeftAligned: {
      textStyles: {
        tag: {
          textStyle: 'p',
        },
        headingTitle: {
          textStyle: 'h1',
        },
      },
    },
    articleHero: {
      textStyles: {
        tag: {
          textStyle: 'p',
        },
        headingTitle: {
          textStyle: 'h5',
        },
        description: {
          textStyle: 'p-sm',
        },
      },
      buttons: {
        primaryCta: {
          variant: 'primary',
        },
        secondaryCta: {
          variant: 'secondary',
        },
      },
    },
    bannerFullBleed: {
      textStyles: {
        tag: {
          textStyle: 'p',
        },
        headingTitle: {
          textStyle: 'h1',
          variant: 'primary',
        },
        description: {
          textStyle: 'p-sm',
        },
      },
      buttons: {
        primaryCta: {
          variant: 'primaryCircle',
        },
      },
    },
    focus: {
      textStyles: {
        tag: {
          textStyle: 'p',
        },
        preHeading: {
          textStyle: 'p',
        },
        infoTags: {
          textStyle: 'p-sm',
        },
        headingTitle: {
          textStyle: 'h5',
        },
        description: {
          textStyle: 'p-sm',
        },
      },
      buttons: {
        primaryCta: {
          variant: 'primary',
        },
      },
    },
    generic: {
      textStyles: {
        tag: {
          variant: 'primary',
          textStyle: 'p-xxs',
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
          textStyle: 'p-xs',
        },
        description: {
          variant: 'primary',
          textStyle: 'p-xs',
        },
      },
    },
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
    headingSide: {
      textStyles: {
        tag: {
          textStyle: 'p-sm',
        },
        headingTitle: {
          textStyle: 'h1',
        },
        description: {
          textStyle: 'p',
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
