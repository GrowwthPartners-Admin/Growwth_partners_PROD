import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "How is ecommerce finance different from regular accounting?",
      answer: "Ecommerce finance focuses on SKU-level margins, cash flow timing, platform reconciliations, and marketing ROI—beyond basic accounting. It's specifically designed for the high transaction volumes and complex revenue flows typical of ecommerce businesses."
    },
    {
      question: "Can ecommerce finance services help with inventory planning?",
      answer: "Yes. Inventory planning and cash flow forecasting are core components of ecommerce finance services. We help you optimise working capital, predict restocking needs, and avoid both overstocking and stockouts."
    },
    {
      question: "Are these services suitable for small ecommerce brands?",
      answer: "Yes. Ecommerce finance services scale with order volume and complexity, making them suitable for both growing brands and established businesses. We tailor our approach based on your current stage and growth trajectory."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">AEO Focused</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Questions
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Common questions about Ecommerce Finance Services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-orange-300 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
