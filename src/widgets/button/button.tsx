import React from "react";
import Button from "@mui/material/Button";

type ButtonWidgetType = {
  variant?: "text" | "contained" | "outlined";
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
};

export const ButtonWidget = (props: ButtonWidgetType) => {
  const { variant, children, onClick, size } = props;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};
