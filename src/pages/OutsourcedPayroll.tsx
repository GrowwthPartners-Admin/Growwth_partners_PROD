import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/outsourcedPayroll/HeroSection";
import { WhatIsSection } from "@/components/outsourcedPayroll/WhatIsSection";
import { WhoShouldUseSection } from "@/components/outsourcedPayroll/WhoShouldUseSection";
import { ChallengesSection } from "@/components/outsourcedPayroll/ChallengesSection";
import { HowWeDeliverSection } from "@/components/outsourcedPayroll/HowWeDeliverSection";
import { WhyChooseSection } from "@/components/outsourcedPayroll/WhyChooseSection";
import { UseCaseSection } from "@/components/outsourcedPayroll/UseCaseSection";
import { CTASection } from "@/components/outsourcedPayroll/CTASection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "Is outsourced payroll compliant with Singapore regulations?",
    answer:
      "Yes. Outsourced payroll services are designed to ensure full compliance with Singapore statutory and employment requirements.",
  },
  {
    question: "Can outsourced payroll scale as my team grows?",
    answer:
      "Yes. Payroll services scale seamlessly with employee count and complexity.",
  },
  {
    question: "Will I still have visibility into payroll data?",
    answer:
      "Yes. You receive detailed payroll reports, summaries, and documentation every cycle.",
  },
];

const OutsourcedPayrollPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/outsourced-bookkeeping/#faq",
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
        "@id": "https://growwthpartners.com/outsourced-payroll/#service",
        name: "Outsourced Bookkeeping Services Singapore",
        serviceType: "Bookkeeping Services",
        description:
          "Monthly bookkeeping, reconciliations, expense tracking, and closing delivered by an expert team.",
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

  return (
    <Layout>
      <SEOhelper
        title="Payroll Outsourcing Singapore | Reliable & Compliant Payroll"
        description="Outsourced payroll processing, IRAS compliance, employee payouts, and monthly reporting."
        keywords="payroll outsourcing Singapore, payroll services Singapore, payroll compliance"
        canonicalUrl="https://growwthpartners.com/outsourced-payroll"
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
          subtitle="Find answers to common questions about Outsourced payroll services"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default OutsourcedPayrollPage;
