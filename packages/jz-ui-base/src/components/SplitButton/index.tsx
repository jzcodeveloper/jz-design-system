import * as React from "react";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Grow, Paper, Popper, MenuList } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export interface SplitButtonProps {
  value: string;
  variant?: "contained" | "light";
  onChange: (value: any) => void;
}

export const SplitButton: React.FC<SplitButtonProps> = ({
  onChange,
  children,
  variant,
  value,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClick = (value: any) => {
    setOpen(false);
    onChange(value);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        {React.Children.toArray(children)
          .filter((c: any) => c.props.value === value)
          .map((c: any) => (
            <Button
              key={c.props.value}
              onClick={c.props.onClick}
              variant={variant}
            >
              {c.props.children}
            </Button>
          ))}
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          variant={variant}
        >
          <KeyboardArrowDown />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {React.Children.map(children, (child: any) =>
                    React.cloneElement(child, {
                      ...child.props,
                      onClick: () => handleClick(child.props.value),
                    })
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

SplitButton.defaultProps = {
  variant: "contained",
  value: "",
};

export default SplitButton;
