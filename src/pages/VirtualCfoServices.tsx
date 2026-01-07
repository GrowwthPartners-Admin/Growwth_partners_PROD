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
import FaqSection from "@/components/virtualCfo/FaqSection";
import CTASection from "@/components/virtualCfo/CTASection";

const VirtualCfoServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/virtual-cfo-services/#service",
        name: "Virtual CFO Services",
        serviceType: "Virtual CFO Services",
        description: "Growwth Partners offers Virtual CFO services in Singapore for startups and SMEs. Get expert financial strategy, cash flow management, and reporting at a fraction of a full-time CFO cost.",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        provider: {
          "@id": "https://growwthpartners.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/virtual-cfo-services/#faq",
        name: "Virtual CFO Services - FAQ",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does a Virtual CFO do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Virtual CFO manages financial strategy, forecasting, cash flow, reporting, and investor support without being a full-time employee.",
            },
          },
          {
            "@type": "Question",
            name: "Is a Virtual CFO suitable for SMEs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Virtual CFO services are ideal for SMEs that need senior financial leadership without full-time hiring costs.",
            },
          },
          {
            "@type": "Question",
            name: "How much do Virtual CFO services cost in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Costs vary based on complexity and scope but are significantly lower than hiring a full-time CFO.",
            },
          },
        ],
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
        <FaqSection />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default VirtualCfoServices;