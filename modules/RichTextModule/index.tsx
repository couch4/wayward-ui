import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextModuleProps } from "./RichTextModule.types";
import { richText } from "./RichTextModule.styles";
import { hasHTMLTags } from "../../utils";

const RichTextModule: FC<RichTextModuleProps> = ({
  data,
  moduleAnims,
  imageSizes,
  ...props
}) => {
  let richTextContent = { ...data };
  if (data?.content && !hasHTMLTags(data?.content)) {
    richTextContent.content = `<p>${data?.content}</p>`;
  }

  return (
    <ModuleBase {...richText(props)} data={data} {...moduleAnims?.module}>
      <Card
        data={richTextContent}
        variant="richText"
        richText
        childAnims={moduleAnims?.card}
        {...imageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextModule;
