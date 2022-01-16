// @ts-ignore
import { withThemes } from "storybook-addon-themes/react";
import { internalDarkTheme, internalTheme } from "../src/theme";
import ThemeDecorator from "./decorators/theme-decorator";

export const decorators = [withThemes];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: "Internal",
    list: [
      {
        name: "Internal",
        theme: internalTheme,
        color: internalTheme.palette.primary.main,
      },
      {
        name: "Internal Dark",
        theme: internalDarkTheme,
        color: internalDarkTheme.palette.background.paper,
      },
    ],
    Decorator: ThemeDecorator,
  },
};
