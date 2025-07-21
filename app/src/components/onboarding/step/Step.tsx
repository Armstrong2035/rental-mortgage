import React from "react";
import { OnboardingProps } from "../types";
import { Box, Typography, Container, Grid } from "@mui/material";
import { RenderEngine } from "../../RenderEngine";
import { textStyles } from "../../../app/style.js"; // Adjust the import path as needed

type Props = {
  step: OnboardingProps;
  formData: Record<string, { title: string; value: string }>;
  onChange: (key: string, title: string, value: string) => void;
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
      <Box sx={{ mb: 4 }}>
        <Typography
          textAlign={"center"}
          sx={{ ...textStyles.headingXL, color: "black" }}
        >
          {step.title}
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{ ...textStyles.regular20, fontSize: "14", color: "black" }}
        >
          {step.description}
        </Typography>
      </Box>

      <Grid container spacing={3} alignItems={"center"} sx={{ width: "100%" }}>
        {step.questions.map((question, index) => {
          // For gridSelect type, use full width, otherwise use responsive sizing
          const gridSize =
            question.type === "gridSelect" ? { xs: 12 } : { sm: 12, md: 6 };

          const questionKey = question.key;

          return (
            <Grid size={gridSize} key={questionKey}>
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
                  onChange(questionKey, val, question.title);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
