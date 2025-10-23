import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SwapPage from "./pages/SwapPage";

function Home() {
  return <h1>Bienvenido a InfinichainX 🌌</h1>;
}

function About() {
  return <h2>Este es el módulo viral de identidad y reputación.</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/swap" element={<SwapPage />} />
      </Routes>
    </BrowserRouter>
  );
}
