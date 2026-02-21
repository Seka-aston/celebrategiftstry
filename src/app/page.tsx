import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-full bg-[var(--background)] overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
