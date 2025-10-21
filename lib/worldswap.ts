import { ethers } from "ethers";
import { TOKENS } from "../config";
import swapAbi from "../contracts/swap.json";

interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  icon?: string;
}

interface SwapRoute {
  from: string;
  to: string;
  amountIn: ethers.BigNumber;
  minAmountOut: ethers.BigNumber;
}

export async function getSwapRoute(
  fromToken: Token,
  toToken: Token,
  amount: string
): Promise<SwapRoute> {
  const amountIn = ethers.utils.parseUnits(amount, fromToken.decimals);
  const minAmountOut = amountIn.mul(98).div(100); // 2% slippage

  return {
    from: fromToken.address,
    to: toToken.address,
    amountIn,
    minAmountOut,
  };
}

export async function executeSwap(route: SwapRoute, signer: ethers.Signer): Promise<string> {
  const contractAddress = "0xYourSwapContractAddress"; // TODO: Replace with actual deployed address
  const contract = new ethers.Contract(contractAddress, swapAbi, signer);

  const tx = await contract.swapExactTokensForTokens(
    route.from,
    route.to,
    route.amountIn,
    route.minAmountOut
  );

  const receipt = await tx.wait();
  return receipt.transactionHash;
}
