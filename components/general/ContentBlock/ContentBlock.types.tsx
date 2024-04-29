import React from 'react';
import { MotionProps } from 'framer-motion';

export interface ContentBlockProps {
  variant?: any;
  data: any;
  motion?: Record<string, any>;
  richText?: boolean;
}

export type ContentBlockMotionTypes = {
  contentBlock?: Record<string, any>;
  preContent?: Record<string, any>;
  preHeading?: Record<string, any>;
  tag?: Record<string, any>;
  info?: Record<string, any>;
  infoTags?: Record<string, any>;
  infoTag?: Record<string, any>;
  headingTitle?: Record<string, any>;
  subHeading?: Record<string, any>;
  bodyCopy?: Record<string, any>;
  primaryCta?: Record<string, any>;
  secondaryCta?: Record<string, any>;
};

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface ContentBlockContentProps extends HTMLAndMotionProps {
  ref?: any;
  variant?: any;
  data: {
    preHeading?: string;
    headingTitle?: any;
    title?: any;
    tag?: string;
    info?: string;
    subHeading?: string;
    subheading?: string;
    bodyCopy?: string;
    content?: string;
    primaryCta?: any;
    secondaryCta?: any;
    cta?: any;
    sharingLinksModel?: any;
    infoTags?: string[] | string;
  };
  motion?: ContentBlockMotionTypes;
  richText?: boolean;
}

export type ContentBlockVars = (
  variant: any,
  motion: {},
  className: any,
) => Record<any, any>;
