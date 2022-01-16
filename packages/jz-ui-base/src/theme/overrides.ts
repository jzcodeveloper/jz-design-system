import { Components } from "@mui/material";
import { pxToRem } from "./utils";
import { Theme } from "@mui/material";
import { grey, lime, peach, sky } from "./internal/colors";

export const baseOverrides: (theme: Theme) => Components = (theme: Theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.extraColors?.white[500],
      },
    },
  },
  MuiRadio: {
    // cnahge to theme colors
    styleOverrides: {
      root: {
        color: theme.palette.extraColors?.grey[300],
        "&$checked": {
          color: theme.palette.success.main,
          "&$disabled": {
            color: theme.palette.extraColors?.grey[300],
          },
        },
        "&$disabled": {
          color: theme.palette.extraColors?.grey[300],
          opacity: 0.3,
        },
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
  MuiTab: {
    styleOverrides: {
      root: {
        // Remove undesired default media query
        "@media (min-width:600px)": undefined,
        marginRight: pxToRem(24),
        "&$selected": {
          color: theme.palette.text?.primary,
        },
      },
      textColorInherit: {
        color: theme.palette.text?.secondary,
      },
    },
  },
  MuiTableSortLabel: {
    styleOverrides: {
      icon: {
        "& path": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: undefined,
      },
      root: {
        borderBottom: undefined,
      },
      body: {
        color: undefined,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        color: undefined,
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      root: {
        display: "flex",
        justifyContent: "space-around",
      },
      ul: {
        "& > :first-child > button, & > :last-child > button": {
          border: "2px solid transparent",
        },
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        color: theme.palette.primary.main,
      },
      outlined: {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      page: {
        "&$selected": {
          border: "2px solid transparent",
          backgroundColor: "transparent",
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        "&:hover&:before": {
          borderWidth: "1px",
        },
        "&:after": {
          borderBottom: `1px solid ${theme.palette.info.main}`,
        },
      },
      root: {
        color: theme.palette.primary.main,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "& > fieldset, &$root$focused $notchedOutline": {
          borderWidth: "1px",
          borderColor: theme.palette.info.main,
        },
        "& > fieldset, &$root$error $notchedOutline": {
          zIndex: "1",
          borderColor: theme.palette.error.main,
        },
        "& > fieldset": {
          borderColor: theme.palette.text.disabled,
        },
        "& > fieldset:hover": {
          borderColor: theme.palette.secondary.dark,
        },
      },
      notchedOutline: {
        borderWidth: "1px",
        borderColor: theme.palette.text.disabled,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&$focused": {
          color: theme.palette.info.main,
        },
        "&$error": {
          color: theme.palette.error.main,
        },
      },
    },
  },
  MuiCheckbox: {
    // cnahge to theme colors
    styleOverrides: {
      root: {
        color: theme.palette.extraColors?.grey[300],
        "&$checked": {
          color: theme.palette.success.main,
          "&$disabled": {
            color: theme.palette.extraColors?.grey[300],
          },
        },
        "&$disabled": {
          color: theme.palette.extraColors?.grey[300],
          opacity: 0.3,
        },
      },
      indeterminate: {
        color: theme.palette.success.main,
        "&$disabled": {
          color: theme.palette.extraColors?.grey[300],
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: pxToRem(14),
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        border: `2px solid ${theme.palette.divider}`,
        boxShadow: "none",
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      border: `solid 1px ${grey[100]}`,
      backgroundColor: grey[50],
      root: {
        borderRadius: theme.shape.borderRadius,
        "&$error": {
          borderColor: theme.palette.error.main,
        },
      },
      input: {
        fontSize: pxToRem(16),
        color: theme.palette.text.primary,
      },
      underline: {
        "&:hover&:before": {
          borderWidth: "1px",
        },
        "&:after": {
          borderBottom: `1px solid ${theme.palette.info.main}`,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.grey[800],
        fontWeight: "normal",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(20),
        padding: theme.spacing(0.25, 0.5),
        [`&.MuiTooltip-tooltipPlacementTop,
        &.MuiTooltip-tooltipPlacementRight,
        &.MuiTooltip-tooltipPlacementBottom,
        &.MuiTooltip-tooltipPlacementLeft`]: {
          margin: theme.spacing(0.5, 1),
        },
        borderRadius: "2px",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: "48px",
        height: "32px",
        padding: 0,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 4,
        "&$disabled": {
          color: theme.palette.grey[50],
          "&$checked + $track": {
            backgroundColor: theme.palette.grey.A100,
            opacity: 1,
            border: "none",
          },
          "& + $track": {
            backgroundColor: theme.palette.grey.A100,
            opacity: 1,
            border: "none",
          },
        },
        "&$checked": {
          transform: "translateX(16px)",
          color: theme.palette.extraColors?.white[500],
          "& + $track": {
            backgroundColor: theme.palette.success.main,
            opacity: 1,
            border: "none",
          },
        },
        "&$focusVisible $thumb": {
          color: theme.palette.success.main,
          border: `6px solid ${theme.palette.extraColors?.white[500]}`,
        },
      },
      thumb: {
        width: 24,
        height: 24,
        color: theme.palette.extraColors?.white[500],
      },
      track: {
        borderRadius: "99px",
        backgroundColor: theme.palette.grey.A100,
        opacity: 1,
        "&disabled": {
          backgroundColor: theme.palette.grey.A100,
        },
        transition: theme.transitions.create(["background-color", "border"]),
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      outlined: {
        "&$select": {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      standardSuccess: {
        backgroundColor: lime[300],
      },
      standardInfo: {
        backgroundColor: sky[300],
      },
      standardError: {
        backgroundColor: peach[300],
      },
    },
  },
});
