import { FC, useCallback, useContext, useEffect, useState } from "react";
import { Box, Button, Stack } from "../../../../components";
import { useRouter } from "next/navigation";
import { NavContext, NavPanel, NavWrapperRow } from "./";
import {
  colourSplash,
  megaNavWrapper,
  navItem,
  navItemWrapper,
} from "../Nav.styles";
import { NavItemProps, NavInteractionType } from "../Nav.types";

let resetTimeout: any;
let exitTimeout: any;

const NavItem: FC<NavItemProps> = ({
  data,
  isActive: isActiveInGroup = false,
  collapseSiblings,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showMegaNav, setShowMegaNav] = useState(false);
  const {
    enableDesktopScrollLock,
    navState,
    setNavState,
    navSettings,
    navItemAnimations,
    setImgProps,
    setCurrTier,
    backButton,
    scrollContainer,
    setBackButton,
    variant,
  } = useContext(NavContext);
  const { navItemText, navItemLink, navItems, navStyle, level, colour, image } =
    data;
  const {
    attachTo: attach,
    persistOn,
    motion,
    icon,
    textStyle,
  } = navSettings[level];
  const router = useRouter();
  const hasChildren = navItems && navItems.length > 0;

  const closeMegaNav = () => {
    setIsActive(false);
    resetTimeout = setTimeout(() => {
      setShowMegaNav(false);
    }, 300);
  };

  const handleInteraction = useCallback(
    (event: MouseEvent, interaction: NavInteractionType) => {
      if (hasChildren) {
        if (interaction === "hover" && persistOn.includes("hover")) {
          setIsActive(true);
          clearTimeout(resetTimeout);
          clearTimeout(exitTimeout);
          setShowMegaNav(true);
        } else if (interaction === "hoverOut" && persistOn.includes("hover")) {
          closeMegaNav();
        } else if (interaction === "click" && persistOn.includes("hover")) {
          navItemLink && router.push(navItemLink.href);
        }

        if (interaction === "click" && persistOn !== "hover") {
          event.preventDefault();

          if (attachTo === "slideRight") {
            backButton[level + 1] = navItemText;
            setBackButton(backButton);
            setCurrTier(level + 1);
          }

          setIsActive(!isActive);
          collapseSiblings && collapseSiblings();
        }
      } else if (interaction === "click") {
        collapseSiblings && collapseSiblings();
        navItemLink && router.push(navItemLink.href);
      }
    },
    [navState, setNavState, data, router, isActive, persistOn],
  );

  const handleHover = useCallback(() => {
    setImgProps({ level, image, imageAvail: data.image });
  }, []);

  useEffect(() => {
    if (!isActiveInGroup) {
      setIsActive(false);
    }
  }, [isActiveInGroup]);

  useEffect(() => {
    if (scrollContainer && enableDesktopScrollLock) {
      scrollContainer.style.overflow = showMegaNav ? "hidden" : "unset";
      scrollContainer.style.touchAction = showMegaNav ? "none" : "auto";
    }
  }, [showMegaNav]);

  const isTotallyActive =
    persistOn === "click" ? isActive && isActiveInGroup : isActive;

  // if icons exist and/or set to show/hide on links/all
  let iconPre = icon?.iconPre?.icon;
  let iconPost = icon?.iconPost?.icon;

  if (icon?.iconPre?.onlyButtons && !hasChildren) {
    iconPre = undefined;
  }

  if (icon?.iconPost?.onlyButtons && !hasChildren) {
    iconPost = undefined;
  }

  const item = (
    <Button
      text={navItemText}
      onClick={(e: any) => handleInteraction(e, "click")}
      onMouseOver={handleHover}
      variant="nav"
      iconPre={iconPre}
      iconPost={iconPost}
      {...navItem(
        isTotallyActive,
        icon,
        navStyle,
        data.index,
        navItemAnimations,
        hasChildren,
      )}
      textStyle={textStyle?.textStyle}
      {...motion?.item}
      // {...props}
    />
  );

  const attachTo = Array.isArray(attach)
    ? level < attach.length - 1
      ? attach[level]
      : attach[attach.length - 1]
    : attach;

  if (navItems && navItems.length > 0) {
    return (
      <Stack
        direction="column"
        {...navItemWrapper(isTotallyActive, attachTo)}
        onMouseEnter={(e: any) => handleInteraction(e, "hover")}
        onMouseLeave={(e: any) => handleInteraction(e, "hoverOut")}
      >
        {item}
        {colour && <Box {...colourSplash(colour)} />}
        {variant !== "meganav" && (
          <NavPanel
            data={navItems}
            level={level}
            itemIcons={icon}
            itemIndex={data.index}
            motion={motion}
            isActive={isTotallyActive}
            attach={attachTo}
            image={image}
          />
        )}
        {variant === "meganav" && showMegaNav && (
          <Box
            {...motion?.panelWrapper}
            initial="closed"
            animate={isActive ? "open" : "closed"}
            {...megaNavWrapper}
          >
            <NavWrapperRow data={navItems} offset={1} />
          </Box>
        )}
      </Stack>
    );
  }

  return item;
};

export default NavItem;
