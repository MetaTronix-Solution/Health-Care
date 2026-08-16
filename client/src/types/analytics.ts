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
