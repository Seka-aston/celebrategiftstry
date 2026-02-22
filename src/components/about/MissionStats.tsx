"use client";

interface StatProps {
  number: string;
  label: string;
}

function Stat({ number, label }: StatProps) {
  return (
    <div className="flex flex-col items-center gap-[8px] flex-1 py-[40px] px-[24px] rounded border border-[#C9A96220]">
      <span className="font-display text-[48px] font-bold text-[var(--primary)]">
        {number}
      </span>
      <span className="font-body text-[14px] text-[var(--muted-foreground)]">
        {label}
      </span>
    </div>
  );
}

export function MissionStats() {
  const stats: StatProps[] = [
    { number: "50,000+", label: "Gifts Delivered" },
    { number: "120+", label: "Artisan Partners" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "12", label: "Countries Served" },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full bg-[#111111]">
      {/* Mission Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          OUR MISSION
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          Making Every Moment Extraordinary
        </h2>
        <p className="font-body text-[16px] text-[var(--muted-foreground)] text-center leading-[1.7] max-w-[600px]">
          We believe that the art of giving is one of life&apos;s most powerful
          expressions of love, gratitude, and connection.
        </p>
      </div>

      {/* Stats Row */}
      <div className="flex gap-[40px] w-full">
        {stats.map((stat, index) => (
          <Stat key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
