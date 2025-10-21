import React, { useState } from "react";
import { IDKitWidget } from "@worldcoin/idkit";
import { useRouter } from "next/router";

export default function WorldIDGate() {
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  const handleSuccess = (proof: any) => {
    console.log("World ID verified:", proof);
    setVerified(true);
    router.push("/swap");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Verificación Humana</h1>
        <p className="text-lg text-slate-400">
          Para acceder al swap, verifica tu identidad con World ID.
        </p>

        {!verified ? (
          <IDKitWidget
            app_id="your-app-id" // TODO: reemplazar con tu App ID real
            action="swap-access"
            signal="infinichainx"
            onSuccess={handleSuccess}
            handleVerify={() => Promise.resolve()}
          >
            {({ open }) => (
              <button
                onClick={open}
                className="mt-4 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md"
              >
                Verificar con World ID
              </button>
            )}
          </IDKitWidget>
        ) : (
          <p className="text-green-400 font-semibold">✅ Verificación completada</p>
        )}
      </div>
    </div>
  );
}
