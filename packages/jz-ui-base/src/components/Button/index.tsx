import React from "react";
import { ButtonProps } from "@mui/material";
import { StyledCustomButton } from "./styles";

export const CustomButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledCustomButton {...props}>{props.children}</StyledCustomButton>;
};

export default CustomButton;
