import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  type: "text" | "phone" | "email" | "money" | "number";
  value: string;
  onChange: (val: string) => void;
};

// Updated regex patterns that allow partial input during typing
const regexMap: Record<CustomTextFieldProps["type"], RegExp> = {
  text: /.*/,
  phone: /^[+]?[\d\s\-()]*$/, // Allow digits, spaces, hyphens, parentheses, and optional +
  email: /^[^\s@]*@?[^\s@]*\.?[^\s@]*$/, // Allow partial email input
  money: /^\d*\.?\d{0,2}$/, // Allow partial money input (digits with optional decimal and up to 2 decimal places)
  number: /^\d*$/, // Allow partial number input (just digits)
};

export function CustomTextField({
  label,
  type,
  value,
  onChange,
}: CustomTextFieldProps) {
  // In CustomTextField
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    console.log("CustomTextField - received value:", val);
    if (val === "" || regexMap[type].test(val)) {
      console.log("CustomTextField - calling onChange with:", val);
      onChange(val);
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      fullWidth
      variant="outlined"
      type={
        type === "money"
          ? "text"
          : type === "phone"
          ? "tel"
          : type === "email"
          ? "email"
          : "text"
      }
      sx={{ marginBottom: "1rem" }}
    />
  );
}
