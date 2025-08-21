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
  // Return early if data is not available
  if (!data) {
    return (
      <Card
        sx={{
          borderRadius: { xs: 3, sm: 4 },
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Complete onboarding to view your mortgage plan
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const interestRate = 0.035; // 3.5% default

  // Parse numbers safely with fallbacks
  const annualIncome = parseFloat(data.annualIncome?.value || "0");
  const downpayment = parseFloat(data.downpayment?.value || "0");
  const totalAnnualRent = parseFloat(data.totalAnnualRent?.value || "0");

  // Calculate loan amount
  const loanAmount = totalAnnualRent - downpayment;

  // Calculate total payment (principal + interest, simplified)
  const totalPayment = loanAmount + loanAmount * interestRate;

  const planDetailsArray = [
    { key: "Annual Income", value: `${annualIncome.toLocaleString()} AED` },
    { key: "Downpayment", value: `${downpayment.toLocaleString()} AED` },
    { key: "Bank", value: data.selectedBank?.value || "Not selected" },
    {
      key: "Total Annual Rent",
      value: `${totalAnnualRent.toLocaleString()} AED`,
    },
    {
      key: "Employment Status",
      value: data.employmentStatus?.value || "Not specified",
    },
    { key: "Total Payment", value: `${totalPayment.toLocaleString()} AED` },
    { key: "Interest Rate", value: `${(interestRate * 100).toFixed(1)}%` },
  ];

  return (
    <Card
      sx={{
        borderRadius: { xs: 3, sm: 4 },
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
        <Stack
          justifyItems="flex-start"
          alignContent="flex-start"
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{
              ...textStyles.light16,
              textAlign: "left",
              fontSize: { xs: 14, sm: 15 },
              fontWeight: 600,
              color: "#004D40",
              mb: { xs: 1.5, sm: 1 },
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
              fontSize: { xs: 14, sm: 16 },
              borderRadius: "12px",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              mb: { xs: 2, sm: 3 },
              boxShadow: "0 3px 10px rgba(0,77,64,0.2)",
              alignSelf: { xs: "flex-start", sm: "flex-start" },
            }}
          />
        </Stack>

        <Divider sx={{ width: "100%", my: { xs: 1.5, sm: 1 } }} />

        <Stack spacing={{ xs: 1.5, sm: 2 }} sx={{ width: "100%" }}>
          {planDetailsArray.map((details, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                sx={{
                  ...textStyles.light16,
                  fontSize: { xs: 13, sm: 15 },
                  color: "#616161",
                  fontWeight: 500,
                  flex: 1,
                  maxWidth: { xs: "60%", sm: "50%" },
                  textAlign: "left",
                }}
              >
                {details.key}
              </Typography>
              <Typography
                sx={{
                  ...textStyles.light16,
                  fontSize: { xs: 13, sm: 15 },
                  fontWeight: 700,
                  color: "#004D40",
                  textAlign: "right",
                  flex: 1,
                  maxWidth: { xs: "40%", sm: "50%" },
                  wordBreak: "break-word",
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
