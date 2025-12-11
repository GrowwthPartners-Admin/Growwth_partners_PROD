import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Ryzup.ai support AI compliance in Australia?",
    answer: "Ryzup.ai provides privacy-safe analysis through anonymisation, automated spreadsheet checks, and audit-friendly outputs that help Australian businesses meet internal and external compliance expectations.",
  },
  {
    question: "What kind of AI risk detection does Ryzup.ai provide?",
    answer: "Ryzup.ai detects anomalies in spreadsheets and accounting data, flags irregular GL movements, highlights reconciliation breaks, and surfaces outliers that warrant review.",
  },
  {
    question: "Can Ryzup.ai help prepare for audits in Australia?",
    answer: "Ryzup.ai streamlines audit readiness with reconciliations, documented checks, cleaner schedules, and consistent workpapers that reduce back-and-forth during reviews.",
  },
  {
    question: "Does Ryzup.ai protect sensitive financial and personal data?",
    answer: "Ryzup.ai includes an Anonymiser that masks sensitive fields while preserving relational structure, supporting privacy-first analysis and responsible AI usage.",
  },
  {
    question: "Is Ryzup.ai suitable for SMEs as well as larger enterprises?",
    answer: "Ryzup.ai is designed for startups, SMEs, and larger teams in Australia that want practical AI monitoring without replacing existing tools or workflows.",
  },
  {
    question: "How quickly can Australian businesses implement Ryzup.ai?",
    answer: "Most teams enable the Sheets extension, connect data, and run first checks within days, then expand into continuous monitoring and tailored alert rules.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-red-50/20 to-orange-50/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Common questions about AI Risk, Compliance and Fraud in Australia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-white rounded-xl border border-slate-200 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-slate-900 hover:text-red-600 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">
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
