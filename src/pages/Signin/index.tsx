import React from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import signInImage from "../../assets/images/signin-image.png";
import { colors } from "../../constants/colors";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";
import { pxToRem } from "../../utils";

function SignIn() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(1000)})`);
  const { SIGN_UP } = paths;
  const { darkBlue, yellow } = colors;

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
          background: `${yellow}`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: `${pxToRem(700)}`,
            height: "fit-content",
          }}
        >
          <img src={signInImage} alt="sign up" width={"100%"} />
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
              Sign in
            </Typography>
            <Typography sx={{ fontSize: `${pxToRem(13)}`, fontWeight: "400" }}>
              Do not you have an account?{" "}
              <Link
                to={SIGN_UP}
                style={{ textDecoration: "none", color: "blue" }}
              >
                Sign up
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
                  backgroundColor: `${darkBlue}`,
                  fontSize: `${pxToRem(18)}`,
                  fontWeight: "500",
                  ":hover": {
                    bgcolor: `${darkBlue}`, // theme.palette.primary.main
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

export default SignIn;
