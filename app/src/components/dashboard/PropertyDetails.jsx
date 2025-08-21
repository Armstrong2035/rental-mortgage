import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import propertyIllustration from "../../../public/property-illustration.png";
import { textStyles } from "@/app/style";

const PropertyDetailsComponent = ({ data }) => {
  // Return early if data is not available
  if (!data) {
    return (
      <Card
        sx={{
          p: { xs: 2.5, sm: 4 },
          borderRadius: { xs: 3, sm: 4 },
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Complete onboarding to view property details
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const propertyData = {
    title: data.buildingName?.value || "Property Name",
    location: data.location?.value || "Location",
    propertyType: data.propertyType?.value || "Property Type",
    bedrooms: data.bedrooms?.value || "0",
    amount: `${parseFloat(
      data.totalAnnualRent?.value || "0"
    ).toLocaleString()} AED`,
  };

  const propertyDetails = [
    { key: "Property Type", value: propertyData.propertyType },
    { key: "Bedrooms", value: propertyData.bedrooms },
    { key: "Amount", value: propertyData.amount },
  ];

  return (
    <Card
      sx={{
        p: { xs: 2.5, sm: 4 },
        borderRadius: { xs: 3, sm: 4 },
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Grid container spacing={{ xs: 3, sm: 4 }} alignItems="center">
          {/* Left column */}
          <Grid
            size={{ md: 4, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={propertyIllustration}
              alt="Property illustration"
              width={100}
              height={100}
              style={{ marginBottom: 16 }}
            />
            <Typography
              sx={{
                ...textStyles.light16,
                fontSize: { xs: 14, sm: 15 },
                fontWeight: 600,
                color: "#004D40",
                letterSpacing: "-0.3px",
              }}
            >
              Property Details
            </Typography>
          </Grid>

          {/* Right column */}
          <Grid
            size={{ md: 8, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box mb={{ xs: 1.5, sm: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  ...textStyles.light16,
                  fontSize: { xs: 16, sm: 18 },
                  fontWeight: 700,
                  color: "#004D40",
                  mb: 0.5,
                }}
              >
                {propertyData.title}
              </Typography>
              <Typography
                sx={{
                  ...textStyles.light16,
                  fontSize: { xs: 13, sm: 15 },
                  color: "#616161",
                  fontWeight: 500,
                }}
              >
                {propertyData.location}
              </Typography>
            </Box>

            <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />

            <Stack spacing={{ xs: 1.5, sm: 2 }} sx={{ width: "100%" }}>
              {propertyDetails.map((detail, index) => (
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
                    {detail.key}
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
                    {detail.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertyDetailsComponent;
