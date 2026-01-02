import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is a Virtual Finance Team different from outsourcing accounting?",
    answer: "A Virtual Finance Team provides continuous, integrated support with clear ownership, rather than isolated or task-based outsourcing. You get dedicated professionals who understand your business, use unified cloud systems, and operate as a true extension of your organisation with full accountability."
  },
  {
    question: "Can Virtual Finance Teams support growing transaction volumes?",
    answer: "Yes. Virtual Finance Teams scale efficiently as transaction volume and complexity increase. The cloud-based infrastructure and process-driven approach means we can expand capacity, add specialised resources, or enhance capabilities without disruption to your operations."
  },
  {
    question: "Is data security maintained with a Virtual Finance Team?",
    answer: "Absolutely. Secure cloud systems and access controls ensure data integrity and confidentiality. We implement enterprise-grade security protocols, regular backups, and role-based access to protect your financial data at all times."
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
            Find answers to common questions about our Virtual Finance Team services
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
