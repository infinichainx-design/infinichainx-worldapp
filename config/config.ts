
export const WORLD_CHAIN_RPC = "https://rpc.worldchain.dev";

export interface TokenConfig {
  symbol: string;
  name: string;
  address: `0x${string}`;
  decimals: number;
  icon?: string;
}

export const TOKENS: TokenConfig[] = [
  {
    symbol: "WLD",
    name: "Worldcoin",
    address: "0x3a3e3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f", // TODO: reemplazar con dirección real
    decimals: 18,
    icon: "https://cryptologos.cc/logos/worldcoin-wld-logo.png",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    address: "0x4b4e4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f", // TODO: reemplazar con dirección real
    decimals: 6,
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    symbol: "IFX",
    name: "InfinichainX Token",
    address: "0x7a7b7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c", // Dirección del token nativo IFX
    decimals: 18,
    icon: "https://yourdomain.com/assets/ifx-icon.png", // Branding opcional
  },
];
