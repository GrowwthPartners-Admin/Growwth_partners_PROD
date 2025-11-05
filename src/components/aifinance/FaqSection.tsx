import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is AI in finance?",
      answer: "AI in finance refers to using machine intelligence to analyse financial data, predict trends, detect anomalies, and automate decision support. RyzUp applies this to forecasting, spend analysis, reporting, and cash flow management so your team can move faster with more confidence.",
    },
    {
      question: "How does RyzUp save my team time?",
      answer: "RyzUp automates the work you normally do in spreadsheets and slide decks. The platform pulls in data, cleans it, runs analysis, and gives you ready-to-use reporting. This reduces time spent preparing numbers and frees up time to act on them.",
    },
    {
      question: "Can RyzUp replace my current finance team?",
      answer: "No. RyzUp is not here to replace your finance team. RyzUp is here to multiply them. You keep control. We remove the manual lift and surface the signal.",
    },
    {
      question: "Is this only for large companies?",
      answer: "No. Early stage startups, profitable SMEs, and growth stage companies are already using RyzUp. If you are making financial decisions, you benefit.",
    },
    {
      question: "How are you different from other finance automation tools?",
      answer: "Most finance automation tools just aggregate numbers. RyzUp explains what those numbers mean, how they are trending, and what you should do next. You get narrative, recommendations, and forward view in one place.",
    },
    {
      question: "Will investors and the board accept AI generated reporting?",
      answer: "Yes. RyzUp produces structured forecasts, cash visibility, and performance summaries in a format investors actually expect to see. It is not fluff. It is built for serious conversations.",
    },
    {
      question: "How do we get started?",
      answer: "We plug RyzUp in, connect data sources, and generate your first financial visibility pack. You get a live view of cash, spend, and forecast that you can immediately use with leadership.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about AI in finance and RyzUp
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-5 border-none"
              >
                <AccordionTrigger
                  className="
                    group flex items-center justify-between w-full
                    bg-gray-100 px-6 py-6
                    font-bold text-xl md:text-2xl
                    rounded-none border border-gray-200 transition-all duration-200 
                    shadow-none
                    outline-none
                    focus-visible:outline-none
                    data-[state=open]:border-2 data-[state=open]:border-brand-orange
                    data-[state=open]:rounded-md
                  "
                  style={{
                    boxShadow: "none",
                    borderRadius: "4px",
                    borderWidth: "1.5px",
                  }}
                >
                  <span className="text-left w-full select-none font-medium text-gray-900">{faq.question}</span>
                  <span className="flex items-center justify-center transition-all duration-300">
                    <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-brand-orange rounded-full text-white transition-all duration-200">
                      <Plus className="w-6 h-6 transition-all duration-200 group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="w-6 h-6 transition-all duration-200 group-data-[state=closed]:hidden" strokeWidth={3} />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 pb-6 pt-2 border border-gray-200 border-t-0 text-lg leading-relaxed rounded-b-md animate-slide-down text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50/50 to-orange-50/30 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
            <p className="text-xl font-semibold mb-8 text-gray-900 text-center">
              RyzUp puts AI in finance where it belongs. Inside your workflow. Inside your models. Inside your decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2&utm_source=website&utm_medium=click&utm_campaign=promotion&utm_content=cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange/90 transition-colors"
              >
                Get Started Free
              </a>
              <a
                href="https://calendly.com/jd-growwthpartners/15min?month=2025-11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange border-2 border-brand-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange/10 transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
