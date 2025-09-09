import HeroSection from "@/components/pages/pages/AboutUs/HeroSection";
import MeetTeamSection from "@/components/pages/pages/AboutUs/MeetTeamSection";
import MissionSection from "@/components/pages/pages/AboutUs/MissionSection";
import ReadyBoostSection from "@/components/pages/pages/AboutUs/ReadyBoostSection";
import { StatsSection } from "@/components/pages/pages/AboutUs/StatsSection";
import TestimonialsSection from "@/components/pages/pages/AboutUs/TestimonialsSection";

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <MeetTeamSection />
      <TestimonialsSection />
      <ReadyBoostSection />
    </>
  );
}
