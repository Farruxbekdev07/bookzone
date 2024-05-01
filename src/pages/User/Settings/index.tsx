import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import UserHeader from "../components/Header";
import paths from "../../../constants/paths";
import { pxToRem } from "../../../utils";
import { FieldValues, useForm } from "react-hook-form";
import { AccountStyles } from "../Profile/style";

const { PROFILE, SECURITY, SETTINGS } = paths;

const data = [
  {
    value: "My Account",
    index: 1,
    path: PROFILE,
  },
  {
    value: "Security",
    index: 2,
    path: SECURITY,
  },
  {
    value: "Settings",
    index: 3,
    path: SETTINGS,
  },
];

const currencies = [
  {
    value: "English",
  },
  {
    value: "Russian",
  },
  {
    value: "Uzbek",
  },
];

function Settings() {
  const [checked, setChecked] = React.useState(true);
  const matches = useMediaQuery(`(min-width: ${pxToRem(864)})`);

  const { handleSubmit } = useForm();

  const handleFinish = async (data: FieldValues) => {
    console.log(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <AccountStyles>
      <UserHeader data={data} />
      <Box
        className={matches ? "account-container" : "account-container column"}
      >
        <form onSubmit={handleSubmit(handleFinish)}>
          <Typography className="form-title">Settings</Typography>
          <TextField
            id="outlined-select-currency"
            select
            label="Language"
            defaultValue="English"
          >
            {currencies.map(({ value }) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
          <Box>
            <Typography>Theme</Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
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

export default Settings;
