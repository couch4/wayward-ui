import { FC } from "react";
import { Box, Stack } from "../../../components";
import {
  FooterSocialLinksProps,
  FooterLink,
  SocialLink,
} from "../Footer.types";
import { socialLinks, socialLinkItem } from "../Footer.styles";
import { useRouter } from "next/navigation";

const FooterSocialLinks: FC<FooterSocialLinksProps> = ({
  data,
  motion,
  icons,
}) => {
  const router = useRouter();

  const handleClick = (link: FooterLink) => {
    router.push(link.href);
  };

  const renderLinks = data.map((val: SocialLink, i: number) => {
    const iconType = val.socialPlatform && val.socialPlatform.toLowerCase();

    return (
      <Box
        key={`socialLink${i}`}
        onClick={() => handleClick(val.link)}
        {...socialLinkItem(motion?.item)}
      >
        {icons && icons[iconType]}
      </Box>
    );
  });

  return <Stack {...socialLinks(motion?.wrapper)}>{renderLinks}</Stack>;
};

export default FooterSocialLinks;
