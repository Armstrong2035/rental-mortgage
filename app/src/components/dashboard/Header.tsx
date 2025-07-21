"use client";

import React from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Dialog,
  DialogContent,
  IconButton,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProfileForm from "./ProfileModal";

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

export default function Header({ data }: { data: OnboardingFormData | null }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: "1rem 2rem",
          backgroundColor: "#004D40",
          color: "#ffffff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            letterSpacing: "-0.5px",
          }}
        >
          Subaa
        </Typography>

        <Avatar
          sx={{ bgcolor: "#26A69A", width: 40, height: 40, cursor: "pointer" }}
          onClick={() => setOpen(true)}
        >
          S
        </Avatar>
      </Stack>

      {open && (
        <Box
          sx={{
            position: "fixed",
            top: "72px", // height of your header
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            zIndex: 1200, // just below MUI AppBar zIndex
            overflowY: "auto",
          }}
        >
          <Container>
            <Box sx={{ position: "relative", pt: 4 }}>
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}
              >
                <CloseIcon />
              </IconButton>
              <ProfileForm data={data} />
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
