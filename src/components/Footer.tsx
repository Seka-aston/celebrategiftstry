"use client";

import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className="font-body text-[13px] font-semibold text-white tracking-[1px]">
        {title}
      </span>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="font-body text-[13px] text-[var(--muted-foreground)] hover:text-white transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  const columns = [
    {
      title: "Shop",
      links: ["All Collections", "Birthday Gifts", "Anniversary", "Corporate"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Story", "Careers", "Press"]
    },
    {
      title: "Support",
      links: ["Help Center", "Shipping Info", "Returns", "Contact Us"]
    }
  ];

  return (
    <footer className="flex flex-col gap-[48px] px-[80px] py-[60px] w-full border-t border-[var(--border-light)]">
      {/* Footer Top */}
      <div className="flex justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-[16px] w-[320px]">
          <span className="font-display text-[28px] font-bold text-white tracking-[4px]">
            CADEAU
          </span>
          <p className="font-body text-[13px] text-[var(--muted-foreground)] leading-[1.6] w-[300px]">
            Luxury gifting made personal. Curated collections, signature wrapping, and white-glove delivery.
          </p>
        </div>

        {/* Columns */}
        {columns.map((column, index) => (
          <FooterColumn key={index} {...column} />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[var(--border-light)]" />

      {/* Footer Bottom */}
      <div className="flex items-center justify-between w-full">
        <span className="font-body text-[12px] text-[var(--text-dark-gray)]">
          © 2026 Cadeau. All rights reserved.
        </span>
        <div className="flex items-center gap-[20px]">
          <Instagram className="w-[18px] h-[18px] text-[var(--text-dark-gray)] hover:text-white cursor-pointer transition-colors" />
          <Twitter className="w-[18px] h-[18px] text-[var(--text-dark-gray)] hover:text-white cursor-pointer transition-colors" />
          <Facebook className="w-[18px] h-[18px] text-[var(--text-dark-gray)] hover:text-white cursor-pointer transition-colors" />
          <Linkedin className="w-[18px] h-[18px] text-[var(--text-dark-gray)] hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}
