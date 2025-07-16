import React from "react";
import { Box, Stepper, Step, StepLabel, Paper } from "@mui/material";

export default function ApprovalProgress() {
  const steps = [
    "Documents Received",
    "Under Review",
    "Pre-Approved",
    "Final Review",
    "Approved",
  ];
  return (
    <Paper elevation={2} sx={{ width: "100%", mt: 4, py: 5 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <h2>Approval Progress</h2>
        <p>Track the status of your mortgage application.</p>
      </Box>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}
