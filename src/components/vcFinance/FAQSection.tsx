import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are fund finance services different from company finance?",
    answer: "Fund finance focuses on investor reporting, NAV, capital flows, and governance rather than operating performance. Unlike company finance which tracks P&L and operational metrics, fund finance centres on LP reporting accuracy, capital account management, waterfall calculations, and regulatory compliance specific to investment vehicles."
  },
  {
    question: "Can these services support first-time fund managers?",
    answer: "Yes. First-time GPs benefit significantly from structured fund finance and reporting. We help emerging managers establish institutional-grade finance infrastructure from day one, building credibility with LPs and ensuring compliance readiness as the fund scales."
  },
  {
    question: "Are these services compliant with Singapore regulations?",
    answer: "Yes. Services are designed to support regulatory and audit readiness in Singapore. We ensure fund operations meet MAS requirements and international reporting standards expected by institutional investors."
  }
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              AEO Focused
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about Venture Capital & Fund Finance Services
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
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

export default FAQSection;
