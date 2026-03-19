import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import FoerderungSection from "@/components/FoerderungSection";
import IntegrationSection from "@/components/IntegrationSection";
import ServicesSection from "@/components/ServicesSection";
import FrameworkSection from "@/components/FrameworkSection";
import VorgehensmodellSection from "@/components/VorgehensmodellSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <DifferentiationSection />
      <FoerderungSection />
      <IntegrationSection />
      <ServicesSection />
      <FrameworkSection />
      <VorgehensmodellSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
