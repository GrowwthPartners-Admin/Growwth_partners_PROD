import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/techStartupAccounting/HeroSection";
import { WhyChooseSection } from "@/components/techStartupAccounting/WhyChooseSection";
import { WhatYouGetSection } from "@/components/techStartupAccounting/WhatYouGetSection";
import { PlatformSetupSection } from "@/components/techStartupAccounting/PlatformSetupSection";
import { DeliveryModelSection } from "@/components/techStartupAccounting/DeliveryModelSection";
import { AddOnServicesSection } from "@/components/techStartupAccounting/AddOnServicesSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CTASection } from "@/components/techStartupAccounting/CTASection";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const faqs = [
  {
    question:
      "How does Growwth Partners differ from a traditional accounting firm?",
    answer:
      "Growwth Partners is founder-led with a fintech and SaaS background. The team designs accounting that supports growth, fundraising, and product cycles, then uses Ryzup.ai to automate checks and speed up reporting.",
  },
  {
    question: "What revenue models can Growwth Partners support?",
    answer:
      "Subscriptions, usage-based pricing, tiered enterprise plans, and milestone or hybrid models. Policies and workflows ensure correct deferrals and recognition.",
  },
  {
    question: "How are metrics like MRR, ARR, churn, and NRR reported?",
    answer:
      "Metrics are defined upfront, tracked monthly, and included in management packs with cohort and plan-level views that investors recognise.",
  },
  {
    question: "Does Growwth Partners replace spreadsheets?",
    answer:
      "No. Teams keep familiar tools. Ryzup.ai runs inside your environment to automate error detection, reconciliations, and report generation.",
  },
  {
    question: "How quickly can a startup get set up?",
    answer:
      "Most teams complete assessment and design in the first weeks, then transition to a steady monthly close with clear KPIs and commentary.",
  },
  {
    question: "Can Growwth Partners handle multi-entity and multi-currency?",
    answer:
      "Yes. The team maintains group structures, intercompany workflows, and consolidated reporting across currencies and regions.",
  },
];

const TechStartupAccounting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/accounting-for-tech-start-ups-companies/#faq",
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
        title="Accounting for Tech Startups and Companies | Growwth Partners"
        description="Expert accounting for tech startups and SaaS companies led by a fintech founder. Simplify compliance, improve financial clarity, and scale with investor-ready reporting"
        keywords="accounting for tech startups, tech company bookkeeping, SaaS accounting services, startup financial management, accounting for tech companies"
        canonicalUrl="https://growwthpartners.com/accounting-for-tech-start-ups-companies"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <PlatformSetupSection />
        <DeliveryModelSection />
        <AddOnServicesSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about our tech startup accounting services"
        />
      </motion.div>
    </Layout>
  );
};

export default TechStartupAccounting;
