import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/professionalServicesFinance/HeroSection";
import WhatIsSection from "@/components/professionalServicesFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/professionalServicesFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/professionalServicesFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/professionalServicesFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/professionalServicesFinance/WhyChooseSection";
import UseCaseSection from "@/components/professionalServicesFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/professionalServicesFinance/CTASection";

const faqs = [
  {
    question:
      "How is professional services finance different from standard accounting?",
    answer:
      "It focuses on project margins, utilisation, billing accuracy, and cash flow timing—not just historical reporting. Professional services finance requires tight integration between operations, billing, and finance to provide actionable insights for project-driven businesses.",
  },
  {
    question: "Can these services improve utilisation rates?",
    answer:
      "Yes. Utilisation and capacity analysis are core components of professional services finance. We track billable vs non-billable time, analyse recovery rates, and help you align capacity planning with your growth goals.",
  },
  {
    question: "Are these services suitable for small agencies or firms?",
    answer:
      "Yes. Services scale based on team size, project complexity, and growth stage. Whether you're a boutique agency or a growing consulting firm, our services adapt to your specific needs and budget.",
  },
];

const ProfessionalServicesFinance: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/professional-services-finance/#faq",
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
          "https://growwthpartners.com/professional-services-finance/#service",
        name: "professional-services-finance Services",
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
    <>
      <SEOhelper
        title="Professional Services Finance | Time, Billing & Profitability"
        description="Finance solutions for agencies, law firms, consulting firms, and service providers."
        keywords="professional services finance, agency CFO, revenue leakage control, billing finance"
        canonicalUrl="https://growwthpartners.com/professional-services-finance"
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
    </>
  );
};

export default ProfessionalServicesFinance;
