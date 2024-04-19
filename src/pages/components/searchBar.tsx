import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import SearchIcon from "@mui/icons-material/Search";
import { pxToRem } from "../../utils";
const { textYellow } = colors;

function SearchBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: `${pxToRem(170)}`,
        backgroundColor: "rgba(25, 25, 25, 1)",
        boxShadow: `${pxToRem(0)} ${pxToRem(0)} ${pxToRem(
          30
        )} rgba(43, 39, 39, 0.5)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: `${pxToRem(10)}`,
        borderRadius: `${pxToRem(15)}`,
      }}
    >
      <Typography className="title">Qidirish</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: `${pxToRem(20)}`,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          inputProps={{
            style: {
              border: "none",
              outline: "none",
              color: "white",
            },
            classes: {
              input: "color: red",
            },
          }}
          InputLabelProps={{
            style: {
              color: "red",
            },
          }}
          sx={{
            backgroundColor: "rgba(64, 64, 64, 1)",
            borderRadius: `${pxToRem(15)}`,
            maxWidth: `${pxToRem(750)}`,
            // width: "100%",
            "::placeholder": {
              fontSize: `${pxToRem(24)}`,
            },
          }}
        />
        <Button
          sx={{
            width: `${pxToRem(180)}`,
            height: `${pxToRem(56)}`,
            backgroundColor: textYellow,
            "&:hover ": { backgroundColor: textYellow },
            color: "rgba(60, 39, 16, 1)",
            borderRadius: `${pxToRem(15)}`,
            fontSize: `${pxToRem(18)}`,
            display: "flex",
            gap: `${pxToRem(5)}`,
          }}
        >
          <SearchIcon sx={{ fontSize: `${pxToRem(24)}` }} /> Izlash
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
