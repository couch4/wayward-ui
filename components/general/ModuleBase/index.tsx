import { FC } from "react";
import { Box, ErrorBoundary } from "../../../components";
import { moduleBase } from "./ModuleBase.styles";
import { ModuleBaseProps } from "./ModuleBase.types";

const ModuleBase: FC<ModuleBaseProps> = ({
  data,
  variant = "section",
  ...props
}) => {
  return (
    <ErrorBoundary>
      <Box variant={variant} {...props} {...moduleBase(data, props, variant)} />
    </ErrorBoundary>
  );
};

export default ModuleBase;
