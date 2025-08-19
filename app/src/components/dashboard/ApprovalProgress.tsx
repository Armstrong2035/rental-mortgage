import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
} from "@mui/material";
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
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        mt: 4,
        borderRadius: 3,
        background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: "20px",
            color: "#004D40",
            mb: 1,
          }}
        >
          Approval Progress
        </Typography>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "15px",
            color: "#616161",
          }}
        >
          Track the status of your mortgage application.
        </Typography>
      </Box>

      <Stepper
        activeStep={1}
        alternativeLabel
        sx={{
          "& .MuiStepConnector-line": {
            borderColor: "#B2DFDB",
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: "#26A69A",
          },
          "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
            borderColor: "#004D40",
          },
          "& .MuiStepIcon-root": {
            color: "#E0E0E0", // default circle
            transition: "all 0.3s ease",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#26A69A",
            transform: "scale(1.1)",
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "#004D40",
          },
          "& .MuiStepLabel-label": {
            ...textStyles.regular20,
            fontSize: "14px",
            fontWeight: 600,
            color: "#9e9e9e",
            transition: "color 0.3s ease",
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "#004D40",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: "#004D40",
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
