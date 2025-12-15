import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do ESOPs support growth for UAE companies?",
    answer: "ESOPs align employee incentives with company outcomes, strengthening motivation, retention, and performance during scaling and fundraising.",
  },
  {
    question: "Which industries in the UAE benefit most from ESOPs?",
    answer: "Technology, professional services, and high-growth ventures benefit strongly, though well-designed plans work across many sectors.",
  },
  {
    question: "How does ESOP participation influence culture?",
    answer: "Employee ownership encourages accountability, collaboration, and long-term thinking, improving engagement and satisfaction.",
  },
  {
    question: "Are there tax considerations for ESOPs in the UAE?",
    answer: "Tax outcomes depend on structure, jurisdiction, and participant residency. Growwth Partners advises on frameworks and coordinates with legal counsel where needed.",
  },
  {
    question: "What is a typical ESOP implementation timeline in the UAE?",
    answer: "Most implementations complete within weeks once documentation and approvals are aligned. Growwth Partners manages a clear, step-by-step process.",
  },
  {
    question: "How does Growwth Partners' ESOP advisory stand out in the UAE?",
    answer: "Growwth Partners combines local insight with international experience, tailored plan design, clear communications, and end-to-end administration support.",
  },
  {
    question: "What ongoing ESOP support does Growwth Partners provide?",
    answer: "Administration, reporting, participant education, performance reviews, and periodic plan refreshes to keep alignment with business goals.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Questions
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
