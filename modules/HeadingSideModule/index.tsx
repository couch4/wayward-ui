import { FC } from "react";
import { Box, ModuleBase, ContentBlock } from "../../components";
import { headingSide } from "./HeadingSideModule.styles";
import { HeadingSideModuleProps } from "./HeadingSideModule.types";

const HeadingSideModule: FC<HeadingSideModuleProps> = ({
  data,
  moduleAnims,
  variant = "section",
  ...props
}) => {
  return (
    <ModuleBase
      {...headingSide(props.className)}
      variant={variant}
      data={data}
      {...moduleAnims?.module}
    >
      <ContentBlock
        data={data}
        variant="headingSide"
        childAnims={moduleAnims}
      />
    </ModuleBase>
  );
};

export default HeadingSideModule;
