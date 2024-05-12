/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Box,
  Button,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import audio__note from "../../../assets/images/audio-note.png";
import MenuIcon from "@mui/icons-material/Menu";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { IBookData } from "../../../interfaces";
import { getDataWithToken, pxToRem } from "../../../utils";
import { Book1, DefaultBookImage } from "../../../assets";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../utils/api";
import { useSelector } from "react-redux";

const CustomSliderStyles = {
  "& .MuiSlider-thumb": {
    color: "rgba(201, 172, 140, 1)",
  },
  "& .MuiSlider-track": {
    color: "rgba(201, 172, 140, 1)",
  },
  "& .MuiSlider-rail": {
    color: "#fff",
  },
  "& .MuiSlider-active": {
    color: "#fff",
  },
  "& .css-1as9v07-MuiSlider-thumb": {
    width: `${pxToRem(21)}`,
    height: `${pxToRem(7)}`,
    borderRadius: `${pxToRem(18)}`,
  },
};

function AudioBook() {
  const token = useSelector((state: any) => state.auth.token);
  const [value, setValue] = React.useState<number>(30);
  const { baseUrl, booksApi } = api;
  const apiUrl = baseUrl + booksApi;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const {
    data: getBookData,
    refetch,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => getDataWithToken(apiUrl, token),
  });

  React.useEffect(() => {
    refetch();
  }, [isLoading, isSuccess]);

  return (
    <Box className="user-main-audio-books">
      <Box>
        <Typography className="text text-yellow text-22">Audio Book</Typography>
      </Box>
      <Box className="audio-books">
        <img src={Book1 || ""} alt="Book1" className="book" />
        <img src={Book1 || ""} alt="Book1" className="book second-book" />
        <img src={Book1 || ""} alt="Book1" className="book" />
      </Box>
      <Box>
        <Box>
          <Typography className="text-yellow text-center text-16">
            Dunyoning ishlari 5-track
          </Typography>
          <Typography className="text-14 text-center text-white opacity-60">
            O'tkir Hoshimov
          </Typography>
        </Box>
        <Box className="audio-note">
          <img src={audio__note || ""} alt="audio note" />
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            sx={CustomSliderStyles}
          />
        </Stack>
        <Box className="audio-control-container">
          <Box className="audio-control">
            <IconButton className="iconButton">
              <MenuIcon />
            </IconButton>
            <Box className="audio-control-play">
              <IconButton className="iconButton">
                <FastRewindIcon />
              </IconButton>
              <Button className="iconButton play" variant="contained">
                <PlayArrowIcon />
              </Button>
              <IconButton className="iconButton">
                <FastForwardIcon />
              </IconButton>
            </Box>
            <IconButton className="iconButton">
              <VolumeUpIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="audio-book-card-container">
        {getBookData?.payload?.docs?.map((item: IBookData) => (
          <AudioBookCard data={item} />
        ))}
      </Box>
    </Box>
  );
}

const AudioBookCard = ({ data }: { data: IBookData }) => {
  const { image, author, title } = data;
  const { firstName, lastName } = author;

  return (
    <Box className="audio-book-card">
      <Box className="audio-book-card-image">
        <img
          src={image || DefaultBookImage}
          alt="dunyoning ishlari"
          className="image"
        />
      </Box>
      <Box>
        <Typography className="card-name">{title}</Typography>
        <Typography className="text text-10 text-gray">
          {firstName} {lastName}
        </Typography>
      </Box>
      <Box>
        <Typography className="text text-10 text-gray"></Typography>
      </Box>
    </Box>
  );
};

export default AudioBook;
