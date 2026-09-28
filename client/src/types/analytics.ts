export type PerformancePoint = {
  label: string;
  views: number;
  inquiries: number;
};

export type StatTrend = "up" | "down" | "flat";

export type StatSummary = {
  id: string;
  label: string;
  index: string;
  value: number;
  trend: StatTrend;
  changeLabel: string;
};

export type TopProduct = {
  id: string;
  name: string;
  category: string;
  views: number;
  status: "in-stock" | "low-stock" | "backordered";
};

// Raw backend responses (GET /dashboard/*)

export type ApiStat = {
  value: number;
  changePercent?: number;
};

export type ApiStats = {
  totalProducts: ApiStat;
  activeProducts: ApiStat;
  newInquiries: ApiStat;
  serviceRequests: ApiStat;
};

export type ApiPerformancePoint = {
  day: string;
  views: number;
  inquiries: number;
};
