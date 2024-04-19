import React from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import signUpImage from "../../assets/images/signup-image.png";
import { colors } from "../../constants/colors";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";
import { pxToRem } from "../../utils";

function SignUp() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(1000)})`);
  const { SIGN_IN } = paths;
  const { buttonBg, registerBg } = colors;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFinish = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: `${matches ? "row" : "column"}`,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: `${matches ? "50%" : "100%"}`,
          height: "100%",
          padding: `${pxToRem(100)} ${pxToRem(40)}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `${registerBg}`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: `${pxToRem(700)}`,
            height: "fit-content",
          }}
        >
          <img src={signUpImage} alt="sign up" width={"100%"} />
        </Box>
      </Box>
      <Box
        sx={{
          width: `${matches ? "50%" : "100%"}`,
          height: "100%",
          display: "flex",
          padding: `${pxToRem(50)} ${pxToRem(30)}`,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: `${pxToRem(600)}`, width: "100%" }}>
          <Box sx={{ width: "100%", marginBottom: `${pxToRem(30)}` }}>
            <Typography sx={{ fontSize: `${pxToRem(36)}`, fontWeight: "900" }}>
              Sign up
            </Typography>
            <Typography sx={{ fontSize: `${pxToRem(13)}`, fontWeight: "400" }}>
              Already have an account?{" "}
              <Link
                to={SIGN_IN}
                style={{ textDecoration: "none", color: "blue" }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit(handleFinish)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: `${pxToRem(20)}`,
            }}
          >
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
                        !!errors[field.name] && "Please enter your first name!"
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
            <Box>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  height: `${pxToRem(56)}`,
                  backgroundColor: `${buttonBg}`,
                  fontSize: `${pxToRem(18)}`,
                  fontWeight: "500",
                  ":hover": {
                    bgcolor: `${buttonBg}`, // theme.palette.primary.main
                  },
                }}
              >
                Next step
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
