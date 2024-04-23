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
import audioCard from "../../../assets/images/audio.png";
import { IAudioBookCard } from "../../../interfaces";
import { pxToRem } from "../../../utils";
import { Book1 } from "../../../assets";

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

const AudioBookData = [
  {
    image: Book1,
    name: "Dunyoning ishlari 5-track",
    author: "O’tkir Hoshimov",
    time: "02:22:18",
    isActive: true,
  },
  {
    image: Book1,
    name: "Dunyoning ishlari 4-track",
    author: "O’tkir Hoshimov",
    time: "02:16:09",
    isActive: false,
  },
  {
    image: Book1,
    name: "Dunyoning ishlari 3-track",
    author: "O’tkir Hoshimov",
    time: "02:09:05",
    isActive: false,
  },
  {
    image: Book1,
    name: "Dunyoning ishlari 2-track",
    author: "O’tkir Hoshimov",
    time: "01:13:23",
    isActive: false,
  },
];

function AudioBook() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box className="user-main-audio-books">
      <Box>
        <Typography className="text text-yellow text-22">
          Audio Kitob
        </Typography>
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
        {AudioBookData?.map((item: IAudioBookCard) => (
          <AudioBookCard data={item} />
        ))}
      </Box>
    </Box>
  );
}

const AudioBookCard = ({ data }: { data: IAudioBookCard }) => {
  const { name, author, image, time, isActive = false } = data;

  return (
    <Box className={isActive ? "audio-book-card active" : "audio-book-card"}>
      {isActive ? (
        <img src={audioCard} alt="audio card" className="audio-card-img" />
      ) : (
        <></>
      )}
      <Box className="audio-book-card-image">
        <img src={image} alt="dunyoning ishlari" className="image" />
      </Box>
      <Box>
        <Typography className="card-name">{name}</Typography>
        <Typography className="text text-10 text-gray">{author}</Typography>
      </Box>
      <Box>
        <Typography className="text text-10 text-gray">{time}</Typography>
      </Box>
    </Box>
  );
};

export default AudioBook;
