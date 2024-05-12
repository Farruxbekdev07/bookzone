import React from "react";
import { Box } from "@mui/material";
import { NoDataImage } from "../../assets";

export default function NoData() {
  return (
    <Box className="no-data">
      <img src={NoDataImage} alt="no data" />
    </Box>
  );
}
