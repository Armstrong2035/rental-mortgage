import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

type DropdownProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  helperText?: string;
};

export function Dropdown({
  label,
  options,
  value,
  onChange,
  required = true,
  helperText = "",
}: DropdownProps) {
  const [touched, setTouched] = useState(false);
  const isError = required && touched && value.trim() === "";

  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => setTouched(true)}
      error={isError}
      helperText={isError ? "This field is required" : helperText}
      fullWidth
      variant="outlined"
      sx={{
        marginBottom: "1rem",
        fontFamily: "Plus Jakarta Sans",
        "& .MuiInputBase-input": {
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#00796B",
          },
          "&:hover fieldset": {
            borderColor: "#004D40",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#26A69A",
          },
        },
      }}
    >
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
}
