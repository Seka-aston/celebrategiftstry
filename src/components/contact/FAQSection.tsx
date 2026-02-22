"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  hasBottomBorder: boolean;
}

function FAQItem({ question, answer, isOpen, onToggle, hasBottomBorder }: FAQItemProps) {
  return (
    <div
      className={`flex flex-col gap-[16px] py-[28px] w-full cursor-pointer ${
        hasBottomBorder ? "border-b border-[#1A1A1A]" : ""
      }`}
      onClick={onToggle}
    >
      {/* Question Row */}
      <div className="flex items-center justify-between w-full">
        <span className="font-body text-[16px] font-medium text-white">
          {question}
        </span>
        <ChevronDown
          className={`w-[20px] h-[20px] text-[var(--primary)] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer */}
      {isOpen && (
        <p className="font-body text-[14px] text-[var(--muted-foreground)] leading-[1.7] w-full">
          {answer}
        </p>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "What is the typical delivery timeline?",
    answer:
      "Standard delivery takes 3-5 business days. We also offer same-day delivery in select metropolitan areas and express shipping for time-sensitive occasions.",
  },
  {
    question: "Can I customize the gift wrapping?",
    answer:
      "Absolutely. Every Cadeau gift includes our signature wrapping, but you can also choose from premium upgrades including bespoke ribbons, custom monogramming, and handwritten calligraphy cards.",
  },
  {
    question: "Do you offer corporate gifting programs?",
    answer:
      "Yes, our corporate concierge team specializes in bulk orders, branded packaging, and recurring gifting schedules. Contact us for a tailored proposal for your organization.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We offer hassle-free returns within 30 days of delivery. Our team will arrange pickup and provide a full refund or exchange for any unopened items in original condition.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full">
      {/* FAQ Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          FREQUENTLY ASKED
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          Common Questions
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col w-[900px]">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
            hasBottomBorder={index < faqs.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
