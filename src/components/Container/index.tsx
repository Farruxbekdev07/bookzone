import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../constants/colors";
import { IContainerData } from "../../interfaces";


function Container({ children }: IContainerData) {
  const { containerBg } = colors;
  return (
    <Box
      position={"relative"}
      sx={{
        top: "64px",
        padding: "80px",
        height: "100%",
        backgroundColor: `${containerBg || "white"}`,
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
