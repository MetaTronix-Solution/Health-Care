import type { Product } from "@/src/types/product";

export const productCategories = [
  { slug: "ultrasound", label: "Ultrasound" },
  { slug: "monitoring", label: "Patient Monitoring" },
  { slug: "surgical", label: "Surgical Robotics" },
  { slug: "imaging", label: "Diagnostic Imaging" },
] as const;

export const products: Product[] = [
  {
    slug: "bmc-g3-b25vt-b30vt",
    name: "BMC G3 B25VT / B30VT",
    category: "Respiratory Therapy",
    categorySlug: "respiratory-therapy",
    refCode: "G3 B25VT / B30VT",
    coordinates: "",

    shortDescription:
      "Advanced bi-level PAP therapy with S/T mode and Target Tidal Volume for patients with respiratory insufficiency.",

    description:
      "The BMC G3 B25VT / B30VT is a bi-level PAP system designed for patients with respiratory insufficiency, featuring S/T mode, Target Tidal Volume, automatic leak compensation, and intelligent comfort features.",

    image:
      "https://en.bmc-medical.com/upload/image/2026-01/col191/1767758356549.jpg",

    gallery: [
      "https://en.bmc-medical.com/upload/image/2026-01/col191/1767758356549.jpg",
      "https://en.bmc-medical.com/upload/image/2026-01/col191/1767758368396.jpg",
      "https://en.bmc-medical.com/upload/image/2026-01/col191/1767758361462.jpg",
    ],

    featured: true,

    imaging: "Target Tidal Volume",
    application: "Respiratory Insufficiency Management",
    transducerTech: "Auto Leak Compensation",

    details: [
      {
        index: "02",
        title: "Target Tidal Volume Therapy",
        body: "The G3 automatically optimizes IPAP according to the patient's mean tidal volume from the last five breaths and the prescribed target tidal volume.",
        specs: [
          {
            label: "Target Vt",
            value: "150–1500 mL",
          },
          {
            label: "Pressure Range",
            value: "4–25 hPa / 4–30 hPa",
          },
          {
            label: "Work Mode",
            value: "S/T / S / T / CPAP",
          },
        ],
      },

      {
        index: "03",
        title: "Intelligent Comfort",
        body: "The G3 B25VT/B30VT combines pre-heating, Intelligent Auto Humidity control, and adjustable inspiratory and expiratory sensitivity for comfortable therapy.",
        specs: [
          {
            label: "Humidifier",
            value: "Auto / Level 1 to 5",
          },
          {
            label: "I Sens. / E Sens.",
            value: "7 levels",
          },
          {
            label: "Water Capacity",
            value: "360 mL",
          },
        ],
      },

      {
        index: "04",
        title: "Smart Monitoring & Connectivity",
        body: "The G3 supports onboard and SD card data storage together with cellular and WiFi connectivity for therapy monitoring and digital health solutions.",
        specs: [
          {
            label: "Data Transfer",
            value: "Cellular / WiFi",
          },
          {
            label: "Screen",
            value: "3.5-inch",
          },
          {
            label: "Sound Pressure",
            value: "26 dB(A)",
          },
        ],
      },
    ],

    applications: [
      "Respiratory Insufficiency",
      "Bi-level PAP Therapy",
      "S/T Therapy",
      "Non-Invasive Ventilation",
    ],

    downloads: [
      {
        label: "Product Brochure (PDF)",
        href: "#",
      },
    ],
  },
  {
    slug: "bmc-g3-a20",
    name: "BMC G3 A20",
    category: "Sleep Therapy",
    categorySlug: "sleep-therapy",
    refCode: "G3 A20 / CPAP",
    coordinates: "",

    shortDescription:
      "Advanced AutoCPAP therapy with smart adaptive pressure response, accurate respiratory event detection, and personalized comfort features.",

    description:
      "The BMC G3 A20 is an AutoCPAP device designed to provide personalized sleep therapy with intelligent event detection, adaptive pressure response, automated comfort functions, and smart humidification.",

    image: "/mainProduct.png",

    gallery: [],

    featured: true,

    imaging: "Smart Adaptive Algorithm",
    application: "Sleep Apnea Management",
    transducerTech: "SmartC / SmartA",

    details: [
      {
        index: "02",
        title: "Smart Adaptive Therapy",
        body: "The G3 dynamically adapts to an ideal starting pressure based on the last 5 effective treatment days and continuously optimizes pressure thresholds throughout long-term therapy.",
        specs: [
          {
            label: "Pressure Response",
            value: "Fast / Standard / Soft",
          },
          {
            label: "Pressure Range",
            value: "4–20 hPa",
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
        body: "Automated comfort functions including Auto On, Auto Off, Auto Ramp, Delay Off, pre-heating, and intelligent humidity and temperature control provide comfortable therapy throughout the night.",
        specs: [
          {
            label: "Water Chamber",
            value: "360 ± 30 mL",
          },
          {
            label: "Humidification",
            value: "Auto / Level 1–5",
          },
          {
            label: "Sound Pressure",
            value: "28 ± 2 dB(A)",
          },
        ],
      },

      {
        index: "04",
        title: "Accurate Event Detection",
        body: "The G3 accurately detects respiratory events including central apneas, hypopneas, Cheyne-Stokes respiration, and flow limitations to provide targeted pressure adjustments.",
        specs: [
          {
            label: "Event Detection",
            value: "Central Apnea / Hypopnea / CSR",
          },
          {
            label: "Pressure Response",
            value: "Targeted Adaptive Response",
          },
          {
            label: "Technology",
            value: "SmartC / SmartA",
          },
        ],
      },

      {
        index: "05",
        title: "Data-Driven Sleep Management",
        body: "PAP Link provides Web, PC, and App solutions for therapy monitoring, parameter settings, data transfer, reports, and personalized therapy management.",
        specs: [
          {
            label: "Connectivity",
            value: "SD Card / iCode QR / Cellular / WiFi",
          },
          {
            label: "Internal Storage",
            value: "Up to 512 days summary data",
          },
          {
            label: "SD Storage",
            value: "Up to 70 days detailed data",
          },
        ],
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
    ],
  },
  {
    slug: "kjr-y51w",
    name: "KCAREU KJR-Y51W",
    category: "Oxygen Therapy",
    categorySlug: "oxygen-therapy",
    refCode: "KJR-Y51W / OXYGEN CONCENTRATOR",
    coordinates: "",

    shortDescription:
      "5 LPM oxygen concentrator delivering 93% ±3% oxygen purity with adjustable flow, LED display, and integrated nebulizer function.",

    description:
      "The KCAREU KJR-Y51W is a 5 LPM oxygen concentrator designed for oxygen therapy, featuring high oxygen purity, adjustable flow control, LED display, nebulization support, and continuous oxygen supply.",

    image: "/homepageProduct.png",

    gallery: [],

    featured: true,

    imaging: "High-Purity Oxygen Concentration",
    application: "Oxygen Therapy",
    transducerTech: "Molecular Sieve Technology",

    details: [
      {
        index: "02",
        title: "High-Purity Oxygen Delivery",
        body: "The KJR-Y51W uses a high-quality molecular sieve to provide concentrated oxygen with adjustable flow for oxygen therapy applications.",
        specs: [
          {
            label: "Oxygen Purity",
            value: "93% ±3%",
          },
          {
            label: "Flow Rate",
            value: "1–5 L/min",
          },
          {
            label: "Outlet Pressure",
            value: "20–70 kPa",
          },
        ],
      },

      {
        index: "03",
        title: "Integrated Nebulizer Function",
        body: "The device includes an integrated nebulizer function and supports nebulization accessories for convenient respiratory therapy.",
        specs: [
          {
            label: "Nebulizer",
            value: "Integrated",
          },
          {
            label: "Display",
            value: "LED",
          },
          {
            label: "Continuous Operation",
            value: "Up to 48 hours",
          },
        ],
      },

      {
        index: "04",
        title: "Compact & Reliable Design",
        body: "The KJR-Y51W combines a compact oxygen concentrator design with low operating noise and practical monitoring features for everyday use.",
        specs: [
          {
            label: "Dimensions",
            value: "345 × 280 × 558 mm",
          },
          {
            label: "Weight",
            value: "15.5 kg",
          },
          {
            label: "Noise Level",
            value: "≤45 dB(A)",
          },
          {
            label: "Rated Power",
            value: "≤400 W",
          },
        ],
      },
    ],

    applications: [
      "Oxygen Therapy",
      "Home Oxygen Therapy",
      "Respiratory Care",
      "Nebulization Therapy",
    ],

    downloads: [
      {
        label: "Product Brochure (PDF)",
        href: "#",
      },
    ],
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
