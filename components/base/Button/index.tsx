import { createElement, forwardRef, ReactNode, Ref, useCallback } from "react";
import { ButtonProps } from "./Button.types";
import { buttonVars } from "./Button.styles";
import { motion } from "framer-motion";
import { Stack, Text } from "../../../components";
import { containsMotionProps } from "../../../utils";
import { useRouter } from "next/navigation";
// @ts-ignore - mof overrides
import mofConfig from "/mofConfig";

export const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      text,
      onClick,
      iconPre: propsIconPre,
      iconPost: propsIconPost,
      linkType,
      href,
      target,
      textStyle,
      ...props
    }: ButtonProps,
    ref: Ref<any>,
  ) => {
    const router = useRouter();

    const isAnimated = containsMotionProps(props); //contains framer motion props?

    // set icon from config, unless overrideen by props
    const iconPre =
      propsIconPre || mofConfig?.button?.[variant as "primary"]?.icons?.iconPre;
    const iconPost =
      propsIconPost ||
      mofConfig?.button?.[variant as "primary"]?.icons?.iconPost;

    const renderText = !mofConfig?.button?.[variant as "primary"]?.omitText;
    const configText = mofConfig?.button?.[variant as "primary"]?.text;

    if (!text && !configText && !iconPre && !iconPost) return null;

    const handleClick = useCallback(
      (e: MouseEvent) => {
        if (onClick) {
          onClick(e);
        }

        if (href) {
          router.push(href);
        }
      },
      [onClick],
    );

    const allProps = {
      ...buttonVars(variant, size, linkType, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      onClick: (e: any) => handleClick(e),
      ...props, // pass down remaining props
    };

    const buttonMain = renderText ? (
      <Text
        variant={variant === "popover" ? variant : null}
        text={text || configText}
        textStyle={textStyle || "button"}
      />
    ) : null;
    let buttonContent: ReactNode | any[] = buttonMain;

    if (iconPre || iconPost) {
      buttonContent = (
        <Stack>
          {iconPre}
          {buttonMain}
          {iconPost}
        </Stack>
      );
    }

    return createElement(
      isAnimated ? motion.button : "button", // if motion props exist on component, make this component animatable, otherwise render static button
      { ...allProps, ref },
      buttonContent,
    );
  },
);

Button.displayName = "Button";
