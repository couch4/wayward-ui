import { forwardRef, Ref } from 'react';
import { Box, ErrorBoundary } from '../../../components';
import { moduleBase } from './ModuleBase.styles';
import { ModuleBaseProps } from './ModuleBase.types';

const ModuleBase = forwardRef(
  ({ data, variant = 'section', ...props }: ModuleBaseProps, ref: Ref<any>) => {
    return (
      <ErrorBoundary>
        <Box
          ref={ref}
          variant={variant}
          {...props}
          {...moduleBase(data, props, variant)}
        />
      </ErrorBoundary>
    );
  },
);

export default ModuleBase;
