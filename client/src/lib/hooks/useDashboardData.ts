"use client";

import { useEffect, useState } from "react";
import { api } from "@/src/lib/api/client";
import { ApiError } from "@/src/lib/api/errors";
import type { AdminProduct } from "@/src/types/product";
import type {
  ApiPerformancePoint,
  ApiStats,
  PerformancePoint,
  StatSummary,
  StatTrend,
  TopProduct,
} from "@/src/types/analytics";

const LOW_STOCK_THRESHOLD = 10;

function trendOf(percent?: number): StatTrend {
  if (!percent) return "flat";
  return percent > 0 ? "up" : "down";
}

function changeLabelOf(percent = 0) {
  const sign = percent > 0 ? "+" : "";
  return `${sign}${percent}% vs last month`;
}

function toStats(s: ApiStats): StatSummary[] {
  return [
    {
      id: "total-products",
      index: "01",
      label: "Total Products",
      value: s.totalProducts.value,
      trend: "flat",
      changeLabel: "In your catalog",
    },
    {
      id: "active-products",
      index: "02",
      label: "Active Products",
      value: s.activeProducts.value,
      trend: "flat",
      changeLabel: "Published on site",
    },
    {
      id: "new-inquiries",
      index: "03",
      label: "New Inquiries",
      value: s.newInquiries.value,
      trend: trendOf(s.newInquiries.changePercent),
      changeLabel: changeLabelOf(s.newInquiries.changePercent),
    },
    {
      id: "service-requests",
      index: "04",
      label: "Service Requests",
      value: s.serviceRequests.value,
      trend: trendOf(s.serviceRequests.changePercent),
      changeLabel: changeLabelOf(s.serviceRequests.changePercent),
    },
  ];
}

function toTopProduct(p: AdminProduct): TopProduct {
  return {
    id: p._id,
    name: p.name,
    category: p.category,
    views: p.views,
    status:
      p.stock <= 0
        ? "backordered"
        : p.stock <= LOW_STOCK_THRESHOLD
          ? "low-stock"
          : "in-stock",
  };
}

export function useDashboardData() {
  const [stats, setStats] = useState<StatSummary[]>([]);
  const [performance, setPerformance] = useState<PerformancePoint[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      api<ApiStats>("/dashboard/stats"),
      api<ApiPerformancePoint[]>("/dashboard/performance"),
      api<AdminProduct[]>("/dashboard/top-products"),
    ])
      .then(([s, p, t]) => {
        setStats(toStats(s));
        setPerformance(
          p.map((point) => ({
            label: point.day,
            views: point.views,
            inquiries: point.inquiries,
          })),
        );
        setTopProducts(t.map(toTopProduct));
      })
      .catch((err) =>
        setError(
          err instanceof ApiError ? err.message : "Failed to load dashboard",
        ),
      )
      .finally(() => setLoading(false));
  }, []);

  return { stats, performance, topProducts, loading, error };
}
