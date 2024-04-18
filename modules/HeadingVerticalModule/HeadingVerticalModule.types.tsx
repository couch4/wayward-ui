import { BoxProps, ContentBlockMotionTypes } from "../../components";

export interface HeadingVerticalModuleProps extends BoxProps {
  data: any;
  moduleAnims?: {
    module: Record<string, any>;
    content: ContentBlockMotionTypes;
  };
  imageSizes?: string;
  imageQuality?: number;
  imagePriority?: boolean;
}
