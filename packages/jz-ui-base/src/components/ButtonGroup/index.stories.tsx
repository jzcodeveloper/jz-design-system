import React from "react";
import { ComponentMeta } from "@storybook/react";
import ButtonGroup from ".";
import { Box } from "@mui/system";
import { Button } from "../..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button Groups",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const sx = { m: 1 };

export const Vertical: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <ButtonGroup orientation="vertical">
          <Button variant="contained" color="primary">
            Action
          </Button>
          <Button variant="contained" color="primary">
            Action
          </Button>
          <Button variant="contained" color="primary">
            Action
          </Button>
        </ButtonGroup>

        <Box sx={sx}></Box>

        <ButtonGroup orientation="vertical">
          <Button variant="contained" color="error">
            Action
          </Button>
          <Button variant="contained" color="error">
            Action
          </Button>
          <Button variant="contained" color="error">
            Action
          </Button>
        </ButtonGroup>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex" }}>
        <ButtonGroup orientation="vertical">
          <Button variant="light" color="primary" size="small">
            Action
          </Button>
          <Button variant="light" color="primary" size="small">
            Action
          </Button>
          <Button variant="light" color="primary" size="small">
            Action
          </Button>
        </ButtonGroup>

        <Box sx={sx}></Box>

        <ButtonGroup orientation="vertical">
          <Button variant="light" color="error" size="small">
            Action
          </Button>
          <Button variant="light" color="error" size="small">
            Action
          </Button>
          <Button variant="light" color="error" size="small">
            Action
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export const Horizontal: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ButtonGroup orientation="horizontal">
          <Button variant="contained" color="primary">
            Action
          </Button>
          <Button variant="contained" color="primary">
            Action
          </Button>
          <Button variant="contained" color="primary">
            Action
          </Button>
        </ButtonGroup>

        <Box sx={sx}></Box>

        <ButtonGroup orientation="horizontal">
          <Button variant="contained" color="error">
            Action
          </Button>
          <Button variant="contained" color="error">
            Action
          </Button>
          <Button variant="contained" color="error">
            Action
          </Button>
        </ButtonGroup>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ButtonGroup orientation="horizontal">
          <Button variant="light" color="primary" size="small">
            Action
          </Button>
          <Button variant="light" color="primary" size="small">
            Action
          </Button>
          <Button variant="light" color="primary" size="small">
            Action
          </Button>
        </ButtonGroup>

        <Box sx={sx}></Box>

        <ButtonGroup orientation="horizontal">
          <Button variant="light" color="error" size="small">
            Action
          </Button>
          <Button variant="light" color="error" size="small">
            Action
          </Button>
          <Button variant="light" color="error" size="small">
            Action
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
