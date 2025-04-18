import React from "react";
import { StyledInput } from "./style";

interface IInputProps {
  children?: string | JSX.Element | JSX.Element[];
  variant: "contained" | "outlined" | undefined;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}

export default function InputComponent({
  children,
  type,
  variant,
  className,
  isDisabled,
  onClick,
}: IInputProps) {
  return <StyledInput></StyledInput>;
}
