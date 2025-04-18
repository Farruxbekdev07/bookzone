import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
import { postData, pxToRem } from "../../utils";
import { RegisterComponent } from "../Styles/style";
import { SignUpImage } from "../../assets";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../utils/api";
import RoleSelect from "../../components/Select";
import { IUserData } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/AuthSlice";
import { toast } from "react-toastify";
import ControllerComponent from "../../components/Controller";
import { setAccounts } from "../../store/slices/AccountSlice";
const { baseUrl, registerApi } = api;

const inputDates: {
  name: string;
  errorText: string;
  required: boolean;
  type: string;
  label: string;
}[] = [
  {
    errorText: "Please enter your first name!",
    name: "firstName",
    required: true,
    type: "text",
    label: "First name",
  },
  {
    errorText: "Please enter your last name!",
    name: "lastName",
    required: false,
    type: "text",
    label: "Last name",
  },
  {
    errorText: "Please enter your phone!",
    name: "phone",
    required: false,
    type: "tel",
    label: "Phone",
  },
  {
    errorText: "Please enter your email!",
    name: "email",
    required: true,
    type: "email",
    label: "Email",
  },
  {
    errorText: "Please enter your password!",
    name: "password",
    required: true,
    type: "password",
    label: "Password",
  },
  {
    errorText: "Please enter your date of birth!",
    name: "date_of_birth",
    required: false,
    type: "date",
    label: "",
  },
];

const roles = [
  { role: "author", value: "Author" },
  { role: "reader", value: "Reader" },
];

function SignUp() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const accounts = useSelector((state: any) => state.accounts.accounts);
  const { LOG_IN, USER } = paths;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = baseUrl + registerApi;

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
      navigate(USER);
      toast.success("Successfully completed");

      const userExists = accounts.some(
        (user: any) => user._id === data?.user?._id
      );

      if (!userExists) {
        dispatch(setAccounts(data?.user));
      }
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
              {inputDates?.map(
                ({ name, errorText, required, type, label }, i) => {
                  return (
                    <ControllerComponent
                      control={control}
                      errorText={errorText}
                      errors={errors}
                      key={i}
                      name={name}
                      required={required}
                      type={type}
                      label={label}
                    />
                  );
                }
              )}
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
