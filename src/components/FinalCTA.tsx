"use client";

import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="flex flex-col items-center gap-[32px] px-[200px] py-[100px] w-full bg-[#111111] border border-[#C9A96220]">
      {/* Divider */}
      <div className="w-[60px] h-[2px] bg-[var(--primary)]" />

      {/* Title */}
      <h2 className="font-display text-[48px] font-semibold text-white">
        Ready to Gift Beautifully?
      </h2>

      {/* Subtitle */}
      <p className="font-body text-[17px] text-[var(--muted-foreground)] text-center">
        Join thousands of discerning gift-givers who trust Cadeau for life&apos;s most important moments.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-[16px]">
        <button className="flex items-center gap-[10px] px-[48px] py-[18px] bg-[var(--primary)]">
          <span className="font-body text-[16px] font-semibold text-[var(--primary-foreground)]">
            Start Shopping
          </span>
          <ArrowRight className="w-[20px] h-[20px] text-[var(--primary-foreground)]" />
        </button>
        <button className="flex items-center gap-[10px] px-[48px] py-[18px] border border-[var(--primary)]">
          <span className="font-body text-[16px] font-medium text-[var(--primary)]">
            Book a Concierge
          </span>
        </button>
      </div>
    </section>
  );
}
