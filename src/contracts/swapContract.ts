import { CONTRACT_ADDRESS, RPC_URL } from "../config/config";
import { ethers } from "ethers";
import SwapABI from "./SwapABI.json"; // Asegúrate de tener el ABI correcto en esta ruta

export async function executeSwap(fromToken: string, toToken: string, amount: string) {
  try {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    // ⚠️ En World App, no hay wallet externa: signer debe venir de World ID o integración nativa
    const signer = provider.getSigner?.();
    if (!signer) throw new Error("Signer not available. Ensure wallet or World ID context is connected.");

    const contract = new ethers.Contract(CONTRACT_ADDRESS, SwapABI, signer);

    const parsedAmount = ethers.utils.parseUnits(amount, 18); // Puedes modularizar los decimales si lo deseas

    const tx = await contract.swap(fromToken, toToken, parsedAmount);
    await tx.wait();

    return { success: true, txHash: tx.hash };
  } catch (error: any) {
    console.error("Swap failed:", error);
    return {
      success: false,
      error: error.message || "Unknown error during swap",
    };
  }
}
