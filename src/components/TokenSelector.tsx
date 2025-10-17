import React from "react";
import { TOKENS } from "../config/config";

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
    <div className="token-selector">
      <div>
        <label>From:</label>
        <select value={fromToken} onChange={(e) => setFromToken(e.target.value)}>
          {TOKENS.map((token) => (
            <option key={token.symbol} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>To:</label>
        <select value={toToken} onChange={(e) => setToToken(e.target.value)}>
          {TOKENS.map((token) => (
