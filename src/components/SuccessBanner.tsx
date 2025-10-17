import React from "react";

interface SuccessBannerProps {
  txHash: string;
}

export default function SuccessBanner({ txHash }: SuccessBannerProps) {
  return (
    <div className="success-banner">
      ✅ Swap ejecutado con éxito.<br />
      <a
        href={`https://worldscan.co/tx/${txHash}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver transacción en WorldScan
      </a>
    </div>
  );
}
