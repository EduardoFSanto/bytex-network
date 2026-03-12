import { TrendingUp, Users, Globe, ArrowRight } from "lucide-react";

const servicos = [
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    subtitle: "Google Ads & Meta Ads",
    description:
      "Campanhas inteligentes no Google, Facebook e Instagram que atraem clientes prontos para comprar. Otimização contínua para maximizar seu retorno.",
    features: [
      "Google Search & Display",
      "Meta Ads (Facebook & Instagram)",
      "Remarketing avançado",
      "Relatórios de performance",
    ],
    color: "purple",
  },
  {
    icon: Users,
    title: "Redes Sociais",
    subtitle: "Gestão Completa",
    description:
      "Conteúdo estratégico, planejamento editorial e engajamento real para fazer sua marca crescer nas principais redes sociais.",
    features: [
      "Criação de conteúdo",
      "Planejamento editorial",
      "Gestão de stories e reels",
      "Análise de métricas",
    ],
    color: "fuchsia",
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    subtitle: "Sites que Convertem",
    description:
      "Sites modernos, rápidos e responsivos projetados para transformar visitantes em clientes. Do design ao desenvolvimento, entregamos tudo.",
    features: [
      "Design exclusivo",
      "Responsivo e rápido",
      "Otimizado para SEO",
      "Integração com WhatsApp",
    ],
    color: "purple",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/30 text-purple-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">dominar o digital</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Serviços integrados de marketing digital para empresas que buscam
            crescimento real e sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicos.map(({ icon: Icon, title, subtitle, description, features }) => (
            <div
              key={title}
              className="card-dark rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6 glow-purple">
                <Icon size={26} className="text-white" />
              </div>

              <p className="text-purple-300 text-xs font-medium mb-1">{subtitle}</p>
              <h3 className="text-white text-xl font-black mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {description}
              </p>

              <ul className="space-y-2 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 gradient-bg rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="mt-auto flex items-center gap-2 text-purple-400 text-sm font-semibold group-hover:text-white transition-colors"
              >
                Saber mais <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
