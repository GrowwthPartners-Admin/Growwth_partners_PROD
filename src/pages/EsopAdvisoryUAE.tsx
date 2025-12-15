import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/esopAdvisoryUAE/HeroSection";
import WhatSetsUsApartSection from "@/components/esopAdvisoryUAE/WhatSetsUsApartSection";
import TailoredServicesSection from "@/components/esopAdvisoryUAE/TailoredServicesSection";
import PricingTableSection from "@/components/esopAdvisoryUAE/PricingTableSection";
import ClientsSection from "@/components/esopAdvisoryUAE/ClientsSection";
import BroaderSupportSection from "@/components/esopAdvisoryUAE/BroaderSupportSection";
import CTASection from "@/components/esopAdvisoryUAE/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How do ESOPs support growth for UAE companies?",
    answer:
      "ESOPs align employee incentives with company outcomes, strengthening motivation, retention, and performance during scaling and fundraising.",
  },
  {
    question: "Which industries in the UAE benefit most from ESOPs?",
    answer:
      "Technology, professional services, and high-growth ventures benefit strongly, though well-designed plans work across many sectors.",
  },
  {
    question: "How does ESOP participation influence culture?",
    answer:
      "Employee ownership encourages accountability, collaboration, and long-term thinking, improving engagement and satisfaction.",
  },
  {
    question: "Are there tax considerations for ESOPs in the UAE?",
    answer:
      "Tax outcomes depend on structure, jurisdiction, and participant residency. Growwth Partners advises on frameworks and coordinates with legal counsel where needed.",
  },
  {
    question: "What is a typical ESOP implementation timeline in the UAE?",
    answer:
      "Most implementations complete within weeks once documentation and approvals are aligned. Growwth Partners manages a clear, step-by-step process.",
  },
  {
    question: "How does Growwth Partners' ESOP advisory stand out in the UAE?",
    answer:
      "Growwth Partners combines local insight with international experience, tailored plan design, clear communications, and end-to-end administration support.",
  },
  {
    question: "What ongoing ESOP support does Growwth Partners provide?",
    answer:
      "Administration, reporting, participant education, performance reviews, and periodic plan refreshes to keep alignment with business goals.",
  },
];

const EsopAdvisoryUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com//uae/esop-advisory-uae/#faq",
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
        "@id": "https://growwthpartners.com//uae/esop-advisory-uae/#service",
        name: "ESOP Advisory Services UAE | Expert Startup ESOP Support",
        serviceType: [
          "ESOP Advisory Services UAE | Expert Startup ESOP Support",
        ],
        description:
          "Get expert ESOP advisory services in UAE. Growwth Partners helps startups and companies design, structure, and implement employee stock option plans that attract and retain top talent.",
        areaServed: ["United Arab Emirates"],
        provider: {
          "@id": "https://growwthpartners.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="ESOP Advisory Services UAE | Expert Startup ESOP Support"
        description="Get expert ESOP advisory services in UAE. Growwth Partners helps startups and companies design, structure, and implement employee stock option plans that attract and retain top talent."
        keywords="ESOP advisory UAE, employee stock option plan UAE, ESOP consulting Dubai, ESOP implementation UAE, startup ESOP advisory"
        canonicalUrl="https://growwthpartners.com//uae/esop-advisory-uae"
        structuredData={structuredData}
      />
      <HeroSection />
      <WhatSetsUsApartSection />
      <TailoredServicesSection />
      <PricingTableSection />
      <ClientsSection />

      <FaqSection
        faqs={faqs}
        subtitle="Find answers to Common questions about  Corporate Tax Filing in UAE"
      />
      <BroaderSupportSection />
      <CTASection />
    </Layout>
  );
};

export default EsopAdvisoryUAE;
