import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";

type CustomCheckboxProps = {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
  required?: boolean;
  helperText?: string;
};

export function CustomCheckbox({
  label,
  value,
  onChange,
  required = true,
  helperText = "",
}: CustomCheckboxProps) {
  const [touched, setTouched] = useState(false);

  const isError = required && touched && !value;

  return (
    <div
      style={{
        marginBottom: "1rem",
        fontFamily: "Plus Jakarta Sans",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            onBlur={() => setTouched(true)}
            sx={{
              color: "#00796B",
              "&.Mui-checked": {
                color: "#26A69A",
              },
              "&:hover": {
                color: "#004D40",
              },
            }}
          />
        }
        label={label}
        sx={{
          "& .MuiFormControlLabel-label": {
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 500,
            color: "#000000 !important", // ✅ force black label
          },
        }}
      />
      {(isError || helperText) && (
        <FormHelperText
          sx={{
            marginLeft: "0.5rem",
            color: isError ? "#d32f2f" : "#777777",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          {isError ? "This field is required" : helperText}
        </FormHelperText>
      )}
    </div>
  );
}
