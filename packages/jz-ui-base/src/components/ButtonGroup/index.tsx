import React from "react";
import { ButtonGroupProps } from "@mui/material";
import { StyledCustomButtonGroup } from "./styles";

export const CustomButtonGroup: React.FC<ButtonGroupProps> = React.forwardRef(
  (props: ButtonGroupProps, ref) => {
    return (
      <StyledCustomButtonGroup ref={ref} {...props}>
        {props.children}
      </StyledCustomButtonGroup>
    );
  }
);

CustomButtonGroup.defaultProps = {
  variant: "contained",
  color: "primary",
  orientation: "horizontal",
};

export default CustomButtonGroup;
