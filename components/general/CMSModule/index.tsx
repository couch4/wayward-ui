import { createElement } from "react";
import { Stack, Text } from "../../";
import * as Modules from "../../../modules";
import ShowJSON from "../ShowJSON";
import { notFound } from "./CMSModule.styles";

const CMSModule = ({
  module: { moduleName, moduleId, props: moduleProps },
  ...props
}: any) =>
  // @ts-ignore
  moduleName && typeof Modules[moduleName] !== "undefined" ? (
    // @ts-ignore
    createElement(Modules[moduleName], {
      data: {
        moduleName: moduleName,
        moduleId: moduleId,
        ...moduleProps,
      },
      ...props,
    })
  ) : (
    <Stack direction="column" {...notFound}>
      <Text
        text={`The Module <b style="color:teal;">${moduleName}</b> has not been created yet.`}
        textStyle="h2"
      />
      <ShowJSON data={moduleProps} />
    </Stack>
  );

export default CMSModule;
