import React, { useState } from "react";
import Layout from "../layout/Layout";
import Swap from "../components/Swap";
import TokenSelector from "../components/TokenSelector";
import WorldIDGate from "../components/WorldIDGate";
import useSwap from "../hooks/useSwap";

export default function SwapPage() {
  const [fromToken, setFromToken] = useState("WLD");
  const [toToken, setToToken] = useState("USDC");
  const [amount, setAmount] = useState("");
  const [verified, setVerified] = useState(false);
  const { swap, loading, error, success } = useSwap();

  return (
    <Layout>
      <TokenSelector
        fromToken={fromToken}
        toToken={toToken}
        setFromToken={setFromToken}
        setToToken={setToToken}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      />
      <WorldIDGate onVerify={setVerified} />
      <Swap
        fromToken={fromToken}
        toToken={toToken}
        amount={amount}
        onSwap={() => swap({ fromToken, toToken, amount })}
        verified={verified}
        loading={loading}
        error={error}
        success={success}
      />
    </Layout>
  );
}
