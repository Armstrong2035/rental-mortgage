import React, { useState } from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  type: "text" | "phone" | "email" | "money" | "number";
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  helperText?: string;
};

const regexMap: Record<CustomTextFieldProps["type"], RegExp> = {
  text: /.*/,
  phone: /^[+]?[\d\s\-()]*$/,
  email: /^[^\s@]*@?[^\s@]*\.?[^\s@]*$/,
  money: /^\d*\.?\d{0,2}$/,
  number: /^\d*$/,
};

export function CustomTextField({
  label,
  type,
  value,
  onChange,
  required = true,
  helperText = "",
}: CustomTextFieldProps) {
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "" || regexMap[type].test(val)) {
      onChange(val);
    }
  };

  const isError = required && touched && value.trim() === "";

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={() => setTouched(true)} // only set touched after user leaves the field
      required={required}
      error={isError}
      helperText={isError ? "This field is required" : helperText}
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
      sx={{
        marginBottom: "1rem",
        fontFamily: "Plus Jakarta Sans",
        "& input": {
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
        },
        "& input::placeholder": {
          color: "#999999",
          opacity: 1,
        },
        "& .MuiOutlinedInput-root.Mui-focused input::placeholder": {
          color: "#666666",
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
        "& .MuiInputLabel-root": {
          color: "#777777",
          fontFamily: "Plus Jakarta Sans",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#26A69A",
        },
      }}
    />
  );
}
