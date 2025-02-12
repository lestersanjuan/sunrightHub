import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./app.css"; // Ensure your CSS file is imported
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DailyReport from "./components/DailyReport/DailyReport";
import Inventory from "./components/Inventory/Inventory";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/DailyReport" element={<DailyReport />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/NavBar" element={<DailyReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
