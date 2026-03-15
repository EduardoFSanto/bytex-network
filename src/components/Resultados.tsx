const numeros = [
  { value: "R$ 2M+", label: "Em verbas gerenciadas" },
  { value: "342%", label: "ROI médio das campanhas" },
  { value: "120+", label: "Clientes ativos" },
  { value: "98%", label: "Taxa de retenção" },
];

const cases = [
  { empresa: "E-commerce de Moda", servico: "Tráfego Pago", resultado: "+480% em vendas online em 3 meses", tag: "Meta Ads" },
  { empresa: "Clínica Odontológica", servico: "Redes Sociais", resultado: "De 800 para 28K seguidores em 6 meses", tag: "Instagram" },
  { empresa: "Imobiliária Regional", servico: "Site + Google Ads", resultado: "12x mais leads qualificados por mês", tag: "Google Ads" },
];

export default function Resultados() {
  return (
    <section id="resultados" className="py-24 relative bg-white">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-50 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            Resultados & Cases
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Números que{" "}
            <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Conheça alguns dos resultados que entregamos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {numeros.map(({ value, label }) => (
            <div key={label} className="card-light rounded-2xl p-6 text-center shadow-sm">
              <p className="gradient-text text-3xl md:text-4xl font-black mb-2">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ empresa, servico, resultado, tag }) => (
            <div key={empresa} className="card-light rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {tag}
                </span>
                <span className="text-gray-400 text-xs">{servico}</span>
              </div>
              <h4 className="text-gray-900 font-bold text-base mb-2">{empresa}</h4>
              <p className="gradient-text font-black text-lg leading-tight">{resultado}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
