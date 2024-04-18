import { BoxProps } from "../../../components";

export interface ModuleBaseProps extends BoxProps {
  data?: any;
  paddingTop?: "Medium" | "Large" | "Small" | "None";
  paddingBottom?: "Medium" | "Large" | "Small" | "None";
}
