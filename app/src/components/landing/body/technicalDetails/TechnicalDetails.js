import { Box, Divider, Stack } from "@mui/material";
import Partners from "./partners/Partners";

export default function TechnicalDetails({ isDesktop, heroImage }) {
  const dividerMargins = {
    mt: isDesktop ? 20 : 10,
    mb: isDesktop ? 20 : 10,
  };
  return (
    <Box>
      {/* <Location masterPlan={masterPlan} />
      <Divider sx={dividerMargins} />
      <Gallery isDesktop={isDesktop} images={images} />
      <Divider sx={dividerMargins} />
      <FloorPlan floorPlanImages={floorPlanImages} isDesktop={isDesktop} />
      <Divider sx={dividerMargins} /> */}
      <Partners />
    </Box>
  );
}
