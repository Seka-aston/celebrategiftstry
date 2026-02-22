"use client";

import { ShoppingBag } from "lucide-react";

interface NavigationProps {
  activePage?: "collections" | "gifting" | "about" | "contact";
}

export function Navigation({ activePage }: NavigationProps) {
  const linkClass = (page: string) =>
    `font-body text-[14px] hover:text-[var(--foreground)] transition-colors ${
      activePage === page ? "text-[var(--foreground)]" : "text-[var(--text-gray)]"
    }`;

  return (
    <nav className="flex items-center justify-between px-[80px] py-[20px] w-full border-b border-[var(--border-light)]">
      {/* Logo */}
      <a href="/" className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center w-[36px] h-[36px] border border-[var(--primary)]">
          <span className="font-display text-[18px] font-medium text-[var(--primary)]">
            C
          </span>
        </div>
        <span className="font-display text-[22px] text-[var(--foreground)] tracking-[3px]">
          CADEAU
        </span>
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-[40px]">
        <a href="#" className={linkClass("collections")}>Collections</a>
        <a href="#" className={linkClass("gifting")}>Gifting</a>
        <a href="/about" className={linkClass("about")}>About</a>
        <a href="/contact" className={linkClass("contact")}>Contact</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-[24px]">
        <ShoppingBag className="w-[20px] h-[20px] text-[var(--text-gray)]" />
        <button className="flex items-center justify-center px-[24px] py-[12px] bg-[var(--primary)]">
          <span className="font-body text-[13px] font-semibold text-[var(--primary-foreground)]">
            Shop Now
          </span>
        </button>
      </div>
    </nav>
  );
}
