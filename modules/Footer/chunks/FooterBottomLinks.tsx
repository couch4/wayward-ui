import { FC } from "react";
import { Stack, Text } from "../../../components";
import { FooterBottomLinksProps, FooterLink } from "../Footer.types";
import { bottomLinks, bottomLinkItem } from "../Footer.styles";

const FooterBottomLinks: FC<FooterBottomLinksProps> = ({
  data,
  motion,
  textStyle,
}) => {
  const renderLinks = data.map((val: FooterLink, i: number) => {
    return (
      <Text
        key={`footerBottomLink${i}`}
        link={val}
        {...bottomLinkItem(motion?.item, textStyle, val?.linkType)}
      />
    );
  });

  return <Stack {...bottomLinks(motion?.wrapper)}>{renderLinks}</Stack>;
};

export default FooterBottomLinks;
