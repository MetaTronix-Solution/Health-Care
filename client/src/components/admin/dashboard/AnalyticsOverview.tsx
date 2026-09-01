"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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
            <span className="h-0.5 w-4 rounded-full bg-secondary" aria-hidden />
            Views
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="h-0.5 w-4 rounded-full bg-orange-500"
              aria-hidden
            />
            Inquiries
          </span>
        </div>
      </div>
      <div className="h-72 px-4 py-4 sm:px-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#eef1f4" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              width={40}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              width={40}
            />
            <Tooltip
              cursor={{ stroke: "#dfe4e8", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 8,
                borderColor: "#dfe4e8",
                fontSize: 12,
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="views"
              stroke="#2e5bff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="inquiries"
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
