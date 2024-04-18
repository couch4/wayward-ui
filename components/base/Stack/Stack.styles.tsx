import { cva } from "class-variance-authority";
import { StackVars } from "./Stack.types";

// stack Base and Variant Styles
export const stack = cva("stack", {
  variants: {
    direction: {
      row: ["flex", "flex-row"],
      column: ["flex", "flex-col"],
    },
    align: {
      start: ["items-start "],
      end: ["items-end  "],
      center: ["items-center "],
      stretch: ["items-stretch "],
      full: ["w-full flex"],
    },
  },
  compoundVariants: [
    {
      direction: "column",
      align: ["start", "stretch", "full"],
      class: "text-left",
    },
    {
      direction: "column",
      align: ["end"],
      class: "text-right",
    },
    {
      direction: "column",
      align: "center",
      class: "text-center",
    },
  ],
  defaultVariants: {
    direction: "column",
    align: "start",
  },
});

// stack Props
export const stackVars: StackVars = (direction, align, gap, classes) => {
  const inheritedGap = gap ? `gap-${gap}` : "";

  const baseStyles = `
        ${inheritedGap}
        ${classes ? classes : ""}
    `;

  return {
    className: stack({
      direction,
      align,
      className: baseStyles,
    }),
  };
};
