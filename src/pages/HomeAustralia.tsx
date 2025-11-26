import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/australiaHome/HeroSection";
import { WhyChooseSection } from "@/components/australiaHome/WhyChooseSection";
import { WhatWeDoSection } from "@/components/australiaHome/WhatWeDoSection";
import { AIAdvantageSection } from "@/components/australiaHome/AIAdvantageSection";
import { HowWeWorkSection } from "@/components/australiaHome/HowWeWorkSection";
import { SectorsSection } from "@/components/australiaHome/SectorsSection";
import { TestimonialSection } from "@/components/australiaHome/TestimonialSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";
import SEOhelper from "@/components/SEOhelper";

const HomeAustraliaPage = () => {
  const faqs = [
    {
      question: "What does Growwth Partners deliver for Australian businesses?",
      answer: "Growwth Partners delivers end-to-end finance — fractional CFO, accounting, bookkeeping, payroll, corporate tax (ATO), and board reporting — enhanced by Ryzup.ai to reduce errors and accelerate decisions."
    },
    {
      question: "How does Growwth Partners combine human expertise with AI?",
      answer: "Growwth Partners provides expert CFO leadership and standard finance processes, then layers Ryzup.ai for in-sheet analysis, error detection, reconciliations, dashboards, and privacy-safe AI usage."
    },
    {
      question: "What accuracy and control benefits does Growwth Partners target?",
      answer: "Growwth Partners targets near-zero-error operations using automated checks, reconciliation agents, and audit-friendly workpapers — improving trust in numbers without slowing the team."
    },
    {
      question: "Which platforms does Growwth Partners support?",
      answer: "Growwth Partners supports Google Sheets and leading cloud accounting platforms, integrating Ryzup.ai for live data, automation, and reporting."
    },
    {
      question: "How does Growwth Partners prepare leadership and investors?",
      answer: "Growwth Partners builds investor-ready packs, KPI dashboards, and plain-English narratives so boards see what changed, why, and what to do next."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/au/#faq",
        "name": "Finance & CFO Services Australia - FAQ | Growwth Partners",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
    {
      "@type": "LocalBusiness",
      "@id": "https://growwthpartners.com/#localbusiness",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com/au",
      "description": "Professional accounting, bookkeeping, payroll, taxation, compliance, cash flow modeling, and CFO services in Australia.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Clarence St",
        "addressLocality": "Sydney NSW 2000",
        "addressRegion": "Australia",
        "postalCode": "2000",
        "addressCountry": "NSW"
      },
      "telephone": "+65 9861 5600"
    },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        "name": "Growwth Partners",
        "url": "https://growwthpartners.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "jd@growwthpartners.com",
          "telephone": "+65 9861 5600",
          "contactType": "business"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOhelper
        title="AI-Powered Finance & CFO Services Australia | Expert Accounting, Tax & Strategic Finance | Growwth Partners"
        description="Growwth Partners Australia delivers expert finance services enhanced by AI. Get fractional CFO support, strategic finance, accounting, ATO tax compliance, and Ryzup.ai-powered automation for faster decisions and near-zero errors."
        keywords="fractional cfo australia, cfo services australia, strategic finance australia, accounting services australia, ato tax compliance, ai finance australia, ryzup.ai"
        canonicalUrl="https://growwthpartners.com/au"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <WhyChooseSection />
        <WhatWeDoSection />
        <AIAdvantageSection />
        <HowWeWorkSection />
        <SectorsSection />
        <TestimonialSection />
        <FaqSection faqs={faqs} />
        <CtaSection
          title="Expert finance, supercharged with AI."
          description="If defensible numbers, faster closes, and confident decisions matter, Growwth Partners Australia is ready."
          primaryButtonText="Book a Free Strategy Call"
          secondaryButtonText="Speak to a CFO Expert"
          backgroundColor="from-brand-blue to-blue-700"
        />
      </motion.div>
    </Layout>
  );
};

export default HomeAustraliaPage;
