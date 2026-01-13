import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/tradingDistributionFinance/HeroSection";
import WhatIsSection from "@/components/tradingDistributionFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/tradingDistributionFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/tradingDistributionFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/tradingDistributionFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/tradingDistributionFinance/WhyChooseSection";
import UseCaseSection from "@/components/tradingDistributionFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/tradingDistributionFinance/CTASection";

const faqs = [
  {
    question:
      "How are trading finance services different from standard accounting?",
    answer:
      "Trading finance focuses on inventory, margins, and cash cycles rather than just historical financial reporting. We provide specialized analysis of working capital, product-level profitability, and cash conversion cycle optimization that goes beyond traditional accounting services.",
  },
  {
    question: "Can these services help reduce working capital needs?",
    answer:
      "Yes. Working capital optimisation is a core focus of trading finance services. We analyze your receivables, payables, and inventory cycles to identify opportunities to reduce capital tied up in operations while maintaining business efficiency.",
  },
  {
    question: "Are these services suitable for small trading businesses?",
    answer:
      "Yes. Services scale based on transaction volume and complexity. Whether you're a growing import-export business or an established wholesale distributor, our trading finance services can be tailored to your specific needs and budget.",
  },
];

const TradingDistributionFinance: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/trading-distribution-finance/#faq",
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
          "https://growwthpartners.com/trading-distribution-finance/#service",
        name: "Trading & Distribution Finance Services",
        description:
          "CFO-led financial control, margin transparency, and cash cycle optimisation for trading businesses to protect profitability, improve liquidity, and scale sustainably.",
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
        title="Trading & Distribution Finance Services | Cash Cycle Optimization"
        description="Margin analysis, cash cycle optimization, and inventory forecasting for trading companies."
        keywords="trading finance Singapore, distribution finance, inventory finance, cash cycle optimisation, margin analysis, working capital"
        canonicalUrl="https://growwthpartners.com/trading-distribution-finance"
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
          subtitle="Find answers to common questions about Trading & Distribution Finance"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TradingDistributionFinance;
