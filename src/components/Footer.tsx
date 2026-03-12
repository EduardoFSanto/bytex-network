import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-xl font-black text-white">BYTEX</span>
            <span className="text-xl font-black gradient-text"> NETWORK</span>
            <p className="text-white/30 text-xs mt-1">
              © {new Date().getFullYear()} Bytex Network. Todos os direitos reservados.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 card-dark rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/50 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
