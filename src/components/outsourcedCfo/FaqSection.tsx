import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are Outsourced CFO services different from Virtual CFO services?",
    answer: "Outsourced CFO services involve full ownership of the finance function, while Virtual CFO services focus primarily on strategic leadership. With Outsourced CFO, you get complete operational responsibility including oversight of accounting, bookkeeping, and payroll teams."
  },
  {
    question: "Do Outsourced CFO services replace an internal finance team?",
    answer: "They can either fully replace or work alongside existing finance staff, depending on your business needs. We tailor the engagement to complement your existing resources while ensuring complete CFO-level oversight."
  },
  {
    question: "Are Outsourced CFO services cost-effective?",
    answer: "Yes. They are typically far more cost-effective than hiring a full-time CFO and building an internal team. You get senior CFO expertise, finance team support, and AI-enabled tools at a fraction of the cost of building an equivalent in-house capability."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            AEO Focused
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Common questions about Outsourced CFO Services
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
                className="bg-gradient-to-br from-slate-50 to-orange-50/30 rounded-2xl border border-slate-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-orange-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
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
