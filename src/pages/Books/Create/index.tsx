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
import { DefaultBookImage } from "../../../assets";
import { pxToRem } from "../../../utils";
import paths from "../../../constants/paths";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { IBookData } from "../../../interfaces";
import { api } from "../../../utils/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RoleSelect from "../../../components/Select";
const { BOOKS } = paths;
const { baseUrl, filesApi, booksApi } = api;

const roles = [
  { role: "classic", value: "Classic" },
  { role: "biography", value: "Biography" },
  { role: "science", value: "Science" },
];

function CreateBook() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const token = useSelector((state: any) => state.auth.token);
  const apiUrl = baseUrl + booksApi;
  const uploadApiUrl = baseUrl + filesApi;
  const navigate = useNavigate();
  const uploadRef = React.useRef<HTMLInputElement | null>(null);
  const [file, setFile] = React.useState<File | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (bookData: IBookData) =>
      axios.post(apiUrl, bookData, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    onSuccess: (data) => {
      console.log(data?.data);
      toast.success("Book created successfully");
      navigate(BOOKS);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error);
      if (err?.response?.status === 403) {
        toast.error("You are not allowed to create a book");
      }
    },
  });
  const { mutate: uploadMutation } = useMutation({
    mutationFn: (fileData: IBookData) =>
      axios.post(uploadApiUrl, fileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: (data) => {
      console.log(data?.data);
    },
    onError: (err: any) => {
      console.log(err?.response?.data);
    },
  });

  const handleFinish = async (bookData: FieldValues | any) => {
    mutate(bookData);
  };

  const handleUploadClick = () => {
    uploadRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    const fileData: any = { oldImg: file || null };
    uploadMutation(fileData);
  };

  return (
    <CreateBookStyle>
      <Box
        className={
          matches ? "create-book-container" : "create-book-container column"
        }
      >
        <Box
          className={
            matches ? "create-book-image w-50" : "create-book-image w-100"
          }
        >
          <Box className="image-container">
            <img src={DefaultBookImage} alt="create book" />
            <input
              type="file"
              ref={uploadRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <Button
              variant="contained"
              fullWidth
              className="create-button"
              onClick={handleUploadClick}
            >
              Upload cover
            </Button>
            <Button
              variant="contained"
              fullWidth
              className="create-button"
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Box>
        </Box>
        <Box
          className={matches ? "form-container w-50" : "form-container w-100"}
        >
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
              name="pages"
              rules={{
                required: false,
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
              name="year"
              rules={{
                required: false,
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
              name="price"
              rules={{
                required: false,
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
              name="country"
              rules={{
                required: false,
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
              name="rate"
              rules={{
                required: false,
              }}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      label={"Rate"}
                      {...field}
                      type="number"
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter book rate!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
            <RoleSelect
              control={control}
              errors={errors}
              roles={roles}
              name="category"
              label="Category"
            />
            <Controller
              name="description"
              rules={{
                required: false,
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
