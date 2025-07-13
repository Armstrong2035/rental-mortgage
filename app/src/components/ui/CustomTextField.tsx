import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  type: "text" | "phone" | "email" | "money" | "number";
  value: string;
  onChange: (val: string) => void;
};

const regexMap: Record<CustomTextFieldProps["type"], RegExp> = {
  text: /.*/,
  phone: /^\+?\d{7,15}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  money: /^\d+(\.\d{1,2})?$/,
  number: /^\d+$/,
};

export function CustomTextField({
  label,
  type,
  value,
  onChange,
}: CustomTextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (regexMap[type].test(val) || val === "") {
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
      style={{ marginBottom: "1rem" }}
    />
  );
}
