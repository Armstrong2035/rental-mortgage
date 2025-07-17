import React from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

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
      <CardContent>
        <Typography>Mortgage Plan</Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
        >
          <Typography>AED 10,000</Typography>
          <Typography>Monthly</Typography>
        </Box>

        <Divider />

        <Stack justifyContent={"space-between"}>
          {planDetailsArray.map((details, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 1,
              }}
            >
              <Typography>{details.key}</Typography>
              <Typography>{details.value}</Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
