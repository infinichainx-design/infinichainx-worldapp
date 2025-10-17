import React from "react";
import Layout from "../layout/Layout";

export default function WelcomePage({ onEnter }) {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Bienvenido a InfinichainX</h2>
        <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
          Plataforma modular de swaps institucionales sobre World Chain. Verificación humana, UX viral, y entrega silenciosa.
        </p>
        <button
          onClick={onEnter}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#22D3EE",
            color: "#0F172A",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Entrar al Swap
        </button>
      </div>
    </Layout>
  );
}
