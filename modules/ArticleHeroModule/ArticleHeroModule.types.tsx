import { ContentBlockMotionTypes } from "../../components";

export interface ArticleHeroModuleProps {
  data: any;
  moduleAnims?: {
    module: Record<string, any>;
    card: ContentBlockMotionTypes;
  };
  backgroundImageSizes?: string;
  variant?: string;
  children?: any;
  backgroundImageQuality?: number;
  imagePriority?: boolean;
}
