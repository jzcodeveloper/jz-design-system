import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import SplitButton from ".";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Split Buttons",
  component: SplitButton,
} as ComponentMeta<typeof SplitButton>;

const sx = { m: 1 };

export const SplitButtons: React.FC = () => {
  const [value, setValue] = useState("0");

  const onChange = (value: string) => setValue(value);

  const onClick = (value: string) => {
    console.log(value);
  };

  return (
    <SplitButton value={value} onChange={onChange} variant="light">
      <MenuItem value="0" onClick={onClick.bind(null, "0")}>
        Split Button 1
      </MenuItem>
      <MenuItem value="1" onClick={onClick.bind(null, "1")}>
        Split Button 2
      </MenuItem>
      <MenuItem value="2" onClick={onClick.bind(null, "2")}>
        Split Button 3
      </MenuItem>
    </SplitButton>
  );
};
