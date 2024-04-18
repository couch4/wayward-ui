import { FC } from "react";
import { Box, Text } from "../../../../components";
import { accordionItemPanel } from "../Accordion.styles";

const AccordionPanel: FC = ({
  contentAnim = {},
  data,
  panelAnim = {},
  textStyles = {},
  index,
}: any) => {
  return (
    <Box key={`accordionPanel${index}`} {...accordionItemPanel} {...panelAnim}>
      <Text
        key={`accordionContent${index}`}
        text={data}
        {...textStyles?.itemDescription}
        {...contentAnim}
      />
    </Box>
  );
};

export default AccordionPanel;
