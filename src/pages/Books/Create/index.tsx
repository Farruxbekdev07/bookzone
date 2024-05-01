import React from "react";
import { CreateBookStyle } from "../style";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CreateBookImage } from "../../../assets";
import { pxToRem } from "../../../utils";
import paths from "../../../constants/paths";
import { Controller, FieldValues, useForm } from "react-hook-form";

function CreateBook() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const { REGISTER } = paths;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFinish = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <CreateBookStyle>
      <Box className={matches ? "create-book-container" : "create-book-container column"}>
        <Box className={matches ? "create-book-image w-50" : "create-book-image w-100"}>
          <Box className="image-container">
            <img src={CreateBookImage} alt="create book" />
            <Typography className="image-name">Ulug'bek xazinasi</Typography>
            <Button variant="contained" fullWidth className="create-button">
              Upload cover
            </Button>
          </Box>
        </Box>
        <Box className={matches ? "form-container w-50" : "form-container w-100"}>
          <form onSubmit={handleSubmit(handleFinish)}>
            <Typography className="form-title">Add book</Typography>
            <Controller
              name="title"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Title"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book title!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Controller
              name="Pages"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Pages"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book pages!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Controller
              name="Year"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Year"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book year!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Controller
              name="Price"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Price"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book price!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Controller
              name="Country"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Country"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book country!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Controller
              name="Author"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Author"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book author!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Controller
              name="Description"
              rules={{
                required: true,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Description"}
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book description!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <Box>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                className="create-button"
              >
                Create
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </CreateBookStyle>
  );
}

export default CreateBook;
