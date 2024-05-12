/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { DefaultBookImage } from "../../../assets";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";
import { addBook } from "../../../store/slices/BookSlice";
import { useDispatch } from "react-redux";

const { BOOKS__DETAILS } = paths;

function CustomBookCard({ data }: { data: IBookData }) {
  const { author, image, rate, title, views, _id } = data || {};
  const { firstName, lastName, date_of_birth, date_of_death } = author || {};
  const { yellow } = colors;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(BOOKS__DETAILS);
    const id: Object | any = { bookId: _id };
    dispatch(addBook(id));
    console.log(_id);
  };

  return (
    <Card
      sx={{
        minWidth: 225,
        minHeight: 325,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image || DefaultBookImage}
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
            sx={{ fontSize: pxToRem(24), color: yellow, textWrap: "wrap" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: pxToRem(16), color: "gray" }}
          >
            {firstName} {lastName}
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
