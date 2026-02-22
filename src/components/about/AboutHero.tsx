"use client";

export function AboutHero() {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&auto=format&fit=crop&w=1440&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.80) 50%, rgba(10,10,10,0.53) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-[24px] h-full px-[80px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          OUR STORY
        </span>
        <h1 className="font-display text-[56px] font-semibold text-white text-center">
          The Art of Thoughtful Gifting
        </h1>
        <div className="w-[60px] h-[2px] bg-[var(--primary)]" />
        <p className="font-body text-[17px] text-[#B0B0B0] text-center leading-[1.7] max-w-[600px]">
          Founded on the belief that every gift tells a story, Cadeau has been
          transforming moments into memories since 2018.
        </p>
      </div>
    </section>
  );
}
