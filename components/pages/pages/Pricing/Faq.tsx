"use client";
import { useState } from "react";

interface FaqType {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqType[] = [
  {
    id: "item-1",
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can change your plan at any time. Simply go to your account settings and select the new plan that best fits your needs. Changes will take effect immediately, and any unused portion of your current plan will be prorated.",
  },
  {
    id: "item-2",
    question: "What happens if I exceed my email limit?",
    answer:
      "If you exceed your monthly email limit, you'll receive notifications when you're approaching the threshold. You can either upgrade your plan or purchase additional email credits to continue sending emails without interruption.",
  },
  {
    id: "item-3",
    question: "Are there any long-term contracts or commitments?",
    answer:
      "No, we don't require long-term contracts. All our plans are month-to-month, giving you the flexibility to upgrade, downgrade, or cancel at any time without penalty fees.",
  },
  {
    id: "item-4",
    question: "How secure is my payment information with Upshift?",
    answer:
      "We take security seriously. All payment information is processed through industry-standard encryption and secure payment gateways. We never store your payment details on our servers, and all transactions are PCI DSS compliant.",
  },
  {
    id: "item-5",
    question: "What kind of support can I expect with each plan?",
    answer:
      "All plans include email support with 24-hour response times. Premium plans include priority support with faster response times, and Enterprise plans include dedicated account management and phone support.",
  },
  {
    id: "item-6",
    question: "Is there a free trial available for the paid plans?",
    answer:
      "Yes, we offer a 14-day free trial for all paid plans. No credit card is required to start your trial, and you can explore all features included in your chosen plan during the trial period.",
  },
];

export default function Faq() {
  const [openItem, setOpenItem] = useState<string>("item-1");

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? "" : itemId);
  };

  return (
    <section className="py-16 px-6 bg-faq-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-faq-text">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-faq-item border border-[#FBFBFB] rounded-lg px-6 py-2 transition-all duration-200 hover:shadow-sm"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left font-medium text-black py-6 text-lg flex items-center justify-between focus:outline-none"
              >
                {faq.question}
                <p className="w-5 h-5 text-[#11111199] text-[36px] transition-transform duration-300">
                  {openItem == faq.id ? "+" : "-"}
                </p>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItem === faq.id
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <div className="text-[#11111199] leading-relaxed text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
