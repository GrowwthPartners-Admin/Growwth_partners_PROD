import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";
import { HeroSection } from "@/components/esop/HeroSection";
import { BenefitsSection } from "@/components/esop/BenefitsSection";
import { TailoredServicesSection } from "@/components/esop/TailoredServicesSection";
import { PricingTableSection } from "@/components/esop/PricingTableSection";
import { PremiumAddOnsSection } from "@/components/esop/PremiumAddOnsSection";
import { ClientsSection } from "@/components/esop/ClientsSection";
import { BusinessSolutionsSection } from "@/components/esop/BusinessSolutionsSection";
import { BlogSection } from "@/components/esop/BlogSection";
import { FaqSection } from "@/components/accounting/FaqSection";

const EsopAdvisorySingapore = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const faqs = [
    {
      question: "How can an ESOP benefit my company's growth strategy?",
      answer: "ESOPs align employee interests with company success, fostering motivation and commitment that drive sustainable growth."
    },
    {
      question: "What industries benefit the most from implementing ESOPs?",
      answer: "ESOPs work well across sectors, but technology, professional services, and high-growth Singapore startups gain strong advantages."
    },
    {
      question: "How does employee participation in ESOPs impact company culture?",
      answer: "ESOPs create a culture of ownership, collaboration, and shared success, enhancing overall work environment and job satisfaction."
    },
    {
      question: "Are there tax benefits associated with implementing an ESOP?",
      answer: "Yes, ESOPs can offer tax advantages for both the company and employees. Our tax advisory team can guide you through Singapore's specific rules."
    },
    {
      question: "What is the typical timeframe for implementing an ESOP?",
      answer: "Timelines vary but usually take a few weeks. Our team ensures a smooth, efficient, and compliant rollout tailored to Singapore regulations."
    },
    {
      question: "How does Growwth's ESOP advisory stand out?",
      answer: "Growwth offers tailored solutions, global expertise, and a proven methodology across Singapore and APAC, ensuring strategic alignment and compliance."
    },
    {
      question: "What ongoing support does Growwth provide after ESOP implementation?",
      answer: "We offer continuous support including administration, performance analysis, and additional add-on services to enhance long-term ESOP success."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/esop-advisory-singapore/#faq",
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
        title="ESOP Advisory Services in Singapore | Expert Startup ESOP Support"
        description="Get expert ESOP advisory services in Singapore. We help startups design, structure, and implement employee stock option plans that attract and retain top talent."
        keywords="esop advisory singapore, employee stock options singapore, esop consulting singapore, esop planning for startups, esop implementation singapore"
        canonicalUrl="https://growwthpartners.com/esop-advisory-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection onEnquireClick={() => setContactModalOpen(true)} />
        <BenefitsSection />
        <TailoredServicesSection />
        <PricingTableSection />
        <PremiumAddOnsSection />
        <ClientsSection />
        <section className="py-20 bg-secondary/5">
          <div className="container-custom">
            <FaqSection faqs={faqs} />
          </div>
        </section>
        <BusinessSolutionsSection />
        <BlogSection />
      </motion.div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default EsopAdvisorySingapore;
