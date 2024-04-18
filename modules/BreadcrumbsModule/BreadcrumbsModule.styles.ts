import classNames from "classnames";
import { StackProps } from "../../components";

const breadcrumbs = (props?: any) => ({
  className: classNames("breadcrumbs", props.className),
});

const breadcrumbsWrapper = {
  className: "breadcrumbs-wrapper",
  direction: "row" as StackProps["direction"],
};

const breadcrumbsItem = (
  textStyle: Record<string, any>,
  motion: any,
  isActive?: boolean,
) => ({
  className: classNames("breadcrumbs-item", { active: isActive }),
  textStyle: "i-xs",
  ...motion,
  ...textStyle,
});

const separator = (textStyle: Record<string, any>, motion: any) => ({
  className: "breadcrumbs-separator",
  ...motion,
  ...textStyle,
});

export { breadcrumbs, breadcrumbsItem, breadcrumbsWrapper, separator };
