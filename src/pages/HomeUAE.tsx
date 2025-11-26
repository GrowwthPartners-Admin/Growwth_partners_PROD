import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/uaeHome/HeroSection";
import { WhyChooseSection } from "@/components/uaeHome/WhyChooseSection";
import { WhatWeDoSection } from "@/components/uaeHome/WhatWeDoSection";
import { AIAdvantageSection } from "@/components/uaeHome/AIAdvantageSection";
import { HowWeWorkSection } from "@/components/uaeHome/HowWeWorkSection";
import { SectorsSection } from "@/components/uaeHome/SectorsSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";

  const faqItems = [
    {
      question: "What does Growwth Partners deliver for UAE businesses?",
      answer: "Growwth Partners delivers end-to-end finance: fractional CFO, strategic finance, accounting, payroll with WPS, UAE Corporate Tax and VAT compliance, and board-ready reporting, enhanced by Ryzup.ai automation."
    },
    {
      question: "How does Growwth Partners combine finance expertise with AI?",
      answer: "Growwth Partners provides experienced finance leadership and processes, then layers Ryzup.ai for in-sheet analysis, error detection, reconciliations, dashboards, and privacy-safe AI usage inside familiar tools."
    },
    {
      question: "What accuracy and control outcomes does Growwth Partners target?",
      answer: "Growwth Partners targets near-zero-error operations through automated checks, reconciliation agents, and audit-friendly documentation that improve trust in numbers without slowing the team."
    },
    {
      question: "Which platforms does Growwth Partners support in the UAE?",
      answer: "Growwth Partners supports Google Sheets and leading cloud accounting platforms, integrating Ryzup.ai for live data, workflow automation, and decision-ready analytics."
    },
    {
      question: "How does Growwth Partners support UAE Corporate Tax and VAT?",
      answer: "Growwth Partners manages Corporate Tax registration and returns, VAT registrations and returns, compliance calendars, and FTA correspondence, with clear reporting for leadership and auditors."
    },
    {
      question: "Does Growwth Partners help with ESR and UBO requirements?",
      answer: "Growwth Partners supports Economic Substance notifications and reports, UBO record keeping, and related governance practices aligned to UAE expectations."
    }
  ];

const HomeUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/uae/#faq",
        "name": "Finance & CFO Services UAE - FAQ | Growwth Partners",
        "mainEntity": faqItems.map(faq => ({
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
      "url": "https://growwthpartners.com/uae",
      "description": "Professional accounting, bookkeeping, payroll, taxation, compliance, cash flow modeling, and CFO services in UAE.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "32 Marasi Drive Street",
        "addressLocality": "Business Bay - Dubai",
        "addressRegion": "The Binary by OMNIYAT,UAE",
        "postalCode": "",
        "addressCountry": "AE"
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
        title="Growwth Partners UAE | Expert Finance with AI - CFO, Tax & Accounting"
        description="Work with senior finance experts who blend CFO expertise with practical AI. Get cleaner numbers, faster reporting, and confident decisions across accounting, VAT, Corporate Tax, and strategic finance in the UAE. Powered by Ryzup.ai."
        keywords="uae accounting, dubai cfo services, vat compliance uae, corporate tax uae, payroll uae, fractional cfo dubai, business finance uae, ai accounting"
        canonicalUrl="https://growwthpartners.com/uae"
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
        <FaqSection faqs={faqItems} />
        <CtaSection
          title="Expert finance, powered by practical AI for the UAE"
          description="If your goals are cleaner numbers, faster closes, and confident decisions, Growwth Partners UAE is ready."
          primaryButtonText="Book a Free Strategy Call"
          secondaryButtonText="Speak to a CFO Expert"
          backgroundColor="from-brand-blue to-blue-700"
        />
      </motion.div>
    </Layout>
  );
};

export default HomeUAE;
