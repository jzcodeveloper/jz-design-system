import { createTheme, ThemeOptions } from "@mui/material";
import { typography } from "./typography";
import { overrides } from "./overrides";
import { paletteLight, paletteDark } from "./palette";

const baseInternalTheme: ThemeOptions = {
  typography,
};

const baseLightTheme = createTheme({
  ...baseInternalTheme,
  palette: paletteLight,
});

const baseDarkTheme = createTheme({
  ...baseInternalTheme,
  palette: paletteDark,
});

export const internalTheme = createTheme(
  {
    components: overrides(baseLightTheme),
  },
  baseLightTheme
);

export const internalDarkTheme = createTheme(
  {
    components: overrides(baseDarkTheme),
  },
  baseDarkTheme
);

export default internalTheme;
