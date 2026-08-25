import type { Product } from "@/src/types/product";

export const productCategories = [
  { slug: "ultrasound", label: "Ultrasound" },
  { slug: "monitoring", label: "Patient Monitoring" },
  { slug: "surgical", label: "Surgical Robotics" },
  { slug: "imaging", label: "Diagnostic Imaging" },
] as const;

export const products: Product[] = [
  {
    slug: "bmc-g3-a20",
    name: "BMC G3 A20",
    category: "Sleep Therapy",
    categorySlug: "sleep-therapy",
    refCode: "G3 A20 / CPAP",
    coordinates: "",
    shortDescription:
      "Advanced AutoCPAP therapy delivering personalized pressure response, accurate respiratory event detection, and comfortable all night therapy.",
    description:
      "The BMC G3 A20 is an AutoCPAP device designed to provide personalized sleep therapy through smart adaptive pressure response, accurate respiratory event detection, and automated comfort features.",

    image: "/mainProduct.png",

    gallery: [
      "/products/g3-a20-01.png",
      "/products/g3-a20-02.png",
      "/products/g3-a20-03.png",
    ],

    featured: true,

    imaging: "Smart Adaptive Algorithm",
    application: "Sleep Apnea Management",
    transducerTech: "SmartC / SmartA",

    details: [
      {
        index: "02",
        title: "Smart Adaptive Therapy",
        body: "The G3 dynamically adapts to an ideal starting pressure after ramp based on data from the last five effective treatment days. It continuously optimizes minimum and maximum pressure thresholds throughout long-term therapy.",
        specs: [
          {
            label: "Pressure Response",
            value: "Fast / Standard / Soft",
          },
          {
            label: "Pressure Range",
            value: "4 20 hPa",
          },
          {
            label: "Work Mode",
            value: "CPAP / AutoCPAP",
          },
        ],
      },

      {
        index: "03",
        title: "Intelligent Comfort & Humidification",
        body: "The G3 combines automated therapy controls with intelligent humidification to provide comfortable treatment throughout the night. Auto On, Auto Off, Auto Ramp, Delay Off, pre-heating, and smart humidity and temperature control simplify everyday therapy.",
        specs: [
          {
            label: "Water Chamber",
            value: "360 ± 30 mL",
          },
          {
            label: "Humidification",
            value: "Auto / Level 1 to 5",
          },
          {
            label: "Sound Pressure",
            value: "28 ± 2 dB(A)",
          },
        ],
      },

      {
        index: "04",
        title: "Data-Driven Sleep Management",
        body: "PAP Link provides Web, PC, and App solutions for monitoring therapy data, configuring treatment parameters, transferring data, generating reports, and supporting healthcare professionals, clinics, distributors, and patients.",
      },
    ],

    applications: [
      "Sleep Apnea Management",
      "OSA Therapy",
      "CPAP Therapy",
      "AutoCPAP Therapy",
    ],

    downloads: [
      {
        label: "Product Brochure (PDF)",
        href: "#",
      },
      {
        label: "Specification Chart",
        href: "#",
      },
    ],
  },
  {
    slug: "vitalscan-monitor",
    name: "VitalScan Monitor",
    category: "Patient Monitoring",
    categorySlug: "monitoring",
    refCode: "REF_002 / MONITORING",
    coordinates: "LAT: 42.3601 / LONG: 71.0589",
    shortDescription:
      "High-fidelity bedside monitoring with continuous multi-parameter tracking and predictive alerting.",
    description:
      "A precision multi-parameter patient monitor built for critical care, combining continuous waveform tracking with predictive early-warning alerts.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop",
    ],
    featured: true,
    imaging: "WaveformIQ Signal Processing",
    application: "Critical & Perioperative Care",
    details: [
      {
        index: "02",
        title: "Signal Processing",
        body: "WaveformIQ filters motion artifact in real time, isolating clean ECG, SpO2, and respiration signals even during patient movement or transport.",
        specs: [
          { label: "Parameters", value: "12+ simultaneous" },
          { label: "Battery Life", value: "6+ hours" },
          { label: "Connectivity", value: "HL7 / DICOM" },
        ],
      },
    ],
    applications: [
      "Intensive Care",
      "Operating Room",
      "Emergency Medicine",
      "Patient Transport",
    ],
    downloads: [{ label: "Spec Sheet (PDF)", href: "#" }],
  },
  {
    slug: "nexus-surgical-arm",
    name: "Nexus Surgical Arm",
    category: "Surgical Robotics",
    categorySlug: "surgical",
    refCode: "REF_003 / SURGICAL",
    coordinates: "LAT: 40.7128 / LONG: 74.0060",
    shortDescription:
      "Sub-millimeter robotic assistance engineered for minimally invasive procedures.",
    description:
      "Robotic-assisted surgical platform delivering sub-millimeter precision and tremor-free instrument control for minimally invasive procedures.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1600&auto=format&fit=crop",
    ],
    featured: true,
    imaging: "TactileSync Feedback Loop",
    application: "General & Thoracic Surgery",
    details: [
      {
        index: "02",
        title: "Precision Control",
        body: "Seamless hardware-software synthesis translates surgeon motion into sub-millimeter instrument response, filtering hand tremor before it reaches the instrument tip.",
        specs: [
          { label: "Degrees of Freedom", value: "7 per arm" },
          { label: "Latency", value: "< 5ms" },
          { label: "Tremor Reduction", value: "Active" },
        ],
      },
    ],
    applications: [
      "General Surgery",
      "Thoracic Surgery",
      "Urology",
      "Gynecologic Surgery",
    ],
    downloads: [{ label: "Spec Sheet (PDF)", href: "#" }],
  },
  {
    slug: "clarity-mri-suite",
    name: "Clarity MRI Suite",
    category: "Diagnostic Imaging",
    categorySlug: "imaging",
    refCode: "REF_004 / IMAGING",
    coordinates: "LAT: 41.8781 / LONG: 87.6298",
    shortDescription:
      "Wide-bore MRI platform balancing image fidelity with patient comfort and shorter scan times.",
    description:
      "A wide-bore magnetic resonance imaging suite engineered to shorten scan times without compromising diagnostic image fidelity.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fb?q=80&w=1600&auto=format&fit=crop",
    ],
    featured: false,
    imaging: "QuietField Gradient System",
    application: "Neurology & Musculoskeletal",
    details: [
      {
        index: "02",
        title: "Gradient System",
        body: "QuietField gradients cut acoustic noise by more than half while maintaining the slew rate needed for high-resolution neurological and musculoskeletal protocols.",
        specs: [
          { label: "Bore Width", value: "70cm" },
          { label: "Field Strength", value: "3.0T" },
          { label: "Acoustic Noise", value: "-55% vs. prior gen" },
        ],
      },
    ],
    applications: [
      "Neurology",
      "Musculoskeletal",
      "Oncology",
      "Cardiac Imaging",
    ],
    downloads: [{ label: "Spec Sheet (PDF)", href: "#" }],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(
  slug: string,
  categorySlug: string,
  limit = 3,
) {
  return products
    .filter(
      (product) =>
        product.slug !== slug && product.categorySlug === categorySlug,
    )
    .slice(0, limit)
    .concat(
      products
        .filter(
          (product) =>
            product.slug !== slug && product.categorySlug !== categorySlug,
        )
        .slice(0, limit),
    )
    .slice(0, limit);
}
