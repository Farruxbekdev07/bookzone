import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../constants/colors";
import { IContainerData } from "../../interfaces";
import { pxToRem } from "../../utils";

function Container({ children }: IContainerData) {
  const { background } = colors;

  return (
    <Box
      position={"relative"}
      sx={{
        top: pxToRem(64),
        padding: pxToRem(80),
        height: "100%",
        backgroundColor: `${background || "white"}`,
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
