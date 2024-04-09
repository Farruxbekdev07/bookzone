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

function SignIn() {
  const matches = useMediaQuery("(min-width:1000px)");
  const { SIGN_UP } = paths;
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
          padding: "100px 40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `${registerBg}`,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "700px", height: "fit-content" }}>
          <img src={signInImage} alt="sign up" width={"100%"} />
        </Box>
      </Box>
      <Box
        sx={{
          width: `${matches ? "50%" : "100%"}`,
          height: "100%",
          display: "flex",
          padding: "50px 30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "600px", width: "100%" }}>
          <Box sx={{ width: "100%", marginBottom: "30px" }}>
            <Typography sx={{ fontSize: "36px", fontWeight: "900" }}>
              Sign in
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: "400" }}>
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
              gap: "20px",
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
                  height: "56px",
                  backgroundColor: `${buttonBg}`,
                  fontSize: "18px",
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

export default SignIn;
