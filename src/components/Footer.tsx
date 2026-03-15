import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-black text-gray-900">BYTEX</span>
            <span className="text-xl font-black gradient-text"> NETWORK</span>
            <p className="text-gray-400 text-xs mt-1">
              © {new Date().getFullYear()} Bytex Network. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#sobre" className="hover:text-gray-900 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-gray-900 transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-gray-900 transition-colors">Resultados</a>
            <a href="#contato" className="hover:text-gray-900 transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-300 transition-all"
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
