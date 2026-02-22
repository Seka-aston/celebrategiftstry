import { Navigation } from "@/components/Navigation";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { VisitUs } from "@/components/contact/VisitUs";
import { FAQSection } from "@/components/contact/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact — Cadeau",
  description:
    "Get in touch with the Cadeau team. Reach our gifting concierge, visit our Madison Avenue atelier, or explore corporate gifting partnerships.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full min-h-full bg-[var(--background)] overflow-x-hidden">
      <Navigation activePage="contact" />
      <ContactHero />
      <ContactSection />
      <VisitUs />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
