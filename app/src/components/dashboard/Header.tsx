"use client";
import { Box, Typography, Stack, Avatar, Chip } from "@mui/material";
import React from "react";
export default function Header() {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>Subaa</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar />
        <Chip
          label="User's name"
          sx={{ marginLeft: 1 }}
          onClick={() => {
            // Handle profile click
          }}
        />
      </Box>
    </Stack>
  );
}
