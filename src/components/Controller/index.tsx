import React from "react";
import { FormControl, TextField } from "@mui/material";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

interface IControllerProps {
  name?: string | any;
  control?: Control<FieldValues, any>;
  errors?: FieldErrors | any;
  errorText?: string;
  required?: boolean;
  type?: string;
  label?: string;
  className?: string;
  onChange?: (() => void) | any;
  ref?: string | any;
}

export default function ControllerComponent({
  control,
  errors = [],
  name = "",
  errorText = "",
  required = false,
  type = "text",
  label = "",
  className = "",
  onChange,
  ref,
}: IControllerProps) {
  return (
    <Controller
      name={name || ""}
      rules={{
        required: required,
      }}
      control={control}
      render={({ field }) => {
        return (
          <FormControl fullWidth>
            <TextField
              type={type}
              label={label}
              {...field}
              error={!!errors[field.name]}
              helperText={!!errors[field.name] && errorText}
              className={className}
            />
          </FormControl>
        );
      }}
    />
  );
}
