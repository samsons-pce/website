import React from "react";
import { Link } from "react-router-dom";
import OutputGraphCard from "../components/OutputGraphCard";
import { useLiveData } from "../hooks/useLiveData";

const voltageInitial = [
  { time: "00:00", value: 210 },
  { time: "06:00", value: 230 },
  { time: "12:00", value: 240 },
  { time: "18:00", value: 225 },
];

const powerInitial = [
  { time: "00:00", value: 450 },
  { time: "06:00", value: 600 },
  { time: "12:00", value: 900 },
  { time: "18:00", value: 700 },
];

const currentInitial = [
  { time: "00:00", value: 3.0 },
  { time: "06:00", value: 2.5 },
  { time: "12:00", value: 4.2 },
  { time: "18:00", value: 3.3 },
];

export default function BatteryOutput() {
  const voltageData = useLiveData(voltageInitial);
  const powerData = useLiveData(powerInitial);
  const currentData = useLiveData(currentInitial);

  return (
    <div className="min-h-screen bg-base-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Battery Output</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <OutputGraphCard title="Voltage (V)" data={voltageData} color="#3b82f6" />
        <OutputGraphCard title="Power (W)" data={powerData} color="#22c55e" />
        <OutputGraphCard title="Current (A)" data={currentData} color="#f59e0b" />
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/" className="btn btn-outline btn-accent">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
