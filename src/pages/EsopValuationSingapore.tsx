import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";
import { HeroSection } from "@/components/esopValuation/HeroSection";
import { WhatIsSection } from "@/components/esopValuation/WhatIsSection";
import { WhyMattersSection } from "@/components/esopValuation/WhyMattersSection";
import { ServicesIncludeSection } from "@/components/esopValuation/ServicesIncludeSection";
import { MethodologySection } from "@/components/esopValuation/MethodologySection";
import { WhyChooseSection } from "@/components/esopValuation/WhyChooseSection";
import { ClientsSection } from "@/components/esop/ClientsSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { BusinessSolutionsSection } from "@/components/esopValuation/BusinessSolutionsSection";
import { ExploreServicesSection } from "@/components/esopValuation/ExploreServicesSection";

const EsopValuationSingapore = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const faqs = [
    {
      question: "Why do Singapore companies need ESOP valuation?",
      answer: "They need it to determine the fair market value ESOP, price options correctly, and stay compliant with accounting and tax expectations."
    },
    {
      question: "How is ESOP share valuation done for startups?",
      answer: "It is calculated using methods like DCF modelling, comparing similar companies, and reviewing revenue projections. This ensures a reliable startup ESOP value calculation."
    },
    {
      question: "How often should ESOP valuation be updated?",
      answer: "Most companies update it annually or before major rounds like pre-seed, seed, or Series A."
    },
    {
      question: "Who performs ESOP valuation?",
      answer: "It should be done by independent ESOP valuation experts to avoid bias and ensure compliance."
    },
    {
      question: "Will ESOP valuation affect fundraising?",
      answer: "Yes. Investors prefer companies with clear pre-money and post-money valuation data and clean cap tables."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/esop-valuation-singapore/#faq",
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
        title="ESOP Valuation Services Singapore | Independent FMV Reports"
        description="Accurate and independent ESOP valuation services in Singapore. We provide FMV reports, cap table analysis, financial modelling, and annual valuation support."
        keywords="esop valuation singapore, fair market value esop, esop share valuation, startup esop value calculation, independent esop valuation"
        canonicalUrl="https://growwthpartners.com/esop-valuation-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection onEnquireClick={() => setContactModalOpen(true)} />
        <WhatIsSection onEnquireClick={() => setContactModalOpen(true)} />
        <WhyMattersSection />
        <ServicesIncludeSection />
        <MethodologySection />
        <WhyChooseSection />
        <ClientsSection />
        <section className="py-20 bg-secondary/5">
          <div className="container-custom">
            <FaqSection faqs={faqs} />
          </div>
        </section>
        <BusinessSolutionsSection />
        <ExploreServicesSection />
      </motion.div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default EsopValuationSingapore;
