import React from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import UserHeader from "../components/Header";
import paths from "../../../constants/paths";
import { AccountStyles } from "../Profile/style";
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

function Security() {
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
        <form onSubmit={handleSubmit(handleFinish)}>
          <Typography className="form-title">
            Change Or Recover Your Password:
          </Typography>
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
          <Box className="input-wrapper">
            <Typography className="input-label">Current password</Typography>
            <Controller
              name="current-password"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue="********"
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      type="password"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] &&
                        "Please enter your current password!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
          <Box className="input-wrapper">
            <Typography className="input-label">New password</Typography>
            <Controller
              name="new-password"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue="********"
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      type="password"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] &&
                        "Please enter your new password!"
                      }
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
          <Box className="input-wrapper">
            <Typography className="input-label">Confirm password</Typography>
            <Controller
              name="confirm-password"
              rules={{
                required: true,
              }}
              control={control}
              defaultValue="********"
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <TextField
                      hiddenLabel
                      variant="filled"
                      type="password"
                      {...field}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] &&
                        "Please enter your confirm password!"
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

export default Security;
