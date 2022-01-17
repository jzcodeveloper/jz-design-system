import React from "react";
import { IconButtonProps } from "@mui/material";
import { StyledCustomIconButton } from "./styles";

export interface CustomIconButtonProps extends IconButtonProps {
  variant?: "text" | "light";
}

export const CustomIconButton: React.FC<CustomIconButtonProps> = (
  props: CustomIconButtonProps
) => {
  return (
    <StyledCustomIconButton {...props}>{props.children}</StyledCustomIconButton>
  );
};

CustomIconButton.defaultProps = {
  variant: "text",
  color: "primary",
  size: "medium",
};

export default CustomIconButton;
