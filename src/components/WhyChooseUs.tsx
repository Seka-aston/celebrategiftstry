"use client";

import { Gem, Gift, Truck, ConciergeBell } from "lucide-react";
import { ReactNode } from "react";

interface ValuePropProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ValueProp({ icon, title, description }: ValuePropProps) {
  return (
    <div className="flex flex-col items-center gap-[20px] flex-1">
      {/* Icon Circle */}
      <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[var(--border-light)] border border-[#C9A96240]">
        {icon}
      </div>
      <h3 className="font-display text-[22px] font-semibold text-white">
        {title}
      </h3>
      <p className="font-body text-[14px] text-[var(--muted-foreground)] leading-[1.6] text-center">
        {description}
      </p>
    </div>
  );
}

export function WhyChooseUs() {
  const valueProps = [
    {
      icon: <Gem className="w-[28px] h-[28px] text-[var(--primary)]" />,
      title: "Hand-Curated Selection",
      description: "Each product is personally vetted by our luxury curators for quality and exclusivity."
    },
    {
      icon: <Gift className="w-[28px] h-[28px] text-[var(--primary)]" />,
      title: "Signature Gift Wrapping",
      description: "Bespoke wrapping with premium materials, ribbons, and a handwritten note."
    },
    {
      icon: <Truck className="w-[28px] h-[28px] text-[var(--primary)]" />,
      title: "White-Glove Delivery",
      description: "Same-day and scheduled delivery with real-time tracking and care."
    },
    {
      icon: <ConciergeBell className="w-[28px] h-[28px] text-[var(--primary)]" />,
      title: "Personal Concierge",
      description: "Dedicated gifting experts to help you find the perfect present every time."
    }
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full bg-[#111111]">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          WHY CADEAU
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          Luxury Gifting, Redefined
        </h2>
        <p className="font-body text-[16px] text-[var(--muted-foreground)]">
          Every detail is considered, from selection to delivery.
        </p>
      </div>

      {/* Value Props Grid */}
      <div className="flex gap-[40px] w-full">
        {valueProps.map((prop, index) => (
          <ValueProp key={index} {...prop} />
        ))}
      </div>
    </section>
  );
}
