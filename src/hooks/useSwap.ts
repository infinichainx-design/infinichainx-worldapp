import { useState } from "react";
import { executeSwap } from "../contracts/swapContract";

type SwapParams = {
  fromToken: string;
  toToken: string;
  amount: string;
};

export default function useSwap() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [txHash, setTxHash] = useState("");

  const swap = async ({ fromToken, toToken, amount }: SwapParams) => {
    setLoading(true);
    setError("");
    setSuccess(false);
    setTxHash("");

    try {
      const result = await executeSwap(fromToken, toToken, amount);
      if (result.success) {
        setSuccess(true);
        setTxHash(result.txHash);
      } else {
        setError(result.error || "Swap failed. Check token settings.");
      }
    } catch (err: any) {
      console.error("Swap error:", err);
      setError(err.message || "Unexpected error during swap.");
    } finally {
      setLoading(false);
    }
  };

  return { swap, loading, error, success, txHash };
}
