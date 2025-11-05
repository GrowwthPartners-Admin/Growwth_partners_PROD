import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';
import { ContactModal } from '@/components/ui/contact-modal';

export const FAQSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const faqs = [
    {
      question: 'What do you mean by "part-time CFO"?',
      answer: 'A part-time CFO is a senior finance leader who joins your business in a flexible capacity. You get cash flow control, investor-ready reporting, and planning support without hiring a permanent executive. This is the foundation of CFO services Singapore founders are actively replacing full-time hires with.'
    },
    {
      question: 'How is Part-time CFO different from accounting?',
      answer: 'Accounting tells you what happened. A CFO tells you what it means and what to do next. We sit with leadership, shape strategy, and influence hiring, pricing, spend, and expansion.'
    },
    {
      question: 'Can Growwth Partners help with fundraising?',
      answer: 'Yes. We prepare investor-facing finance packs, improve your story, and support you through due diligence. That level of investor support is a core part of our CFO services Singapore offering.'
    },
    {
      question: 'Will Growwth Partners help control burn and extend runway?',
      answer: 'Yes. We model burn, prioritise spend, align headcount with revenue reality, and give you visibility on how many months of runway you actually have at your current pace.'
    },
    {
      question: 'Does Growwth Partners work with profitable businesses, not just startups?',
      answer: 'Yes. Many of our clients are profitable SMEs that want structure, reporting discipline and executive-level finance leadership without hiring an in-house CFO.'
    },
    {
      question: 'How fast can we start?',
      answer: 'We begin with a strategy call. From that first session, we identify the most urgent problem, whether that\'s burn, reporting, investor pressure or margin control. Then we build the first deliverable you need.'
    },
    {
      question: 'Does Growwth Partners work in confidential?',
      answer: 'Yes. All reporting, forecasting and discussions are handled as if we were already your internal CFO. Confidentiality is built in.'
    }
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
            Find answers to common questions about Part-Time CFO & Strategic Finance Support For Singapore Businesses
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-orange/10 via-blue-50/50 to-orange-50/30 border-2 border-brand-orange/30 shadow-xl">
            <CardContent className="p-10 text-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Book your free consultation or speak with a part-time CFO today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setContactOpen(true)}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                >
                  Book a Free CFO Consultation
                  {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> */}
                </Button>
                <Button
                  onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
                  className="bg-white hover:bg-white text-orange-600 px-8 py-6 border-2 border-orange-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group"
                >
                  Speak With a Part-Time CFO Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
