import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/virtualCfo/HeroSection";
import WhatIsSection from "@/components/virtualCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/virtualCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/virtualCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/virtualCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/virtualCfo/WhyChooseSection";
import UseCaseSection from "@/components/virtualCfo/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";

import CTASection from "@/components/virtualCfo/CTASection";

const faqs = [
  {
    question: "What does a Virtual CFO do?",
    answer:
      "A Virtual CFO manages financial strategy, forecasting, cash flow, reporting, and investor support without being a full-time employee. They provide executive-level financial leadership remotely, helping businesses make informed decisions and achieve their growth objectives.",
  },
  {
    question: "Is a Virtual CFO suitable for SMEs?",
    answer:
      "Yes. Virtual CFO services are ideal for SMEs that need senior financial leadership without full-time hiring costs. This model provides access to experienced CFO expertise at a fraction of the cost, making strategic financial guidance accessible to growing businesses.",
  },
  {
    question: "How much do Virtual CFO services cost in Singapore?",
    answer:
      "Costs vary based on complexity and scope but are significantly lower than hiring a full-time CFO. Engagements are typically structured based on the level of involvement needed, ranging from a few days per month to more intensive support during critical periods like fundraising.",
  },
];

const VirtualCfoServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/virtual-cfo-services/#faq",
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
        title="Virtual CFO Services in Singapore | Scalable, Strategic Financial Leadership"
        description="Growwth Partners offers Virtual CFO services in Singapore for startups and SMEs. Get expert financial strategy, cash flow management, and reporting at a fraction of a full-time CFO cost."
        keywords="virtual CFO services Singapore, remote CFO Singapore, outsourced CFO Singapore, part-time CFO Singapore, hire virtual CFO"
        canonicalUrl="https://growwthpartners.com/virtual-cfo-services"
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
          subtitle="Common questions about our Virtual CFO services"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default VirtualCfoServices;
