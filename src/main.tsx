import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Estilos base globales (opcional)

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Ensure index.html has <div id='root'>");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
