import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/strategicCFO/HeroSection";
import { WhyChooseSection } from "@/components/strategicCFO/WhyChooseSection";
import { ServicesSection } from "@/components/strategicCFO/ServicesSection";
import { WhoWeSupport } from "@/components/strategicCFO/WhoWeSupport";
import { ProcessSection } from "@/components/strategicCFO/ProcessSection";
import { WhyGrowwthSection } from "@/components/strategicCFO/WhyGrowwthSection";
import { LeadershipSection } from "@/components/strategicCFO/LeadershipSection";
import { FAQSection } from "@/components/strategicCFO/FAQSection";
import SEOhelper from "@/components/SEOhelper";

const StrategicCFOPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/part-time-cfo-singapore/#faq",
        name: "Part-Time CFO Services in Singapore - FAQ",
        mainEntity: [
          {
            "@type": "Question",
            name: "What do you mean by part-time CFO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A part-time CFO is a senior finance leader who joins your business in a flexible capacity. You get cash flow control, investor-ready reporting, and planning support without hiring a permanent executive.",
            },
          },
          {
            "@type": "Question",
            name: "How is Part-time CFO different from accounting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Accounting tells you what happened. A CFO tells you what it means and what to do next. We work with leadership on strategy, pricing, spend, hiring, and expansion decisions.",
            },
          },
          {
            "@type": "Question",
            name: "Can Growwth Partners help with fundraising?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We help prepare investor-facing financials, refine your narrative, and support you through diligence so your numbers and story land well with investors.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/part-time-cfo-singapore/#service",
        name: "Part-Time CFO Services in Singapore",
        serviceType: "Part Time CFO Services",
        areaServed: ["Singapore"],
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
        title="CFO Services Singapore | Part-Time CFO & Strategic Finance Support | Growwth Partners"
        description="Growwth Partners provides CFO services Singapore founders and SMEs rely on for cash flow control, investor-ready reporting, and strategic finance leadership without hiring a full-time CFO. Book a free consultation today."
        keywords="part-time cfo singapore, Strategic Finance Support For Singapore Businesses, cfo services singapore, fractional cfo, outsourced cfo singapore"
        canonicalUrl="https://growwthpartners.com/strategic-finance-singapore"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <WhoWeSupport />
        <ProcessSection />
        <WhyGrowwthSection />
        <LeadershipSection />
        <FAQSection />
      </motion.div>
    </Layout>
  );
};

export default StrategicCFOPage;
