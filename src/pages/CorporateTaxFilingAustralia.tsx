import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/corporateTaxAustralia/HeroSection";
import { WhyChooseSection } from "@/components/corporateTaxAustralia/WhyChooseSection";
import { ServicesSection } from "@/components/corporateTaxAustralia/ServicesSection";
import { WhoWeHelpSection } from "@/components/corporateTaxAustralia/WhoWeHelpSection";
import { ProcessSection } from "@/components/corporateTaxAustralia/ProcessSection";
import { WhyGrowwthSection } from "@/components/corporateTaxAustralia/WhyGrowwthSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";

const CorporateTaxFilingAustralia = () => {
  const faqs = [
    {
      question: "What does corporate tax filing in Australia involve with Growwth Partners?",
      answer: "Corporate tax filing in Australia with Growwth Partners covers taxable income calculation, application of deductions and offsets, preparation of company tax returns, and ATO-compliant lodgement with complete supporting schedules."
    },
    {
      question: "How does Growwth Partners handle late lodgements or ATO notices?",
      answer: "Growwth Partners conducts a rapid compliance review, regularises outstanding filings, manages ATO correspondence, and pursues penalty mitigation where appropriate."
    },
    {
      question: "Does Growwth Partners optimise tax for SMEs in Australia?",
      answer: "Growwth Partners delivers SME-focused tax optimisation by assessing eligibility for small business concessions, aligning expense timing, applying asset write-offs, and advising on structure for improved after-tax outcomes."
    },
    {
      question: "How does Growwth Partners coordinate BAS, PAYG, and FBT with year-end corporate tax filing?",
      answer: "Growwth Partners reconciles BAS and PAYG instalments to the final position, reviews FBT exposure and documentation, and aligns all compliance touchpoints with the year-end company tax return."
    },
    {
      question: "What records does Growwth Partners require for ATO-compliant lodgement?",
      answer: "Growwth Partners typically requests finalised financial statements, fixed-asset schedules, BAS and PAYG records, prior-year returns, key contracts, and relevant supporting documentation."
    },
    {
      question: "Does Growwth Partners support startups, scale-ups, and multi-entity groups?",
      answer: "Growwth Partners supports early-stage companies, growing SMEs, and multi-entity groups with coordinated corporate tax filing in Australia and ongoing business tax compliance."
    },
    {
      question: "What process does Growwth Partners follow for corporate tax filing in Australia?",
      answer: "Growwth Partners follows a five-step process: initial review, computation and planning, ATO lodgement, year-end reporting, and ongoing compliance checkpoints to maintain business tax compliance."
    },
    {
      question: "How can businesses start corporate tax filing with Growwth Partners?",
      answer: "Businesses can begin with a short consultation; Growwth Partners then confirms scope, timelines, and a fixed-fee proposal before proceeding with corporate tax filing in Australia."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/au/corporate-tax-filing-australia/#faq",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/au/corporate-tax-filing-australia/#service",
        name: "Corporate Tax Filing Services in Australia",
        description: "Professional corporate tax filing services for Australian businesses including ATO lodgement, tax planning, and compliance management.",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners"
        },
        areaServed: {
          "@type": "Country",
          name: "Australia"
        }
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
            telephone: "+61 2 8006 2670",
            contactType: "business",
            areaServed: "AU"
          }
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "50 Clarence St",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          postalCode: "2000",
          addressCountry: "AU"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOhelper
        title="Corporate Tax Filing Services in Australia | ATO Compliant | Growwth Partners"
        description="Simplify your corporate tax filing in Australia with Growwth Partners. Get accurate ATO-compliant lodgement, tax optimisation for SMEs, and expert business tax compliance support."
        keywords="corporate tax filing australia, ATO tax filing, business tax compliance australia, company tax return australia, tax lodgement australia, SME tax optimisation"
        canonicalUrl="https://growwthpartners.com/au/corporate-tax-filing-australia"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <WhoWeHelpSection />
        <ProcessSection />
        <WhyGrowwthSection />
        <FaqSection 
          faqs={faqs} 
          subtitle="Find answers to common questions about corporate tax filing in Australia"
        />
        <CtaSection
          title="Simplify Your Corporate Tax Filing Today"
          description="Stay ATO-compliant, reduce risk, and unlock potential savings with expert corporate tax filing support from Growwth Partners Australia."
          primaryButtonText="Book a Free Tax Consultation"
          secondaryButtonText="Speak to a Corporate Tax Specialist"
          backgroundColor="from-[#06C0A9] to-teal-700"
        />
      </motion.div>
    </Layout>
  );
};

export default CorporateTaxFilingAustralia;
