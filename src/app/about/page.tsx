import { Navigation } from "@/components/Navigation";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionStats } from "@/components/about/MissionStats";
import { OurTeam } from "@/components/about/OurTeam";
import { OurValues } from "@/components/about/OurValues";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About Us — Cadeau",
  description:
    "The story behind Cadeau — a luxury gifting atelier founded on the belief that every gift tells a story.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-h-full bg-[var(--background)] overflow-x-hidden">
      <Navigation activePage="about" />
      <AboutHero />
      <OurStory />
      <MissionStats />
      <OurTeam />
      <OurValues />
      <FinalCTA />
      <Footer />
    </main>
  );
}
