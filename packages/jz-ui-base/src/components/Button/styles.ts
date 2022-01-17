import { Button, alpha } from "@mui/material";
import { styled } from "@mui/system";
import { markCssImportant } from "../../theme/utils";

export const StyledCustomButton = styled(Button)(
  ({ theme, color = "primary", variant, disabled }) => ({
    ...(variant === "contained" &&
      color === "primary" && {
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
      }),
    ...(variant === "contained" &&
      color === "error" && {
        "&:hover": {
          backgroundColor: theme.palette.error.main,
        },
      }),
    ...(variant === "contained" &&
      disabled && {
        backgroundColor: markCssImportant(
          theme.palette.extraColors?.grey["A100"]
        ),
        color: markCssImportant(theme.palette.extraColors?.grey["500"]),
      }),
    ...(variant === "light" &&
      color === "primary" && {
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
        },
      }),
    ...(variant === "light" &&
      color === "error" && {
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.error.light
            : theme.palette.error.dark,
        color: theme.palette.error.main,
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.error.light
              : theme.palette.error.dark,
        },
      }),
    ...(variant === "light" &&
      disabled && {
        backgroundColor:
          theme.palette.mode === "light"
            ? markCssImportant(
                alpha(theme.palette.extraColors?.grey["900"] as string, 0.05)
              )
            : markCssImportant(
                alpha(theme.palette.extraColors?.white[500] as string, 0.05)
              ),
        color:
          theme.palette.mode === "light"
            ? markCssImportant(theme.palette.extraColors?.grey["300"])
            : markCssImportant(theme.palette.extraColors?.grey["500"]),
      }),
    ...(variant === "text" &&
      color === "primary" && {
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
        },
      }),
    ...(variant === "text" &&
      color === "error" && {
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.error.light
              : theme.palette.error.dark,
        },
      }),
    ...(variant === "text" &&
      disabled && {
        "&:hover": {
          color:
            theme.palette.mode === "light"
              ? markCssImportant(theme.palette.extraColors?.grey["300"])
              : markCssImportant(theme.palette.extraColors?.grey["500"]),
        },
      }),
  })
) as typeof Button;
