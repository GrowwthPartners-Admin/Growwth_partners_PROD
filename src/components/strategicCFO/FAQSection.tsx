import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 border-2 border-gray-200 rounded-xl px-6 hover:border-brand-orange/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-brand-orange py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
                  Speak To An Expert
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
