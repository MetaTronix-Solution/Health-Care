import {
  LayoutGrid,
  Wind,
  Activity,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
import type { ProductCategory } from "@/src/types/product";

/**
 * "All Products" is represented with slug "all" and is handled specially
 * wherever categories are filtered (see ProductsCatalog).
 */
export const categories: ProductCategory[] = [
  { slug: "all", label: "All Products", icon: LayoutGrid },
  { slug: "cpap-bipap", label: "CPAP & BiPAP Devices", icon: Wind },
  { slug: "sleep-diagnostics", label: "Sleep Diagnostics", icon: Activity },
  { slug: "respiratory-care", label: "Respiratory Care", icon: Stethoscope },
  { slug: "patient-monitoring", label: "Patient Monitoring", icon: HeartPulse },
];
