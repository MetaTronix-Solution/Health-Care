import type { Product } from "@/src/types/product";

export const productCategories = [
  { slug: "ultrasound", label: "Ultrasound" },
  { slug: "monitoring", label: "Patient Monitoring" },
  { slug: "surgical", label: "Surgical Robotics" },
  { slug: "imaging", label: "Diagnostic Imaging" },
] as const;

export const products: Product[] = [
  {
    slug: "epiq-elite",
    name: "EPIQ Elite",
    category: "Ultrasound",
    categorySlug: "ultrasound",
    refCode: "REF_001 / DIAGNOSTIC",
    coordinates: "LAT: 47.6062 / LONG: 122.3321",
    shortDescription:
      "Premium ultrasound architecture delivering exceptional clinical performance and workflow efficiency.",
    description:
      "Premium ultrasound system delivering exceptional clinical performance and workflow efficiency for the most demanding diagnostic environments.",
    image:
      "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1600&auto=format&fit=crop",
    ],
    featured: true,
    imaging: "nSIGHT Plus Architecture",
    application: "General & Cardiovascular",
    transducerTech: "nSIGHT",
    details: [
      {
        index: "02",
        title: "Imaging Architecture",
        body: "nSIGHT imaging architecture introduces a totally new approach to forming ultrasound images. Unlike conventional systems that form the image line by line, nSIGHT creates images with superb resolution down to the pixel level.",
        specs: [
          { label: "Frame Rate", value: "Up to 2000 FPS" },
          { label: "Penetration", value: "Enhanced 76%" },
          { label: "Resolution", value: "Pixel-Level" },
        ],
      },
      {
        index: "03",
        title: "Diagnostic Visualization",
        body: "Real-time physiological mapping rendered in high-fidelity environments, giving clinical teams a clear, immediate read on patient status.",
        images: [
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop",
        ],
      },
    ],
    applications: [
      "General Radiology",
      "Cardiovascular",
      "Obstetrics",
      "Point of Care",
    ],
    downloads: [
      { label: "Spec Sheet (PDF)", href: "#" },
      { label: "Clinical Brochure (PDF)", href: "#" },
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
