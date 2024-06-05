/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import UserHeader from "../components/Header";
import { AccountStyles } from "./style";
import { Camera, DefaultAuthorImage } from "../../../assets";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { getUsers, patchData, pxToRem } from "../../../utils";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../../utils/api";
import { IUserData } from "../../../interfaces";
import { toast } from "react-toastify";
import paths from "../../../constants/paths";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../components/Button";
const { USER } = paths;

function Profile() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(864)})`);
  const token = useSelector((state: any) => state.auth.token);
  const { baseUrl, usersApi } = api;
  const apiUrl = baseUrl + usersApi;
  const navigate = useNavigate();

  const {
    data: getUserData,
    isLoading: getUserLoading,
    isError: getUserError,
    refetch: getUserDataRefetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(apiUrl, token),
  });
  const { user } = getUserData?.data || {};
  const { firstName, lastName, image, phone, email } = user || {};

  const { mutate } = useMutation({
    mutationFn: (user: IUserData) => patchData(apiUrl, user, token),
    onError: (err: any) => {
      toast.error(err?.response?.data?.error);
    },
    onSuccess: () => {
      toast.success("Successfully completed");
      navigate(USER);
    },
  });

  React.useEffect(() => {
    getUserDataRefetch();
  }, [getUserLoading, getUserError]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFinish = async (data: FieldValues | any) => {
    mutate(data);
  };

  const handleCancel = () => {
    navigate(USER);
  };

  return (
    <AccountStyles>
      <UserHeader />
      <Box
        className={matches ? "account-container" : "account-container column"}
      >
        <Box className="avatar-wrapper">
          <Avatar className="avatar" src={image || DefaultAuthorImage}>
            {DefaultAuthorImage ? "" : "M"}
          </Avatar>
          <IconButton size="large" className="camera">
            <img src={Camera} alt="camera" />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit(handleFinish)}>
          <Typography className="form-title">My profile</Typography>
          <Box className="input-wrapper">
            <Typography className="input-label">First Name</Typography>
            <Controller
              name="firstName"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue={firstName || ""}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter your first name!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
          <Box className="input-wrapper">
            <Typography className="input-label">Last Name</Typography>
            <Controller
              name="lastName"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue={lastName || ""}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please enter your last name!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
          <Box className="input-wrapper">
            <Typography className="input-label">Phone</Typography>
            <Controller
              name="phone"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue={phone || ""}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] &&
                        "Please enter your phone number!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
          <Box className="input-wrapper">
            <Typography className="input-label">Email</Typography>
            <Controller
              name="email"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue={email || ""}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] &&
                        "Please enter your email address!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
          <Box className="save-changes-button">
            <ButtonComponent
              variant="outlined"
              type="button"
              onClick={handleCancel}
              isDisabled={false}
            >
              Cancel
            </ButtonComponent>
            <ButtonComponent
              variant="contained"
              type="submit"
              isDisabled={false}
            >
              Save Changes
            </ButtonComponent>
          </Box>
        </form>
      </Box>
    </AccountStyles>
  );
}

export default Profile;
