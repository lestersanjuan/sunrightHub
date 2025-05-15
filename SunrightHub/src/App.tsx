import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DailyReport from "./components/DailyReport/DailyReport";
import Inventory from "./components/Inventory/Inventory";
import Assessment from "./components/Assessment/Assessment";
import Schedule from "./components/Schedule/Schedule";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/DailyReport" element={<DailyReport />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/NavBar" element={<DailyReport />} />
        <Route path="/Assessment" element = {<Assessment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
