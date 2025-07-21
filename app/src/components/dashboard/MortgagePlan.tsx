import React from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
  Card,
  CardContent,
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
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            ...textStyles.light16,
            fontSize: 14,
            mb: 2,
          }}
        >
          Mortgage Plan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...textStyles.medium25, fontSize: "16px" }}>
            AED 10,000 /Month
          </Typography>
        </Box>

        <Divider sx={{ width: "100%", my: 2 }} />

        <Stack justifyContent={"space-between"} sx={{}}>
          {planDetailsArray.map((details, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: 1,
                width: "100%",
              }}
            >
              <Typography sx={{ ...textStyles.medium25, fontSize: "16px" }}>
                {details.key} : {details.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
