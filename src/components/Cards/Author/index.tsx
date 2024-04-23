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
import { Book1 } from "../../../assets";

const { AUTHOR__DETAILS } = paths;

function CustomAuthorCard({ data }: { data: IAuthorData }) {
  const { audioBooks, books, dateOfBirth, fullName, image, dateOfDied } = data;
  const { yellow } = colors;
  const navigate = useNavigate();

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
          image={image || Book1}
          alt={fullName || "book"}
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
            {fullName}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: pxToRem(16), color: "gray", textAlign: "center" }}
          >
            {dateOfBirth} - {dateOfDied}
          </Typography>
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
              {books}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: pxToRem(18), color: "white" }}
            >
              {audioBooks}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomAuthorCard;
