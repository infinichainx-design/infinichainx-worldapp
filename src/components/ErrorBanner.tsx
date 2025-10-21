import React from "react";
import { IFX_THEME } from "../styles/theme";

interface ErrorBannerProps {
  message?: string;
}

export default function ErrorBanner({ message }: ErrorBannerProps) {
  if (!message) return null;

  return (
    <div
      style={{
        backgroundColor: IFX_THEME.colors.error,
        color: "#fff",
        padding: IFX_THEME.spacing.padding,
        borderRadius: "6px",
        marginBottom: IFX_THEME.spacing.gap,
        textAlign: "center",
      }}
    >
      ⚠️ {message}
    </div>
  );
}
