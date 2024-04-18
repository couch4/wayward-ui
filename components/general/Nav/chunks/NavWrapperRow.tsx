import { FC, useContext, useEffect, useState } from "react";
import { Stack } from "../../../../components";
import { NavContext, NavPanelColumn, NavImages } from "./";
import { navPanelWrapperRow } from "../Nav.styles";

const NavWrapperRow: FC<any> = ({ data, isOpen, offset = 0 }) => {
  const { images, menuWidth, navSettings } = useContext(NavContext);
  const [panels, setPanels] = useState([{ items: data, back: null }]);
  const currTier = panels.length - 1 || 0;
  const { motion = {}, attachTo = "bottom" } = navSettings[currTier + offset];

  const handleUpdatePanels = (data?: any) => {
    const currentPanels = [...panels];
    const newData = { ...data };

    if (data?.items) {
      const latest = currentPanels[currentPanels.length - 1];
      for (let i = 0; i < latest.items.length; i++) {
        latest.items[i].isActive = i === data?.activeIndex;
      }
      for (let i = 0; i < newData.items.length; i++) {
        newData.items[i].isActive = false;
      }

      setPanels([...currentPanels, newData]);
    } else {
      let newPanels = [...currentPanels];
      newPanels.pop();

      const last = newPanels[newPanels.length - 1];
      if (last) {
        for (let i = 0; i < last.items.length; i++) {
          last.items[i].isActive = false;
        }
      }

      setPanels(newPanels);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        const newPanels = panels.slice(0, 1);
        for (let i = 0; i < newPanels[0].items.length; i++) {
          newPanels[0].items[i].isActive = false;
        }
        setPanels(newPanels);
      }, 500);
    }
  }, [isOpen]);

  const renderColumns = panels.map((val: any, i: number) => {
    return (
      <NavPanelColumn
        key={`navPanel${i}`}
        activeIndex={val.activeIndex}
        data={val}
        panelNum={i}
        updatePanels={handleUpdatePanels}
        currTier={currTier}
        offset={offset}
      />
    );
  });

  let panelMotion = (motion && motion?.panelWrapper) || {};
  if (motion && motion?.panelWrapper && attachTo === "slide") {
    panelMotion = motion?.panelWrapper(menuWidth, currTier);
  }

  return (
    <Stack {...panelMotion} {...navPanelWrapperRow}>
      {renderColumns}
      {attachTo !== "slide" && <NavImages images={images} />}
    </Stack>
  );
};

export default NavWrapperRow;
