import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/interimCfo/HeroSection";
import WhatIsSection from "@/components/interimCfo/WhatIsSection";
import WhenNeededSection from "@/components/interimCfo/WhenNeededSection";
import ChallengesSection from "@/components/interimCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/interimCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/interimCfo/WhyChooseSection";
import UseCaseSection from "@/components/interimCfo/UseCaseSection";
import FaqSection from "@/components/interimCfo/FaqSection";
import CTASection from "@/components/interimCfo/CTASection";

const InterimCfoServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interim CFO Services",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "description": "Expert interim CFO support during leadership gaps, restructuring, mergers, or transitions.",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "serviceType": "Interim CFO Services"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does an Interim CFO engagement last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engagements typically range from a few months to one year, depending on business needs and transition complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Is an Interim CFO involved in daily operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Interim CFOs take full ownership of finance leadership, including team oversight and operational decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "Can an Interim CFO help during audits or due diligence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Interim CFOs frequently support audits, regulatory reviews, and investor due diligence processes."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Interim CFO Services in Singapore | Leadership Through Transition"
        description="Expert interim CFO support during leadership gaps, restructuring, mergers, or transitions."
        keywords="interim CFO Singapore, temporary CFO, CFO replacement, transition finance leadership"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhenNeededSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default InterimCfoServices;
