import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
import { postData, pxToRem } from "../../utils";
import { RegisterComponent } from "../Styles/style";
import { SignInImage } from "../../assets";
import { useMutation } from "@tanstack/react-query";
import { IUserData } from "../../interfaces";
import { api } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/AuthSlice";
import { toast } from "react-toastify";
import ControllerComponent from "../../components/Controller";
import { setAccounts } from "../../store/slices/AccountSlice";

const inputDates: {
  name: string;
  errorText: string;
  required: boolean;
  type: string;
  label: string;
}[] = [
  {
    name: "email",
    errorText: "Please enter your email!",
    required: true,
    type: "email",
    label: "Email",
  },
  {
    name: "password",
    errorText: "Please enter your password!",
    required: true,
    type: "password",
    label: "Password",
  },
];

function SignIn() {
  const { baseUrl, loginApi } = api;
  const matches = useMediaQuery(`(min-width: ${pxToRem(1000)})`);
  const accounts = useSelector((state: any) => state.accounts.accounts);
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

      const userExists = accounts.some(
        (user: any) => user._id === data?.user?._id
      );

      if (!userExists) {
        dispatch(setAccounts(data));
      }
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
              {inputDates?.map(
                ({ name, required, errorText, type, label }, i) => {
                  return (
                    <ControllerComponent
                      name={name}
                      errorText={errorText}
                      errors={errors}
                      key={i}
                      required={required}
                      type={type}
                      control={control}
                      label={label}
                    />
                  );
                }
              )}
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
