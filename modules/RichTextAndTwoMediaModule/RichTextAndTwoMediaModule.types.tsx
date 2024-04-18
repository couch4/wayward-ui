import { ContentBlockMotionTypes } from "../../components";

export interface RichTextAndTwoMediaModuleProps {
  data: any;
  imageSizes?: any;
  imageQuality?: any;
  backgroundSizes?: any;
  backgroundQuality?: any;
  moduleAnims?: {
    module?: any;
    card?: ContentBlockMotionTypes;
    media?: any;
  };
  variant?: string;
  backgroundImageSizes?: any;
  backgroundImageQuality?: any;
  imagePriority?: boolean;
}
