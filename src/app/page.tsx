import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImoveisGrid from "@/components/ImoveisGrid";
import Diferenciais from "@/components/Diferenciais";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImoveisGrid />
        <Diferenciais />
        <Sobre />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
