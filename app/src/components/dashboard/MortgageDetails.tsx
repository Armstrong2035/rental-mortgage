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
  annualIncome: string; // or number if you plan to parse it
  emiratesId: string;
  buildingName: string;
  bedrooms: string; // or number
  location: string;
  landlordName: string;
  propertyType: "Apartment" | "Villa" | "Townhouse";
  totalAnnualRent: string; // or number
  numberOfCheques: "1" | "2" | "3" | "4";
  downpayment: string; // or number
  selectedBank: string; // use a union of bank values if you want strict typing
  completedSteps: number;
  submittedAt: string; // ISO date string
};

export default function MortgageDetails({
  data,
}: {
  data: OnboardingFormData | null;
}) {
  return (
    <Grid container>
      <Grid size={{ md: 4 }} sx={{ padding: 2 }}>
        <MortgagePlan />
      </Grid>
      <Grid size={{ md: 8 }} sx={{ padding: 2 }}>
        <PropertyDetailsComponent />
      </Grid>
    </Grid>
  );
}
