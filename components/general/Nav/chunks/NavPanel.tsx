import { FC, useContext, useMemo, useRef } from "react";
import { Box, Button, Stack } from "../../../../components";
import { NavContext, NavImages, NavPanelContent } from "./";
import { navPanel, navPanelWrapper } from "../Nav.styles";
import { NavPanelProps } from "../Nav.types";
import { AnimatePresence } from "framer-motion";

const NavPanel: FC<NavPanelProps> = ({
  data,
  image,
  isActive = false,
  level = 0,
  motion,
  attach,
}) => {
  const itemWrapperRef = useRef<any>(null);
  const {
    itemsPerColumn,
    images,
    navSettings,
    backButton,
    currTier,
    setCurrTier,
  } = useContext(NavContext);
  const { icon } = navSettings;

  if (!Array.isArray(data)) return null;

  const handleBack = () => {
    setCurrTier(currTier - 1);
  };

  let back = null;
  if (backButton && backButton[level]) {
    back = (
      <Button
        text={backButton[level]}
        iconPre={icon?.iconBack}
        onClick={handleBack}
      />
    );
  }

  return (
    <AnimatePresence>
      <Box
        variant="block"
        {...navPanelWrapper(
          isActive,
          attach,
          image != null,
          level,
          motion?.panelWrapper,
        )}
      >
        <Stack
          ref={itemWrapperRef}
          direction={itemsPerColumn ? "row" : "column"}
          {...navPanel(isActive, attach, motion?.panel)}
        >
          <Button
            text={backButton[level]}
            iconPre={icon?.iconBack}
            onClick={handleBack}
          />
          <NavPanelContent data={data} />
        </Stack>
        {level === 0 && <NavImages images={images} />}
      </Box>
    </AnimatePresence>
  );
};

export default NavPanel;
