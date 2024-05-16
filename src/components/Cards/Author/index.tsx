import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IAuthorData } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";
import { DefaultAuthorImage } from "../../../assets";
import { useDispatch } from "react-redux";
import { addAuthor } from "../../../store/slices/BookSlice";
import { CardStyles } from "../Books/style";

const { AUTHOR__DETAILS } = paths;

function CustomAuthorCard({ data }: { data: IAuthorData }) {
  const { firstName, lastName, date_of_birth, date_of_death, image, _id } =
    data || {};
  const navigate = useNavigate();
  const birthYear = new Date(date_of_birth).getFullYear();
  const deathYear = new Date(date_of_death).getFullYear();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(AUTHOR__DETAILS);
    const authorId: string | any = _id;
    dispatch(addAuthor(authorId));
  };

  return (
    <CardStyles>
      <Card className="card card-author" onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="card-media"
            image={image || DefaultAuthorImage}
            alt={firstName || "book"}
            sx={
              image ? { objectPosition: "center" } : { objectPosition: "top" }
            }
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h1" className="card-title">
              {firstName} {lastName}
            </Typography>
            {date_of_death ? (
              <Typography variant="h4" className="card-author-name">
                {birthYear} - {deathYear}
              </Typography>
            ) : (
              <Typography variant="h4" className="card-author-name">
                {birthYear} - yilda tug'ilgan
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </CardStyles>
  );
}

export default CustomAuthorCard;
