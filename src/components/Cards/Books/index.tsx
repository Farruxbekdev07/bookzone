import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import bookImage from "../../../assets/images/dunyo-ishlari.png";
import StarIcon from "@mui/icons-material/Star";
import { colors } from "../../../constants/colors";
import { IBookData } from "../../../interfaces";

function CustomCard({ data }: { data: IBookData }) {
  const { author, image, rate, title, views } = data;
  const { textYellow } = colors;

  return (
    <Card
      sx={{
        maxWidth: 225,
        minHeight: 325,
        backgroundColor: "transparent",
        boxShadow: "none"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image || bookImage}
          alt={title || "book"}
          sx={{ borderRadius: "15px" }}
        />
        <CardContent sx={{padding: "16px 0px 0px 0px"}}>
          <Typography
            gutterBottom
            variant="h1"
            sx={{ fontSize: "24px", color: textYellow, textWrap: "wrap" }}
          >
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "16px", color: "gray" }}>
            {author}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "16px",
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: "5px",
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

export default CustomCard;
