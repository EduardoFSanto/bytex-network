import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Você é a assistente virtual da Bytex Network, uma agência digital brasileira especializada em:

1. **Tráfego Pago** — Campanhas no Google Ads e Meta Ads (Facebook/Instagram) para gerar leads e vendas reais.
2. **Gestão de Redes Sociais** — Criação de conteúdo, design de posts, agendamento e relatórios de desempenho para Instagram, Facebook e LinkedIn.
3. **Criação de Sites** — Sites institucionais, landing pages e lojas virtuais modernos, rápidos e otimizados para SEO.

Suas regras:
- Responda SEMPRE em português do Brasil, de forma simpática, objetiva e profissional.
- Seu objetivo é entender a necessidade do visitante e qualificá-lo como lead.
- Faça no máximo 1 pergunta por mensagem.
- Quando o visitante demonstrar interesse real, sugira continuar a conversa pelo WhatsApp: "Posso te conectar agora com nossa equipe pelo WhatsApp para um diagnóstico gratuito! Quer isso?"
- Se o visitante confirmar, responda exatamente: "REDIRECIONAR_WHATSAPP"
- Não invente preços ou promessas específicas.
- Não fale sobre concorrentes.
- Mantenha as respostas curtas (máx. 3 linhas).`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "API key não configurada." },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content ?? "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Erro na API de chat:", error);
    return NextResponse.json(
      { error: "Erro ao processar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
