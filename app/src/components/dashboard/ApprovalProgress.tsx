import React from "react";
import { Box, Stepper, Step, StepLabel, Paper } from "@mui/material";
import { textStyles } from "@/app/style";

/**
 * ApprovalProgress component displays the mortgage application approval progress.
 * It uses a Stepper to show the current status of the application.
 */

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

      <Stepper
        activeStep={1}
        alternativeLabel
        sx={{
          "& .MuiStepLabel-root .Mui-completed": {
            color: "#004D40", // color for completed step
          },
          "& .MuiStepLabel-label.Mui-completed": {
            ...textStyles.regular20,
            fontSize: "14px",
            color: "#004D40",
            fontWeight: 600,
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: "#004D40", // color for active step
          },
          "& .MuiStepLabel-label.Mui-active": {
            ...textStyles.regular20,
            fontSize: "14px",
            color: "#004D40",
            fontWeight: 600,
          },
          "& .MuiStepLabel-label": {
            ...textStyles.regular20,
            fontSize: "14px",
            fontWeight: 600,
            color: "#9e9e9e", // default color
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}
