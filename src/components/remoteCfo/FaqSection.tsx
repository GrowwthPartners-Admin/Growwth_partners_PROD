import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is a Remote Finance Team as effective as an in-house team?",
    answer: "Yes. With clear ownership, structured processes, and real-time tools, remote teams often outperform fragmented in-house setups. Our CFO-led delivery model ensures accountability and continuity that matches or exceeds traditional internal teams."
  },
  {
    question: "Can this model scale as the business grows?",
    answer: "Yes. The team structure and level of support scale with your business complexity. As you grow, we can add analysts, expand reporting scope, and increase CFO involvement—all without the delays and costs of internal hiring."
  },
  {
    question: "Does Growwth Partners handle compliance and reporting?",
    answer: "Yes. We manage finance execution and ensure compliance-ready reporting aligned with Singapore's regulatory requirements. Our integrated approach covers bookkeeping, payroll, statutory compliance, and management reporting under one accountable team."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about Remote CFO & Finance Team services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-brand-orange py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
