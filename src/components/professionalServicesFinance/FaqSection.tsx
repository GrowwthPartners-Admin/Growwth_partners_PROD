import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is professional services finance different from standard accounting?",
    answer: "It focuses on project margins, utilisation, billing accuracy, and cash flow timing—not just historical reporting. Professional services finance requires tight integration between operations, billing, and finance to provide actionable insights for project-driven businesses."
  },
  {
    question: "Can these services improve utilisation rates?",
    answer: "Yes. Utilisation and capacity analysis are core components of professional services finance. We track billable vs non-billable time, analyse recovery rates, and help you align capacity planning with your growth goals."
  },
  {
    question: "Are these services suitable for small agencies or firms?",
    answer: "Yes. Services scale based on team size, project complexity, and growth stage. Whether you're a boutique agency or a growing consulting firm, our services adapt to your specific needs and budget."
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
          className="text-center mb-12"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our Professional Services Finance services
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
                className="bg-gray-50 rounded-2xl border border-gray-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 py-6 [&[data-state=open]]:text-orange-600">
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
    </section>
  );
};

export default FaqSection;
