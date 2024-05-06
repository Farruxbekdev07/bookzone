import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { colors } from "../../../constants/colors";
import { IAuthorData } from "../../../interfaces";
import { pxToRem } from "../../../utils";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";
import { DefaultAuthorImage } from "../../../assets";

const { AUTHOR__DETAILS } = paths;

function CustomAuthorCard({ data }: { data: IAuthorData }) {
  const { firstName, lastName, date_of_birth, date_of_death, image } = data;
  const { yellow } = colors;
  const navigate = useNavigate();
  const birthYear = new Date(date_of_birth).getFullYear();
  const deathYear = new Date(date_of_death).getFullYear();
  const handleClick = () => {
    navigate(AUTHOR__DETAILS);
  };

  return (
    <Card
      sx={{
        maxWidth: pxToRem(225),
        backgroundColor: "rgba(33, 33, 33, 1)",
        boxShadow: `${pxToRem(10)} ${pxToRem(10)} ${pxToRem(
          10
        )} rgba(0, 0, 0, 0.02)`,
        borderRadius: pxToRem(15),
      }}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image || DefaultAuthorImage}
          alt={firstName || "book"}
          height={"285rem"}
          sx={image ? { objectPosition: "center" } : { objectPosition: "top" }}
        />
        <CardContent sx={{ padding: pxToRem(20) }}>
          <Typography
            gutterBottom
            variant="h1"
            sx={{
              fontSize: pxToRem(24),
              color: yellow,
              textAlign: "center",
            }}
          >
            {firstName} {lastName}
          </Typography>
          {date_of_death ? (
            <Typography
              variant="h4"
              sx={{ fontSize: pxToRem(16), color: "gray", textAlign: "center" }}
            >
              {birthYear} - {deathYear}
            </Typography>
          ) : (
            <Typography
              variant="h4"
              sx={{ fontSize: pxToRem(16), color: "gray", textAlign: "center" }}
            >
              {birthYear} - yilda tug'ilgan
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: pxToRem(10),
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: pxToRem(18), color: "white" }}
            >
              {/* {books} */}0
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: pxToRem(18), color: "white" }}
            >
              {/* {audioBooks} */}0
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomAuthorCard;
