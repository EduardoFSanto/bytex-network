"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", servico: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Olá! Vim pelo site da Bytex Network.\n\n*Nome:* ${form.nome}\n*E-mail:* ${form.email}\n*Telefone:* ${form.telefone}\n*Serviço de interesse:* ${form.servico}\n*Mensagem:* ${form.mensagem}`
    );
    window.open(`https://wa.me/5511999575756?text=${texto}`, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-fuchsia-100 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            Fale Conosco
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Pronto para{" "}
            <span className="gradient-text">escalar seu negócio?</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Entre em contato agora e descubra como a Bytex Network pode
            transformar sua presença digital em resultados reais.
          </p>

          <div className="space-y-5">
            {[
              { icon: Phone, label: "WhatsApp", value: "(11) 99957-5756" },
              { icon: Mail, label: "E-mail", value: "contato@bytexnetwork.com.br" },
              { icon: MapPin, label: "Localização", value: "São Paulo, SP — Atendemos todo o Brasil" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="text-gray-800 text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-light rounded-2xl p-8 space-y-5 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-500 text-xs mb-1.5 block">Nome</label>
              <input
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
            </div>
            <div>
              <label className="text-gray-500 text-xs mb-1.5 block">Telefone</label>
              <input
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="(11) 99999-9999"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-500 text-xs mb-1.5 block">E-mail</label>
            <input
              required
              type="email"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-gray-500 text-xs mb-1.5 block">Serviço de interesse</label>
            <select
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-purple-400 transition-colors"
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
            >
              <option value="">Selecione um serviço</option>
              <option value="Tráfego Pago">Tráfego Pago</option>
              <option value="Redes Sociais">Redes Sociais</option>
              <option value="Criação de Site">Criação de Site</option>
              <option value="Pacote Completo">Pacote Completo</option>
            </select>
          </div>

          <div>
            <label className="text-gray-500 text-xs mb-1.5 block">Mensagem</label>
            <textarea
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
              placeholder="Conta um pouco sobre seu negócio..."
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-purple"
          >
            {enviado ? "Redirecionando para WhatsApp..." : (
              <><Send size={18} /> Enviar mensagem</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
