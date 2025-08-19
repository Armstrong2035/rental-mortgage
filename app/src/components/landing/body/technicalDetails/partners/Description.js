import { Box, Typography } from "@mui/material";
import Image from "next/image";
import siteConfig from "../../../../../app/utils/siteConfig";

export default function PartnersList() {
  const partners = siteConfig.partners;

  return (
    <Box sx={{ py: 8, px: 4, overflow: "hidden" }}>
      {/* Main Title */}
      {/* <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 1,
          color: "#005244",
          fontWeight: 600,
        }}
      >
        {partners.title}
      </Typography> */}

      {/* Subtitle */}
      {/* <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 6,
          color: "text.secondary",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        {partners.subtitle}
      </Typography> */}

      {/* Banks Title */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 4,
          color: "#005244",
          fontWeight: 500,
        }}
      >
        {partners.banksTitle}
      </Typography>

      {/* Scrolling Bar */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 6,
            animation: "scroll 20s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {/* Duplicate logos so it loops seamlessly */}
          {[...partners.banks, ...partners.banks].map((bank, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 60,
                position: "relative",
              }}
            >
              <Image
                src={bank.imageUrl}
                alt={bank.label}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
