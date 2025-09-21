import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Energy Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-xl">
        <Link to="/solar">
          <button className="btn btn-primary btn-lg w-full">Solar Output</button>
        </Link>
        <Link to="/battery">
          <button className="btn btn-success btn-lg w-full">Battery Output</button>
        </Link>
        <Link to="/inverter">
          <button className="btn btn-warning btn-lg w-full">Inverter Output</button>
        </Link>
      </div>
    </div>
  );
}
