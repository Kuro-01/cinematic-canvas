import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <div className="film-grain" />
      <HeroSection />
      <FeaturedSection />
      <PortfolioSection />
      <StatsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
