import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

export default function OutputGraphCard({ title, data, color }) {
  return (
    <div className="card bg-base-200 shadow-lg p-6 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            isAnimationActive={false} // animation disabled
              dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
