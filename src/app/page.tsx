import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Automacao from "@/components/Automacao";
import ComoTrabalhamos from "@/components/ComoTrabalhamos";
import Resultados from "@/components/Resultados";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Automacao />
      <ComoTrabalhamos />
      <Resultados />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
