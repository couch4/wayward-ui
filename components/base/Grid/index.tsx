import { createElement, forwardRef, Ref } from "react";
import { GridProps } from "./Grid.types";
import { gridVars } from "./Grid.styles";
import { motion } from "framer-motion";
import { containsMotionProps } from "../../../utils";

export const Grid = forwardRef(
  ({ className, rows, cols, gap, ...props }: GridProps, ref: Ref<any>) => {
    const isAnimated = containsMotionProps(props); //contains framer motion props?
    const allProps = {
      ...gridVars(rows, cols, gap, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
    };

    return createElement(
      isAnimated ? motion.div : "div", // if motion props exist on component, make this component animatable, otherwise render static Grid
      { ...allProps, ref },
      props.children,
    );
  },
);

Grid.displayName = "Grid";
