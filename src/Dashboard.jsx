// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dummyData = [
  { time: '00:00', output: 20 },
  { time: '04:00', output: 40 },
  { time: '08:00', output: 60 },
  { time: '12:00', output: 100 },
  { time: '16:00', output: 60 },
  { time: '20:00', output: 30 },
];

function OutputChart({ label }) {
  return (
    <div className="bg-base-200 rounded-lg p-8 shadow-lg w-full max-w-md mx-auto mt-6">
      <h3 className="text-xl font-semibold mb-2">{label} Output</h3>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={dummyData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="output" stroke="#60a5fa" fill="#bfdbfe" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function Dashboard() {
  const [selected, setSelected] = useState(""); // "" = nothing chosen

  return (
    <div className="bg-base-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Energy Dashboard</h1>
        <p className="text-lg">Check outputs for Solar, Battery, and Inverter!</p>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full max-w-xl mb-8">
        <button className="btn btn-primary btn-lg" onClick={() => setSelected("Solar")}>Solar Output</button>
        <button className="btn btn-success btn-lg" onClick={() => setSelected("Battery")}>Battery Output</button>
        <button className="btn btn-warning btn-lg" onClick={() => setSelected("Inverter")}>Inverter Output</button>
      </div>
      {selected && selected !== "Samsons" && <OutputChart label={selected} />}
      {selected === "Samsons" && (
        <div className="bg-base-200 rounded-lg p-10 shadow-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">Samsons</h3>
          <p>This is where your custom Samsons data, stats, or visualization will appear.</p>
        </div>
      )}
    </div>
  );
}
