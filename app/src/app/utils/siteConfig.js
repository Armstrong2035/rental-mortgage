// utils/siteConfig.js
// Central configuration module for the entire site

// Site Metadata
const siteMetadata = {
  title: "Terra Heights",
  description:
    "Terra Heights is a thoughtfully designed residential community just minutes from Expo City. Offering modern 1 and 2-bedroom apartments, this development combines sleek architecture with green open spaces. With a focus on connectivity, sustainability, and lifestyle, Terra Heights is perfect for those seeking a vibrant, well-balanced urban living experience.",
  keywords: [
    "Emaar",
    "Terra Heights",
    "Sobha One",
    "Dubai luxury apartments",
    "Dubai real estate",
    "Expo Living",
    "luxury residential",
    "Dubai property",
    "golf course view apartments",
    "Expo City",
  ],
  icons: {
    favicon:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  },
  themeColor: "#1C6658",
  backgroundColor: "#ffffff",
};

// Header & Footer
const header = {
  companyName: "Subaa.ae",
  projectName: "Rental Mortgages made easy",
};

// Hero Section
const hero = {
  title: ["No more big rent cheques.", "Pay monthly,", "Live stress-free."],
  projectName: "Your rent, simplified. One month at a time.",
  projectTypes: "Monthly rental mortgage support",
  description:
    "Our partner banks pay your landlord upfront. You pay back in manageable monthly installments. Simple, secure, and stress-free.",
  ctaText: "Check Your Eligibility",
  heroImage:
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1755577529/pexels-nextvoyage-1470405_j5bi0r.jpg",
};

// Location Section
// const location = {
//   title: "Location",
//   subtitle: "Prime Intersection with Seamless Connectivity",
//   description:
//     "Located within Expo Living, Terra Heights offers a unique blend of modern convenience and natural tranquility.",
//   proximities: [
//     "5 Minutes – Expo City Dubai",
//     "10 Minutes – Al Maktoum International Airport",
//     "15 Minutes – Dubai Marina",
//     "20 Minutes – Downtown Dubai",
//   ],
//   additionalInfo:
//     "Its strategic position near major transportation hubs makes commuting effortless while ensuring residents remain connected to Dubai’s key attractions.",
//   startingPrice: "Starting Price: AED 1.4M",
//   masterPlan:
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744090334/Terra_Heights_page-0006_iakn7k.jpg",
//   apartmentDetails: [
//     { label: "Unit Types", value: "1 & 2 Bedrooms" },
//     { label: "Area Range", value: "749 - 1,118 sq.ft" },
//     { label: "Handover Date", value: "2028" },
//     {
//       label: "Payment Plan",
//       value:
//         "Secure your home with just 10% down, followed by easy installments during construction, and 30% on handover in 2028.",
//     },
//     /*{ label: "Deposit Required", value: "20%" },*/
//   ],
// };

// Gallery Section
// const gallery = {
//   title: "Gallery",
//   subtitle: "All the dots connect at Terra Heights",
//   images: [
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009072/TERRA_HEIGHTS_XL_BROCHURE-35_wbzaqa.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009069/TERRA_HEIGHTS_XL_BROCHURE-18_nlibic.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009071/TERRA_HEIGHTS_XL_BROCHURE-32_aewqhq.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009070/TERRA_HEIGHTS_XL_BROCHURE-11_ufxwtz.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009069/TERRA_HEIGHTS_XL_BROCHURE-34_dj4urv.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009066/TERRA_HEIGHTS_XL_BROCHURE-23_dbn0o3.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009067/TERRA_HEIGHTS_XL_BROCHURE-13_j6nufi.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009060/TERRA_HEIGHTS_XL_BROCHURE-7_xzpy4a.jpg",
//   ],
// };

// Floor Plan Section
// const floorPlans = {
//   title: "Floor Plans",
//   subtitle: "Detailed layouts for 1 & 2-bedroom apartments",
//   additionalText:
//     "Open spaces, natural light, and a seamless blend of indoor and outdoor living create a home that feels like a retreat.",
//   images: [
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/1_Bed_peughe.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/2_Bed_eqnyp4.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/1_Bed_peughe.jpg",
//     "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/2_Bed_eqnyp4.jpg",
//   ],
//   bedroomTypes: [
//     { id: "1bed", label: "1 Bedroom", imageIndex: 2 },
//     { id: "2bed", label: "2 Bedrooms", imageIndex: 3 },
//     /* { id: "3bed", label: "3 Bedrooms", imageIndex: 0 },
//     { id: "4bed", label: "4 Bedrooms", imageIndex: 1 }, */
//   ],
// };

// Features/Amenities Section
const partners = {
  title: "Our Banking Partners",
  subtitle: "Trusted institutions making monthly rent possible",
  banksTitle: "PARTNER BANKS",
  banks: [
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
};

// Contact Form
// const contact = {
//   title: "Register Your Interest",
//   subtitle:
//     "Fill in your details below and our property specialist will contact you soon",
//   formFields: {
//     name: "Full Name",
//     email: "Email",
//     phone: "Phone Number",
//     unitPreference: "Unit Preference",
//   },
//   unitOptions: [
//     { value: "4-bed", label: "Studio" },
//     { value: "1-bed", label: "1 Bedroom" },
//     { value: "2-bed", label: "2 Bedroom" },
//     { value: "5-bed", label: "3 + Bedroom" },
//   ],
//   submitButtonText: "Submit",
//   successMessage:
//     "Thank you! Your information has been submitted successfully.",
//   errorMessage:
//     "There was an error submitting your information. Please try again.",
//   formConfig: {
//     defaultCollection: "leads",
//     defaultStatus: "new",
//     defaultSource: "website",
//     projectName: "Sobha One Element",
//   },
// };

// Export all configuration sections
export {
  siteMetadata,
  header,
  hero,
  partners,
  //location,
  //gallery,
  // floorPlans,

  //   contact,
  //   analytics,
  //   firebaseConfig,
};

// Export default complete config
const siteConfig = {
  siteMetadata,
  header,
  hero,
  partners,
  //   location,
  //   gallery,
  //   floorPlans,
  //   features,
  //   contact,
  //   analytics,
  //   firebaseConfig,
};

export default siteConfig;
