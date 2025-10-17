import { useState } from "react";
import { ethers } from "ethers";
import { TOKENS } from "../config/config";
import { getSwapRoute, executeSwap } from "../lib/worldswap";

export function useSwap() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  async function swap({
    fromSymbol,
    toSymbol,
    amount,
    signer,
  }: {
    fromSymbol: keyof typeof TOKENS;
    toSymbol: keyof typeof TOKENS;
    amount: string;
    signer: ethers.Signer;
  }) {
    setLoading(true);
    setError(null);
    setTxHash(null);

    try {
      const fromToken = TOKENS[fromSymbol];
      const toToken = TOKENS[toSymbol];

      const route = await getSwapRoute(fromToken, toToken, amount);
      if (!route) throw new Error("No route found");

      const tx = await executeSwap(route, signer);
      const receipt = await tx.wait();

      setTxHash(receipt.transactionHash);
    } catch (err: any) {
      setError(err.message || "Swap failed");
    } finally {
      setLoading(false);
    }
  }

  return { swap, loading, error, txHash };
}
