import MeetTeamSection from "@/components/pages/pages/AboutUs/MeetTeamSection";
import { StatsSection } from "@/components/pages/pages/AboutUs/StatsSection";
import HeroSection from "@/components/pages/pages/Team/HeroSecttion";
import InvestorSection from "@/components/pages/pages/Team/InvestorSection";
import JoinOurTeamSection from "@/components/pages/pages/Team/JoinOurTeamSection";
import JoinUsSection from "@/components/pages/pages/Team/JoinUsSection";

export default function Team() {
  return (
    <>
      <HeroSection />
      <JoinUsSection />
      <MeetTeamSection />
      <StatsSection />
      <InvestorSection />
      <JoinOurTeamSection />
    </>
  );
}
