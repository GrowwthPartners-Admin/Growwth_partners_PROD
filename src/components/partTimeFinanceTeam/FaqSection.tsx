import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is a Part-Time Finance Team different from outsourcing bookkeeping?",
    answer: "A Part-Time Finance Team provides structured, ongoing support and integrates closely with leadership and CFO services, rather than performing isolated tasks. This means you get consistent professionals who understand your business, follow established processes, and contribute to strategic discussions—not just transactional service providers."
  },
  {
    question: "Can this service scale as transaction volumes increase?",
    answer: "Yes. The level of support scales with your business needs and transaction complexity. We can increase hours, add specialised resources, or expand the scope of services as your business grows, ensuring your finance function always matches your operational requirements."
  },
  {
    question: "Is this suitable for early-stage startups?",
    answer: "Absolutely. It provides professional finance execution without the cost of full-time hires. Early-stage startups benefit from having experienced finance professionals handle their books correctly from day one, establishing good practices that scale with the business."
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
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our Part-Time Finance Team services
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
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-brand-orange py-6 [&[data-state=open]]:text-brand-orange">
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
