import { FC } from "react";
import { Accordion, ModuleBase, Stack, Text } from "../../components";
import {
  accordion,
  accordionHeading,
  accordionTag,
  accordionWrapper,
} from "./AccordionModule.styles";
import { AccordionModuleProps } from "./AccordionModule.types";

const AccordionModule: FC<AccordionModuleProps> = ({
  data,
  accordionIcon,
  moduleAnims = {},
  textStyles,
  ...props
}) => {
  return (
    <ModuleBase data={data} {...accordion(moduleAnims, props)}>
      <Stack {...accordionWrapper(moduleAnims)}>
        <Text text={data.tag} {...accordionTag(textStyles?.tag, moduleAnims)} />
        <Text
          text={data?.headingTitle?.heading}
          htag={data?.headingTitle?.htag}
          {...accordionHeading(textStyles?.headingTitle, moduleAnims)}
        />
        <Accordion
          // @ts-ignore
          data={data.accordionElements}
          icon={accordionIcon}
          allowedMultipleOpen={data?.allowOpeningMultiple}
          textStyles={textStyles}
          childAnims={moduleAnims}
        />
      </Stack>
    </ModuleBase>
  );
};

export default AccordionModule;
