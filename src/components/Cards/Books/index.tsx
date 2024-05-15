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
import { addBook, addKey } from "../../../store/slices/BookSlice";
import { useDispatch } from "react-redux";
import { CardStyles } from "./style";

const { BOOKS__DETAILS } = paths;

function CustomBookCard({ data }: { data: IBookData }) {
  const { author, image, rate, title, views, _id } = data || {};
  const { firstName, lastName } = author || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(BOOKS__DETAILS);
    const bookId: string | any = _id;
    dispatch(addBook(bookId));
  };

  return (
    <CardStyles>
      <Card className="card" onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image || DefaultBookImage}
            alt={title || "book"}
            className="card-media"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h1" className="card-title">
              {title || ""}
            </Typography>
            <Typography variant="h4" className="card-author-name">
              {firstName || ""} {lastName || ""}
            </Typography>
            <Typography variant="subtitle1" className="card-description">
              <StarIcon className="card-star-icon" />
              {rate || ""} • {views || ""} ta fikrlar
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardStyles>
  );
}

export default CustomBookCard;
