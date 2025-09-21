import React from "react";
import { Link } from "react-router-dom";
import OutputGraphCard from "../components/OutputGraphCard";
import { useLiveData } from "../hooks/useLiveData";

const voltageInitial = [
  { time: "00:00", value: 220 },
  { time: "06:00", value: 235 },
  { time: "12:00", value: 250 },
  { time: "18:00", value: 240 },
];

const powerInitial = [
  { time: "00:00", value: 500 },
  { time: "06:00", value: 650 },
  { time: "12:00", value: 1200 },
  { time: "18:00", value: 900 },
];

const currentInitial = [
  { time: "00:00", value: 3.5 },
  { time: "06:00", value: 2.7 },
  { time: "12:00", value: 4.8 },
  { time: "18:00", value: 3.6 },
];

export default function SolarOutput() {
  const voltageData = useLiveData(voltageInitial);
  const powerData = useLiveData(powerInitial);
  const currentData = useLiveData(currentInitial);

  return (
    <div className="min-h-screen bg-base-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Solar Output</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <OutputGraphCard title="Voltage (V)" data={voltageData} color="#60a5fa" />
        <OutputGraphCard title="Power (W)" data={powerData} color="#4ade80" />
        <OutputGraphCard title="Current (A)" data={currentData} color="#fbbf24" />
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/" className="btn btn-outline btn-accent">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
