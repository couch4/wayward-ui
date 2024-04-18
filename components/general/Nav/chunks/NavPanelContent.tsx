import { FC, useContext, useState } from "react";
import { Stack } from "../../../../components";
import { NavContext, NavItem } from "./";
import {} from "../Nav.styles";
import { NavPanelProps } from "../Nav.types";
import { splitArrayIntoChunks } from "../../../../utils";

const NavPanelContent: FC<NavPanelProps> = ({ data }) => {
  const { itemsPerColumn } = useContext(NavContext);

  // if it's been specified to split the items into columns...
  if (itemsPerColumn) {
    const columns = splitArrayIntoChunks(data, itemsPerColumn);

    return columns.map((column, index: number) => {
      return (
        <Stack
          key={`column${data.level}_${data.index}_${index}`}
          direction="column"
        >
          <NavPanelItems data={column} columnIndex={index} />
        </Stack>
      );
    });
  }

  // otherwise return a simple list of items
  return <NavPanelItems data={data} />;
};

export default NavPanelContent;

// render nav panel items

const NavPanelItems: any = ({ data = [], columnIndex = 0 }) => {
  const { itemIcons } = useContext(NavContext);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const handleCollapseSiblings = (index: number) => {
    setActiveItemIndex(index);
  };

  return data.map((val: any, index: number) => {
    return (
      <NavItem
        key={`nav-item${val.level}_${val.index}_${columnIndex}_${index}`}
        data={val}
        itemIndex={index}
        isActive={activeItemIndex === index}
        collapseSiblings={() => handleCollapseSiblings(index)}
      />
    );
  });
};
