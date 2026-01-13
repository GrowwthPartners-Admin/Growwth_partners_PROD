import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/familyOfficeFinanceServices/HeroSection";
import WhatIsSection from "@/components/familyOfficeFinanceServices/WhatIsSection";
import WhoShouldUseSection from "@/components/familyOfficeFinanceServices/WhoShouldUseSection";
import ChallengesSection from "@/components/familyOfficeFinanceServices/ChallengesSection";
import HowWeDeliverSection from "@/components/familyOfficeFinanceServices/HowWeDeliverSection";
import WhyChooseSection from "@/components/familyOfficeFinanceServices/WhyChooseSection";
import UseCaseSection from "@/components/familyOfficeFinanceServices/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/familyOfficeFinanceServices/CTASection";

const faqs = [
  {
    question:
      "How are Family Office Finance services different from private accounting?",
    answer:
      "Family Office Finance services focus on consolidation, governance, and portfolio-level decision-making—not just entity-level accounting. We provide institutional-grade reporting across all assets, investment performance tracking, and CFO-led strategic oversight, which goes far beyond traditional accounting services.",
  },
  {
    question: "Are these services confidential?",
    answer:
      "Yes. Confidentiality and data security are core principles of our family office engagements. We use secure systems with access-controlled reporting, ensuring complete discretion for all family principals and trustees. All information is handled with the utmost privacy and security protocols.",
  },
  {
    question: "Can services scale as the family office grows?",
    answer:
      "Yes. Our finance structures are specifically designed to scale with asset complexity and geographic expansion. Whether you're adding new investment vehicles, expanding into new jurisdictions, or increasing the number of entities under management, our services adapt to meet your evolving needs.",
  },
];

const FamilyOfficeFinanceServices: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/family-office-finance-services/#faq",
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
        "@type": "Service",
        "@id":
          "https://growwthpartners.com/family-office-finance-services/#service",
        name: "SME Finance Services",
        description:
          "End-to-end financial support for SMEs including planning, forecasting, cash flow management, profitability analysis, and management reporting.",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
          url: "https://growwthpartners.com",
        },
        areaServed: [
          { "@type": "Country", name: "Singapore" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Australia" },
        ],
        serviceType: "Financial Services",
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
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
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Family Office Finance Services Singapore | Reporting, Control & Advisory"
        description="Finance support for family offices including consolidated reporting, investment dashboards, and cash flow planning."
        keywords="family office finance, investment reporting, wealth management finance, family office Singapore, consolidated reporting, wealth governance"
        canonicalUrl="https://growwthpartners.com/family-office-finance-services"
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
          subtitle="Find answers to common questions about Family Office Finances"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FamilyOfficeFinanceServices;
