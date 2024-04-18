import { GridVars } from "./Grid.types";

// grid Props
export const gridVars: GridVars = (rows, cols, gap, classes) => {
  const gridGap = gap ? `gap-${gap}` : "";
  const gridRows = rows ? `grid-rows-${rows}` : "";
  const gridCols = cols ? `grid-cols-${cols}` : "";

  const baseStyles = `
        grid ${gridGap} ${gridRows} ${gridCols}
        ${classes ? classes : ""}
    `;

  return {
    className: baseStyles,
  };
};
