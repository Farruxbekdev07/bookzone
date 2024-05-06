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
import { pxToRem } from "../../utils";
import { RegisterComponent } from "../Styles/style";
import { SignUpImage } from "../../assets";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../utils/api";
import RoleSelect from "../../components/Select";
import { IUserData } from "../../interfaces";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/AuthSlice";
import { toast } from "react-toastify";
const { baseUrl, registerApi } = api;

const roles = [
  { role: "author", value: "Author" },
  { role: "reader", value: "Reader" },
];

function SignUp() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const { LOG_IN, USER } = paths;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = baseUrl + registerApi;

  const handleRegister = async (user: IUserData) => {
    const response = await axios.post(apiUrl, user);
    return response.data;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (user: IUserData) => handleRegister(user),
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      dispatch(login(data));
      navigate(USER);
      toast.success("Successfully completed");
    },
  });

  const onSubmit = (userData: FieldValues | any) => {
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        type="tel"
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
                name="date_of_birth"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        type="date"
                        // label={"Date of birth"}
                        {...field}
                        error={!!errors[field.name]}
                        helperText={
                          !!errors[field.name] &&
                          "Please enter your date of birth!"
                        }
                      />
                    </FormControl>
                  );
                }}
              />
              <Controller
                name="address"
                rules={{
                  required: false,
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
                          !!errors[field.name] &&
                          "Please enter your address!"
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
                name="role"
                label="Role"
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
