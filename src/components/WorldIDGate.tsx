import React, { useEffect } from "react";

export default function WorldIDGate({ onVerify }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developer.worldcoin.org/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="world-id-widget"
      data-theme="light"
      data-type="orb"
      data-action="verify-human"
      data-signal="swap-access"
      data-telemetry="true"
      data-on-success={(verificationResponse) => {
        console.log("World ID verified:", verificationResponse);
        onVerify(true);
      }}
      data-on-error={(error) => {
        console.error("World ID error:", error);
        onVerify(false);
      }}
    />
  );
}
