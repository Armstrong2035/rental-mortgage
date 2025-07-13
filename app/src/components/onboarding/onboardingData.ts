import { OnboardingProps } from "./types";

export const onboardingSteps: OnboardingProps[] = [
  {
    title: "Tenant Details",
    description: "Please enter your personal information.",

    questions: [
      { title: "Full Name", type: "text" },
      { title: "Email Address", type: "email" },
      { title: "Phone Number", type: "phone" },

      {
        title: "Employment Status",
        type: "dropdown",
        options: ["Employed", "Between Jobs", "Business Owner / Freelancer"],
      },
      {
        title: "Enter Yearly Income in AED",
        type: "money",
      },
      {
        title: "Emirates ID number",
        type: "number",
      },
    ],
  },
  {
    title: "Property Details",
    description: "Details about the property you intend to rent.",

    questions: [
      { title: "Building name", type: "text" },
      { title: "Bedrooms", type: "number" },
      { title: "Monthly Rent Amount (AED)", type: "money" },
      { title: "Location", type: "text" },
      {
        title: "Property Type",
        type: "dropdown",
        options: ["Apartment", "Villa", "Townhouse"],
      },
    ],
  },
  {
    title: "Payment Requirements",
    description: "How many cheques does your landlord require?",
    questions: [
      { title: "Total Annual Rent", type: "money" },
      {
        title: "Number of Required Cheques",
        type: "dropdown",
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    title: "Select Your Bank",
    description: "Please select your primary bank for rent repayments.",
    questions: [
      {
        type: "gridSelect",
        options: [
          {
            label: "Abu Dhabi Commercial Bank",
            value: "adcb",
            imageUrl: "/images/banks/adcb.png",
          },
          {
            label: "Abu Dhabi Commercial Bank-Islamic",
            value: "adcb-islamic",
            imageUrl: "/images/banks/adcb-islamic.png",
          },
          {
            label: "Abu Dhabi Islamic Bank",
            value: "adib",
            imageUrl: "/images/banks/adib.png",
          },
          {
            label: "Ajman Bank",
            value: "ajman",
            imageUrl: "/images/banks/ajman.png",
          },
          {
            label: "Al Hilal Bank",
            value: "al-hilal",
            imageUrl: "/images/banks/al-hilal.png",
          },
          {
            label: "American Express",
            value: "amex",
            imageUrl: "/images/banks/amex.png",
          },
          {
            label: "Arab Bank",
            value: "arab-bank",
            imageUrl: "/images/banks/arab-bank.png",
          },
          {
            label: "Citibank",
            value: "citibank",
            imageUrl: "/images/banks/citibank.png",
          },
          {
            label: "Commercial Bank International",
            value: "cbi",
            imageUrl: "/images/banks/cbi.png",
          },
          {
            label: "Commercial Bank of Dubai",
            value: "cbd",
            imageUrl: "/images/banks/cbd.png",
          },
          {
            label: "Dubai First",
            value: "dubai-first",
            imageUrl: "/images/banks/dubai-first.png",
          },
          {
            label: "Dubai Islamic Bank",
            value: "dib",
            imageUrl: "/images/banks/dib.png",
          },
          {
            label: "Emirates Islamic",
            value: "emirates-islamic",
            imageUrl: "/images/banks/emirates-islamic.png",
          },
          {
            label: "Emirates NBD",
            value: "emirates-nbd",
            imageUrl: "/images/banks/emirates-nbd.png",
          },
          {
            label: "Finance House",
            value: "finance-house",
            imageUrl: "/images/banks/finance-house.png",
          },
          {
            label: "First Abu Dhabi Bank",
            value: "fab",
            imageUrl: "/images/banks/fab.png",
          },
          { label: "HSBC", value: "hsbc", imageUrl: "/images/banks/hsbc.png" },
          { label: "Liv", value: "liv", imageUrl: "/images/banks/liv.png" },
          {
            label: "MySeva",
            value: "myseva",
            imageUrl: "/images/banks/myseva.png",
          },
          { label: "Najm", value: "najm", imageUrl: "/images/banks/najm.png" },
          {
            label: "National Bank of Fujairah",
            value: "nbf",
            imageUrl: "/images/banks/nbf.png",
          },
          {
            label: "Noor Bank",
            value: "noor",
            imageUrl: "/images/banks/noor.png",
          },
          {
            label: "Samba",
            value: "samba",
            imageUrl: "/images/banks/samba.png",
          },
          {
            label: "Sharjah Islamic Bank",
            value: "sharjah-islamic",
            imageUrl: "/images/banks/sharjah-islamic.png",
          },
          {
            label: "Standard Chartered Bank",
            value: "standard-chartered",
            imageUrl: "/images/banks/standard-chartered.png",
          },
          {
            label: "United Arab Bank",
            value: "uab",
            imageUrl: "/images/banks/uab.png",
          },
          {
            label: "simplylife from ADCB",
            value: "simplylife",
            imageUrl: "/images/banks/simplylife.png",
          },
        ],
        multiple: false,
      },
    ],
  },
];
