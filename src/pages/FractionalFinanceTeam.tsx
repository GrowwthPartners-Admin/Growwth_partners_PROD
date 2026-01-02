import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import HeroSection from "@/components/fractionalFinanceTeam/HeroSection";
import WhatIsSection from "@/components/fractionalFinanceTeam/WhatIsSection";
import WhoShouldUseSection from "@/components/fractionalFinanceTeam/WhoShouldUseSection";
import ChallengesSection from "@/components/fractionalFinanceTeam/ChallengesSection";
import HowWeDeliverSection from "@/components/fractionalFinanceTeam/HowWeDeliverSection";
import WhyChooseSection from "@/components/fractionalFinanceTeam/WhyChooseSection";
import UseCaseSection from "@/components/fractionalFinanceTeam/UseCaseSection";
import CTASection from "@/components/fractionalFinanceTeam/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";
import SEOhelper from "@/components/SEOhelper";

const faqs = [
  {
    question: "How is a Fractional Finance Team different from a Part-Time Finance Team?",
    answer: "A Fractional Finance Team focuses more on analysis, forecasting, and controls, while Part-Time Finance Teams focus primarily on execution and day-to-day finance tasks."
  },
  {
    question: "Can this service support fundraising or expansion?",
    answer: "Yes. Fractional Finance Teams often support modelling, performance analysis, and reporting required for fundraising and strategic initiatives."
  },
  {
    question: "Is this suitable for SMEs?",
    answer: "Yes. It is particularly valuable for SMEs transitioning from basic accounting to structured financial management."
  }
];

const FractionalFinanceTeamPage = () => {
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/fractional-finance-team/#faq",
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
    <Layout>
      <SEOhelper
        title="Fractional Finance Team Singapore | Scalable Finance Operations"
        description="Fractional analysts, controllers, and finance managers to support reporting, operations, and planning."
        keywords="fractional finance team, finance outsourcing Singapore, forecasting support, finance operations"
        canonicalUrl="https://growwthpartners.com/fractional-finance-team"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
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
      </motion.div>
    </Layout>
  );
};

export default FractionalFinanceTeamPage;
