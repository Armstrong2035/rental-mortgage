import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export type GridOption = {
  label: string;
  value: string;
  imageUrl?: string;
  iconUrl?: string;
  description?: string;
};

type GridSelectProps = {
  options: GridOption[];
  value: string;
  onChange: (val: string) => void;
  multiple?: boolean;
};

export function GridSelect({
  options,
  value,
  onChange,
  multiple = false,
}: GridSelectProps) {
  const handleClick = (val: string) => {
    if (multiple) {
      const selected = new Set(value.split(","));
      selected.has(val) ? selected.delete(val) : selected.add(val);
      onChange(Array.from(selected).join(","));
    } else {
      onChange(val);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      style={{ width: "100%", border: "1px solid blue" }}
    >
      {options.map((opt) => {
        const selected = multiple
          ? value.split(",").includes(opt.value)
          : value === opt.value;

        return (
          <Grid item size={{ sm: 4, lg: 3 }} key={opt.value}>
            <Box
              onClick={() => handleClick(opt.value)}
              style={{
                border: selected ? "2px solid #1976d2" : "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {opt.imageUrl && <img src={opt.imageUrl} alt={opt.label} />}
              <Typography variant="subtitle2">{opt.label}</Typography>
              {opt.description && (
                <Typography variant="caption" color="textSecondary">
                  {opt.description}
                </Typography>
              )}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
