"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WHATSAPP_URL =
  "https://wa.me/5511999575756?text=Olá! Vim pelo chat do site da Bytex Network e quero saber mais.";

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Olá! 👋 Sou a assistente virtual da Bytex Network. Como posso te ajudar hoje? Está procurando mais clientes, melhorar suas redes sociais ou ter um site novo?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      const reply: string = data.reply ?? data.error ?? "Erro inesperado.";

      if (reply === "REDIRECIONAR_WHATSAPP") {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Ótimo! Te redirecionando para o nosso WhatsApp agora. 🚀",
          },
        ]);
        setTimeout(() => window.open(WHATSAPP_URL, "_blank"), 1200);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Não consegui responder agora. Tente falar conosco pelo WhatsApp!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 gradient-bg rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 hover:opacity-90 transition-all hover:scale-110"
        aria-label="Abrir chat"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <Bot size={24} className="text-white" />
        )}
      </button>

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-44 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-white/10">
          {/* Header */}
          <div className="gradient-bg px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Bytex IA</p>
              <p className="text-white/70 text-xs">Responde em segundos</p>
            </div>
            <span className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
          </div>

          {/* Mensagens */}
          <div className="bg-[#0D0F26] flex-1 p-4 space-y-3 overflow-y-auto max-h-72">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "gradient-bg text-white rounded-br-sm"
                      : "bg-white/08 text-white/90 border border-white/10 rounded-bl-sm"
                  }`}
                  style={
                    msg.role === "assistant"
                      ? { background: "rgba(255,255,255,0.06)" }
                      : {}
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-3 py-2 rounded-xl rounded-bl-sm border border-white/10 text-white/60 text-sm flex items-center gap-2"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <Loader2 size={14} className="animate-spin" />
                  Digitando...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-[#0D0F26] border-t border-white/10 px-3 py-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-white/05 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-purple-500/60 transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-9 h-9 gradient-bg rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
