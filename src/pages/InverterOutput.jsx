import React from "react";
import { Link } from "react-router-dom";
import OutputGraphCard from "../components/OutputGraphCard";

const voltageData = [
  { time: "00:00", value: 225 },
  { time: "06:00", value: 240 },
  { time: "12:00", value: 255 },
  { time: "18:00", value: 245 },
];

const powerData = [
  { time: "00:00", value: 520 },
  { time: "06:00", value: 680 },
  { time: "12:00", value: 1100 },
  { time: "18:00", value: 950 },
];

const currentData = [
  { time: "00:00", value: 3.2 },
  { time: "06:00", value: 3.0 },
  { time: "12:00", value: 4.5 },
  { time: "18:00", value: 3.8 },
];

export default function InverterOutput() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Inverter Output</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <OutputGraphCard title="Voltage (V)" data={voltageData} color="#2563eb" />
        <OutputGraphCard title="Power (W)" data={powerData} color="#16a34a" />
        <OutputGraphCard title="Current (A)" data={currentData} color="#d97706" />
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/" className="btn btn-outline btn-accent">Back to Home</Link>
      </div>
    </div>
  );
}
