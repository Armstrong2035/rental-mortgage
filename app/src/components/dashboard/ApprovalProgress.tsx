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

  const mobileSteps = ["Received", "Reviewed", "Approved"];

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        mt: { xs: 2, sm: 4 },
        borderRadius: { xs: 2, sm: 3 },
        background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        //  px: { xs: 1, sm: 2 },
        py: { xs: 2, sm: 3 },
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 5 } }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: { xs: "18px", sm: "20px" },
            color: "#004D40",
            mb: 1,
          }}
        >
          Approval Progress
        </Typography>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "13px", sm: "15px" },
            color: "#616161",
            px: { xs: 1, sm: 0 },
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
          // Keep horizontal layout on all screen sizes
          "& .MuiStepIcon-root": {
            color: "#E0E0E0",
            transition: "all 0.3s ease",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#26A69A",
            transform: { xs: "scale(1.05)", sm: "scale(1.1)" },
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "#004D40",
          },
          "& .MuiStepLabel-label": {
            ...textStyles.regular20,
            fontSize: { xs: "10px", sm: "12px" },
            fontWeight: 600,
            color: "#9e9e9e",
            transition: "color 0.3s ease",
            textAlign: "center",
            marginTop: { xs: "4px", sm: "8px" },
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "#004D40",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: "#004D40",
          },
          "& .MuiStepLabel-labelContainer": {
            maxWidth: { xs: "none", sm: "80px" },
          },
          "& .MuiStep-root": {
            paddingLeft: { xs: "2px", sm: "6px" },
            paddingRight: { xs: "2px", sm: "6px" },
          },
          "& .MuiStepConnector-root": {
            display: "block",
          },
        }}
      >
        {(isMobile ? mobileSteps : steps).map((label, index) => (
          <Step key={steps[index]}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}
