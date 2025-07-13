import React from "react";
import { MenuItem, TextField } from "@mui/material";

type DropdownProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
};

export function Dropdown({ label, options, value, onChange }: DropdownProps) {
  console.log(options);
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      variant="outlined"
      style={{ marginBottom: "1rem" }}
    >
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
}
