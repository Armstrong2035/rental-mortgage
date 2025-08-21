"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import ApprovalProgress from "./ApprovalProgress";
import MortgageDetails from "./MortgageDetails";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getOnboardingFinalSubmission() {
      if (typeof window !== "undefined" && window.localStorage) {
        const data = localStorage.getItem("onboarding_final_submission");
        return data ? JSON.parse(data) : null;
      }
      return null;
    }

    const submissionData = getOnboardingFinalSubmission();
    setData(submissionData);
    setIsLoading(false);

    console.log(submissionData);
  }, []);

  if (isLoading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Loading...</div>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header data={data} />
      <ApprovalProgress />
      <MortgageDetails data={data} />
    </Container>
  );
}
