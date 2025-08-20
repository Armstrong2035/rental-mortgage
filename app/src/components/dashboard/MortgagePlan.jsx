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

export default function MortgagePlan({ data }) {
  const interestRate = 0.035; // 3.5% default

  // Parse numbers safely
  const annualIncome = parseFloat(data.annualIncome.value);
  const downpayment = parseFloat(data.downpayment.value);
  const totalAnnualRent = parseFloat(data.totalAnnualRent.value);

  // Calculate loan amount
  const loanAmount = totalAnnualRent - downpayment;

  // Calculate total payment (principal + interest, simplified)
  const totalPayment = loanAmount + loanAmount * interestRate;

  const planDetailsArray = [
    { key: "Annual Income", value: `${annualIncome.toLocaleString()} AED` },
    { key: "Downpayment", value: `${downpayment.toLocaleString()} AED` },
    { key: "Bank", value: data.selectedBank.value },
    {
      key: "Total Annual Rent",
      value: `${totalAnnualRent.toLocaleString()} AED`,
    },
    { key: "Employment Status", value: data.employmentStatus.value },
    { key: "Total Payment", value: `${totalPayment.toLocaleString()} AED` },
    { key: "Interest Rate", value: `${(interestRate * 100).toFixed(1)}%` },
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
        <Stack
          justifyItems={"flex-start"}
          alignContent={"flex-start"}
          sx={{ width: "50%" }}
        >
          <Typography
            sx={{
              ...textStyles.light16,
              fontSize: 15,
              fontWeight: 600,
              color: "#004D40",
              mb: 1,
              letterSpacing: "-0.3px",
            }}
          >
            Loan Plan
          </Typography>

          <Chip
            label="AED 10,000 / Month"
            sx={{
              ...textStyles.light16,
              background: "linear-gradient(90deg, #004D40, #00796B)",
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
        </Stack>

        <Divider sx={{ width: "100%", my: 1 }} />

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
                  ...textStyles.light16,
                  fontSize: 15,
                  color: "#616161",
                  fontWeight: 500,
                }}
              >
                {details.key}
              </Typography>
              <Typography
                sx={{
                  ...textStyles.light16,
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
