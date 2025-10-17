import React, { useState } from "react";
import TokenSelector from "./TokenSelector";
import { executeSwap } from "../contracts/swapContract";
import SuccessBanner from "./SuccessBanner";
import ErrorBanner from "./ErrorBanner";

export default function SwapPage() {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [swapResult, setSwapResult] = useState<null | { success: boolean; txHash?: string; error?: any }>(null);

  const handleSwap = async () => {
    const result = await executeSwap(fromToken, toToken, amount);
    setSwapResult(result);
  };

  return (
    <div className="swap-page">
      <h2>InfinichainX Swap</h2>

      <TokenSelector
        fromToken={fromToken}
        toToken={toToken}
        setFromToken={setFromToken}
        setToToken={setToToken}
      />

      <div>
        <label>Amount:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <button onClick={handleSwap}>Swap</button>

      {swapResult?.success && <SuccessBanner txHash={swapResult.txHash} />}
      {swapResult?.success === false && <ErrorBanner error={swapResult.error} />}
    </div>
  );
}
