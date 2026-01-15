import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How is healthcare finance different from standard finance?",
    answer: "Healthcare finance integrates compliance, cost control, and risk management into financial reporting and planning.",
  },
  {
    question: "Can these services support regulatory audits?",
    answer: "Yes. Audit readiness and compliance documentation are core components.",
  },
  {
    question: "Are these services suitable for early-stage MedTech startups?",
    answer: "Yes. Early financial discipline improves compliance outcomes and investor trust.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            FAQs – MedTech & Healthcare Finance Services
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-brand-orange/30 transition-all px-6 overflow-hidden shadow"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-brand-orange py-6 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
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

export default FaqSection;
