"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[700px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80')"
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.2) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col justify-center gap-[28px] h-full px-[80px] py-[120px]">
        {/* Badge */}
        <div className="flex items-center gap-[8px] px-[20px] py-[8px] border border-[#C9A96260] w-fit">
          <Sparkles className="w-[14px] h-[14px] text-[var(--primary)]" />
          <span className="font-body text-[13px] font-medium text-[var(--primary)] tracking-[2px]">
            Curated Luxury Since 2019
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[72px] font-semibold text-white leading-[1.05]">
          The Art of<br />Giving Beautifully
        </h1>

        {/* Subheadline */}
        <p className="font-body text-[18px] text-[var(--text-light-gray)] leading-[1.6]">
          Discover our handpicked collection of premium gifts, wrapped<br />
          with care and delivered with elegance.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-[16px]">
          <button className="flex items-center gap-[10px] px-[40px] py-[16px] bg-[var(--primary)]">
            <span className="font-body text-[15px] font-semibold text-[var(--primary-foreground)]">
              Explore Collections
            </span>
            <ArrowRight className="w-[18px] h-[18px] text-[var(--primary-foreground)]" />
          </button>
          <button className="flex items-center gap-[10px] px-[40px] py-[16px] border border-[var(--primary)]">
            <span className="font-body text-[15px] font-medium text-[var(--primary)]">
              Gift Concierge
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
