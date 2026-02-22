"use client";

import { ArrowRight } from "lucide-react";

export function VisitUs() {
  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full bg-[#111111]">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          VISIT OUR ATELIER
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          Experience Cadeau in Person
        </h2>
        <p className="font-body text-[16px] text-[var(--muted-foreground)] text-center leading-[1.7] max-w-[600px]">
          Step into our flagship atelier on Madison Avenue, where our curators
          will guide you through our finest collections.
        </p>
      </div>

      {/* Map + Details */}
      <div className="flex items-center gap-[48px] w-full">
        {/* Map Image */}
        <div
          className="flex-1 h-[400px] rounded overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          }}
        />

        {/* Location Details */}
        <div className="flex flex-col gap-[32px] w-[440px] flex-shrink-0">
          {/* Address */}
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-display text-[24px] font-semibold text-white">
              Flagship Atelier
            </h3>
            <p className="font-body text-[15px] text-[var(--muted-foreground)] leading-[1.8]">
              142 Madison Avenue
              <br />
              New York, NY 10016
              <br />
              United States
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-display text-[24px] font-semibold text-white">
              Atelier Hours
            </h3>
            <p className="font-body text-[15px] text-[var(--muted-foreground)] leading-[1.8]">
              Monday - Friday: 10:00 AM - 7:00 PM
              <br />
              Saturday: 11:00 AM - 6:00 PM
              <br />
              Sunday: By appointment only
            </p>
          </div>

          {/* Book Button */}
          <button className="flex items-center justify-center gap-[10px] px-[32px] py-[14px] bg-[var(--primary)] w-fit hover:opacity-90 transition-opacity">
            <span className="font-body text-[14px] font-semibold text-[var(--primary-foreground)]">
              Book a Private Viewing
            </span>
            <ArrowRight className="w-[16px] h-[16px] text-[var(--primary-foreground)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
