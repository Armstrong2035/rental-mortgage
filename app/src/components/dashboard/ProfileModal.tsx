"use client";

import React from "react";
import { Box, Grid, Typography, Avatar, Stack, Container } from "@mui/material";
import { RenderEngine } from "../RenderEngine";
import { profileQuestions } from "./profileData";
import { OnboardingFormData } from "./Header";

export default function ProfileForm({
  data,
}: {
  data: OnboardingFormData | null;
}) {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(data);

  return (
    <Container sx={{}}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" fontWeight={700}>
          Profile
        </Typography>
      </Box>

      {/* Profile Header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            src="https://randomuser.me/api/portraits/men/75.jpg"
            sx={{ width: 64, height: 64 }}
          />
          <Box>
            <Typography fontWeight={600}>Ethan Young</Typography>
            <Typography color="text.secondary">ethanyoung@gmail.com</Typography>
          </Box>
        </Stack>
      </Stack>

      {/* Form Fields */}
      <Grid container spacing={3}>
        {profileQuestions.map((question) => (
          <Grid size={{ xs: 12, sm: 6 }} key={question.title}>
            <RenderEngine
              question={question}
              value={formData[question.title] || ""}
              onChange={(val) => handleChange(question.title, val)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
