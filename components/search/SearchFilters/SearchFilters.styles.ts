import classNames from "classnames";

export const filterWrapper = {
  className: "filter-wrapper",
};

export const dropdownWrapper = (filters = []) => {
  const isDirty = filters.filter((val: any) => val.isSelected).length > 0;
  return {
    className: classNames("filter-wrapper", { dirty: isDirty }),
  };
};
