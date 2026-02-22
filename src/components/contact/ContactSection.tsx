"use client";

import { Mail, Phone, MapPin, Clock3, Send } from "lucide-react";
import { ReactNode } from "react";

// ── Contact Info ─────────────────────────────────────────────────────────────

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#1A1A1A] border border-[#C9A96230] flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="font-body text-[14px] font-semibold text-white">
          {label}
        </span>
        <span className="font-body text-[14px] text-[var(--muted-foreground)]">
          {value}
        </span>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-[48px] w-[440px] flex-shrink-0">
      {/* Info Header */}
      <div className="flex flex-col gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          CONTACT INFORMATION
        </span>
        <h2 className="font-display text-[36px] font-semibold text-white">
          Let&apos;s Start a Conversation
        </h2>
        <p className="font-body text-[15px] text-[var(--muted-foreground)] leading-[1.7] max-w-[400px]">
          Our gifting experts are available Monday through Saturday to assist
          you with any inquiry.
        </p>
      </div>

      {/* Contact Items */}
      <ContactItem
        icon={<Mail className="w-[20px] h-[20px] text-[var(--primary)]" />}
        label="Email Us"
        value="concierge@cadeau.com"
      />
      <ContactItem
        icon={<Phone className="w-[20px] h-[20px] text-[var(--primary)]" />}
        label="Call Us"
        value="+1 (800) 234-5678"
      />
      <ContactItem
        icon={<MapPin className="w-[20px] h-[20px] text-[var(--primary)]" />}
        label="Visit Us"
        value="142 Madison Avenue, New York, NY 10016"
      />
      <ContactItem
        icon={<Clock3 className="w-[20px] h-[20px] text-[var(--primary)]" />}
        label="Business Hours"
        value="Mon - Sat: 9:00 AM - 7:00 PM"
      />
    </div>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────

const inputClass =
  "flex items-center w-full h-[44px] px-[16px] bg-[#0A0A0A] rounded border border-[var(--border)] font-body text-[14px] text-white placeholder:text-[#5A5A5A] focus:outline-none focus:border-[var(--primary)] transition-colors";

const labelClass = "font-body text-[13px] font-medium text-white";

function ContactForm() {
  return (
    <div className="flex flex-col gap-[32px] flex-1 bg-[#111111] rounded p-[48px] border border-[#C9A96215]">
      <h2 className="font-display text-[28px] font-semibold text-white">
        Send Us a Message
      </h2>

      {/* Row 1: First + Last Name */}
      <div className="flex gap-[24px] w-full">
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>First Name</label>
          <input
            type="text"
            placeholder="Sophie"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <label className={labelClass}>Last Name</label>
          <input
            type="text"
            placeholder="Laurent"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-[8px] w-full">
        <label className={labelClass}>Email Address</label>
        <input
          type="email"
          placeholder="sophie@example.com"
          className={inputClass}
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-[8px] w-full">
        <label className={labelClass}>Subject</label>
        <input
          type="text"
          placeholder="Corporate Gifting Inquiry"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-[8px] w-full">
        <label className={labelClass}>Message</label>
        <textarea
          placeholder="Tell us about your gifting needs..."
          rows={5}
          className="w-full h-[140px] px-[16px] py-[12px] bg-[#0A0A0A] rounded border border-[var(--border)] font-body text-[14px] text-white placeholder:text-[#5A5A5A] leading-[1.6] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button className="flex items-center justify-center gap-[10px] w-full py-[16px] px-[48px] bg-[var(--primary)] hover:opacity-90 transition-opacity">
        <span className="font-body text-[15px] font-semibold text-[var(--primary-foreground)]">
          Send Message
        </span>
        <Send className="w-[18px] h-[18px] text-[var(--primary-foreground)]" />
      </button>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <section className="flex gap-[80px] p-[80px] w-full">
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
