import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/partTimeFinanceTeam/HeroSection";
import WhatIsSection from "@/components/partTimeFinanceTeam/WhatIsSection";
import WhoShouldUseSection from "@/components/partTimeFinanceTeam/WhoShouldUseSection";
import ChallengesSection from "@/components/partTimeFinanceTeam/ChallengesSection";
import HowWeDeliverSection from "@/components/partTimeFinanceTeam/HowWeDeliverSection";
import WhyChooseSection from "@/components/partTimeFinanceTeam/WhyChooseSection";
import UseCaseSection from "@/components/partTimeFinanceTeam/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";

import CTASection from "@/components/partTimeFinanceTeam/CTASection";

const faqs = [
  {
    question:
      "How is a Part-Time Finance Team different from outsourcing bookkeeping?",
    answer:
      "A Part-Time Finance Team provides structured, ongoing support and integrates closely with leadership and CFO services, rather than performing isolated tasks. This means you get consistent professionals who understand your business, follow established processes, and contribute to strategic discussions—not just transactional service providers.",
  },
  {
    question: "Can this service scale as transaction volumes increase?",
    answer:
      "Yes. The level of support scales with your business needs and transaction complexity. We can increase hours, add specialised resources, or expand the scope of services as your business grows, ensuring your finance function always matches your operational requirements.",
  },
  {
    question: "Is this suitable for early-stage startups?",
    answer:
      "Absolutely. It provides professional finance execution without the cost of full-time hires. Early-stage startups benefit from having experienced finance professionals handle their books correctly from day one, establishing good practices that scale with the business.",
  },
];

 const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/part-time-finance-team/#faq",
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

const PartTimeFinanceTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Part-Time Finance Team Singapore | Affordable Finance Support"
        description="Access part-time finance professionals for reporting, accounting, forecasting, and financial operations."
        keywords="part-time finance team, outsourced finance support, SME finance team"
        canonicalUrl="https://growwthpartners.com/part-time-finance-team"
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
          subtitle="Find answers to common questions about Part-Time Finance services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PartTimeFinanceTeam;
