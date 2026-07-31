"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is AI Learning Roadmap Generator?",
    answer:
      "It’s a tool that helps you generate personalized learning paths for careers in tech and AI."
  },
  {
    question: "Do I need an account?",
    answer:
      "No authentication is required. All data is stored locally in JSON files."
  },
  {
    question: "Is it free?",
    answer:
      "Yes, the project is open-source and free to use."
  },
  {
    question: "How do I track progress?",
    answer:
      "Each roadmap phase includes progress checkboxes and animated progress bars."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black/40 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-center text-white mb-12">FAQ</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="card">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left text-lg font-semibold text-purple-300"
            >
              {faq.question}
            </button>
            {openIndex === i && (
              <p className="mt-4 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
