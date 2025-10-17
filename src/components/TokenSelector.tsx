import React from "react";
import { TOKENS } from "../config/config";

export default function TokenSelector({ fromToken, toToken, setFromToken, setToToken }) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <select value={fromToken} onChange={(e) => setFromToken(e.target.value)}>
        {TOKENS.map((token) => (
          <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
        ))}
      </select>
      <select value={toToken} onChange={(e) => setToToken(e.target.value)}>
        {TOKENS.map((token) => (
          <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
        ))}
      </select>
    </div>
  );
}
