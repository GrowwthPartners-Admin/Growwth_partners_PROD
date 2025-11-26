import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/partTimeCFO/HeroSection";
import FinancialInsights from "@/components/partTimeCFO/FinancialInsights";
import ServiceOverview from "@/components/partTimeCFO/ServiceOverview";
import WorkProcess from "@/components/partTimeCFO/WorkProcess";
import ExpertForm from "@/components/partTimeCFO/ExpertForm";
import CaseStudySection from "@/components/partTimeCFO/CaseStudySection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import CTASection from "@/components/partTimeCFO/CTASection";
import FAQAccordion from "@/components/partTimeCFO/FAQAccordion";
import SEOhelper from "@/components/SEOhelper";

const FractionalCFOPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/part-time-cfo-services/#faq",
        name: "Part-Time CFO Services - FAQ",
        mainEntity: [
          {
            "@type": "Question",
            name: "What's the difference between a part-time CFO and a full-time CFO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A part-time or fractional CFO offers strategic financial expertise without the cost of a full-time hire. You only pay for the support you need—making it ideal for startups and SMEs.",
            },
          },
          {
            "@type": "Question",
            name: "Is a CFO necessary if I already have an accountant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Accountants handle compliance and historical data. CFOs look forward—helping with planning, strategy, investor relations, and growth decisions.",
            },
          },
          {
            "@type": "Question",
            name: "Are your virtual CFOs based in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our CFOs have deep local expertise and work with companies across Singapore and Southeast Asia.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/part-time-cfo-services/#service",
        name: "Part-Time CFO Services",
        serviceType: "Part Time CFO Services",
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
        title="Fractional & Part-Time CFO Services in Singapore | Growwth Partners"
        description="Explore fractional, part-time, and virtual CFO services in Singapore. Strengthen financial strategy, optimise cash flow, and drive data-driven growth."
        keywords="virtual cfo, singapore cfo, financial strategy, fractional leadership"
        canonicalUrl="https://growwthpartners.com/part-time-cfo"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <FinancialInsights />
        <ServiceOverview />
        <WorkProcess />
        <CaseStudySection />
        <ContactTestimonials />
        <CTASection />
        <FAQAccordion />
      </motion.div>
    </Layout>
  );
};

export default FractionalCFOPage;
