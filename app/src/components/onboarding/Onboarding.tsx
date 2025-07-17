"use client";
import React, { useState, useEffect } from "react";
import { onboardingSteps } from "./onboardingData";
import Step from "./step/Step";
import { Button, Stack, Container, LinearProgress } from "@mui/material";

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

      localStorage.setItem(
        "onboarding_final_submission",
        JSON.stringify(finalData)
      );

      console.log("✅ Form submitted:", finalData);
      console.log("✅ Saved to localStorage as 'onboarding_final_submission'");
    }
  };

  const handleBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  // const clearLocalStorage = () => {
  //   localStorage.removeItem("onboarding_form_data");
  //   localStorage.removeItem("onboarding_final_submission");
  //   setFormData({});
  //   setStepIndex(0);
  //   console.log("Cleared localStorage and reset form");
  // };

  // ✅ Step validation logic
  // ✅ Step validation logic without required flag
  const isStepValid = currentStep.questions.every((question, index) => {
    const key = question.title || `question-${index}`;
    return formData[key] && formData[key].trim() !== "";
  });

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          mb: 3,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#005244",
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
          disabled={!isStepValid}
          sx={{
            backgroundColor: "#005244",
            "&:hover": {
              backgroundColor: "#003f33",
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
