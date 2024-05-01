import React from "react";
import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

type Props = {
  control: Control<FieldValues, any>;
  defaultValue?: string;
  errors: FieldErrors<FieldValues>;
};
const roles = [
  { role: "author", value: "Author" },
  { role: "reader", value: "Reader" },
];

function RoleSelect({ control, errors, defaultValue }: Props) {
  return (
    <Controller
      name="role"
      rules={{ required: true }}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel
            className={errors[field.name] && "Mui-error"}
            id="demo-simple-select-helper-label"
          >
            Role
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            {...field}
            defaultValue={defaultValue || ""}
            displayEmpty
            id="demo-simple-select-helper"
            label={"Role"}
            error={!!errors[field.name]}
          >
            {roles?.map(({ role, value }, i) => (
              <MenuItem key={i} value={role}>
                {value}
              </MenuItem>
            ))}
          </Select>
          {errors[field.name] && (
            <FormHelperText className="Mui-error">
              Please select role!
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

export default RoleSelect;
