import React from "react";
import { Typography } from "@mui/material";
import { TitleStyles } from "./index";

export default function TitleComponent() {
  return (
    <TitleStyles>
      <Typography variant="h1" className="title"></Typography>
    </TitleStyles>
  );
}
