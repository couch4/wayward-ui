import { type VariantProps } from "class-variance-authority";
import { StackProps } from "../../../components";
import { buttonGroup } from "./ButtonGroup.styles";

export interface ButtonGroupProps
  extends StackProps,
    VariantProps<typeof buttonGroup> {
  primaryProps?: any;
  secondaryProps?: any;
  shareData?: any;
}

export type ButtonGroupVars = (
  direction: ButtonGroupProps["direction"],
  className: any,
) => Record<any, any>;
