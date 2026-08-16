"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import type { PerformancePoint } from "@/src/types/analytics";

export function AnalyticsOverview({ data }: { data: PerformancePoint[] }) {
  return (
    <div className="rounded-lg border border-neutral-line bg-white">
      <div className="flex flex-col gap-2 border-b border-neutral-line px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-primary">
          Website &amp; Product Performance
        </h2>
        <div className="flex items-center gap-4 text-xs text-neutral-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden />
            Views
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Inquiries
          </span>
        </div>
      </div>
      <div className="h-72 px-4 py-4 sm:px-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid vertical={false} stroke="#dfe4e8" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "#f4f7f9" }}
              contentStyle={{
                borderRadius: 8,
                borderColor: "#dfe4e8",
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="views"
              fill="#2e5bff"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              dataKey="inquiries"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
