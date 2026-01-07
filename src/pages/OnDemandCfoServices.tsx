import SEOhelper from "@/components/SEOhelper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/onDemandCfo/HeroSection";
import WhatIsSection from "@/components/onDemandCfo/WhatIsSection";
import WhenToUseSection from "@/components/onDemandCfo/WhenToUseSection";
import ChallengesSection from "@/components/onDemandCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/onDemandCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/onDemandCfo/WhyChooseSection";
import UseCaseSection from "@/components/onDemandCfo/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/onDemandCfo/CTASection";

const faqs = [
  {
    question:
      "What is the difference between On-Demand CFO and Part-Time CFO services?",
    answer:
      "On-Demand CFO services are short-term and outcome-driven, while Part-Time CFO services provide ongoing financial leadership over a longer period.",
  },
  {
    question: "How quickly can On-Demand CFO support begin?",
    answer:
      "Engagements typically begin immediately, depending on urgency and scope.",
  },
  {
    question: "Can On-Demand CFO services help with investor meetings?",
    answer:
      "Yes. These services are commonly used to prepare financial models, investor narratives, and board presentations.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Growwth Partners",
  url: "https://growwthpartners.com",
  logo: "https://growwthpartners.com/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png",
  description:
    "On-Demand CFO Services in Singapore - Immediate CFO-Level Expertise for High-Stakes Financial Decisions",
  sameAs: [
    "https://www.linkedin.com/company/growwth-partners",
    "https://twitter.com/growwthpartners",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "65 Chulia Street",
    addressLocality: "Singapore",
    postalCode: "049513",
    addressCountry: "SG",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [faqStructuredData, organizationData],
};

const OnDemandCfoServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOhelper
        title="On-Demand CFO Services in Singapore | Instant Financial Expertise"
        description="Access senior CFO expertise on-demand for strategy, modelling, cash flow issues, and investor discussions."
        keywords="on-demand CFO Singapore, CFO consulting, hourly CFO services, business modelling Singapore"
        canonicalUrl="https://growwthpartners.com/on-demand-cfo-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsSection />
        <WhenToUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about our On-Demand CFO services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OnDemandCfoServices;
