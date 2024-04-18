import { createElement, forwardRef, Ref } from "react";
import { BoxProps } from "./Box.types";
import { boxVars } from "./Box.styles";
import { motion } from "framer-motion";
import { containsMotionProps } from "../../../utils";

export const Box = forwardRef(
  (
    { className, variant = "flex", bgSrc, ...props }: BoxProps,
    ref: Ref<any>,
  ) => {
    const isAnimated = containsMotionProps(props); //contains framer motion props?
    const allProps = {
      ...props,
      ...boxVars(variant, bgSrc, className, props.style), // pass all styling defaults to decoupled styles file to future-proof modularity
    };

    const tagType: any = ["section", "footer", "header"].includes(`${variant}`)
      ? variant
      : "div";

    return createElement(
      isAnimated ? getMotionTag(tagType) : tagType, // if motion props exist on component, make this component animatable, otherwise render static div
      { ...allProps, ref },
      props.children,
    );
  },
);

Box.displayName = "Box";

const getMotionTag = (tag: any) => {
  const tags: any = {
    div: motion.div,
    section: motion.section,
    footer: motion.footer,
    header: motion.header,
    span: motion.span,
  };

  return tags[tag] || motion.p;
};
