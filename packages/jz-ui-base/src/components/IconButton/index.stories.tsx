import React from "react";
import { ComponentMeta } from "@storybook/react";
import IconButton from ".";
import { Box } from "@mui/system";
import { ArrowForward, ChevronRight } from "@mui/icons-material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Icon Buttons",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const sx = { m: 1 };

export const IconButtons: React.FC = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="primary" size="large">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton
              sx={sx}
              variant="text"
              color="primary"
              size="large"
              disabled
            >
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="primary" size="large">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton
              sx={sx}
              variant="light"
              color="primary"
              size="large"
              disabled
            >
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="error" size="large">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton
              sx={sx}
              variant="text"
              color="error"
              size="large"
              disabled
            >
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="error" size="large">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton
              sx={sx}
              variant="light"
              color="error"
              size="large"
              disabled
            >
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="primary">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton sx={sx} variant="text" color="primary" disabled>
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="primary">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton sx={sx} variant="light" color="primary" disabled>
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="error">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton sx={sx} variant="text" color="error" disabled>
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="error">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton sx={sx} variant="light" color="error" disabled>
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="disabled">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton sx={sx} variant="text" color="disabled" disabled>
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="disabled">
              <ArrowForward></ArrowForward>
            </IconButton>

            <IconButton sx={sx} variant="light" color="disabled" disabled>
              <ArrowForward></ArrowForward>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box sx={sx}></Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="primary" size="small">
              <ChevronRight></ChevronRight>
            </IconButton>

            <IconButton
              sx={sx}
              variant="text"
              color="primary"
              size="small"
              disabled
            >
              <ChevronRight></ChevronRight>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="primary" size="small">
              <ChevronRight></ChevronRight>
            </IconButton>

            <IconButton
              sx={sx}
              variant="light"
              color="primary"
              size="small"
              disabled
            >
              <ChevronRight></ChevronRight>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="error" size="small">
              <ChevronRight></ChevronRight>
            </IconButton>

            <IconButton
              sx={sx}
              variant="text"
              color="error"
              size="small"
              disabled
            >
              <ChevronRight></ChevronRight>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="error" size="small">
              <ChevronRight></ChevronRight>
            </IconButton>

            <IconButton
              sx={sx}
              variant="light"
              color="error"
              size="small"
              disabled
            >
              <ChevronRight></ChevronRight>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="text" color="disabled" size="small">
              <ChevronRight></ChevronRight>
            </IconButton>

            <IconButton
              sx={sx}
              variant="text"
              color="disabled"
              size="small"
              disabled
            >
              <ChevronRight></ChevronRight>
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton sx={sx} variant="light" color="disabled" size="small">
              <ChevronRight></ChevronRight>
            </IconButton>

            <IconButton
              sx={sx}
              variant="light"
              color="disabled"
              size="small"
              disabled
            >
              <ChevronRight></ChevronRight>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
