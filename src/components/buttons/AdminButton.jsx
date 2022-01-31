import * as React from "react";
import Button from "@mui/material/Button";

export default function AdminButton({ name, size, style, type, disabled, fullWidth }) {
  return (
    <Button
      sx={style}
      variant="contained"
      size={size}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {name}
    </Button>
  );
}
