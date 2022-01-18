import { Theme } from "@mui/material";
import { Components } from "@mui/material";
import { baseOverrides } from "../overrides";
import { pxToRem } from "../utils";

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
        padding: "4px 10px",
        fontSize: pxToRem(13),
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: "40%",
      },
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        boxShadow: "none",
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
