import typography from "../../../../../app/utils/styles";
import { Stack, Box, Typography } from "@mui/material";
import siteConfig from "../../../../../app/utils/siteConfig";
import typographyStyles from "@/app/styles";

export default function Heading() {
  const partners = siteConfig.partners;
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Stack spacing={1}>
        <Typography sx={{ ...typographyStyles.bodyMedium, fontSize: "20px" }}>
          {partners.title}
        </Typography>
        <Typography
          sx={{
            ...typographyStyles.bodyMedium,
            fontSize: "28px",
            fontWeight: 500,
          }}
        >
          {partners.subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}
