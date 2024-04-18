import classnames from "classnames";

export const notFound = (props: any) => ({
  className: classnames(["cms-module-not-found", props.className]),
});
