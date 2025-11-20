import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question:
        "What is business valuation and why do Singapore companies need it?",
      answer:
        "Business valuation helps determine the true worth of a company. Singapore businesses need accurate business valuation Singapore results for fundraising, shareholder planning, ESOPs, and strategic decisions. A valuation report also gives founders and investors clarity and confidence during negotiations.",
    },
    {
      question: "How is startup valuation done in Singapore?",
      answer:
        "Startup valuation Singapore is usually based on revenue forecasts, growth potential, market size, founder experience, and comparable transactions. For early-stage companies, methods like scorecard valuation, VC method, or simple DCF modelling are often used.",
    },
    {
      question: "What documents are required for a company valuation?",
      answer:
        "Most company valuation services require financial statements, cap table details, shareholding structure, business forecasts, past fundraising documents, and an overview of assets and liabilities. Additional information may be needed for complex models.",
    },
    {
      question: "What valuation method is best for private companies?",
      answer:
        "Private companies often use DCF analysis, market comparables, or asset-based valuation. We provide reliable private company valuation using recognised frameworks and clear financial modelling to fit each company's stage and structure.",
    },
    {
      question: "When should a startup get a valuation done?",
      answer:
        "A startup should get a valuation before fundraising, ESOP grant issuance, buybacks, investor negotiations, or a major strategic decision. Founders planning early rounds benefit from proper pre-seed and seed valuation Singapore.",
    },
    {
      question: "What is DCF valuation and when is it used?",
      answer:
        "DCF valuation Singapore uses projected cash flows to estimate a company's present value. It is ideal for businesses with predictable revenue or long-term growth plans. It helps founders understand future value based on performance.",
    },
    {
      question: "How does valuation support fundraising?",
      answer:
        "Accurate valuation helps founders negotiate better terms, avoid unnecessary dilution, and present a compelling story to investors. Strong fundraising valuation support gives investors confidence in the company's financial fundamentals.",
    },
    {
      question:
        "What is the difference between business valuation and equity valuation?",
      answer:
        "Business valuation calculates the value of the entire company. Equity valuation focuses only on shareholder equity or specific share classes. Both are essential during funding rounds, ESOP planning, and M&A discussions.",
    },
    {
      question: "How long does a valuation process take?",
      answer:
        "Most valuations take one to two weeks, depending on data availability and company complexity. Complex corporate structures or M&A deals may require more time.",
    },
    {
      question:
        "Do you provide valuation services for mergers and acquisitions?",
      answer:
        "Yes. We offer full M&A valuation including target analysis, synergy evaluation, financial modelling, and deal readiness assessment.",
    },
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
            Find answers to common questions about our corporate tax filing
            services.
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
                    borderWidth: "1.5px",
                  }}
                >
                  <span className="text-left w-full select-none font-medium">
                    {faq.question}
                  </span>
                  <span className="flex items-center justify-center transition-all duration-300">
                    <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-black rounded-full text-white transition-all duration-200">
                      <Plus
                        className="w-6 h-6 transition-all duration-200 group-data-[state=open]:hidden"
                        strokeWidth={3}
                      />
                      <Minus
                        className="w-6 h-6 transition-all duration-200 group-data-[state=closed]:hidden"
                        strokeWidth={3}
                      />
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
