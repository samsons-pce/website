import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SolarOutput from "./pages/SolarOutput";
import BatteryOutput from "./pages/BatteryOutput";
import InverterOutput from "./pages/InverterOutput";
import "./App.css"

function App() {
  return (
    <Router className = "flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar" element={<SolarOutput />} />
        <Route path="/battery" element={<BatteryOutput />} />
        <Route path="/inverter" element={<InverterOutput />} />
      </Routes>
    </Router>
  );
}

export default App;
