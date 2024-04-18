import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { HeroLeftAlignedModuleProps } from "./HeroLeftAlignedModule.types";
import { HeroLeftAligned } from "./HeroLeftAlignedModule.styles";

const HeroLeftAlignedModule: FC<HeroLeftAlignedModuleProps> = ({
  data,
  moduleAnims,
  backgroundImageSizes,
  backgroundImageQuality,
  imagePriority,
  ...props
}) => {
  return (
    <ModuleBase
      {...HeroLeftAligned(props)}
      data={data}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        size="full"
        variant="heroLeftAligned"
        backgroundImageSizes={backgroundImageSizes}
        backgroundImageQuality={backgroundImageQuality}
        priority={imagePriority}
        childAnims={moduleAnims}
      />
    </ModuleBase>
  );
};

export default HeroLeftAlignedModule;
