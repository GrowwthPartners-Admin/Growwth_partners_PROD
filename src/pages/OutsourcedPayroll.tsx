import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/outsourcedPayroll/HeroSection";
import { WhatIsSection } from "@/components/outsourcedPayroll/WhatIsSection";
import { WhoShouldUseSection } from "@/components/outsourcedPayroll/WhoShouldUseSection";
import { ChallengesSection } from "@/components/outsourcedPayroll/ChallengesSection";
import { HowWeDeliverSection } from "@/components/outsourcedPayroll/HowWeDeliverSection";
import { WhyChooseSection } from "@/components/outsourcedPayroll/WhyChooseSection";
import { UseCaseSection } from "@/components/outsourcedPayroll/UseCaseSection";
import { FAQSection } from "@/components/outsourcedPayroll/FAQSection";
import { CTASection } from "@/components/outsourcedPayroll/CTASection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const OutsourcedPayrollPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/outsourced-payroll/#service",
        name: "Outsourced Payroll Services in Singapore",
        description: "Accurate, compliant, and on-time payroll services delivered through structured processes and experienced professionals.",
        serviceType: "Outsourced Payroll Services",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
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
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Chulia Street",
          addressLocality: "Singapore",
          postalCode: "049513",
          addressCountry: "SG",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/outsourced-payroll/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is outsourced payroll compliant with Singapore regulations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Outsourced payroll services are designed to ensure full compliance with Singapore statutory and employment requirements."
            }
          },
          {
            "@type": "Question",
            name: "Can outsourced payroll scale as my team grows?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Payroll services scale seamlessly with employee count and complexity."
            }
          },
          {
            "@type": "Question",
            name: "Will I still have visibility into payroll data?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You receive detailed payroll reports, summaries, and documentation every cycle."
            }
          }
        ]
      }
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
        <FAQSection />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default OutsourcedPayrollPage;
