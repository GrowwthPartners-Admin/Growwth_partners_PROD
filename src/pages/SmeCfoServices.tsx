import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/smeCfo/HeroSection";
import WhatIsSection from "@/components/smeCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/smeCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/smeCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/smeCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/smeCfo/WhyChooseSection";
import UseCaseSection from "@/components/smeCfo/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/smeCfo/CTASection";

const faqs = [
  {
    question: "Do SMEs really need a CFO?",
    answer:
      "Yes. SMEs benefit significantly from CFO-level oversight to improve cash flow control, profitability, and strategic decision-making.",
  },
  {
    question: "How are SME CFO services different from accounting services?",
    answer:
      "Accounting focuses on historical compliance, while SME CFO services focus on planning, forecasting, and business performance.",
  },
  {
    question: "Are SME CFO services affordable?",
    answer:
      "Yes. Fractional and virtual CFO models make senior financial leadership accessible without full-time hiring costs.",
  },
];

const SmeCfoServices: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/sme-cfo-services/#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "AdministrativeArea",
            name: "Singapore",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
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
            areaServed: "SG",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Chulia Street",
          addressLocality: "Singapore",
          postalCode: "049513",
          addressCountry: "SG",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="SME CFO Services in Singapore | Financial Operations & Strategy"
        description="SME CFO services including financial planning, cash flow management, profitability analysis, and strategic decision support for growing SMEs."
        keywords="SME CFO Singapore, SME finance services, outsourced CFO for SMEs, cash flow for SMEs"
        canonicalUrl="https://growwthpartners.com/sme-cfo-services"
        structuredData={structuredData}
      />

      <Navbar />

      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about our SME CFO Services"
        />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default SmeCfoServices;
