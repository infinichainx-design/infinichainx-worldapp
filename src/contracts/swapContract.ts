import { CONTRACT_ADDRESS, RPC_URL } from "../config/config";
import { ethers } from "ethers";
import SwapABI from "./SwapABI.json"; // Asegúrate de tener el ABI correcto en esta ruta

export async function executeSwap(fromToken: string, toToken: string, amount: string) {
  try {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, SwapABI, signer);

    const tx = await contract.swap(
      fromToken,
      toToken,
      ethers.utils.parseUnits(amount, 18)
    );

    await tx.wait();
    return { success: true, txHash: tx.hash };
  } catch (error) {
    console.error("Swap failed:", error);
    return { success: false, error };
  }
}
