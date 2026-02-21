"use client";

import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

function CollectionCard({ imageUrl, title, description }: CollectionCardProps) {
  return (
    <div className="flex flex-col flex-1 border border-[var(--border)]">
      {/* Card Image */}
      <div
        className="w-full h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      {/* Card Content */}
      <div className="flex flex-col gap-[8px] p-[24px]">
        <h3 className="font-display text-[24px] font-semibold text-white">
          {title}
        </h3>
        <p className="font-body text-[14px] text-[var(--muted-foreground)] leading-[1.5]">
          {description}
        </p>
        <div className="flex items-center gap-[6px]">
          <span className="font-body text-[13px] font-semibold text-[var(--primary)]">
            Shop Collection
          </span>
          <ArrowRight className="w-[14px] h-[14px] text-[var(--primary)]" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedCollections() {
  const collections = [
    {
      imageUrl: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Birthday Gifts",
      description: "Make their day unforgettable with luxury gifts they'll cherish."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Anniversary",
      description: "Celebrate love and togetherness with timeless, elegant presents."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Corporate Gifts",
      description: "Impress clients and reward teams with sophisticated gift selections."
    }
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          COLLECTIONS
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          Curated for Every Occasion
        </h2>
        <p className="font-body text-[16px] text-[var(--muted-foreground)]">
          From birthdays to milestones, find the perfect gift that speaks volumes.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="flex gap-[24px] w-full">
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} />
        ))}
      </div>
    </section>
  );
}
