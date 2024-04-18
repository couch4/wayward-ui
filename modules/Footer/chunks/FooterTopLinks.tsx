import { FC } from "react";
import { Stack, Text } from "../../../components";
import { FooterTopLinksProps, FooterLink } from "../Footer.types";
import { topLinks, topLinkItem } from "../Footer.styles";

const FooterTopLinks: FC<FooterTopLinksProps> = ({
  data,
  motion,
  textStyle,
}) => {
  const renderLinks = data.map((val: FooterLink, i: number) => {
    return (
      <Text
        key={`footerTopLink${i}`}
        link={val}
        {...topLinkItem(motion?.item, textStyle, val?.linkType)}
      />
    );
  });

  return <Stack {...topLinks(motion?.wrapper)}>{renderLinks}</Stack>;
};

export default FooterTopLinks;
