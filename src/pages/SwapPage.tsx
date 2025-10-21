import React, { useState } from "react";
import Layout from "../layout/Layout";
import Swap from "../components/Swap";
import TokenSelector from "../components/TokenSelector";
import WorldIDGate from "../components/WorldIDGate";
import useSwap from "../hooks/useSwap";
import ErrorBanner from "../components/ErrorBanner";
import SuccessBanner from "../components/SuccessBanner";

export default function SwapPage() {
  const [fromToken, setFromToken] = useState<string>("WLD");
  const [toToken, setToToken] = useState<string>("USDC");
  const [amount, setAmount] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);

  const { swap, loading, error, success, txHash } = useSwap();

  return (
    <Layout>
      {error && <ErrorBanner message={error} />}
      {success && <SuccessBanner message="Swap successful!" txHash={txHash} />}

      <TokenSelector
        fromToken={fromToken}
        toToken={toToken}
        setFromToken={setFromToken}
        setToToken={setToToken}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: "0.5rem",
          fontSize: "1rem",
          width: "100%",
          maxWidth: "300px",
        }}
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
