import internalTheme from "./internal";
import { Color } from "@mui/material";
export { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    disabled?: Palette["primary"];

    extraColors?: {
      grey: Partial<Color>;
      blue: Partial<Color>;
      green: Partial<Color>;
      red: Partial<Color>;
      yellow: Partial<Color>;
      white: Partial<Color>;
      orange: Partial<Color>;
    };
  }
  interface PaletteOptions {
    disabled?: PaletteOptions["primary"];

    extraColors?: {
      grey: Partial<Color>;
      blue: Partial<Color>;
      green: Partial<Color>;
      red: Partial<Color>;
      yellow: Partial<Color>;
      white: Partial<Color>;
      orange: Partial<Color>;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    text: true;
    light: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides {
    light: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    disabled: true;
  }
}

export { internalTheme as defaultTheme };
export { internalTheme };
export { internalDarkTheme } from "./internal";
