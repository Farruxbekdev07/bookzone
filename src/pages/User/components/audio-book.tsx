import React from "react";
import {
  Box,
  Button,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import book from "../../../assets/images/dunyo-ishlari.png";
import audio__note from "../../../assets/images/audio-note.png";
import MenuIcon from "@mui/icons-material/Menu";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FastRewindIcon from "@mui/icons-material/FastRewind";
// import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import bookImage from "../../../assets/images/dunyo-ishlari.png";
import audioCard from "../../../assets/images/audio.png";
import { colors } from "../../../constants/colors";
import { IAudioBookCard } from "../../../interfaces";

const { textYellow, audioCardBg, colorGray, audioBookBg } = colors;

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
    width: "21px",
    height: "7px",
    borderRadius: "18px",
  },
};

const AudioBookData = [
  {
    image: bookImage,
    name: "Dunyoning ishlari 5-track",
    author: "O’tkir Hoshimov",
    time: "02:22:18",
    isActive: true,
  },
  {
    image: bookImage,
    name: "Dunyoning ishlari 4-track",
    author: "O’tkir Hoshimov",
    time: "02:16:09",
    isActive: false,
  },
  {
    image: bookImage,
    name: "Dunyoning ishlari 3-track",
    author: "O’tkir Hoshimov",
    time: "02:09:05",
    isActive: false,
  },
  {
    image: bookImage,
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
    <Box
      sx={{
        minWidth: "400px",
        minHeight: "300px",
        backgroundColor: audioBookBg,
        borderRadius: "14px",
        padding: "25px",
      }}
    >
      <Box>
        <Typography className="text text-yellow">Audio Kitob</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "10px 0px",
        }}
      >
        <img
          src={book || ""}
          alt="book"
          style={{
            width: "50px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <img
          src={book || ""}
          alt="book"
          style={{
            width: "70px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <img
          src={book || ""}
          alt="book"
          style={{
            width: "50px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box>
        <Box>
          <Typography
            className="text-yellow"
            sx={{ fontSize: "16px", textAlign: "center" }}
          >
            Dunyoning ishlari 5-track
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.6)",
              textAlign: "center",
            }}
          >
            O'tkir Hoshimov
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <img
            style={{ width: "100%" }}
            src={audio__note || ""}
            alt="audio note"
          />
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            sx={CustomSliderStyles}
          />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
            }}
          >
            <IconButton className="iconButton">
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px",
          gap: "10px",
        }}
      >
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
    <Box
      sx={{
        display: "flex",
        padding: "10px 15px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isActive ? audioBookBg : audioCardBg,
        borderRadius: "5px",
        width: "300px",
        cursor: "pointer",
        position: "relative",
        border: isActive ? `2px solid ${textYellow}` : "none",
      }}
    >
      {isActive ? (
        <img src={audioCard} alt="audio card" className="audio-card-img" />
      ) : (
        <></>
      )}
      <Box sx={{ width: "35px", height: "50px", overflow: "hidden" }}>
        <img src={image} alt="dunyoning ishlari" className="image" />
      </Box>
      <Box>
        <Typography sx={{ fontSize: "14px", color: textYellow }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: "10px", color: colorGray }}>
          {author}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "10px", color: colorGray }}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default AudioBook;
