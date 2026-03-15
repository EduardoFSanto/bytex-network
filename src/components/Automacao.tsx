import { Bot, Zap, MessageSquare, TrendingUp } from "lucide-react";

const itens = [
  {
    icon: Bot,
    titulo: "Atendimento Automático",
    desc: "Chatbots com IA que respondem seus clientes 24h por dia, qualificam leads e agendam reuniões sem intervenção humana.",
  },
  {
    icon: MessageSquare,
    titulo: "Automação no WhatsApp",
    desc: "Integração de IA diretamente no WhatsApp da sua empresa para nutrir, engajar e converter leads automaticamente.",
  },
  {
    icon: Zap,
    titulo: "Fluxos Inteligentes",
    desc: "Criamos fluxos de automação que conectam seu CRM, redes sociais e canais de atendimento em um só lugar.",
  },
  {
    icon: TrendingUp,
    titulo: "Mais Resultados, Menos Trabalho",
    desc: "Com IA cuidando do operacional, sua equipe foca no que importa: fechar negócios e crescer.",
  },
];

export default function Automacao() {
  return (
    <section id="automacao" className="py-24 px-6 relative overflow-hidden">
      {/* glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 border border-purple-500/40 text-purple-400 text-xs font-semibold px-4 py-1.5 rounded-full bg-purple-500/10">
            <Bot size={14} />
            Inteligência Artificial
          </span>
        </div>

        {/* título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Trabalhamos com{" "}
            <span className="gradient-text">Automações de IA</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Integramos inteligência artificial ao seu negócio para automatizar
            processos, escalar o atendimento e gerar mais resultados com menos
            esforço.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((item) => (
            <div
              key={item.titulo}
              className="card-dark rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                {item.titulo}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            <Bot size={18} />
            Quero automatizar meu negócio
          </a>
        </div>
      </div>
    </section>
  );
}
