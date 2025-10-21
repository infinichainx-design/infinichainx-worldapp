import React from "react";

interface SuccessBannerProps {
  txHash?: string;
  message?: string;
}

export default function SuccessBanner({ txHash, message }: SuccessBannerProps) {
  if (!txHash && !message) return null;

  return (
    <div className="bg-green-600 text-white px-4 py-3 rounded-lg mb-4 text-center shadow-md">
      ✅ {message || "Swap ejecutado con éxito."}
      {txHash && (
        <div className="mt-2 text-sm">
          <a
            href={`https://worldscan.co/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-green-200 transition"
          >
            Ver transacción en WorldScan
          </a>
        </div>
      )}
    </div>
  );
}
