import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/corporatetax/HeroSection";
import { SimplifiedSection } from "@/components/corporatetax/SimplifiedSection";
import { ServicesSection } from "@/components/corporatetax/ServicesSection";
import { WhoItsForSection } from "@/components/corporatetax/WhoItsForSection";
import { ProcessSection } from "@/components/corporatetax/ProcessSection";
import { WhyChooseSection } from "@/components/corporatetax/WhyChooseSection";
import { FaqSection } from "@/components/corporatetax/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";

const CorporateTaxFiling = () => {
    const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/corporate-tax-filing-singapore/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is included in your corporate tax services in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Growwth Partners provides full corporate tax services in Singapore that include tax computation, preparation and filing of Form C / Form C-S, IRAS e-filing, response support for IRAS queries, and tax planning advice for future years.",
            },
          },
          {
            "@type": "Question",
            name: "Can Growwth Partners help if my company has missed previous tax deadlines?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Growwth Partners can review your current position, help you regularise past filings, and work out a clean path forward. The sooner you address it, the easier it is to manage IRAS communication and potential penalties.",
            },
          },
          {
            "@type": "Question",
            name: "Can Growwth Partners help reduce my corporate tax legally?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Growwth Partners reviews your business for eligible deductions, reliefs, and exemptions within IRAS rules. The goal is to keep you fully compliant while ensuring you do not pay more tax than required.",
            },
          },
          {
            "@type": "Question",
            name: "Is your service suitable for small companies and startups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Many smaller companies and startups benefit from structured corporate tax filing in Singapore, especially if there is no internal finance team. You get professional quality without hiring in house.",
            },
          },
        ],
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
        title="Corporate Tax Filing Services in Singapore | Growwth Partners"
        description=" Simplify your corporate tax filing in Singapore with Growwth Partners. Get accurate tax computation, IRAS compliant filing, and proactive tax planning to maximise savings and avoid penalties."
        keywords="corporate tax filing singapore, corporate tax services singapore, IRAS tax filing, tax computation singapore, corporate tax compliance"
        canonicalUrl="https://growwthpartners.com/corporate-tax-filing-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <SimplifiedSection />
        <ServicesSection />
        <WhoItsForSection />
        <ProcessSection />
        <WhyChooseSection />
        <FaqSection />
        <CtaSection
          title="Make Corporate Tax Filing One Less Thing To Worry About"
          description="Stay compliant, reduce risk, and unlock potential savings with expert corporate tax filing in Singapore support from Growwth Partners."
          primaryButtonText="Book a Free Tax Consultation"
          secondaryButtonText="Talk to a Corporate Tax Expert"
        />
      </motion.div>
    </Layout>
  );
};

export default CorporateTaxFiling;
