/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
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
import { pxToRem } from "../../../utils";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../utils/api";
import axios from "axios";

function Profile() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(864)})`);
  const token = useSelector((state: any) => state.auth.token);
  const { baseUrl, usersApi } = api;
  const apiUrl = baseUrl + usersApi;
  const getUsers = async () => {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response?.data;
  };
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
  const { user } = data || {};
  const { firstName, lastName, image, phone, email } = user || {};

  useEffect(() => {
    refetch();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFinish = async (data: FieldValues) => {
    console.log(data);
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
              name="first-name"
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
              name="last-name"
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
            <Button variant="contained" fullWidth type="submit">
              Save Changes
            </Button>
          </Box>
        </form>
      </Box>
    </AccountStyles>
  );
}

export default Profile;
