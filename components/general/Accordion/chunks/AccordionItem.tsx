import { FC } from "react";
import { Box, Stack, Text } from "../../../../components";
import { AccordionPanel } from "./";
import {
  accordionItemButton,
  accordionClose,
  accordionItem,
} from "../Accordion.styles";

const AccordionItem: FC<any> = ({
  data,
  accordionIcon = null,
  textStyles = {},
  childAnims,
  index = 0,
  togglePanel,
  isActive,
}) => {
  const hasCloseAnims = childAnims?.close || {};

  return (
    <Stack
      key={`accordion-item-${index}`}
      direction="column"
      {...accordionItem(isActive)}
      initial="inactive"
      animate={isActive ? "active" : "inactive"}
    >
      <Stack
        direction="row"
        onClick={() => togglePanel(index)}
        {...accordionItemButton}
      >
        <Text text={data.title} {...textStyles?.itemTitle} />
        <Box {...accordionClose} {...hasCloseAnims}>
          {accordionIcon}
        </Box>
      </Stack>
      <AccordionPanel
        // @ts-ignore
        index={index}
        data={data.text}
        panelAnim={childAnims?.panel || {}}
        contentAnim={childAnims?.content || {}}
        textStyles={textStyles}
        isActive={isActive}
      />
    </Stack>
  );
};

export default AccordionItem;
