"use client";
import Header from "@/components/pages/mobile_app/Header";
import HeroSection from "@/components/pages/mobile_app/HeroSection";
import StatsSection from "@/components/pages/mobile_app/StatsSection";
import BenefitsSection from "@/components/pages/mobile_app/BenefitsSection";
import TestimonialsSection from "@/components/pages/mobile_app/TestimonialsSection";
import Footer from "@/components/pages/mobile_app/Footer";
import { LeaderSection } from "@/components/pages/mobile_app/LeaderSection";
import { HelpfulResource } from "@/components/pages/mobile_app/HelpfulResource";
import { Ready } from "@/components/pages/mobile_app/Ready";
import CursorCircle from "@/components/ui/CursorCircle";
import { Helper } from "@/components/ui/Helper";
import HowItWorksSection from "@/components/pages/mobile_app/HowItWorksSection";

export default function MobileHome() {
  return (
    <main className="min-h-screen relative">
      <Helper />
      <div className="screen-animation w-full" />
      <CursorCircle />
      <Header />
      <HeroSection />
      <LeaderSection />
      <StatsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <HelpfulResource />
      <TestimonialsSection />
      <Ready />
      <Footer />
    </main>
  );
}
