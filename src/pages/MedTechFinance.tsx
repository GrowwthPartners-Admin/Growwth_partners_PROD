import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/medtechFinance/HeroSection";
import WhatIsSection from "@/components/medtechFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/medtechFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/medtechFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/medtechFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/medtechFinance/WhyChooseSection";
import UseCaseSection from "@/components/medtechFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/medtechFinance/CTASection";

const faqs = [
  {
    question: "How is healthcare finance different from standard finance?",
    answer:
      "Healthcare finance integrates compliance, cost control, and risk management into financial reporting and planning.",
  },
  {
    question: "Can these services support regulatory audits?",
    answer:
      "Yes. Audit readiness and compliance documentation are core components.",
  },
  {
    question: "Are these services suitable for early-stage MedTech startups?",
    answer:
      "Yes. Early financial discipline improves compliance outcomes and investor trust.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/medtech-finance/#faq",
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
      "@id": "https://growwthpartners.com/medtech-finance/#service",
      name: "medtech-finance Singapore",
      serviceType: "medtech-finance",
      description:
        "Monthly bookkeeping, reconciliations, expense tracking, and closing delivered by an expert team.",
      provider: {
        "@id": "https://growwthpartners.com/#organization",
      },
      areaServed: ["Singapore", "United Arab Emirates", "Australia"],
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

const MedTechFinance = () => {
  return (
    <>
      <SEOhelper
        title="MedTech Finance Services Singapore | Forecasting & Compliance"
        description="Finance services for MedTech including modelling, compliance reporting, and cost tracking"
        keywords="medtech finance Singapore, medtech CFO, R&D costing, medical technology finance"
        canonicalUrl="https://growwthpartners.com/medtech-finance"
        structuredData={structuredData}
      />
      <main className="overflow-hidden">
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Common questions about our Intrim CFO services"
        />
        <CTASection />
      </main>
    </>
  );
};

export default MedTechFinance;
