"use client";

import React from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
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

export default function Header({ data }: { data: OnboardingFormData | null }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          padding: "1rem 2rem",
          background: "linear-gradient(90deg, #00695C, #004D40)",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          Subaa
        </Typography>

        <Avatar
          sx={{
            bgcolor: "#26C6DA",
            width: 42,
            height: 42,
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            },
          }}
          onClick={() => setOpen(true)}
        >
          S
        </Avatar>
      </Stack>

      {open && (
        <Box
          sx={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 77, 64, 0.25)",
            zIndex: 1200,
            overflowY: "auto",
          }}
        >
          <Container>
            <Box sx={{ position: "relative", pt: 4 }}>
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 10,
                  bgcolor: "rgba(255,255,255,0.9)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,1)",
                  },
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                <CloseIcon sx={{ color: "#004D40" }} />
              </IconButton>
              <ProfileForm data={data} />
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
