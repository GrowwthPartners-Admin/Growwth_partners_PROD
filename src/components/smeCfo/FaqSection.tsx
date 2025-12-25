import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Do SMEs really need a CFO?',
    answer: 'Yes. SMEs benefit significantly from CFO-level oversight to improve cash flow control, profitability, and strategic decision-making.',
  },
  {
    question: 'How are SME CFO services different from accounting services?',
    answer: 'Accounting focuses on historical compliance, while SME CFO services focus on planning, forecasting, and business performance.',
  },
  {
    question: 'Are SME CFO services affordable?',
    answer: 'Yes. Fractional and virtual CFO models make senior financial leadership accessible without full-time hiring costs.',
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-amber-600 font-medium tracking-wide uppercase">
              SME CFO Services (AEO Focused)
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-amber-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
