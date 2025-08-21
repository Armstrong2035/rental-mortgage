"use client";
import { Grid } from "@mui/material";
import React from "react";
import MortgagePlan from "./MortgagePlan";
import PropertyDetailsComponent from "./PropertyDetails";

export type OnboardingFormData = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  employmentStatus: "Employed" | "Between Jobs" | "Business Owner / Freelancer";
  annualIncome: string;
  emiratesId: string;
  buildingName: string;
  bedrooms: string;
  location: string;
  landlordName: string;
  propertyType: "Apartment" | "Villa" | "Townhouse";
  totalAnnualRent: string;
  numberOfCheques: "1" | "2" | "3" | "4";
  downpayment: string;
  selectedBank: string;
  completedSteps: number;
  submittedAt: string;
};

export default function MortgageDetails({
  data,
}: {
  data: OnboardingFormData | null;
}) {
  return (
    <Grid container spacing={4} sx={{ mt: 4, width: "100%" }}>
      <Grid size={{ md: 12, xs: 12 }}>
        <MortgagePlan data={data} />
      </Grid>
      <Grid size={{ md: 12, xs: 12 }}>
        <PropertyDetailsComponent data={data} />
      </Grid>
    </Grid>
  );
}
