"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Fundu and how does it work?",
    answer: "Fundu is a Telegram bot that helps you track your daily expenses. Simply send messages like \"coffee 4.50\" or \"groceries 34.99\" and the bot automatically records and categorizes your spending. You can then request reports and insights about your financial habits."
  },
  {
    question: "Is Fundu completely free to use?",
    answer: "Fundu offers a free tier that includes unlimited expense tracking, basic categorization, and 7-day expense history. For additional features like unlimited history, custom categories, and budget planning, we offer an affordable Premium plan."
  },
  {
    question: "Do I need to create an account to use Fundu?",
    answer: "No! That's the beauty of Fundu. Just find @Fundu_expenses_Bot on Telegram and start chatting with it. No registration, email, or personal information is required to get started."
  },
  {
    question: "Is my financial data safe and private?",
    answer: "Absolutely. We take your privacy very seriously. Your data is encrypted, stored securely, and never shared with third parties. We don't collect personal identification information beyond what's needed to provide the service."
  },
  {
    question: "Can I export my spending data?",
    answer: "Yes, Premium users can export their spending data as CSV files, which can be opened in Excel, Google Sheets, or other spreadsheet programs for further analysis or record-keeping."
  },
  {
    question: "What currencies does Fundu support?",
    answer: "Fundu supports most major currencies including USD, EUR, GBP, CAD, AUD, JPY, and many more. You can set your preferred currency using the /settings command."
  },
  {
    question: "How do I get help if I have issues or questions?",
    answer: "You can use the /help command within the bot for common questions, or contact our support team at support@Fundu.app for more specific assistance."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            Everything you need to know about Fundu and how it helps you with your finances.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-4 pt-3 text-secondary-dark">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
