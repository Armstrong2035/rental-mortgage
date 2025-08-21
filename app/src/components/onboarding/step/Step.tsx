import React from "react";
import { OnboardingProps } from "../types";
import { Box, Typography, Container, Grid } from "@mui/material";
import { RenderEngine } from "../../RenderEngine";
import { textStyles } from "../../../app/style.js";

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
        height: "70%",
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

      <Grid
        container
        spacing={3}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "100%" }}
      >
        {step.questions.map((question) => {
          // For gridSelect type, use full width, otherwise use responsive sizing
          const gridSize =
            question.type === "gridSelect" ? { xs: 12 } : { sm: 12, md: 12 };

          const questionKey = question.key;

          return (
            <Grid size={gridSize} key={questionKey} sx={{ width: "100%" }}>
              <RenderEngine
                question={question}
                value={formData[questionKey]?.value || ""}
                onChange={(val) => {
                  onChange(questionKey, val, question.title!); // ✅ send key, title, value
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
