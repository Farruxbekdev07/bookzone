import React from "react";
import { Typography } from "@mui/material";

function DetailsTitle({ title }: { title: string }) {
  return (
    <Typography className="text-yellow details-title">{title || ""}</Typography>
  );
}

export default DetailsTitle;
