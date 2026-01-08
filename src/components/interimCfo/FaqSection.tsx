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
      question: "How long does an Interim CFO engagement last?",
      answer: "Engagements typically range from a few months to one year, depending on business needs and transition complexity. We tailor the duration to ensure proper stabilisation and handover."
    },
    {
      question: "Is an Interim CFO involved in daily operations?",
      answer: "Yes. Interim CFOs take full ownership of finance leadership, including team oversight and operational decision-making. Unlike advisory roles, they are hands-on and accountable for results."
    },
    {
      question: "Can an Interim CFO help during audits or due diligence?",
      answer: "Yes. Interim CFOs frequently support audits, regulatory reviews, and investor due diligence processes. They bring the expertise and credibility needed to manage these critical situations."
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

            <h2 className="text-3xl md:text-4xl font-bold text-growwth-dark mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-growwth-primary">
                Questions
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Common questions about Interim CFO Services
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
                  <AccordionTrigger className="text-left text-lg font-semibold text-growwth-dark hover:text-orange-600 py-5 hover:no-underline">
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
