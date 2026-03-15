const etapas = [
  { num: "01", title: "Diagnóstico", description: "Analisamos seu negócio, concorrência e mercado para entender onde você está e onde quer chegar. Aqui definimos metas reais e mensuráveis." },
  { num: "02", title: "Estratégia", description: "Montamos um plano de ação personalizado com as melhores ferramentas e canais para o seu público e seus objetivos." },
  { num: "03", title: "Execução", description: "Nossa equipe coloca a estratégia em prática: campanhas no ar, conteúdo publicado e site no servidor. Tudo dentro do prazo." },
  { num: "04", title: "Otimização", description: "Monitoramos os resultados em tempo real e ajustamos o que for necessário para garantir o melhor retorno sobre o seu investimento." },
];

export default function ComoTrabalhamos() {
  return (
    <section id="processo" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-100 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            Como Trabalhamos
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Do primeiro contato ao{" "}
            <span className="gradient-text">resultado entregue</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Um processo claro, transparente e focado no seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {etapas.map(({ num, title, description }, index) => (
            <div key={num} className="relative">
              {index < etapas.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-300 to-transparent z-10" />
              )}
              <div className="card-light rounded-2xl p-6 h-full shadow-sm">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-black text-sm">{num}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
