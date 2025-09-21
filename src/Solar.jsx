import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy data (replace with real sensor data)
const data = [
  { time: "10 AM", voltage: 12, current: 5, power: 60 },
  { time: "11 AM", voltage: 14, current: 6, power: 84 },
  { time: "12 PM", voltage: 16, current: 7, power: 112 },
  { time: "1 PM", voltage: 15, current: 6.5, power: 97.5 },
];

export default function Solar() {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Solar</h1>

      <div className="flex flex-col gap-10 items-center">
        {/* Voltage Graph */}
        <div className="card w-full lg:w-4/5 bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Voltage</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="voltage" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Current Graph */}
        <div className="card w-full lg:w-4/5 bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Current</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="current" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Power Graph */}
        <div className="card w-full lg:w-4/5 bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Power</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="power" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
