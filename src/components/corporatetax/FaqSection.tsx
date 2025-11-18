import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is included in your corporate tax services in Singapore?",
      answer: "Growwth Partners provides full corporate tax services in Singapore that include tax computation, preparation and filing of Form C / Form C-S, IRAS e-filing, response support for IRAS queries, and tax planning advice for future years."
    },
    {
      question: "Can Growwth Partners help if my company has missed previous tax deadlines?",
      answer: "Yes. Growwth Partners can review your current position, help you regularise past filings, and work out a clean path forward. The sooner you address it, the easier it is to manage IRAS communication and potential penalties."
    },
    {
      question: "How early should I start my corporate tax filing in Singapore?",
      answer: "It is best to start soon after your financial year end and once your accounts are finalised. Beginning early gives more time for accurate tax computation, planning, and smooth IRAS filing without last minute pressure."
    },
    {
      question: "Do I still need an accountant if I work with Growwth Partners?",
      answer: "Yes, you will still need proper bookkeeping and financial statements. Growwth Partners can either work with your existing accountant or provide accounting and corporate tax services in Singapore as an integrated package."
    },
    {
      question: "Can Growwth Partners help reduce my corporate tax legally?",
      answer: "Growwth Partners reviews your business for eligible deductions, reliefs, and exemptions within IRAS rules. The goal is to keep you fully compliant while ensuring you do not pay more tax than required."
    },
    {
      question: "Is your service suitable for small companies and startups?",
      answer: "Absolutely. Many smaller companies and startups benefit from structured corporate tax filing in Singapore, especially if there is no internal finance team. You get professional quality without hiring in house."
    },
    {
      question: "How do we get started with Growwth Partners?",
      answer: "Book a free consultation. Growwth Partners will review your situation, explain how the process works, and outline a clear plan and fee structure before any work begins."
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#D3E4FD] text-[#F87315] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our corporate tax filing services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-5 border-none"
              >
                <AccordionTrigger
                  className={`
                    group flex items-center justify-between w-full
                    bg-[#ededed] px-6 py-6
                    font-bold text-xl md:text-2xl text-black
                    rounded-none border border-[#e2e2e2] transition-all duration-200 
                    shadow-none
                    outline-none
                    focus-visible:outline-none
                    data-[state=open]:border-[2.5px] data-[state=open]:border-[#1775ff]
                    data-[state=open]:rounded-[6px]
                  `}
                  style={{
                    boxShadow: "none",
                    borderRadius: "4px",
                    borderWidth: "1.5px"
                  }}
                >
                  <span className="text-left w-full select-none font-medium">
                    {faq.question}
                  </span>
                  <span className="flex items-center justify-center transition-all duration-300">
                    <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-black rounded-full text-white transition-all duration-200">
                      <Plus className="w-6 h-6 transition-all duration-200 group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="w-6 h-6 transition-all duration-200 group-data-[state=closed]:hidden" strokeWidth={3} />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0 text-lg text-gray-800 font-normal leading-relaxed rounded-b-[6px] animate-slide-down">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
