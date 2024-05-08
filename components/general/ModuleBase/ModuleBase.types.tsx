import { BoxProps } from '../../../components';

export interface ModuleBaseProps extends BoxProps {
  data?: any;
  variant?:
    | 'section'
    | 'footer'
    | 'header'
    | 'flex'
    | 'container'
    | 'block'
    | null;
  paddingTop?: 'Medium' | 'Large' | 'Small' | 'None';
  paddingBottom?: 'Medium' | 'Large' | 'Small' | 'None';
}
