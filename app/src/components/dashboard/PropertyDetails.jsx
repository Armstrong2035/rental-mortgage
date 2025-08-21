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
import textStyles from "@/app/styles";

const PropertyDetailsComponent = ({ data }) => {
  // Return early if data is not available
  if (!data) {
    return (
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" textAlign="center" color="text.secondary">
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

  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left column */}
          <Grid
            size={{ md: 4, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
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
              variant="h6"
              sx={{ ...textStyles.light16, fontWeight: 700, color: "#004D40" }}
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
              px: 2,
              background: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Box mb={2}>
              <Typography
                variant="h6"
                sx={{
                  ...textStyles.light16,
                  fontWeight: 700,
                  color: "#212121",
                }}
              >
                {propertyData.title}
              </Typography>
              <Typography sx={{ ...textStyles.regular20 }}>
                {propertyData.location}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={1.5}>
              <Box component="span" sx={{ color: "#004D40", fontWeight: 600 }}>
                <Typography
                  variant="body2"
                  sx={{ ...textStyles.light16, color: "#616161" }}
                >
                  Property Type: {"   "}
                  {propertyData.propertyType}
                </Typography>
              </Box>

              <Box
                component="span"
                sx={{
                  ...textStyles.light16,
                  color: "#004D40",
                  fontWeight: 600,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ ...textStyles.light16, color: "#616161" }}
                >
                  Bedrooms: {"   "}
                  {propertyData.bedrooms}
                </Typography>
              </Box>
              <Box
                component="span"
                sx={{
                  ...textStyles.light16,
                  color: "#004D40",
                  ml: 0.5,
                }}
              >
                <Typography sx={{ ...textStyles.light16, color: "#616161" }}>
                  Amount:{"   "}
                  {propertyData.amount}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertyDetailsComponent;
