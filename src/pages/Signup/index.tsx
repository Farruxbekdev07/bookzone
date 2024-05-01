import React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";
import { pxToRem } from "../../utils";
import { RegisterComponent } from "../Styles/style";
import { SignUpImage } from "../../assets";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../utils/api";
import { postData } from "../../utils/post";
import RoleSelect from "../../components/Select";
const { baseUrl, registerApi } = api;

function SignUp() {
  const apiUrl = baseUrl + registerApi;

  const user = {
    firstName: "Sanjar",
    lastName: "Abduraimov",
    phone: +998990134034,
    email: "sanjarbekweb@gmail.com",
    password: "43678yrwiuehruweytr8y348",
    role: "reader | author",
    address: "HelloCity",
    image: "ID",
    lang: "uz",
  };

  const { data, error, isSuccess } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => postData(apiUrl, user),
  });

  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const { LOG_IN } = paths;

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const handleFinish = async (data: FieldValues) => {
    console.log(data);
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
            <img src={SignUpImage} alt="sign up" />
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
              <Typography className="register-title">Sign Up</Typography>
              <Typography className="register-link">
                Already have an account? <Link to={LOG_IN}>Log In</Link>
              </Typography>
            </Box>
            <form onSubmit={handleSubmit(handleFinish)}>
              <Controller
                name="firstName"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        label={"First name"}
                        {...field}
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] &&
                          "Please enter your first name!"
                        }
                      />
                    </FormControl>
                  );
                }}
              />
              <Controller
                name="lastName"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        label={"Last name"}
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
              <Controller
                name="phone"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        label={"Phone"}
                        {...field}
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] && "Please enter your phone!"
                        }
                      />
                    </FormControl>
                  );
                }}
              />
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
                        type="password"
                        label={"Password"}
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
              <Controller
                name="address"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        label={"Address"}
                        {...field}
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] && "Please enter your address!"
                        }
                      />
                    </FormControl>
                  );
                }}
              />
              <RoleSelect
                control={control}
                errors={errors}
                defaultValue="reader"
              />
              <Box>
                <Button variant="contained" fullWidth type="submit">
                  Sign Up
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </RegisterComponent>
  );
}

export default SignUp;
