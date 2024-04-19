import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { colors } from "../../../constants/colors";
import { IBookData } from "../../../interfaces";
import { pxToRem } from "../../../utils";
import { Book1 } from "../../../assets";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";

const { BOOKS__DETAILS } = paths;

function CustomBookCard({ data }: { data: IBookData }) {
  const { author, image, rate, title, views } = data;
  const { textYellow } = colors;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(BOOKS__DETAILS);
  };

  return (
    <Card
      sx={{
        maxWidth: 225,
        minHeight: 325,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image || Book1}
          alt={title || "book"}
          sx={{ borderRadius: pxToRem(15) }}
        />
        <CardContent
          sx={{
            padding: `${pxToRem(16)} ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(0)}`,
          }}
        >
          <Typography
            gutterBottom
            variant="h1"
            sx={{ fontSize: pxToRem(24), color: textYellow, textWrap: "wrap" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: pxToRem(16), color: "gray" }}
          >
            {author}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: pxToRem(16),
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: pxToRem(5),
            }}
          >
            <StarIcon sx={{ color: "white" }} />
            {rate} • {views} ta fikrlar
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomBookCard;
