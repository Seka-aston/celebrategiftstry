"use client";

import { ShoppingBag } from "lucide-react";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-[80px] py-[20px] w-full border-b border-[var(--border-light)]">
      {/* Logo */}
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center w-[36px] h-[36px] border border-[var(--primary)]">
          <span className="font-display text-[18px] font-medium text-[var(--primary)]">
            C
          </span>
        </div>
        <span className="font-display text-[22px] text-[var(--foreground)] tracking-[3px]">
          CADEAU
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-[40px]">
        <a href="#" className="font-body text-[14px] text-[var(--text-gray)] hover:text-[var(--foreground)] transition-colors">
          Collections
        </a>
        <a href="#" className="font-body text-[14px] text-[var(--text-gray)] hover:text-[var(--foreground)] transition-colors">
          Gifting
        </a>
        <a href="#" className="font-body text-[14px] text-[var(--text-gray)] hover:text-[var(--foreground)] transition-colors">
          About
        </a>
        <a href="#" className="font-body text-[14px] text-[var(--text-gray)] hover:text-[var(--foreground)] transition-colors">
          Contact
        </a>
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
