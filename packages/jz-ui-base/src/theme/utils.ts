export const pxToRem = (px: number): string => `${px / 16}rem`;

export const markCssImportant = (s: string | undefined): string =>
  s ? `${s}!important` : "";
