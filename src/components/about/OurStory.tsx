"use client";

export function OurStory() {
  return (
    <section className="flex items-center gap-[80px] px-[80px] py-[100px] w-full">
      {/* Story Image */}
      <div
        className="w-[520px] h-[440px] rounded bg-cover bg-center flex-shrink-0 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=520&q=80')",
        }}
      />

      {/* Story Text */}
      <div className="flex flex-col gap-[24px] flex-1">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          HOW IT BEGAN
        </span>
        <h2 className="font-display text-[40px] font-semibold text-white">
          A Passion Born from Purpose
        </h2>
        <div className="w-[40px] h-[2px] bg-[var(--primary)]" />
        <p className="font-body text-[15px] text-[#B0B0B0] leading-[1.8]">
          Cadeau was born in 2018 from a simple frustration: why was it so
          difficult to give a truly meaningful gift? Our founder, Sophie Laurent,
          spent years in the luxury hospitality industry and saw firsthand how
          the smallest gestures could create the most lasting impressions.
        </p>
        <p className="font-body text-[15px] text-[var(--muted-foreground)] leading-[1.8]">
          What began as a curated collection of artisan goods has grown into a
          full-service gifting atelier, serving discerning individuals and
          businesses across the world. Every product we carry is personally
          vetted, and every gift is wrapped with the care it deserves.
        </p>
      </div>
    </section>
  );
}
