import React from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
import { postData, pxToRem } from "../../utils";
import { RegisterComponent } from "../Styles/style";
import { SignInImage } from "../../assets";
import { useMutation } from "@tanstack/react-query";
import { IUserData } from "../../interfaces";
import { api } from "../../utils/api";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/AuthSlice";
import { toast } from "react-toastify";

function SignIn() {
  const { baseUrl, loginApi } = api;
  const matches = useMediaQuery(`(min-width: ${pxToRem(1000)})`);
  const { USER } = paths;
  const { REGISTER } = paths;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = baseUrl + loginApi;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (user: IUserData) => postData(apiUrl, user),
    onError: (err: any) => {
      toast.error(err?.response?.data?.msg);
    },
    onSuccess: (data) => {
      dispatch(login(data));
      toast.success("Successfully completed");
      navigate(USER);
    },
  });

  const handleFinish = async (userData: FieldValues | any) => {
    mutate(userData);
  };

  return (
    <RegisterComponent>
      <Box
        className={matches ? "register-wrapper row" : "register-wrapper column"}
      >
        <Box
          className={
            matches
              ? "register-image-wrapper w-50"
              : "register-image-wrapper w-100"
          }
        >
          <Box className="register-image">
            <img src={SignInImage} alt="sign in" />
          </Box>
        </Box>
        <Box
          className={
            matches
              ? "register-form-wrapper w-50"
              : "register-form-wrapper w-100"
          }
        >
          <Box className="register-form">
            <Box className="register-form-title">
              <Typography className="register-title">Log In</Typography>
              <Typography className="register-link">
                Do not you have an account? <Link to={REGISTER}>Sign Up</Link>
              </Typography>
            </Box>
            <form onSubmit={handleSubmit(handleFinish)}>
              <Controller
                name="email"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        label={"Email"}
                        {...field}
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] && "Please enter your email!"
                        }
                      />
                    </FormControl>
                  );
                }}
              />
              <Controller
                name="password"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        label={"Password"}
                        type="password"
                        {...field}
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] && "Please enter your password!"
                        }
                      />
                    </FormControl>
                  );
                }}
              />
              <Box>
                <Button variant="contained" fullWidth type="submit">
                  Log In
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </RegisterComponent>
  );
}

export default SignIn;
