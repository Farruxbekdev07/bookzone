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
import paths from "../../../constants/paths";
import { AccountStyles } from "./style";
import { Camera, UserAvatarImage } from "../../../assets";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { pxToRem } from "../../../utils";

const { PROFILE, SECURITY, SETTINGS } = paths;

const data = [
  {
    value: "My Account",
    index: 1,
    path: PROFILE,
  },
  {
    value: "Security",
    index: 2,
    path: SECURITY,
  },
  {
    value: "Settings",
    index: 3,
    path: SETTINGS,
  },
];

function Profile() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(864)})`);

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
      <UserHeader data={data} />
      <Box
        className={matches ? "account-container" : "account-container column"}
      >
        <Box className="avatar-wrapper">
          <Avatar className="avatar" src={UserAvatarImage || ""}>
            {UserAvatarImage ? "" : "M"}
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
              defaultValue="John"
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
              defaultValue="Wick"
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
              defaultValue="+998932228066"
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
              defaultValue="john.wick@gmail.com"
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
