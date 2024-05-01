import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const AppTheme = (mode: any) => createTheme({});

const theme = responsiveFontSizes(AppTheme("light"));

export default theme;
