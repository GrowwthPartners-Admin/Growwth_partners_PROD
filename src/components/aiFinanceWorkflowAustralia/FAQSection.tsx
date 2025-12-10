import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Ryzup.ai deliver AI automation for finance in Australia?",
    answer: "Ryzup.ai embeds an AI assistant, forecasting tools, error detection and workflow agents directly inside Google Sheets, integrated with Xero, to automate analysis, reporting, reconciliations and quality checks.",
  },
  {
    question: "Does Ryzup.ai suit SMEs and startups in Australia?",
    answer: "Ryzup.ai supports startups, SMEs and growing finance teams with a modular setup so organisations can start small and expand automation as needs evolve.",
  },
  {
    question: "Will teams need to learn a new system?",
    answer: "Ryzup.ai runs inside Google Sheets and alongside existing accounting platforms, so teams keep familiar workflows that are enhanced by AI.",
  },
  {
    question: "How does Ryzup.ai improve data accuracy and compliance?",
    answer: "Smart error detection, reconciliation and GL agents, plus anonymisation, help reduce spreadsheet errors, highlight inconsistencies and protect sensitive information while using AI.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            AI Finance Workflow Integration{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              in Australia
            </span>
          </h2>
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
                className="bg-white rounded-xl border border-slate-200 px-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-teal-600 py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
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
