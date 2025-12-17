import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Does a Singaporean business need a director who resides there?",
      answer: "Yes, at least one director who resides in Singapore must be present in a Singaporean business. This is required according to Singapore's Companies Act."
    },
    {
      question: "What steps are necessary to form a company in Singapore?",
      answer: "The process includes: understanding registration requirements, choosing a corporate structure, assembling required documents, checking company name availability, submitting ACRA filings, and opening a corporate bank account. Required documents include identification documents of directors and shareholders, company name approval, registration form, memorandum and articles of association, appointment of company secretary, permits and business license, and bank account details."
    },
    {
      question: "What credentials are required for a director of a Singaporean company?",
      answer: "The director must be 18 years or above, mentally and physically capable, not involved in any punishable offense or fraud, financially stable and responsible, and have a record of adhering to laws and compliance requirements."
    },
    {
      question: "What is the cost of registering a company in Singapore?",
      answer: "The standard ACRA fee for registering a company in Singapore is approximately SGD 315. Additional professional fees for advisory and secretarial services vary based on the scope of support required."
    },
    {
      question: "Can I operate a business in Singapore without registering it?",
      answer: "No, you cannot legally operate a business in Singapore without proper registration. Company registration with ACRA is mandatory for all business entities operating in Singapore."
    },
    {
      question: "Why should your company incorporate in Singapore?",
      answer: "Singapore offers an attractive tax system with no capital gains tax, strong legal framework, strategic location in Asia, ease of doing business, access to talent, and robust financial infrastructure. These factors make it a preferred choice for entrepreneurs and businesses expanding in Asia."
    }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about company incorporation in Singapore.
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
                  className="group flex items-center justify-between w-full bg-[#ededed] px-6 py-6 font-bold text-xl md:text-2xl text-black rounded-[4px] border-[1.5px] border-[#e2e2e2] transition-all duration-200 shadow-none outline-none focus-visible:outline-none data-[state=open]:border-[2.5px] data-[state=open]:border-orange-500 data-[state=open]:rounded-[6px]"
                >
                  <span className="text-left w-full select-none font-medium">{faq.question}</span>
                  <span className="flex items-center justify-center transition-all duration-300">
                    <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-black rounded-full text-white transition-all duration-200">
                      <Plus className="w-6 h-6 transition-all duration-200 group-data-[state=open]:hidden" strokeWidth={3} />
                      <Minus className="w-6 h-6 transition-all duration-200 group-data-[state=closed]:hidden" strokeWidth={3} />
                    </span>
                  </span>
                </AccordionTrigger>
                
                <AccordionContent className="bg-white px-6 pb-6 pt-2 border border-[#e2e2e2] border-t-0 text-lg text-gray-800 font-normal leading-relaxed rounded-b-[6px] animate-slide-down">
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
