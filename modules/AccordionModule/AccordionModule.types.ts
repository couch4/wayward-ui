import { ReactNode } from "react";
import { StackProps } from "../../components";

export interface AccordionModuleProps extends StackProps {
  data: any;
  accordionIcon?: ReactNode;
  moduleAnims?: any;
  accordionItemTitle?: any;
  accordionItemCopy?: any;
  textStyles?: any;
}
