import SEOhelper from "@/components/SEOhelper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/fractionalCfo/HeroSection";
import WhatIsSection from "@/components/fractionalCfo/WhatIsSection";
import WhenNeededSection from "@/components/fractionalCfo/WhenNeededSection";
import ChallengesSection from "@/components/fractionalCfo/ChallengesSection";
import ScopeOfWorkSection from "@/components/fractionalCfo/ScopeOfWorkSection";
import WhyFractionalSection from "@/components/fractionalCfo/WhyFractionalSection";
import UseCaseSection from "@/components/fractionalCfo/UseCaseSection";
import CTASection from "@/components/fractionalCfo/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const FractionalCfoServices = () => {
  const faqs = [
    {
      question: "What is the difference between a Fractional CFO and a Part-Time CFO?",
      answer: "A Fractional CFO typically has deeper strategic involvement across multiple areas and may work with several clients, while a Part-Time CFO provides regular, scheduled involvement focused on your business. Both deliver CFO-level expertise without full-time hiring."
    },
    {
      question: "How is a Fractional CFO different from an accountant?",
      answer: "An accountant focuses on historical financial data, compliance, and bookkeeping. A Fractional CFO focuses on forward-looking financial strategy, cash flow management, forecasting, investor relations, and strategic decision-making."
    },
    {
      question: "What size business benefits most from Fractional CFO services?",
      answer: "Fractional CFO services are ideal for startups and SMEs with revenues between SGD 1M to SGD 50M who need strategic financial leadership but aren't ready for a full-time CFO hire."
    }
  ];

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/fractional-cfo-services/#faq",
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
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Fractional CFO Services in Singapore | Flexible, Expert Financial Leadership"
        description="Growwth Partners provides Fractional CFO services for startups and SMEs. Expert strategy, forecasting, reporting, and investor support—flexible and cost-efficient."
        keywords="fractional CFO services Singapore, hire fractional CFO, part-time CFO Singapore, outsourced CFO Singapore, strategic finance support"
        canonicalUrl="https://growwthpartners.com/fractional-cfo-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhenNeededSection />
        <ChallengesSection />
        <ScopeOfWorkSection />
        <WhyFractionalSection />
        <UseCaseSection />
        <FaqSection 
          faqs={faqs}
          subtitle="Common questions about our Fractional CFO services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FractionalCfoServices;
