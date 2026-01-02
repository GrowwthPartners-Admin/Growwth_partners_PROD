import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is outsourced payroll compliant with Singapore regulations?",
    answer: "Yes. Outsourced payroll services are designed to ensure full compliance with Singapore statutory and employment requirements."
  },
  {
    question: "Can outsourced payroll scale as my team grows?",
    answer: "Yes. Payroll services scale seamlessly with employee count and complexity."
  },
  {
    question: "Will I still have visibility into payroll data?",
    answer: "Yes. You receive detailed payroll reports, summaries, and documentation every cycle."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            FAQs – Outsourced Payroll Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our payroll outsourcing services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-slate-50 to-orange-50/30 rounded-xl border border-slate-200 px-6 data-[state=open]:border-orange-300 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-orange-600 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
