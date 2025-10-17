import { useState } from "react";
import { ethers } from "ethers";
import { useSwap } from "../hooks/useSwap";
import { WorldIDGate } from "./WorldIDGate";
import { TokenSelector } from "./TokenSelector";

export function Swap() {
  const [fromToken, setFromToken] = useState<"IFX" | "STRX">("IFX");
  const [toToken, setToToken] = useState<"IFX" | "STRX">("STRX");
  const [amount, setAmount] = useState("0.01");
  const [verified, setVerified] = useState(false);
  const { swap, loading, error, txHash } = useSwap();

  async function handleSwap() {
    if (!window.ethereum) return alert("Wallet not found");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    await swap({
      fromSymbol: fromToken,
      toSymbol: toToken,
      amount,
      signer,
    });
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Swap Tokens</h2>

      <WorldIDGate onVerified={() => setVerified(true)} />

      {verified && (
        <>
          <TokenSelector onSelect={setFromToken} />
          <TokenSelector onSelect={setToToken} />

          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            style={{ width: "100%", marginBottom: "1rem" }}
          />

          <button onClick={handleSwap} disabled={loading}>
            {loading ? "Swapping..." : "Swap"}
          </button>

          {error && <p style={{ color: "red" }}>❌ {error}</p>}
          {txHash && <p>✅ Tx: {txHash.slice(0, 10)}...</p>}
        </>
      )}
    </div>
  );
}
