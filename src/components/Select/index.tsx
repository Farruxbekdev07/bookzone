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
  roles: Array<FieldValues>;
  name: string;
  label?: string;
};

function RoleSelect({ control, errors, defaultValue, roles, name, label }: Props) {
  return (
    <Controller
      name={name}
      rules={{ required: true }}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel
            className={errors[field.name] && "Mui-error"}
            id="demo-simple-select-helper-label"
          >
            {label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            {...field}
            defaultValue={defaultValue || ""}
            // displayEmpty
            id="demo-simple-select-helper"
            label={label}
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
              Please select {label}!
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

export default RoleSelect;
