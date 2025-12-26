import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/startupCfo/HeroSection";
import WhatIsSection from "@/components/startupCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/startupCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/startupCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/startupCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/startupCfo/WhyChooseSection";
import UseCaseSection from "@/components/startupCfo/UseCaseSection";
import CTASection from "@/components/startupCfo/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";


const faqs = [
  {
    question: "Do startups really need a CFO early?",
    answer: "Yes. CFO-level planning improves cash discipline, reduces risk, and significantly improves fundraising outcomes. Early financial leadership helps founders make better decisions and build investor confidence."
  },
  {
    question: "How is a Startup CFO different from a regular CFO?",
    answer: "A Startup CFO focuses on growth metrics, fundraising, and runway management rather than mature-company operations. They understand the unique challenges of early-stage companies and investor expectations."
  },
  {
    question: "Is Startup CFO support affordable for early-stage startups?",
    answer: "Yes. Fractional and virtual models make CFO expertise accessible without full-time hiring costs. You get senior-level financial leadership at a fraction of the cost of a full-time CFO."
  }
];

const StartupCfoServices = () => {
  const { pathname } = useLocation();

  // Determine location based on URL path
  const getLocationInfo = () => {
    if (pathname.includes("/uae")) {
      return { location: "UAE", country: "UAE" };
    } else if (pathname.includes("/au")) {
      return { location: "Australia", country: "Australia" };
    }
    return { location: "Singapore", country: "Singapore" };
  };

  const { location } = getLocationInfo();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/startup-cfo-services/#faq",
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
        title={`Startup CFO Services in ${location} | Fundraising & Growth Strategy`}
        description="CFO services for startups including modelling, investor reporting, cash burn control, and financial systems setup."
        keywords="startup CFO Singapore, financial modelling for startups, startup reporting, investor support"
        canonicalUrl="https://growwthpartners.com/startup-cfo-services"
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
          subtitle="Find answers to common questions about our Startup CFO Services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default StartupCfoServices;
