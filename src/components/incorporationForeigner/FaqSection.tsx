import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const faqs = [
  {
    question: "Can a foreigner register a company in Singapore remotely?",
    answer: "Yes. Growwth Partners coordinates remote filings and company setup. KYC and document verification are required."
  },
  {
    question: "Is a local director mandatory for foreigner incorporation in Singapore?",
    answer: "Yes. The Companies Act requires at least one ordinarily resident director. Growwth Partners provides compliant pathways and options."
  },
  {
    question: "How long does it take to set up a company in Singapore as a foreigner?",
    answer: "Most straightforward cases complete within days once KYC and documents are ready. Banking timelines vary by provider."
  },
  {
    question: "Can Growwth Partners help with Employment Pass or EntrePass planning?",
    answer: "Growwth Partners prepares supporting corporate documentation and provides guidance on pathways. Final decisions rest with authorities."
  },
  {
    question: "What post-incorporation compliance does Growwth Partners handle?",
    answer: "Company secretary duties, statutory registers, annual ACRA filings, corporate tax with IRAS, plus bookkeeping, payroll, and GST compliance."
  },
  {
    question: "Will banking require a physical visit?",
    answer: "Some banks require in-person verification; others may support remote onboarding based on risk and documentation. Growwth Partners helps prepare the banking pack."
  }
];

export const FaqSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-2" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQs: Foreign Founder{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Incorporation in Singapore
            </span>
          </h2>
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
                className="bg-white rounded-xl border border-orange-100 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            onClick={() => setContactModalOpen(true)}
          >
            Book a Free Incorporation Consult
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
