import React from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { textStyles } from "@/app/style";

export default function MortgagePlan() {
  const planDetailsArray = [
    { key: "Mortgage Duration", value: "1 year" },
    { key: "Total Payment", value: "AED 110,000" },
    { key: "Interest Rate", value: "3.5%" },
  ];

  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          sx={{
            ...textStyles.light16,
            fontSize: 15,
            fontWeight: 600,
            color: "#004D40",
            mb: 3,
            letterSpacing: "-0.3px",
          }}
        >
          Mortgage Plan
        </Typography>

        <Chip
          label="AED 10,000 / Month"
          sx={{
            bgcolor: "#004D40",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            borderRadius: "12px",
            px: 2,
            py: 1,
            mb: 3,
            boxShadow: "0 3px 10px rgba(0,77,64,0.2)",
          }}
        />

        <Divider sx={{ width: "100%", my: 3 }} />

        <Stack spacing={2} sx={{ width: "100%" }}>
          {planDetailsArray.map((details, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#616161",
                  fontWeight: 500,
                }}
              >
                {details.key}
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#004D40",
                }}
              >
                {details.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
