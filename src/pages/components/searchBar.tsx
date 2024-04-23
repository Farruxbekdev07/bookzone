import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Box className="search-bar">
      <Typography className="text text-31 text-yellow text-center uppercase">
        Qidirish
      </Typography>
      <Box className="search">
        <TextField
          className="search-input"
          fullWidth
          variant="outlined"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          inputProps={{
            style: {
              color: "white",
            },
          }}
        />
        <Button className="search-button">
          <SearchIcon className="search-icon" /> Izlash
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
