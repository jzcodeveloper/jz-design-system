import React from "react";
import { Button, ButtonProps } from "@mui/material";

export const CustomButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
