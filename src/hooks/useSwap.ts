import { useState } from "react";

export default function useSwap() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const swap = async ({ fromToken, toToken, amount }) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Aquí irá la lógica real del contrato
      console.log(`Swapping ${amount} ${fromToken} to ${toToken}`);
      await new Promise((res) => setTimeout(res, 1500)); // Simulación temporal
      setSuccess(true);
    } catch (err) {
      setError("Swap failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return { swap, loading, error, success };
}
