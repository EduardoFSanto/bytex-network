import { ArrowRight, TrendingUp, Users, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/30 text-purple-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            Agência de Performance Digital
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-6">
            Seu negócio{" "}
            <span className="gradient-text">crescendo</span>{" "}
            no digital
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
            A Bytex Network transforma sua presença online em resultados reais.
            Tráfego pago, redes sociais e sites que vendem — tudo em um só lugar.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all glow-purple"
            >
              Começar agora
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            >
              Ver serviços
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { icon: TrendingUp, label: "Campanhas ativas", value: "50+" },
              { icon: Users, label: "Clientes atendidos", value: "120+" },
              { icon: Globe, label: "Sites entregues", value: "80+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <div className="flex items-center gap-2">
                  <Icon size={16} className="text-purple-400" />
                  <span className="text-2xl font-black gradient-text">{value}</span>
                </div>
                <p className="text-white/40 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual card */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Main card */}
            <div className="card-dark rounded-2xl p-6 glow-purple">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Campanha Google Ads</p>
                  <p className="text-white/40 text-xs">Cliente: Loja XYZ</p>
                </div>
                <span className="ml-auto text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-1 rounded-full">
                  +342%
                </span>
              </div>
              <div className="h-24 flex items-end gap-1.5">
                {[30, 45, 35, 55, 70, 60, 80, 95, 75, 100, 85, 110].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm gradient-bg opacity-70"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
              <div className="mt-4 flex justify-between text-xs text-white/40">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dez</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 card-dark rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-fuchsia-600/20 rounded-lg flex items-center justify-center">
                <Users size={16} className="text-fuchsia-400" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Novos seguidores</p>
                <p className="gradient-text text-sm font-black">+12.4K</p>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-5 -right-5 card-dark rounded-xl px-4 py-3">
              <p className="text-white/40 text-xs">ROI médio</p>
              <p className="gradient-text text-lg font-black">8.5x</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
