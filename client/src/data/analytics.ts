import type {
  PerformancePoint,
  StatSummary,
  TopProduct,
} from "@/src/types/analytics";

export const statSummaries: StatSummary[] = [
  {
    id: "total-products",
    label: "Total Products",
    index: "01",
    value: 1248,
    trend: "up",
    changeLabel: "+12.5% vs last month",
  },
  {
    id: "active-products",
    label: "Active Products",
    index: "02",
    value: 982,
    trend: "up",
    changeLabel: "+3.2% vs last month",
  },
  {
    id: "new-inquiries",
    label: "New Inquiries",
    index: "03",
    value: 456,
    trend: "down",
    changeLabel: "-1.5% vs last month",
  },
  {
    id: "service-requests",
    label: "Service Requests",
    index: "04",
    value: 89,
    trend: "up",
    changeLabel: "+8.9% vs last month",
  },
];

export const performanceSeries: PerformancePoint[] = [
  { label: "Mon", views: 320, inquiries: 42 },
  { label: "Tue", views: 480, inquiries: 58 },
  { label: "Wed", views: 410, inquiries: 51 },
  { label: "Thu", views: 610, inquiries: 74 },
  { label: "Fri", views: 540, inquiries: 66 },
  { label: "Sat", views: 690, inquiries: 82 },
];

export const topProducts: TopProduct[] = [
  {
    id: "prod-cardiomax",
    name: "CardioMax Defibrillator",
    category: "Emergency Care",
    views: 14250,
    status: "in-stock",
  },
  {
    id: "prod-surgiscalp",
    name: "SurgiScalp Precision Kit",
    category: "Surgical Instruments",
    views: 9840,
    status: "in-stock",
  },
  {
    id: "prod-neuroscan",
    name: "NeuroScan Pro MRI Component",
    category: "Imaging",
    views: 6520,
    status: "low-stock",
  },
  {
    id: "prod-respiralife",
    name: "RespiraLife Ventilator v2",
    category: "Respiratory",
    views: 5100,
    status: "backordered",
  },
];
