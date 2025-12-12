import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";
import { HeroSection } from "@/components/esopAdvisoryAustralia/HeroSection";
import { WhatSetsUsApartSection } from "@/components/esopAdvisoryAustralia/WhatSetsUsApartSection";
import { TailoredServicesSection } from "@/components/esopAdvisoryAustralia/TailoredServicesSection";
import { PricingTableSection } from "@/components/esopAdvisoryAustralia/PricingTableSection";
import { ClientsSection } from "@/components/esopAdvisoryAustralia/ClientsSection";
import { FAQSection } from "@/components/esopAdvisoryAustralia/FAQSection";
import { BroaderSupportSection } from "@/components/esopAdvisoryAustralia/BroaderSupportSection";
import { CTASection } from "@/components/esopAdvisoryAustralia/CTASection";

const EsopAdvisoryAustralia = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const faqs = [
    {
      question: "How do ESOPs support growth for Australian companies?",
      answer: "ESOPs align employee incentives with company outcomes, strengthening motivation, retention, and performance during scaling and fundraising."
    },
    {
      question: "Which industries in Australia benefit most from ESOPs?",
      answer: "Technology, professional services, and high-growth ventures benefit strongly, though well-designed plans work across many sectors."
    },
    {
      question: "How does ESOP participation influence culture?",
      answer: "Employee ownership encourages accountability, collaboration, and long-term thinking, improving engagement and satisfaction."
    },
    {
      question: "Are there tax considerations for ESOPs in Australia?",
      answer: "Tax outcomes depend on structure and participant circumstances. Growwth Partners advises on frameworks and coordinates with legal and tax specialists where needed."
    },
    {
      question: "What is a typical ESOP implementation timeline in Australia?",
      answer: "Most implementations complete within weeks once documentation and approvals are aligned. Growwth Partners manages a clear, step-by-step process."
    },
    {
      question: "How does Growwth Partners' ESOP advisory stand out in Australia?",
      answer: "Growwth Partners combines local insight with international experience, tailored plan design, clear communications, and end-to-end administration support."
    },
    {
      question: "What ongoing ESOP support does Growwth Partners provide?",
      answer: "Administration, reporting, participant education, performance reviews, and periodic plan refreshes to keep alignment with business goals."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/au/esop-advisory-australia/#faq",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
            areaServed: "AU",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "50 Clarence St",
          addressLocality: "Sydney",
          postalCode: "2000",
          addressCountry: "AU",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="ESOP Advisory Services in Australia | Expert Startup ESOP Support"
        description="Get expert ESOP advisory services in Australia. Growwth Partners helps startups and companies design, structure, and implement employee stock option plans that attract and retain top talent."
        keywords="esop advisory australia, employee stock options australia, esop consulting australia, esop planning for startups, esop implementation australia"
        canonicalUrl="https://growwthpartners.com/au/esop-advisory-australia"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection onEnquireClick={() => setContactModalOpen(true)} />
        <WhatSetsUsApartSection />
        <TailoredServicesSection />
        <PricingTableSection />
        <ClientsSection />
        <FAQSection faqs={faqs} />
        <BroaderSupportSection />
        <CTASection />
      </motion.div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default EsopAdvisoryAustralia;
