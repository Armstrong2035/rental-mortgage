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

const PropertyDetailsComponent = () => {
  const propertyData = {
    title: "The Address Opera T2",
    location: "JVC, Dubai - United Arab Emirates",
    propertyType: "Apartment",
    bedrooms: "2",
    amount: "AED 100,000",
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
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#004D40" }}>
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
                sx={{ fontWeight: 700, color: "#212121" }}
              >
                {propertyData.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {propertyData.location}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={1.5}>
              <Typography variant="body2" sx={{ color: "#616161" }}>
                Property Type:{" "}
                <Box
                  component="span"
                  sx={{ color: "#004D40", fontWeight: 600 }}
                >
                  {propertyData.propertyType}
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ color: "#616161" }}>
                Bedrooms:{" "}
                <Box
                  component="span"
                  sx={{ color: "#004D40", fontWeight: 600 }}
                >
                  {propertyData.bedrooms}
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ color: "#616161" }}>
                Amount:{" "}
                <Box
                  component="span"
                  sx={{ color: "#004D40", fontWeight: 600 }}
                >
                  {propertyData.amount}
                </Box>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertyDetailsComponent;
