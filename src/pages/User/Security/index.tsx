/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import UserHeader from "../components/Header";
import { AccountStyles } from "../Profile/style";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { pxToRem } from "../../../utils";
import { useSelector } from "react-redux";
import { api } from "../../../utils/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Security() {
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
  const { email } = user || {};

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
          <Box className="input-wrapper">
            <Typography className="input-label">Current password</Typography>
            <Controller
              name="current-password"
              rules={{
                required: true,
              }}
              control={control}
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
