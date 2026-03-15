"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Automação IA", href: "#automacao" },
  { label: "Como Trabalhamos", href: "#processo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tight text-gray-900">BYTEX</span>
          <span className="text-2xl font-black tracking-tight gradient-text"> NETWORK</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Falar Conosco
        </a>

        <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/98 border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-md">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-gray-900 text-base" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contato" className="gradient-bg text-white text-sm font-semibold px-5 py-3 rounded-full text-center" onClick={() => setOpen(false)}>
            Falar Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
