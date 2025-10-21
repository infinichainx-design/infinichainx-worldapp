import React from "react";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/swap");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Bienvenido a InfinichainX
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Plataforma modular de swaps institucionales sobre World Chain.<br />
          Verificación humana, UX viral, y entrega silenciosa.
        </p>
        <button
          onClick={handleEnter}
          className="mt-4 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md"
        >
          Entrar al Swap
        </button>
      </div>
    </div>
  );
}
