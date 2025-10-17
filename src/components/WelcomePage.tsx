import React from "react";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/swap");
  };

  return (
    <div className="welcome-page">
      <h1>Bienvenido a InfinichainX</h1>
      <p>
        Plataforma modular de swaps institucionales sobre World Chain.<br />
        Verificación humana, UX viral, y entrega silenciosa.
      </p>
      <button onClick={handleEnter}>Entrar al Swap</button>
    </div>
  );
}
