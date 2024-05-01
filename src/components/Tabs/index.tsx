import React from "react";
import { Box } from "@mui/material";
import { ITabPanel } from "../../interfaces";

function CustomTabPanel(data: ITabPanel) {
  const { children, value, index, ...other } = data;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default CustomTabPanel;
