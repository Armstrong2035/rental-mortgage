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
    <Card sx={{ p: 4 }}>
      <CardContent>
        <Grid container spacing={2} direction={"row"} alignItems="center">
          <Grid
            size={{ md: 4, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Property Details
            </Typography>

            <Image
              src={propertyIllustration}
              alt="Property illustration"
              width={80}
              height={80}
            />
          </Grid>

          <Grid
            size={{ md: 8, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                {propertyData.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {propertyData.location}
              </Typography>
            </Box>

            <Divider sx={{ my: 2, width: "100%" }} />

            <Stack
              direction={"column"}
              spacing={1}
              width="100%"
              alignItems={"center"}
            >
              <Typography variant="body2" color="text.secondary">
                Property Type: {propertyData.propertyType}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Bedrooms: {propertyData.bedrooms}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Amount: {propertyData.amount}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertyDetailsComponent;
