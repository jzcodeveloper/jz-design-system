import React from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { ComponentMeta } from "@storybook/react";
import Button from ".";
import { Box } from "@mui/system";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const sx = { m: 1 };

export const Contained: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button sx={sx} variant="contained" color="primary">
            Action
          </Button>

          <Button sx={sx} variant="contained" color="primary" disabled>
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="contained"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="contained"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button sx={sx} variant="contained" color="error">
            Action
          </Button>

          <Button sx={sx} variant="contained" color="error" disabled>
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="contained"
            color="error"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="contained"
            color="error"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="contained"
            color="error"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="contained"
            color="error"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Light: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button sx={sx} variant="light" color="primary">
            Action
          </Button>

          <Button sx={sx} variant="light" color="primary" disabled>
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="light"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="light"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="light"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="light"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button sx={sx} variant="light" color="error">
          Action
        </Button>

        <Button sx={sx} variant="light" color="error" disabled>
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={sx}
          variant="light"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
        >
          Action
        </Button>

        <Button
          sx={sx}
          variant="light"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
          disabled
        >
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={sx}
          variant="light"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
        >
          Action
        </Button>

        <Button
          sx={sx}
          variant="light"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
          disabled
        >
          Action
        </Button>
      </Box>
    </Box>
  );
};

export const Text: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button sx={sx} variant="text" color="primary">
            Action
          </Button>

          <Button sx={sx} variant="text" color="primary" disabled>
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="text"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="text"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            sx={sx}
            variant="text"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            sx={sx}
            variant="text"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button sx={sx} variant="text" color="error">
          Action
        </Button>

        <Button sx={sx} variant="text" color="error" disabled>
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={sx}
          variant="text"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
        >
          Action
        </Button>

        <Button
          sx={sx}
          variant="text"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
          disabled
        >
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={sx}
          variant="text"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
        >
          Action
        </Button>

        <Button
          sx={sx}
          variant="text"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
          disabled
        >
          Action
        </Button>
      </Box>
    </Box>
  );
};

export const ContainedSmall: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button size="small" sx={sx} variant="contained" color="primary">
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="primary"
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button size="small" sx={sx} variant="contained" color="error">
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="error"
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="error"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="error"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="error"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="contained"
            color="error"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const LightSmall: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button size="small" sx={sx} variant="light" color="primary">
            Action
          </Button>

          <Button size="small" sx={sx} variant="light" color="primary" disabled>
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="light"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="light"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="light"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="light"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button size="small" sx={sx} variant="light" color="error">
          Action
        </Button>

        <Button size="small" sx={sx} variant="light" color="error" disabled>
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          size="small"
          sx={sx}
          variant="light"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
        >
          Action
        </Button>

        <Button
          size="small"
          sx={sx}
          variant="light"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
          disabled
        >
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          size="small"
          sx={sx}
          variant="light"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
        >
          Action
        </Button>

        <Button
          size="small"
          sx={sx}
          variant="light"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
          disabled
        >
          Action
        </Button>
      </Box>
    </Box>
  );
};

export const TextSmall: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button size="small" sx={sx} variant="text" color="primary">
            Action
          </Button>

          <Button size="small" sx={sx} variant="text" color="primary" disabled>
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="text"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="text"
            color="primary"
            startIcon={<ArrowBack></ArrowBack>}
            disabled
          >
            Action
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={sx}
            variant="text"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
          >
            Action
          </Button>

          <Button
            size="small"
            sx={sx}
            variant="text"
            color="primary"
            endIcon={<ArrowForward></ArrowForward>}
            disabled
          >
            Action
          </Button>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button size="small" sx={sx} variant="text" color="error">
          Action
        </Button>

        <Button size="small" sx={sx} variant="text" color="error" disabled>
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          size="small"
          sx={sx}
          variant="text"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
        >
          Action
        </Button>

        <Button
          size="small"
          sx={sx}
          variant="text"
          color="error"
          startIcon={<ArrowBack></ArrowBack>}
          disabled
        >
          Action
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          size="small"
          sx={sx}
          variant="text"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
        >
          Action
        </Button>

        <Button
          size="small"
          sx={sx}
          variant="text"
          color="error"
          endIcon={<ArrowForward></ArrowForward>}
          disabled
        >
          Action
        </Button>
      </Box>
    </Box>
  );
};
