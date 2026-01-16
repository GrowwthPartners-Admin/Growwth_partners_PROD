import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/edtechFinance/HeroSection";
import WhatIsSection from "@/components/edtechFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/edtechFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/edtechFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/edtechFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/edtechFinance/WhyChooseSection";
import UseCaseSection from "@/components/edtechFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/edtechFinance/CTASection";
import { Layout } from "@/components/Layout";

const faqs = [
  {
    question: "How is EdTech finance different from SaaS finance?",
    answer:
      "EdTech finance focuses on cohort economics, content costs, enrolment cycles, and education-specific revenue models rather than pure recurring subscriptions.",
  },
  {
    question: "Can EdTech finance services help improve unit economics?",
    answer:
      "Yes. Unit economics analysis is central to EdTech finance, helping optimise pricing, acquisition, and content investment.",
  },
  {
    question: "Are these services suitable for early-stage EdTech startups?",
    answer:
      "Yes. Early financial discipline significantly improves scalability and funding outcomes.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/edtech-finance/#faq",
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
      "@id": "https://growwthpartners.com/edtech-finance/#service",
      name: "EdTech Finance Services Singapore",
      serviceType: "EdTech Finance",
      description:
        "Finance support for EdTech including revenue modelling, CAC/LTV analysis, and forecasting.",
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

const EdTechFinance = () => {
  return (
    <Layout>
      <SEOhelper
        title="EdTech Finance Services Singapore | Growth Finance & Modelling"
        description="Finance support for EdTech including revenue modelling, CAC/LTV analysis, and forecasting."
        keywords="edtech finance Singapore, CAC LTV modelling, edtech CFO, growth metrics"
        canonicalUrl="https://growwthpartners.com/edtech-finance"
        structuredData={structuredData}
      />
     
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Common questions about our EdTech Finance services"
        />
        <CTASection />
    
    </Layout>
  );
};

export default EdTechFinance;
