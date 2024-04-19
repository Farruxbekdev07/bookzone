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
// import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import audioCard from "../../../assets/images/audio.png";
import { colors } from "../../../constants/colors";
import { IAudioBookCard } from "../../../interfaces";
import { pxToRem } from "../../../utils";
import { Book1 } from "../../../assets";

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
    <Box
      sx={{
        minWidth: `${pxToRem(400)}`,
        minHeight: `${pxToRem(300)}`,
        backgroundColor: audioBookBg,
        borderRadius: `${pxToRem(14)}`,
        padding: `${pxToRem(25)}`,
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
          gap: `${pxToRem(20)}`,
          margin: `${pxToRem(10)} ${pxToRem(0)}`,
        }}
      >
        <img
          src={Book1 || ""}
          alt="Book1"
          style={{
            width: `${pxToRem(50)}`,
            height: `${pxToRem(70)}`,
            objectFit: "cover",
            borderRadius: `${pxToRem(5)}`,
          }}
        />
        <img
          src={Book1 || ""}
          alt="Book1"
          style={{
            width: `${pxToRem(70)}`,
            height: `${pxToRem(100)}`,
            objectFit: "cover",
            borderRadius: `${pxToRem(5)}`,
          }}
        />
        <img
          src={Book1 || ""}
          alt="Book1"
          style={{
            width: `${pxToRem(50)}`,
            height: `${pxToRem(70)}`,
            objectFit: "cover",
            borderRadius: `${pxToRem(5)}`,
          }}
        />
      </Box>
      <Box>
        <Box>
          <Typography
            className="text-yellow"
            sx={{ fontSize: `${pxToRem(16)}`, textAlign: "center" }}
          >
            Dunyoning ishlari 5-track
          </Typography>
          <Typography
            sx={{
              fontSize: `${pxToRem(14)}`,
              color: "rgba(255, 255, 255, 0.6)",
              textAlign: "center",
            }}
          >
            O'tkir Hoshimov
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: `${pxToRem(10)}` }}>
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
              gap: `${pxToRem(40)}`,
            }}
          >
            <IconButton className="iconButton">
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                gap: `${pxToRem(20)}`,
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
          padding: `${pxToRem(20)} ${pxToRem(0)}`,
          gap: `${pxToRem(10)}`,
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
        padding: `${pxToRem(10)} ${pxToRem(15)}`,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isActive ? audioBookBg : audioCardBg,
        borderRadius: `${pxToRem(5)}`,
        width: `${pxToRem(300)}`,
        cursor: "pointer",
        position: "relative",
        border: isActive ? `${pxToRem(2)} solid ${textYellow}` : "none",
      }}
    >
      {isActive ? (
        <img src={audioCard} alt="audio card" className="audio-card-img" />
      ) : (
        <></>
      )}
      <Box
        sx={{
          width: `${pxToRem(35)}`,
          height: `${pxToRem(50)}`,
          overflow: "hidden",
        }}
      >
        <img src={image} alt="dunyoning ishlari" className="image" />
      </Box>
      <Box>
        <Typography sx={{ fontSize: `${pxToRem(14)}`, color: textYellow }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: `${pxToRem(10)}`, color: colorGray }}>
          {author}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: `${pxToRem(10)}`, color: colorGray }}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default AudioBook;
