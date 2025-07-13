import React, { useState } from "react";
import { OnboardingProps } from "../types";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import { RenderEngine } from "../../RenderEngine";

type Props = {
  step: OnboardingProps;
  formData: Record<string, string>;
  onChange: (key: string, value: string) => void;
};

export default function Step({ step }: Props) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (title: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

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

      <Grid
        container
        spacing={3}
        alignItems={"center"}
        // justifyContent={"center"}
        sx={{ width: "100%", border: "1px solid red" }}
      >
        {step.questions.map((question, index) => (
          <Grid item size={{ sm: 12, md: 6 }}>
            <RenderEngine
              key={index}
              question={question}
              value={formData[question.title] || ""}
              onChange={(val) => onChange(question.title, val)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
