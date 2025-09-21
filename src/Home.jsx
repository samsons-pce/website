import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SolarOutput from "./pages/SolarOutput";
import BatteryOutput from "./pages/BatteryOutput";
import InverterOutput from "./pages/InverterOutput";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
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
