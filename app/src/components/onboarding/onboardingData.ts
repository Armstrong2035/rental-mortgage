// src/components/dashboard/onboardingSteps.ts

import { OnboardingProps } from "./types";

export const onboardingSteps: OnboardingProps[] = [
  {
    title: "Tenant Details",
    description: "Please enter your personal information.",
    questions: [
      { title: "Full Name", key: "fullName", type: "text" },
      { title: "Email Address", key: "emailAddress", type: "email" },
      { title: "Phone Number", key: "phoneNumber", type: "phone" },
      {
        title: "Employment Status",
        key: "employmentStatus",
        type: "dropdown",
        options: ["Employed", "Between Jobs", "Business Owner / Freelancer"],
      },
      {
        title: "Enter Annual Income in AED",
        key: "annualIncome",
        type: "money",
      },
      { title: "Emirates ID number", key: "emiratesId", type: "number" },
    ],
  },
  {
    title: "Property Details",
    description: "Details about the property you intend to rent.",
    questions: [
      { title: "Building name", key: "buildingName", type: "text" },
      { title: "Bedrooms", key: "bedrooms", type: "number" },
      { title: "Location", key: "location", type: "text" },
      { title: "Landlord Name", key: "landlordName", type: "text" },
      {
        title: "Property Type",
        key: "propertyType",
        type: "dropdown",
        options: ["Apartment", "Villa", "Townhouse"],
      },
    ],
  },
  {
    title: "Payment Requirements",
    description: "How many cheques does your landlord require?",
    questions: [
      { title: "Total Annual Rent", key: "totalAnnualRent", type: "money" },
      {
        title: "Number of Required Cheques",
        key: "numberOfCheques",
        type: "dropdown",
        options: ["1", "2", "3", "4"],
      },
      {
        title: "How much downpayment can you afford?",
        key: "downpayment",
        type: "money",
        required: false,
      },
    ],
  },
  {
    title: "Select Your Bank",
    description: "Please select your primary bank for rent repayments.",
    questions: [
      {
        key: "selectedBank",
        type: "gridSelect",
        options: [
          {
            label: "Abu Dhabi Commercial Bank",
            value: "adcb",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487733/adcb_mjiiz9.png",
          },
          {
            label: "Abu Dhabi Commercial Bank-Islamic",
            value: "adcb-islamic",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752488220/adcb-islamic_g67wu3.png",
          },
          {
            label: "Abu Dhabi Islamic Bank",
            value: "adib",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487733/adib_vod2li.png",
          },
          {
            label: "Ajman Bank",
            value: "ajman",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487733/ajman_sr4rds.png",
          },
          {
            label: "Al Hilal Bank",
            value: "al-hilal",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487731/al-hilal_dngmfw.png",
          },
          {
            label: "American Express",
            value: "amex",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487732/amex_njygsi.png",
          },
          {
            label: "Arab Bank",
            value: "arab-bank",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487731/arab-bank_yqjp15.png",
          },
          {
            label: "Citibank",
            value: "citibank",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487735/citibank_ufwzp6.png",
          },
          {
            label: "Commercial Bank International",
            value: "cbi",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487730/cbi_dta4ew.png",
          },
          {
            label: "Commercial Bank of Dubai",
            value: "cbd",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487730/cbd_uxgbhj.png",
          },
          {
            label: "Dubai First",
            value: "dubai-first",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487730/dubai-first_gqcct8.gif",
          },
          {
            label: "Dubai Islamic Bank",
            value: "dib",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487730/dib_pkl5uw.png",
          },
          {
            label: "Emirates Islamic",
            value: "emirates-islamic",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487730/emirates-islamic_jno7j6.png",
          },
          {
            label: "Emirates NBD",
            value: "emirates-nbd",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487729/emirates-nbd_rghf1b.png",
          },
          {
            label: "Finance House",
            value: "finance-house",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487730/finance-house_ksspjw.png",
          },
          {
            label: "First Abu Dhabi Bank",
            value: "fab",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487729/fab_aela5j.png",
          },
          {
            label: "HSBC",
            value: "hsbc",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487729/hsbc_jsb9eh.png",
          },
          {
            label: "Liv",
            value: "liv",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487729/liv_e4ur4d.png",
          },
          {
            label: "MySeva",
            value: "myseva",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487728/myseva_orjgou.png",
          },
          {
            label: "Najm",
            value: "najm",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487728/najm_cazzb5.png",
          },
          {
            label: "National Bank of Fujairah",
            value: "nbf",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487728/nbf_z4tuxr.png",
          },
          {
            label: "Noor Bank",
            value: "noor",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487727/noor_e1ce6v.png",
          },
          {
            label: "Samba",
            value: "samba",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487728/samba_g2lp4k.png",
          },
          {
            label: "Sharjah Islamic Bank",
            value: "sharjah-islamic",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487729/sharjah-islamic_cjjqzq.png",
          },
          {
            label: "Standard Chartered Bank",
            value: "standard-chartered",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487728/standard-chartered_vsjzxe.png",
          },
          {
            label: "United Arab Bank",
            value: "uab",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487731/uab_xt1rnt.png",
          },
          {
            label: "simplylife from ADCB",
            value: "simplylife",
            imageUrl:
              "https://res.cloudinary.com/dulafqaoq/image/upload/v1752487728/simplylife_z7wv9a.png",
          },
        ],
        multiple: false,
      },
    ],
  },
];
