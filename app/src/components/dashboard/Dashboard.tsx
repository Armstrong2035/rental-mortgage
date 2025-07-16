import React from "react";
import { Container, Paper } from "@mui/material";
import Header from "./Header";
import ApprovalProgress from "./ApprovalProgress";
import MortgageDetails from "./MortgageDetails";

export default function Dashboard() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <ApprovalProgress />
      <MortgageDetails />
    </Container>
  );
}
