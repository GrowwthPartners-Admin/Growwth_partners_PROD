import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/partTimeCfoServices/HeroSection";
import WhatIsSection from "@/components/partTimeCfoServices/WhatIsSection";
import WhoShouldUseSection from "@/components/partTimeCfoServices/WhoShouldUseSection";
import ChallengesSection from "@/components/partTimeCfoServices/ChallengesSection";
import HowWeDeliverSection from "@/components/partTimeCfoServices/HowWeDeliverSection";
import WhyChooseSection from "@/components/partTimeCfoServices/WhyChooseSection";
import UseCaseSection from "@/components/partTimeCfoServices/UseCaseSection";
import CTASection from "@/components/partTimeCfoServices/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "What is the difference between a Part-Time CFO and a Fractional CFO?",
    answer: "A Part-Time CFO provides regular, scheduled involvement, while a Fractional CFO may have deeper strategic involvement across multiple areas. Both deliver CFO-level expertise without full-time hiring."
  },
  {
    question: "How many days does a Part-Time CFO typically work?",
    answer: "Engagements are flexible and usually range from a few days per month to weekly involvement, depending on business complexity."
  },
  {
    question: "Is a Part-Time CFO suitable for SMEs?",
    answer: "Yes. Part-Time CFO services are ideal for SMEs that need senior financial oversight without the cost of a full-time CFO."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/part-time-cfo-services/#faq",
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
      "@id": "https://growwthpartners.com/part-time-cfo-services/#service",
      name: "Part-Time CFO Services",
      serviceType: "Part-Time CFO Services",
      description: "Flexible part-time CFO support for strategy, budgeting, forecasting, and reporting for startups and SMEs.",
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

const PartTimeCfoServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Part-Time CFO Services in Singapore | Flexible Strategic Finance Support"
        description="Flexible part-time CFO support for strategy, budgeting, forecasting, and reporting for startups and SMEs."
        keywords="part-time CFO Singapore, hire part-time CFO, outsourced CFO services, SME CFO services, strategic finance Singapore"
        canonicalUrl="https://growwthpartners.com/part-time-cfo-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about Part-Time CFO services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PartTimeCfoServices;
