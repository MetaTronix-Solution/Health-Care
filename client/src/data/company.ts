export const COMPANY = {
  name: "Himanshi Biomedical",
  shortName: "Himanshi",
  tagline: "Sleep & Respiratory Care Solutions in Nepal",
  established: 2022,
  location: "Nepal",
  description:
    "Himanshi Biomedical has been working in Nepal since 2022, specializing in respiratory care, sleep medicine, and biomedical equipment solutions.",
  distributorNote:
    "Authorized Distributor of BMC Medical products in Nepal",
} as const;

export const workingSectors = [
  "Sleep Lab Testing & Sleep Study Solutions",
  "CPAP (Continuous Positive Airway Pressure)",
  "Auto CPAP",
  "BiPAP (Bilevel Positive Airway Pressure)",
  "Sleep Apnea Management Solutions",
  "Respiratory Care Equipment",
  "Patient Monitoring & Diagnostic Solutions",
  "Medical Equipment Installation and Technical Support",
  "After-Sales Service and Customer Support",
] as const;

export const trustHighlights = [
  {
    label: "Authorized BMC Distributor",
    description: "Official distributor of BMC Medical in Nepal",
  },
  {
    label: "Sleep & Respiratory Care",
    description: "Specialized in sleep medicine and respiratory solutions",
  },
  {
    label: "Technical Support",
    description: "Professional installation and ongoing assistance",
  },
  {
    label: "Nepal-Based Service",
    description: "Local support for hospitals, clinics, and patients",
  },
] as const;

export const focusAreas = [
  { title: "Respiratory Care", body: "CPAP, Auto CPAP, BiPAP, and respiratory equipment solutions." },
  { title: "Sleep Medicine", body: "Sleep lab testing, sleep study solutions, and apnea management." },
  { title: "Biomedical Equipment", body: "Patient monitoring and diagnostic solutions for clinical settings." },
  { title: "Technical Support", body: "Installation, after-sales service, and dependable customer support." },
] as const;
