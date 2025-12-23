import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are AI CFO services different from traditional CFO services?",
    answer: "AI CFO services combine CFO expertise with predictive analytics and automation, enabling faster and more accurate decision-making. Unlike traditional CFO services that rely heavily on historical data and manual processes, AI CFO services provide real-time insights, automated reporting, and forward-looking intelligence that helps you make proactive rather than reactive decisions."
  },
  {
    question: "Is AI CFO suitable for SMEs?",
    answer: "Yes. AI CFO services are especially valuable for SMEs seeking enterprise-level financial insight without enterprise-level cost. The automation and efficiency gains from AI-powered finance tools allow smaller businesses to access sophisticated financial analysis and reporting capabilities that were previously only available to larger corporations with dedicated finance teams."
  },
  {
    question: "Do AI CFO services replace human CFOs?",
    answer: "No. AI enhances the CFO's ability to analyse data and make better decisions—it does not replace strategic judgement. Our AI CFO services combine the analytical power of artificial intelligence with the experience, intuition, and strategic thinking of seasoned CFO professionals. The AI handles data processing and pattern recognition, while human experts interpret insights and guide strategic decisions."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI CFO Services
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about our AI-powered CFO solutions
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
                className="bg-white rounded-xl border border-slate-200 px-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-slate-900 font-semibold hover:text-orange-600 py-5">
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

export default FaqSection;
