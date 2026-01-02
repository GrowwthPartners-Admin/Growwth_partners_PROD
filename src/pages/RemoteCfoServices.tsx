import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/remoteCfo/HeroSection";
import WhatIsSection from "@/components/remoteCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/remoteCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/remoteCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/remoteCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/remoteCfo/WhyChooseSection";
import UseCaseSection from "@/components/remoteCfo/UseCaseSection";
import CTASection from "@/components/remoteCfo/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "Is a Remote Finance Team as effective as an in-house team?",
    answer:
      "Yes. With clear ownership, structured processes, and real-time tools, remote teams often outperform fragmented in-house setups. Our CFO-led delivery model ensures accountability and continuity that matches or exceeds traditional internal teams.",
  },
  {
    question: "Can this model scale as the business grows?",
    answer:
      "Yes. The team structure and level of support scale with your business complexity. As you grow, we can add analysts, expand reporting scope, and increase CFO involvement—all without the delays and costs of internal hiring.",
  },
  {
    question: "Does Growwth Partners handle compliance and reporting?",
    answer:
      "Yes. We manage finance execution and ensure compliance-ready reporting aligned with Singapore's regulatory requirements. Our integrated approach covers bookkeeping, payroll, statutory compliance, and management reporting under one accountable team.",
  },
];

const RemoteCfoServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/remote-cfo-finance-team/#faq",
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
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Remote CFO & Finance Team Singapore | Fully Outsourced Finance"
        description="Remote finance team support including CFO, analysts, bookkeepers, and controllers."
        keywords="remote finance team Singapore, outsourced finance team, virtual finance department"
        canonicalUrl="https://growwthpartners.com/remote-cfo-finance-team"
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
          subtitle="Find answers to common questions about our Startup CFO Services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default RemoteCfoServices;
