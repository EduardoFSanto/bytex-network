import { CheckCircle2 } from "lucide-react";

const diferenciais = [
  "Estratégias personalizadas para cada cliente",
  "Relatórios transparentes e em tempo real",
  "Time especializado em performance digital",
  "Atendimento próximo e dedicado",
  "Resultados mensuráveis desde o primeiro mês",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — visual */}
        <div className="relative">
          <div className="card-dark rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Anos no mercado", value: "5+" },
                { label: "Clientes satisfeitos", value: "98%" },
                { label: "Projetos entregues", value: "300+" },
                { label: "Cidades atendidas", value: "20+" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/5 rounded-xl p-4 text-center"
                >
                  <p className="gradient-text text-3xl font-black">{value}</p>
                  <p className="text-white/40 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-white/50 text-sm text-center">
                Presente em todo o Brasil, entregando resultados reais.
              </p>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/30 text-purple-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            Sobre a Bytex Network
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Somos a agência que{" "}
            <span className="gradient-text">transforma cliques</span>{" "}
            em clientes
          </h2>

          <p className="text-white/60 text-base leading-relaxed mb-6">
            A Bytex Network nasceu com o propósito de democratizar o marketing
            digital de alta performance. Trabalhamos lado a lado com empresas
            que querem crescer de verdade no ambiente digital — com estratégia,
            criatividade e dados.
          </p>

          <p className="text-white/60 text-base leading-relaxed mb-8">
            Nossa equipe é formada por especialistas em tráfego pago, gestão de
            redes sociais e desenvolvimento web, todos focados em um único
            objetivo: o resultado do seu negócio.
          </p>

          <ul className="space-y-3">
            {diferenciais.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
