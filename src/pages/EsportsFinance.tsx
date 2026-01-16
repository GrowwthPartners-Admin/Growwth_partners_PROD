import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/esportsFinance/HeroSection";
import WhatIsSection from "@/components/esportsFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/esportsFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/esportsFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/esportsFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/esportsFinance/WhyChooseSection";
import UseCaseSection from "@/components/esportsFinance/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/esportsFinance/CTASection";
import { Layout } from "@/components/Layout";

const faqs = [
  {
    question: "How is gaming finance different from SaaS or tech finance?",
    answer:
      "Gaming finance focuses on multi-stream monetisation, development cycles, and player cohort economics rather than predictable recurring revenue.",
  },
  {
    question: "Can these services support esports teams and tournaments?",
    answer:
      "Yes. Event-level profitability, sponsorship tracking, and cash flow planning are core components.",
  },
  {
    question: "Are these services suitable for early-stage gaming studios?",
    answer:
      "Yes. Early financial discipline improves sustainability and funding outcomes.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/esports-finance/#faq",
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
      "@id": "https://growwthpartners.com/esports-finance/#service",
      name: "Esports & Gaming Finance Services Singapore",
      serviceType: "Esports & Gaming Finance",
      description:
        "Finance support for eSports teams and platforms including sponsorship revenue tracking and payroll.",
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

const EsportsFinance = () => {
  return (
    <Layout>
      <SEOhelper
        title="eSports Finance Services | Sponsorship & Revenue Tracking"
        description="Finance support for eSports teams and platforms including sponsorship revenue tracking and payroll."
        keywords="esports finance, gaming CFO, sponsorship reporting"
        canonicalUrl="https://growwthpartners.com/esports-finance"
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
          subtitle="Common questions about our Esports & Gaming Finance services"
        />
        <CTASection />
    
    </Layout>
  );
};

export default EsportsFinance;
