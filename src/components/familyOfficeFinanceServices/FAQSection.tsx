import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How are Family Office Finance services different from private accounting?",
    answer: "Family Office Finance services focus on consolidation, governance, and portfolio-level decision-making—not just entity-level accounting. We provide institutional-grade reporting across all assets, investment performance tracking, and CFO-led strategic oversight, which goes far beyond traditional accounting services."
  },
  {
    question: "Are these services confidential?",
    answer: "Yes. Confidentiality and data security are core principles of our family office engagements. We use secure systems with access-controlled reporting, ensuring complete discretion for all family principals and trustees. All information is handled with the utmost privacy and security protocols."
  },
  {
    question: "Can services scale as the family office grows?",
    answer: "Yes. Our finance structures are specifically designed to scale with asset complexity and geographic expansion. Whether you're adding new investment vehicles, expanding into new jurisdictions, or increasing the number of entities under management, our services adapt to meet your evolving needs."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Common questions about our Family Office Finance services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
                className="bg-slate-50 rounded-2xl border border-slate-200 px-6 overflow-hidden data-[state=open]:bg-emerald-50 data-[state=open]:border-emerald-200 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-emerald-600 hover:no-underline py-6 [&[data-state=open]]:text-emerald-600">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-500" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 pl-10">
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

export default FAQSection;
