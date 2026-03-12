import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import ComoTrabalhamos from "@/components/ComoTrabalhamos";
import Resultados from "@/components/Resultados";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#06071A]">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <ComoTrabalhamos />
      <Resultados />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
