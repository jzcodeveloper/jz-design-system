import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { IconButton, IconButtonProps, alpha } from "@mui/material";
import { markCssImportant, pxToRem } from "../../theme/utils";

export interface CustomIconButtonProps extends IconButtonProps {
  variant?: "text" | "light";
}

const StyledCustomIconButton = styled(IconButton)<CustomIconButtonProps>(
  ({ theme, color = "primary", variant, size, disabled }) => ({
    ...(variant === "light" && {
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette[color].light
          : theme.palette[color].dark,
    }),
    ...(disabled &&
      variant === "light" && {
        backgroundColor:
          theme.palette.mode === "light"
            ? markCssImportant(
                alpha(theme.palette.extraColors?.grey["900"] as string, 0.05)
              )
            : markCssImportant(
                alpha(theme.palette.extraColors?.white[500] as string, 0.05)
              ),
      }),
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette[color].light
          : theme.palette[color].dark,
    },
    "& .MuiSvgIcon-root": {
      ...(size === "large" && { fontSize: pxToRem(24) }),
      ...(size === "medium" && { fontSize: pxToRem(22) }),
      ...(size === "small" && { fontSize: pxToRem(20) }),
    },
  })
) as typeof IconButton;

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
