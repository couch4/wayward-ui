import classNames from "classnames";

export const paginationWrapper = (motion: any) => ({
  className: "pagination-wrapper",
  ...motion,
});

export const paginationStepsWrapper = {
  className: "pagination-steps-wrapper",
};

export const paginationStep = (isActive: boolean, motion: any) => ({
  className: classNames("pagination-step", { active: isActive }),
  ...motion,
});

export const paginationBack = (motion: any) => ({
  className: "pagination-back",
  ...motion,
});

export const paginationNext = (motion: any) => ({
  className: "pagination-next",
  ...motion,
});

export const paginationDivider = (motion: any) => ({
  className: "pagination-divider",
  ...motion,
});

export const paginationShowMore = (motion: any) => ({
  className: "pagination-show-more",
  ...motion,
});
