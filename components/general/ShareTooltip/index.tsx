import { FC } from "react";
import { Box, Popover } from "../../../components";
import { useRouter } from "next/navigation";
import { shareLink } from "./ShareTooltip.styles";

const ShareTooltip: FC<any> = ({ data, title = "Share" }) => {
  const router = useRouter();

  const handleGetLink = (link: string, id: string) => {
    if (id.includes("Subject")) {
      console.log("this is where we'd mail withd subject:", link);
    } else {
      return router.push(link);
    }
  };

  const renderShareLinks = Object.entries(data).map(([key, value]) => {
    return (
      <Box
        key={`shareLink_${key}`}
        onClick={() => handleGetLink(value as string, key)}
        {...shareLink(key)}
      />
    );
  });

  return (
    <Popover variant="share" title={title}>
      {renderShareLinks}
    </Popover>
  );
};

export default ShareTooltip;
