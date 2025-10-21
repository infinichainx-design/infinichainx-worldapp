import React, { ReactNode } from "react";
import { IFX_THEME } from "../styles/theme";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        backgroundColor: IFX_THEME.colors.background,
        color: IFX_THEME.colors.primary,
        fontFamily: IFX_THEME.font.family,
        padding: IFX_THEME.spacing.padding,
        minHeight: "100vh",
      }}
    >
      <header style={{ marginBottom: IFX_THEME.spacing.gap }}>
        <h1 style={{ fontSize: IFX_THEME.font.size.heading }}>InfinichainX Swap</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
