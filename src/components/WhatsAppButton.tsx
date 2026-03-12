import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Vim pelo site da Bytex Network e gostaria de saber mais."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} className="text-white fill-white" />
    </a>
  );
}
