import { Typography, Box, Stack } from "@mui/material";
import { mdTypography } from "../../../../../src/app/utils/styles";
import { hero } from "../../../../../src/app/utils/siteConfig";
import typographyStyles from "@/app/styles";

export default function HeroText({ isDesktop }) {
  const style = {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "6.5rem", // 104px converted to rem
    lineHeight: "6.75rem", // 108px converted to rem
    color: "#000000", // hex version of rgb(0, 0, 0)
  };

  return (
    <Stack>
      {hero.title.map((line, index) => (
        <Typography
          key={index}
          sx={
            isDesktop
              ? {
                  ...typographyStyles.heroTitle,
                  fontSize: "70px",
                  lineHeight: "100px",
                  fontWeight: 500,
                }
              : mdTypography.heading48
          }
        >
          {line}
        </Typography>
      ))}
    </Stack>
  );
}
