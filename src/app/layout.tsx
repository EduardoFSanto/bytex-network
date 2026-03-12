import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bytex Network — Agência de Tráfego Pago, Redes Sociais e Sites",
  description:
    "A Bytex Network é uma agência digital especializada em tráfego pago, gestão de redes sociais e criação de sites. Resultados reais para o seu negócio.",
  keywords: "tráfego pago, redes sociais, criação de sites, agência digital, marketing digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
