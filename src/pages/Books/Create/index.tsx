import React, { useEffect } from "react";
import { CreateBookStyle } from "../style";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { UploadImage } from "../../../assets";
import { pxToRem } from "../../../utils";
import paths from "../../../constants/paths";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { IBookData } from "../../../interfaces";
import { api } from "../../../utils/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RoleSelect from "../../../components/Select";
import ButtonComponent from "../../../components/Button";
import ControllerComponent from "../../../components/Controller";
const { BOOKS } = paths;
const { baseUrl, booksApi } = api;

const inputDatas: {
  name: string;
  errorText: string;
  required: boolean;
  label: string;
  type: string;
}[] = [
  {
    name: "title",
    errorText: "Please enter book title!",
    required: true,
    label: "Title",
    type: "text",
  },
  {
    name: "pages",
    errorText: "Please enter book pages!",
    required: false,
    label: "Pages",
    type: "number",
  },
  {
    name: "year",
    errorText: "Please enter book year!",
    required: false,
    label: "Year",
    type: "number",
  },
  {
    name: "price",
    errorText: "Please enter book price!",
    required: false,
    label: "Price",
    type: "number",
  },
  {
    name: "country",
    errorText: "Please enter book country!",
    required: false,
    label: "Country",
    type: "text",
  },
  {
    name: "rate",
    errorText: "Please enter book rate!",
    required: false,
    label: "Rate",
    type: "number",
  },
  {
    name: "description",
    errorText: "Please enter book description!",
    required: false,
    label: "Description",
    type: "text",
  },
];

const roles = [
  { role: "classic", value: "Classic" },
  { role: "biography", value: "Biography" },
  { role: "science", value: "Science" },
];

function CreateBook() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const token = useSelector((state: any) => state.auth.token);
  const apiUrl = baseUrl + booksApi;
  const navigate = useNavigate();
  const uploadRef = React.useRef<HTMLInputElement | null>(null);
  const [selectImage, setSelectImage] = React.useState<string | null>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: async (bookData: IBookData) =>
      await axios.post(apiUrl, bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles?.[0]) {
      setSelectImage(URL.createObjectURL(selectedFiles?.[0]));
    }
  };

  const handleFinish = async (bookData: FieldValues | any) => {
    const { category, country, description, pages, price, rate, title, year } =
      bookData;
    const postBook = {
      category,
      country,
      description,
      pages,
      price,
      rate,
      title,
      year,
      // language: selectImage,
    };
    console.log(postBook, "postBook");
    console.log(typeof selectImage, "select image type");
    mutate(postBook);
  };

  const handleUploadClick = () => {
    uploadRef.current?.click();
  };

  const handleCancel = async () => {
    navigate(BOOKS);
  };

  useEffect(() => {
    console.log(selectImage, "select image");
  }, [selectImage]);

  return (
    <CreateBookStyle>
      <form
        className={
          matches ? "create-book-container" : "create-book-container column"
        }
        onSubmit={handleSubmit(handleFinish)}
      >
        <Box
          className={
            matches ? "create-book-image w-50" : "create-book-image w-100"
          }
        >
          <Box className="image-container">
            <img
              src={selectImage || UploadImage}
              alt="create book"
              onClick={handleUploadClick}
            />
            <input
              type="file"
              ref={uploadRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              name="image"
            />
            <ButtonComponent
              variant="contained"
              type="button"
              onClick={handleUploadClick}
            >
              Upload
            </ButtonComponent>
          </Box>
        </Box>
        <Box
          className={matches ? "form-container w-50" : "form-container w-100"}
        >
          <Box className="input-wrapper">
            <Typography className="form-title">Add book</Typography>
            {inputDatas?.map(
              (
                { name = "", errorText = "", required = false, label, type },
                i
              ) => {
                return (
                  <ControllerComponent
                    name={name}
                    required={required}
                    control={control}
                    errorText={errorText}
                    errors={errors}
                    key={i}
                    label={label}
                    type={type}
                  />
                );
              }
            )}
            <RoleSelect
              control={control}
              errors={errors}
              roles={roles}
              name="category"
              label="Category"
            />
            <Box className="button-wrapper">
              <ButtonComponent variant="contained" type="submit">
                Create
              </ButtonComponent>
              <ButtonComponent
                variant="outlined"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </ButtonComponent>
            </Box>
          </Box>
        </Box>
      </form>
    </CreateBookStyle>
  );
}

export default CreateBook;
