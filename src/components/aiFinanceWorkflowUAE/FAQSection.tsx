import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Growwth Partners deliver AI automation in the UAE?",
    answer: "Growwth Partners embeds an AI assistant, forecasting tools, error detection and workflow agents inside Google Sheets, integrated with your accounting platform, to automate analysis, reporting, reconciliations and quality checks.",
  },
  {
    question: "Is Ryzup.ai suitable for SMEs and startups in the UAE?",
    answer: "Ryzup.ai supports startups, SMEs and growing finance teams with a modular setup so organisations can start small and expand automation as needs evolve.",
  },
  {
    question: "Will finance teams need to learn a new system?",
    answer: "Ryzup.ai runs inside Google Sheets and alongside existing accounting platforms, so teams keep familiar workflows that are enhanced by AI.",
  },
  {
    question: "How does Growwth Partners improve data accuracy and compliance?",
    answer: "Smart error detection, reconciliation and GL agents, plus anonymisation, help reduce spreadsheet errors, highlight inconsistencies and protect sensitive information while using AI. Outputs support VAT, Corporate Tax and FTA-aligned documentation.",
  },
  {
    question: "How quickly can UAE businesses see value?",
    answer: "Most teams connect data and run first automations within days, then expand into continuous monitoring, dashboards and forecasting.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Finance Workflow Integration in the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              UAE
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-xl border border-amber-100/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
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

export default FAQSection;
