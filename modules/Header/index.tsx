import { FC, useEffect, useRef, useState } from "react";
import { Box, Media, Nav, Stack } from "../../components";
import {
  headerWrapper,
  headerContent,
  headerLogo,
  navClose,
  navOpen,
  navToggleButtons,
} from "./Header.styles";
import { useRouter } from "next/navigation";

const Header: FC<any> = ({
  data,
  navProps,
  moduleAnims,
  variant,
  icons,
  scrollContainer,
  enableDesktopScrollLock = false,
  ...props
}) => {
  const router = useRouter();
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currBreakpoint, setCurrBreakpoint] = useState("base");

  useEffect(() => {
    window.addEventListener("click", closeIfClickedOutside);
    return () => {
      window.removeEventListener("click", closeIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    const scrollCont = scrollContainer || window?.document?.documentElement;
    if (scrollCont) {
      scrollCont.style.overflow = isNavOpen ? "hidden" : "unset";
      scrollCont.style.touchAction = isNavOpen ? "none" : "auto";
    }
  }, [isNavOpen]);

  const closeIfClickedOutside = (e: MouseEvent) => {
    const nav: any = navRef.current;
    const toggle: any = toggleRef.current;

    if (!nav || !toggle) return;

    if (
      !nav.contains(e.target) &&
      !toggle.contains(e.target) &&
      // @ts-ignore
      !e?.target?.classList.contains("nav-panel-back")
    ) {
      setIsNavOpen(false);
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleBreakpointChange = (breakpoint: string) => {
    setCurrBreakpoint(breakpoint);
  };

  const showHideMotion =
    currBreakpoint === "sm" || currBreakpoint === "md"
      ? moduleAnims?.wrapper(isNavOpen)
      : {};

  const LogoComponent = () => {
    let loadedLogo = (
      <Media
        data={data.logo}
        onClick={handleLogoClick}
        {...headerLogo}
        {...moduleAnims?.logo}
      />
    );
    if (icons?.logo) {
      loadedLogo = (
        <Box onClick={handleLogoClick} {...headerLogo} {...moduleAnims?.logo}>
          {icons?.logo}
        </Box>
      );
    }
    return loadedLogo;
  };

  return (
    <Box
      variant="header"
      {...headerWrapper(props, isNavOpen)}
      {...moduleAnims?.module}
    >
      <Stack {...headerContent} {...moduleAnims?.header}>
        <LogoComponent />
        {/* @ts-ignore */}
        <Nav
          ref={navRef}
          data={data?.mainNavItems}
          defaultImage={data?.defaultImage}
          variant={variant}
          navProps={navProps}
          onBreakpointChange={handleBreakpointChange}
          isOpen={isNavOpen}
          setIsOpen={setIsNavOpen}
          scrollContainer={scrollContainer}
          enableDesktopScrollLock={enableDesktopScrollLock}
          {...showHideMotion}
        />
        <Box
          ref={toggleRef}
          {...navToggleButtons(isNavOpen, moduleAnims?.toggleWrapper)}
          onClick={toggleNav}
        >
          <Box {...navOpen(moduleAnims?.toggleOpen)}>{icons?.navOpen}</Box>
          <Box {...navClose(moduleAnims?.toggleClose)}>{icons?.navClose}</Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
