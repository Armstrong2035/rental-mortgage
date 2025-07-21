"use client";

import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import ApprovalProgress from "./ApprovalProgress";
import MortgageDetails from "./MortgageDetails";

export default function Dashboard() {
  function getOnboardingFinalSubmission() {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = localStorage.getItem("onboarding_final_submission");
      return data ? JSON.parse(data) : null;
    }
    return null;
  }

  const data = getOnboardingFinalSubmission();

  console.log(data);

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header data={data} />
      <ApprovalProgress />
      <MortgageDetails data={data} />
    </Container>
  );
}
