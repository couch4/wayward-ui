import classNames from "classnames";

export const shareLink = (id: string) => {
  return {
    className: classNames("share-link-item", [id]),
  };
};
