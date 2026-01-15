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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
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
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50 hover:border-orange-500/30 transition-all px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:text-orange-400 py-6 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-6 text-base leading-relaxed">
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
