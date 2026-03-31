import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      {/* Film grain overlay */}
      <div className="film-grain" />
      
      <HeroSection />
      <PortfolioSection />
      <StatsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
