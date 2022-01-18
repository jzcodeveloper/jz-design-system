import { ButtonGroup, alpha } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCustomButtonGroup = styled(ButtonGroup)(
  ({ theme, variant, color, orientation }) => ({
    ...(variant === "contained" && {
      ".MuiButtonGroup-grouped:not(:last-of-type)": {
        borderColor: alpha(theme.palette.extraColors.grey[900], 0.15),
      },
    }),
    ...(variant === "light" &&
      color === "primary" &&
      orientation === "vertical" && {
        ".MuiButtonGroup-grouped:not(:last-of-type)": {
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
        },
      }),
    ...(variant === "light" &&
      color === "error" &&
      orientation === "vertical" && {
        ".MuiButtonGroup-grouped:not(:last-of-type)": {
          borderBottom: `1px solid ${alpha(theme.palette.error.main, 0.15)}`,
        },
      }),
    ...(variant === "light" &&
      color === "primary" &&
      orientation === "horizontal" && {
        ".MuiButtonGroup-grouped:not(:last-of-type)": {
          borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
        },
      }),
    ...(variant === "light" &&
      color === "error" &&
      orientation === "horizontal" && {
        ".MuiButtonGroup-grouped:not(:last-of-type)": {
          borderRight: `1px solid ${alpha(theme.palette.error.main, 0.15)}`,
        },
      }),
  })
) as typeof ButtonGroup;
