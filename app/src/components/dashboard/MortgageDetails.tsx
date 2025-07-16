"use client";
import { Grid } from "@mui/material";
import React from "react";
import MortgagePlan from "./MortgagePlan";
import PropertyDetailsComponent from "./PropertyDetails";
export default function MortgageDetails() {
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
