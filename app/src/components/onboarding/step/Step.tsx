import React, { useState } from "react";
import { OnboardingProps } from "../types";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import { RenderEngine } from "../../RenderEngine";

type Props = {
  step: OnboardingProps;
  formData: Record<string, string>;
  onChange: (key: string, value: string) => void;
};

export default function Step({ step, formData, onChange }: Props) {
  console.log(step);
  return (
    <Container
      sx={{
        mt: 10,
        height: "50vh",
        overflowY: "scroll",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari
        },
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight={600}>
          {step.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          {step.description}
        </Typography>
      </Box>

      <Grid container spacing={3} alignItems={"center"} sx={{ width: "100%" }}>
        {step.questions.map((question, index) => {
          // For gridSelect type, use full width, otherwise use responsive sizing
          const gridSize =
            question.type === "gridSelect" ? { xs: 12 } : { sm: 12, md: 6 };

          // Use title if available, otherwise create a fallback key
          const questionKey = question.title || `question-${index}`;

          return (
            <Grid item size={gridSize} key={questionKey}>
              <RenderEngine
                question={question}
                value={formData[questionKey] || ""}
                onChange={(val) => {
                  console.log(
                    "Step - received value:",
                    val,
                    "for key:",
                    questionKey
                  );
                  onChange(questionKey, val);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
