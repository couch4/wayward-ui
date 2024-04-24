import { FC, useState } from 'react';
import { Box, Text } from '../../../components';
import { tooltipBubble, tooltipWrapper } from './Tooltip.styles';

const Tooltip: FC<any> = ({
  anchor = 'top',
  children,
  text,
  className,
  motion,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Box
      {...tooltipWrapper(show, className, motion)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Text text={text} {...tooltipBubble(anchor, motion)} />
      {children}
    </Box>
  );
};

export default Tooltip;
