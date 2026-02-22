"use client";

import { Gem, Heart, Leaf } from "lucide-react";
import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center gap-[20px] flex-1">
      <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#1A1A1A] border border-[#C9A96240]">
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

export function OurValues() {
  const values: ValueCardProps[] = [
    {
      icon: <Gem className="w-[24px] h-[24px] text-[var(--primary)]" />,
      title: "Excellence",
      description:
        "We never settle for ordinary. Every detail, from sourcing to delivery, is held to the highest standard.",
    },
    {
      icon: <Heart className="w-[24px] h-[24px] text-[var(--primary)]" />,
      title: "Personal Touch",
      description:
        "Behind every gift is a human connection. We take the time to understand the story behind each occasion.",
    },
    {
      icon: <Leaf className="w-[24px] h-[24px] text-[var(--primary)]" />,
      title: "Sustainability",
      description:
        "We partner with artisans who share our commitment to ethical sourcing and environmentally conscious practices.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full bg-[#111111]">
      {/* Values Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          OUR VALUES
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          What Drives Us Every Day
        </h2>
      </div>

      {/* Values Grid */}
      <div className="flex gap-[40px] w-full">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  );
}
