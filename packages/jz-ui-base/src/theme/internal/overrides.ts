import { alpha, Theme } from "@mui/material";
import { Components } from "@mui/material";
import { baseOverrides } from "../overrides";
import { pxToRem, markCssImportant } from "../utils";

export const overrides: (theme: Theme) => Components = (theme: Theme) => ({
  ...baseOverrides(theme),
  MuiButton: {
    styleOverrides: {
      root: {
        padding: "6px 16px",
        textTransform: "none",
        boxShadow: "none",
        borderRadius: "8px",
        "&:focus": {
          borderRadius: "8px",
        },
        "&:hover": {
          boxShadow: "none",
        },
      },
      sizeSmall: {
        fontSize: pxToRem(13),
      },
    },
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
      {
        props: { variant: "contained", color: "error" },
        style: {
          "&:hover": {
            backgroundColor: theme.palette.error.main,
          },
        },
      },
      {
        props: { variant: "contained", disabled: true },
        style: {
          backgroundColor: markCssImportant(
            theme.palette.extraColors?.grey["A100"]
          ),
          color: markCssImportant(theme.palette.extraColors?.grey["500"]),
        },
      },
      {
        props: { variant: "light", color: "primary" },
        style: {
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
        },
      },
      {
        props: { variant: "light", color: "error" },
        style: {
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
        },
      },
      {
        props: { variant: "light", disabled: true },
        style: {
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
        },
      },
      {
        props: { variant: "text", color: "primary" },
        style: {
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
          },
        },
      },
      {
        props: { variant: "text", color: "error" },
        style: {
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.error.light
                : theme.palette.error.dark,
          },
        },
      },
      {
        props: { variant: "text", disabled: true },
        style: {
          color:
            theme.palette.mode === "light"
              ? markCssImportant(theme.palette.extraColors?.grey["300"])
              : markCssImportant(theme.palette.extraColors?.grey["500"]),
        },
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: "40%",
      },
    },
  },
  MuiTouchRipple: {
    styleOverrides: {
      rippleVisible: {
        animation: "none",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: theme.palette.action.selected,
        },
        "&$selected": {
          backgroundColor: "transparent",
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: theme.palette.background.paper,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: theme.palette.text.primary,
      },
    },
  },
  MuiTab: {
    ...baseOverrides(theme).MuiTab,
    styleOverrides: {
      ...baseOverrides(theme).MuiTab?.styleOverrides,
      root: Object.assign(baseOverrides(theme).MuiTab?.styleOverrides?.root, {
        minWidth: "unset",
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        "@media (min-width:600px)": undefined,
        marginRight: pxToRem(24),
        "&$selected": {
          color: theme.palette.text?.primary,
        },
      }),
      textColorInherit: {
        color: theme.palette.text?.secondary,
      },
    },
  },
});
