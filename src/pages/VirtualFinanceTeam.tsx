import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import HeroSection from "@/components/virtualFinanceTeam/HeroSection";
import WhatIsSection from "@/components/virtualFinanceTeam/WhatIsSection";
import WhoShouldUseSection from "@/components/virtualFinanceTeam/WhoShouldUseSection";
import ChallengesSection from "@/components/virtualFinanceTeam/ChallengesSection";
import HowWeDeliverSection from "@/components/virtualFinanceTeam/HowWeDeliverSection";
import WhyChooseSection from "@/components/virtualFinanceTeam/WhyChooseSection";
import UseCaseSection from "@/components/virtualFinanceTeam/UseCaseSection";
import CTASection from "@/components/virtualFinanceTeam/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";
import SEOhelper from "@/components/SEOhelper";

const faqs = [
  {
    question: "How is a Virtual Finance Team different from outsourcing accounting?",
    answer: "A Virtual Finance Team provides continuous, integrated support with clear ownership, rather than isolated or task-based outsourcing."
  },
  {
    question: "Can Virtual Finance Teams support growing transaction volumes?",
    answer: "Yes. Virtual Finance Teams scale efficiently as transaction volume and complexity increase."
  },
  {
    question: "Is data security maintained with a Virtual Finance Team?",
    answer: "Yes. Secure cloud systems and access controls ensure data integrity and confidentiality."
  }
];

const VirtualFinanceTeamPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/virtual-finance-team/#faq",
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
        title="Virtual Finance Team Singapore | Data-Driven Finance Workflows"
        description="Virtual finance teams leveraging cloud and AI tools to streamline accounting, reporting, and forecasting."
        keywords="virtual finance team, cloud accounting team, remote bookkeeping, finance automation"
        canonicalUrl="https://growwthpartners.com/virtual-finance-team"
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
          subtitle="Find answers to common questions about our Virtual Finance Team Services"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default VirtualFinanceTeamPage;
