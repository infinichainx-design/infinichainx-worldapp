import { ethers } from "ethers";
import { TOKENS } from "../config/config";

export async function getSwapRoute(
  fromToken: typeof TOKENS[keyof typeof TOKENS],
  toToken: typeof TOKENS[keyof typeof TOKENS],
  amount: string
): Promise<any> {
  // Simulación de ruta directa
  return {
    from: fromToken.address,
    to: toToken.address,
    amountIn: ethers.utils.parseUnits(amount, fromToken.decimals),
    minAmountOut: ethers.utils.parseUnits(amount, toToken.decimals).mul(98).div(100), // 2% slippage
  };
}

export async function executeSwap(route: any, signer: ethers.Signer) {
  // Simulación de transacción
  const tx = await signer.sendTransaction({
    to: route.to,
    value: route.amountIn,
  });

  return tx;
}
