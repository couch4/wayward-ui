import classNames from "classnames";

export const dropdownOption = (isChecked: boolean) => ({
  className: classNames("dropdown-option", { checked: isChecked }),
});
