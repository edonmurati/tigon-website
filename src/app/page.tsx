import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import VorgehensmodellSection from "@/components/VorgehensmodellSection";
import FoerderungSection from "@/components/FoerderungSection";
import IntegrationSection from "@/components/IntegrationSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <PortfolioSection />
        <DifferentiationSection />
        <VorgehensmodellSection />
        <FoerderungSection />
        <IntegrationSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
