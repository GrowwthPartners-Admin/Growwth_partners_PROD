import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What does Ryzup.ai provide for AI dashboards for CFOs in Australia?',
    answer: 'Ryzup.ai delivers real-time executive dashboards, automated analysis, and predictive insights so CFOs can see performance, understand drivers, and act quickly.'
  },
  {
    question: 'How do Ryzup.ai dashboards help with decision-making?',
    answer: 'Ryzup.ai combines live metrics, narrative explanations, and scenario modelling to show what changed, why it changed, and the likely impact on cash and profit.'
  },
  {
    question: 'Can Ryzup.ai support multi-entity Australian groups?',
    answer: 'Yes. Ryzup.ai supports consolidated views, consistent KPIs, and multi-currency reporting so groups can review a single source of truth.'
  },
  {
    question: 'Does Ryzup.ai replace spreadsheets?',
    answer: 'No. Teams keep familiar Sheets where useful. Ryzup.ai automates data refresh, analysis, and forecasting so spreadsheets are lighter and more reliable.'
  },
  {
    question: 'How quickly can an Australian CFO get value?',
    answer: 'Most teams connect data and see first dashboards and forecasts within days, then refine KPIs and scenarios for leadership reviews.'
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-teal-50 to-[#e9faf7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about AI Decision Intelligence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-teal-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-teal-700 py-5 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
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

export default FAQSection;
