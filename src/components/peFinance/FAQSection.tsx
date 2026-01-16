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
    question: "How are PE finance services different from fund finance services?",
    answer: "PE finance focuses on portfolio company performance, integration, and exits, while fund finance focuses on LP reporting and capital flows. PE finance prioritises operational value creation and deal readiness across portfolio companies."
  },
  {
    question: "Can these services support exit preparation?",
    answer: "Yes. Exit readiness and vendor diligence support are core components of our PE finance services. We help prepare exit-quality financial statements, coordinate vendor due diligence, and ensure data room and buyer readiness."
  },
  {
    question: "Are these services suitable for growth equity funds?",
    answer: "Yes. Services scale across buyout, growth equity, and minority investments. We adapt our approach based on the investment type, providing appropriate financial governance and reporting frameworks for each."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">AEO Focused</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Private Equity Finance Services – Common Questions Answered
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 px-6 overflow-hidden data-[state=open]:border-emerald-300 dark:data-[state=open]:border-emerald-700 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 py-5 [&[data-state=open]]:text-emerald-600 dark:[&[data-state=open]]:text-emerald-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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

export default FAQSection;
