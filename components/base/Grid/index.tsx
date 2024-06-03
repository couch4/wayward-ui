import { forwardRef, Ref } from 'react';
import { GridProps } from './Grid.types';
import { gridVars } from './Grid.styles';
import { Box } from '../../../components';

export const Grid = forwardRef(
  ({ className, rows, cols, gap, ...props }: GridProps, ref: Ref<any>) => {
    return (
      <Box
        variant="grid"
        ref={ref}
        extendedProps={gridVars(rows, cols, gap, className)}
        {...props}
      />
    );
  },
);

Grid.displayName = 'Grid';
