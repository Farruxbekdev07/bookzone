import React from "react";
import { Button } from "@mui/material";
import { StyledButton } from "./style";

interface IButtonProps {
  children?: string | JSX.Element | JSX.Element[] | any;
  variant: "contained" | "outlined" | undefined;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}

export default function ButtonComponent({
  children,
  className,
  isDisabled,
  onClick,
  variant,
  type,
}: IButtonProps) {
  return (
    <StyledButton>
      <Button
        disabled={isDisabled}
        variant={variant}
        fullWidth
        type={type}
        className={`button ${className} ${variant === "contained" ? "button-background" : ""}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </StyledButton>
  );
}
