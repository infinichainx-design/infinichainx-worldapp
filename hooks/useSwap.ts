import { useState } from "react";
import { ethers } from "ethers";
import { TOKENS, SWAP_CONTRACT_ADDRESS } from "../config";
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
      // 1️⃣ Buscar tokens
      const fromToken = TOKENS.find((t) => t.symbol === fromSymbol);
      const toToken = TOKENS.find((t) => t.symbol === toSymbol);

      if (!fromToken || !toToken) throw new Error("Token not found");
      if (!amount || Number(amount) <= 0) throw new Error("Invalid amount");

      // 2️⃣ Crear contrato swap
      const contract = new ethers.Contract(SWAP_CONTRACT_ADDRESS, swapAbi, signer);
      const amountIn = ethers.parseUnits(amount, fromToken.decimals);
      const minAmountOut = (amountIn * 95n) / 100n; // 5% slippage

      // 3️⃣ Aprobación ERC20
      const erc20Abi = [
        "function approve(address spender, uint256 amount) public returns (bool)",
        "function allowance(address owner, address spender) public view returns (uint256)"
      ];
      const fromTokenContract = new ethers.Contract(fromToken.address, erc20Abi, signer);
      const owner = await signer.getAddress();
      const allowance = await fromTokenContract.allowance(owner, SWAP_CONTRACT_ADDRESS);

      if (allowance < amountIn) {
        const approveTx = await fromTokenContract.approve(SWAP_CONTRACT_ADDRESS, amountIn);
        await approveTx.wait();
      }

      // 4️⃣ Ejecutar swap
      const tx = await contract.swapExactTokensForTokens(
        fromToken.address,
        toToken.address,
        amountIn,
        minAmountOut
      );
      const receipt = await tx.wait();

      setTxHash(receipt.hash);
      console.log("✅ Swap completado:", receipt.hash);
    } catch (err: any) {
      console.error("Swap error:", err);
      setError(err.message || "Swap failed");
    } finally {
      setLoading(false);
    }
  };

  return { swap, loading, error, txHash };
}
