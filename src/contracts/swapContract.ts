import { ethers } from "ethers";
import { TOKENS } from "../config/config";

// Reemplaza con la dirección y ABI reales del contrato
const SWAP_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
const SWAP_CONTRACT_ABI = [
  "function swap(address fromToken, address toToken, uint256 amount) external",
];

export async function executeSwap(fromToken: string, toToken: string, amount: string) {
  if (!window.ethereum) throw new Error("Wallet not found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(SWAP_CONTRACT_ADDRESS, SWAP_CONTRACT_ABI, signer);

  const from = TOKENS.find((t) => t.symbol === fromToken);
  const to = TOKENS.find((t) => t.symbol === toToken);
  if (!from || !to) throw new Error("Invalid token");

  const parsedAmount = ethers.parseUnits(amount, from.decimals);
  const tx = await contract.swap(from.address, to.address, parsedAmount);
  await tx.wait();
}
