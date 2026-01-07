import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What does a Virtual CFO do?",
      answer: "A Virtual CFO manages financial strategy, forecasting, cash flow, reporting, and investor support without being a full-time employee. They provide executive-level financial leadership remotely, helping businesses make informed decisions and achieve their growth objectives.",
    },
    {
      question: "Is a Virtual CFO suitable for SMEs?",
      answer: "Yes. Virtual CFO services are ideal for SMEs that need senior financial leadership without full-time hiring costs. This model provides access to experienced CFO expertise at a fraction of the cost, making strategic financial guidance accessible to growing businesses.",
    },
    {
      question: "How much do Virtual CFO services cost in Singapore?",
      answer: "Costs vary based on complexity and scope but are significantly lower than hiring a full-time CFO. Engagements are typically structured based on the level of involvement needed, ranging from a few days per month to more intensive support during critical periods like fundraising.",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            FAQs – Virtual CFO Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Common questions about our Virtual CFO services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl border border-slate-200 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-indigo-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;