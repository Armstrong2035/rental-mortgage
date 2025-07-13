"use client";
import React, { useState } from "react";
import { onboardingSteps } from "./onboardingData";
import Step from "./step/Step";
import { Box, Button, Stack, Container } from "@mui/material";
import { LinearProgress } from "@mui/material";

function Onboarding() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const currentStep = onboardingSteps[stepIndex];
  const progress = ((stepIndex + 1) / onboardingSteps.length) * 100;

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (stepIndex < onboardingSteps.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      console.log("✅ Form submitted:", formData);
      // optionally trigger backend call here
    }
  };

  const handleBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          mb: 3,
          backgroundColor: "#e0e0e0", // background of the track
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#005244", // color of the progress bar
          },
        }}
      />
      <Step step={currentStep} formData={formData} onChange={handleChange} />

      <Stack direction="row" justifyContent="space-between" mt={4}>
        <Button
          variant="outlined"
          onClick={handleBack}
          disabled={stepIndex === 0}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            backgroundColor: "#005244",
            "&:hover": {
              backgroundColor: "#003f33", // Optional: darker shade on hover
            },
          }}
        >
          {stepIndex === onboardingSteps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Stack>
    </Container>
  );
}

export default Onboarding;
