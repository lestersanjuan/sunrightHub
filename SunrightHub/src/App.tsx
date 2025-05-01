import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./app.css"; // Ensure your CSS file is imported
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DailyReport from "./components/DailyReport/DailyReport";
import Inventory from "./components/Inventory/Inventory";
import Assessment from "./components/Assessment/Assessment";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/DailyReport" element={<DailyReport />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/NavBar" element={<DailyReport />} />
        <Route path="/Assessment" element = {<Assessment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
