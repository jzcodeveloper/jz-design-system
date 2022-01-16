import React from "react";
import { Theme } from "@mui/material/styles";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";

const ThemeDecorator: React.FC<{ theme: { theme: Theme } }> = ({
  children,
  theme: { theme },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="background.paper" padding={2}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
