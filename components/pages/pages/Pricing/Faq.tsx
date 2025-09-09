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
    <section className="py-16 px-6 bg-gray-50 w-full border-b-[1px] border-b-[#7F7F7F1A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-faq-text">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-faq-item border border-[#7F7F7F1A] rounded-lg p-4 transition-all duration-200 hover:shadow-sm"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left font-medium text-black text-lg flex items-center justify-between focus:outline-none"
              >
                {faq.question}
                <p className="w-5 h-5 text-[#11111199] text-[36px] transition-transform duration-300">
                  {openItem == faq.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path
                        fill="black"
                        d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path
                        fill="black"
                        d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"
                      />
                    </svg>
                  )}
                </p>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItem === faq.id
                    ? "max-h-96 opacity-100 py-4"
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
