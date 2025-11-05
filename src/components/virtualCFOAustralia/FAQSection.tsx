import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What does a Virtual CFO / fractional CFO Australia service actually do for my business?",
      answer: "A Virtual CFO or fractional CFO Australia service gives you high-level financial leadership without hiring a full-time CFO. Growwth Partner manages cash flow, budgeting, forecasting, reporting, profitability analysis, and strategic decision support so you can scale with clarity and control."
    },
    {
      question: "Why should I choose Growwth Partner instead of hiring a full-time CFO in Australia?",
      answer: "Hiring a full-time CFO in Australia is expensive. A senior finance leader can easily cost six figures annually. Growwth Partner provides Virtual CFO and fractional CFO Australia support so you get the same strategic guidance at a fraction of the cost, with flexible scope that matches your stage of growth."
    },
    {
      question: "Which businesses in Australia benefit most from a fractional CFO?",
      answer: "A fractional CFO Australia model suits startups, growing e-commerce brands, and established SMEs that need advanced financial strategy, investor-ready reporting, and cash flow control but don't need (or can't justify) a full-time CFO. Growwth Partner supports Australian businesses that want better decisions, better margins, and better visibility."
    },
    {
      question: "Can Growwth Partner help with cash flow and profitability?",
      answer: "Yes. Growwth Partner builds cash flow projections, tracks burn rate, models \"what happens if\" scenarios, and identifies profit leaks across operations, hiring, and marketing spend. The goal of Virtual CFO and fractional CFO Australia support is to move you from reactive survival to confident, proactive planning."
    },
    {
      question: "Will a fractional CFO help with compliance, tax, and reporting in Australia?",
      answer: "Yes. Growwth Partner handles compliance, financial reporting, budgeting and forecasting, tax planning, and ongoing reporting so you never miss deadlines. The Virtual CFO / fractional CFO Australia model keeps your finance function clean, current, and investor-ready."
    },
    {
      question: "How involved will Growwth Partner be in day-to-day decisions?",
      answer: "Growwth Partner acts like part of your leadership team. You get regular strategy meetings, on-demand financial support, and decision-level input on hiring, pricing, marketing spend, fundraising, and expansion. This is more than bookkeeping. This is Virtual CFO and fractional CFO Australia partnership built for growth."
    },
    {
      question: "What happens on the free 30-minute consultation call?",
      answer: "On the call, Growwth Partner reviews your current financial challenges, cash position, reporting gaps, and growth goals. You'll get immediate recommendations from a Virtual CFO / fractional CFO Australia perspective and clarity on which services you actually need without pressure to lock in a full-time hire."
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#06C0A9]/10 text-[#06C0A9] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h3 className="heading-md mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our Virtual CFO and fractional CFO services for Australian businesses.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-5 border-none">
                <AccordionTrigger
                  className={`
                    group flex items-center justify-between w-full
                    bg-[#ededed] px-6 py-6
                    font-bold text-xl md:text-2xl text-black
                    rounded-none border border-[#e2e2e2] transition-all duration-200 
                    shadow-none
                    outline-none
                    focus-visible:outline-none
                    data-[state=open]:border-[2.5px] data-[state=open]:border-[#06C0A9]
                    data-[state=open]:rounded-[6px]
                  `}
                  style={{
                    boxShadow: "none",
                    borderRadius: "4px",
                    borderWidth: "1.5px"
                  }}
                >
                  <span className="text-left w-full select-none font-medium">{faq.question}</span>
                  <span className={`
                    flex items-center justify-center
                    transition-all duration-300
                  `}>
                    <span className={`
                      flex items-center justify-center
                      w-8 h-8 md:w-9 md:h-9
                      bg-black rounded-full
                      text-white
                      transition-all duration-200
                    `}>
                      <Plus className={`
                        w-6 h-6 transition-all duration-200
                        group-data-[state=open]:hidden
                      `} strokeWidth={3} />
                      <Minus className={`
                        w-6 h-6 transition-all duration-200
                        group-data-[state=closed]:hidden
                      `} strokeWidth={3} />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className={`
                    bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0
                    text-lg text-gray-800 font-normal leading-relaxed
                    rounded-b-[6px]
                    animate-slide-down
                  `}
                  style={{
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
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

export default FAQSection;
