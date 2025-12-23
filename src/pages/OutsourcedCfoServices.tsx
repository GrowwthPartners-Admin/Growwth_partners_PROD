import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/outsourcedCfo/HeroSection";
import WhatIsSection from "@/components/outsourcedCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/outsourcedCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/outsourcedCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/outsourcedCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/outsourcedCfo/WhyChooseSection";
import UseCaseSection from "@/components/outsourcedCfo/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";

import CTASection from "@/components/outsourcedCfo/CTASection";

const faqs = [
  {
    question: "How are Outsourced CFO services different from Virtual CFO services?",
    answer: "Outsourced CFO services involve full ownership of the finance function, while Virtual CFO services focus primarily on strategic leadership. With Outsourced CFO, you get complete operational responsibility including oversight of accounting, bookkeeping, and payroll teams."
  },
  {
    question: "Do Outsourced CFO services replace an internal finance team?",
    answer: "They can either fully replace or work alongside existing finance staff, depending on your business needs. We tailor the engagement to complement your existing resources while ensuring complete CFO-level oversight."
  },
  {
    question: "Are Outsourced CFO services cost-effective?",
    answer: "Yes. They are typically far more cost-effective than hiring a full-time CFO and building an internal team. You get senior CFO expertise, finance team support, and AI-enabled tools at a fraction of the cost of building an equivalent in-house capability."
  }
];

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/outsourced-cfo-services/#faq",
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

const OutsourcedCfoServices = () => {
  return (
    <div className="min-h-screen">
      <SEOhelper
        title="Outsourced CFO Services Singapore | Full Finance Leadership"
        description="End-to-end outsourced CFO support including strategy, forecasting, reporting, and finance team supervision."
        keywords="outsourced CFO Singapore, CFO as a service, virtual CFO, end-to-end finance outsourcing"
        canonicalUrl="https://growwthpartners.com/outsourced-cfo-services"
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
          subtitle="Find answers to common questions about our Outsourced CFO Services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OutsourcedCfoServices;
