import { useState } from "react";
import { executeSwap } from "../contracts/swapContract";

export default function useSwap() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const swap = async ({ fromToken, toToken, amount }) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await executeSwap(fromToken, toToken, amount);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Swap failed. Check wallet and token settings.");
    } finally {
      setLoading(false);
    }
  };

  return { swap, loading, error, success };
}
