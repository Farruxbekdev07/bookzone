import React from "react";
import { Typography } from "@mui/material";

function DetailsTitle({ title }: { title: string }) {
  return (
    <Typography className="text text-yellow text-48 uppercase">
      {title || ""}
    </Typography>
  );
}

export default DetailsTitle;
