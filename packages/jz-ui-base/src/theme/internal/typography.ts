import { TypographyOptions } from "@mui/material/styles/createTypography";
import { pxToRem } from "../utils";

export const typography: TypographyOptions = {
  fontFamily: `Circular, "Roboto", "Helvetica", "Arial", sans-serif`,
  h1: {
    fontSize: pxToRem(22),
    fontWeight: "bold",
  },
  h2: {
    fontSize: pxToRem(20),
    fontWeight: "bold",
  },
  h3: {
    fontSize: pxToRem(18),
    fontWeight: "bold",
  },
  h4: {
    fontSize: pxToRem(16),
    fontWeight: "bold",
  },
  h5: {
    fontSize: pxToRem(14),
    fontWeight: "bold",
  },
  h6: {
    fontSize: pxToRem(12),
    fontWeight: "bold",
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: pxToRem(12),
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(14),
    fontWeight: "normal",
  },
  body2: {
    fontSize: pxToRem(12),
    fontWeight: "normal",
  },
  button: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    textTransform: "none",
  },
  overline: {
    fontSize: pxToRem(12),
    fontWeight: "normal",
  },
  caption: {
    fontSize: pxToRem(12),
    fontWeight: "normal",
  },
};
