import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image"; // Ensure you have next/image installed

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
      if (selected.has(val)) {
        selected.delete(val);
      } else {
        selected.add(val);
      }
      onChange(Array.from(selected).join(","));
    } else {
      onChange(val);
    }
  };

  return (
    <Grid container spacing={5} sx={{}}>
      {options.map((opt) => {
        const selected = multiple
          ? value.split(",").includes(opt.value)
          : value === opt.value;

        return (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={opt.value}>
            <Box
              onClick={() => handleClick(opt.value)}
              sx={{
                border: selected ? "2px solid #26A69A" : "1px solid #ccc",
                borderRadius: "8px",

                textAlign: "center",
                cursor: "pointer",
                width: "100%",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: selected ? "#E0F2F1" : "white",
                color: selected ? "#004D40" : "inherit",
                "&:hover": {
                  backgroundColor: selected ? "#B2DFDB" : "#f5f5f5",
                },
              }}
            >
              {opt.imageUrl && (
                <Image
                  src={opt.imageUrl}
                  alt={opt.label}
                  width={40}
                  height={40}
                  style={{ marginBottom: "8px", objectFit: "contain" }}
                />
              )}
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", fontSize: "0.75rem" }}
              >
                {opt.label}
              </Typography>
              {opt.description && (
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ textAlign: "center", mt: 1 }}
                >
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
