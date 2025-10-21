import React, { useState } from "react";
import TokenSelector from "./TokenSelector";
import { executeSwap } from "../contracts/swapContract";
import SuccessBanner from "./SuccessBanner";
import ErrorBanner from "./ErrorBanner";

export default function SwapPage() {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [swapResult, setSwapResult] = useState<null | {
    success: boolean;
    txHash?: string;
    error?: string;
  }>(null);

  const handleSwap = async () => {
    if (!fromToken || !toToken || !amount || isNaN(Number(amount))) {
      setSwapResult({ success: false, error: "Datos inválidos para el swap." });
      return;
    }

    try {
      const result = await executeSwap(fromToken, toToken, amount);
      setSwapResult(result);
    } catch (err: any) {
      setSwapResult({ success: false, error: err.message || "Error desconocido" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-slate-900 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-bold mb-4 text-center">🔄 InfinichainX Swap</h2>

      {swapResult?.success && <SuccessBanner txHash={swapResult.txHash} />}
      {swapResult?.success === false && <ErrorBanner message={swapResult.error} />}

      <TokenSelector
        fromToken={fromToken}
        toToken={toToken}
        setFromToken={setFromToken}
        setToToken={setToToken}
      />

      <div className="mb-4">
        <label className="block mb-1 text-sm">Cantidad:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="w-full p-2 rounded bg-slate-800 text-white"
        />
      </div>

      <button
        onClick={handleSwap}
        className="w-full py-3 rounded font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition"
      >
        Ejecutar Swap
      </button>
    </div>
  );
}
