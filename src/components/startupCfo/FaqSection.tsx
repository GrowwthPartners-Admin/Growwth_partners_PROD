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
    question: "Do startups really need a CFO early?",
    answer: "Yes. CFO-level planning improves cash discipline, reduces risk, and significantly improves fundraising outcomes. Early financial leadership helps founders make better decisions and build investor confidence."
  },
  {
    question: "How is a Startup CFO different from a regular CFO?",
    answer: "A Startup CFO focuses on growth metrics, fundraising, and runway management rather than mature-company operations. They understand the unique challenges of early-stage companies and investor expectations."
  },
  {
    question: "Is Startup CFO support affordable for early-stage startups?",
    answer: "Yes. Fractional and virtual models make CFO expertise accessible without full-time hiring costs. You get senior-level financial leadership at a fraction of the cost of a full-time CFO."
  }
];

const FaqSection = () => {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              AEO Focused
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              FAQs – Startup CFO Services
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our Startup CFO services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-50 rounded-2xl border border-slate-200 px-6 overflow-hidden hover:border-orange-300 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-orange-600 py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
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

export default FaqSection;
