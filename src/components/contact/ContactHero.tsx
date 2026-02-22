"use client";

export function ContactHero() {
  return (
    <section
      className="flex flex-col items-center gap-[24px] px-[80px] py-[100px] w-full"
      style={{ background: "linear-gradient(180deg, #111111 0%, #0A0A0A 100%)" }}
    >
      <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
        GET IN TOUCH
      </span>
      <h1 className="font-display text-[56px] font-semibold text-white text-center">
        We&apos;d Love to Hear from You
      </h1>
      <div className="w-[60px] h-[2px] bg-[var(--primary)]" />
      <p className="font-body text-[17px] text-[var(--muted-foreground)] text-center leading-[1.7] max-w-[640px]">
        Whether you have a question about our collections, need help with a
        bespoke gift, or want to explore a corporate partnership, our team is
        here for you.
      </p>
    </section>
  );
}
