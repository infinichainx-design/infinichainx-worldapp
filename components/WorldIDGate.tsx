import { useState } from "react";

export function WorldIDGate({ onVerified }: { onVerified: () => void }) {
  const [verified, setVerified] = useState(false);

  function handleVerify() {
    // Simulación de verificación
    setVerified(true);
    onVerified();
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      {verified ? (
        <p>✅ Identidad verificada con World ID</p>
      ) : (
        <button onClick={handleVerify}>Verificar con World ID</button>
      )}
    </div>
  );
}
