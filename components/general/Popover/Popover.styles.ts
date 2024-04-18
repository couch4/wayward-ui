import classNames from "classnames";

export const popoverWrapper = (
  placement: string,
  isOpen: boolean,
  variant: string,
  isDirty: boolean,
) => {
  const hasPlacement = placement ? placement?.toLowerCase() : null;

  return {
    className: classNames(
      "popover-wrapper",
      { open: isOpen },
      [hasPlacement],
      [`popover-wrapper-${variant}`],
      { dirty: isDirty },
    ),
    tabIndex: -1,
  };
};

export const popoverContent = {
  className: "popover-content",
  direction: "column" as any,
};
