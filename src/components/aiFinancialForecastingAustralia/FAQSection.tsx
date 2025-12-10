import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Ryzup.ai deliver AI financial forecasting in Australia?",
    answer: "Ryzup.ai applies machine learning to historical and live finance data to generate forward views for revenue, costs, and cash, then keeps those forecasts updated as new actuals arrive.",
  },
  {
    question: "Can Ryzup.ai handle multi-entity or multi-currency forecasting?",
    answer: "Yes. Ryzup.ai supports multi-entity consolidation and multi-currency assumptions common to Australian companies operating across regions.",
  },
  {
    question: "How accurate are the forecasts produced by Ryzup.ai?",
    answer: "Accuracy depends on data quality and business volatility, but AI-driven models typically reduce manual errors and improve trend detection. Assumptions remain transparent and editable.",
  },
  {
    question: "Does Ryzup.ai replace existing spreadsheets?",
    answer: "No. Teams keep using familiar Sheets where helpful. Ryzup.ai handles the heavy lifting and automates refresh, scenarios, and presentation.",
  },
  {
    question: "How quickly can an Australian business get started?",
    answer: "Most teams connect data and see a first forecast within days, then refine scenarios for board and planning cycles.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQs: AI Financial Forecasting in{" "}
            <span className="text-brand-green">Australia</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
