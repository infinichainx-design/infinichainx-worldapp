import React from "react";
import { TOKENS } from "../config";

interface TokenSelectorProps {
  fromToken: string;
  toToken: string;
  setFromToken: (value: string) => void;
  setToToken: (value: string) => void;
}

export default function TokenSelector({
  fromToken,
  toToken,
  setFromToken,
  setToToken,
}: TokenSelectorProps) {
  return (
    <div className="mb-4 space-y-4">
      <div>
        <label className="block mb-1 text-sm text-white">De:</label>
        <select
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 text-white"
        >
          {TOKENS.map((token) => (
            <option key={token.symbol} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm text-white">A:</label>
        <select
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 text-white"
        >
          {TOKENS.map((token) => (
            <option key={token.symbol} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
