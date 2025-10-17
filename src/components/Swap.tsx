import React, { useState } from "react";
import TokenSelector from "./TokenSelector";
import useSwap from "../hooks/useSwap";

export default function Swap() {
  const [fromToken, setFromToken] = useState("WLD");
  const [toToken, setToToken] = useState("USDC");
  const [amount, setAmount] = useState("");
  const { swap, loading, error, success } = useSwap();

  const handleSwap = () => {
    swap({ fromToken, toToken, amount });
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <TokenSelector
        fromToken={fromToken}
        toToken={toToken}
        setFromToken={setFromToken}
        setToToken={setToToken}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ margin: "1rem 0", padding: "0.5rem", width: "100%" }}
      />
      <button onClick={handleSwap} disabled={loading} style={{ padding: "0.75rem", width: "100%" }}>
        {loading ? "Swapping..." : "Swap"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>✅ Swap successful!</p>}
    </div>
  );
}
