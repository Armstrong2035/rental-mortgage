import { Typography, Stack, Box, Button } from "@mui/material";
import { mdTypography } from "../../../../../src/app/utils/styles";
import { hero } from "../../../../../src/app/utils/siteConfig";
import typographyStyles from "@/app/styles";
import { useRouter } from "next/navigation";

export default function SubText1({ isDesktop }) {
  const router = useRouter();

  const style1 = {
    heading: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "37px",
      color: "rgb(0, 0, 0)",
    },
    body: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#525252",
    },
  };

  return (
    <Stack spacing={isDesktop ? 10 : 3} justifyContent={"center"}>
      <Box>
        <Typography
          sx={
            isDesktop
              ? { ...typographyStyles.bodyMedium, fontSize: "28px" }
              : mdTypography.heading32
          }
        >
          {hero.projectName}
        </Typography>
        <Typography sx={{ ...typographyStyles.bodyMedium }}>
          {hero.projectTypes}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={
            isDesktop
              ? {
                  ...typographyStyles.bodyMedium,
                  color: "#525252",
                  fontSize: "18px",
                }
              : mdTypography.body16Gray
          }
        >
          {hero.description}
        </Typography>

        <Button
          variant="contained"
          onClick={() => router.push("/onboarding")}
          sx={{ backgroundColor: "#005244", mt: 3 }}
        >
          {hero.ctaText}
        </Button>
      </Box>
    </Stack>
  );
}
