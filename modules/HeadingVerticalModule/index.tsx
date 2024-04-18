import { FC } from "react";
import { ModuleBase, Card } from "../../components";
import { HeadingVerticalModuleProps } from "./HeadingVerticalModule.types";
import { headingVertical } from "./HeadingVerticalModule.styles";

const HeadingVerticalModule: FC<HeadingVerticalModuleProps> = ({
  data,
  moduleAnims,
  imageSizes,
  imageQuality,
  imagePriority,
  ...props
}) => {
  return (
    <ModuleBase
      {...headingVertical(props)}
      data={data}
      {...props}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        variant="headingVertical"
        childAnims={moduleAnims}
        imageSizes={imageSizes}
        priority={imagePriority}
        imageQuality={imageQuality}
      />
    </ModuleBase>
  );
};

export default HeadingVerticalModule;
