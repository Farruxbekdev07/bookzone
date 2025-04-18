/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { AccountStyles } from "../Profile/style";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { getUsers, patchData, pxToRem } from "../../../utils";
import { useSelector } from "react-redux";
import { api } from "../../../utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IUserData } from "../../../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";
const { USER } = paths;

function Security() {
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
  const { email } = user || {};

  const { mutate } = useMutation({
    mutationFn: (user: IUserData) => patchData(apiUrl, user, token),
    onError: (err: any) => {
      toast.error(err?.response?.data?.msg);
      console.log(err?.response?.data);
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
    // mutate(data);
    navigate(USER);
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
                required: false,
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
          {/* <Box className="input-wrapper">
            <Typography className="input-label">Current password</Typography>
            <Controller
              name="current-password"
              rules={{
                required: false,
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
          </Box> */}
          <Box className="input-wrapper">
            <Typography className="input-label">New password</Typography>
            <Controller
              name="new-password"
              rules={{
                required: false,
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
                required: false,
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
