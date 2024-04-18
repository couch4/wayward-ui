import Close from "../../assets/icons/close.svg";
import Menu from "../../assets/icons/menu.svg";
import ZahaArrow from "../../assets/icons/zhaArrow.svg";
import ZahaLogo from "../../assets/images/zhaLogoFull.svg";
import ZahaChevron from "../../assets/icons/zahaChevron.svg";
import headerMotion from "./Header.motion";

const headerConfig = {
  variant: "meganav",
  navProps: {
    sm: {
      attachTo: ["slide"],
      persistOn: ["click"],
      direction: ["column"],
      motion: [
        {
          panel: headerMotion.navItem,
          panelWrapper: headerMotion.slideRight,
        },
      ],
      textStyle: [
        {
          textStyle: "p-sm",
        },
      ],
      icon: [
        {
          iconPost: {
            icon: <ZahaArrow />,
            onlyButtons: true,
          },
          iconBack: {
            icon: <ZahaArrow />,
          },
        },
      ],
      scrollable: [true],
      disableImages: true,
      imageSizes: "30w",
    },
    md: {
      attachTo: ["stackRow"],
      motion: [
        {
          panel: headerMotion.navItem,
          imageHolder: headerMotion.navItem,
        },
        {
          panel: headerMotion.spanRow,
        },
      ],
      icon: [
        {
          iconPost: {
            icon: <ZahaArrow />,
            onlyButtons: true,
          },
        },
      ],
      scrollable: [true],
      imageSizes: "50vw",
      imagePriority: true,
      disableImages: false,
    },
    lg: {
      direction: ["row", "column"],
      attachTo: ["bottom", "stackRow"],
      persistOn: ["hoverDelay", "click"],
      scrollable: [false],
      motion: [
        {
          panel: headerMotion.navItem,
          panelWrapper: {},
        },
        {
          item: {},
          panel: headerMotion.spanRow,
          panelWrapper: headerMotion.meganav,
        },
      ],
      icon: [
        {
          iconPost: {
            icon: <ZahaChevron />,
            onlyButtons: true,
          },
        },
        {
          iconPost: {
            icon: <ZahaArrow />,
            onlyButtons: true,
          },
        },
      ],
      textStyle: [
        {
          textStyle: "i-xs",
        },
        {
          textStyle: "p-sm",
        },
      ],
      imageSizes: "50vw",
      imageQuality: 50,
      imagePriority: true,
    },
  },
  icons: {
    navClose: <Close />,
    navOpen: <Menu />,
    logo: <ZahaLogo />,
  },
  moduleAnims: headerMotion,
  enableDesktopScrollLock: true,
};

export default headerConfig;
