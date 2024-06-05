import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "../../components/Button";
import ControllerComponent from "../../components/Controller";
import { Control, FieldErrors, FieldValues } from "react-hook-form";

function SearchBar({
  onClick,
  errors,
  control,
}: {
  onClick?: void | any;
  control?: Control<FieldValues, any>;
  errors?: FieldErrors | any;
}) {
  return (
    <Box className="search-bar">
      <Typography className="text text-31 text-yellow text-center uppercase">
        Qidirish
      </Typography>
      <Box className="search">
        <ControllerComponent
          control={control}
          errors={errors}
          errorText="Empty input"
          key={1}
          label="Search..."
          name="search"
          required={false}
          type="text"
        />
        <ButtonComponent
          variant="contained"
          type="button"
          isDisabled={false}
          className="search-button"
          onClick={onClick}
        >
          <SearchIcon className="search-icon" /> Izlash
        </ButtonComponent>
      </Box>
    </Box>
  );
}

export default SearchBar;
