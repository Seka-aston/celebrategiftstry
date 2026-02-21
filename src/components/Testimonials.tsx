"use client";

import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

function StarRating() {
  return (
    <div className="flex gap-[4px]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-[18px] h-[18px] fill-[var(--primary)] text-[var(--primary)]" />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, initials }: TestimonialProps) {
  return (
    <div className="flex flex-col gap-[24px] flex-1 p-[32px] border border-[var(--border)]">
      <StarRating />
      <p className="font-body text-[15px] text-[var(--text-light-gray)] leading-[1.7]">
        {quote}
      </p>
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[var(--primary)]">
          <span className="font-body text-[14px] font-semibold text-[var(--primary-foreground)]">
            {initials}
          </span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="font-body text-[14px] font-semibold text-white">
            {name}
          </span>
          <span className="font-body text-[12px] text-[var(--muted-foreground)]">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote: "\"The attention to detail was extraordinary. My wife was moved to tears when she opened her anniversary gift. Cadeau made it truly special.\"",
      name: "James Richardson",
      role: "Loyal Client",
      initials: "JR"
    },
    {
      quote: "\"We use Cadeau for all our executive gifts. The corporate collection is impeccable, and our clients always rave about the presentation.\"",
      name: "Sarah Langford",
      role: "CEO, Meridian Corp",
      initials: "SL"
    },
    {
      quote: "\"I was nervous ordering a luxury gift online, but Cadeau exceeded every expectation. The concierge service helped me choose perfectly.\"",
      name: "Michael Park",
      role: "First-Time Buyer",
      initials: "MP"
    }
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          TESTIMONIALS
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          What Our Clients Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="flex gap-[24px] w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
