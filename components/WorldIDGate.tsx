import { useState } from "react";

interface WorldIDGateProps {
  onVerified: () => void;
}

export function WorldIDGate({ onVerified }: WorldIDGateProps) {
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    // TODO: Integrar con World ID real (ej. Worldcoin IDKit)
    setVerified(true);
    onVerified();
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      {verified ? (
        <p>✅ Identidad verificada con World ID</p>
      ) : (
        <button onClick={handleVerify}>Verificar con World ID</button>
      )}
    </div>
  );
}
