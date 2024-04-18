import React, { FC, useState, useEffect, useRef } from "react";
import { Button, Stack } from "../../../components";
import { popoverContent, popoverWrapper } from "./Popover.styles";

let exitTimeout: any = null;

const Popover: FC<any> = ({
  variant = "popover",
  title,
  placement,
  icons,
  children,
  isDirty = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapper = useRef();

  useEffect(() => {
    window.addEventListener("click", closeIfClickedOutside);
    return () => {
      window.removeEventListener("click", closeIfClickedOutside);
    };
  }, []);

  const closeIfClickedOutside = (e: MouseEvent) => {
    const wrapperEl: any = wrapper.current;

    if (!wrapperEl?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const toggleOpen = (e: MouseEvent) => {
    setIsOpen(!isOpen);
  };

  const handleEnter = () => {
    clearTimeout(exitTimeout);
  };

  const handleLeave = () => {
    exitTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  return (
    <Stack
      ref={wrapper}
      direction="column"
      {...popoverWrapper(placement, isOpen, variant, isDirty)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Button
        text={title}
        variant={variant}
        iconPost={icons?.dropdown}
        onClick={toggleOpen}
      />
      <Stack {...popoverContent}>{children}</Stack>
    </Stack>
  );
};

export default Popover;
