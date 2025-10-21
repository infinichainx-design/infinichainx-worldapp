import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SwapPage from "./pages/SwapPage";

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/swap" element={<SwapPage />} />
      </Routes>
    </Router>
  );
}
