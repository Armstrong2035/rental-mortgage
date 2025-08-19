"use client";
import Hero from "./hero/Hero";
import TechnicalDetails from "./technicalDetails/TechnicalDetails";
import { Box, Divider, Stack, useMediaQuery, useTheme } from "@mui/material";

export default function Body({
  images,
  heroImage,
  masterPlan,
  floorPlanImages,
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Box sx={{ mt: 10, ml: 5, mr: 5 }}>
        <Hero isDesktop={isDesktop} heroImage={heroImage} />
        <Divider sx={{ my: 5 }} />
        <TechnicalDetails
          isDesktop={isDesktop}
          //   images={images}
          //   masterPlan={masterPlan}
          //   floorPlanImages={floorPlanImages}
          //   heroImage={heroImage}
        />
      </Box>
    </Stack>
  );
}
