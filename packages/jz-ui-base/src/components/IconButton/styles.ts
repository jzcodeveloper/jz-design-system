import { styled } from "@mui/system";
import { IconButton, alpha } from "@mui/material";
import { CustomIconButtonProps } from "./";
import { markCssImportant, pxToRem } from "./../../theme/utils";

export const StyledCustomIconButton = styled(IconButton)<CustomIconButtonProps>(
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
