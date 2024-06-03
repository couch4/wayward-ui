import { forwardRef, Ref } from 'react';
import { StackProps } from './Stack.types';
import { stackVars } from './Stack.styles';
import { Box } from '../../../components';

export const Stack = forwardRef(
  (
    {
      className,
      direction = 'row',
      align = 'start',
      gap,
      ...props
    }: StackProps,
    ref: Ref<any>,
  ) => {
    return (
      <Box
        variant="stack"
        ref={ref}
        extendedProps={stackVars(direction, align, gap, className)}
        {...props}
      />
    );
  },
);

Stack.displayName = 'Stack';
