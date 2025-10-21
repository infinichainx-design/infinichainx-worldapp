import { useState } from "react";
import { ethers } from "ethers";
import { TOKENS } from "../config";
import swapAbi from "../contracts/swap.json";

interface SwapParams {
  fromSymbol: string;
  toSymbol: string;
  amount: string;
  signer: ethers.Signer;
}

export function useSwap() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const swap = async ({ fromSymbol, toSymbol, amount, signer }: SwapParams) => {
    setLoading(true);
    setError(null);
    setTxHash(null);

    try {
      const fromToken = TOKENS.find((t) => t.symbol === fromSymbol);
      const toToken = TOKENS.find((t) => t.symbol === toSymbol);

      if (!fromToken || !toToken) {
        throw new Error("Token not found");
      }

      const contractAddress = "0xYourSwapContractAddress"; // TODO: Replace with actual deployed address
      const contract = new ethers.Contract(contractAddress, swapAbi, signer);

      const amountIn = ethers.utils.parseUnits(amount, fromToken.decimals);
      const minAmountOut = amountIn.mul(95).div(100); // 5% slippage protection

      const tx = await contract.swapExactTokensForTokens(
        fromToken.address,
        toToken.address,
        amountIn,
        minAmountOut
      );

      const receipt = await tx.wait();
      setTxHash(receipt.transactionHash);
    } catch (err: any) {
      console.error("Swap error:", err);
      setError(err.message || "Swap failed");
    } finally {
      setLoading(false);
    }
  };

  return { swap, loading, error, txHash };
}
