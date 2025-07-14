"use client";
import React, { useState, useEffect } from "react";
import { onboardingSteps } from "./onboardingData";
import Step from "./step/Step";
import { Button, Stack, Container, Box } from "@mui/material";
import { LinearProgress } from "@mui/material";

function Onboarding() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const currentStep = onboardingSteps[stepIndex];
  const progress = ((stepIndex + 1) / onboardingSteps.length) * 100;

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("onboarding_form_data");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        console.log("Loaded form data from localStorage:", parsedData);
      } catch (error) {
        console.error("Error parsing saved form data:", error);
      }
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem("onboarding_form_data", JSON.stringify(formData));
      console.log("Saved form data to localStorage:", formData);
    }
  }, [formData]);

  const handleChange = (key: string, value: string) => {
    console.log("Onboarding - received:", key, value);
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (stepIndex < onboardingSteps.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      // Final submission
      const finalData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        completedSteps: onboardingSteps.length,
      };

      // Save final data to localStorage
      localStorage.setItem(
        "onboarding_final_submission",
        JSON.stringify(finalData)
      );

      console.log("✅ Form submitted:", finalData);
      console.log("✅ Saved to localStorage as 'onboarding_final_submission'");

      // Optional: Clear the progress data since form is completed
      // localStorage.removeItem('onboarding_form_data');

      // You can add your backend call here
      // await submitToBackend(finalData);
    }
  };

  const handleBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  // Optional: Clear localStorage function (for testing)
  const clearLocalStorage = () => {
    localStorage.removeItem("onboarding_form_data");
    localStorage.removeItem("onboarding_final_submission");
    setFormData({});
    setStepIndex(0);
    console.log("Cleared localStorage and reset form");
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

      {/* Debug info - remove this in production */}
      {process.env.NODE_ENV === "development" && (
        <Box
          sx={{
            mb: 2,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 1,
            fontSize: "0.8rem",
          }}
        >
          <strong>Debug Info:</strong>
          <br />
          Current Step: {stepIndex + 1} of {onboardingSteps.length}
          <br />
          Form Data Keys: {Object.keys(formData).length}
          <br />
          <Button size="small" onClick={clearLocalStorage} sx={{ mt: 1 }}>
            Clear localStorage (Debug)
          </Button>
        </Box>
      )}

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
