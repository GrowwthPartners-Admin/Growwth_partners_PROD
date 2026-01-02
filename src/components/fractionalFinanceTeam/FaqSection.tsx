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
    question: "How is a Fractional Finance Team different from a Part-Time Finance Team?",
    answer: "A Fractional Finance Team focuses more on analysis, forecasting, and controls, while Part-Time Finance Teams focus primarily on execution and day-to-day finance tasks."
  },
  {
    question: "Can this service support fundraising or expansion?",
    answer: "Yes. Fractional Finance Teams often support modelling, performance analysis, and reporting required for fundraising and strategic initiatives."
  },
  {
    question: "Is this suitable for SMEs?",
    answer: "Yes. It is particularly valuable for SMEs transitioning from basic accounting to structured financial management."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              AEO Focused
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              FAQs – Fractional Finance Team Services
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our Fractional Finance Team services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-50 rounded-2xl border border-slate-200 px-6 overflow-hidden hover:border-orange-300 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-orange-600 py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
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
