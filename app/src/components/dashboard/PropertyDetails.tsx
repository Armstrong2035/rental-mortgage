import React from "react";
import Image from "next/image";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const PropertyDetailsComponent = () => {
  const propertyData = {
    title: "The Address Opera T2",
    location: "JVC, Dubai - United Arab Emirates",
    propertyType: "Apartment",
    bedrooms: "2",
    amount: "AED 100,000",
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Property Details
        </Typography>

        <Box display="flex" justifyContent="center" mb={2}>
          <Image
            src="/property-illustration.png"
            alt="Property illustration"
            width={80}
            height={80}
          />
        </Box>

        <Typography variant="h6" gutterBottom>
          {propertyData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {propertyData.location}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Property Type
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {propertyData.propertyType}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Bedrooms
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {propertyData.bedrooms}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Amount
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {propertyData.amount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyDetailsComponent;
