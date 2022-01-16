import { alpha } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import {
  blue,
  red,
  white,
  green,
  grey,
  yellow,
  orange,
  sky,
  straw,
  peach,
  positiveGreen,
  lime,
  infoBlue,
  negativeRed,
} from "./colors";

const paletteBaseLight: Object = {
  primary: {
    // dark: blue[50],
    main: green[700] as string,
    light: alpha(green[700] as string, 0.1),
  },
  error: {
    main: negativeRed[900] as string,
    light: alpha(negativeRed[900] as string, 0.1),
    20: alpha(negativeRed[900] as string, 0.2),
    15: alpha(negativeRed[900] as string, 0.15),
    10: alpha(negativeRed[900] as string, 0.1),
    7: alpha(negativeRed[900] as string, 0.07),
    5: alpha(negativeRed[900] as string, 0.05),
  },
  success: {
    main: positiveGreen[900] as string,
    20: alpha(positiveGreen[900] as string, 0.2),
    15: alpha(positiveGreen[900] as string, 0.15),
    10: alpha(positiveGreen[900] as string, 0.1),
    7: alpha(positiveGreen[900] as string, 0.07),
    5: alpha(positiveGreen[900] as string, 0.05),
  },
  info: {
    main: infoBlue[900] as string,
    20: alpha(infoBlue[900] as string, 0.2),
    15: alpha(infoBlue[900] as string, 0.15),
    10: alpha(infoBlue[900] as string, 0.1),
    7: alpha(infoBlue[900] as string, 0.07),
    5: alpha(infoBlue[900] as string, 0.05),
  },
  secondary: {
    sky: sky[900] as string,
    sky40: sky[400] as string,
    sky30: sky[300] as string,
    sky20: sky[200] as string,
    straw: straw[900] as string,
    straw40: straw[400] as string,
    straw30: straw[300] as string,
    straw20: straw[200] as string,
    peach: peach[900] as string,
    peach40: peach[400] as string,
    peach30: peach[300] as string,
    peach20: peach[200] as string,
    main: lime[900] as string,
    light: "",
    40: lime[400] as string,
    30: lime[300] as string,
    20: lime[200] as string,
  },
  disabled: {
    main: grey[800],
    light: alpha(grey[900] as string, 0.05),
  },
  greytones: {
    title: grey[900],
    textDefault: grey[800],
    textLight: grey[500],
    graphicsDark: grey[300],
    graphicsLight: grey[100],
    background: grey[50],
  },
  extraColors: {
    grey,
    blue,
    green,
    red,
    yellow,
    white,
    orange,
  },
};

const paletteBaseDark: Object = {
  primary: {
    // dark: blue[50],
    // light: alpha(blue[500] as string, 0.1),
    main: green[600] as string,
    dark: alpha(green[600] as string, 0.15),
  },
  error: {
    main: negativeRed[600] as string,
    dark: alpha(negativeRed[600] as string, 0.15),
    20: alpha(negativeRed[700] as string, 0.2),
    15: alpha(negativeRed[700] as string, 0.15),
    10: alpha(negativeRed[700] as string, 0.1),
    7: alpha(negativeRed[700] as string, 0.07),
    5: alpha(negativeRed[700] as string, 0.05),
  },
  success: {
    main: positiveGreen[700] as string,
    light: positiveGreen[600] as string,
    20: alpha(positiveGreen[700] as string, 0.2),
    15: alpha(positiveGreen[700] as string, 0.15),
    10: alpha(positiveGreen[700] as string, 0.1),
    7: alpha(positiveGreen[700] as string, 0.07),
    5: alpha(positiveGreen[700] as string, 0.05),
  },
  info: {
    main: infoBlue[700] as string,
    light: infoBlue[600] as string,
    20: alpha(infoBlue[700] as string, 0.2),
    15: alpha(infoBlue[700] as string, 0.15),
    10: alpha(infoBlue[700] as string, 0.1),
    7: alpha(infoBlue[700] as string, 0.07),
    5: alpha(infoBlue[700] as string, 0.05),
  },
  secondary: {
    sky: sky[900] as string,
    sky40: sky[400] as string,
    sky30: sky[300] as string,
    sky20: sky[200] as string,
    straw: straw[900] as string,
    straw40: straw[400] as string,
    straw30: straw[300] as string,
    straw20: straw[200] as string,
    peach: peach[900] as string,
    peach40: peach[400] as string,
    peach30: peach[300] as string,
    peach20: peach[200] as string,
    main: lime[900] as string,
    40: lime[400] as string,
    30: lime[300] as string,
    20: lime[200] as string,
  },
  disabled: {
    main: grey["A100"],
    dark: alpha(white[500] as string, 0.15),
  },
  greytones: {
    title: grey[900],
    textDefault: grey[800],
    textLight: grey[500],
    graphicsDark: grey[300],
    graphicsLight: grey[100],
    background: grey[50],
  },
  extraColors: {
    grey,
    blue,
    green,
    red,
    yellow,
    white,
    orange,
  },
};

export const paletteLight: PaletteOptions = {
  ...paletteBaseLight,
  mode: "light",
  text: {
    primary: grey[800],
    secondary: grey[500],
    disabled: grey[300],
  },
  action: {
    selected: blue[50],
  },
  divider: grey[300],
};

export const paletteDark: PaletteOptions = {
  ...paletteBaseDark,
  mode: "dark",
  text: {
    primary: grey[800],
    secondary: grey[500],
    disabled: grey[300],
  },
  action: {
    selected: blue[50],
  },
  divider: grey[300],
  background: {
    paper: grey[900],
    default: grey[800],
  },
};
