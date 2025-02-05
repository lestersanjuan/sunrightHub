import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./app.css"; // Ensure your CSS file is imported
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DailyReport from "./components/DailyReport/DailyReport";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/DailyReport" element={<DailyReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
