import React from "react";
import { Box, Typography, Divider, Stack, Paper } from "@mui/material";

export default function MortgagePlan() {
  const planDetailsArray = [
    { key: "Mortgage Duration", value: "1 year" },
    { key: "Total Payment", value: "AED 110,000" },
    { key: "Interest Rate", value: "3.5%" },
  ];
  return (
    <Paper
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Typography>Mortgage Plan</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <Typography>AED 10,000</Typography>
        <Typography>Monthly</Typography>
      </Box>

      <Divider />

      <Stack justifyContent={"space-between"}>
        {planDetailsArray.map((details, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 1,
            }}
          >
            <Typography key={index}>{details.key}</Typography>
            <Typography key={index}>{details.value}</Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
