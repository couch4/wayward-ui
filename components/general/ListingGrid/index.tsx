import { FC } from "react";
import { Box } from "../../../components";
import { AnimatePresence } from "framer-motion";
import { listingGrid } from "./ListingGrid.styles";

const ListingGrid: FC<any> = ({ data, type, motion }) => {
  if (!data || (data && data.length === 0)) return null;

  return (
    <Box {...listingGrid(type, motion)}>
      <AnimatePresence>{data}</AnimatePresence>
    </Box>
  );
};

export default ListingGrid;
