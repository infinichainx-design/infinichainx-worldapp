import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800/40">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-amber-500 rounded-lg opacity-20" />
              <svg viewBox="0 0 24 24" fill="none" className="relative w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">InfinichainX</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-400">Powered by World Chain</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Plataforma modular de swaps institucionales
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Verificación humana, UX viral, y entrega silenciosa sobre World Chain.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => window.location.href = "/swap"}
                className="inline-flex items-center gap-2 text-lg px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Entrar al Swap
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800/50 hover:border-cyan-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Verificación Humana</h3>
                <p className="text-sm text-slate-400">Seguridad institucional con World ID</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800/50 hover:border-cyan-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">UX Viral</h3>
                <p className="text-sm text-slate-400">Experiencia fluida y rápida</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800/50 hover:border-cyan-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Entrega Silenciosa</h3>
                <p className="text-sm text-slate-400">Transacciones discretas y eficientes</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
